import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,f as n}from"./motion-HkNTX_OB.js";import{n as r,s as i,u as a}from"./index-C6X1j9lX.js";import{n as o,r as s,t as c}from"./Section-B4T510pQ.js";import{t as l}from"./techLogos--T5sTjQU.js";var u=`# ---------------------------------------------------------------------------\r
# TECH STACK — English.\r
# Every block inside \`marquee\` is a carousel lane (lanes alternate direction).\r
# Add or remove technologies inside \`items\` without touching any code.\r
#\r
#   icon   sign icon: terminal, layers, devops, cloud, server, database,\r
#          tool, cpu.\r
#   title  lane name.\r
#   brand  (optional) logo for the lane's technologies that have none of their\r
#          own; e.g. \`aws\` gives S3 or Lambda the AWS logo.\r
#   items  technologies. Those with a logo in \`src/components/ui/techLogos.js\`\r
#          show it; the rest show just their name.\r
#\r
# \`marqueeCount\` is the counter label of each lane.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Tech stack\r
title: The tools I build with\r
lead: >-\r
  A stack that covers the whole journey: from the language and the framework to\r
  the container, the cloud and the dashboard that tells you whether any of it\r
  worked.\r
\r
marquee:\r
  - icon: terminal\r
    title: Languages and web\r
    items: [Python, TypeScript, JavaScript, Java, C++, R, Matlab, SQL, HCL, HTML/CSS, React, Node.js, Express.js]\r
  - icon: layers\r
    title: Frameworks and ML\r
    items: [Spring Boot, FastAPI, TensorFlow, scikit-learn, Jupyter, Databricks, PyCharm, VS Code, NetBeans]\r
  - icon: devops\r
    title: DevOps and CI/CD\r
    items: [Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, SonarQube, Azure Pipelines]\r
  - icon: cloud\r
    title: AWS services\r
    brand: aws\r
    items: [S3, EC2, ECR, ECS, RDS, Lambda, Athena, Glue, QuickSight, SageMaker, Cloud9]\r
  - icon: server\r
    title: Azure services\r
    brand: azure\r
    items:\r
      - Virtual Machines\r
      - Blob Storage\r
      - SQL Database\r
      - Functions\r
      - AKS\r
      - Active Directory\r
      - Data Factory\r
      - Synapse Analytics\r
      - Machine Learning\r
      - DevOps\r
  - icon: database\r
    title: Data and tools\r
    items: [PostgreSQL, MySQL, MariaDB, MongoDB, Redis, Elastic Search, Power BI, Postman, Insomnia, Wireshark, GNU Radio, GNSS-SDR]\r
\r
marqueeCount: technologies\r
\r
languagesTitle: Languages\r
languages:\r
  - name: Spanish\r
    level: Native\r
  - name: English\r
    level: B1\r
`,d=`# ---------------------------------------------------------------------------\r
# STACK TÉCNICO — español.\r
# Cada bloque de \`marquee\` es un carril del carrusel (alternan de sentido).\r
# Añade o quita tecnologías dentro de \`items\` sin tocar el código.\r
#\r
#   icon   ícono del letrero: terminal, layers, devops, cloud, server,\r
#          database, tool, cpu.\r
#   title  nombre del carril.\r
#   brand  (opcional) logo para las tecnologías del carril que no tienen uno\r
#          propio; p. ej. \`aws\` hace que S3 o Lambda lleven el logo de AWS.\r
#   items  tecnologías. Las que tienen logo en \`src/components/ui/techLogos.js\`\r
#          lo muestran; las demás salen sólo con el nombre.\r
#\r
# \`marqueeCount\` es el texto del contador de cada carril.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Stack técnico\r
title: Las herramientas con las que construyo\r
lead: >-\r
  Un stack que cubre el recorrido completo: del lenguaje y el framework al\r
  contenedor, la nube y el tablero que mide si todo eso sirvió para algo.\r
\r
marquee:\r
  - icon: terminal\r
    title: Lenguajes y web\r
    items: [Python, TypeScript, JavaScript, Java, C++, R, Matlab, SQL, HCL, HTML/CSS, React, Node.js, Express.js]\r
  - icon: layers\r
    title: Frameworks y ML\r
    items: [Spring Boot, FastAPI, TensorFlow, scikit-learn, Jupyter, Databricks, PyCharm, VS Code, NetBeans]\r
  - icon: devops\r
    title: DevOps y CI/CD\r
    items: [Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, SonarQube, Azure Pipelines]\r
  - icon: cloud\r
    title: Servicios AWS\r
    brand: aws\r
    items: [S3, EC2, ECR, ECS, RDS, Lambda, Athena, Glue, QuickSight, SageMaker, Cloud9]\r
  - icon: server\r
    title: Servicios Azure\r
    brand: azure\r
    items:\r
      - Virtual Machines\r
      - Blob Storage\r
      - SQL Database\r
      - Functions\r
      - AKS\r
      - Active Directory\r
      - Data Factory\r
      - Synapse Analytics\r
      - Machine Learning\r
      - DevOps\r
  - icon: database\r
    title: Datos y herramientas\r
    items: [PostgreSQL, MySQL, MariaDB, MongoDB, Redis, Elastic Search, Power BI, Postman, Insomnia, Wireshark, GNU Radio, GNSS-SDR]\r
\r
marqueeCount: tecnologías\r
\r
languagesTitle: Idiomas\r
languages:\r
  - name: Español\r
    level: Nativo\r
  - name: Inglés\r
    level: B1\r
`,f=e(n(),1),p=t(),m=12;function h({rows:e=[],countLabel:t=``}){let n=e.filter(e=>e.items?.length);return n.length?(0,p.jsx)(`div`,{className:`flex flex-col gap-6 lg:gap-4`,children:n.map((e,n)=>{let r=Math.ceil(m/e.items.length),i=Array.from({length:r},()=>e.items).flat(),a=e.brand?l(e.brand):void 0;return(0,p.jsxs)(`div`,{className:`group/lane flex flex-col gap-2 border-t border-line pt-6 first:border-t-0 first:pt-0 lg:flex-row lg:items-center lg:gap-6 lg:border-t-0 lg:pt-0`,children:[e.title?(0,p.jsx)(g,{row:e,countLabel:t}):null,(0,p.jsx)(`div`,{className:`nc-marquee min-w-0 flex-1`,children:(0,p.jsxs)(`div`,{className:`nc-marquee__track`,"data-reverse":n%2==1?`true`:`false`,style:{"--marquee-duration":`${i.length*7}s`},children:[(0,p.jsx)(_,{items:i,size:e.items.length,fallback:a}),(0,p.jsx)(_,{items:i,size:e.items.length,fallback:a,copy:!0})]})})]},e.title??n)})}):null}function g({row:e,countLabel:t}){return(0,p.jsxs)(`div`,{className:`nc-lane-title flex shrink-0 items-center gap-3 lg:w-60 lg:rounded-xl lg:border lg:border-line lg:py-2.5 lg:pl-4 lg:pr-3 lg:shadow-inner-top`,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,className:`nc-lane-title__icon grid h-8 w-8 shrink-0 lg:h-9 lg:w-9 place-items-center rounded-lg border border-line text-accent`,children:(0,f.createElement)(a(e.icon),{className:`h-4 w-4`})}),(0,p.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-1`,children:[(0,p.jsx)(`h3`,{className:`truncate text-sm font-medium tracking-tight text-ink-muted transition-colors duration-300 group-hover/lane:text-ink`,children:e.title}),(0,p.jsxs)(`p`,{className:`flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-subtle`,children:[(0,p.jsxs)(`span`,{"aria-hidden":`true`,className:`relative flex h-1.5 w-1.5 shrink-0`,children:[(0,p.jsx)(`span`,{className:`absolute inline-flex h-full w-full rounded-full bg-accent opacity-50 motion-safe:animate-ping`}),(0,p.jsx)(`span`,{className:`relative inline-flex h-1.5 w-1.5 rounded-full bg-accent`})]}),String(e.items.length).padStart(2,`0`),` `,t]})]})]})}function _({items:e,size:t,fallback:n,copy:r=!1}){return(0,p.jsx)(`ul`,{className:`nc-marquee__list`,"data-copy":r?`true`:void 0,"aria-hidden":r?`true`:void 0,children:e.map((e,i)=>{let a=l(e)??n,o=a?.icon,s=i>=t;return(0,p.jsxs)(`li`,{"data-repeat":s?`true`:void 0,"aria-hidden":s&&!r?`true`:void 0,style:a?.color?{"--brand":a.color}:void 0,className:`nc-logo-pill flex h-10 shrink-0 items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 text-xs font-medium shadow-inner-top`,children:[o?(0,p.jsx)(o,{"aria-hidden":`true`,className:`h-5 w-5 shrink-0`}):null,(0,p.jsx)(`span`,{children:e})]},i)})})}var v=Object.assign({"./content.en.yaml":u,"./content.es.yaml":d});function y(){let e=r(),t=(0,f.useMemo)(()=>i(v,e)??{},[e]);return(0,p.jsxs)(c,{id:`skills`,children:[(0,p.jsx)(o,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),t.marquee?.length?(0,p.jsx)(s,{className:`mt-12 lg:mt-16`,children:(0,p.jsx)(h,{rows:t.marquee,countLabel:t.marqueeCount})}):null,t.languages?.length?(0,p.jsxs)(s,{className:`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-inner-top`,children:[(0,p.jsx)(`h3`,{className:`nc-eyebrow`,children:t.languagesTitle}),(0,p.jsx)(`ul`,{className:`flex flex-wrap gap-x-6 gap-y-2`,children:t.languages.map(e=>(0,p.jsxs)(`li`,{className:`text-sm text-ink-muted`,children:[(0,p.jsx)(`span`,{className:`font-medium text-ink`,children:e.name}),(0,p.jsxs)(`span`,{className:`text-ink-subtle`,children:[` · `,e.level]})]},e.name))})]}):null]})}export{y as default};