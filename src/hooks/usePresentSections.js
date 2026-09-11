import { useEffect, useState } from 'react'

/**
 * Devuelve los ids que existen de verdad en la página.
 *
 * Algunas secciones se ocultan solas cuando no tienen contenido —por ejemplo,
 * «Testimonios» desaparece mientras ninguna reseña tenga texto—. Sin esto, el
 * menú seguiría mostrando un enlace que no lleva a ninguna parte.
 *
 * Observa el DOM porque las secciones se cargan de forma diferida y aparecen
 * unos milisegundos después del primer render.
 */
export function usePresentSections(ids) {
  const [present, setPresent] = useState(ids)

  useEffect(() => {
    const comprobar = () => {
      const encontrados = ids.filter((id) => document.getElementById(id))
      setPresent((previos) =>
        previos.length === encontrados.length && previos.every((v, i) => v === encontrados[i])
          ? previos
          : encontrados,
      )
    }

    comprobar()

    const main = document.getElementById('main')
    if (!main) return

    const observador = new MutationObserver(comprobar)
    observador.observe(main, { childList: true, subtree: true })
    return () => observador.disconnect()
  }, [ids])

  return present
}
