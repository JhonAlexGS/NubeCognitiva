import { useTranslation } from 'react-i18next'
import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'
import { scaleIn } from '../../../lib/motion'

/**
 * Sub-componente de «Testimonios»: no tiene contenido propio.
 * Recibe cada reseña desde `Testimonials/content.<idioma>.yaml`.
 *
 * La tarjeta es una vista resumida: la reseña se recorta a cuatro líneas y el
 * cargo a una, ambos con puntos suspensivos. Al pulsarla se abre el diálogo con
 * todo el texto y los datos completos.
 *
 * Nota deliberada: el YAML guarda `phone` y `email` de cada persona, pero no se
 * renderizan. Son datos de terceros y publicarlos los expondría a spam.
 */
export function TestimonialCard({ testimonial, placeholderLabel, index = 0, className = '', onOpen }) {
  const { t } = useTranslation()
  const foto = publicUrl(testimonial.photo)
  const enlace = testimonial.link
  // El icono depende del destino: LinkedIn tiene el suyo, lo demás (portafolio,
  // web personal) usa el genérico de enlace externo.
  const IconoEnlace = enlace?.includes('linkedin.') ? ICONS.linkedin : ICONS.arrowUpRight
  // El cargo y la empresa se unen con separador solo si hay ambos.
  const cargoYEmpresa = [testimonial.role, testimonial.company].filter(Boolean).join(' · ')

  return (
    <Reveal as="figure" variants={scaleIn} delay={index * 0.08} className={`min-w-0 ${className}`}>
      <SpotlightCard className="flex h-full flex-col gap-4 p-6 md:p-7">
        {/* Capa que cubre la tarjeta entera y abre el diálogo. Va por debajo del
            contenido (`-z-0`) para no tapar el enlace del pie, que queda encima
            y sigue siendo pulsable por separado. */}
        <button
          type="button"
          onClick={onOpen}
          className="absolute inset-0 z-0 rounded-2xl"
        >
          <span className="sr-only">
            {t('actions.readFullOf', { name: testimonial.name })}
          </span>
        </button>

        <div className="pointer-events-none relative z-[1] flex flex-1 flex-col gap-4">
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

          {/* Recorte a cuatro líneas: el navegador añade los puntos suspensivos */}
          <blockquote className="-mt-5 line-clamp-4 flex-1 text-base leading-relaxed text-ink-muted">
            {testimonial.quote}
          </blockquote>

          {/* Subrayado al pasar por la tarjeta: refuerza que el bloque entero
              es pulsable, no sólo este texto. */}
          <span className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:text-accent-bright group-hover:decoration-current">
            {t('actions.readFull')}
            <ICONS.arrowUpRight
              aria-hidden="true"
              className="h-4 w-4 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>

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
                    onClick={(evento) => evento.stopPropagation()}
                    className="pointer-events-auto shrink-0 text-ink-subtle transition-colors duration-200 hover:text-accent"
                  >
                    <IconoEnlace aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </span>
              {/* Recorte a una línea; el cargo completo se ve en el diálogo */}
              <span className="truncate text-xs text-ink-subtle">{cargoYEmpresa}</span>
            </span>
          </figcaption>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}
