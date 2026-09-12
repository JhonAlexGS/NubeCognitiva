import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,u as r}from"./motion-D4psEU6N.js";import{d as i,m as a,n as o,s,u as c}from"./index-DbWE5X3c.js";import{n as l,r as u,t as d}from"./Section-KDDI6yOU.js";import{t as f}from"./SpotlightCard-pnZG5pZc.js";var p=`# ---------------------------------------------------------------------------\r
# TECH STACK — English.\r
# Every block inside \`groups\` is a card. Add or remove technologies inside\r
# \`items\` without touching any code.\r
# \`icon\` accepts: terminal, layers, devops, cloud, server, database, tool, cpu.\r
#\r
# \`size\` controls the card width on desktop (6-column grid):\r
#   narrow = 2 columns · half = 3 columns · wide = 4 columns\r
# Keep each row's sizes adding up to 6 so no gaps are left behind.\r
# Current split: 2+2+2 · 3+3 · 2+4\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Tech stack\r
title: The tools I build with\r
lead: >-\r
  A stack that covers the whole journey: from the language and the framework to\r
  the container, the cloud and the dashboard that tells you whether any of it\r
  worked.\r
\r
groups:\r
  - icon: terminal\r
    size: narrow\r
    title: Languages\r
    items: [Python, JavaScript, TypeScript, Java, C++, SQL, HTML/CSS, R, Matlab, HCL]\r
\r
  - icon: layers\r
    size: narrow\r
    title: Frameworks\r
    items: [React, Express.js, Node.js, Spring Boot, TensorFlow, scikit-learn, FastAPI]\r
\r
  - icon: devops\r
    size: narrow\r
    title: DevOps and CI/CD\r
    items: [Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, SonarQube, Azure Pipelines]\r
\r
  - icon: cloud\r
    size: half\r
    title: Cloud · AWS\r
    items: [S3, EC2, ECR, ECS, RDS, Athena, QuickSight, Lambda, SageMaker, Glue, Cloud9]\r
\r
  - icon: server\r
    size: half\r
    title: Cloud · Azure\r
    items:\r
      - Virtual Machines\r
      - Blob Storage\r
      - SQL Database\r
      - Functions\r
      - AKS\r
      - Active Directory\r
      - Data Factory\r
      - Synapse Analytics\r
      - Databricks\r
      - Machine Learning\r
      - DevOps\r
\r
  - icon: database\r
    size: narrow\r
    title: Databases\r
    items: [MongoDB, MySQL, MariaDB, PostgreSQL, Elastic Search, Redis]\r
\r
  - icon: tool\r
    size: wide\r
    title: Tools\r
    items:\r
      - Power BI\r
      - Wireshark\r
      - Postman\r
      - Insomnia\r
      - GNU Radio\r
      - GNSS-SDR\r
      - Jupyter\r
      - PyCharm\r
      - VS Code\r
      - NetBeans\r
\r
languagesTitle: Languages\r
languages:\r
  - name: Spanish\r
    level: Native\r
  - name: English\r
    level: B1\r
`,m=`# ---------------------------------------------------------------------------\r
# STACK TÉCNICO — español.\r
# Cada bloque de \`groups\` es una tarjeta. Añade o quita tecnologías dentro de\r
# \`items\` sin tocar el código.\r
# \`icon\` acepta: terminal, layers, devops, cloud, server, database, tool, cpu.\r
#\r
# \`size\` controla el ancho de la tarjeta en escritorio (rejilla de 6 columnas):\r
#   narrow = 2 columnas · half = 3 columnas · wide = 4 columnas\r
# Procura que los tamaños de cada fila sumen 6, así no quedan huecos.\r
# El reparto actual es: 2+2+2 · 3+3 · 2+4\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Stack técnico\r
title: Las herramientas con las que construyo\r
lead: >-\r
  Un stack que cubre el recorrido completo: del lenguaje y el framework al\r
  contenedor, la nube y el tablero que mide si todo eso sirvió para algo.\r
\r
groups:\r
  - icon: terminal\r
    size: narrow\r
    title: Lenguajes\r
    items: [Python, JavaScript, TypeScript, Java, C++, SQL, HTML/CSS, R, Matlab, HCL]\r
\r
  - icon: layers\r
    size: narrow\r
    title: Frameworks\r
    items: [React, Express.js, Node.js, Spring Boot, TensorFlow, scikit-learn, FastAPI]\r
\r
  - icon: devops\r
    size: narrow\r
    title: DevOps y CI/CD\r
    items: [Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, SonarQube, Azure Pipelines]\r
\r
  - icon: cloud\r
    size: half\r
    title: Cloud · AWS\r
    items: [S3, EC2, ECR, ECS, RDS, Athena, QuickSight, Lambda, SageMaker, Glue, Cloud9]\r
\r
  - icon: server\r
    size: half\r
    title: Cloud · Azure\r
    items:\r
      - Virtual Machines\r
      - Blob Storage\r
      - SQL Database\r
      - Functions\r
      - AKS\r
      - Active Directory\r
      - Data Factory\r
      - Synapse Analytics\r
      - Databricks\r
      - Machine Learning\r
      - DevOps\r
\r
  - icon: database\r
    size: narrow\r
    title: Bases de datos\r
    items: [MongoDB, MySQL, MariaDB, PostgreSQL, Elastic Search, Redis]\r
\r
  - icon: tool\r
    size: wide\r
    title: Herramientas\r
    items:\r
      - Power BI\r
      - Wireshark\r
      - Postman\r
      - Insomnia\r
      - GNU Radio\r
      - GNSS-SDR\r
      - Jupyter\r
      - PyCharm\r
      - VS Code\r
      - NetBeans\r
\r
languagesTitle: Idiomas\r
languages:\r
  - name: Español\r
    level: Nativo\r
  - name: Inglés\r
    level: B1\r
`,h=e(n(),1),g=r(),_=Object.assign({"./content.en.yaml":p,"./content.es.yaml":m}),v={narrow:`lg:col-span-2`,half:`lg:col-span-3`,wide:`lg:col-span-4`};function y(){let e=o(),n=(0,h.useMemo)(()=>s(_,e)??{},[e]),r=n.groups??[];return(0,g.jsxs)(d,{id:`skills`,children:[(0,g.jsx)(l,{eyebrow:n.eyebrow,title:n.title,lead:n.lead}),(0,g.jsx)(`div`,{className:`mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6`,children:r.map((e,n)=>{let o=c(e.icon),s=n===r.length-1&&r.length%2==1;return(0,g.jsx)(u,{variants:a,delay:n*.06,className:`min-w-0 ${v[e.size]??v.narrow} ${s?`sm:col-span-2`:``}`,children:(0,g.jsxs)(f,{className:`flex h-full flex-col gap-4 p-6`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(`span`,{className:`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top transition-colors duration-200 group-hover:border-line-accent`,children:(0,g.jsx)(o,{"aria-hidden":`true`,className:`h-[1.15rem] w-[1.15rem]`})}),(0,g.jsx)(`h3`,{className:`text-base font-semibold tracking-tight text-ink`,children:e.title})]}),(0,g.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:(e.items??[]).map(e=>(0,g.jsx)(t.li,{whileHover:{y:-2},transition:{duration:.2,ease:i},className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:e},e))})]})},e.title)})}),n.languages?.length?(0,g.jsxs)(u,{className:`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-inner-top`,children:[(0,g.jsx)(`h3`,{className:`nc-eyebrow`,children:n.languagesTitle}),(0,g.jsx)(`ul`,{className:`flex flex-wrap gap-x-6 gap-y-2`,children:n.languages.map(e=>(0,g.jsxs)(`li`,{className:`text-sm text-ink-muted`,children:[(0,g.jsx)(`span`,{className:`font-medium text-ink`,children:e.name}),(0,g.jsxs)(`span`,{className:`text-ink-subtle`,children:[` · `,e.level]})]},e.name))})]}):null]})}export{y as default};