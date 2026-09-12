import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../../../components/ui/icons'
import { EASE_EXPO } from '../../../lib/motion'
import { LabCard } from '../LabCard/LabCard'

/**
 * Sub-componente de «Laboratorio»: no tiene contenido propio.
 *
 * El carrusel se apoya en el scroll nativo con `scroll-snap`, no en un
 * carrusel hecho a mano. Así funcionan gratis el arrastre táctil, la rueda del
 * trackpad, el teclado y los lectores de pantalla; los botones y los puntos
 * sólo desplazan ese mismo scroll.
 */
/** Flecha de navegación. Fuera del componente para no recrearla en cada render. */
function BotonFlecha({ hacia, deshabilitado, etiqueta, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={deshabilitado}
      aria-label={etiqueta}
      whileHover={deshabilitado ? undefined : { scale: 1.06, y: -2 }}
      whileTap={deshabilitado ? undefined : { scale: 0.94 }}
      transition={{ duration: 0.2, ease: EASE_EXPO }}
      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-inner-top transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover disabled:pointer-events-none disabled:opacity-35"
    >
      <ICONS.arrowUpRight
        aria-hidden="true"
        className={`h-4 w-4 ${hacia < 0 ? '-rotate-[135deg]' : 'rotate-45'}`}
      />
    </motion.button>
  )
}

export function LabCarousel({ items, proposalLabel, defaultLinkLabel }) {
  const { t } = useTranslation()
  const pista = useRef(null)
  const [activo, setActivo] = useState(0)
  const [limites, setLimites] = useState({ inicio: true, fin: false })

  // Índice de la tarjeta alineada con el borde izquierdo de la pista. Se lee
  // del DOM en cada llamada: así las flechas nunca dependen de un estado
  // desfasado. Se usan rectángulos de pantalla porque `offsetLeft` se mide
  // desde el ancestro posicionado (la <section>), no desde la pista.
  const indiceVisible = useCallback(() => {
    const el = pista.current
    if (!el) return 0

    const referencia = el.getBoundingClientRect().left + 1
    let mejor = 0
    let menorDistancia = Infinity

    Array.from(el.children).forEach((hijo, i) => {
      const distancia = Math.abs(hijo.getBoundingClientRect().left - referencia)
      if (distancia < menorDistancia) {
        menorDistancia = distancia
        mejor = i
      }
    })

    return mejor
  }, [])

  // Actualiza el punto marcado y el estado de las flechas.
  const alDesplazar = useCallback(() => {
    const el = pista.current
    if (!el) return

    const enElFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    // Al final de la pista se marca el último punto: si no, con varias tarjetas
    // visibles el punto se quedaría en la primera de ellas y nunca llegaría al
    // final, aunque la última tarjeta estuviera a la vista.
    setActivo(enElFinal ? el.children.length - 1 : indiceVisible())
    setLimites({
      inicio: el.scrollLeft <= 8,
      fin: enElFinal,
    })
  }, [indiceVisible])

  useEffect(() => {
    const el = pista.current
    if (!el) return
    alDesplazar()
    el.addEventListener('scroll', alDesplazar, { passive: true })
    window.addEventListener('resize', alDesplazar)
    return () => {
      el.removeEventListener('scroll', alDesplazar)
      window.removeEventListener('resize', alDesplazar)
    }
  }, [alDesplazar, items.length])

  const irA = useCallback((indice) => {
    const el = pista.current
    if (!el) return
    const destino = el.children[Math.max(0, Math.min(indice, el.children.length - 1))]
    if (!destino) return

    // `offsetLeft` de ambos se mide desde el mismo ancestro posicionado, así
    // que su diferencia da la posición de la tarjeta dentro de la pista. Se le
    // resta el relleno lateral para que la primera quede en scroll 0.
    const relleno = parseFloat(getComputedStyle(el).paddingLeft) || 0

    // Se asigna `scrollLeft` en vez de usar `scrollTo`: en un contenedor con
    // scroll-snap, `scrollTo` se cancela de forma intermitente. La animación la
    // pone el `scroll-behavior: smooth` de la hoja de estilos, que además se
    // desactiva solo con `prefers-reduced-motion`.
    el.scrollLeft = destino.offsetLeft - el.offsetLeft - relleno
  }, [])

  /** Avanza o retrocede una tarjeta desde la posición real, no desde el estado. */
  const mover = useCallback((delta) => irA(indiceVisible() + delta), [irA, indiceVisible])

  const alPulsarTecla = useCallback(
    (evento) => {
      if (evento.key === 'ArrowRight') {
        evento.preventDefault()
        mover(1)
      } else if (evento.key === 'ArrowLeft') {
        evento.preventDefault()
        mover(-1)
      }
    },
    [mover],
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Pista deslizable */}
      {/* `snap-proximity` y no `snap-mandatory`: el obligatorio vuelve a encajar
          la pista cada vez que algo cambia de tamaño —por ejemplo al cargarse
          una portada— y cancelaba los desplazamientos de los botones. El de
          proximidad conserva la sensación de encaje al arrastrar sin pelearse
          con el scroll programado. */}
      <ul
        ref={pista}
        tabIndex={0}
        onKeyDown={alPulsarTecla}
        aria-label={t('actions.carousel')}
        className="nc-carousel -mx-5 flex snap-x snap-proximity gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8"
      >
        {items.map((project, index) => (
          <li
            key={project.title}
            aria-label={`${index + 1} / ${items.length}`}
            className="w-[82%] shrink-0 snap-start sm:w-[58%] lg:w-[calc((100%-2rem)/3)]"
          >
            <LabCard
              project={project}
              proposalLabel={proposalLabel}
              defaultLinkLabel={defaultLinkLabel}
            />
          </li>
        ))}
      </ul>

      {/* Controles */}
      <div className="flex items-center justify-between gap-4">
        <ul className="flex items-center gap-2">
          {items.map((project, index) => (
            <li key={project.title}>
              <button
                type="button"
                onClick={() => irA(index)}
                aria-label={`${index + 1} / ${items.length}`}
                aria-current={index === activo ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activo
                    ? 'w-7 bg-accent'
                    : 'w-1.5 bg-line-hover hover:bg-ink-subtle'
                }`}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <BotonFlecha
            hacia={-1}
            deshabilitado={limites.inicio}
            etiqueta={t('actions.previous')}
            onClick={() => mover(-1)}
          />
          <BotonFlecha
            hacia={1}
            deshabilitado={limites.fin}
            etiqueta={t('actions.next')}
            onClick={() => mover(1)}
          />
        </div>
      </div>
    </div>
  )
}
