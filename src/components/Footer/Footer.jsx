import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import zebroldLogoMark from '../../assets/zebrold_logo_mark.png';
import { LOCATIONS } from '../../data/locations';
import './Footer.css';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: t('footer_company'),
      links: [
        { label: t('nav_about'), to: '/about' },
        { label: t('nav_newsroom'), to: '/newsroom' },
        { label: t('nav_careers'), to: '/careers' },
        { label: t('footer_contact'), to: '/contact' },
      ],
    },
    {
      heading: t('footer_sectors'),
      links: [
        { label: t('footer_rolling_stock'), to: '/rolling-stock' },
        { label: t('footer_signalling'), to: '/signalling' },
        { label: t('footer_components'), to: '/components' },
        { label: t('footer_infrastructure'), to: '/infrastructure' },
        { label: t('footer_digital_rail'), to: '/digital-rail' },
        { label: t('footer_services'), to: '/services' },
      ],
    },
    {
      heading: t('footer_resources'),
      links: [
        { label: t('footer_insights'), to: '/insights' },
        { label: t('footer_faqs'), to: '/faqs' },
        { label: t('nav_careers'), to: '/careers' },
      ],
    },
  ];

  return (
    <footer className="ftr" role="contentinfo">
      <div className="ftr__inner shell-wide">
        <div className="ftr__grid">
          {/* Brand block */}
          <div className="ftr__brandCol">
            <img
              src={zebroldLogoMark}
              alt="Zebrold IHL"
              className="ftr__mark"
              width="120"
              height="44"
              loading="lazy"
            />
            <div className="ftr__social">
              <a
                href="https://www.linkedin.com/company/zebrold"
                target="_blank"
                rel="noopener noreferrer"
                className="ftr__socialBtn"
                aria-label="Zebrold IHL on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.2 8.93h3.6V21H3.2V8.93Zm5.86 0h3.45v1.65h.05c.48-.87 1.65-1.79 3.4-1.79 3.64 0 4.31 2.32 4.31 5.34V21h-3.6v-5.94c0-1.42-.03-3.24-2-3.24-2 0-2.31 1.54-2.31 3.14V21h-3.6V8.93Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.heading} className="ftr__col" aria-label={col.heading}>
              <h2 className="ftr__heading">{col.heading}</h2>
              <ul role="list">
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.to}`}>
                    <Link to={link.to} className="ftr__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Global Locations & Facilities */}
          <div className="ftr__col ftr__hqCol">
            <h2 className="ftr__heading">{t('footer_locations') || t('footer_hq')}</h2>
            <div className="ftr__locationsList">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="ftr__locCard">
                  <div className="ftr__locHead">
                    <span className="ftr__locTitle">{loc.title[lang] || loc.title.en}</span>
                  </div>
                  <p className="ftr__locAddress">
                    {loc.fullAddress}
                  </p>
                </div>
              ))}
            </div>
            <p className="ftr__hqEmail">
              <span className="ftr__hqIcon">
                <MailIcon />
              </span>
              <a href="mailto:info@zebrold.de" className="ftr__link">
                info@zebrold.de
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ftr__bottom">
        <div className="ftr__bottomInner shell-wide">
          <p className="ftr__copy">
            © {year} ZEBROLD INTERNATIONAL HOLDINGS LIMITED (ZEBROLD IHL) — {t('footer_rights')}
          </p>
          <div className="ftr__bottomRight">
            <Link to="/legal-notice" className="ftr__legalLink">
              {t('footer_legal')}
            </Link>
            <Link to="/privacy-policy" className="ftr__legalLink">
              {t('footer_privacy')}
            </Link>
            <LanguageSwitcher variant="light" />
          </div>
        </div>
      </div>
    </footer>
  );
}
