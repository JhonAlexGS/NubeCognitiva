import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'
import { EASE_EXPO } from '../../lib/motion'
import { ICONS } from '../ui/icons'

/** Interruptor de tema claro/oscuro. La preferencia se guarda en localStorage. */
export function ThemeToggle({ className = '' }) {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const Icon = isDark ? ICONS.sun : ICONS.moon

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('actions.toggleThemeToLight') : t('actions.toggleThemeToDark')}
      title={t('actions.toggleTheme')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.2, ease: EASE_EXPO }}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-line bg-surface text-ink-muted shadow-inner-top transition-colors duration-200 hover:border-line-hover hover:bg-surface-hover hover:text-ink ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -70, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.7 }}
          transition={{ duration: 0.25, ease: EASE_EXPO }}
          className="grid place-items-center"
        >
          <Icon aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
