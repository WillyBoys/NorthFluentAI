import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../data/siteContent'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <NavLink to="/" className="brand" aria-label="NorthFluent AI home">
          <span className="brand-mark" aria-hidden="true">
            NF
          </span>
          <span>
            <strong>NorthFluent AI</strong>
            <small>Beginner friendly AI learning</small>
          </span>
        </NavLink>
        <div className="nav-links">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                item.path === '/prompt-improver'
                  ? `nav-link nav-link--cta${isActive ? ' active' : ''}`
                  : `nav-link${isActive ? ' active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/prompt-improver" className="nav-link nav-link--cta">
            Try the Prompt Tool
          </Link>
        </div>
      </nav>
    </header>
  )
}
