import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../../../components/ui/icons'
import { EASE_EXPO } from '../../../lib/motion'
import { publicUrl } from '../../../lib/profile'

/**
 * Sub-componente de «Testimonios»: carrusel 3D tipo «coverflow».
 *
 * La foto de la persona activa queda al frente, a color y un poco más grande;
 * las vecinas se alejan hacia los lados, más pequeñas y en blanco y negro.
 * Debajo van su nombre, cargo y un extracto de la reseña, con el botón que
 * abre el diálogo con el texto completo.
 *
 * Se maneja con las flechas, los puntos, pulsando una foto lateral, deslizando
 * el dedo o con ← → del teclado cuando el carrusel tiene el foco (sólo ahí: no
 * secuestra las flechas del resto de la página).
 *
 * La posición de cada foto la decide `data-pos` (−2…2) y los desplazamientos
 * viven en `.nc-coverflow` de `src/index.css`.
 *
 * Nota deliberada: el YAML guarda `phone` y `email` de cada persona, pero no se
 * renderizan. Son datos de terceros y publicarlos los expondría a spam.
 */

// Distancia mínima (px) de un deslizamiento para cambiar de testimonio.
const SWIPE = 50

export function TestimonialCarousel({ items, placeholderLabel, onOpen }) {
  const { t } = useTranslation()
  const prefersReducedMotion = useReducedMotion()
  const [activo, setActivo] = useState(0)
  const inicioToque = useRef(null)

  const total = items.length
  // Con cinco o más se ven dos fotos a cada lado; con menos, una, para que el
  // conjunto quede simétrico (con cuatro, la segunda de un lado no tendría
  // pareja en el otro).
  const lateral = total >= 5 ? 2 : 1

  const irA = useCallback((indice) => setActivo((indice + total) % total), [total])
  const anterior = useCallback(() => irA(activo - 1), [irA, activo])
  const siguiente = useCallback(() => irA(activo + 1), [irA, activo])

  // Posición relativa de cada foto respecto a la activa, en el rango más corto
  // alrededor del círculo: −1 es la de la izquierda, 1 la de la derecha, etc.
  const posicion = (indice) => {
    let d = (indice - activo + total) % total
    if (d > total / 2) d -= total
    return d
  }

  const alPulsarTecla = (evento) => {
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault()
      anterior()
    } else if (evento.key === 'ArrowRight') {
      evento.preventDefault()
      siguiente()
    }
  }

  const alEmpezarToque = (evento) => {
    inicioToque.current = evento.changedTouches[0].clientX
  }

  const alTerminarToque = (evento) => {
    if (inicioToque.current === null) return
    const diferencia = inicioToque.current - evento.changedTouches[0].clientX
    inicioToque.current = null
    if (Math.abs(diferencia) < SWIPE) return
    if (diferencia > 0) siguiente()
    else anterior()
  }

  // Si la lista cambia de largo (p. ej. al cambiar de idioma), se vuelve a la primera.
  const actual = items[activo] ?? items[0]
  const cargoYEmpresa = [actual.role, actual.company].filter(Boolean).join(' · ')
  const enlace = actual.link
  const IconoEnlace = enlace?.includes('linkedin.') ? ICONS.linkedin : ICONS.arrowUpRight

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t('nav.testimonials')}
      tabIndex={0}
      onKeyDown={alPulsarTecla}
      onTouchStart={alEmpezarToque}
      onTouchEnd={alTerminarToque}
      className="flex flex-col items-center rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      {/* Escenario 3D */}
      <div className="nc-coverflow relative w-full">
        <div className="nc-coverflow__track">
          {items.map((testimonial, indice) => {
            const pos = posicion(indice)
            const visible = Math.abs(pos) <= lateral
            const foto = publicUrl(testimonial.photo)
            const esActiva = pos === 0
            return (
              <button
                key={`${testimonial.name}-${indice}`}
                type="button"
                data-pos={visible ? pos : 'hidden'}
                aria-hidden={visible ? undefined : 'true'}
                tabIndex={visible && !esActiva ? 0 : -1}
                // La foto activa abre el testimonio; las laterales lo traen al frente.
                onClick={() => (esActiva ? onOpen(indice) : irA(indice))}
                aria-label={
                  esActiva
                    ? t('actions.readFullOf', { name: testimonial.name })
                    : t('actions.goToTestimonial', { name: testimonial.name })
                }
                className="nc-coverflow__card"
              >
                {foto ? (
                  <img
                    src={foto}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="h-full w-full object-cover select-none"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center bg-gradient-to-br from-accent/30 to-canvas-deep font-mono text-4xl font-semibold text-accent">
                    {testimonial.initials}
                  </span>
                )}
                {/* Velo inferior: asienta la foto sobre la tarjeta oscura. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas-deep/60 via-transparent to-transparent"
                />
              </button>
            )
          })}
        </div>

        {total > 1 ? (
          <>
            <FlechaCarrusel lado="left" label={t('actions.previous')} onClick={anterior} />
            <FlechaCarrusel lado="right" label={t('actions.next')} onClick={siguiente} />
          </>
        ) : null}
      </div>

      {/* Persona y extracto. `aria-live` anuncia el cambio a los lectores de
          pantalla; la animación se cruza (sale uno, entra el siguiente). */}
      <div aria-live="polite" className="mt-10 w-full max-w-2xl px-2 text-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={activo}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
            className="flex flex-col items-center gap-4"
          >
            <figcaption className="flex flex-col items-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                {actual.relationship ? (
                  <span className="nc-eyebrow">{actual.relationship}</span>
                ) : null}
                {actual.placeholder ? (
                  <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase">
                    {placeholderLabel}
                  </span>
                ) : null}
              </div>

              {/* Nombre con dos líneas de acento a los lados. */}
              <p className="nc-coverflow__name text-2xl font-semibold tracking-tight text-balance text-ink md:text-3xl">
                {actual.name}
                {enlace ? (
                  <a
                    href={enlace}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={actual.name}
                    className="ml-2 inline-flex align-middle text-ink-subtle transition-colors duration-200 hover:text-accent"
                  >
                    <IconoEnlace aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : null}
              </p>

              <p className="font-mono text-[0.6875rem] tracking-widest text-ink-subtle uppercase">
                {cargoYEmpresa}
              </p>
            </figcaption>

            {/* Extracto a dos líneas; el texto completo va en el diálogo. */}
            <blockquote className="line-clamp-2 text-base leading-relaxed text-ink-muted">
              &ldquo;{actual.quote}&rdquo;
            </blockquote>

            <button
              type="button"
              onClick={() => onOpen(activo)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-accent-bright hover:decoration-current"
            >
              {t('actions.readFull')}
              <ICONS.arrowUpRight aria-hidden="true" className="h-4 w-4 rotate-45" />
            </button>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Puntos */}
      {total > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {items.map((testimonial, indice) => (
            <button
              key={`${testimonial.name}-dot`}
              type="button"
              onClick={() => irA(indice)}
              aria-label={t('actions.goToTestimonial', { name: testimonial.name })}
              aria-current={indice === activo ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                indice === activo ? 'w-6 bg-accent' : 'w-2 bg-line-hover hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function FlechaCarrusel({ lado, label, onClick }) {
  const Icono = lado === 'left' ? ICONS.chevronLeft : ICONS.chevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas-elevated/80 text-ink-muted shadow-card backdrop-blur transition-all duration-200 hover:scale-110 hover:border-line-accent hover:text-ink ${
        lado === 'left' ? 'left-0 sm:left-2' : 'right-0 sm:right-2'
      }`}
    >
      <Icono aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}
