import { useTranslation } from 'react-i18next'
import { normalizeLang } from '../lib/content'

/** Idioma activo normalizado a `es` | `en`, para elegir el archivo de contenido. */
export function useLang() {
  const { i18n } = useTranslation()
  return normalizeLang(i18n.resolvedLanguage ?? i18n.language)
}
