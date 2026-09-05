import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import './LegalNotice.css';

export default function LegalNotice() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef} className="legal-page">
      <SEO
        title="Legal Notice | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Legal notice and corporate disclosure information for Zebrold International Holdings Limited (Zebrold IHL)."
        keywords="Zebrold legal notice, Zebrold IHL impressum, Zebrold International Holdings Limited disclosure"
        url="/legal-notice"
      />
      <section className="page-hero legal-hero" aria-label="Legal Notice hero">
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Legal Notice</span>
          </nav>
          <h1 className="page-hero-title reveal">Legal Notice</h1>
          <p className="page-hero-sub reveal" data-delay="1">
            Corporate disclosure information for Zebrold International Holdings Limited (Zebrold IHL).
          </p>
        </div>
      </section>

      <section className="section legal-content">
        <div className="container container-medium">
          <p className="legal-note reveal">
            This page is being finalized. Full legal notice content, including corporate registration
            details and regulatory disclosures, will be published here shortly.
          </p>
        </div>
      </section>
    </div>
  );
}
