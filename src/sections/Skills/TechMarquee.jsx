import { createElement } from 'react'
import { getIcon } from '../../components/ui/icons'
import { getTechLogo } from '../../components/ui/techLogos'

/**
 * Carrusel infinito de tecnologías («ferrocarril»): cada carril —con su título
 * a la izquierda, o encima en pantallas estrechas— se desliza en bucle,
 * alternando el sentido, y se detiene al pasar el cursor.
 *
 * El bucle no tiene costura porque el carril se pinta dos veces seguidas y la
 * animación lo desplaza exactamente la mitad (ver `.nc-marquee` en
 * `src/index.css`). Con movimiento reducido la copia se oculta y las
 * tecnologías quedan quietas, centradas en varias líneas.
 *
 * Es el único listado del stack en la página, así que es accesible: los
 * lectores de pantalla leen el título de cada carril y su lista una sola vez;
 * la copia del bucle y las repeticiones van con `aria-hidden`.
 *
 * Cada tecnología lleva su logo si existe en `techLogos.js`. Si no, usa el del
 * carril (`brand` en el YAML, p. ej. los servicios de AWS llevan el de AWS) y,
 * si tampoco hay, se muestra sólo el nombre.
 */

// Mínimo de tecnologías por vuelta. Con menos, el carril podría ser más
// estrecho que el contenedor y se vería un hueco antes de repetirse: los
// carriles cortos se repiten hasta llegar a este número.
const MIN_ITEMS = 12

export function TechMarquee({ rows = [], countLabel = '' }) {
  const visibleRows = rows.filter((row) => row.items?.length)

  if (!visibleRows.length) return null

  return (
    // En móvil cada categoría (título + carril) se separa de la anterior con
    // una línea fina; en escritorio los paneles de los títulos ya las separan.
    <div className="flex flex-col gap-6 lg:gap-4">
      {visibleRows.map((row, index) => {
        const repeats = Math.ceil(MIN_ITEMS / row.items.length)
        const items = Array.from({ length: repeats }, () => row.items).flat()
        const fallback = row.brand ? getTechLogo(row.brand) : undefined
        return (
          <div
            key={row.title ?? index}
            className="group/lane flex flex-col gap-2 border-t border-line pt-6 first:border-t-0 first:pt-0 lg:flex-row lg:items-center lg:gap-6 lg:border-t-0 lg:pt-0"
          >
            {row.title ? <LaneTitle row={row} countLabel={countLabel} /> : null}
            <div className="nc-marquee min-w-0 flex-1">
              <div
                className="nc-marquee__track"
                data-reverse={index % 2 === 1 ? 'true' : 'false'}
                // Unos 7 s por tecnología: la velocidad se mantiene aunque
                // cambie el largo.
                style={{ '--marquee-duration': `${items.length * 7}s` }}
              >
                <MarqueeList items={items} size={row.items.length} fallback={fallback} />
                <MarqueeList items={items} size={row.items.length} fallback={fallback} copy />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Letrero del carril, como el de una estación: ícono, título y un contador con
 * punto encendido. En móvil va suelto, sin panel, para no cargar la pantalla;
 * en escritorio es un panel con barra de acento que ocupa una columna fija a la izquierda para que todos los carriles arranquen a la misma
 * altura, y una línea lo une a su carril. Es discreto a propósito —el
 * protagonismo es de los logos— y se aviva un poco cuando el cursor pasa por
 * el carril (ver `.nc-lane-title` en `src/index.css`).
 */
function LaneTitle({ row, countLabel }) {
  return (
    <div className="nc-lane-title flex shrink-0 items-center gap-3 lg:w-60 lg:rounded-xl lg:border lg:border-line lg:py-2.5 lg:pl-4 lg:pr-3 lg:shadow-inner-top">
      <span
        aria-hidden="true"
        className="nc-lane-title__icon grid h-8 w-8 shrink-0 lg:h-9 lg:w-9 place-items-center rounded-lg border border-line text-accent"
      >
        {createElement(getIcon(row.icon), { className: 'h-4 w-4' })}
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="truncate text-sm font-medium tracking-tight text-ink-muted transition-colors duration-300 group-hover/lane:text-ink">
          {row.title}
        </h3>
        <p className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-subtle">
          <span aria-hidden="true" className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-50 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {String(row.items.length).padStart(2, '0')} {countLabel}
        </p>
      </div>
    </div>
  )
}

// `size` es el largo real del carril: lo que pasa de ahí son repeticiones, que
// se ocultan con movimiento reducido (y a los lectores de pantalla) igual que
// la copia.
function MarqueeList({ items, size, fallback, copy = false }) {
  return (
    <ul
      className="nc-marquee__list"
      data-copy={copy ? 'true' : undefined}
      aria-hidden={copy ? 'true' : undefined}
    >
      {items.map((name, index) => {
        const logo = getTechLogo(name) ?? fallback
        const Logo = logo?.icon
        const repeat = index >= size
        return (
          <li
            key={index}
            data-repeat={repeat ? 'true' : undefined}
            aria-hidden={repeat && !copy ? 'true' : undefined}
            style={logo?.color ? { '--brand': logo.color } : undefined}
            className="nc-logo-pill flex h-10 shrink-0 items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 text-xs font-medium shadow-inner-top"
          >
            {Logo ? <Logo aria-hidden="true" className="h-5 w-5 shrink-0" /> : null}
            <span>{name}</span>
          </li>
        )
      })}
    </ul>
  )
}
