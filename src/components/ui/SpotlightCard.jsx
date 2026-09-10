import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { EASE_EXPO } from '../../lib/motion'

/**
 * Tarjeta de cristal con foco radial que sigue al cursor (elemento firma del
 * design system). El resplandor se dibuja en una capa `pointer-events-none`
 * para no interferir con los enlaces internos.
 */
export function SpotlightCard({ className = '', lift = true, children, ...rest }) {
  const prefersReducedMotion = useReducedMotion()
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const [hovered, setHovered] = useState(false)

  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, var(--accent-glow), transparent 70%)`

  const handleMouseMove = useCallback(
    (event) => {
      const bounds = event.currentTarget.getBoundingClientRect()
      mouseX.set(event.clientX - bounds.left)
      mouseY.set(event.clientY - bounds.top)
    },
    [mouseX, mouseY],
  )

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={prefersReducedMotion || !lift ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE_EXPO }}
      className={`nc-card group ${className}`}
      {...rest}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
        style={{ background: spotlight }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      {children}
    </motion.div>
  )
}
