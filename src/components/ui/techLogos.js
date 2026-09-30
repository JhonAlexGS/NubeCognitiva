import { FaAws } from 'react-icons/fa'
import {
  SiApachenetbeanside,
  SiCplusplus,
  SiDatabricks,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiJenkins,
  SiJupyter,
  SiKubernetes,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPycharm,
  SiPython,
  SiR,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSonarqubeserver,
  SiSpringboot,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiWireshark,
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'

/**
 * Logos de tecnologías, indexados por el nombre que se escribe en los YAML
 * (sin distinguir mayúsculas). `color` es el de la marca: los logos se ven
 * en gris y toman ese color al pasar el cursor. Las marcas negras (Express)
 * no llevan color para que no desaparezcan en modo oscuro.
 *
 * Si una tecnología no está aquí, su chip se muestra sin logo y no entra en
 * el carrusel. Simple Icons ya no publica los logos de AWS ni de Azure, por
 * eso esos dos salen de Font Awesome y de los íconos de VS Code.
 */
const LOGOS = {
  python: { icon: SiPython, color: '#3776AB' },
  javascript: { icon: SiJavascript, color: '#F7DF1E' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  java: { icon: SiOpenjdk, color: '#ED8B00' },
  'c++': { icon: SiCplusplus, color: '#00599C' },
  'html/css': { icon: SiHtml5, color: '#E34F26' },
  r: { icon: SiR, color: '#276DC3' },

  react: { icon: SiReact, color: '#61DAFB' },
  'express.js': { icon: SiExpress },
  'node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  'spring boot': { icon: SiSpringboot, color: '#6DB33F' },
  tensorflow: { icon: SiTensorflow, color: '#FF6F00' },
  'scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  fastapi: { icon: SiFastapi, color: '#009688' },

  docker: { icon: SiDocker, color: '#2496ED' },
  kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  jenkins: { icon: SiJenkins, color: '#D24939' },
  'github actions': { icon: SiGithubactions, color: '#2088FF' },
  terraform: { icon: SiTerraform, color: '#844FBA' },
  sonarqube: { icon: SiSonarqubeserver, color: '#4E9BCD' },
  'azure pipelines': { icon: VscAzureDevops, color: '#0078D7' },

  aws: { icon: FaAws, color: '#FF9900' },
  azure: { icon: VscAzure, color: '#0078D4' },
  databricks: { icon: SiDatabricks, color: '#FF3621' },
  devops: { icon: VscAzureDevops, color: '#0078D7' },

  mongodb: { icon: SiMongodb, color: '#47A248' },
  mysql: { icon: SiMysql, color: '#4479A1' },
  mariadb: { icon: SiMariadb, color: '#C0765A' },
  postgresql: { icon: SiPostgresql, color: '#4169E1' },
  'elastic search': { icon: SiElasticsearch, color: '#00BFB3' },
  redis: { icon: SiRedis, color: '#FF4438' },

  wireshark: { icon: SiWireshark, color: '#1679A7' },
  postman: { icon: SiPostman, color: '#FF6C37' },
  insomnia: { icon: SiInsomnia, color: '#4000BF' },
  jupyter: { icon: SiJupyter, color: '#F37626' },
  pycharm: { icon: SiPycharm, color: '#21D789' },
  'vs code': { icon: TbBrandVscode, color: '#007ACC' },
  netbeans: { icon: SiApachenetbeanside, color: '#1B6AC6' },
}

/** Devuelve `{ icon, color }` de la tecnología, o `undefined` si no tiene logo. */
export function getTechLogo(name) {
  return LOGOS[String(name).trim().toLowerCase()]
}
