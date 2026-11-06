import Icon from './Icon.jsx'

function Contact({ profile }) {
  return (
    <section className="contact-section" id="contacto">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">Vamos criar algo com impacto</p>
          <h2>Tem um projeto<br />em mente?</h2>
          <p>Estou disponível para conversar sobre novas oportunidades, ideias e desafios interessantes.</p>
          <a className="button button-light" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={18} /> Entrar em contacto
          </a>
        </div>
        <div className="contact-aside">
          <span className="contact-orbit"><Icon name="arrow" size={27} /></span>
          <p>Uma boa conversa<br />pode ser o início de<br /><strong>algo extraordinário.</strong></p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
