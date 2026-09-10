import { useMemo } from 'react'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { ProjectCard } from './ProjectCard/ProjectCard'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Projects() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const items = content.items ?? []

  return (
    <Section id="projects">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <div className="mt-12 grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-6 lg:mt-16 lg:auto-rows-[minmax(11.25rem,auto)]">
        {items.map((project, index) => (
          <ProjectCard key={project.id ?? project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
