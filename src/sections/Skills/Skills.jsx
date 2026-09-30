import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { TechMarquee } from './TechMarquee'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Skills() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])

  return (
    <Section id="skills">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      {content.marquee?.length ? (
        <Reveal className="mt-12 lg:mt-16">
          <TechMarquee rows={content.marquee} countLabel={content.marqueeCount} />
        </Reveal>
      ) : null}

      {/* Idiomas */}
      {content.languages?.length ? (
        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-inner-top">
          <h3 className="nc-eyebrow">{content.languagesTitle}</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {content.languages.map((language) => (
              <li key={language.name} className="text-sm text-ink-muted">
                <span className="font-medium text-ink">{language.name}</span>
                <span className="text-ink-subtle"> · {language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}
    </Section>
  )
}
