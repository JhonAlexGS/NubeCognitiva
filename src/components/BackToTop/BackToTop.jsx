import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EASE_EXPO } from '../../lib/motion'
import { ICONS } from '../ui/icons'

/** Botón flotante «volver arriba»: aparece tras desplazarse ~600px. */
export function BackToTop() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 600))

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label={t('actions.backToTop')}
          title={t('actions.backToTop')}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: EASE_EXPO }}
          className="fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-line-accent bg-canvas-elevated/90 text-accent shadow-card backdrop-blur-xl transition-colors duration-200 hover:bg-surface-hover md:right-8 md:bottom-8"
        >
          <ICONS.arrowUp aria-hidden="true" className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
