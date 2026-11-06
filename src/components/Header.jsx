import Icon from './Icon.jsx'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#competencias', label: 'Competências' },
  { href: '#projetos', label: 'Projetos' },
]

function Header({ menuOpen, onMenuToggle }) {
  const closeMenu = () => {
    if (menuOpen) onMenuToggle()
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#inicio" aria-label="Início">
          <span className="brand-mark">.</span>dev
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">portfolio</span>
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="menu-toggle"
          onClick={onMenuToggle}
          type="button"
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>
            Vamos conversar <Icon name="arrow" size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
