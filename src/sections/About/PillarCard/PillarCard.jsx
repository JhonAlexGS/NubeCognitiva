import { createElement } from 'react'
import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { getIcon } from '../../../components/ui/icons'
import { getTechLogo } from '../../../components/ui/techLogos'
import { scaleIn } from '../../../lib/motion'

/**
 * Sub-componente de «Sobre mí»: una tarjeta por pilar del perfil.
 * Recibe cada pilar desde `About/content.<idioma>.md`.
 *
 * Cada pilar tiene su propio tono (`color` en el YAML), que tiñe el ícono, su
 * halo y la línea superior que aparece al pasar el cursor. De fondo lleva su
 * número (01-04) en grande y muy tenue, y al pie las tecnologías de ese pilar:
 * con su logo en color de marca (atenuado, pleno al pasar el cursor) si existe
 * en `techLogos.js`, o sólo con el nombre.
 */
export function PillarCard({ pillar, index }) {
  const numero = String(index + 1).padStart(2, '0')

  return (
    <Reveal variants={scaleIn} delay={index * 0.08} className="h-full">
      <SpotlightCard
        style={{ '--pillar': pillar.color || 'var(--accent)' }}
        className="nc-pillar flex h-full flex-col gap-3.5 p-5"
      >
        {/* Número de fondo */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2 right-4 font-mono leading-none text-6xl font-bold tracking-tighter text-ink/[0.06] select-none transition-colors duration-500 group-hover:text-[color:color-mix(in_srgb,var(--pillar)_18%,transparent)]"
        >
          {numero}
        </span>

        <span aria-hidden="true" className="nc-pillar__icon grid h-11 w-11 place-items-center rounded-xl">
          {createElement(getIcon(pillar.icon), { className: 'h-5 w-5' })}
        </span>

        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-base font-semibold tracking-tight text-ink">{pillar.title}</h3>
          <p className="text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
        </div>

        {pillar.tech?.length ? (
          <ul className="flex flex-wrap items-center gap-1.5 border-t border-line pt-3.5">
            {pillar.tech.map((nombre) => {
              const logo = getTechLogo(nombre)
              const Logo = logo?.icon
              return Logo ? (
                <li
                  key={nombre}
                  title={nombre}
                  style={logo.color ? { '--brand': logo.color } : undefined}
                  className="group/logo grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface text-ink-subtle transition-all duration-200 hover:-translate-y-0.5 hover:border-line-hover"
                >
                  <Logo
                    aria-hidden="true"
                    className="h-4 w-4 text-[color:var(--brand,var(--ink-muted))] opacity-75 transition-opacity duration-200 group-hover/logo:opacity-100"
                  />
                  <span className="sr-only">{nombre}</span>
                </li>
              ) : (
                <li
                  key={nombre}
                  className="rounded-lg border border-line bg-surface px-2 py-1.5 font-mono text-[0.625rem] leading-none text-ink-subtle"
                >
                  {nombre}
                </li>
              )
            })}
          </ul>
        ) : null}
      </SpotlightCard>
    </Reveal>
  )
}
