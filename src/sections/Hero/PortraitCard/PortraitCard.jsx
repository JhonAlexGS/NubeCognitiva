import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useCallback } from 'react'
import { ICONS } from '../../../components/ui/icons'
import { EASE_EXPO } from '../../../lib/motion'

/**
 * Sub-componente del Hero: no tiene contenido propio.
 * Recibe la ruta y el texto alternativo desde el padre (`profile.yaml` y
 * `Hero/content.<idioma>.md`).
 *
 * El retrato es un PNG recortado, así que no lleva marco: la silueta va
 * directamente sobre un disco de luz, como si estuviera iluminada desde
 * detrás. Efectos: inclinación 3D siguiendo al cursor y resplandor que late.
 */

// El corte del PNG termina en seco a la altura de los hombros; este degradado
// lo disuelve contra la página en vez de dejar un borde recto.
const FADE = 'linear-gradient(to bottom, #000 82%, transparent 100%)'

export function PortraitCard({ src, alt, location, width, height }) {
  const prefersReducedMotion = useReducedMotion()

  // Posición del cursor dentro de la tarjeta, normalizada a [-0.5, 0.5].
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const spring = { stiffness: 160, damping: 18, mass: 0.4 }
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], ['6deg', '-6deg']), spring)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], ['-6deg', '6deg']), spring)

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
      className="relative w-full max-w-[12.5rem] sm:max-w-[15rem] lg:max-w-[420px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={prefersReducedMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.3, ease: EASE_EXPO }}
        style={
          prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }
        }
        className="group relative aspect-square"
      >
        {/* Resplandor ambiental detrás de la silueta */}
        <span
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute inset-[6%] rounded-full bg-accent/30 blur-[70px]"
        />

        {/* Disco de cristal: da estructura y hace que la cabeza sobresalga */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[13%] left-1/2 aspect-square w-[86%] -translate-x-1/2 rounded-full border border-line bg-gradient-to-b from-surface to-transparent shadow-inner-top transition-colors duration-300 group-hover:border-line-accent"
        />

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
          style={{ maskImage: FADE, WebkitMaskImage: FADE }}
          className="relative h-full w-full object-contain object-bottom transition-transform duration-500 ease-out select-none group-hover:scale-[1.03]"
        />

        {/* Chip de ubicación. Oculto en móvil, donde el retrato es pequeño y el
            chip lo tapaba; la ubicación sigue estando en contacto y el footer.
            `max-sm:hidden` en vez de `hidden sm:inline-flex` para ganarle al
            `inline-flex` de la propia clase. */}
        {location ? (
          <span className="absolute bottom-1 left-0 inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas-base/70 py-1 pr-2.5 pl-2 font-mono text-[0.625rem] tracking-wide text-ink backdrop-blur-md max-sm:hidden lg:text-[0.6875rem]">
            <ICONS.location aria-hidden="true" className="h-3 w-3 text-accent" />
            {location}
          </span>
        ) : null}
      </motion.div>
    </div>
  )
}
