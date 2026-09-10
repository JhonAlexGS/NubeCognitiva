import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useCallback } from 'react'
import { ICONS } from '../../../components/ui/icons'
import { EASE_EXPO } from '../../../lib/motion'

/**
 * Sub-componente del Hero: no tiene contenido propio.
 * Recibe la ruta y el texto alternativo desde el padre (`profile.yaml` y
 * `Hero/content.<idioma>.md`).
 *
 * Efectos: inclinación 3D siguiendo al cursor, resplandor de acento que late
 * detrás, viñeta inferior y grano encima de la foto. El grano no es sólo
 * decorativo: disimula la falta de resolución del JPG original.
 */
// Elipse suave centrada algo por encima del medio (donde está la cara), para
// que sólo se difuminen las esquinas y los bordes.
const MASK = 'radial-gradient(96% 90% at 50% 42%, #000 38%, transparent 88%)'

export function PortraitCard({ src, alt, location, width, height }) {
  const prefersReducedMotion = useReducedMotion()

  // Posición del cursor dentro de la tarjeta, normalizada a [-0.5, 0.5].
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const spring = { stiffness: 160, damping: 18, mass: 0.4 }
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], ['7deg', '-7deg']), spring)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], ['-7deg', '7deg']), spring)

  const handleMouseMove = useCallback(
    (event) => {
      if (prefersReducedMotion) return
      const bounds = event.currentTarget.getBoundingClientRect()
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
    },
    [prefersReducedMotion, pointerX, pointerY],
  )

  const handleMouseLeave = useCallback(() => {
    pointerX.set(0)
    pointerY.set(0)
  }, [pointerX, pointerY])

  return (
    <div
      // Alineado a la izquierda como el resto del hero, no centrado.
      className="relative w-full max-w-[10rem] sm:max-w-[12.5rem] lg:max-w-[389px]"
      style={{ perspective: 1200 }}
    >
      {/* Resplandor ambiental detrás del retrato */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent/25 blur-[80px]"
      />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={prefersReducedMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.3, ease: EASE_EXPO }}
        style={
          prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }
        }
        className="nc-card group relative aspect-square overflow-hidden"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          // Es el elemento más grande del primer viewport: se carga sin diferir.
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable="false"
          // La máscara radial funde los bordes de la foto con la tarjeta. Sin
          // ella, el fondo blanco del original se lee como un bloque brillante
          // en modo oscuro; así el retrato «emerge» del fondo.
          style={{
            maskImage: MASK,
            WebkitMaskImage: MASK,
          }}
          className="h-full w-full scale-[1.02] object-cover object-center transition-transform duration-500 ease-out select-none group-hover:scale-105"
        />

        {/* Viñeta inferior: asienta el retrato y da contraste al chip */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas-deep/80 via-canvas-deep/10 to-transparent"
        />

        {/* Grano: disimula la baja resolución del original */}
        <span aria-hidden="true" className="nc-noise pointer-events-none absolute inset-0" />

        {/* Chip de ubicación */}
        {location ? (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas-base/70 py-1 pr-2.5 pl-2 font-mono text-[0.625rem] tracking-wide text-ink backdrop-blur-md lg:bottom-4 lg:left-4 lg:text-[0.6875rem]">
            <ICONS.location aria-hidden="true" className="h-3 w-3 text-accent" />
            {location}
          </span>
        ) : null}
      </motion.div>
    </div>
  )
}
