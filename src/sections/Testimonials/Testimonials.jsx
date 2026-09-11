import { useMemo } from 'react'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { TestimonialCard } from './TestimonialCard/TestimonialCard'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Anchos posibles sobre una rejilla de 6 columnas, según cuántas tarjetas
// compartan la fila: 3 → un tercio, 2 → la mitad, 1 → la fila entera.
const ANCHOS = { 3: 'lg:col-span-2', 2: 'lg:col-span-3', 1: 'lg:col-span-6' }

/**
 * Reparte N tarjetas en filas que llenen siempre las 6 columnas, para que
 * nunca quede una fila a medias. Se recalcula al añadir o quitar testimonios.
 * Ejemplos: 5 → [3, 2] · 4 → [2, 2] · 7 → [3, 2, 2]
 */
function anchoDeCadaTarjeta(total) {
  const filas = []
  let quedan = total

  while (quedan > 0) {
    if (quedan === 4) {
      filas.push(2, 2)
      quedan = 0
    } else if (quedan > 4 || quedan % 3 === 0) {
      filas.push(3)
      quedan -= 3
    } else {
      filas.push(quedan)
      quedan = 0
    }
  }

  return filas.flatMap((enLaFila) => Array(enLaFila).fill(ANCHOS[enLaFila]))
}

export default function Testimonials() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])

  // Solo se publican las reseñas que tienen texto. Las fichas sin `quote` son
  // referencias pendientes de pedir: se quedan en el YAML, no en la web.
  const items = useMemo(
    () => (content.items ?? []).filter((t) => String(t.quote ?? '').trim().length > 0),
    [content.items],
  )
  const anchos = useMemo(() => anchoDeCadaTarjeta(items.length), [items.length])

  // Sin ninguna reseña publicable, la sección entera desaparece.
  if (items.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        align="center"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6">
        {items.map((testimonial, index) => {
          // En tablet la rejilla es de dos columnas: si el total es impar, la
          // última tarjeta se estira para no quedarse sola.
          const cierraFilaEnTablet = index === items.length - 1 && items.length % 2 === 1
          return (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              placeholderLabel={content.placeholderLabel}
              index={index}
              className={`${anchos[index]} ${cierraFilaEnTablet ? 'md:col-span-2' : ''}`}
            />
          )
        })}
      </div>
    </Section>
  )
}
