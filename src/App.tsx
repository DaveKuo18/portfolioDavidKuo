import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  courses,
  education,
  experience,
  languages,
  metrics,
  profile,
  projects,
  services,
  skills,
} from "./data/portfolio";

const iconForLink = (label: string) => {
  const normalized = label.toLowerCase();
  if (normalized.includes("github")) return <Github aria-hidden="true" />;
  if (normalized.includes("linkedin")) return <Linkedin aria-hidden="true" />;
  return <Globe2 aria-hidden="true" />;
};

function App() {
  const activeProjects = projects.filter((project) => project.status === "Demo activa");

  return (
    <main>
      <header className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          {profile.name}
        </a>
        <nav>
          <a href="#proyectos">Demos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#cv">CV</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__content">
          <div className="eyebrow">
            <Sparkles aria-hidden="true" />
            Portfolio técnico
          </div>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
          <div className="hero__meta">
            <span>
              <MapPin aria-hidden="true" />
              {profile.location}
            </span>
            <span>
              <BriefcaseBusiness aria-hidden="true" />
              {profile.availability}
            </span>
          </div>
          <div className="actions">
            <a className="button button--primary" href="#proyectos">
              Ver demos
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button" href={profile.cvUrl} target="_blank" rel="noreferrer">
              Descargar CV
              <Download aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside className="profile-card" aria-label="Resumen profesional">
          <img src={profile.photoUrl} alt={`Foto de ${profile.name}`} />
          <div className="profile-card__body">
            <strong>Backend, datos y cloud</strong>
            <p>Python, Django, PostgreSQL, AWS, Docker y automatización.</p>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section section--featured" id="proyectos">
        <div className="section__header">
          <div>
            <p className="section__label">Demos publicadas</p>
            <h2>Proyectos navegables, con captura real y enlace activo</h2>
          </div>
          <p>
            Cada caso muestra una necesidad distinta: gestión médica, producto de
            participación, landing comercial e identidad institucional.
          </p>
        </div>

        <div className="projects">
          {projects.map((project, index) => (
            <article className={index === 0 ? "project-card project-card--lead" : "project-card"} key={project.title}>
              <a
                className="project-card__media"
                href={project.demoUrl || "#proyectos"}
                target={project.demoUrl ? "_blank" : undefined}
                rel={project.demoUrl ? "noreferrer" : undefined}
              >
                <img src={project.imageUrl} alt={`Captura de ${project.title}`} />
              </a>
              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="status">{project.status}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="muted">{project.role}</p>
                <p>{project.description}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.technologies.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.nextStep ? (
                  <p className="next-step">
                    <strong>Próximo paso:</strong> {project.nextStep}
                  </p>
                ) : null}
                <div className="project-card__links">
                  {project.demoUrl ? (
                    <a className="button button--primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                      Abrir demo
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="button button--disabled">Demo pendiente</span>
                  )}
                  {project.repositoryUrl ? (
                    <a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                      Código
                      <Github aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-band" id="experiencia">
        <div className="section__header section__header--dark">
          <div>
            <p className="section__label">Experiencia</p>
            <h2>Automatización, backend, datos y despliegues reales</h2>
          </div>
          <p>
            Trayectoria combinando desarrollo empresarial, soluciones para salud,
            procesamiento de datos e infraestructura para publicar aplicaciones.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item" key={`${item.company}-${item.period}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.company}</h3>
                <p className="muted">{item.role}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split" id="cv">
        <div>
          <p className="section__label">CV técnico</p>
          <h2>Stack, formación y cursos</h2>
          <p className="section-copy">
            Información tomada del CV para que el portfolio también funcione como
            síntesis técnica rápida.
          </p>
        </div>
        <div className="cv-grid">
          {skills.map((skill) => (
            <article className="panel" key={skill.area}>
              <h3>{skill.area}</h3>
              <div className="chips">
                {skill.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials">
        <article className="credential-card">
          <GraduationCap aria-hidden="true" />
          <h3>Educación</h3>
          {education.map((item) => (
            <div className="credential-item" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.institution}</p>
              <span>{item.period}</span>
            </div>
          ))}
        </article>
        <article className="credential-card">
          <ShieldCheck aria-hidden="true" />
          <h3>Ciberseguridad</h3>
          <ul>
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </article>
        <article className="credential-card">
          <Languages aria-hidden="true" />
          <h3>Idiomas</h3>
          <div className="chips">
            {languages.map((language) => (
              <span className="chip" key={language}>
                {language}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="section section--split">
        <div>
          <p className="section__label">Servicios</p>
          <h2>Qué puedo construir</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <div className="service" key={service}>
              <BookOpen aria-hidden="true" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div>
          <p className="section__label">Contacto</p>
          <h2>Hablemos de tu próximo proyecto</h2>
          <p>
            {activeProjects.length} demos activas disponibles para revisar flujo,
            interfaz y criterio técnico.
          </p>
        </div>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
            <Phone aria-hidden="true" />
            {profile.phone}
          </a>
          {profile.links.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {iconForLink(link.label)}
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
