/**
 * Fondo ambiental de cuatro capas (gradiente base + blobs + ruido + grilla).
 * Es puramente decorativo: no captura eventos y queda detrás de todo.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundImage: 'var(--page-gradient)' }}
    >
      {/* Capa 3 — pozos de luz animados */}
      <div className="absolute inset-0" style={{ opacity: 'var(--blob-opacity)' }}>
        <div className="animate-float absolute -top-[22rem] left-1/2 h-[44rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[150px] md:h-[56rem] md:w-[80rem]" />
        <div className="animate-float-slow absolute top-1/4 -left-40 h-[32rem] w-[24rem] rounded-full bg-fuchsia-500/15 blur-[120px] md:h-[50rem] md:w-[38rem]" />
        <div className="animate-float absolute top-[45%] -right-40 h-[28rem] w-[22rem] rounded-full bg-sky-500/12 blur-[100px] md:h-[44rem] md:w-[32rem]" />
        <div className="animate-glow absolute bottom-0 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[130px] md:w-[64rem]" />
      </div>

      {/* Capa 4 — grilla técnica de 64px */}
      <div className="nc-grid-overlay absolute inset-0 text-ink" />

      {/* Capa 2 — ruido sutil contra el banding */}
      <div className="nc-noise absolute inset-0" />
    </div>
  )
}
