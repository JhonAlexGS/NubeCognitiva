import { useTranslation } from 'react-i18next'
import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { Markdown } from '../../../components/ui/Markdown'
import { scaleIn } from '../../../lib/motion'

/**
 * Sub-componente de «Proyectos»: no tiene contenido propio.
 * Recibe cada proyecto ya parseado desde `Projects/content.<idioma>.yaml`.
 */

// Grilla bento asimétrica: el tamaño lo decide el campo `size` del YAML.
const SIZES = {
  hero: 'md:col-span-6 lg:col-span-4 lg:row-span-2',
  tall: 'md:col-span-6 lg:col-span-2 lg:row-span-2',
  wide: 'md:col-span-3 lg:col-span-3',
}

export function ProjectCard({ project, index = 0 }) {
  const { t } = useTranslation()
  const Icon = ICONS[project.icon] ?? ICONS.layers
  const isHero = project.size === 'hero'
  const hasLink = Boolean(project.url)

  return (
    <Reveal
      as="article"
      variants={scaleIn}
      delay={index * 0.08}
      className={`${SIZES[project.size] ?? SIZES.wide} min-w-0`}
    >
      <SpotlightCard className="flex h-full flex-col gap-4 p-6 md:p-7">
        <header className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-2">
            <span className="nc-eyebrow">{project.kicker}</span>
            <h3
              className={`font-semibold tracking-tight text-balance text-ink ${
                isHero ? 'text-2xl md:text-3xl' : 'text-xl'
              }`}
            >
              {project.title}
            </h3>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        </header>

        <p className="font-mono text-[0.6875rem] tracking-widest text-ink-subtle uppercase">
          {project.period}
        </p>

        <Markdown className="gap-3">{project.summary ?? ''}</Markdown>

        {project.metrics?.length ? (
          <dl className="mt-auto flex flex-wrap gap-3 pt-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 py-3 shadow-inner-top"
              >
                <dt className="text-[0.6875rem] tracking-wide text-ink-subtle">{metric.label}</dt>
                <dd className="font-mono text-lg font-semibold tracking-tight text-ink">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {project.tags?.length ? (
          <ul className={`flex flex-wrap gap-1.5 ${project.metrics?.length ? '' : 'mt-auto pt-2'}`}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {hasLink ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-bright"
          >
            {t('actions.viewProject')}
            <ICONS.arrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        ) : null}
      </SpotlightCard>
    </Reveal>
  )
}
