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

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const profile = {
  name: "David Kuo",
  headline: "Ingeniero en Sistemas | Backend & Data",
  location: "Buenos Aires, Argentina",
  availability: "Disponible para proyectos backend, automatización, datos y despliegues cloud.",
  summary:
    "Ingeniero en Sistemas con experiencia en desarrollo backend, procesamiento de datos y despliegue en la nube. Especializado en Python, Django, PostgreSQL y AWS, con formación en ciberseguridad y una base analítica construida desde Ciencia de Datos y Física.",
  email: "davee183@gmail.com",
  phone: "+54 9 11 3003-0986",
  cvUrl: "/docs/David_Kuo_CV.pdf",
  photoUrl: "/images/Io.jpg",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidnkuo/" },
    { label: "GitHub", href: "https://github.com/DaveKuo18/" },
  ] satisfies Link[],
};

export const metrics = [
  { value: "4", label: "demos publicadas" },
  { value: "2021", label: "inicio profesional" },
  { value: "AWS", label: "despliegues cloud" },
];

export const skills = [
  {
    area: "Lenguajes",
    items: ["Python", "JavaScript", "SQL", "C++"],
  },
  {
    area: "Backend",
    items: ["Django", "Node.js", "APIs REST", "PostgreSQL"],
  },
  {
    area: "Datos",
    items: ["Pandas", "ETL", "Análisis de datos", "Procesamiento de datos"],
  },
  {
    area: "Cloud & DevOps",
    items: ["AWS", "Docker", "Linux", "Git"],
  },
  {
    area: "Frontend",
    items: ["React", "TypeScript", "Vite", "UI responsive"],
  },
  {
    area: "Seguridad",
    items: ["Hacking ético", "OWASP Top 10", "Kali Linux", "Testing"],
  },
];

export const experience: Experience[] = [
  {
    company: "InfoIntelligent",
    role: "Ingeniero en Sistemas",
    period: "2021 - Actualidad",
    bullets: [
      "Desarrollo de soluciones empresariales de automatización documental.",
      "Implementación de sistemas backend con Python y JavaScript.",
      "Procesamiento de grandes volúmenes de datos.",
    ],
  },
  {
    company: "Freelance",
    role: "Desarrollador Backend (Salud)",
    period: "2021 - Actualidad",
    bullets: [
      "Desarrollo de aplicaciones con Django para gestión de datos médicos.",
      "Diseño de bases PostgreSQL con información a nivel nacional.",
      "Despliegue en AWS con arquitectura escalable.",
    ],
  },
  {
    company: "Remitz",
    role: "Desarrollador de Software",
    period: "2023 - 2024",
    bullets: [
      "Desarrollo de soluciones de automatización e IA con Python.",
      "Despliegue de aplicaciones en Docker.",
      "Procesamiento y análisis de datos.",
    ],
  },
];

export const education = [
  {
    title: "Licenciatura en Ciencias de Datos",
    institution: "Universidad de Buenos Aires",
    period: "2021 - Actualidad",
  },
  {
    title: "Licenciatura en Ciencias Físicas",
    institution: "Universidad de Buenos Aires",
    period: "2016 - Actualidad",
  },
];

export const courses = [
  "Curso de Hacking Ético (en curso)",
  "Fundamentos de seguridad informática",
  "Análisis de vulnerabilidades (OWASP Top 10)",
  "Prácticas con Kali Linux y entornos de testing",
];

export const languages = ["Español nativo", "Inglés intermedio", "Portugués intermedio", "Chino básico"];

export const projects: Project[] = [
  {
    title: "Registro Médico",
    role: "Sistema demo de gestión médica",
    status: "Demo activa",
    period: "2026",
    description:
      "Demo web para registrar, consultar y administrar información médica. Muestra una interfaz operativa enfocada en carga de datos, organización de registros y flujos administrativos sensibles.",
    highlights: [
      "Ambiente público para evaluar el flujo principal.",
      "Interfaz orientada a carga, consulta y administración de registros.",
      "Base preparada para documentar autenticación, permisos, auditoría y persistencia.",
    ],
    technologies: ["React", "Vercel", "UI responsive", "Gestión de datos"],
    demoUrl: "http://demo-registromedico.vercel.app/",
    imageUrl: "/images/demos/registro-medico.png",
  },
  {
    title: "Prode Mundial 2026",
    role: "Producto web demo",
    status: "Demo activa",
    period: "2026",
    description:
      "Aplicación para gestionar predicciones del Mundial 2026. Permite mostrar arquitectura de producto, flujo de usuario, manejo de estado, persistencia y despliegue en Vercel.",
    highlights: [
      "Demo pública lista para evaluar el flujo completo.",
      "Pensada para quinielas, grupos de amigos o comunidades.",
      "Base editable para documentar reglas de puntaje y administración.",
    ],
    technologies: ["React", "TypeScript", "Vercel", "UI responsive"],
    demoUrl: "https://demo-prodemundial2026.vercel.app/",
    imageUrl: "/images/demos/prode-mundial-2026.png",
  },
  {
    title: "Invitaciones Web AR",
    role: "Sitio demo para invitaciones digitales",
    status: "Demo activa",
    period: "2026",
    description:
      "Demo orientada a invitaciones digitales para eventos. Presenta una propuesta visual responsive para compartir información clave desde un enlace público.",
    highlights: [
      "Landing pública para mostrar el producto final.",
      "Experiencia mobile-first para enlaces compartidos.",
      "Estructura adaptable por evento, estilo y contenido.",
    ],
    technologies: ["React", "Vercel", "UI responsive", "Landing page"],
    demoUrl: "https://demo-invitacionesweb.vercel.app/",
    imageUrl: "/images/demos/invitaciones-web-ar.png",
  },
  {
    title: "IBIMCE",
    role: "Sitio institucional",
    status: "Demo activa",
    period: "2026",
    description:
      "Página web institucional para la iglesia IBIMCE. Centraliza presencia digital, información para visitantes, comunidad y canales de contacto.",
    highlights: [
      "Sitio publicado con dominio propio.",
      "Estructura pensada para comunicar identidad, actividades y contacto.",
      "Proyecto extensible para sumar secciones, contenido multimedia o integraciones.",
    ],
    technologies: ["Sitio institucional", "Dominio propio", "UI responsive"],
    demoUrl: "https://ibimce.com.ar",
    imageUrl: "/images/demos/ibimce.png",
  },
  {
    title: "Próxima demo",
    role: "Ambiente demo pendiente",
    status: "Por levantar",
    period: "Próximo deploy",
    description:
      "Slot editable para el próximo proyecto: dashboard, automatización, API, backoffice, e-commerce o integración.",
    highlights: [
      "Definir objetivo del proyecto.",
      "Agregar URL de demo cuando esté desplegada.",
      "Indicar decisiones técnicas y criterios de implementación.",
    ],
    technologies: ["Stack pendiente", "Documentación pendiente"],
    nextStep: "Completar descripción y preparar deploy público.",
    imageUrl: "/images/demos/registro-medico.png",
  },
];

export const services = [
  "Desarrollo backend con Python, Django, Node.js y APIs REST.",
  "Modelado de bases PostgreSQL y procesamiento de datos.",
  "Automatización documental, ETL y soluciones internas.",
  "Despliegues en AWS, Docker y entornos Linux.",
];
