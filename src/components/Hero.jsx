import Icon from './Icon.jsx'

function Hero({ profile }) {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Disponível para novos desafios
          </div>
          <p className="eyebrow">Olá, sou {profile.name}</p>
          <h1>
            Transformo ideias em
            <span> experiências digitais.</span>
          </h1>
          <p className="hero-description">
            {profile.role} com foco em aplicações robustas, APIs bem pensadas e
            interfaces feitas para pessoas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Explorar projetos <Icon name="arrowRight" size={18} />
            </a>
            <a className="text-link" href="#sobre">
              Conhecer o meu percurso
            </a>
          </div>
          <div className="hero-meta">
            <span><Icon name="terminal" size={16} /> Java · Spring · React</span>
            <span><Icon name="spark" size={16} /> {profile.location}</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustração de código e desenvolvimento" role="img">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-dot dot-one" />
          <div className="visual-dot dot-two" />
          <div className="code-window">
            <div className="window-top">
              <span className="window-controls"><i /><i /><i /></span>
              <span className="window-title">developer.java</span>
              <span className="window-menu">•••</span>
            </div>
            <div className="code-content">
              <div><span className="line-number">01</span><span className="code-purple">public class</span> <span className="code-green">Developer</span> {'{'}</div>
              <div><span className="line-number">02</span>&nbsp;&nbsp;<span className="code-purple">private final</span> <span className="code-blue">String</span> mindset;</div>
              <div><span className="line-number">03</span>&nbsp;</div>
              <div><span className="line-number">04</span>&nbsp;&nbsp;<span className="code-purple">public</span> Developer() {'{'}</div>
              <div><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;mindset = <span className="code-orange">"build &amp; learn"</span>;</div>
              <div><span className="line-number">06</span>&nbsp;&nbsp;{'}'}</div>
              <div><span className="line-number">07</span>{'}'}</div>
            </div>
            <div className="window-status"><span><i /> All systems operational</span><span>UTF-8</span></div>
          </div>
          <div className="visual-card">
            <span className="visual-card-icon"><Icon name="code" size={19} /></span>
            <span><strong>Clean code</strong><small>Built to scale</small></span>
            <Icon className="visual-card-check" name="check" size={19} />
          </div>
          <span className="visual-caption">DESIGN · DEVELOP · DELIVER</span>
        </div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  )
}

export default Hero
