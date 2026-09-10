// Perfil y redes sociales — el contenido editable está en `src/content/profile.yaml`.
import rawProfile from '../content/profile.yaml?raw'
import { parseYaml } from './content'

export const profile = parseYaml(rawProfile)

export const socialLinks = profile.social ?? []

export const headerSocialLinks = socialLinks.filter((link) => link.showInHeader)

/**
 * URL del retrato. El archivo está en `public/`, así que hay que anteponer la
 * base del despliegue (`/NubeCognitiva/` en producción, `/` en desarrollo).
 */
export const photoUrl = profile.photo
  ? `${import.meta.env.BASE_URL}${String(profile.photo).replace(/^\//, '')}`
  : null
