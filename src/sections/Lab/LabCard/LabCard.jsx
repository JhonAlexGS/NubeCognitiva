import { useCallback, useRef } from 'react'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'

/**
 * Sub-componente de «Laboratorio»: no tiene contenido propio.
 * Recibe cada proyecto desde `Lab/content.<idioma>.yaml`.
 *
 * La tarjeta es un resumen: la descripción se recorta a tres líneas con puntos
 * suspensivos. Al pulsarla se abre el diálogo con el texto completo y el enlace.
 */
export function LabCard({ project, proposalLabel, detailsLabel, levelLabel, level, onOpen }) {
  const portada = publicUrl(project.image)
  const inicioDelPuntero = useRef(null)

  // En el carrusel, arrastrar para desplazar termina con un «click». Si el
  // puntero se movió, se entiende que fue un arrastre y no se abre el diálogo.
  const alBajarPuntero = useCallback((evento) => {
    inicioDelPuntero.current = evento.clientX
  }, [])

  const alPulsar = useCallback(
    (evento) => {
      const inicio = inicioDelPuntero.current
      inicioDelPuntero.current = null
      if (inicio !== null && Math.abs(evento.clientX - inicio) > 8) return
      onOpen()
    },
    [onOpen],
  )

  return (
    <SpotlightCard lift={false} className="flex h-full flex-col overflow-hidden">
      {/* Capa pulsable bajo el contenido, que cubre la tarjeta entera */}
      <button
        type="button"
        onPointerDown={alBajarPuntero}
        onClick={alPulsar}
        className="absolute inset-0 z-0 rounded-2xl"
      >
        <span className="sr-only">{`${detailsLabel}: ${project.title}`}</span>
      </button>

      <div className="pointer-events-none relative z-[1] flex flex-1 flex-col">
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

          {/* Nivel de la ruta, arriba a la izquierda; propuesta, a la derecha */}
          {level ? (
            <span className="absolute top-3 left-3 rounded-full border border-line-accent bg-accent/15 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-accent uppercase backdrop-blur-md">
              {levelLabel} {level.id} · {level.name}
            </span>
          ) : null}

          {project.placeholder ? (
            <span className="absolute top-3 right-3 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md">
              {proposalLabel}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="text-lg font-semibold tracking-tight text-balance text-ink">
            {project.title}
          </h3>

          {/* Recorte a tres líneas: el navegador pone los puntos suspensivos */}
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          {project.skills?.length ? (
            <ul className="flex flex-wrap gap-1.5 pt-1">
              {project.skills.slice(0, 4).map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink"
                >
                  {skill}
                </li>
              ))}
              {project.skills.length > 4 ? (
                <li className="px-1 py-1 font-mono text-[0.6875rem] text-ink-subtle">
                  +{project.skills.length - 4}
                </li>
              ) : null}
            </ul>
          ) : null}

          <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:text-accent-bright group-hover:decoration-current">
            {detailsLabel}
            <ICONS.arrowUpRight
              aria-hidden="true"
              className="h-4 w-4 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </SpotlightCard>
  )
}
