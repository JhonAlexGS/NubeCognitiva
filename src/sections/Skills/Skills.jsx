import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { getIcon } from '../../components/ui/icons'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { EASE_EXPO, scaleIn } from '../../lib/motion'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Skills() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const groups = content.groups ?? []

  return (
    <Section id="skills">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {groups.map((group, index) => {
          const Icon = getIcon(group.icon)
          return (
            <Reveal key={group.title} variants={scaleIn} delay={index * 0.06} className="min-w-0">
              <SpotlightCard className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
                    <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-1.5">
                  {(group.items ?? []).map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2, ease: EASE_EXPO }}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>

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
