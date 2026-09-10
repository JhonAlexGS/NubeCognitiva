import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'
import { VIEWPORT, fadeUp, still } from '../../lib/motion'

/**
 * Envoltorio para las animaciones al entrar en el viewport.
 * Centraliza el umbral, el easing y el respeto a `prefers-reduced-motion`.
 */
export function Reveal({
  as = 'div',
  variants = fadeUp,
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion()

  const resolved = useMemo(() => {
    if (prefersReducedMotion) return still
    if (!delay) return variants
    return {
      hidden: variants.hidden,
      visible: {
        ...variants.visible,
        transition: { ...variants.visible?.transition, delay },
      },
    }
  }, [prefersReducedMotion, variants, delay])

  const Component = motion[as] ?? motion.div

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={resolved}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
