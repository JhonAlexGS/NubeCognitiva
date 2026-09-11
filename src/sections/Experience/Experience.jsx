import { useMemo } from 'react'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { ExperienceTimeline } from './ExperienceTimeline/ExperienceTimeline'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Experience() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const jobs = content.items ?? []

  if (jobs.length === 0) return null

  return (
    <Section id="experience">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <div className="mt-12 lg:mt-16">
        <ExperienceTimeline jobs={jobs} />
      </div>
    </Section>
  )
}
