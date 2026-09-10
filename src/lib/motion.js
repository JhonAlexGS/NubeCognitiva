/**
 * Presets de animación compartidos.
 * Regla del design system: movimientos pequeños (4-24px), 200-600ms y
 * easing expo-out. Nada rebota ni sobrepasa.
 */

export const EASE_EXPO = [0.16, 1, 0.3, 1]

/** Umbral de viewport para las animaciones al hacer scroll. */
export const VIEWPORT = { once: true, amount: 0.15, margin: '0px 0px -80px 0px' }

/** Contenedor que escalona la entrada de sus hijos. */
export const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Entrada estándar: fade + desplazamiento vertical corto. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
}

/** Entrada para tarjetas y superficies. */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
}

/** Microinteracción compartida por botones y tarjetas clickeables. */
export const tapScale = { scale: 0.98 }

/** Variantes sin movimiento, para `prefers-reduced-motion`. */
export const still = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0 } },
}
