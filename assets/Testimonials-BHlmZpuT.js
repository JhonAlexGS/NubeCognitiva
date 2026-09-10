import{r as e}from"./rolldown-runtime-hePW80VL.js";import{l as t,u as n}from"./motion-BBEiy-c9.js";import{c as r,n as i,o as a,p as o}from"./index-wZOWaAzT.js";import{n as s,r as c,t as l}from"./Section-z88_yggY.js";import{t as u}from"./SpotlightCard-DN7IkG9h.js";var d=`# ---------------------------------------------------------------------------\r
# TESTIMONIALS — English.\r
#\r
# ⚠️  The three testimonials below are EXAMPLES. Replace them with real\r
#     reviews and delete the \`placeholder: true\` line from each one: while it\r
#     is present the card shows an "example content" badge.\r
#\r
# Fields: quote (text), name, role, company, link (optional), initials.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Testimonials\r
title: What people who worked with me say\r
lead: >-\r
  Reserved space for reviews from colleagues, managers and project teammates.\r
\r
placeholderLabel: Example content\r
\r
items:\r
  - initials: NA\r
    name: First Last\r
    role: Their job title\r
    company: Company or university\r
    link: ''\r
    placeholder: true\r
    quote: >-\r
      This is where a manager's or colleague's review goes. Replace this text\r
      with their actual words: what you built together, what Jhon brought to the\r
      team and how the project turned out.\r
\r
  - initials: NA\r
    name: First Last\r
    role: Their job title\r
    company: Company or university\r
    link: ''\r
    placeholder: true\r
    quote: >-\r
      A second testimonial. It works better when it mentions something concrete:\r
      a difficult release, a good technical call or how the team behaved under\r
      pressure.\r
\r
  - initials: NA\r
    name: First Last\r
    role: Their job title\r
    company: Company or university\r
    link: ''\r
    placeholder: true\r
    quote: >-\r
      A third testimonial to close the section. If you have fewer than three\r
      reviews, delete the extra blocks: the grid adjusts on its own.\r
`,f=`# ---------------------------------------------------------------------------\r
# TESTIMONIOS — español.\r
#\r
# ⚠️  Los tres testimonios de abajo son EJEMPLOS. Reemplázalos por reseñas\r
#     reales y borra la línea \`placeholder: true\` de cada uno: mientras esté\r
#     presente, la tarjeta muestra una etiqueta de «contenido de ejemplo».\r
#\r
# Campos: quote (texto), name, role, company, link (opcional), initials.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Testimonios\r
title: Lo que dicen quienes han trabajado conmigo\r
lead: >-\r
  Espacio reservado para reseñas de colegas, jefes y compañeros de proyecto.\r
\r
placeholderLabel: Contenido de ejemplo\r
\r
items:\r
  - initials: NA\r
    name: Nombre Apellido\r
    role: Cargo de la persona\r
    company: Empresa o universidad\r
    link: ''\r
    placeholder: true\r
    quote: >-\r
      Aquí va la reseña de un jefe o colega. Sustituye este texto por sus\r
      palabras reales: qué construyeron juntos, qué aportó Jhon al equipo y qué\r
      resultado tuvo el proyecto.\r
\r
  - initials: NA\r
    name: Nombre Apellido\r
    role: Cargo de la persona\r
    company: Empresa o universidad\r
    link: ''\r
    placeholder: true\r
    quote: >-\r
      Un segundo testimonio. Funciona mejor si menciona algo concreto: una\r
      entrega difícil, una decisión técnica acertada o cómo se comportó el\r
      equipo bajo presión.\r
\r
  - initials: NA\r
    name: Nombre Apellido\r
    role: Cargo de la persona\r
    company: Empresa o universidad\r
    link: ''\r
    placeholder: true\r
    quote: >-\r
      Un tercer testimonio para cerrar la sección. Si tienes menos de tres\r
      reseñas, borra los bloques que sobren: la grilla se ajusta sola.\r
`,p=e(n(),1),m=t();function h({testimonial:e,placeholderLabel:t,index:n=0}){let i=!!e.link;return(0,m.jsx)(c,{as:`figure`,variants:o,delay:n*.08,className:`min-w-0`,children:(0,m.jsxs)(u,{className:`flex h-full flex-col gap-5 p-6 md:p-7`,children:[e.placeholder?(0,m.jsx)(`span`,{className:`w-fit rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase`,children:t}):null,(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`font-serif text-5xl leading-none text-accent/40 select-none`,children:`“`}),(0,m.jsx)(`blockquote`,{className:`-mt-3 flex-1 text-base leading-relaxed text-ink-muted`,children:e.quote}),(0,m.jsxs)(`figcaption`,{className:`flex items-center gap-3 border-t border-line pt-5`,children:[(0,m.jsx)(`span`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-xs font-semibold text-accent shadow-inner-top`,children:e.initials}),(0,m.jsxs)(`span`,{className:`flex min-w-0 flex-col`,children:[(0,m.jsxs)(`span`,{className:`flex items-center gap-1.5 text-sm font-semibold text-ink`,children:[e.name,i?(0,m.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer noopener`,"aria-label":e.name,className:`text-accent transition-colors duration-200 hover:text-accent-bright`,children:(0,m.jsx)(r.arrowUpRight,{"aria-hidden":`true`,className:`h-3.5 w-3.5`})}):null]}),(0,m.jsxs)(`span`,{className:`truncate text-xs text-ink-subtle`,children:[e.role,` · `,e.company]})]})]})]})})}var g=Object.assign({"./content.en.yaml":d,"./content.es.yaml":f});function _(){let e=i(),t=(0,p.useMemo)(()=>a(g,e)??{},[e]),n=t.items??[];return n.length===0?null:(0,m.jsxs)(l,{id:`testimonials`,children:[(0,m.jsx)(s,{eyebrow:t.eyebrow,title:t.title,lead:t.lead,align:`center`}),(0,m.jsx)(`div`,{className:`mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3`,children:n.map((e,n)=>(0,m.jsx)(h,{testimonial:e,placeholderLabel:t.placeholderLabel,index:n},`${e.name}-${n}`))})]})}export{_ as default};