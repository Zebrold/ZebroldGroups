import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import zebroldLogoMark from '../../assets/zebrold_logo_mark.png';
import './Footer.css';

/* ── Icons (monochrome — inherit color via currentColor) ── */
function PinIcon() {
  return (
    <svg className="ftr-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg className="ftr-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="ftr-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const COPY = {
  en: {
    brandDesc: 'We partner with forward-thinking organisations to build value that inspires, performs, and endures.',
    followUs: 'FOLLOW US',
    company: 'Company',
    companyLinks: [
      { label: 'About Us', to: '/about' },
      { label: 'Newsroom', to: '/news' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
    sectors: 'Sectors',
    sectorLinks: [
      { label: 'Aerospace', to: '/sectors' },
      { label: 'Automotive', to: '/sectors/car-manufacturing' },
      { label: 'Healthcare & Pharma', to: '/sectors/healthcare-pharma' },
      { label: 'Industrial & Engineering', to: '/sectors/industrial-engineering' },
    ],
    resources: 'Resources',
    resourceLinks: [
      { label: 'Insights', to: '/news' },
      { label: 'FAQs', to: '/#faq' },
      { label: 'Careers', to: '/careers' },
    ],
    hq: 'Global Headquarters',
    address: ['Bockenheimer Landstrasse 17‑19', '60325 Frankfurt am Main, Germany'],
  },
  de: {
    brandDesc: 'Wir arbeiten mit zukunftsorientierten Organisationen zusammen, um Werte zu schaffen, die inspirieren, überzeugen und Bestand haben.',
    followUs: 'FOLGEN SIE UNS',
    company: 'Unternehmen',
    companyLinks: [
      { label: 'Über uns', to: '/about' },
      { label: 'Aktuelles', to: '/news' },
      { label: 'Karriere', to: '/careers' },
      { label: 'Kontakt', to: '/contact' },
    ],
    sectors: 'Sektoren',
    sectorLinks: [
      { label: 'Luft- und Raumfahrt', to: '/sectors' },
      { label: 'Automobilbau', to: '/sectors/car-manufacturing' },
      { label: 'Gesundheitswesen & Pharma', to: '/sectors/healthcare-pharma' },
      { label: 'Industrie & Maschinenbau', to: '/sectors/industrial-engineering' },
    ],
    resources: 'Ressourcen',
    resourceLinks: [
      { label: 'Einblicke', to: '/news' },
      { label: 'FAQs', to: '/#faq' },
      { label: 'Karriere', to: '/careers' },
    ],
    hq: 'Hauptsitz',
    address: ['Bockenheimer Landstrasse 17‑19', '60325 Frankfurt am Main, Germany'],
  },
};

export default function Footer() {
  const { t, lang } = useLanguage();
  const c = COPY[lang] || COPY.en;

  return (
    <footer className="footer" role="contentinfo">
      <div className="ftr-columns-wrap">
        <div className="padding-global">
          <div className="container-large">
            <div className="ftr-grid">
              {/* Brand */}
              <div className="ftr-col ftr-col-brand">
                <img src={zebroldLogoMark} alt="Zebrold Group Logo" className="ftr-logo-mark" loading="lazy" width="44" height="44" />
                <p className="ftr-brand-desc">{c.brandDesc}</p>
                <span className="ftr-follow-label">{c.followUs}</span>
                <div className="ftr-social-row">
                  <a href="https://www.linkedin.com/company/zebrold" target="_blank" rel="noopener noreferrer" className="ftr-social-icon" aria-label="LinkedIn">
                    <LinkedInGlyph />
                  </a>
                </div>
              </div>

              {/* Company */}
              <nav className="ftr-col" aria-label={c.company}>
                <span className="ftr-col-heading">{c.company}</span>
                {c.companyLinks.map((item) => (
                  <Link key={item.label} to={item.to} className="ftr-link">{item.label}</Link>
                ))}
              </nav>

              {/* Sectors */}
              <nav className="ftr-col" aria-label={c.sectors}>
                <span className="ftr-col-heading">{c.sectors}</span>
                {c.sectorLinks.map((item) => (
                  <Link key={item.label} to={item.to} className="ftr-link">{item.label}</Link>
                ))}
              </nav>

              {/* Resources */}
              <nav className="ftr-col" aria-label={c.resources}>
                <span className="ftr-col-heading">{c.resources}</span>
                {c.resourceLinks.map((item, i) => (
                  <Link key={`${item.label}-${i}`} to={item.to} className="ftr-link">{item.label}</Link>
                ))}
              </nav>

              {/* Global Headquarters */}
              <div className="ftr-col ftr-col-hq">
                <span className="ftr-col-heading">{c.hq}</span>
                <address className="ftr-hq-row ftr-address">
                  <PinIcon />
                  <span>{c.address[0]}, {c.address[1]}</span>
                </address>
                <a href="mailto:info@zebrold.de" className="ftr-hq-row ftr-link">
                  <EnvelopeIcon />
                  <span>info@zebrold.de</span>
                </a>
                <a href="tel:+496921004800" className="ftr-hq-row ftr-link">
                  <PhoneIcon />
                  <span>+49 69 2100 4800</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="padding-global">
          <div className="container-large footer-bottom-inner">
            <span>
              © {new Date().getFullYear()} ZEBROLD INTERNATIONAL HOLDINGS LIMITED (ZEBROLD IHL) — {t('footer_rights')}
            </span>
            <div className="footer-bottom-links">
              <Link to="/legal-notice" className="footer-bottom-link">{t('footer_imprint')}</Link>
              <Link to="/privacy-policy" className="footer-bottom-link">{t('footer_privacy')}</Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
