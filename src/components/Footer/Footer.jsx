import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EASE_EXPO } from '../../lib/motion'
import { usePresentSections } from '../../hooks/usePresentSections'
import { NAV_IDS, NAV_ITEMS } from '../../lib/navigation'
import { profile, socialLinks } from '../../lib/profile'
import { getIcon } from '../ui/icons'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  // Mismo criterio que el menú: no enlazamos secciones que no existen.
  const presentes = usePresentSections(NAV_IDS)
  const enlaces = NAV_ITEMS.filter((item) => presentes.includes(item.id))

  return (
    <footer className="relative border-t border-line bg-canvas-deep/60">
      <div className="nc-container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line-accent bg-accent/10 font-mono text-xs font-semibold text-accent shadow-inner-top">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold tracking-tight text-ink">{profile.brand}</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">{t('footer.tagline')}</p>
          <p className="font-mono text-xs tracking-wide text-ink-subtle">{profile.location}</p>
        </div>

        <nav aria-label={t('footer.navTitle')} className="flex flex-col gap-3">
          <h2 className="nc-eyebrow">{t('footer.navTitle')}</h2>
          <ul className="flex flex-col gap-2">
            {enlaces.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="nc-eyebrow">{t('footer.connectTitle')}</h2>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => {
              const Icon = getIcon(link.icon)
              const external = link.url?.startsWith('http')
              return (
                <li key={link.id}>
                  <motion.a
                    href={link.url}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2, ease: EASE_EXPO }}
                    className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 text-accent" />
                    {link.label}
                  </motion.a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="nc-divider" />

      <div className="nc-container flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-subtle sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. {t('footer.rights')}
        </p>
        <p className="font-mono">{t('footer.builtWith')}</p>
      </div>
    </footer>
  )
}
