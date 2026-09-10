import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { getIcon } from '../../components/ui/icons'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown, pickYaml } from '../../lib/content'
import { scaleIn } from '../../lib/motion'
import { ExperienceTimeline } from './ExperienceTimeline/ExperienceTimeline'

// Contenido editable de esta sección:
//  · `content.es.md` / `content.en.md`        → textos narrativos y pilares
//  · `experience.es.yaml` / `experience.en.yaml` → lista de empleos
const CONTENT = import.meta.glob('./content.*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})
const EXPERIENCE = import.meta.glob('./experience.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function About() {
  const lang = useLang()
  const { data, body } = useMemo(() => pickMarkdown(CONTENT, lang), [lang])
  const jobs = useMemo(() => pickYaml(EXPERIENCE, lang, 'experience') ?? [], [lang])

  return (
    <Section id="about">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} lead={data.lead} />

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="max-w-2xl">
          <Markdown>{body}</Markdown>
        </Reveal>

        {/* Pilares del perfil */}
        <div className="grid gap-4 sm:grid-cols-2">
          {(data.pillars ?? []).map((pillar, index) => {
            const Icon = getIcon(pillar.icon)
            return (
              <Reveal key={pillar.title} variants={scaleIn} delay={index * 0.08}>
                <SpotlightCard className="flex h-full flex-col gap-3 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
                    <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Línea de tiempo laboral */}
      <div className="mt-16 lg:mt-24">
        <Reveal>
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {data.experienceTitle}
          </h3>
        </Reveal>
        <ExperienceTimeline jobs={jobs} />
      </div>
    </Section>
  )
}
