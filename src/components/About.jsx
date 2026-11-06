import Icon from './Icon.jsx'

const principles = [
  {
    title: 'Pensamento de ponta a ponta',
    description: 'Ligo frontend, backend e dados para entregar uma experiência consistente.',
  },
  {
    title: 'Simplicidade com propósito',
    description: 'Escolho soluções claras, fáceis de manter e preparadas para evoluir.',
  },
  {
    title: 'Aprendizagem contínua',
    description: 'Exploro novas ferramentas e procuro melhorar em cada iteração.',
  },
]

function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-layout">
        <div className="about-heading">
          <p className="eyebrow">Um pouco sobre mim</p>
          <h2>Tecnologia útil.<br /><span>Feita com intenção.</span></h2>
          <p className="about-copy">
            Gosto de resolver problemas reais com software bem construído. Do
            desenho de uma base de dados à última interação de uma interface,
            valorizo código limpo, colaboração e atenção ao detalhe.
          </p>
          <a className="text-link" href="https://github.com/linnkjoe" target="_blank" rel="noopener noreferrer">
            Mais sobre o meu percurso <Icon name="arrowRight" size={17} />
          </a>
        </div>
        <div className="principles-list">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span className="principle-number">0{index + 1}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
              <Icon className="principle-icon" name="arrow" size={18} />
            </article>
          ))}
          <div className="about-note">
            <span><Icon name="spark" size={17} /></span>
            <p><strong>Boa tecnologia começa com boas perguntas.</strong><br />E uma vontade genuína de fazer melhor.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
