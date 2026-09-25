import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import PageHero from '../../components/PageHero/PageHero';

export default function NotFound() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <SEO title="Page not found | Zebrold IHL" description="The page you requested could not be found." />

      <PageHero
        align="center"
        eyebrow="404"
        title={lang === 'de' ? 'Seite nicht gefunden' : 'Page not found'}
        lede={
          lang === 'de'
            ? 'Diese Adresse existiert nicht mehr oder wurde nie veröffentlicht.'
            : 'That address no longer exists, or was never published.'
        }
      >
        <Link to="/" className="btn btn--onDark" style={{ marginTop: '0.5rem' }}>
          {t('back_home')}
        </Link>
      </PageHero>
    </div>
  );
}
