import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { getTechLogo } from '../../../components/ui/techLogos'
import { fadeUp } from '../../../lib/motion'
import { formatDuration, parsePeriod } from './duration'

/**
 * Sub-componente de «Experiencia»: no tiene contenido propio.
 * Recibe la lista ya parseada desde `Experience/content.<idioma>.yaml` y los
 * textos cortos de la interfaz (`labels`).
 *
 * Línea de tiempo «viva»: sobre la línea gris corre otra de acento que se
 * rellena de arriba abajo a medida que se hace scroll, y cada nodo se enciende
 * cuando su empleo llega a la zona de lectura (y se queda encendido). Cada
 * empleo es una tarjeta de cristal con monograma, duración calculada y las
 * tecnologías con su logo.
 *
 * Geometría: los nodos miden 24 px y van pegados al borde izquierdo de la
 * lista; la línea pasa por su centro (`left-[11.5px]`). El relleno izquierdo de
 * la lista (`pl-10` / `md:pl-14`) deja el hueco entre nodo y tarjeta, que
 * cubre un conector corto.
 */
export function ExperienceTimeline({ jobs, labels = {} }) {
  const listaRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  // Progreso del scroll dentro de la lista: empieza cuando su parte superior
  // pasa por el 70 % de la pantalla y termina cuando el final llega al 60 %.
  const { scrollYProgress } = useScroll({
    target: listaRef,
    offset: ['start 70%', 'end 60%'],
  })
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <ol ref={listaRef} className="relative flex flex-col gap-6 pl-10 md:gap-8 md:pl-14">
      {/* Línea base y línea de acento que se rellena con el scroll. */}
      <span aria-hidden="true" className="absolute top-3 bottom-3 left-[11.5px] w-px bg-line" />
      <motion.span
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { scaleY: progreso }}
        className="absolute top-3 bottom-3 left-[11.5px] w-px origin-top bg-gradient-to-b from-accent-bright via-accent to-accent/40 shadow-[0_0_8px_var(--accent-glow)]"
      />

      {jobs.map((job, index) => (
        <ExperienceItem
          key={`${job.company}-${job.period}`}
          job={job}
          index={index}
          labels={labels}
        />
      ))}
    </ol>
  )
}

function ExperienceItem({ job, index, labels }) {
  const nodoRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  // El nodo se enciende al entrar en el 60 % superior de la pantalla, más o
  // menos cuando la línea de acento lo alcanza, y ya no se apaga.
  const alcanzado = useInView(nodoRef, { once: true, margin: '0px 0px -40% 0px' })
  const encendido = prefersReducedMotion || alcanzado

  const periodo = parsePeriod(job.period)
  const duracion = periodo ? formatDuration(periodo.months, labels.duration) : ''
  // Distintivo: «Actual» si el empleo sigue activo; si no, «Más reciente»
  // para el primero de la lista (la lista va del más nuevo al más antiguo).
  const distintivo = periodo?.current ? labels.current : index === 0 ? labels.latest : null
  const monograma = job.short || iniciales(job.company)

  return (
    <Reveal as="li" variants={fadeUp} delay={index * 0.06} className="relative">
      {/* Nodo de la línea de tiempo */}
      <span
        ref={nodoRef}
        aria-hidden="true"
        className={`absolute top-6 -left-10 grid h-6 w-6 place-items-center rounded-full border bg-canvas-base transition-all duration-500 md:-left-14 ${
          encendido
            ? 'border-accent shadow-[0_0_0_4px_var(--accent-glow),0_0_16px_var(--accent-glow)]'
            : 'border-line'
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
            encendido ? 'bg-accent-bright' : 'bg-line-hover'
          }`}
        />
      </span>
      {/* Conector entre el nodo y la tarjeta */}
      <span
        aria-hidden="true"
        className={`absolute top-[2.25rem] -left-4 h-px w-4 transition-colors duration-500 md:-left-8 md:w-8 ${
          encendido ? 'bg-accent/60' : 'bg-line'
        }`}
      />

      <SpotlightCard lift={false} className="flex flex-col gap-5 p-5 md:p-7">
        {/* Cabecera: monograma, cargo, empresa y distintivo */}
        <header className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line-accent bg-accent/10 font-mono text-xs font-semibold tracking-wider text-accent shadow-inner-top"
          >
            {monograma}
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                {job.role}
              </h3>
              {distintivo ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-accent bg-accent/10 px-2.5 py-0.5 font-mono text-[0.625rem] tracking-widest text-accent uppercase">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {distintivo}
                </span>
              ) : null}
            </div>
            <p className="text-sm font-medium text-ink-muted">{job.company}</p>
          </div>
        </header>

        {/* Metadatos: fechas, duración y ubicación */}
        <dl className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.6875rem] tracking-wide text-ink-subtle uppercase">
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">{labels.periodLabel}</dt>
            <ICONS.calendar aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
            <dd>{job.period}</dd>
          </div>
          {duracion ? (
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">{labels.durationLabel}</dt>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-hover" />
              <dd className="text-ink-muted">{duracion}</dd>
            </div>
          ) : null}
          {job.location ? (
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">{labels.locationLabel}</dt>
              <ICONS.location aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
              <dd className="normal-case tracking-normal">{job.location}</dd>
            </div>
          ) : null}
        </dl>

        {/* Logros */}
        <ul className="flex flex-col gap-2.5">
          {(job.highlights ?? []).map((highlight) => (
            <li key={highlight} className="relative pl-6 text-sm leading-relaxed text-ink-muted">
              <ICONS.check
                aria-hidden="true"
                className="absolute top-[0.2em] left-0 h-4 w-4 text-accent/80"
              />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tecnologías, con su logo si lo tienen (ver `techLogos.js`) */}
        {job.stack?.length ? (
          <ul className="flex flex-wrap gap-1.5 border-t border-line pt-4">
            {job.stack.map((tech) => {
              const logo = getTechLogo(tech)
              const Logo = logo?.icon
              return (
                <li
                  key={tech}
                  style={logo?.color ? { '--brand': logo.color } : undefined}
                  className="group/chip flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink"
                >
                  {Logo ? (
                    <Logo
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 transition-colors duration-200 group-hover/chip:text-[color:var(--brand,currentColor)]"
                    />
                  ) : null}
                  {tech}
                </li>
              )
            })}
          </ul>
        ) : null}
      </SpotlightCard>
    </Reveal>
  )
}

// Monograma por defecto: iniciales de las dos primeras palabras de la empresa.
function iniciales(nombre) {
  return String(nombre ?? '')
    .split(/[\s·]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0])
    .join('')
    .toUpperCase()
}
