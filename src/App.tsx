import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { experience, profile, projects, services, skills } from "./data/portfolio";

const iconForLink = (label: string) => {
  const normalized = label.toLowerCase();
  if (normalized.includes("github")) return <Github aria-hidden="true" />;
  if (normalized.includes("linkedin")) return <Linkedin aria-hidden="true" />;
  return <Globe2 aria-hidden="true" />;
};

function App() {
  return (
    <main>
      <header className="topbar" aria-label="Navegacion principal">
        <a className="brand" href="#inicio">
          {profile.name}
        </a>
        <nav>
          <a href="#cv">CV</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__content">
          <div className="eyebrow">
            <Sparkles aria-hidden="true" />
            Portfolio tecnico
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
        <div className="hero__visual" aria-label="Foto de perfil">
          <img
            src={profile.photoUrl}
            alt={`Foto de ${profile.name}`}
          />
          <div className="demo-badge">
            <span>{projects.length} demos en portfolio</span>
            <strong>{projects[0]?.title} ya disponible</strong>
          </div>
        </div>
      </section>

      <section className="section section--split" id="cv">
        <div>
          <p className="section__label">CV</p>
          <h2>Perfil, stack y experiencia</h2>
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

      <section className="timeline" aria-label="Experiencia">
        {experience.map((item) => (
          <article className="timeline__item" key={`${item.title}-${item.period}`}>
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p className="muted">{item.organization}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section" id="proyectos">
        <div className="section__header">
          <div>
            <p className="section__label">Proyectos</p>
            <h2>Demos tecnicas y casos de uso</h2>
          </div>
          <p>
            Cada proyecto puede tener descripcion, tecnologias, repositorio, demo
            activa e imagen propia desde el archivo de datos.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.imageUrl} alt={`Imagen de ${project.title}`} />
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
                    <strong>Proximo paso:</strong> {project.nextStep}
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
                      Codigo
                      <Github aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <p className="section__label">Servicios</p>
          <h2>Como puedo ayudar</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <div className="service" key={service}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div>
          <p className="section__label">Contacto</p>
          <h2>Hablemos de tu proximo proyecto</h2>
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
