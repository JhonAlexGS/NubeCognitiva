import { Reveal } from './Reveal'

/** Contenedor de sección: separador superior, anclaje y espaciado responsive. */
export function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 border-t border-line py-16 md:py-24 lg:py-32 ${className}`}
    >
      <div className="nc-container">{children}</div>
    </section>
  )
}

/**
 * Encabezado de sección: etiqueta monoespaciada + titular con degradado +
 * entradilla opcional. Todos los textos llegan desde los archivos de contenido.
 *
 * La etiqueta lleva `mb-4`, que se suma al `gap-4` del contenedor: así queda
 * separada del titular sin alterar la distancia entre titular y entradilla.
 */
export function SectionHeading({ eyebrow, title, lead, align = 'left' }) {
  const centrado = align === 'center'
  const alineacion = centrado ? 'mx-auto max-w-3xl items-center text-center' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 ${alineacion}`}>
      {eyebrow ? (
        <span className="nc-eyebrow mb-4 inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-px w-6 bg-line-accent" />
          {eyebrow}
        </span>
      ) : null}

      {title ? (
        <h2 className="nc-heading-gradient max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {title}
        </h2>
      ) : null}

      {lead ? (
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{lead}</p>
      ) : null}
    </Reveal>
  )
}
