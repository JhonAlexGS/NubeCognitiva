import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,u as r}from"./motion-D4psEU6N.js";import{N as i}from"./vendor-CLLkG1WV.js";import{c as a,d as o,i as s,l as c,n as l,s as u}from"./index-CXcA6o7p.js";import{n as d,r as f,t as p}from"./Section-BdWz7sDa.js";import{t as m}from"./SpotlightCard-DFo1FjN3.js";import{t as h}from"./Modal-462mnjXa.js";var g=`# ---------------------------------------------------------------------------\r
# LAB — English. Project carousel.\r
#\r
# ⚠️  Projects with \`placeholder: true\` are PROPOSALS, not finished work.\r
#     The card shows a "proposal" badge while that line is there. Delete it\r
#     ONLY once the project is real, and set its actual \`url\`.\r
#\r
# Fields per project:\r
#   title    → project name\r
#   level    → 1, 2 or 3. Must match an \`id\` in the \`levels\` list\r
#   summary  → description (clamped to 3 lines on the card)\r
#   skills   → what it teaches (the card shows 4 plus a counter)\r
#   image    → file inside \`public/\`, 16:9 ratio\r
#   url      → project link\r
#   linkLabel→ button text\r
#   placeholder → true while it is a proposal\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Lab\r
title: What I am building\r
lead: >-\r
  A roadmap in three levels: first understand the pieces locally, then automate\r
  them, and finally take them to the cloud.\r
\r
proposalLabel: Proposal\r
defaultLinkLabel: View project\r
detailsLabel: View details\r
skillsLabel: What it teaches\r
levelLabel: Level\r
\r
# The three steps of the roadmap. \`id\` is what links to the \`level\` field.\r
levels:\r
  - id: 1\r
    name: Understand\r
    note: All local, no cloud\r
  - id: 2\r
    name: Automate\r
    note: Reproducibility and orchestration\r
  - id: 3\r
    name: Deploy\r
    note: To production on AWS\r
\r
items:\r
  # ---------------------------- Level 1 ----------------------------\r
  - title: Network traffic classifier\r
    level: 1\r
    image: proyectos/trafico.svg\r
    url: https://github.com/JhonAlexGS/Network-Traffic-Classifier/tree/main\r
    linkLabel: View project\r
    summary: >-\r
      Classifying network traffic by attack type: the ones slipping through drop\r
      from 8.7% to 0.8%, at the cost of doubling false alarms. The challenge was\r
      never overall accuracy but the rare classes — some attacks show up in 0.07%\r
      of the rows. Along the way it turned out the dataset's official split\r
      carries 25.3% leakage and 1,397 vectors with contradictory labels.\r
    skills: [Python, scikit-learn, Imbalanced classes, Data leakage, Metrics]\r
\r
  - title: Semantic search over job postings\r
    level: 1\r
    image: proyectos/buscador.svg\r
    url: https://github.com/JhonAlexGS/Semantic-search-over-job-postings\r
    linkLabel: View project\r
    summary: >-\r
      Searching for "handling customer problems over the phone" and getting\r
      postings titled "Customer Support Legend", without a single shared word.\r
      Against keyword search, P@10 is 1.75x higher across 10,145 postings. Along\r
      the way: the hybrid looked like an 11% gain and was worth nothing — the\r
      parameter had been tuned on the evaluation set itself.\r
    skills: [Embeddings, Vector search, BM25, Retrieval evaluation, Python]\r
\r
  - title: RAG over technical documentation\r
    level: 1\r
    placeholder: true\r
    image: proyectos/rag.svg\r
    url: https://github.com/JhonAlexGS/Rag-documentacion-tecnica\r
    linkLabel: View project\r
    summary: >-\r
      Asking questions over 6,503 documentation chunks and getting answers that\r
      cite their source. What gets measured is not accuracy, it's how often the\r
      system admits it doesn't know: across 150 unanswerable questions,\r
      abstention swings from 96% to 16% by changing the model alone.\r
    skills: [Ollama, RAG, Citations, Abstention, Generation evaluation]\r
\r
  # ---------------------------- Level 2 ----------------------------\r
  - title: MLOps running locally\r
    level: 2\r
    placeholder: true\r
    image: proyectos/mlops.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      Industrialising the level 1 classifier: version the data, track every\r
      experiment and retrain only when things change. The goal is being able to\r
      say six months from now which data, which commit and which\r
      hyperparameters produced the model in production.\r
    skills: [MLflow, DVC, GitHub Actions, Docker, Reproducibility]\r
\r
  - title: AI-driven automation\r
    level: 2\r
    placeholder: true\r
    image: proyectos/automatizacion.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      A workflow that reads new job postings every morning, runs them through\r
      the semantic search, filters the ones that fit and sends a summary written\r
      by a model. It connects two pieces that already exist instead of building\r
      a third from scratch.\r
    skills: [n8n, Webhooks, Orchestration, LLM, APIs]\r
\r
  # ---------------------------- Level 3 ----------------------------\r
  - title: The RAG deployed on AWS\r
    level: 3\r
    placeholder: true\r
    image: proyectos/despliegue.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      Taking something that already works to production: Lambda for inference,\r
      S3 for the documents, API Gateway as the entry point and Terraform\r
      describing the whole infrastructure. Serverless, so it costs nothing while\r
      idle.\r
    skills: [AWS Lambda, API Gateway, S3, Terraform, Serverless]\r
\r
  - title: MLOps pipeline on AWS\r
    level: 3\r
    placeholder: true\r
    image: proyectos/nube-mlops.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: View project\r
    summary: >-\r
      The end of the road: the level 2 pipeline running by itself in the cloud.\r
      Retraining triggered by new data, a model registry and automatic\r
      deployment only when the metric improves.\r
    skills: [SageMaker, Step Functions, Terraform, CI/CD, Model Registry]\r
`,_=`# ---------------------------------------------------------------------------\r
# LABORATORIO — español. Carrusel de proyectos.\r
#\r
# ⚠️  Los proyectos con \`placeholder: true\` son PROPUESTAS, no trabajo hecho.\r
#     La tarjeta muestra una etiqueta de «propuesta» mientras esa línea esté.\r
#     Bórrala SOLO cuando el proyecto sea real, y pon su \`url\` de verdad.\r
#\r
# Campos de cada proyecto:\r
#   title    → nombre del proyecto\r
#   level    → 1, 2 o 3. Debe coincidir con un \`id\` de la lista \`levels\`\r
#   summary  → descripción (en la tarjeta se recorta a 3 líneas)\r
#   skills   → lo que se aprende (en la tarjeta se ven 4 y un contador)\r
#   image    → archivo dentro de \`public/\`, proporción 16:9\r
#   url      → enlace del proyecto\r
#   linkLabel→ texto del botón\r
#   placeholder → true mientras sea una propuesta\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Laboratorio\r
title: Lo que estoy construyendo\r
lead: >-\r
  Una ruta de proyectos en tres niveles: primero entender las piezas en local,\r
  después automatizarlas y por último llevarlas a la nube.\r
\r
proposalLabel: Propuesta\r
defaultLinkLabel: Ver proyecto\r
detailsLabel: Ver detalles\r
skillsLabel: Lo que se aprende\r
levelLabel: Nivel\r
\r
# Los tres peldaños de la ruta. \`id\` es lo que enlaza con el campo \`level\`.\r
levels:\r
  - id: 1\r
    name: Entender\r
    note: Todo en local, sin nube\r
  - id: 2\r
    name: Automatizar\r
    note: Reproducibilidad y orquestación\r
  - id: 3\r
    name: Desplegar\r
    note: A producción en AWS\r
\r
items:\r
  # ---------------------------- Nivel 1 ----------------------------\r
  - title: Clasificador de tráfico de red\r
    level: 1\r
    image: proyectos/trafico.svg\r
    url: https://github.com/JhonAlexGS/Network-Traffic-Classifier/tree/main\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Clasificar tráfico de red por tipo de ataque: los que pasan desapercibidos\r
      caen del 8,7 % al 0,8 %, a costa de duplicar las falsas alarmas. El reto no\r
      era el accuracy global sino las clases raras — hay ataques en el 0,07 % de\r
      las filas. Por el camino apareció que la división oficial del dataset trae\r
      un 25,3 % de fuga y 1 397 vectores con etiquetas contradictorias.\r
    skills: [Python, scikit-learn, Clases desequilibradas, Fuga de datos, Métricas]\r
\r
  - title: Buscador semántico de ofertas de empleo\r
    level: 1\r
    image: proyectos/buscador.svg\r
    url: https://github.com/JhonAlexGS/Semantic-search-over-job-postings/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Buscar «resolver problemas de clientes por teléfono» y que salgan ofertas\r
      tituladas «Customer Support Legend», sin una palabra en común. Frente a la\r
      búsqueda por palabras clave, el P@10 se multiplica por 1,75 sobre 10 145\r
      ofertas. Por el camino: el híbrido parecía mejorar un 11 % y no mejoraba\r
      nada — el parámetro se había ajustado mirando la propia evaluación.\r
    skills: [Embeddings, Búsqueda vectorial, BM25, Evaluación de recuperación, Python]\r
\r
  - title: RAG sobre documentación técnica\r
    level: 1\r
    # placeholder: true\r
    image: proyectos/rag.svg\r
    url: https://github.com/JhonAlexGS/Rag-documentacion-tecnica\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Preguntar sobre 6 503 fragmentos de documentación y recibir respuestas que\r
      citan su fuente. Lo que se mide no es el acierto, es cuántas veces el\r
      sistema reconoce que no sabe: con 150 preguntas imposibles, la abstención\r
      va del 96 % al 16 % solo cambiando el modelo, con todo lo demás igual.\r
    skills: [Ollama, RAG, Citas, Abstención, Evaluación de generación]\r
\r
  # ---------------------------- Nivel 2 ----------------------------\r
  - title: MLOps en local\r
    level: 2\r
    placeholder: true\r
    image: proyectos/mlops.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Industrializar el clasificador del nivel 1: versionar los datos, registrar\r
      cada experimento y reentrenar solo cuando cambian. El objetivo es poder\r
      decir dentro de seis meses de qué datos, qué commit y qué hiperparámetros\r
      salió el modelo que está corriendo.\r
    skills: [MLflow, DVC, GitHub Actions, Docker, Reproducibilidad]\r
\r
  - title: Automatización con IA\r
    level: 2\r
    placeholder: true\r
    image: proyectos/automatizacion.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Un flujo que cada mañana lee ofertas nuevas, las pasa por el buscador\r
      semántico, filtra las que encajan y manda un resumen escrito por un\r
      modelo. Conecta dos piezas que ya existen en vez de construir una tercera\r
      desde cero.\r
    skills: [n8n, Webhooks, Orquestación, LLM, APIs]\r
\r
  # ---------------------------- Nivel 3 ----------------------------\r
  - title: El RAG desplegado en AWS\r
    level: 3\r
    placeholder: true\r
    image: proyectos/despliegue.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      Llevar a producción algo que ya funciona: Lambda para la inferencia, S3\r
      para los documentos, API Gateway como entrada y Terraform describiendo\r
      toda la infraestructura. Serverless para que en reposo no cueste nada.\r
    skills: [AWS Lambda, API Gateway, S3, Terraform, Serverless]\r
\r
  - title: Pipeline de MLOps en AWS\r
    level: 3\r
    placeholder: true\r
    image: proyectos/nube-mlops.svg\r
    url: https://jhonalexgs.github.io/NubeCognitiva/\r
    linkLabel: Ver proyecto\r
    summary: >-\r
      El final del camino: el pipeline del nivel 2 corriendo solo en la nube.\r
      Reentrenamiento disparado por datos nuevos, registro de modelos y\r
      despliegue automático únicamente si la métrica mejora.\r
    skills: [SageMaker, Step Functions, Terraform, CI/CD, Model Registry]\r
`,v=e(n(),1),y=r();function b({project:e,proposalLabel:t,detailsLabel:n,levelLabel:r,level:i,onOpen:a}){let o=s(e.image),l=(0,v.useRef)(null),u=(0,v.useCallback)(e=>{l.current=e.clientX},[]),d=(0,v.useCallback)(e=>{let t=l.current;l.current=null,!(t!==null&&Math.abs(e.clientX-t)>8)&&a()},[a]);return(0,y.jsxs)(m,{lift:!1,className:`flex h-full flex-col overflow-hidden`,children:[(0,y.jsx)(`button`,{type:`button`,onPointerDown:u,onClick:d,className:`absolute inset-0 z-0 rounded-2xl`,children:(0,y.jsx)(`span`,{className:`sr-only`,children:`${n}: ${e.title}`})}),(0,y.jsxs)(`div`,{className:`pointer-events-none relative z-[1] flex flex-1 flex-col`,children:[(0,y.jsxs)(`div`,{className:`relative aspect-video overflow-hidden border-b border-line bg-canvas-deep`,children:[o?(0,y.jsx)(`img`,{src:o,alt:``,loading:`lazy`,decoding:`async`,draggable:`false`,className:`h-full w-full object-cover transition-transform duration-500 ease-out select-none group-hover:scale-[1.04]`}):(0,y.jsx)(`div`,{className:`grid h-full w-full place-items-center px-6 text-center`,children:(0,y.jsx)(`span`,{className:`font-mono text-xs tracking-widest text-ink-subtle uppercase`,children:e.title})}),i?(0,y.jsxs)(`span`,{className:`absolute top-3 left-3 rounded-full border border-line-accent bg-accent/15 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-accent uppercase backdrop-blur-md`,children:[r,` `,i.id,` · `,i.name]}):null,e.placeholder?(0,y.jsx)(`span`,{className:`absolute top-3 right-3 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md`,children:t}):null]}),(0,y.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 p-6`,children:[(0,y.jsx)(`h3`,{className:`text-lg font-semibold tracking-tight text-balance text-ink`,children:e.title}),(0,y.jsx)(`p`,{className:`line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted`,children:e.summary}),e.skills?.length?(0,y.jsxs)(`ul`,{className:`flex flex-wrap gap-1.5 pt-1`,children:[e.skills.slice(0,4).map(e=>(0,y.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink`,children:e},e)),e.skills.length>4?(0,y.jsxs)(`li`,{className:`px-1 py-1 font-mono text-[0.6875rem] text-ink-subtle`,children:[`+`,e.skills.length-4]}):null]}):null,(0,y.jsxs)(`span`,{className:`mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:text-accent-bright group-hover:decoration-current`,children:[n,(0,y.jsx)(c.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5`})]})]})]})]})}function x({hacia:e,deshabilitado:n,etiqueta:r,onClick:i}){return(0,y.jsx)(t.button,{type:`button`,onClick:i,disabled:n,"aria-label":r,whileHover:n?void 0:{scale:1.06,y:-2},whileTap:n?void 0:{scale:.94},transition:{duration:.2,ease:o},className:`grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-inner-top transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover disabled:pointer-events-none disabled:opacity-35`,children:(0,y.jsx)(c.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 ${e<0?`-rotate-[135deg]`:`rotate-45`}`})})}function S({items:e,proposalLabel:t,detailsLabel:n,levelLabel:r,levels:a,onOpen:o}){let{t:s}=i(),c=(0,v.useRef)(null),[l,u]=(0,v.useState)(0),[d,f]=(0,v.useState)({inicio:!0,fin:!1}),p=(0,v.useCallback)(()=>{let e=c.current;if(!e)return 0;let t=e.getBoundingClientRect().left+1,n=0,r=1/0;return Array.from(e.children).forEach((e,i)=>{let a=Math.abs(e.getBoundingClientRect().left-t);a<r&&(r=a,n=i)}),n},[]),m=(0,v.useCallback)(()=>{let e=c.current;if(!e)return;let t=e.scrollLeft+e.clientWidth>=e.scrollWidth-8;u(t?e.children.length-1:p()),f({inicio:e.scrollLeft<=8,fin:t})},[p]);(0,v.useEffect)(()=>{let e=c.current;if(e)return m(),e.addEventListener(`scroll`,m,{passive:!0}),window.addEventListener(`resize`,m),()=>{e.removeEventListener(`scroll`,m),window.removeEventListener(`resize`,m)}},[m,e.length]);let h=(0,v.useCallback)(e=>{let t=c.current;if(!t)return;let n=t.children[Math.max(0,Math.min(e,t.children.length-1))];if(!n)return;let r=parseFloat(getComputedStyle(t).paddingLeft)||0;t.scrollLeft=n.offsetLeft-t.offsetLeft-r},[]),g=(0,v.useCallback)(e=>h(p()+e),[h,p]),_=(0,v.useCallback)(e=>{e.key===`ArrowRight`?(e.preventDefault(),g(1)):e.key===`ArrowLeft`&&(e.preventDefault(),g(-1))},[g]);return(0,y.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,y.jsx)(`ul`,{ref:c,tabIndex:0,onKeyDown:_,"aria-label":s(`actions.carousel`),className:`nc-carousel -mx-5 flex snap-x snap-proximity gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8`,children:e.map((i,s)=>(0,y.jsx)(`li`,{"aria-label":`${s+1} / ${e.length}`,className:`w-[82%] shrink-0 snap-start sm:w-[58%] lg:w-[calc((100%-2rem)/3)]`,children:(0,y.jsx)(b,{project:i,proposalLabel:t,detailsLabel:n,levelLabel:r,level:a.find(e=>e.id===i.level),onOpen:()=>o(s)})},i.title))}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,y.jsx)(`ul`,{className:`flex items-center gap-2`,children:e.map((t,n)=>(0,y.jsx)(`li`,{children:(0,y.jsx)(`button`,{type:`button`,onClick:()=>h(n),"aria-label":`${n+1} / ${e.length}`,"aria-current":n===l?`true`:void 0,className:`h-1.5 rounded-full transition-all duration-300 ${n===l?`w-7 bg-accent`:`w-1.5 bg-line-hover hover:bg-ink-subtle`}`})},t.title))}),(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(x,{hacia:-1,deshabilitado:d.inicio,etiqueta:s(`actions.previous`),onClick:()=>g(-1)}),(0,y.jsx)(x,{hacia:1,deshabilitado:d.fin,etiqueta:s(`actions.next`),onClick:()=>g(1)})]})]})]})}function C({project:e,level:t,levelLabel:n,open:r,onClose:i,proposalLabel:o,defaultLinkLabel:l}){let u=s(e?.image);return(0,y.jsx)(h,{open:r,onClose:i,titleId:`proyecto-titulo`,children:e?(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[u?(0,y.jsxs)(`div`,{className:`relative aspect-video shrink-0 overflow-hidden border-b border-line bg-canvas-deep`,children:[(0,y.jsx)(`img`,{src:u,alt:``,className:`h-full w-full object-cover`,decoding:`async`}),e.placeholder?(0,y.jsx)(`span`,{className:`absolute top-4 left-4 rounded-full border border-line bg-canvas-base/80 px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink uppercase backdrop-blur-md`,children:o}):null]}):null,(0,y.jsxs)(`div`,{className:`flex flex-col gap-5 p-6 sm:p-8`,children:[t?(0,y.jsxs)(`span`,{className:`nc-eyebrow`,children:[n,` `,t.id,` · `,t.name,` — `,t.note]}):null,(0,y.jsx)(`h3`,{id:`proyecto-titulo`,className:`text-2xl font-semibold tracking-tight text-balance text-ink`,children:e.title}),(0,y.jsx)(`p`,{className:`text-base leading-relaxed text-ink-muted`,children:e.summary}),e.skills?.length?(0,y.jsxs)(`div`,{className:`flex flex-col gap-2.5`,children:[(0,y.jsx)(`span`,{className:`nc-eyebrow`,children:e.skillsLabel}),(0,y.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:e.skills.map(e=>(0,y.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle`,children:e},e))})]}):null,e.url?(0,y.jsx)(`div`,{className:`mt-1 border-t border-line pt-6`,children:(0,y.jsxs)(a,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,size:`lg`,className:`w-full sm:w-auto`,children:[e.linkLabel||l,(0,y.jsx)(c.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4`})]})}):null]})]}):null})}var w=Object.assign({"./content.en.yaml":g,"./content.es.yaml":_});function T(){let e=l(),t=(0,v.useMemo)(()=>u(w,e)??{},[e]),n=t.items??[],[r,i]=(0,v.useState)(null);return n.length===0?null:(0,y.jsxs)(p,{id:`lab`,children:[(0,y.jsx)(d,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,y.jsx)(f,{className:`mt-12 lg:mt-16`,children:(0,y.jsx)(S,{items:n,proposalLabel:t.proposalLabel,detailsLabel:t.detailsLabel,levelLabel:t.levelLabel,levels:t.levels??[],onOpen:i})}),(0,y.jsx)(C,{project:r===null?null:{...n[r],skillsLabel:t.skillsLabel},level:r===null?null:(t.levels??[]).find(e=>e.id===n[r].level),levelLabel:t.levelLabel,open:r!==null,onClose:()=>i(null),proposalLabel:t.proposalLabel,defaultLinkLabel:t.defaultLinkLabel})]})}export{T as default};