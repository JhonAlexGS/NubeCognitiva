import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,u as r}from"./motion-D4psEU6N.js";import{M as i}from"./vendor-CiaQW6Ys.js";import{d as a,i as o,l as s,n as c,s as l}from"./index-iaSkYPlr.js";import{n as u,r as d,t as f}from"./Section-C5fZqsdm.js";import{t as p}from"./SpotlightCard-D4eKEHLJ.js";import{t as m}from"./Modal-SoTiyoSr.js";var h=`# ---------------------------------------------------------------------------\r
# LAB — English. Project carousel.\r
#\r
# ⚠️  THE SIX BELOW ARE SUGGESTIONS, NOT YOUR WORK.\r
#     They carry \`placeholder: true\`, which paints a "proposal" badge over the\r
#     cover. When you actually build one — or swap it for something you really\r
#     did — delete that line and the badge goes away.\r
#     Only remove \`placeholder\` once the project is real: otherwise you would be\r
#     claiming work you did not do.\r
#\r
# Fields per project:\r
#   title    → project name\r
#   summary  → short description (2-3 lines; shown in full on the card)\r
#   skills   → skills or technologies learned\r
#   image    → file inside \`public/\`, e.g. \`proyectos/rag.svg\`\r
#              16:9 ratio. Leave it empty for a framed title instead.\r
#   url      → project link (repo, demo, article…)\r
#   linkLabel→ button text\r
#   placeholder → true while it is a proposal rather than finished work\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Lab\r
title: What I am building\r
lead: >-\r
  Smaller projects where I try out ideas and learn new tools. Swipe to browse.\r
\r
proposalLabel: Proposal\r
defaultLinkLabel: View project\r
detailsLabel: View details\r
skillsLabel: What it teaches\r
\r
items:\r
  - title: RAG over industrial cybersecurity standards\r
    placeholder: true\r
    image: proyectos/rag.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      An assistant that answers questions about IEC 62443 and OT security\r
      guidelines, citing the exact paragraph the answer comes from. It joins\r
      what I already know about industrial networks with retrieval augmentation.\r
    skills: [Python, LangChain, pgvector, FastAPI, Embeddings]\r
\r
  - title: Real-time traffic classifier\r
    placeholder: true\r
    image: proyectos/trafico.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      Taking the thesis model from a static dataset to a live stream: capture\r
      ModBus with Scapy, classify packet by packet and raise the alarm before\r
      the attack reaches the PLC.\r
    skills: [Scapy, Kafka, TensorFlow, Docker, Streaming]\r
\r
  - title: Anomaly detection on IoT sensors\r
    placeholder: true\r
    image: proyectos/anomalias.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      Industrial sensor time series analysed with autoencoders to spot odd\r
      readings without labelling anything first. Unsupervised detection applied\r
      to predictive maintenance.\r
    skills: [scikit-learn, Autoencoders, Pandas, Time series]\r
\r
  - title: MLOps pipeline on AWS\r
    placeholder: true\r
    image: proyectos/mlops.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      Retrain, version and deploy the intrusion detector with no manual steps:\r
      experiment tracking with MLflow, infrastructure as code with Terraform and\r
      automatic deployment whenever the model improves.\r
    skills: [MLflow, Terraform, GitHub Actions, SageMaker, Docker]\r
\r
  - title: Semantic search over GNSS research\r
    placeholder: true\r
    image: proyectos/buscador.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      A search engine that understands intent rather than just words: it finds\r
      GNSS and SDR papers by meaning, combining embeddings with Elastic's\r
      full-text search.\r
    skills: [Embeddings, Elastic Search, PostgreSQL, Python]\r
\r
  - title: Observability for the IDS on a Raspberry Pi\r
    placeholder: true\r
    image: proyectos/observabilidad.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      Knowing what the detector does when nobody is watching: latency, CPU usage\r
      and detection rate published to Prometheus and drawn on a Grafana board.\r
    skills: [Prometheus, Grafana, Raspberry Pi, Docker Compose]\r
`,g=`# ---------------------------------------------------------------------------\r
# LABORATORIO — español. Carrusel de proyectos.\r
#\r
# ⚠️  LOS SEIS DE ABAJO SON SUGERENCIAS, NO TRABAJO TUYO.\r
#     Llevan \`placeholder: true\`, que pinta una etiqueta de «propuesta» sobre\r
#     la portada. Cuando construyas uno de verdad —o lo cambies por otro que sí\r
#     hayas hecho— borra esa línea y la etiqueta desaparece.\r
#     No publiques ninguno sin quitar el \`placeholder\` sólo si es real: estarías\r
#     atribuyéndote trabajo que no hiciste.\r
#\r
# Campos de cada proyecto:\r
#   title    → nombre del proyecto\r
#   summary  → descripción breve (2 o 3 líneas; se ve entera en la tarjeta)\r
#   skills   → habilidades o tecnologías aprendidas\r
#   image    → archivo dentro de \`public/\`, por ejemplo \`proyectos/rag.svg\`\r
#              Proporción 16:9. Si lo dejas vacío sale un marco con el título.\r
#   url      → enlace del proyecto (repo, demo, artículo…)\r
#   linkLabel→ texto del botón\r
#   placeholder → true mientras sea una propuesta y no un proyecto hecho\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Laboratorio\r
title: Lo que estoy construyendo\r
lead: >-\r
  Proyectos más pequeños donde pruebo ideas y aprendo herramientas nuevas.\r
  Deslízate para verlos.\r
\r
proposalLabel: Propuesta\r
defaultLinkLabel: Ver proyecto\r
detailsLabel: Ver detalles\r
skillsLabel: Lo que se aprende\r
\r
items:\r
  - title: RAG sobre normativa de ciberseguridad industrial\r
    placeholder: true\r
    image: proyectos/rag.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Un asistente que responde preguntas sobre la IEC 62443 y guías de\r
      seguridad OT citando el párrafo exacto de donde sale la respuesta. Une lo\r
      que ya sé de redes industriales con recuperación aumentada.\r
    skills: [Python, LangChain, pgvector, FastAPI, Embeddings]\r
\r
  - title: Clasificador de tráfico en tiempo real\r
    placeholder: true\r
    image: proyectos/trafico.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Llevar el modelo de la tesis de un dataset estático a un flujo en vivo:\r
      capturar ModBus con Scapy, clasificar paquete a paquete y avisar antes de\r
      que el ataque llegue al PLC.\r
    skills: [Scapy, Kafka, TensorFlow, Docker, Streaming]\r
\r
  - title: Detector de anomalías en sensores IoT\r
    placeholder: true\r
    image: proyectos/anomalias.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Series temporales de sensores industriales analizadas con autoencoders\r
      para encontrar lecturas raras sin haber etiquetado nada antes. Detección\r
      no supervisada aplicada a mantenimiento predictivo.\r
    skills: [scikit-learn, Autoencoders, Pandas, Series temporales]\r
\r
  - title: Pipeline de MLOps en AWS\r
    placeholder: true\r
    image: proyectos/mlops.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Reentrenar, versionar y desplegar el detector de intrusiones sin tocar\r
      nada a mano: seguimiento de experimentos con MLflow, infraestructura con\r
      Terraform y despliegue automático cuando el modelo mejora.\r
    skills: [MLflow, Terraform, GitHub Actions, SageMaker, Docker]\r
\r
  - title: Buscador semántico de publicaciones GNSS\r
    placeholder: true\r
    image: proyectos/buscador.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Un buscador que entiende la intención y no sólo las palabras: encuentra\r
      papers de GNSS y SDR por significado, combinando embeddings con la\r
      búsqueda por texto de Elastic.\r
    skills: [Embeddings, Elastic Search, PostgreSQL, Python]\r
\r
  - title: Observabilidad del IDS en la Raspberry Pi\r
    placeholder: true\r
    image: proyectos/observabilidad.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Saber qué hace el detector cuando nadie lo mira: métricas de latencia,\r
      uso de CPU y tasa de detección publicadas a Prometheus y dibujadas en un\r
      panel de Grafana.\r
    skills: [Prometheus, Grafana, Raspberry Pi, Docker Compose]\r
`,_=e(n(),1),v=r();function y({project:e,proposalLabel:t,detailsLabel:n,onOpen:r}){let i=o(e.image),a=(0,_.useRef)(null),c=(0,_.useCallback)(e=>{a.current=e.clientX},[]),l=(0,_.useCallback)(e=>{let t=a.current;a.current=null,!(t!==null&&Math.abs(e.clientX-t)>8)&&r()},[r]);return(0,v.jsxs)(p,{lift:!1,className:`flex h-full flex-col overflow-hidden`,children:[(0,v.jsx)(`button`,{type:`button`,onPointerDown:c,onClick:l,className:`absolute inset-0 z-0 rounded-2xl`,children:(0,v.jsx)(`span`,{className:`sr-only`,children:`${n}: ${e.title}`})}),(0,v.jsxs)(`div`,{className:`pointer-events-none relative z-[1] flex flex-1 flex-col`,children:[(0,v.jsxs)(`div`,{className:`relative aspect-video overflow-hidden border-b border-line bg-canvas-deep`,children:[i?(0,v.jsx)(`img`,{src:i,alt:``,loading:`lazy`,decoding:`async`,draggable:`false`,className:`h-full w-full object-cover transition-transform duration-500 ease-out select-none group-hover:scale-[1.04]`}):(0,v.jsx)(`div`,{className:`grid h-full w-full place-items-center px-6 text-center`,children:(0,v.jsx)(`span`,{className:`font-mono text-xs tracking-widest text-ink-subtle uppercase`,children:e.title})}),e.placeholder?(0,v.jsx)(`span`,{className:`absolute top-3 left-3 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md`,children:t}):null]}),(0,v.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 p-6`,children:[(0,v.jsx)(`h3`,{className:`text-lg font-semibold tracking-tight text-balance text-ink`,children:e.title}),(0,v.jsx)(`p`,{className:`line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted`,children:e.summary}),e.skills?.length?(0,v.jsxs)(`ul`,{className:`flex flex-wrap gap-1.5 pt-1`,children:[e.skills.slice(0,4).map(e=>(0,v.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink`,children:e},e)),e.skills.length>4?(0,v.jsxs)(`li`,{className:`px-1 py-1 font-mono text-[0.6875rem] text-ink-subtle`,children:[`+`,e.skills.length-4]}):null]}):null,(0,v.jsxs)(`span`,{className:`mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:text-accent-bright group-hover:decoration-current`,children:[n,(0,v.jsx)(s.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5`})]})]})]})]})}function b({hacia:e,deshabilitado:n,etiqueta:r,onClick:i}){return(0,v.jsx)(t.button,{type:`button`,onClick:i,disabled:n,"aria-label":r,whileHover:n?void 0:{scale:1.06,y:-2},whileTap:n?void 0:{scale:.94},transition:{duration:.2,ease:a},className:`grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-inner-top transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover disabled:pointer-events-none disabled:opacity-35`,children:(0,v.jsx)(s.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 ${e<0?`-rotate-[135deg]`:`rotate-45`}`})})}function x({items:e,proposalLabel:t,detailsLabel:n,onOpen:r}){let{t:a}=i(),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(0),[l,u]=(0,_.useState)({inicio:!0,fin:!1}),d=(0,_.useCallback)(()=>{let e=o.current;if(!e)return 0;let t=e.getBoundingClientRect().left+1,n=0,r=1/0;return Array.from(e.children).forEach((e,i)=>{let a=Math.abs(e.getBoundingClientRect().left-t);a<r&&(r=a,n=i)}),n},[]),f=(0,_.useCallback)(()=>{let e=o.current;if(!e)return;let t=e.scrollLeft+e.clientWidth>=e.scrollWidth-8;c(t?e.children.length-1:d()),u({inicio:e.scrollLeft<=8,fin:t})},[d]);(0,_.useEffect)(()=>{let e=o.current;if(e)return f(),e.addEventListener(`scroll`,f,{passive:!0}),window.addEventListener(`resize`,f),()=>{e.removeEventListener(`scroll`,f),window.removeEventListener(`resize`,f)}},[f,e.length]);let p=(0,_.useCallback)(e=>{let t=o.current;if(!t)return;let n=t.children[Math.max(0,Math.min(e,t.children.length-1))];if(!n)return;let r=parseFloat(getComputedStyle(t).paddingLeft)||0;t.scrollLeft=n.offsetLeft-t.offsetLeft-r},[]),m=(0,_.useCallback)(e=>p(d()+e),[p,d]),h=(0,_.useCallback)(e=>{e.key===`ArrowRight`?(e.preventDefault(),m(1)):e.key===`ArrowLeft`&&(e.preventDefault(),m(-1))},[m]);return(0,v.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,v.jsx)(`ul`,{ref:o,tabIndex:0,onKeyDown:h,"aria-label":a(`actions.carousel`),className:`nc-carousel -mx-5 flex snap-x snap-proximity gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8`,children:e.map((i,a)=>(0,v.jsx)(`li`,{"aria-label":`${a+1} / ${e.length}`,className:`w-[82%] shrink-0 snap-start sm:w-[58%] lg:w-[calc((100%-2rem)/3)]`,children:(0,v.jsx)(y,{project:i,proposalLabel:t,detailsLabel:n,onOpen:()=>r(a)})},i.title))}),(0,v.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,v.jsx)(`ul`,{className:`flex items-center gap-2`,children:e.map((t,n)=>(0,v.jsx)(`li`,{children:(0,v.jsx)(`button`,{type:`button`,onClick:()=>p(n),"aria-label":`${n+1} / ${e.length}`,"aria-current":n===s?`true`:void 0,className:`h-1.5 rounded-full transition-all duration-300 ${n===s?`w-7 bg-accent`:`w-1.5 bg-line-hover hover:bg-ink-subtle`}`})},t.title))}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(b,{hacia:-1,deshabilitado:l.inicio,etiqueta:a(`actions.previous`),onClick:()=>m(-1)}),(0,v.jsx)(b,{hacia:1,deshabilitado:l.fin,etiqueta:a(`actions.next`),onClick:()=>m(1)})]})]})]})}function S({project:e,open:t,onClose:n,proposalLabel:r,defaultLinkLabel:i}){let a=o(e?.image);return(0,v.jsx)(m,{open:t,onClose:n,titleId:`proyecto-titulo`,children:e?(0,v.jsxs)(`div`,{className:`flex flex-col`,children:[a?(0,v.jsxs)(`div`,{className:`relative aspect-video shrink-0 overflow-hidden border-b border-line bg-canvas-deep`,children:[(0,v.jsx)(`img`,{src:a,alt:``,className:`h-full w-full object-cover`,decoding:`async`}),e.placeholder?(0,v.jsx)(`span`,{className:`absolute top-4 left-4 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md`,children:r}):null]}):null,(0,v.jsxs)(`div`,{className:`flex flex-col gap-5 p-6 sm:p-8`,children:[(0,v.jsx)(`h3`,{id:`proyecto-titulo`,className:`text-2xl font-semibold tracking-tight text-balance text-ink`,children:e.title}),(0,v.jsx)(`p`,{className:`text-base leading-relaxed text-ink-muted`,children:e.summary}),e.skills?.length?(0,v.jsxs)(`div`,{className:`flex flex-col gap-2.5`,children:[(0,v.jsx)(`span`,{className:`nc-eyebrow`,children:e.skillsLabel}),(0,v.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:e.skills.map(e=>(0,v.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle`,children:e},e))})]}):null,e.url?(0,v.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,className:`inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-bright`,children:[e.linkLabel||i,(0,v.jsx)(s.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4`})]}):null]})]}):null})}var C=Object.assign({"./content.en.yaml":h,"./content.es.yaml":g});function w(){let e=c(),t=(0,_.useMemo)(()=>l(C,e)??{},[e]),n=t.items??[],[r,i]=(0,_.useState)(null);return n.length===0?null:(0,v.jsxs)(f,{id:`lab`,children:[(0,v.jsx)(u,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,v.jsx)(d,{className:`mt-12 lg:mt-16`,children:(0,v.jsx)(x,{items:n,proposalLabel:t.proposalLabel,detailsLabel:t.detailsLabel,onOpen:i})}),(0,v.jsx)(S,{project:r===null?null:{...n[r],skillsLabel:t.skillsLabel},open:r!==null,onClose:()=>i(null),proposalLabel:t.proposalLabel,defaultLinkLabel:t.defaultLinkLabel})]})}export{w as default};