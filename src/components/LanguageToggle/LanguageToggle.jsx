import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLang } from '../../hooks/useLang'
import { EASE_EXPO } from '../../lib/motion'
import { ICONS } from '../ui/icons'

/** Selector español / inglés. Cambia el idioma de todo el contenido del sitio. */
export function LanguageToggle({ className = '' }) {
  const { t, i18n } = useTranslation()
  const lang = useLang()
  const next = lang === 'es' ? 'en' : 'es'

  return (
    <motion.button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      aria-label={`${t('actions.toggleLanguage')}: ${t('language.other')}`}
      title={t('actions.toggleLanguage')}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: EASE_EXPO }}
      className={`inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-surface px-3 font-mono text-xs tracking-widest text-ink-muted uppercase shadow-inner-top transition-colors duration-200 hover:border-line-hover hover:bg-surface-hover hover:text-ink ${className}`}
    >
      <ICONS.globe aria-hidden="true" className="h-4 w-4" />
      <span aria-hidden="true">{t('language.short')}</span>
    </motion.button>
  )
}
