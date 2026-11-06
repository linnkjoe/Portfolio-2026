import { skillGroups } from '../data/portfolio.js'
import Icon from './Icon.jsx'

function SkillCard({ group, index }) {
  return (
    <article className="skill-card">
      <div className="skill-card-heading">
        <span className="skill-icon"><Icon name={group.icon} size={21} /></span>
        <span className="skill-index">0{index + 1}</span>
      </div>
      <h3>{group.title}</h3>
      <p className="skill-description">{group.description}</p>
      <div className="skill-list">
        {group.skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div
              aria-label={`${skill.name}: ${skill.level}%`}
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow={skill.level}
              className="skill-track"
              role="progressbar"
            >
              <span style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="competencias">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O que faço melhor</p>
            <h2>Competências <span>técnicas</span></h2>
          </div>
          <p className="section-intro">
            Ferramentas e tecnologias que utilizo para criar soluções completas,
            do primeiro commit à produção.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCard group={group} index={index} key={group.title} />
          ))}
        </div>
        <p className="skills-note">
          <Icon name="spark" size={15} /> Percentagens representam uma autoavaliação do nível de experiência.
        </p>
      </div>
    </section>
  )
}

export default Skills
