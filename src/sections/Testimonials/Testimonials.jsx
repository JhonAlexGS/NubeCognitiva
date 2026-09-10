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

export default function Testimonials() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const items = content.items ?? []

  if (items.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        align="center"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
            placeholderLabel={content.placeholderLabel}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
