import { Link } from 'react-router-dom'
import { navigationItems } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <p className="footer-title">NorthFluent AI</p>
          <p className="footer-copy">
            Helping everyone become fluent in AI.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Explore</p>
          <div className="footer-link-grid">
            {navigationItems.map((item) => (
              <Link key={item.path} to={item.path} className="footer-link">
                {item.label}
              </Link>
            ))}
            <Link to="/prompt-improver" className="footer-link">
              Prompt Tool
            </Link>
          </div>
        </div>

        <div className="footer-note">
          <p className="footer-heading">Mission</p>
          <p className="footer-copy">
            Clear, practical, and honest AI education for students,
            professionals, job seekers, and curious learners.
          </p>
        </div>
      </div>
    </footer>
  )
}
