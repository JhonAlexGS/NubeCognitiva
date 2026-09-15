import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

/**
 * Devuelve `true` cuando la página se ha desplazado más de `umbral` píxeles.
 *
 * Lo comparten el botón de «volver arriba» y el de la hoja de vida: el segundo
 * se aparta de la esquina justo cuando aparece el primero, así que los dos
 * tienen que decidirlo con el mismo número.
 */
export function useScrolledPast(umbral = 600) {
  const [pasado, setPasado] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (valor) => setPasado(valor > umbral))

  return pasado
}
