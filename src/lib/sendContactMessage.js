import { profile } from './profile'

/**
 * Envío del formulario de contacto.
 *
 * Si defines `VITE_CONTACT_ENDPOINT` en un archivo `.env` (Formspree, Getform,
 * una Lambda propia…), el mensaje se envía por POST a ese endpoint. Mientras no
 * exista, se abre el cliente de correo del visitante con el mensaje ya escrito,
 * de modo que el formulario siempre hace algo útil.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

export const hasContactEndpoint = Boolean(ENDPOINT)

export async function sendContactMessage({ name, email, message }) {
  if (!ENDPOINT) {
    const subject = encodeURIComponent(`Portafolio — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    return { mode: 'mailto' }
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  if (!response.ok) {
    throw new Error(`El servicio de contacto respondió ${response.status}`)
  }

  return { mode: 'api' }
}
