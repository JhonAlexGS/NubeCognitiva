import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Los textos de la interfaz se editan en YAML, no en código.
import rawEn from '../content/ui.en.yaml?raw'
import rawEs from '../content/ui.es.yaml?raw'
import { DEFAULT_LANG, SUPPORTED_LANGS, normalizeLang, parseYaml } from '../lib/content'

export const LANG_STORAGE_KEY = 'nc-lang'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (stored) return normalizeLang(stored)
  } catch {
    /* localStorage puede estar bloqueado (modo privado) */
  }
  return normalizeLang(navigator?.language ?? DEFAULT_LANG)
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: parseYaml(rawEs) },
    en: { translation: parseYaml(rawEn) },
  },
  lng: readStoredLang(),
  fallbackLng: DEFAULT_LANG,
  supportedLngs: SUPPORTED_LANGS,
  interpolation: { escapeValue: false },
})

// Persiste la preferencia y mantiene `<html lang>` sincronizado para lectores de pantalla.
i18n.on('languageChanged', (lang) => {
  const short = normalizeLang(lang)
  document.documentElement.lang = short
  try {
    localStorage.setItem(LANG_STORAGE_KEY, short)
  } catch {
    /* sin persistencia disponible */
  }
})

document.documentElement.lang = normalizeLang(i18n.language)

export default i18n
