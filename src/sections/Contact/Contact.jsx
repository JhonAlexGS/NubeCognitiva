import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { getIcon, ICONS } from '../../components/ui/icons'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown, pickYaml } from '../../lib/content'
import { EASE_EXPO, scaleIn } from '../../lib/motion'
import { profile, socialLinks } from '../../lib/profile'
import { ContactForm } from './ContactForm/ContactForm'

// Contenido editable de esta sección:
//  · `content.es.md` / `content.en.md` → textos narrativos
//  · `form.es.yaml` / `form.en.yaml`   → etiquetas y mensajes del formulario
const CONTENT = import.meta.glob('./content.*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})
const FORM = import.meta.glob('./form.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Contact() {
  const lang = useLang()
  const { data, body } = useMemo(() => pickMarkdown(CONTENT, lang), [lang])
  const formCopy = useMemo(() => pickYaml(FORM, lang, 'form') ?? {}, [lang])

  // Canales directos: redes de `profile.yaml` + teléfono y ubicación.
  const channels = [
    ...socialLinks,
    { id: 'phone', icon: 'phone', label: profile.phone, url: `tel:${profile.phone.replace(/\s/g, '')}` },
    { id: 'location', icon: 'location', label: profile.location, url: '' },
  ]

  return (
    <Section id="contact">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} lead={data.lead} />

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <Reveal className="max-w-xl">
            <Markdown>{body}</Markdown>
          </Reveal>

          <Reveal variants={scaleIn} delay={0.08} className="flex flex-col gap-4">
            <h3 className="nc-eyebrow">{data.channelsTitle}</h3>
            <ul className="flex flex-col gap-2">
              {channels.map((channel) => {
                const Icon = getIcon(channel.icon)
                const external = channel.url?.startsWith('http')
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top">
                      <Icon aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
                    </span>
                    <span className="min-w-0 truncate text-sm text-ink-muted">
                      {channel.handle ?? channel.label}
                    </span>
                    {channel.url ? (
                      <ICONS.arrowUpRight
                        aria-hidden="true"
                        className="ml-auto h-4 w-4 shrink-0 text-ink-subtle transition-colors duration-200 group-hover:text-accent"
                      />
                    ) : null}
                  </>
                )

                return (
                  <li key={channel.id}>
                    {channel.url ? (
                      <motion.a
                        href={channel.url}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer noopener' : undefined}
                        aria-label={channel.label}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2, ease: EASE_EXPO }}
                        className="group flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors duration-200 hover:border-line hover:bg-surface"
                      >
                        {content}
                      </motion.a>
                    ) : (
                      <div className="flex items-center gap-3 p-2">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal variants={scaleIn} delay={0.12} className="min-w-0">
          <ContactForm copy={formCopy} />
        </Reveal>
      </div>
    </Section>
  )
}
