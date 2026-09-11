// Perfil y redes sociales — el contenido editable está en `src/content/profile.yaml`.
import rawProfile from '../content/profile.yaml?raw'
import { parseYaml } from './content'

export const profile = parseYaml(rawProfile)

export const socialLinks = profile.social ?? []

export const headerSocialLinks = socialLinks.filter((link) => link.showInHeader)

/**
 * Construye la URL de un archivo de la carpeta `public/`. Hay que anteponer la
 * base del despliegue, que en producción es `/NubeCognitiva/`.
 * Ejemplo: `publicUrl('testimonios/ana.jpg')`.
 */
export function publicUrl(file) {
  if (!file) return null
  return `${import.meta.env.BASE_URL}${String(file).replace(/^\//, '')}`
}

/** URL del retrato del hero. */
export const photoUrl = publicUrl(profile.photo)
