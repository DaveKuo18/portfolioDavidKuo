export type Link = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  role: string;
  status: "Demo activa" | "Por levantar" | "En desarrollo" | "Archivado";
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  nextStep?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  imageUrl?: string;
};

export const profile = {
  name: "David Kuo",
  headline: "Desarrollador Full Stack",
  location: "Argentina",
  availability: "Disponible para proyectos freelance, consultoria y roles tecnicos.",
  summary:
    "Portfolio tecnico para centralizar CV, proyectos desplegados, demos y canales de contacto. Edita este texto con tu perfil profesional, foco tecnico y tipo de oportunidades que queres recibir.",
  email: "tu.email@dominio.com",
  phone: "+54 9 11 0000-0000",
  cvUrl: "/docs/David_Kuo_CV.pdf",
  photoUrl: "/images/Io.jpg",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tu-usuario" },
    { label: "GitHub", href: "https://github.com/tu-usuario" },
  ] satisfies Link[],
};

export const skills = [
  {
    area: "Frontend",
    items: ["React", "TypeScript", "CSS moderno", "Vite", "UI responsive"],
  },
  {
    area: "Backend",
    items: ["Node.js", "APIs REST", "Autenticacion", "Bases de datos"],
  },
  {
    area: "Producto",
    items: ["Demos deployadas", "MVPs", "Integraciones", "Documentacion tecnica"],
  },
];

export const experience = [
  {
    title: "Rol o experiencia destacada",
    organization: "Empresa / Cliente",
    period: "2024 - Actualidad",
    description:
      "Resume aca responsabilidades, impacto medible, stack usado y tipo de producto construido.",
  },
  {
    title: "Proyecto independiente",
    organization: "Freelance / Personal",
    period: "2023 - 2024",
    description:
      "Agrega otra experiencia relevante: automatizaciones, dashboards, e-commerce, sistemas internos o integraciones.",
  },
];

export const projects: Project[] = [
  {
    title: "Prode Mundial 2026",
    role: "Producto web demo",
    status: "Demo activa",
    period: "2026",
    description:
      "Aplicacion demo para gestionar predicciones del Mundial 2026. Ideal para mostrar arquitectura de producto, flujo de usuario, manejo de estados, persistencia y despliegue en Vercel.",
    highlights: [
      "Demo publica lista para evaluar el flujo completo.",
      "Pensado para quinielas, grupos de amigos o comunidades.",
      "Base editable para documentar autenticacion, reglas de puntaje y administracion.",
    ],
    technologies: ["React", "TypeScript", "Vercel", "UI responsive"],
    demoUrl: "https://demo-prodemundial2026.vercel.app/",
    repositoryUrl: "",
    imageUrl:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Invitaciones Web AR",
    role: "Sitio demo para invitaciones digitales",
    status: "Demo activa",
    period: "2026",
    description:
      "Demo web orientada a invitaciones digitales para eventos. Permite presentar una propuesta visual, responsive y accesible para compartir informacion clave del evento desde un link publico.",
    highlights: [
      "Landing demo publica para mostrar el producto final.",
      "Enfoque en experiencia mobile y acceso rapido desde enlaces compartidos.",
      "Base editable para adaptar estilos, contenido y secciones por evento.",
    ],
    technologies: ["React", "Vercel", "UI responsive", "Landing page"],
    demoUrl: "https://demo-invitacionesweb.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "IBIMCE",
    role: "Sitio institucional",
    status: "Demo activa",
    period: "2026",
    description:
      "Pagina web institucional para la iglesia IBIMCE. El proyecto funciona como presencia digital publica, con informacion centralizada para visitantes, comunidad y canales de contacto.",
    highlights: [
      "Sitio publicado con dominio propio.",
      "Estructura pensada para comunicar identidad, actividades e informacion de contacto.",
      "Proyecto editable para sumar secciones, contenido multimedia o integraciones.",
    ],
    technologies: ["Sitio institucional", "Dominio propio", "UI responsive"],
    demoUrl: "https://ibimce.com.ar",
    imageUrl:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Proxima demo",
    role: "Ambiente demo pendiente",
    status: "Por levantar",
    period: "Proximo deploy",
    description:
      "Slot editable para el proximo proyecto que quieras mostrar: dashboard, automatizacion, API, backoffice, e-commerce o integracion.",
    highlights: [
      "Definir objetivo del proyecto.",
      "Agregar URL de demo cuando este desplegada.",
      "Indicar decisiones tecnicas y tradeoffs.",
    ],
    technologies: ["Stack pendiente", "Documentacion pendiente"],
    nextStep: "Completar descripcion y preparar deploy publico.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
];

export const services = [
  "Desarrollo de aplicaciones web y demos tecnicas.",
  "Construccion de MVPs con foco en validacion rapida.",
  "Integracion de APIs, autenticacion y paneles de administracion.",
  "Mejora de interfaces existentes y documentacion para handoff.",
];
