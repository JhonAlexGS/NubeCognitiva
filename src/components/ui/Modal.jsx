import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { EASE_EXPO } from '../../lib/motion'
import { ICONS } from './icons'

const FOCUSABLES =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

/**
 * Diálogo modal accesible: se dibuja en un portal sobre el resto de la página.
 *
 * Se encarga de lo que se suele olvidar en un popup hecho a mano: cerrar con
 * Escape, atrapar el foco dentro mientras está abierto, devolverlo al elemento
 * que lo abrió al cerrarse y bloquear el scroll del fondo.
 */
export function Modal({ open, onClose, titleId, children }) {
  const { t } = useTranslation()
  const panel = useRef(null)
  const focoPrevio = useRef(null)

  useEffect(() => {
    if (!open) return

    focoPrevio.current = document.activeElement
    const scrollOriginal = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const temporizador = setTimeout(() => {
      const primero = panel.current?.querySelector(FOCUSABLES)
      ;(primero ?? panel.current)?.focus()
    }, 20)

    return () => {
      clearTimeout(temporizador)
      document.body.style.overflow = scrollOriginal
      // Devolver el foco a quien abrió el diálogo, para no perder el sitio.
      if (focoPrevio.current instanceof HTMLElement) focoPrevio.current.focus()
    }
  }, [open])

  const alPulsarTecla = useCallback(
    (evento) => {
      if (evento.key === 'Escape') {
        evento.preventDefault()
        onClose()
        return
      }

      if (evento.key !== 'Tab') return

      // Trampa de foco: el tabulador da la vuelta dentro del diálogo.
      const enfocables = Array.from(panel.current?.querySelectorAll(FOCUSABLES) ?? [])
      if (enfocables.length === 0) return

      const primero = enfocables[0]
      const ultimo = enfocables[enfocables.length - 1]

      if (evento.shiftKey && document.activeElement === primero) {
        evento.preventDefault()
        ultimo.focus()
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault()
        primero.focus()
      }
    },
    [onClose],
  )

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          onKeyDown={alPulsarTecla}
        >
          {/* Fondo: cerrar al pulsar fuera */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-canvas-deep/75 backdrop-blur-md"
          />

          <motion.div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE_EXPO }}
            className="nc-card nc-scroll-area relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-b-none sm:rounded-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t('actions.close')}
              className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-colors duration-200 hover:border-line-hover hover:bg-surface-hover hover:text-ink"
            >
              <ICONS.close aria-hidden="true" className="h-4 w-4" />
            </button>

            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
