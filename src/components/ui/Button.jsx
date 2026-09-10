import { motion } from 'framer-motion'
import { EASE_EXPO } from '../../lib/motion'

const BASE =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-medium ' +
  'whitespace-nowrap transition-colors duration-200 ease-out disabled:pointer-events-none disabled:opacity-50'

const VARIANTS = {
  primary: 'nc-shine bg-accent text-white shadow-cta hover:bg-accent-bright',
  secondary:
    'border border-line bg-surface text-ink shadow-inner-top hover:border-line-hover hover:bg-surface-hover',
  ghost: 'text-ink-muted hover:bg-surface hover:text-ink',
}

const SIZES = {
  sm: 'h-9 px-3.5 text-[0.8125rem]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

/**
 * Botón con microinteracciones (escala sutil al pasar el mouse y al hacer clic).
 * Renderiza `<a>` si recibe `href`, para no perder semántica en los enlaces.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98, y: 0 },
    transition: { duration: 0.2, ease: EASE_EXPO },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...rest}>
      {children}
    </motion.button>
  )
}
