import { createElement } from 'react'
import { getIcon } from '../../components/ui/icons'
import { getTechLogo } from '../../components/ui/techLogos'

/**
 * Carrusel infinito de logos («ferrocarril»): cada fila —con su título a la
 * izquierda, o encima en pantallas estrechas— se desliza en bucle, alternando
 * el sentido, y se detiene al pasar el cursor.
 *
 * El bucle no tiene costura porque la fila se pinta dos veces seguidas y la
 * animación la desplaza exactamente la mitad (ver `.nc-marquee` en
 * `src/index.css`). Con movimiento reducido la copia se oculta y los logos
 * quedan quietos, centrados en varias líneas.
 *
 * Es decorativo: las mismas tecnologías aparecen en las tarjetas de abajo,
 * así que se oculta a los lectores de pantalla para no leerlas dos veces.
 */
// Mínimo de logos por vuelta. Con menos, la fila podría ser más estrecha que
// el contenedor y se vería un hueco antes de repetirse: las filas cortas se
// repiten hasta llegar a este número.
const MIN_LOGOS = 12

export function TechMarquee({ rows = [], countLabel = '' }) {
  const visibleRows = rows
    .map((row) => ({ ...row, items: (row.items ?? []).filter((name) => getTechLogo(name)) }))
    .filter((row) => row.items.length > 0)

  if (!visibleRows.length) return null

  return (
    <div aria-hidden="true" className="flex flex-col gap-6 lg:gap-4">
      {visibleRows.map((row, index) => {
        const repeats = Math.ceil(MIN_LOGOS / row.items.length)
        const items = Array.from({ length: repeats }, () => row.items).flat()
        return (
          <div
            key={row.title ?? index}
            className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6"
          >
            {row.title ? <LaneTitle row={row} countLabel={countLabel} /> : null}
            <div className="nc-marquee min-w-0 flex-1">
              <div
                className="nc-marquee__track"
                data-reverse={index % 2 === 1 ? 'true' : 'false'}
                // Unos 5 s por logo: la velocidad se mantiene aunque cambie el largo.
                style={{ '--marquee-duration': `${items.length * 5}s` }}
              >
                <MarqueeList items={items} size={row.items.length} />
                <MarqueeList items={items} size={row.items.length} copy />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Letrero del carril, como el de una estación: ícono, punto encendido, título
 * y cuántas tecnologías lleva. En escritorio ocupa una columna fija a la
 * izquierda para que los cuatro carriles arranquen a la misma altura.
 */
function LaneTitle({ row, countLabel }) {
  return (
    <div className="flex shrink-0 items-center gap-3 lg:w-56">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top">
        {createElement(getIcon(row.icon), { className: 'h-4 w-4' })}
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <p className="nc-eyebrow flex items-center gap-2 text-[0.6875rem]">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-bright opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
          </span>
          {row.title}
        </p>
        <p className="font-mono text-[0.6875rem] text-ink-subtle">
          {String(row.items.length).padStart(2, '0')} {countLabel}
        </p>
      </div>
    </div>
  )
}

// `size` es el largo real de la fila: lo que pasa de ahí son repeticiones, que
// se ocultan con movimiento reducido igual que la copia.
function MarqueeList({ items, size, copy = false }) {
  return (
    <ul className="nc-marquee__list" data-copy={copy ? 'true' : undefined}>
      {items.map((name, index) => {
        const { icon: Logo, color } = getTechLogo(name)
        return (
          <li
            key={index}
            data-repeat={index >= size ? 'true' : undefined}
            style={color ? { '--brand': color } : undefined}
            className="nc-logo-pill flex shrink-0 items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-muted shadow-inner-top"
          >
            <Logo className="h-6 w-6 shrink-0" />
            <span className="font-medium">{name}</span>
          </li>
        )
      })}
    </ul>
  )
}
