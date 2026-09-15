import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { EASE_EXPO } from '../../lib/motion'
import { publicUrl } from '../../lib/profile'
import { ICONS } from '../ui/icons'

/**
 * Las dos versiones de la hoja de vida.
 *
 * Basta con dejar cada PDF en `public/cv/` con el nombre indicado: **la opción
 * aparece sola en cuanto el archivo existe**. No hay que tocar este archivo.
 *
 * El componente comprueba al cargar cuáles están de verdad publicados y oculta
 * los que falten, para no ofrecer nunca una descarga que daría 404.
 */
const ARCHIVOS = [
  {
    id: 'standard',
    archivo: 'cv/Jhon-Garcia-CV.pdf',
    // Nombre con el que se guarda en el equipo de quien lo descarga.
    nombreDescarga: 'Jhon Garcia - CV.pdf',
  },
  {
    id: 'ats',
    archivo: 'cv/Jhon-Garcia-CV-ATS.pdf',
    nombreDescarga: 'Jhon Garcia - CV (ATS).pdf',
  },
]

/**
 * Botón flotante para descargar la hoja de vida.
 *
 * **Cambia de esquina según el desplazamiento.** Arriba del todo vive en la
 * esquina inferior derecha; al pasar de 600px aparece el botón de «volver
 * arriba» y este se traslada a la esquina superior derecha, bajo el encabezado,
 * para no disputarle el sitio.
 *
 * El desplegable se abre hacia donde haya hueco: hacia arriba cuando está
 * abajo, hacia abajo cuando está arriba.
 */
export function ResumeDownload() {
  const { t } = useTranslation()
  const [abierto, setAbierto] = useState(false)
  const [disponibles, setDisponibles] = useState([])
  const contenedor = useRef(null)
  const arriba = useScrolledPast(600)

  // Se pregunta por cada PDF y solo se ofrecen los que existen de verdad. Así
  // basta con subir un archivo para que su opción aparezca, y si falta no se
  // publica un enlace roto.
  //
  // No basta con mirar el código de estado: ante una ruta desconocida, tanto el
  // servidor de desarrollo como muchos alojamientos estáticos devuelven 200 con
  // el `index.html` de la aplicación. Lo que distingue a un PDF de verdad es su
  // tipo de contenido.
  useEffect(() => {
    let cancelado = false

    const existe = async (item) => {
      try {
        const respuesta = await fetch(publicUrl(item.archivo), { method: 'HEAD' })
        if (!respuesta.ok) return null
        const tipo = respuesta.headers.get('content-type') ?? ''
        // Sin cabecera de tipo no se puede distinguir; se confía en el estado.
        return !tipo || tipo.includes('pdf') ? item : null
      } catch {
        return null
      }
    }

    Promise.all(ARCHIVOS.map(existe)).then((resultado) => {
      if (!cancelado) setDisponibles(resultado.filter(Boolean))
    })

    return () => {
      cancelado = true
    }
  }, [])

  // Al cambiar de esquina se cierra: un menú abierto que se teletransporta
  // mientras se hace scroll resulta desconcertante.
  //
  // Se ajusta durante el render en lugar de con un efecto. Es el patrón que
  // recomienda React para reaccionar a un cambio de valor: evita el render
  // intermedio con el menú abierto en la posición equivocada.
  const [esquinaPrevia, setEsquinaPrevia] = useState(arriba)
  if (esquinaPrevia !== arriba) {
    setEsquinaPrevia(arriba)
    setAbierto(false)
  }

  // Se cierra al pulsar fuera o con Escape, como cualquier menú.
  useEffect(() => {
    if (!abierto) return undefined

    const fuera = (evento) => {
      if (!contenedor.current?.contains(evento.target)) setAbierto(false)
    }
    const escape = (evento) => {
      if (evento.key === 'Escape') setAbierto(false)
    }

    document.addEventListener('pointerdown', fuera)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', fuera)
      document.removeEventListener('keydown', escape)
    }
  }, [abierto])

  // Sin ningún PDF publicado no hay nada que ofrecer.
  if (disponibles.length === 0) return null

  // Bajo el encabezado (h-16 / md:h-18) cuando está arriba; sobre el borde
  // inferior cuando está abajo.
  const posicion = arriba
    ? 'top-20 md:top-[5.5rem]'
    : 'bottom-5 md:bottom-8'

  return (
    <motion.div
      ref={contenedor}
      // La `key` fuerza un remontaje al cambiar de esquina, de modo que el
      // botón aparece con una transición en su nuevo sitio en lugar de saltar.
      key={arriba ? 'superior' : 'inferior'}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: EASE_EXPO }}
      className={`fixed right-5 z-40 flex items-end gap-2 md:right-8 ${posicion} ${
        arriba ? 'flex-col-reverse' : 'flex-col'
      }`}
    >
      <AnimatePresence>
        {abierto ? (
          <motion.ul
            id="descargas-cv"
            initial={{ opacity: 0, y: arriba ? -8 : 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: arriba ? -8 : 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: EASE_EXPO }}
            className="flex flex-col items-end gap-2"
          >
            {disponibles.map((item) => (
              <li key={item.id}>
                <motion.a
                  href={publicUrl(item.archivo)}
                  download={item.nombreDescarga}
                  whileHover={{ scale: 1.02, x: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE_EXPO }}
                  className="flex items-center gap-3 rounded-xl border border-line bg-canvas-elevated/95 py-2.5 pr-3 pl-4 shadow-card backdrop-blur-xl transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover"
                >
                  <span className="flex flex-col items-end">
                    <span className="text-sm font-medium whitespace-nowrap text-ink">
                      {t(`resume.${item.id}`)}
                    </span>
                    <span className="text-[0.6875rem] whitespace-nowrap text-ink-subtle">
                      {t(`resume.${item.id}Note`)}
                    </span>
                  </span>
                  <ICONS.download aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                </motion.a>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-controls="descargas-cv"
        aria-label={abierto ? t('resume.close') : t('resume.open')}
        title={abierto ? t('resume.close') : t('resume.open')}
        whileHover={{ scale: 1.04, y: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25, ease: EASE_EXPO }}
        className="nc-shine flex h-12 items-center gap-2 rounded-full bg-accent px-4 text-white shadow-cta transition-colors duration-200 hover:bg-accent-bright"
      >
        <ICONS.document aria-hidden="true" className="h-5 w-5 shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap">{t('resume.label')}</span>
      </motion.button>
    </motion.div>
  )
}
