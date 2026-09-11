import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'
import { scaleIn } from '../../../lib/motion'

/**
 * Sub-componente de «Testimonios»: no tiene contenido propio.
 * Recibe cada reseña desde `Testimonials/content.<idioma>.yaml`.
 *
 * Nota deliberada: el YAML guarda `phone` y `email` de cada persona, pero este
 * componente NO los renderiza. Son datos de terceros y publicarlos en una web
 * abierta los expondría a spam.
 */
export function TestimonialCard({ testimonial, placeholderLabel, index = 0, className = '' }) {
  const foto = publicUrl(testimonial.photo)
  const enlace = testimonial.link
  // El icono depende del destino: LinkedIn tiene el suyo, lo demás (portafolio,
  // web personal) usa el genérico de enlace externo.
  const IconoEnlace = enlace?.includes('linkedin.') ? ICONS.linkedin : ICONS.arrowUpRight
  // El cargo y la empresa se unen con separador solo si hay ambos.
  const cargoYEmpresa = [testimonial.role, testimonial.company].filter(Boolean).join(' · ')

  return (
    <Reveal
      as="figure"
      variants={scaleIn}
      delay={index * 0.08}
      className={`min-w-0 ${className}`}
    >
      <SpotlightCard className="flex h-full flex-col gap-4 p-6 md:p-7">
        {/* Vínculo con la persona + aviso de ejemplo */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {testimonial.relationship ? (
            <span className="nc-eyebrow">{testimonial.relationship}</span>
          ) : null}
          {testimonial.placeholder ? (
            <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase">
              {placeholderLabel}
            </span>
          ) : null}
        </div>

        <span
          aria-hidden="true"
          className="font-serif text-5xl leading-none text-accent/40 select-none"
        >
          &ldquo;
        </span>

        <blockquote className="-mt-5 flex-1 text-base leading-relaxed text-ink-muted">
          {testimonial.quote}
        </blockquote>

        <figcaption className="flex items-center gap-3 border-t border-line pt-5">
          {foto ? (
            <img
              src={foto}
              alt={testimonial.name}
              width="44"
              height="44"
              loading="lazy"
              decoding="async"
              className="h-11 w-11 shrink-0 rounded-full border border-line object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-xs font-semibold text-accent shadow-inner-top"
            >
              {testimonial.initials}
            </span>
          )}

          <span className="flex min-w-0 flex-col">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
              <span className="truncate">{testimonial.name}</span>
              {enlace ? (
                <a
                  href={enlace}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={testimonial.name}
                  className="shrink-0 text-ink-subtle transition-colors duration-200 hover:text-accent"
                >
                  <IconoEnlace aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </span>
            <span className="truncate text-xs text-ink-subtle">{cargoYEmpresa}</span>
          </span>
        </figcaption>
      </SpotlightCard>
    </Reveal>
  )
}
