import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import zebroldLogoMark from '../../assets/zebrold_logo_mark.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { label: t('nav_products'), path: '/products' },
    { label: t('nav_about'), path: '/about' },
    { label: t('nav_newsroom'), path: '/newsroom' },
    { label: t('nav_careers'), path: '/careers' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the overlay on navigation. Adjusting state during render is the
     supported pattern here — an effect would cause a cascading re-render. */
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* Let Escape dismiss the overlay. */
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="nav__skip" href="#main">
        {t('skip_to_content')}
      </a>

      <div className="nav__capsule">
        <Link to="/" className="nav__brand" aria-label="Zebrold IHL — home">
          <img src={zebroldLogoMark} alt="Zebrold IHL" width="84" height="28" loading="eager" />
          <span className="nav__brandText">
            <span className="nav__brandName">Zebrold</span>{' '}
            <span className="nav__brandTag">IHL</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Main">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__end">
          <button
            type="button"
            className={`nav__burger ${mobileOpen ? 'is-open' : ''}`}
            aria-label={mobileOpen ? t('nav_close') : t('nav_menu')}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="nav-mobile"
        className={`nav__overlay ${mobileOpen ? 'is-open' : ''}`}
        {...(mobileOpen ? {} : { inert: true })}
      >
        <nav className="nav__overlayInner" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav__overlayLink ${isActive ? 'is-active' : ''}`}
              style={{ '--i': i }}
              onClick={() => setMobileOpen(false)}
            >
              <span className="nav__overlayIndex mono">{String(i + 1).padStart(2, '0')}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
