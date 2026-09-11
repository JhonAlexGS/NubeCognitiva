import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,u as n}from"./motion-D4psEU6N.js";import{n as r,p as i,s as a}from"./index-tkwvaLF7.js";import{n as o,r as s,t as c}from"./Section-DByWhfWM.js";var l=`# ---------------------------------------------------------------------------\r
# WORK EXPERIENCE — English.\r
#\r
# \`items\` is the job list, most recent first. To add one, copy a whole block\r
# and keep the indentation.\r
#\r
# Fields per job:\r
#   company    → company name\r
#   role       → your job title\r
#   location   → city and country\r
#   period     → dates\r
#   highlights → what you did there (one line per achievement)\r
#   stack      → technologies you used\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Experience\r
title: Two years shipping product in agile teams\r
lead: >-\r
  From a dealership CRUD to a search engine running on AWS: where I have\r
  worked, what I built and what I built it with.\r
\r
items:\r
  - company: Coally\r
    role: Full Stack Developer\r
    location: Bogotá, Colombia\r
    period: Jan 2024 – Dec 2025\r
    highlights:\r
      - Designed a CRUD system for dealership vehicle management with JavaScript, Express.js and MongoDB.\r
      - Set up and integrated RESTful API endpoints with JWT token authentication.\r
      - Managed the file pipeline with a HubSpot integration.\r
      - Built a system that unifies OAuth2 across several platforms.\r
    stack: [JavaScript, Express.js, MongoDB, JWT, HubSpot, OAuth2]\r
\r
  - company: BookLick\r
    role: Full Stack Developer\r
    location: Bogotá, Colombia\r
    period: Jan 2023 – Dec 2024\r
    highlights:\r
      - Development on MongoDB, MySQL and PostgreSQL with Python and TypeScript on AWS.\r
      - Statistical analysis with Power BI to measure platform service usage.\r
      - Integrated resources into the search engine with PostgreSQL and Elastic Search.\r
    stack: [Python, TypeScript, PostgreSQL, Elastic Search, AWS, Power BI]\r
\r
  - company: MinTIC · MisiónTIC\r
    role: Teaching Assistant & Support Centre\r
    location: Bogotá, Colombia\r
    period: Jan 2022 – Dec 2023\r
    highlights:\r
      - Supported programming and development projects with Oracle virtual machines, websites and SQL.\r
    stack: [SQL, Oracle VM, Web]\r
\r
  - company: NTT Data\r
    role: Junior Developer\r
    location: Bogotá, Colombia\r
    period: Jan 2022 – Dec 2022\r
    highlights:\r
      - Developed, reviewed and supervised new features for the Zurich company chatbot.\r
    stack: [Chatbot, QA]\r
`,u=`# ---------------------------------------------------------------------------\r
# EXPERIENCIA LABORAL — español.\r
#\r
# \`items\` es la lista de empleos, en orden del más reciente al más antiguo.\r
# Para añadir uno, copia un bloque completo respetando la indentación.\r
#\r
# Campos de cada empleo:\r
#   company    → nombre de la empresa\r
#   role       → tu cargo\r
#   location   → ciudad y país\r
#   period     → fechas\r
#   highlights → lo que hiciste ahí (una línea por logro)\r
#   stack      → tecnologías que usaste\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Experiencia\r
title: Dos años construyendo producto en equipos ágiles\r
lead: >-\r
  De un CRUD para concesionarias a un motor de búsqueda sobre AWS: dónde he\r
  trabajado, qué construí y con qué lo hice.\r
\r
items:\r
  - company: Coally\r
    role: Full Stack Developer\r
    location: Bogotá, Colombia\r
    period: Ene 2024 – Dic 2025\r
    highlights:\r
      - Diseño de un sistema CRUD para la gestión de vehículos de concesionaria con JavaScript, Express.js y MongoDB.\r
      - Configuración e integración de endpoints API RESTful con autenticación por tokens JWT.\r
      - Gestión del flujo de archivos con integración a HubSpot.\r
      - Implementación de un sistema que unifica el OAuth2 de distintas plataformas.\r
    stack: [JavaScript, Express.js, MongoDB, JWT, HubSpot, OAuth2]\r
\r
  - company: BookLick\r
    role: Full Stack Developer\r
    location: Bogotá, Colombia\r
    period: Ene 2023 – Dic 2024\r
    highlights:\r
      - Desarrollo sobre MongoDB, MySQL y PostgreSQL con Python y TypeScript en AWS.\r
      - Análisis estadístico con Power BI para medir el uso de los servicios de la plataforma.\r
      - Integración de recursos al motor de búsqueda con PostgreSQL y Elastic Search.\r
    stack: [Python, TypeScript, PostgreSQL, Elastic Search, AWS, Power BI]\r
\r
  - company: MinTIC · MisiónTIC\r
    role: Monitor y Centro de Apoyo\r
    location: Bogotá, Colombia\r
    period: Ene 2022 – Dic 2023\r
    highlights:\r
      - Acompañamiento en programación y desarrollo de proyectos con máquinas virtuales Oracle, sitios web y SQL.\r
    stack: [SQL, Oracle VM, Web]\r
\r
  - company: NTT Data\r
    role: Programador Junior\r
    location: Bogotá, Colombia\r
    period: Ene 2022 – Dic 2022\r
    highlights:\r
      - Desarrollo, revisión y supervisión de nuevas funcionalidades del chatbot de la compañía Zurich.\r
    stack: [Chatbot, QA]\r
`,d=e(t(),1),f=n();function p({jobs:e}){return(0,f.jsx)(`ol`,{className:`relative flex flex-col gap-8 border-l border-line pl-6 md:gap-10 md:pl-8`,children:e.map((e,t)=>(0,f.jsxs)(s,{as:`li`,variants:i,delay:t*.06,className:`relative`,children:[(0,f.jsx)(`span`,{"aria-hidden":`true`,className:`absolute top-1.5 -left-[1.6875rem] grid h-3 w-3 place-items-center rounded-full border border-line-accent bg-canvas-base md:-left-[2.1875rem]`,children:(0,f.jsx)(`span`,{className:`h-1.5 w-1.5 rounded-full bg-accent`})}),(0,f.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,f.jsx)(`span`,{className:`font-mono text-[0.6875rem] tracking-widest text-accent uppercase`,children:e.period}),(0,f.jsxs)(`h3`,{className:`text-lg font-semibold tracking-tight text-ink`,children:[e.role,(0,f.jsxs)(`span`,{className:`text-ink-muted`,children:[` · `,e.company]})]}),(0,f.jsx)(`p`,{className:`text-xs text-ink-subtle`,children:e.location})]}),(0,f.jsx)(`ul`,{className:`mt-3 flex flex-col gap-2`,children:(e.highlights??[]).map(e=>(0,f.jsxs)(`li`,{className:`relative pl-5 text-sm leading-relaxed text-ink-muted`,children:[(0,f.jsx)(`span`,{"aria-hidden":`true`,className:`absolute top-[0.55em] left-0 h-1 w-1 rounded-full bg-accent/70`}),e]},e))}),e.stack?.length?(0,f.jsx)(`ul`,{className:`mt-4 flex flex-wrap gap-1.5`,children:e.stack.map(e=>(0,f.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:e},e))}):null]},`${e.company}-${e.period}`))})}var m=Object.assign({"./content.en.yaml":l,"./content.es.yaml":u});function h(){let e=r(),t=(0,d.useMemo)(()=>a(m,e)??{},[e]),n=t.items??[];return n.length===0?null:(0,f.jsxs)(c,{id:`experience`,children:[(0,f.jsx)(o,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,f.jsx)(`div`,{className:`mt-12 lg:mt-16`,children:(0,f.jsx)(p,{jobs:n})})]})}export{h as default};