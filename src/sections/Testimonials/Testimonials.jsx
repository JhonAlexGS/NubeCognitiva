import { useMemo, useState } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { TestimonialCarousel } from './TestimonialCarousel/TestimonialCarousel'
import { TestimonialModal } from './TestimonialModal/TestimonialModal'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Testimonials() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])

  // Solo se publican las reseñas que tienen texto. Las fichas sin `quote` son
  // referencias pendientes de pedir: se quedan en el YAML, no en la web.
  const items = useMemo(
    () => (content.items ?? []).filter((t) => String(t.quote ?? '').trim().length > 0),
    [content.items],
  )

  // Índice de la reseña abierta en el diálogo; `null` cuando está cerrado.
  const [abierta, setAbierta] = useState(null)

  // Sin ninguna reseña publicable, la sección entera desaparece.
  if (items.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <Reveal className="mt-12 lg:mt-16">
        <TestimonialCarousel
          items={items}
          placeholderLabel={content.placeholderLabel}
          onOpen={setAbierta}
        />
      </Reveal>

      <TestimonialModal
        testimonial={abierta === null ? null : items[abierta]}
        open={abierta !== null}
        onClose={() => setAbierta(null)}
        placeholderLabel={content.placeholderLabel}
      />
    </Section>
  )
}
