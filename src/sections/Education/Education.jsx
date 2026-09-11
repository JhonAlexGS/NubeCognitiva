import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { getIcon, ICONS } from '../../components/ui/icons'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown } from '../../lib/content'
import { fadeUp, scaleIn } from '../../lib/motion'

// Contenido editable de esta sección: `content.es.md` / `content.en.md`.
const CONTENT = import.meta.glob('./content.*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Education() {
  const lang = useLang()
  const { data, body } = useMemo(() => pickMarkdown(CONTENT, lang), [lang])

  return (
    <Section id="education">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} lead={data.lead} />

      <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2">
        {(data.programs ?? []).map((program, index) => {
          const Icon = getIcon(program.icon)
          return (
            <Reveal
              key={`${program.institution}-${program.program}`}
              variants={scaleIn}
              delay={index * 0.07}
              className="min-w-0"
            >
              <SpotlightCard className="flex h-full flex-col gap-4 p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <span className="nc-eyebrow">
                      {program.level} · {program.period}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-balance text-ink">
                      {program.program}
                    </h3>
                    <p className="text-sm text-ink-muted">
                      {program.institution} · {program.location}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {(program.highlights ?? []).map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-sm leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.55em] left-0 h-1 w-1 rounded-full bg-accent/70"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>

      {/* Nota sobre la tesis (cuerpo del Markdown) */}
      <Reveal className="mt-10 max-w-3xl border-l-2 border-line-accent pl-6">
        <Markdown>{body}</Markdown>
      </Reveal>

      {/* Certificaciones */}
      {data.certifications?.length ? (
        <div className="mt-16">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              <ICONS.award aria-hidden="true" className="h-6 w-6 text-accent" />
              {data.certificationsTitle}
            </h3>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.certifications.map((certification, index) => {
              // La última tarjeta se estira para cerrar la fila cuando quedaría
              // sola. Se recalcula solo al añadir o quitar certificaciones.
              const esUltima = index === data.certifications.length - 1
              const cierraEnDos = esUltima && data.certifications.length % 2 === 1
              const cierraEnTres = esUltima && data.certifications.length % 3 === 1
              return (
              <Reveal
                as="li"
                key={`${certification.issuer}-${certification.year}-${certification.name}`}
                variants={fadeUp}
                delay={index * 0.05}
                className={`min-w-0 rounded-2xl border border-line bg-surface p-4 shadow-inner-top transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover ${cierraEnDos ? 'sm:col-span-2' : ''} ${cierraEnTres ? 'lg:col-span-3' : ''}`}
              >
                <p className="flex items-baseline justify-between gap-3 text-sm font-medium text-ink">
                  {certification.issuer}
                  <span className="shrink-0 font-mono text-[0.6875rem] text-accent">
                    {certification.year}
                  </span>
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {certification.name}
                </p>
              </Reveal>
              )
            })}
          </ul>
        </div>
      ) : null}
    </Section>
  )
}
