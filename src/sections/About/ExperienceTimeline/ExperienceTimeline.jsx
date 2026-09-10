import { Reveal } from '../../../components/ui/Reveal'
import { fadeUp } from '../../../lib/motion'

/**
 * Sub-componente de «Sobre mí»: no tiene contenido propio.
 * Recibe la lista ya parseada desde `About/experience.<idioma>.yaml`.
 */
export function ExperienceTimeline({ jobs }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-line pl-6 md:gap-10 md:pl-8">
      {jobs.map((job, index) => (
        <Reveal
          as="li"
          key={`${job.company}-${job.period}`}
          variants={fadeUp}
          delay={index * 0.06}
          className="relative"
        >
          {/* Nodo de la línea de tiempo */}
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[1.6875rem] grid h-3 w-3 place-items-center rounded-full border border-line-accent bg-canvas-base md:-left-[2.1875rem]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[0.6875rem] tracking-widest text-accent uppercase">
              {job.period}
            </span>
            <h4 className="text-lg font-semibold tracking-tight text-ink">
              {job.role}
              <span className="text-ink-muted"> · {job.company}</span>
            </h4>
            <p className="text-xs text-ink-subtle">{job.location}</p>
          </div>

          <ul className="mt-3 flex flex-col gap-2">
            {(job.highlights ?? []).map((highlight) => (
              <li
                key={highlight}
                className="relative pl-5 text-sm leading-relaxed text-ink-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-[0.55em] left-0 h-1 w-1 rounded-full bg-accent/70"
                />
                {highlight}
              </li>
            ))}
          </ul>

          {job.stack?.length ? (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      ))}
    </ol>
  )
}
