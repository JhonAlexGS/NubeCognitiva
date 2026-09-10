import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,l as n,s as r,u as i}from"./motion-BBEiy-c9.js";import{a,c as o,i as s,l as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./index-DG4w0vBs.js";import{n as g,r as _,t as v}from"./Section-2Eh_Gj4q.js";import{a as y,i as b,n as x,r as S,t as C}from"./forms-Bc3O89Kp.js";var w=`---\r
# ---------------------------------------------------------------------------\r
# CONTACT — English (narrative copy).\r
# Form labels and messages live in \`form.en.yaml\`.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Contact\r
title: Shall we build something together?\r
lead: >-\r
  I am open to full stack development, cloud architecture and applied artificial\r
  intelligence projects. Write to me and I will get back to you.\r
\r
channelsTitle: Direct channels\r
---\r
\r
If your project mixes **data, cloud and a network that cannot go down**, that is\r
exactly the kind of problem I enjoy. Tell me what you are working on and we will\r
figure out where to start.\r
`,T=`---\r
# ---------------------------------------------------------------------------\r
# CONTACTO — español (textos narrativos).\r
# Las etiquetas y los mensajes del formulario están en \`form.es.yaml\`.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Contacto\r
title: ¿Construimos algo juntos?\r
lead: >-\r
  Estoy abierto a proyectos de desarrollo full stack, arquitectura cloud e\r
  inteligencia artificial aplicada. Escríbeme y te respondo.\r
\r
channelsTitle: Canales directos\r
---\r
\r
Si tu proyecto mezcla **datos, nube y una red que no puede caerse**, es\r
justamente el tipo de problema que me gusta. Cuéntame en qué estás trabajando y\r
buscamos juntos por dónde empezar.\r
`,E=`# ---------------------------------------------------------------------------\r
# CONTACT FORM — English.\r
# Labels, helper text and validation messages. Change any sentence without\r
# touching the code: the form reads them straight from this file.\r
# ---------------------------------------------------------------------------\r
\r
title: Write to me\r
\r
fields:\r
  name:\r
    label: Name\r
    placeholder: Your name\r
    required: Please enter your name.\r
    min: The name must be at least 2 characters long.\r
\r
  email:\r
    label: Email\r
    placeholder: name@email.com\r
    required: Please enter your email.\r
    invalid: That email does not look valid. Please check it.\r
\r
  message:\r
    label: Message\r
    placeholder: Tell me what you are working on…\r
    required: Please enter your message.\r
    min: The message must be at least 10 characters long.\r
    max: The message cannot be longer than 1500 characters.\r
\r
submit: Send message\r
submitting: Sending…\r
\r
success:\r
  title: Message sent\r
  body: Thanks for writing. I will get back to you as soon as I can.\r
  again: Send another message\r
\r
# Shown only if the submission actually fails.\r
error:\r
  title: The message could not be sent\r
  body: Check your connection and try again, or email me directly.\r
  retry: Retry\r
\r
# Notice shown while the site has no sending service configured\r
# (VITE_CONTACT_ENDPOINT): the form opens your email client with the message\r
# already written.\r
mailtoNotice: Your email client will open with the message ready to send.\r
`,D=`# ---------------------------------------------------------------------------\r
# FORMULARIO DE CONTACTO — español.\r
# Etiquetas, textos de ayuda y mensajes de validación. Cambia cualquier frase\r
# sin tocar el código: el formulario los lee directamente de este archivo.\r
# ---------------------------------------------------------------------------\r
\r
title: Escríbeme\r
\r
fields:\r
  name:\r
    label: Nombre\r
    placeholder: Cómo te llamas\r
    required: Escribe tu nombre.\r
    min: El nombre debe tener al menos 2 caracteres.\r
\r
  email:\r
    label: Email\r
    placeholder: nombre@correo.com\r
    required: Escribe tu email.\r
    invalid: Ese email no parece válido. Revísalo, por favor.\r
\r
  message:\r
    label: Mensaje\r
    placeholder: Cuéntame en qué estás trabajando…\r
    required: Escribe tu mensaje.\r
    min: El mensaje debe tener al menos 10 caracteres.\r
    max: El mensaje no puede superar los 1500 caracteres.\r
\r
submit: Enviar mensaje\r
submitting: Enviando…\r
\r
success:\r
  title: Mensaje enviado\r
  body: Gracias por escribir. Te respondo lo antes posible.\r
  again: Enviar otro mensaje\r
\r
# Se muestra sólo si el envío falla de verdad.\r
error:\r
  title: No se pudo enviar el mensaje\r
  body: Revisa tu conexión e inténtalo de nuevo, o escríbeme directamente por correo.\r
  retry: Reintentar\r
\r
# Aviso que aparece cuando el sitio aún no tiene un servicio de envío\r
# configurado (variable VITE_CONTACT_ENDPOINT): el formulario abre el cliente\r
# de correo con el mensaje ya escrito.\r
mailtoNotice: Se abrirá tu cliente de correo con el mensaje listo para enviar.\r
`,O=e(i(),1);async function k({name:e,email:t,message:n}){{let r=encodeURIComponent(`Portafolio — ${e}`),i=encodeURIComponent(`${n}\n\n— ${e} (${t})`);return window.location.href=`mailto:${f.email}?subject=${r}&body=${i}`,{mode:`mailto`}}}var A=n(),j=`w-full rounded-lg border border-line bg-canvas-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-subtle transition-colors duration-200 hover:border-line-hover focus:border-accent focus:outline-none`;function M({copy:e}){let[n,i]=(0,O.useState)(`idle`),a=(0,O.useMemo)(()=>e.fields??{},[e.fields]),s=(0,O.useMemo)(()=>x({name:S({error:a.name?.required}).trim().min(1,{error:a.name?.required}).min(2,{error:a.name?.min}),email:S({error:a.email?.required}).trim().min(1,{error:a.email?.required}).pipe(C({error:a.email?.invalid})),message:S({error:a.message?.required}).trim().min(1,{error:a.message?.required}).min(10,{error:a.message?.min}).max(1500,{error:a.message?.max})}),[a]),{register:c,handleSubmit:l,reset:u,clearErrors:d,formState:{errors:f,isSubmitting:m}}=y({resolver:b(s),mode:`onBlur`,defaultValues:{name:``,email:``,message:``}});return(0,O.useEffect)(()=>{d()},[s,d]),n===`success`?(0,A.jsxs)(r.div,{initial:{opacity:0,scale:.97},animate:{opacity:1,scale:1},transition:{duration:.3,ease:h},role:`status`,className:`nc-card flex flex-col items-start gap-4 p-8`,children:[(0,A.jsx)(`span`,{className:`grid h-12 w-12 place-items-center rounded-full border border-line-accent bg-accent/10 text-accent`,children:(0,A.jsx)(o.check,{"aria-hidden":`true`,className:`h-6 w-6`})}),(0,A.jsx)(`h3`,{className:`text-xl font-semibold tracking-tight text-ink`,children:e.success?.title}),(0,A.jsx)(`p`,{className:`text-sm leading-relaxed text-ink-muted`,children:e.success?.body}),(0,A.jsx)(p,{variant:`secondary`,onClick:()=>i(`idle`),children:e.success?.again})]}):(0,A.jsxs)(`form`,{onSubmit:l(async e=>{try{await k(e),i(`success`),u()}catch(e){console.error(`[contacto] fallo al enviar el formulario`,e),i(`error`)}}),noValidate:!0,className:`nc-card flex flex-col gap-5 p-6 md:p-8`,children:[(0,A.jsx)(`h3`,{className:`text-xl font-semibold tracking-tight text-ink`,children:e.title}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsx)(`label`,{htmlFor:`contact-name`,className:`text-sm font-medium text-ink`,children:a.name?.label}),(0,A.jsx)(`input`,{id:`contact-name`,type:`text`,autoComplete:`name`,placeholder:a.name?.placeholder,"aria-invalid":f.name?`true`:`false`,"aria-describedby":f.name?`contact-name-error`:void 0,className:j,...c(`name`)}),(0,A.jsx)(N,{id:`contact-name-error`,message:f.name?.message})]}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsx)(`label`,{htmlFor:`contact-email`,className:`text-sm font-medium text-ink`,children:a.email?.label}),(0,A.jsx)(`input`,{id:`contact-email`,type:`email`,autoComplete:`email`,placeholder:a.email?.placeholder,"aria-invalid":f.email?`true`:`false`,"aria-describedby":f.email?`contact-email-error`:void 0,className:j,...c(`email`)}),(0,A.jsx)(N,{id:`contact-email-error`,message:f.email?.message})]}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsx)(`label`,{htmlFor:`contact-message`,className:`text-sm font-medium text-ink`,children:a.message?.label}),(0,A.jsx)(`textarea`,{id:`contact-message`,rows:5,placeholder:a.message?.placeholder,"aria-invalid":f.message?`true`:`false`,"aria-describedby":f.message?`contact-message-error`:void 0,className:`${j} nc-scroll-area resize-y`,...c(`message`)}),(0,A.jsx)(N,{id:`contact-message-error`,message:f.message?.message})]}),(0,A.jsx)(t,{children:n===`error`?(0,A.jsx)(r.div,{role:`alert`,initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},exit:{opacity:0,height:0},transition:{duration:.25,ease:h},className:`overflow-hidden`,children:(0,A.jsxs)(`div`,{className:`flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4`,children:[(0,A.jsx)(o.alert,{"aria-hidden":`true`,className:`mt-0.5 h-4 w-4 shrink-0 text-red-400`}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,A.jsx)(`p`,{className:`text-sm font-medium text-ink`,children:e.error?.title}),(0,A.jsx)(`p`,{className:`text-sm leading-relaxed text-ink-muted`,children:e.error?.body})]})]})}):null}),(0,A.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,A.jsx)(p,{type:`submit`,size:`lg`,disabled:m,children:m?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o.loader,{"aria-hidden":`true`,className:`h-4 w-4 animate-spin`}),e.submitting]}):(0,A.jsxs)(A.Fragment,{children:[n===`error`?e.error?.retry:e.submit,(0,A.jsx)(o.email,{"aria-hidden":`true`,className:`h-4 w-4`})]})}),(0,A.jsx)(`p`,{className:`text-xs leading-relaxed text-ink-subtle`,children:e.mailtoNotice})]})]})}function N({id:e,message:n}){return(0,A.jsx)(t,{children:n?(0,A.jsx)(r.p,{id:e,role:`alert`,initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.2,ease:h},className:`text-xs text-red-400`,children:n}):null})}var P=Object.assign({"./content.en.md":w,"./content.es.md":T}),F=Object.assign({"./form.en.yaml":E,"./form.es.yaml":D});function I(){let e=l(),{data:t,body:n}=(0,O.useMemo)(()=>a(P,e),[e]),i=(0,O.useMemo)(()=>u(F,e,`form`)??{},[e]),p=[...s,{id:`phone`,icon:`phone`,label:f.phone,url:`tel:${f.phone.replace(/\s/g,``)}`},{id:`location`,icon:`location`,label:f.location,url:``}];return(0,A.jsxs)(v,{id:`contact`,children:[(0,A.jsx)(g,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,A.jsxs)(`div`,{className:`mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,A.jsx)(_,{className:`max-w-xl`,children:(0,A.jsx)(m,{children:n})}),(0,A.jsxs)(_,{variants:d,delay:.08,className:`flex flex-col gap-4`,children:[(0,A.jsx)(`h3`,{className:`nc-eyebrow`,children:t.channelsTitle}),(0,A.jsx)(`ul`,{className:`flex flex-col gap-2`,children:p.map(e=>{let t=c(e.icon),n=e.url?.startsWith(`http`),i=(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top`,children:(0,A.jsx)(t,{"aria-hidden":`true`,className:`h-[1.05rem] w-[1.05rem]`})}),(0,A.jsx)(`span`,{className:`min-w-0 truncate text-sm text-ink-muted`,children:e.handle??e.label}),e.url?(0,A.jsx)(o.arrowUpRight,{"aria-hidden":`true`,className:`ml-auto h-4 w-4 shrink-0 text-ink-subtle transition-colors duration-200 group-hover:text-accent`}):null]});return(0,A.jsx)(`li`,{children:e.url?(0,A.jsx)(r.a,{href:e.url,target:n?`_blank`:void 0,rel:n?`noreferrer noopener`:void 0,"aria-label":e.label,whileHover:{x:4},transition:{duration:.2,ease:h},className:`group flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors duration-200 hover:border-line hover:bg-surface`,children:i}):(0,A.jsx)(`div`,{className:`flex items-center gap-3 p-2`,children:i})},e.id)})})]})]}),(0,A.jsx)(_,{variants:d,delay:.12,className:`min-w-0`,children:(0,A.jsx)(M,{copy:i})})]})]})}export{I as default};