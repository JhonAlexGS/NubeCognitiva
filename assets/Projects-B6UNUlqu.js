import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,u as n}from"./motion-D4psEU6N.js";import{M as r}from"./vendor-CiaQW6Ys.js";import{l as i,m as a,n as o,s,t as c}from"./index-DbWE5X3c.js";import{n as l,r as u,t as d}from"./Section-KDDI6yOU.js";import{t as f}from"./SpotlightCard-pnZG5pZc.js";var p=`# ---------------------------------------------------------------------------\r
# FEATURED PROJECTS — English.\r
# \`items\` is the list of cards. To add a project, copy a whole block and keep\r
# the indentation.\r
#\r
# Fields:\r
#   title    → project name\r
#   kicker   → short category shown above the title\r
#   period   → dates\r
#   summary  → description (supports Markdown **bold**)\r
#   metrics  → highlighted figures (optional, two at most)\r
#   tags     → technologies\r
#   icon     → cpu, radio, code, database, cloud, shield, server, terminal...\r
#   size     → hero | tall | wide  (controls the grid footprint)\r
#   links    → list of links, each with \`label\` and \`url\`.\r
#              You can add several (repo, paper, demo…) or none: with an empty\r
#              list the card simply shows no buttons. \`label\` is the visible\r
#              text, change it freely.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Featured projects\r
title: Applied research and product in production\r
lead: >-\r
  From the industrial network lab to the backend serving real users. These are\r
  the projects that best describe how I work.\r
\r
items:\r
  - id: scada-ids\r
    title: Intrusion detection system for SCADA networks\r
    kicker: Master's thesis · Industrial cybersecurity\r
    period: Jan 2024 – Jun 2026\r
    icon: shield\r
    size: hero\r
    links:\r
      - label: View the code\r
        url: https://github.com/JhonAlexGS/CASO-DE-ESTUDIO-MODBUS-TCP-IP\r
    summary: >-\r
      A **machine learning and deep learning** classifier for **ModBus TCP/IP**\r
      traffic, trained to tell legitimate operations apart from attacks on\r
      critical infrastructure. The model was deployed in containers on a\r
      **Raspberry Pi 5**, proving detection can run at the edge of the\r
      industrial network and not only on a lab server.\r
    metrics:\r
      - value: 99.49%\r
        label: Accuracy\r
      - value: +15.28 pp\r
        label: Above the state of the art\r
    tags: [Python, TensorFlow, scikit-learn, Docker, ModBus TCP/IP, Raspberry Pi 5]\r
\r
  - id: gnss-sdr\r
    title: Spectral estimation of GNSS signals with SDR\r
    kicker: Research · IEEE publication 2023\r
    period: Jan 2020 – Dec 2023\r
    icon: radio\r
    size: tall\r
    links:\r
      - label: View the code\r
        url: https://github.com/JhonKyG/SemilleroIoT_Spectral_Estimation\r
      - label: IEEE publication\r
        url: https://ieeexplore.ieee.org/document/10334282\r
    summary: >-\r
      A methodology for acquiring **GNSS** signals through **software defined\r
      radio**, applying unconventional spectral estimation techniques. Results\r
      published by **IEEE (2023)** within the IoT research group.\r
    tags: [GNU Radio, GNSS-SDR, Matlab, Signal processing]\r
    metrics:\r
      - value: IEEE 2023\r
        label: Publication\r
\r
  - id: coally\r
    title: Coally platform\r
    kicker: Full Stack · Product\r
    period: Jan 2024 – Dec 2025\r
    icon: code\r
    size: wide\r
    links:\r
      - label: Visit the site\r
        url: https://coally.com/\r
    summary: >-\r
      A **CRUD** system for dealership vehicle management, **RESTful** endpoints\r
      with **JWT** authentication, a file pipeline integrated with **HubSpot**\r
      and a layer unifying **OAuth2** across several platforms.\r
    tags: [JavaScript, Express.js, MongoDB, JWT, OAuth2, HubSpot]\r
\r
  - id: booklick\r
    title: BookLick search engine\r
    kicker: Full Stack · Data\r
    period: Jan 2023 – Dec 2024\r
    icon: database\r
    size: wide\r
    links:\r
      - label: Visit the site\r
        url: https://booklick.co/\r
    summary: >-\r
      Resource integration into the search engine with **PostgreSQL** and\r
      **Elastic Search** on **AWS**, plus **Power BI** dashboards to measure how\r
      the platform services are actually used.\r
    tags: [Python, TypeScript, PostgreSQL, Elastic Search, AWS, Power BI]\r
`,m=`# ---------------------------------------------------------------------------\r
# PROYECTOS DESTACADOS — español.\r
# \`items\` es la lista de tarjetas. Para añadir un proyecto, copia un bloque\r
# completo respetando la indentación.\r
#\r
# Campos de cada proyecto:\r
#   title    → nombre del proyecto\r
#   kicker   → categoría corta que se muestra arriba\r
#   period   → fechas\r
#   summary  → descripción (admite **negritas** de Markdown)\r
#   metrics  → cifras destacadas (opcional, máximo 2)\r
#   tags     → tecnologías\r
#   icon     → cpu, radio, code, database, cloud, shield, server, terminal...\r
#   size     → hero | tall | wide  (controla el tamaño en la grilla)\r
#   links    → lista de enlaces, cada uno con \`label\` y \`url\`.\r
#              Puedes poner varios (repo, publicación, demo…) o ninguno:\r
#              si la lista está vacía, la tarjeta simplemente no muestra\r
#              botones. El \`label\` es el texto visible, cámbialo a tu gusto.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Proyectos destacados\r
title: Investigación aplicada y producto en producción\r
lead: >-\r
  Del laboratorio de redes industriales al backend que atiende usuarios reales.\r
  Estos son los proyectos que mejor resumen cómo trabajo.\r
\r
items:\r
  - id: scada-ids\r
    title: Sistema de detección de intrusiones para SCADA\r
    kicker: Tesis de maestría · Ciberseguridad industrial\r
    period: Ene 2024 – Jun 2026\r
    icon: shield\r
    size: hero\r
    links:\r
      - label: Ver el código\r
        url: https://github.com/JhonAlexGS/CASO-DE-ESTUDIO-MODBUS-TCP-IP\r
    summary: >-\r
      Clasificador de **machine learning y deep learning** para tráfico\r
      **ModBus TCP/IP**, entrenado para distinguir maniobras legítimas de\r
      ataques en infraestructura crítica. El modelo se desplegó en contenedores\r
      sobre una **Raspberry Pi 5**, demostrando que la detección puede correr en\r
      el borde de la red industrial y no sólo en un servidor de laboratorio.\r
    metrics:\r
      - value: 99.49%\r
        label: Accuracy\r
      - value: +15.28 pp\r
        label: Sobre el estado del arte\r
    tags: [Python, TensorFlow, scikit-learn, Docker, ModBus TCP/IP, Raspberry Pi 5]\r
\r
  - id: gnss-sdr\r
    title: Estimación espectral de señales GNSS con SDR\r
    kicker: Investigación · Publicación IEEE 2023\r
    period: Ene 2020 – Dic 2023\r
    icon: radio\r
    size: tall\r
    links:\r
      - label: Ver el código\r
        url: https://github.com/JhonKyG/SemilleroIoT_Spectral_Estimation\r
      - label: Publicación IEEE\r
        url: https://ieeexplore.ieee.org/document/10334282\r
    summary: >-\r
      Metodología para la adquisición de señales **GNSS** mediante **radio\r
      definida por software**, aplicando técnicas de estimación espectral no\r
      convencional. Resultados publicados en **IEEE (2023)** dentro del semillero\r
      de investigación IoT.\r
    metrics:\r
      - value: IEEE 2023\r
        label: Publicación\r
    tags: [GNU Radio, GNSS-SDR, Matlab, Procesamiento de señales]\r
\r
  - id: coally\r
    title: Plataforma Coally\r
    kicker: Full Stack · Producto\r
    period: Ene 2024 – Dic 2025\r
    icon: code\r
    size: wide\r
    links:\r
      - label: Ver el sitio\r
        url: https://coally.com/\r
    summary: >-\r
      Sistema **CRUD** para la gestión de vehículos de concesionaria, endpoints\r
      **RESTful** con autenticación **JWT**, flujo de archivos integrado con\r
      **HubSpot** y una capa que unifica el **OAuth2** de distintas plataformas.\r
    tags: [JavaScript, Express.js, MongoDB, JWT, OAuth2, HubSpot]\r
\r
  - id: booklick\r
    title: Motor de búsqueda de BookLick\r
    kicker: Full Stack · Datos\r
    period: Ene 2023 – Dic 2024\r
    icon: database\r
    size: wide\r
    links:\r
      - label: Ver el sitio\r
        url: https://booklick.co/\r
    summary: >-\r
      Integración de recursos al motor de búsqueda con **PostgreSQL** y\r
      **Elastic Search** sobre **AWS**, más tableros en **Power BI** para medir\r
      el uso real de los servicios de la plataforma.\r
    tags: [Python, TypeScript, PostgreSQL, Elastic Search, AWS, Power BI]\r
`,h=e(t(),1),g=n(),_={hero:`md:col-span-6 lg:col-span-4 lg:row-span-2`,tall:`md:col-span-6 lg:col-span-2 lg:row-span-2`,wide:`md:col-span-3 lg:col-span-3`};function v({project:e,index:t=0}){let{t:n}=r(),o=i[e.icon]??i.layers,s=e.size===`hero`,l=e.links?.length>0?e.links:e.url?[{label:n(`actions.viewProject`),url:e.url}]:[];return(0,g.jsx)(u,{as:`article`,variants:a,delay:t*.08,className:`${_[e.size]??_.wide} min-w-0`,children:(0,g.jsxs)(f,{className:`flex h-full flex-col gap-4 p-6 md:p-7`,children:[(0,g.jsxs)(`header`,{className:`flex items-start justify-between gap-4`,children:[(0,g.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-2`,children:[(0,g.jsx)(`span`,{className:`nc-eyebrow`,children:e.kicker}),(0,g.jsx)(`h3`,{className:`font-semibold tracking-tight text-balance text-ink ${s?`text-2xl md:text-3xl`:`text-xl`}`,children:e.title})]}),(0,g.jsx)(`span`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-inner-top transition-colors duration-200 group-hover:border-line-accent`,children:(0,g.jsx)(o,{"aria-hidden":`true`,className:`h-5 w-5`})})]}),(0,g.jsx)(`p`,{className:`font-mono text-[0.6875rem] tracking-widest text-ink-subtle uppercase`,children:e.period}),(0,g.jsx)(c,{className:`gap-3`,children:e.summary??``}),e.metrics?.length?(0,g.jsx)(`dl`,{className:`mt-auto flex flex-wrap gap-3 pt-2`,children:e.metrics.map(e=>(0,g.jsxs)(`div`,{className:`min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 py-3 shadow-inner-top`,children:[(0,g.jsx)(`dt`,{className:`text-[0.6875rem] tracking-wide text-ink-subtle`,children:e.label}),(0,g.jsx)(`dd`,{className:`font-mono text-lg font-semibold tracking-tight text-ink`,children:e.value})]},e.label))}):null,e.tags?.length?(0,g.jsx)(`ul`,{className:`flex flex-wrap gap-1.5 ${e.metrics?.length?``:`mt-auto pt-2`}`,children:e.tags.map(e=>(0,g.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink`,children:e},e))}):null,l.length>0?(0,g.jsx)(`ul`,{className:`flex flex-wrap items-center gap-x-5 gap-y-2 pt-1`,children:l.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,className:`inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-bright`,children:[e.label,(0,g.jsx)(i.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4`})]})},e.url))}):null]})})}var y=Object.assign({"./content.en.yaml":p,"./content.es.yaml":m});function b(){let e=o(),t=(0,h.useMemo)(()=>s(y,e)??{},[e]),n=t.items??[];return(0,g.jsxs)(d,{id:`projects`,children:[(0,g.jsx)(l,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,g.jsx)(`div`,{className:`mt-12 grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-6 lg:mt-16 lg:auto-rows-[minmax(11.25rem,auto)]`,children:n.map((e,t)=>(0,g.jsx)(v,{project:e,index:t},e.id??e.title))})]})}export{b as default};