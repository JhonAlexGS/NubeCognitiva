import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/ui/Button'
import { ICONS } from '../../components/ui/icons'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown } from '../../lib/content'
import { EASE_EXPO } from '../../lib/motion'
import { CONTACT_ANCHOR } from '../../lib/navigation'
import { profile } from '../../lib/profile'

// Contenido editable de esta sección: `content.es.md` / `content.en.md`.
const CONTENT = import.meta.glob('./content.*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Hero() {
  const { t } = useTranslation()
  const lang = useLang()
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef(null)

  const { data, body } = useMemo(() => pickMarkdown(CONTENT, lang), [lang])

  // Parallax cinematográfico: el contenido se desvanece y encoge al bajar.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const parallax = prefersReducedMotion ? undefined : { opacity, scale, y }

  const headlineWords = String(data.headline ?? '').split(' ')
  const accentWords = String(data.headlineAccent ?? '').split(' ')

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  }
  const item = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.6, ease: EASE_EXPO },
        },
      }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 lg:pb-32"
    >
      <motion.div style={parallax} className="nc-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex max-w-4xl flex-col items-start gap-6 md:gap-8"
        >
          {/* Badge de disponibilidad */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-accent bg-accent/10 py-1.5 pr-4 pl-3 font-mono text-[0.6875rem] tracking-widest text-accent uppercase shadow-inner-top"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {data.badge}
          </motion.span>

          {/* Nombre + rol */}
          <motion.div variants={item} className="flex flex-col gap-2">
            <h1 className="text-sm font-medium tracking-tight text-ink md:text-base">
              {profile.name}
            </h1>
            <p className="text-xs text-ink-muted md:text-sm">{data.role}</p>
          </motion.div>

          {/* Titular animado palabra por palabra */}
          {/* El degradado se aplica palabra por palabra: cada `span` anima su
              propia entrada, así que necesita su propio relleno recortado. */}
          <p className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance md:text-6xl lg:text-7xl">
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={item}
                className="nc-heading-gradient mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {accentWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={item}
                className="nc-accent-gradient mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Entradilla (cuerpo del Markdown) */}
          <motion.div variants={item} className="max-w-2xl">
            <Markdown>{body}</Markdown>
          </motion.div>

          {/* Llamados a la acción */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Button href={CONTACT_ANCHOR} size="lg">
              {t('actions.contact')}
              <ICONS.arrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              {t('actions.viewProjects')}
            </Button>
          </motion.div>

          {/* Métricas */}
          <motion.dl
            variants={item}
            className="mt-2 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
          >
            {(data.stats ?? []).map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 bg-canvas-base/60 p-5 backdrop-blur-sm transition-colors duration-200 hover:bg-surface-hover"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-semibold tracking-tight text-ink">
                  {stat.value}
                </dd>
                <p className="text-xs leading-relaxed text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6, ease: EASE_EXPO }}
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase transition-colors duration-200 hover:text-ink lg:flex"
      >
        {data.scrollHint}
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-6 w-6 place-items-center"
        >
          <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 rotate-180" />
        </motion.span>
      </motion.a>
    </section>
  )
}
