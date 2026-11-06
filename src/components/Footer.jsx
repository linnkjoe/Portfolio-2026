import Icon from './Icon.jsx'

const currentYear = new Date().getFullYear()

function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">.</span>dev
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">portfolio</span>
        </a>
        <p>Desenhado e desenvolvido com intenção.</p>
        <a className="back-to-top" href="#inicio">
          Voltar ao topo <Icon name="arrow" size={15} />
        </a>
        <span className="footer-copy">© {currentYear} {profile.name}</span>
      </div>
    </footer>
  )
}

export default Footer
