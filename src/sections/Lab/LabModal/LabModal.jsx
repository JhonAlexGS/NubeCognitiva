import { Modal } from '../../../components/ui/Modal'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'

/**
 * Sub-componente de «Laboratorio»: no tiene contenido propio.
 * Muestra el proyecto completo, con la descripción sin recortar.
 */
export function LabModal({ project, open, onClose, proposalLabel, defaultLinkLabel }) {
  const portada = publicUrl(project?.image)

  return (
    <Modal open={open} onClose={onClose} titleId="proyecto-titulo">
      {project ? (
        <div className="flex flex-col">
          {/* Portada a sangre, sin el relleno de la tarjeta */}
          {portada ? (
            <div className="relative aspect-video shrink-0 overflow-hidden border-b border-line bg-canvas-deep">
              <img
                src={portada}
                alt=""
                className="h-full w-full object-cover"
                decoding="async"
              />
              {project.placeholder ? (
                <span className="absolute top-4 left-4 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md">
                  {proposalLabel}
                </span>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <h3
              id="proyecto-titulo"
              className="text-2xl font-semibold tracking-tight text-balance text-ink"
            >
              {project.title}
            </h3>

            <p className="text-base leading-relaxed text-ink-muted">{project.summary}</p>

            {project.skills?.length ? (
              <div className="flex flex-col gap-2.5">
                <span className="nc-eyebrow">{project.skillsLabel}</span>
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-bright"
              >
                {project.linkLabel || defaultLinkLabel}
                <ICONS.arrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </Modal>
  )
}
