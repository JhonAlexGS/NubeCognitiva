import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../../hooks/useActiveSection'
import { EASE_EXPO } from '../../lib/motion'
import { CONTACT_ANCHOR, NAV_ITEMS, SECTION_IDS } from '../../lib/navigation'
import { headerSocialLinks, profile } from '../../lib/profile'
import { LanguageToggle } from '../LanguageToggle/LanguageToggle'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { Button } from '../ui/Button'
import { getIcon, ICONS } from '../ui/icons'

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24))

  // Cierra el menú móvil con Escape y bloquea el scroll de fondo mientras está abierto.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_EXPO }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <a
        href="#main"
        className="sr-only rounded-lg bg-accent px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50"
      >
        {t('actions.skipToContent')}
      </a>

      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open
            ? 'border-b border-line bg-canvas-base/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          aria-label={profile.brand}
          className="nc-container flex h-16 items-center justify-between gap-4 md:h-18"
        >
          {/* Marca */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 rounded-lg"
            aria-label={profile.name}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line-accent bg-accent/10 font-mono text-xs font-semibold tracking-tight text-accent shadow-inner-top transition-colors duration-200 group-hover:bg-accent/20">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              {profile.brand}
            </span>
          </a>

          {/* Navegación de escritorio */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-surface hover:text-ink ${
                      isActive ? 'text-ink' : 'text-ink-muted'
                    }`}
                  >
                    {t(item.labelKey)}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-px h-px bg-accent"
                        transition={{ duration: 0.3, ease: EASE_EXPO }}
                      />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex">
              {headerSocialLinks.map((link) => {
                const Icon = getIcon(link.icon)
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    title={link.label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.2, ease: EASE_EXPO }}
                    className="grid h-10 w-10 place-items-center rounded-lg text-ink-muted transition-colors duration-200 hover:bg-surface hover:text-ink"
                  >
                    <Icon aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
                  </motion.a>
                )
              })}
            </div>

            <LanguageToggle />
            <ThemeToggle />

            {/* `max-lg:hidden` (y no `hidden lg:inline-flex`) para ganarle al
                `inline-flex` que el botón trae por defecto. */}
            <Button href={CONTACT_ANCHOR} size="sm" className="max-lg:hidden">
              {t('actions.contact')}
            </Button>

            {/* Menú hamburguesa (móvil / tablet) */}
            <motion.button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t('actions.closeMenu') : t('actions.openMenu')}
              aria-expanded={open}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2, ease: EASE_EXPO }}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink shadow-inner-top transition-colors duration-200 hover:bg-surface-hover lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -60 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 60 }}
                  transition={{ duration: 0.2, ease: EASE_EXPO }}
                  className="grid place-items-center"
                >
                  {open ? (
                    <ICONS.close aria-hidden="true" className="h-5 w-5" />
                  ) : (
                    <ICONS.menu aria-hidden="true" className="h-5 w-5" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Panel móvil */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: EASE_EXPO }}
            className="border-b border-line bg-canvas-base/95 backdrop-blur-xl lg:hidden"
          >
            <div className="nc-container flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base transition-colors duration-200 hover:bg-surface hover:text-ink ${
                    activeSection === item.id ? 'text-ink' : 'text-ink-muted'
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              ))}

              <div className="mt-3 flex items-center gap-2 sm:hidden">
                {headerSocialLinks.map((link) => {
                  const Icon = getIcon(link.icon)
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={link.label}
                      className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>

              <Button
                href={CONTACT_ANCHOR}
                size="lg"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                {t('actions.contact')}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
