import { createElement, useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { getIcon } from '../../components/ui/icons'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown } from '../../lib/content'
import { PillarCard } from './PillarCard/PillarCard'

// Contenido editable de esta sección: `content.es.md` / `content.en.md`.
// La experiencia laboral vive en su propia sección: `src/sections/Experience/`.
const CONTENT = import.meta.glob('./content.*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function About() {
  const lang = useLang()
  const { data, body } = useMemo(() => pickMarkdown(CONTENT, lang), [lang])

  return (
    <Section id="about">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} lead={data.lead} />

      {/* Las dos columnas miden lo mismo (la rejilla las estira): el texto va
          arriba y los datos rápidos se empujan al fondo, así la columna
          izquierda termina a la par que las tarjetas en vez de dejar un
          hueco. */}
      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex max-w-2xl flex-col gap-8 lg:justify-between">
          <Reveal>
            <Markdown>{body}</Markdown>
          </Reveal>

          {data.facts?.length ? (
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 shadow-inner-top transition-colors duration-200 hover:border-line-accent"
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-accent bg-accent/10 text-accent"
                    >
                      {createElement(getIcon(fact.icon), { className: 'h-4 w-4' })}
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <dt className="font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase">
                        {fact.label}
                      </dt>
                      <dd className="truncate text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
        </div>

        {/* Pilares del perfil */}
        <div className="grid gap-4 sm:grid-cols-2">
          {(data.pillars ?? []).map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
