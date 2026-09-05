import { useScrollReveal } from '../../hooks/useScrollReveal';
import OfficeMap from '../../components/OfficeMap/OfficeMap';
import SEO from '../../components/SEO/SEO';
import './Offices.css';

export default function Offices() {
  const pageRef = useScrollReveal();

  const officesSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Global Offices — Zebrold International Holdings Limited (Zebrold IHL)",
    "description": "4 global offices across Europe and India, with Global Headquarters in Frankfurt am Main, Germany.",
    "url": "https://www.zebrold.de/offices",
    "mainEntity": {
      "@type": "Corporation",
      "name": "Zebrold International Holdings Limited",
      "alternateName": ["Zebrold IHL", "Zebrold Group"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bockenheimer Landstrasse 17-19",
        "addressLocality": "Frankfurt am Main",
        "postalCode": "60325",
        "addressCountry": "DE"
      }
    }
  };

  return (
    <div ref={pageRef} className="offices-page">
      <SEO 
        title="Global Offices & Locations | Zebrold International Holdings Limited (Zebrold IHL)"
        description="4 strategic locations across Europe and India. Global Headquarters of Zebrold International Holdings Limited (Zebrold IHL) in Frankfurt am Main, Germany."
        keywords="Zebrold offices, Zebrold global locations, Zebrold IHL headquarters, Zebrold International Holdings Limited Frankfurt, Milan, Bangalore, Hyderabad"
        url="/offices"
        schemaData={officesSchema}
      />
      {/* Map */}
      <section className="section offices-map-section" aria-label="Interactive office map">
        <div className="container">
          <OfficeMap />
        </div>
      </section>
    </div>
  );
}
