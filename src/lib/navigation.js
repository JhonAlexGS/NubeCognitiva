/**
 * Orden y anclas de las secciones. Es estructura, no contenido: las etiquetas
 * visibles se traducen desde `src/content/ui.<idioma>.yaml` (clave `nav.*`).
 */
export const SECTION_IDS = [
  'hero',
  'about',
  'projects',
  'skills',
  'education',
  'testimonials',
  'contact',
]

/** Enlaces que aparecen en el menú (el contacto tiene su propio botón CTA). */
export const NAV_ITEMS = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'testimonials', labelKey: 'nav.testimonials' },
]

export const CONTACT_ANCHOR = '#contact'
