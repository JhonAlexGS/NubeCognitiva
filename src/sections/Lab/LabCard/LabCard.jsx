import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'

/**
 * Sub-componente de «Laboratorio»: no tiene contenido propio.
 * Recibe cada proyecto desde `Lab/content.<idioma>.yaml`.
 */
export function LabCard({ project, proposalLabel, defaultLinkLabel }) {
  const portada = publicUrl(project.image)

  return (
    <SpotlightCard lift={false} className="flex h-full flex-col overflow-hidden">
      {/* Portada 16:9 */}
      <div className="relative aspect-video overflow-hidden border-b border-line bg-canvas-deep">
        {portada ? (
          <img
            src={portada}
            alt=""
            loading="lazy"
            decoding="async"
            draggable="false"
            className="h-full w-full object-cover transition-transform duration-500 ease-out select-none group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center px-6 text-center">
            <span className="font-mono text-xs tracking-widest text-ink-subtle uppercase">
              {project.title}
            </span>
          </div>
        )}

        {project.placeholder ? (
          <span className="absolute top-3 left-3 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md">
            {proposalLabel}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold tracking-tight text-balance text-ink">
          {project.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

        {project.skills?.length ? (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : null}

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-bright"
          >
            {project.linkLabel || defaultLinkLabel}
            <ICONS.arrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </SpotlightCard>
  )
}
