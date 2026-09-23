import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

const LANGS = ['de', 'en'];

/**
 * DE | EN segmented pill. `variant` controls the palette:
 *   'light' — for dark surfaces (footer, hero nav)
 *   'dark'  — for light surfaces
 */
export default function LanguageSwitcher({ variant = 'light', className = '' }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`lang-switch lang-switch--${variant} ${className}`}
      role="group"
      aria-label={t('lang_switch_label')}
    >
      {LANGS.map((code, i) => (
        <span key={code} className="lang-switch__slot">
          {i > 0 && <span className="lang-switch__sep" aria-hidden="true" />}
          <button
            type="button"
            className={`lang-switch__btn ${lang === code ? 'is-active' : ''}`}
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
