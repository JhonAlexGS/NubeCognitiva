import { load } from 'js-yaml'

/**
 * Utilidades para leer los archivos de contenido editable (.md / .yaml).
 *
 * Convención del proyecto: cada carpeta de componente guarda su contenido en
 * archivos `<base>.<idioma>.<ext>` (por ejemplo `content.es.md` y
 * `content.en.md`). Los componentes los cargan con `import.meta.glob(...)`
 * en modo `eager` + `?raw`, y estas funciones eligen la variante del idioma
 * activo. Si falta la traducción, se cae al español.
 */

export const DEFAULT_LANG = 'es'
export const SUPPORTED_LANGS = ['es', 'en']

/** Normaliza códigos tipo `es-CO` o `en-US` a `es` / `en`. */
export function normalizeLang(lang) {
  const short = String(lang || '').toLowerCase().split('-')[0]
  return SUPPORTED_LANGS.includes(short) ? short : DEFAULT_LANG
}

/**
 * Devuelve el texto crudo del archivo del idioma pedido.
 * @param {Record<string, string>} modules mapa de `import.meta.glob` eager + raw
 */
export function pickRaw(modules, lang, base = 'content', ext = 'md') {
  const wanted = `./${base}.${normalizeLang(lang)}.${ext}`
  const fallback = `./${base}.${DEFAULT_LANG}.${ext}`
  return modules[wanted] ?? modules[fallback] ?? ''
}

/** Igual que `pickRaw`, pero además parsea el YAML a objeto/array. */
export function pickYaml(modules, lang, base = 'content') {
  const raw = pickRaw(modules, lang, base, 'yaml')
  if (!raw) return null
  try {
    return load(raw) ?? null
  } catch (error) {
    // Un error de sintaxis en el YAML no debe tumbar la página entera.
    console.error(`[content] YAML inválido en "${base}.${normalizeLang(lang)}.yaml"`, error)
    return null
  }
}

/** Parsea una cadena YAML suelta (usada por los recursos de i18n). */
export function parseYaml(raw) {
  try {
    return load(raw) ?? {}
  } catch (error) {
    console.error('[content] YAML inválido', error)
    return {}
  }
}

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

/**
 * Separa la cabecera YAML de un `.md` (título, etiqueta, entradilla...) del
 * cuerpo en Markdown:
 *
 *     ---
 *     title: Sobre mí
 *     ---
 *     Texto en **Markdown**...
 *
 * @returns {{ data: Record<string, unknown>, body: string }}
 */
export function parseFrontMatter(raw) {
  const match = FRONT_MATTER.exec(raw ?? '')
  if (!match) return { data: {}, body: (raw ?? '').trim() }
  return { data: parseYaml(match[1]), body: raw.slice(match[0].length).trim() }
}

/** `pickRaw` + separación de cabecera: lo que consumen las secciones con `.md`. */
export function pickMarkdown(modules, lang, base = 'content') {
  return parseFrontMatter(pickRaw(modules, lang, base, 'md'))
}
