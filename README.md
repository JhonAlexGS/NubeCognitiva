# NubeCognitiva — Portafolio de Jhon Alexander García Sierra

Portafolio personal construido con **React + Vite**, **Tailwind CSS v4**,
**Framer Motion**, **react-i18next**, **react-hook-form + Zod** y **react-icons**.

Diseño: *Linear / Modern* — fondo ambiental por capas, focos que siguen al
cursor, tipografía con degradado y microinteracciones de 200–300 ms con easing
expo-out.

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # sirve el build
npm run lint     # ESLint
```

Opcional: copia `.env.example` a `.env` y define `VITE_CONTACT_ENDPOINT` si
quieres que el formulario envíe a un servicio (Formspree, Getform, una Lambda…).
Sin esa variable, el formulario abre el cliente de correo del visitante con el
mensaje ya redactado.

---

## Cómo editar el contenido sin tocar código

**Todo el texto visible vive en archivos `.md` y `.yaml`.** Ningún componente
`.jsx` tiene texto escrito dentro: si quieres cambiar una frase, busca el
archivo de contenido de esa sección.

### Reglas

| Tipo de contenido | Formato | Ejemplo |
|---|---|---|
| Texto narrativo de una sección | `content.<idioma>.md` | Hero, Sobre mí, Formación, Contacto |
| Listas repetidas de ítems | `content.<idioma>.yaml` | Proyectos, Stack, Testimonios |

Cada archivo existe en dos idiomas: `.es.` (español) y `.en.` (inglés). Si
editas uno, edita también el otro para que el selector de idioma sea coherente.

### Estructura

```
src/
  content/
    profile.yaml            ← nombre, email, teléfono, ubicación y redes sociales
    ui.es.yaml / ui.en.yaml ← navegación, botones, footer, textos de accesibilidad

  sections/
    Hero/
      Hero.jsx
      content.es.md  content.en.md
    About/
      About.jsx
      content.es.md  content.en.md          ← perfil y pilares
      experience.es.yaml  experience.en.yaml ← lista de empleos
      ExperienceTimeline/ExperienceTimeline.jsx   (usa el YAML del padre)
    Projects/
      Projects.jsx
      content.es.yaml  content.en.yaml      ← lista de proyectos
      ProjectCard/ProjectCard.jsx                 (usa el YAML del padre)
    Skills/
      Skills.jsx
      content.es.yaml  content.en.yaml      ← lista de tecnologías
    Education/
      Education.jsx
      content.es.md  content.en.md          ← títulos y certificaciones
    Testimonials/
      Testimonials.jsx
      content.es.yaml  content.en.yaml      ← lista de testimonios
      TestimonialCard/TestimonialCard.jsx         (usa el YAML del padre)
    Contact/
      Contact.jsx
      content.es.md  content.en.md          ← textos narrativos
      form.es.yaml   form.en.yaml           ← etiquetas y mensajes de validación
      ContactForm/ContactForm.jsx                 (usa el YAML del padre)
```

### Cabecera de los archivos `.md`

Los `.md` empiezan con un bloque entre dos líneas `---`. Ahí van los campos
sueltos (título, etiqueta, entradilla, listas cortas); debajo va el texto en
Markdown, que admite **negritas**, [enlaces](#) y listas.

```markdown
---
eyebrow: Sobre mí
title: Un titular
lead: Una entradilla.
---

El cuerpo del texto, en **Markdown**.
```

### Cosas que conviene saber

- **Testimonios**: los tres que vienen son ejemplos. Reemplázalos y borra la
  línea `placeholder: true` de cada uno para que desaparezca la etiqueta de
  «contenido de ejemplo».
- **Proyectos**: el campo `size` (`hero`, `tall`, `wide`) controla el tamaño de
  la tarjeta en la grilla; `url` puede quedar vacío si el proyecto no es público.
- **Iconos**: los YAML sólo escriben el nombre (`icon: cloud`). Los nombres
  disponibles están en `src/components/ui/icons.js`.
- **Redes sociales**: se editan una sola vez en `src/content/profile.yaml` y se
  reflejan en el header, el footer y la sección de contacto.

---

## Decisiones técnicas

- **Tema claro/oscuro**: tokens CSS en `src/index.css` (`:root` y `.dark`). La
  preferencia se guarda en `localStorage` y un script inline en `index.html` la
  aplica antes del primer paint para evitar parpadeos.
- **Idioma**: `react-i18next` con los recursos cargados desde YAML. También se
  persiste en `localStorage` y mantiene `<html lang>` sincronizado.
- **Rendimiento**: las secciones bajo el pliegue se cargan con `React.lazy()`;
  las dependencias grandes van en chunks aparte (ver `vite.config.js`).
- **Accesibilidad**: enlace «saltar al contenido», focus rings visibles, roles
  `alert` en los errores del formulario, contraste verificado en ambos temas y
  soporte de `prefers-reduced-motion` (se desactivan parallax y flotaciones).
- **Errores**: cada sección va envuelta en un error boundary y el formulario
  sólo muestra estado de error cuando el envío falla de verdad.
