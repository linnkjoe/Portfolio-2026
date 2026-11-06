import { projects } from "../data/portfolio.js";
import Icon from "./Icon.jsx";

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.accent}`}>
      <div className="project-preview">
        {project.image ? (
          <img
            alt={project.imageAlt || project.title}
            className="project-image"
            decoding="async"
            loading="lazy"
            src={project.image}
          />
        ) : (
          <>
            <div className="preview-top">
              <span className="preview-mark">
                <Icon name={project.icon} size={19} />
              </span>
              <span className="preview-menu">•••</span>
            </div>
            <div className="preview-content">
              <div className="preview-kicker">PROJECT / {project.number}</div>
              <div className="preview-skeleton preview-skeleton-wide" />
              <div className="preview-skeleton preview-skeleton-short" />
              <div className="preview-chart">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <span className="preview-number">{project.number}</span>
          </>
        )}
      </div>
      <div className="project-details">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {(project.githubUrl || project.liveUrl) && (
          <div className="project-actions">
            {project.githubUrl && (
              <a
                className="project-link"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="github" size={15} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                className="project-link"
                href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver aplicação <Icon name="external" size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projetos">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">Trabalho selecionado</p>
            <h2>
              Projetos em <span>destaque</span>
            </h2>
          </div>
          <p className="section-intro">
            Ideias transformadas em produtos digitais, com atenção à
            arquitetura, à experiência e aos detalhes.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
