import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,u as r}from"./motion-D4psEU6N.js";import{M as i}from"./vendor-CiaQW6Ys.js";import{c as a,d as o,i as s,l as c,n as l,s as u}from"./index-Di8epIVe.js";import{n as d,r as f,t as p}from"./Section-CwgCElvx.js";import{t as m}from"./SpotlightCard-Dno_5EQs.js";import{t as h}from"./Modal-DO7igUsR.js";var g=`# ---------------------------------------------------------------------------
# LAB — English. Project carousel.
#
# ⚠️  Projects with \`placeholder: true\` are PROPOSALS, not finished work.
#     The card shows a "proposal" badge while that line is there. Delete it
#     ONLY once the project is real, and set its actual \`url\`.
#
# Fields per project:
#   title    → project name
#   level    → 1, 2 or 3. Must match an \`id\` in the \`levels\` list
#   summary  → description (clamped to 3 lines on the card)
#   skills   → what it teaches (the card shows 4 plus a counter)
#   image    → file inside \`public/\`, 16:9 ratio
#   url      → project link
#   linkLabel→ button text
#   placeholder → true while it is a proposal
# ---------------------------------------------------------------------------

eyebrow: Lab
title: What I am building
lead: >-
  A roadmap in three levels: first understand the pieces locally, then automate
  them, and finally take them to the cloud.

proposalLabel: Proposal
defaultLinkLabel: View project
detailsLabel: View details
skillsLabel: What it teaches
levelLabel: Level

# The three steps of the roadmap. \`id\` is what links to the \`level\` field.
levels:
  - id: 1
    name: Understand
    note: All local, no cloud
  - id: 2
    name: Automate
    note: Reproducibility and orchestration
  - id: 3
    name: Deploy
    note: To production on AWS

items:
  # ---------------------------- Level 1 ----------------------------
  - title: Network traffic classifier
    level: 1
    placeholder: true
    image: proyectos/trafico.svg
    url: https://github.com/JhonAlexGS/Network-Traffic-Classifier/tree/main
    linkLabel: View project
    summary: >-
      Classifying IT traffic by attack type using public Kaggle data. The
      challenge is not overall accuracy but the rare classes: some attacks show
      up in 0.07% of the rows, and a model can score well on average while
      catching none of them.
    skills: [Python, scikit-learn, Pandas, Imbalanced classes, Metrics]

  - title: Semantic search over job postings
    level: 1
    placeholder: true
    image: proyectos/buscador.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: View project
    summary: >-
      Searching for "work with models in production" and finding postings that
      say "MLOps engineer", without sharing a single word. Embeddings and
      similarity search, no LLM yet, benchmarked against classic keyword search.
    skills: [Embeddings, Vector search, pgvector, Python]

  - title: RAG over technical documentation
    level: 1
    placeholder: true
    image: proyectos/rag.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: View project
    summary: >-
      The previous search engine becomes the retrieval layer and generation is
      added on top. What sets it apart from any chatbot is that every answer
      cites the document and page it came from. All local, with Ollama, spending
      nothing on APIs.
    skills: [LangChain, Ollama, Chunking, Citations, FastAPI]

  # ---------------------------- Level 2 ----------------------------
  - title: MLOps running locally
    level: 2
    placeholder: true
    image: proyectos/mlops.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: View project
    summary: >-
      Industrialising the level 1 classifier: version the data, track every
      experiment and retrain only when things change. The goal is being able to
      say six months from now which data, which commit and which
      hyperparameters produced the model in production.
    skills: [MLflow, DVC, GitHub Actions, Docker, Reproducibility]

  - title: AI-driven automation
    level: 2
    placeholder: true
    image: proyectos/automatizacion.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: View project
    summary: >-
      A workflow that reads new job postings every morning, runs them through
      the semantic search, filters the ones that fit and sends a summary written
      by a model. It connects two pieces that already exist instead of building
      a third from scratch.
    skills: [n8n, Webhooks, Orchestration, LLM, APIs]

  # ---------------------------- Level 3 ----------------------------
  - title: The RAG deployed on AWS
    level: 3
    placeholder: true
    image: proyectos/despliegue.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: View project
    summary: >-
      Taking something that already works to production: Lambda for inference,
      S3 for the documents, API Gateway as the entry point and Terraform
      describing the whole infrastructure. Serverless, so it costs nothing while
      idle.
    skills: [AWS Lambda, API Gateway, S3, Terraform, Serverless]

  - title: MLOps pipeline on AWS
    level: 3
    placeholder: true
    image: proyectos/nube-mlops.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: View project
    summary: >-
      The end of the road: the level 2 pipeline running by itself in the cloud.
      Retraining triggered by new data, a model registry and automatic
      deployment only when the metric improves.
    skills: [SageMaker, Step Functions, Terraform, CI/CD, Model Registry]
`,_=`# ---------------------------------------------------------------------------
# LABORATORIO — español. Carrusel de proyectos.
#
# ⚠️  Los proyectos con \`placeholder: true\` son PROPUESTAS, no trabajo hecho.
#     La tarjeta muestra una etiqueta de «propuesta» mientras esa línea esté.
#     Bórrala SOLO cuando el proyecto sea real, y pon su \`url\` de verdad.
#
# Campos de cada proyecto:
#   title    → nombre del proyecto
#   level    → 1, 2 o 3. Debe coincidir con un \`id\` de la lista \`levels\`
#   summary  → descripción (en la tarjeta se recorta a 3 líneas)
#   skills   → lo que se aprende (en la tarjeta se ven 4 y un contador)
#   image    → archivo dentro de \`public/\`, proporción 16:9
#   url      → enlace del proyecto
#   linkLabel→ texto del botón
#   placeholder → true mientras sea una propuesta
# ---------------------------------------------------------------------------

eyebrow: Laboratorio
title: Lo que estoy construyendo
lead: >-
  Una ruta de proyectos en tres niveles: primero entender las piezas en local,
  después automatizarlas y por último llevarlas a la nube.

proposalLabel: Propuesta
defaultLinkLabel: Ver proyecto
detailsLabel: Ver detalles
skillsLabel: Lo que se aprende
levelLabel: Nivel

# Los tres peldaños de la ruta. \`id\` es lo que enlaza con el campo \`level\`.
levels:
  - id: 1
    name: Entender
    note: Todo en local, sin nube
  - id: 2
    name: Automatizar
    note: Reproducibilidad y orquestación
  - id: 3
    name: Desplegar
    note: A producción en AWS

items:
  # ---------------------------- Nivel 1 ----------------------------
  - title: Clasificador de tráfico de red
    level: 1
    placeholder: true
    image: proyectos/trafico.svg
    url: https://github.com/JhonAlexGS/Network-Traffic-Classifier/tree/main
    linkLabel: Ver proyecto
    summary: >-
      Clasificar tráfico IT por tipo de ataque sobre datos públicos de Kaggle.
      El reto no es el accuracy global sino las clases raras: hay ataques que
      aparecen en el 0,07 % de las filas, y un modelo puede sacar buena nota
      media sin detectar ni uno solo de ellos.
    skills: [Python, scikit-learn, Pandas, Clases desequilibradas, Métricas]

  - title: Buscador semántico de ofertas de empleo
    level: 1
    placeholder: true
    image: proyectos/buscador.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: Ver proyecto
    summary: >-
      Buscar «trabajo con modelos en producción» y que encuentre ofertas que
      dicen «MLOps engineer», sin compartir una sola palabra. Embeddings y
      búsqueda por similitud, sin LLM todavía, comparado contra la búsqueda
      clásica por palabras clave.
    skills: [Embeddings, Búsqueda vectorial, pgvector, Python]

  - title: RAG sobre documentación técnica
    level: 1
    placeholder: true
    image: proyectos/rag.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: Ver proyecto
    summary: >-
      El buscador anterior pasa a ser el motor de recuperación y encima se añade
      generación. Lo que lo separa de un chatbot cualquiera es que cada
      respuesta cita el documento y la página de donde salió. Todo local, con
      Ollama, sin gastar en APIs.
    skills: [LangChain, Ollama, Chunking, Citas, FastAPI]

  # ---------------------------- Nivel 2 ----------------------------
  - title: MLOps en local
    level: 2
    placeholder: true
    image: proyectos/mlops.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: Ver proyecto
    summary: >-
      Industrializar el clasificador del nivel 1: versionar los datos, registrar
      cada experimento y reentrenar solo cuando cambian. El objetivo es poder
      decir dentro de seis meses de qué datos, qué commit y qué hiperparámetros
      salió el modelo que está corriendo.
    skills: [MLflow, DVC, GitHub Actions, Docker, Reproducibilidad]

  - title: Automatización con IA
    level: 2
    placeholder: true
    image: proyectos/automatizacion.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: Ver proyecto
    summary: >-
      Un flujo que cada mañana lee ofertas nuevas, las pasa por el buscador
      semántico, filtra las que encajan y manda un resumen escrito por un
      modelo. Conecta dos piezas que ya existen en vez de construir una tercera
      desde cero.
    skills: [n8n, Webhooks, Orquestación, LLM, APIs]

  # ---------------------------- Nivel 3 ----------------------------
  - title: El RAG desplegado en AWS
    level: 3
    placeholder: true
    image: proyectos/despliegue.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: Ver proyecto
    summary: >-
      Llevar a producción algo que ya funciona: Lambda para la inferencia, S3
      para los documentos, API Gateway como entrada y Terraform describiendo
      toda la infraestructura. Serverless para que en reposo no cueste nada.
    skills: [AWS Lambda, API Gateway, S3, Terraform, Serverless]

  - title: Pipeline de MLOps en AWS
    level: 3
    placeholder: true
    image: proyectos/nube-mlops.svg
    url: https://jhonalexgs.github.io/NubeCognitiva/
    linkLabel: Ver proyecto
    summary: >-
      El final del camino: el pipeline del nivel 2 corriendo solo en la nube.
      Reentrenamiento disparado por datos nuevos, registro de modelos y
      despliegue automático únicamente si la métrica mejora.
    skills: [SageMaker, Step Functions, Terraform, CI/CD, Model Registry]
`,v=e(n(),1),y=r();function b({project:e,proposalLabel:t,detailsLabel:n,levelLabel:r,level:i,onOpen:a}){let o=s(e.image),l=(0,v.useRef)(null),u=(0,v.useCallback)(e=>{l.current=e.clientX},[]),d=(0,v.useCallback)(e=>{let t=l.current;l.current=null,!(t!==null&&Math.abs(e.clientX-t)>8)&&a()},[a]);return(0,y.jsxs)(m,{lift:!1,className:`flex h-full flex-col overflow-hidden`,children:[(0,y.jsx)(`button`,{type:`button`,onPointerDown:u,onClick:d,className:`absolute inset-0 z-0 rounded-2xl`,children:(0,y.jsx)(`span`,{className:`sr-only`,children:`${n}: ${e.title}`})}),(0,y.jsxs)(`div`,{className:`pointer-events-none relative z-[1] flex flex-1 flex-col`,children:[(0,y.jsxs)(`div`,{className:`relative aspect-video overflow-hidden border-b border-line bg-canvas-deep`,children:[o?(0,y.jsx)(`img`,{src:o,alt:``,loading:`lazy`,decoding:`async`,draggable:`false`,className:`h-full w-full object-cover transition-transform duration-500 ease-out select-none group-hover:scale-[1.04]`}):(0,y.jsx)(`div`,{className:`grid h-full w-full place-items-center px-6 text-center`,children:(0,y.jsx)(`span`,{className:`font-mono text-xs tracking-widest text-ink-subtle uppercase`,children:e.title})}),i?(0,y.jsxs)(`span`,{className:`absolute top-3 left-3 rounded-full border border-line-accent bg-accent/15 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-accent uppercase backdrop-blur-md`,children:[r,` `,i.id,` · `,i.name]}):null,e.placeholder?(0,y.jsx)(`span`,{className:`absolute top-3 right-3 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md`,children:t}):null]}),(0,y.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 p-6`,children:[(0,y.jsx)(`h3`,{className:`text-lg font-semibold tracking-tight text-balance text-ink`,children:e.title}),(0,y.jsx)(`p`,{className:`line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted`,children:e.summary}),e.skills?.length?(0,y.jsxs)(`ul`,{className:`flex flex-wrap gap-1.5 pt-1`,children:[e.skills.slice(0,4).map(e=>(0,y.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink`,children:e},e)),e.skills.length>4?(0,y.jsxs)(`li`,{className:`px-1 py-1 font-mono text-[0.6875rem] text-ink-subtle`,children:[`+`,e.skills.length-4]}):null]}):null,(0,y.jsxs)(`span`,{className:`mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:text-accent-bright group-hover:decoration-current`,children:[n,(0,y.jsx)(c.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5`})]})]})]})]})}function x({hacia:e,deshabilitado:n,etiqueta:r,onClick:i}){return(0,y.jsx)(t.button,{type:`button`,onClick:i,disabled:n,"aria-label":r,whileHover:n?void 0:{scale:1.06,y:-2},whileTap:n?void 0:{scale:.94},transition:{duration:.2,ease:o},className:`grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-inner-top transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover disabled:pointer-events-none disabled:opacity-35`,children:(0,y.jsx)(c.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 ${e<0?`-rotate-[135deg]`:`rotate-45`}`})})}function S({items:e,proposalLabel:t,detailsLabel:n,levelLabel:r,levels:a,onOpen:o}){let{t:s}=i(),c=(0,v.useRef)(null),[l,u]=(0,v.useState)(0),[d,f]=(0,v.useState)({inicio:!0,fin:!1}),p=(0,v.useCallback)(()=>{let e=c.current;if(!e)return 0;let t=e.getBoundingClientRect().left+1,n=0,r=1/0;return Array.from(e.children).forEach((e,i)=>{let a=Math.abs(e.getBoundingClientRect().left-t);a<r&&(r=a,n=i)}),n},[]),m=(0,v.useCallback)(()=>{let e=c.current;if(!e)return;let t=e.scrollLeft+e.clientWidth>=e.scrollWidth-8;u(t?e.children.length-1:p()),f({inicio:e.scrollLeft<=8,fin:t})},[p]);(0,v.useEffect)(()=>{let e=c.current;if(e)return m(),e.addEventListener(`scroll`,m,{passive:!0}),window.addEventListener(`resize`,m),()=>{e.removeEventListener(`scroll`,m),window.removeEventListener(`resize`,m)}},[m,e.length]);let h=(0,v.useCallback)(e=>{let t=c.current;if(!t)return;let n=t.children[Math.max(0,Math.min(e,t.children.length-1))];if(!n)return;let r=parseFloat(getComputedStyle(t).paddingLeft)||0;t.scrollLeft=n.offsetLeft-t.offsetLeft-r},[]),g=(0,v.useCallback)(e=>h(p()+e),[h,p]),_=(0,v.useCallback)(e=>{e.key===`ArrowRight`?(e.preventDefault(),g(1)):e.key===`ArrowLeft`&&(e.preventDefault(),g(-1))},[g]);return(0,y.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,y.jsx)(`ul`,{ref:c,tabIndex:0,onKeyDown:_,"aria-label":s(`actions.carousel`),className:`nc-carousel -mx-5 flex snap-x snap-proximity gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8`,children:e.map((i,s)=>(0,y.jsx)(`li`,{"aria-label":`${s+1} / ${e.length}`,className:`w-[82%] shrink-0 snap-start sm:w-[58%] lg:w-[calc((100%-2rem)/3)]`,children:(0,y.jsx)(b,{project:i,proposalLabel:t,detailsLabel:n,levelLabel:r,level:a.find(e=>e.id===i.level),onOpen:()=>o(s)})},i.title))}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,y.jsx)(`ul`,{className:`flex items-center gap-2`,children:e.map((t,n)=>(0,y.jsx)(`li`,{children:(0,y.jsx)(`button`,{type:`button`,onClick:()=>h(n),"aria-label":`${n+1} / ${e.length}`,"aria-current":n===l?`true`:void 0,className:`h-1.5 rounded-full transition-all duration-300 ${n===l?`w-7 bg-accent`:`w-1.5 bg-line-hover hover:bg-ink-subtle`}`})},t.title))}),(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(x,{hacia:-1,deshabilitado:d.inicio,etiqueta:s(`actions.previous`),onClick:()=>g(-1)}),(0,y.jsx)(x,{hacia:1,deshabilitado:d.fin,etiqueta:s(`actions.next`),onClick:()=>g(1)})]})]})]})}function C({project:e,level:t,levelLabel:n,open:r,onClose:i,proposalLabel:o,defaultLinkLabel:l}){let u=s(e?.image);return(0,y.jsx)(h,{open:r,onClose:i,titleId:`proyecto-titulo`,children:e?(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[u?(0,y.jsxs)(`div`,{className:`relative aspect-video shrink-0 overflow-hidden border-b border-line bg-canvas-deep`,children:[(0,y.jsx)(`img`,{src:u,alt:``,className:`h-full w-full object-cover`,decoding:`async`}),e.placeholder?(0,y.jsx)(`span`,{className:`absolute top-4 left-4 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md`,children:o}):null]}):null,(0,y.jsxs)(`div`,{className:`flex flex-col gap-5 p-6 sm:p-8`,children:[t?(0,y.jsxs)(`span`,{className:`nc-eyebrow`,children:[n,` `,t.id,` · `,t.name,` — `,t.note]}):null,(0,y.jsx)(`h3`,{id:`proyecto-titulo`,className:`text-2xl font-semibold tracking-tight text-balance text-ink`,children:e.title}),(0,y.jsx)(`p`,{className:`text-base leading-relaxed text-ink-muted`,children:e.summary}),e.skills?.length?(0,y.jsxs)(`div`,{className:`flex flex-col gap-2.5`,children:[(0,y.jsx)(`span`,{className:`nc-eyebrow`,children:e.skillsLabel}),(0,y.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:e.skills.map(e=>(0,y.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle`,children:e},e))})]}):null,e.url?(0,y.jsx)(`div`,{className:`mt-1 border-t border-line pt-6`,children:(0,y.jsxs)(a,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,size:`lg`,className:`w-full sm:w-auto`,children:[e.linkLabel||l,(0,y.jsx)(c.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4`})]})}):null]})]}):null})}var w=Object.assign({"./content.en.yaml":g,"./content.es.yaml":_});function T(){let e=l(),t=(0,v.useMemo)(()=>u(w,e)??{},[e]),n=t.items??[],[r,i]=(0,v.useState)(null);return n.length===0?null:(0,y.jsxs)(p,{id:`lab`,children:[(0,y.jsx)(d,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,y.jsx)(f,{className:`mt-12 lg:mt-16`,children:(0,y.jsx)(S,{items:n,proposalLabel:t.proposalLabel,detailsLabel:t.detailsLabel,levelLabel:t.levelLabel,levels:t.levels??[],onOpen:i})}),(0,y.jsx)(C,{project:r===null?null:{...n[r],skillsLabel:t.skillsLabel},level:r===null?null:(t.levels??[]).find(e=>e.id===n[r].level),levelLabel:t.levelLabel,open:r!==null,onClose:()=>i(null),proposalLabel:t.proposalLabel,defaultLinkLabel:t.defaultLinkLabel})]})}export{T as default};