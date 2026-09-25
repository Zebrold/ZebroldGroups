import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { solutions } from '../../data/solutions';
import ProductIcon from './ProductIcon';
import zebroldLogoMark from '../../assets/zebrold_logo_mark.png';
import './Navbar.css';

/* How long the panel survives the cursor leaving it — long enough to move
   diagonally from the trigger into the panel without it snapping shut. */
const CLOSE_DELAY = 160;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const { t, lang } = useLanguage();
  const closeTimer = useRef(null);
  const productsRef = useRef(null);

  /* Products is a menu, not a destination — the rest are plain links. */
  const navLinks = [
    { label: t('nav_about'), path: '/about', subPaths: ['/leadership'] },
    { label: t('nav_newsroom'), path: '/newsroom' },
    { label: t('nav_careers'), path: '/careers' },
  ];

  /* Sub-pages (e.g. /leadership under About) keep their parent link highlighted. */
  const isLinkActive = (link, isActive) =>
    isActive || Boolean(link.subPaths?.includes(location.pathname));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close both menus on navigation. Adjusting state during render is the
     supported pattern here — an effect would cause a cascading re-render. */
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setMobileOpen(false);
    setProductsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* Escape dismisses whichever menu is open. */
  useEffect(() => {
    if (!mobileOpen && !productsOpen) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setMobileOpen(false);
      setProductsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen, productsOpen]);

  /* A click anywhere outside the menu closes it (covers touch and stray clicks). */
  useEffect(() => {
    if (!productsOpen) return undefined;
    const onDown = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [productsOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openProducts = () => {
    clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const closeProductsSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), CLOSE_DELAY);
  };

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
            {/* ── Products: opens a panel, never navigates ── */}
            <li
              className="nav__item nav__item--menu"
              ref={productsRef}
              onMouseEnter={openProducts}
              onMouseLeave={closeProductsSoon}
            >
              <button
                type="button"
                className={`nav__link nav__trigger ${productsOpen ? 'is-open' : ''}`}
                aria-expanded={productsOpen}
                aria-controls="nav-products"
                aria-haspopup="true"
                onClick={() => setProductsOpen((v) => !v)}
                onFocus={openProducts}
              >
                {t('nav_products')}
                <svg
                  className="nav__chev"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                id="nav-products"
                className={`nav__menu ${productsOpen ? 'is-open' : ''}`}
                {...(productsOpen ? {} : { inert: true })}
              >
                <div className="nav__menuInner">
                  <p className="nav__menuLabel">{t('nav_products_label')}</p>
                  <ul className="nav__menuGrid" role="list">
                    {solutions.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) => `navMenuItem ${isActive ? 'is-active' : ''}`}
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="navMenuItem__thumb">
                            <img
                              src={item.image}
                              alt=""
                              width="76"
                              height="52"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <span className="navMenuItem__text">
                            <span className="navMenuItem__name">{item.name[lang]}</span>
                            <span className="navMenuItem__blurb">{item.blurb[lang]}</span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.path} className="nav__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav__link ${isLinkActive(link, isActive) ? 'is-active' : ''}`}
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

      {/* ── Mobile overlay: no hover on touch, so products are listed inline ── */}
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
              className={({ isActive }) => `nav__overlayLink ${isLinkActive(link, isActive) ? 'is-active' : ''}`}
              style={{ '--i': i }}
              onClick={() => setMobileOpen(false)}
            >
              <span className="nav__overlayIndex mono">{String(i + 1).padStart(2, '0')}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}

          <p className="nav__overlayHeading mono" style={{ '--i': navLinks.length }}>
            {t('nav_products')}
          </p>

          <ul className="nav__overlayProducts" role="list">
            {solutions.map((item, i) => (
              <li key={item.id} style={{ '--i': navLinks.length + 1 + i }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav__overlayProduct ${isActive ? 'is-active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="navMenuItem__icon">
                    <ProductIcon id={item.id} />
                  </span>
                  {item.name[lang]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
