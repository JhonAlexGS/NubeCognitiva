/**
 * Duración de un empleo a partir de su `period` del YAML, p. ej.
 * «Sep 2025 – Ago 2026» → 12 meses. Entiende los meses abreviados en español
 * y en inglés, y «Actualidad» / «Present» como fecha de fin (cuenta hasta hoy).
 * Si el texto no se puede interpretar devuelve `null` y la tarjeta
 * simplemente no muestra la duración.
 */

const MESES = {
  ene: 0, jan: 0,
  feb: 1,
  mar: 2,
  abr: 3, apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  ago: 7, aug: 7,
  sep: 8, sept: 8,
  oct: 9,
  nov: 10,
  dic: 11, dec: 11,
}

const ACTUAL = /actual|presente|present|hoy|now/i

function leerFecha(texto) {
  const coincidencia = String(texto)
    .trim()
    .toLowerCase()
    .match(/^([a-zá-ú]+)\.?\s+(\d{4})$/)
  if (!coincidencia) return null
  const mes = MESES[coincidencia[1]]
  if (mes === undefined) return null
  return { mes, anio: Number(coincidencia[2]) }
}

/** `{ months, current }` o `null`. `current` indica que el empleo sigue activo. */
export function parsePeriod(period) {
  const [inicioTexto, finTexto] = String(period ?? '').split(/\s*[–—-]\s*/)
  const inicio = leerFecha(inicioTexto)
  if (!inicio || !finTexto) return null

  const current = ACTUAL.test(finTexto)
  const hoy = new Date()
  const fin = current ? { mes: hoy.getMonth(), anio: hoy.getFullYear() } : leerFecha(finTexto)
  if (!fin) return null

  // Meses inclusivos: «Ene – Dic» del mismo año son 12 meses.
  const months = (fin.anio - inicio.anio) * 12 + (fin.mes - inicio.mes) + 1
  return months > 0 ? { months, current } : null
}

/**
 * Texto corto de la duración con las etiquetas del YAML:
 * `{ year, years, month, months }` → «1 año», «2 años 3 meses», «8 meses».
 */
export function formatDuration(months, labels = {}) {
  const anios = Math.floor(months / 12)
  const meses = months % 12
  const partes = []
  if (anios) partes.push(`${anios} ${anios === 1 ? labels.year : labels.years}`)
  if (meses) partes.push(`${meses} ${meses === 1 ? labels.month : labels.months}`)
  return partes.join(' ')
}
