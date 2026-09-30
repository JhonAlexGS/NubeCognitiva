/**
 * Filtros SVG del borde de las tarjetas: el «eléctrico» y el de «llamas».
 *
 * Se declaran una sola vez en toda la página (lo monta `App`) y las tarjetas
 * los invocan desde CSS con `filter: url(#nc-electric-border)` y
 * `url(#nc-flame-border)`.
 *
 * Cómo se mueve el ruido sin que se acabe nunca (ver `ScrollingNoise`):
 *
 * 1. Se genera un solo baldosín de ruido «cosido» (`stitchTiles`), así que
 *    repetido con `feTile` no deja costuras.
 * 2. Ese mosaico se desplaza con `feOffset` exactamente un baldosín por ciclo
 *    y se recorta a una ventana del tamaño del baldosín, que vuelve a repetirse
 *    con `feTile`. El resultado es ruido que se desliza sin fin: al reiniciar la
 *    animación el desplazamiento vale lo mismo que al principio, y siempre
 *    cubre toda la zona del filtro.
 *
 * ⚠️ Antes el ruido se corría 600-700 px, más que el alto de casi todas las
 * tarjetas: durante parte del ciclo se salía del filtro, el mapa de
 * desplazamiento quedaba plano y el borde se veía liso y corrido hacia fuera.
 * La ventana (del baldosín a dos baldosines desde el origen) debe caber dentro
 * de la zona del filtro, que va de -50% a 150%: con baldosines de hasta 144 px
 * basta con tarjetas de más de ~130 px de alto y ~195 px de ancho; la más
 * pequeña del sitio mide 236 × 159.
 *
 * Cada filtro mezcla dos capas (una vertical y otra horizontal) de tamaños
 * distintos para que no se note la repetición del baldosín. Se promedian —no se
 * suman— para que el ruido quede centrado en 0.5 y el trazo vibre a ambos
 * lados de la línea en lugar de desplazarse en bloque hacia un lado. El canal
 * alfa se fuerza a 1 para que el desplazamiento no dependa de la transparencia
 * del ruido.
 */

/**
 * Capa de ruido que se desliza sin fin en un sentido.
 * `axis` es 'y' (vertical) o 'x' (horizontal); `reverse` invierte el sentido
 * (en vertical, `reverse` hace que suba).
 */
function ScrollingNoise({ id, axis, reverse = false, width, height, dur, ...turbulence }) {
  const travel = axis === 'y' ? height : width
  const window = axis === 'y' ? { x: 0, y: height } : { x: width, y: 0 }

  return (
    <>
      <feTurbulence
        x="0"
        y="0"
        width={width}
        height={height}
        type="fractalNoise"
        stitchTiles="stitch"
        {...turbulence}
        result={`${id}Baldosin`}
      />
      <feTile in={`${id}Baldosin`} result={`${id}Mosaico`} />
      <feOffset
        in={`${id}Mosaico`}
        {...window}
        width={width}
        height={height}
        dx="0"
        dy="0"
        result={`${id}Ventana`}
      >
        <animate
          attributeName={axis === 'y' ? 'dy' : 'dx'}
          values={reverse ? `${travel}; 0` : `0; ${travel}`}
          dur={dur}
          repeatCount="indefinite"
        />
      </feOffset>
      <feTile in={`${id}Ventana`} result={id} />
    </>
  )
}

// Promedia dos capas de ruido y deja el alfa a 1 (ver nota superior).
function MixNoise({ a, b, result }) {
  return (
    <>
      <feComposite in={a} in2={b} operator="arithmetic" k2="0.5" k3="0.5" result={`${result}Mezcla`} />
      <feColorMatrix
        in={`${result}Mezcla`}
        type="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 1"
        result={result}
      />
    </>
  )
}

export function ElectricBorderFilter() {
  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter
          id="nc-electric-border"
          colorInterpolationFilters="sRGB"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <ScrollingNoise
            id="rayoV"
            axis="y"
            width={96}
            height={96}
            dur="0.8s"
            baseFrequency="0.03"
            numOctaves="3"
            seed="1"
          />
          <ScrollingNoise
            id="rayoH"
            axis="x"
            width={128}
            height={128}
            dur="1.1s"
            baseFrequency="0.03"
            numOctaves="3"
            seed="2"
          />
          <MixNoise a="rayoV" b="rayoH" result="rayoRuido" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="rayoRuido"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>

        {/* Llamas: el mismo mecanismo, con el ruido estirado en vertical para
            que salgan lenguas altas y estrechas, y la capa vertical subiendo.
            La sensación de fuego la completa el degradado animado del anillo
            (ver `.nc-flame` en `src/index.css`). */}
        <filter
          id="nc-flame-border"
          colorInterpolationFilters="sRGB"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <ScrollingNoise
            id="fuegoV"
            axis="y"
            reverse
            width={128}
            height={96}
            dur="0.6s"
            baseFrequency="0.014 0.05"
            numOctaves="3"
            seed="4"
          />
          <ScrollingNoise
            id="fuegoH"
            axis="x"
            width={144}
            height={128}
            dur="1.4s"
            baseFrequency="0.02 0.06"
            numOctaves="2"
            seed="9"
          />
          <MixNoise a="fuegoV" b="fuegoH" result="fuegoRuido" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="fuegoRuido"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}
