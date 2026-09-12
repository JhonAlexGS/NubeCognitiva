import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { LabCarousel } from './LabCarousel/LabCarousel'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Lab() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const items = content.items ?? []

  if (items.length === 0) return null

  return (
    <Section id="lab">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <Reveal className="mt-12 lg:mt-16">
        <LabCarousel
          items={items}
          proposalLabel={content.proposalLabel}
          defaultLinkLabel={content.defaultLinkLabel}
        />
      </Reveal>
    </Section>
  )
}
