import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { productCategories, products } from '../../data/products';

import zebroldLogoMark from '../../assets/zebrold_logo_mark.png';
import './Navbar.css';

/* ── Framer Motion variants for staggered mobile menu ── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1], staggerChildren: 0.06, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1], staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    filter: 'blur(4px)',
    transition: { duration: 0.25, ease: [0.32, 0.72, 0, 1] },
  },
};

const megaMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.32, 0.72, 0, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: [0.32, 0.72, 0, 1] } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(productCategories[0].id);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveCategoryId, setMobileActiveCategoryId] = useState(null);
  const location = useLocation();
  const { t } = useLanguage();

  const productsWrapRef = useRef(null);
  const megaMenuPanelRef = useRef(null);
  const productsTriggerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const navLinks = [
    { id: 'investors', label: t('nav_investors'), path: '#' },
    { id: 'about', label: t('nav_about'), path: '/about' },
    { id: 'news', label: t('nav_news'), path: '/news' },
    { id: 'offices', label: t('nav_offices'), path: '/offices' },
    { id: 'careers', label: t('nav_careers'), path: '/careers' },
  ];

  const activeCategory = productCategories.find((c) => c.id === activeCategoryId) || productCategories[0];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  /* Lock body scroll when mobile overlay is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close the mega-menu on outside click or Escape; restore focus to trigger on Escape */
  useEffect(() => {
    if (!productsOpen) return;

    const onPointerDown = (e) => {
      const insideTrigger = productsWrapRef.current?.contains(e.target);
      const insidePanel = megaMenuPanelRef.current?.contains(e.target);
      if (!insideTrigger && !insidePanel) {
        setProductsOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setProductsOpen(false);
        productsTriggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [productsOpen]);

  const openProducts = () => {
    clearTimeout(closeTimerRef.current);
    setProductsOpen(true);
  };

  const scheduleCloseProducts = () => {
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setProductsOpen(false), 200);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`arrodz-navbar ${scrolled ? 'is-scrolled' : 'is-transparent'}`}>
      <div className="arrodz-nav-container container-large">
        {/* Left: Brand Logo */}
        <Link to="/" className="arrodz-logo-link" aria-label="Zebrold Group — Home">
          <img src={zebroldLogoMark} alt="Zebrold Group" className="arrodz-logo-img" loading="eager" width="120" height="40" />
        </Link>

        {/* Center: Nav Links */}
        <nav className="arrodz-nav-menu" aria-label="Main Navigation">
          <ul className="arrodz-nav-list" role="list">
            {/* Products — mega-menu trigger */}
            <li
              className="arrodz-nav-item"
              ref={productsWrapRef}
              onMouseEnter={openProducts}
              onMouseLeave={scheduleCloseProducts}
            >
              <button
                type="button"
                ref={productsTriggerRef}
                className={`arrodz-nav-link arrodz-nav-link-btn ${productsOpen ? 'is-active' : ''}`}
                aria-haspopup="true"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((v) => !v)}
              >
                <span>{t('nav_products')}</span>
                <span className={`nav-chevron ${productsOpen ? 'is-open' : ''}`} aria-hidden="true">▾</span>
              </button>
            </li>

            {navLinks.map((link) => (
              <li key={link.id} className="arrodz-nav-item">
                <Link
                  to={link.path}
                  className={`arrodz-nav-link ${isActive(link.path) ? 'is-active' : ''}`}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger → X Morph */}
        <button
          className={`arrodz-hamburger ${mobileOpen ? 'is-open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="hamburger-line line-1" aria-hidden="true" />
          <span className="hamburger-line line-2" aria-hidden="true" />
          <span className="hamburger-line line-3" aria-hidden="true" />
        </button>
      </div>

      {/* Products Mega-Menu Panel — the centering transform lives on this
          static wrapper, kept separate from the motion.div below, because
          Framer Motion writes its own inline `transform` for the y-animation
          and would otherwise silently clobber a CSS translateX(-50%). */}
      <AnimatePresence>
        {productsOpen && (
          <div className="mega-menu-wrap" ref={megaMenuPanelRef}>
            <motion.div
              className="mega-menu"
              variants={megaMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={openProducts}
              onMouseLeave={scheduleCloseProducts}
            >
              <div className="mega-menu-inner commercial-aircraft-selector">
              <ul className="mega-menu-categories" role="list">
                {productCategories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      className={`mega-menu-cat-btn ${cat.id === activeCategoryId ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveCategoryId(cat.id)}
                      onFocus={() => setActiveCategoryId(cat.id)}
                      onClick={() => setActiveCategoryId(cat.id)}
                    >
                      <span>{cat.label}</span>
                      {cat.sublabel && <small>{cat.sublabel}</small>}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mega-menu-items">
                {activeCategory.items.length > 0 ? (
                  activeCategory.items.map((slug) => {
                    const p = products[slug];
                    return (
                      <Link
                        key={slug}
                        to={`/products/${slug}`}
                        className="mega-menu-item-card"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="mega-menu-item-maker">{p.manufacturer}</span>
                        <span className="mega-menu-item-name">{p.name}</span>
                        <span className="mega-menu-item-tagline">{p.tagline}</span>
                        <span className="mega-menu-item-arrow" aria-hidden="true">→</span>
                      </Link>
                    );
                  })
                ) : (
                  <div className="mega-menu-empty">
                    <p>Programs in this category are coming soon.</p>
                  </div>
                )}
              </div>
            </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="arrodz-mobile-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mobile-overlay-content">
              <nav className="mobile-overlay-nav" aria-label="Mobile Navigation">
                {/* Products accordion */}
                <motion.div variants={linkVariants} className="mobile-accordion">
                  <button
                    type="button"
                    className="mobile-overlay-link mobile-accordion-trigger"
                    aria-expanded={mobileProductsOpen}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                  >
                    <span className="mobile-link-index">01</span>
                    <span className="mobile-link-text">{t('nav_products')}</span>
                    <span className={`mobile-accordion-chevron ${mobileProductsOpen ? 'is-open' : ''}`} aria-hidden="true">▾</span>
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        className="mobile-accordion-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      >
                        {productCategories.map((cat) => (
                          <div key={cat.id} className="mobile-accordion-category">
                            <button
                              type="button"
                              className="mobile-accordion-cat-btn"
                              onClick={() => setMobileActiveCategoryId((v) => (v === cat.id ? null : cat.id))}
                            >
                              {cat.label}
                              {cat.items.length > 0 && (
                                <span className={`mobile-accordion-chevron ${mobileActiveCategoryId === cat.id ? 'is-open' : ''}`} aria-hidden="true">▾</span>
                              )}
                            </button>
                            {cat.items.length > 0 && mobileActiveCategoryId === cat.id && (
                              <div className="mobile-accordion-sub-list">
                                {cat.items.map((slug) => (
                                  <Link
                                    key={slug}
                                    to={`/products/${slug}`}
                                    className="mobile-accordion-sub-link"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {products[slug].name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {navLinks.map((link, i) => (
                  <motion.div key={link.id} variants={linkVariants}>
                    <Link
                      to={link.path}
                      className={`mobile-overlay-link ${isActive(link.path) ? 'is-active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mobile-link-index">{String(i + 2).padStart(2, '0')}</span>
                      <span className="mobile-link-text">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div className="mobile-overlay-footer" variants={linkVariants}>
                <Link
                  to="/contact"
                  className="mobile-contact-pill"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('nav_contact')}
                  <span className="mobile-contact-arrow" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
