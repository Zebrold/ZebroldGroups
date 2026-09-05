import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef} className="privacy-page">
      <SEO
        title="Privacy Policy | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Privacy policy and data protection information for Zebrold International Holdings Limited (Zebrold IHL)."
        keywords="Zebrold privacy policy, Zebrold IHL data protection, Zebrold International Holdings Limited GDPR"
        url="/privacy-policy"
      />
      <section className="page-hero privacy-hero" aria-label="Privacy Policy hero">
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 className="page-hero-title reveal">Privacy Policy</h1>
          <p className="page-hero-sub reveal" data-delay="1">
            How Zebrold International Holdings Limited (Zebrold IHL) collects, uses, and protects your data.
          </p>
        </div>
      </section>

      <section className="section privacy-content">
        <div className="container container-medium">
          <p className="privacy-note reveal">
            This page is being finalized. Our full privacy policy, including details on data collection,
            processing, and your rights under applicable data protection law, will be published here shortly.
          </p>
        </div>
      </section>
    </div>
  );
}
