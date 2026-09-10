import {
  FiActivity,
  FiAlertCircle,
  FiArrowUp,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGithub,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiPhone,
  FiRadio,
  FiServer,
  FiShield,
  FiSun,
  FiTerminal,
  FiTool,
  FiX,
} from 'react-icons/fi'

/**
 * Registro de íconos: los archivos de contenido (`.yaml`) sólo escriben el
 * nombre (`icon: cloud`) y aquí se traduce al componente correspondiente.
 */
export const ICONS = {
  activity: FiActivity,
  alert: FiAlertCircle,
  arrowUp: FiArrowUp,
  arrowUpRight: FiArrowUpRight,
  award: FiAward,
  book: FiBookOpen,
  check: FiCheck,
  cloud: FiCloud,
  code: FiCode,
  cpu: FiCpu,
  database: FiDatabase,
  devops: FiGitBranch,
  document: FiFileText,
  email: FiMail,
  github: FiGithub,
  globe: FiGlobe,
  layers: FiLayers,
  linkedin: FiLinkedin,
  loader: FiLoader,
  location: FiMapPin,
  menu: FiMenu,
  moon: FiMoon,
  phone: FiPhone,
  radio: FiRadio,
  server: FiServer,
  shield: FiShield,
  sun: FiSun,
  terminal: FiTerminal,
  tool: FiTool,
  close: FiX,
}

/** Devuelve el ícono pedido; si el nombre no existe cae en uno neutro. */
export function getIcon(name) {
  return ICONS[name] ?? ICONS.layers
}
