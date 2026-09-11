import { Modal } from '../../../components/ui/Modal'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'

/**
 * Sub-componente de «Testimonios»: no tiene contenido propio.
 * Muestra la reseña completa, sin recortes, con todos los datos de la persona.
 */
export function TestimonialModal({ testimonial, open, onClose, placeholderLabel }) {
  const foto = publicUrl(testimonial?.photo)
  const enlace = testimonial?.link
  const IconoEnlace = enlace?.includes('linkedin.') ? ICONS.linkedin : ICONS.arrowUpRight

  return (
    <Modal open={open} onClose={onClose} titleId="testimonio-nombre">
      {testimonial ? (
        <div className="flex flex-col gap-6 p-6 pt-14 sm:p-8 sm:pt-8">
          {/* Cabecera con la persona */}
          <div className="flex items-start gap-4 pr-10">
            {foto ? (
              <img
                src={foto}
                alt={testimonial.name}
                width="64"
                height="64"
                className="h-16 w-16 shrink-0 rounded-full border border-line object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-sm font-semibold text-accent shadow-inner-top"
              >
                {testimonial.initials}
              </span>
            )}

            <div className="flex min-w-0 flex-col gap-1.5">
              {testimonial.relationship ? (
                <span className="nc-eyebrow">{testimonial.relationship}</span>
              ) : null}

              <h3
                id="testimonio-nombre"
                className="text-xl font-semibold tracking-tight text-balance text-ink"
              >
                {testimonial.name}
              </h3>

              {/* Aquí el cargo va completo: es lo que la tarjeta recorta */}
              <p className="text-sm leading-relaxed text-ink-muted">
                {[testimonial.role, testimonial.company].filter(Boolean).join(' · ')}
              </p>
            </div>
          </div>

          {testimonial.placeholder ? (
            <span className="w-fit rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase">
              {placeholderLabel}
            </span>
          ) : null}

          <div className="nc-divider" />

          {/* Reseña completa */}
          <blockquote className="relative pl-6 text-base leading-relaxed text-ink-muted">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 font-serif text-4xl leading-none text-accent/40 select-none"
            >
              &ldquo;
            </span>
            {testimonial.quote}
          </blockquote>

          {enlace ? (
            <a
              href={enlace}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-bright"
            >
              {testimonial.name}
              <IconoEnlace aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      ) : null}
    </Modal>
  )
}
