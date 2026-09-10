import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { scaleIn } from '../../../lib/motion'

/**
 * Sub-componente de «Testimonios»: no tiene contenido propio.
 * Recibe cada reseña desde `Testimonials/content.<idioma>.yaml`.
 */
export function TestimonialCard({ testimonial, placeholderLabel, index = 0 }) {
  const hasLink = Boolean(testimonial.link)

  return (
    <Reveal as="figure" variants={scaleIn} delay={index * 0.08} className="min-w-0">
      <SpotlightCard className="flex h-full flex-col gap-5 p-6 md:p-7">
        {testimonial.placeholder ? (
          <span className="w-fit rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase">
            {placeholderLabel}
          </span>
        ) : null}

        <span
          aria-hidden="true"
          className="font-serif text-5xl leading-none text-accent/40 select-none"
        >
          &ldquo;
        </span>

        <blockquote className="-mt-3 flex-1 text-base leading-relaxed text-ink-muted">
          {testimonial.quote}
        </blockquote>

        <figcaption className="flex items-center gap-3 border-t border-line pt-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-xs font-semibold text-accent shadow-inner-top">
            {testimonial.initials}
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
              {testimonial.name}
              {hasLink ? (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={testimonial.name}
                  className="text-accent transition-colors duration-200 hover:text-accent-bright"
                >
                  <ICONS.arrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </span>
            <span className="truncate text-xs text-ink-subtle">
              {testimonial.role} · {testimonial.company}
            </span>
          </span>
        </figcaption>
      </SpotlightCard>
    </Reveal>
  )
}
