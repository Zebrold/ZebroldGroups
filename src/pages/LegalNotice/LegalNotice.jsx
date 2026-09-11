import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import './LegalNotice.css';

const companyDetails = [
  { label: 'Company', value: 'ZEBROLD INTERNATIONAL HOLDINGS LIMITED' },
  { label: 'CIN', value: 'U26109TS2026PTC210471' },
  { label: 'Registered Office', value: 'Plot No. 13, Survey No. 64/2, Software Unit Layout, Hyderabad, Telangana – 500081, India' },
  { label: 'Registered with', value: 'Registrar of Companies, Hyderabad' },
  { label: 'Global Headquarters', value: 'Bockenheimer Landstrasse 17-19, 60325 Frankfurt am Main, Germany' },
];

const legalParagraphs = [
  'Zebrold International Holdings Limited ("Zebrold", "the Company", "we", "us", or "our") is an international holding company incorporated and registered in India, with its registered office and principal corporate registration maintained in India. The Company conducts its activities through its corporate operations, offices, representatives, subsidiaries, affiliates, partners, and other authorized business arrangements in accordance with the laws and regulations applicable to each jurisdiction in which it operates.',
  'As part of its international expansion and long-term business strategy, Zebrold International Holdings Limited has extended its corporate and operational presence to the Federal Republic of Germany, with a particular focus on establishing and developing business activities related to manufacturing, engineering, technology, industrial development, research, supply-chain development, strategic partnerships, and the expansion of its international operations.',
  'The German presence of Zebrold forms part of the Company\'s broader international business structure and is intended to support the Company\'s activities within Germany and the wider European market. Unless expressly stated otherwise, the establishment or operation of an office, facility, representative presence, manufacturing activity, partnership, or other business operation in Germany does not by itself constitute a separate German legal entity. Where a particular activity is conducted through a separately incorporated subsidiary, branch, registered establishment, contractual partner, or other legally recognized structure, the legal identity and responsibility applicable to that activity shall be determined by the relevant entity and applicable law.',
  'Zebrold International Holdings Limited is responsible for the management and administration of this official website and for the corporate information published through it, subject to the responsibilities of any relevant subsidiaries, affiliates, service providers, or third parties where applicable. The website is intended to provide information concerning Zebrold\'s corporate activities, international expansion, manufacturing ambitions, technology initiatives, products, services, projects, partnerships, career opportunities, and other areas of business activity.',
  'Information presented on the website is provided for general informational and corporate communication purposes and should not, unless expressly stated otherwise, be interpreted as a binding contractual offer, guarantee, representation, investment recommendation, or commitment to provide a particular product, service, facility, employment opportunity, manufacturing capability, or future project.',
  'Zebrold makes reasonable efforts to ensure that information published through its website is accurate, appropriate, and reasonably current. However, business activities, manufacturing plans, technologies, products, specifications, facilities, partnerships, projects, corporate structures, timelines, and other information may change as the Company develops its international operations. Accordingly, Zebrold does not guarantee that all information available on the website will remain complete, accurate, or current at all times. The Company reserves the right to amend, update, replace, suspend, or remove information, services, website functionality, projects, or other materials without prior notice where permitted by applicable law.',
  'References to Germany, Europe, manufacturing facilities, engineering operations, production capabilities, research and development, technology, industrial projects, strategic partnerships, or future expansion should be understood in the context of Zebrold\'s ongoing international business development. The publication of information regarding a planned facility, manufacturing operation, technology, product, project, partnership, or expansion initiative does not necessarily mean that such activity has been completed, commercially launched, fully operational, or legally established as a separate business entity.',
  'All intellectual property appearing on this website, including the Zebrold name, corporate identity, logos, trademarks, service marks, designs, text, photographs, illustrations, graphics, videos, animations, software, interfaces, databases, documents, publications, technical materials, and other content, is owned by Zebrold International Holdings Limited, its applicable subsidiaries or affiliates, or the respective third-party rights holders, unless otherwise stated.',
  'This website may contain links, references, integrations, or other connections to websites, applications, platforms, documents, social media channels, or digital services operated by third parties. Such links may be provided for informational purposes or convenience. Zebrold does not control the content, security, availability, accuracy, or privacy practices of third-party services and does not assume responsibility for them except to the extent required by applicable law.',
  'Zebrold takes reasonable measures to maintain the security, integrity, and availability of its website and related digital infrastructure. Nevertheless, internet-based systems cannot be guaranteed to remain continuously available or completely free from technical defects, interruptions, security incidents, malicious activity, or unauthorized access.',
  'Any personal data submitted through or collected in connection with this website is processed in accordance with applicable data protection legislation and Zebrold\'s Privacy Policy. Users should review the applicable Privacy Policy and cookie information to understand how personal data is collected, used, stored, disclosed, transferred, and protected.',
  'Zebrold International Holdings Limited may update this Legal Notice from time to time to reflect changes to its corporate structure, international operations, German presence, manufacturing activities, website functionality, applicable legislation, or business practices. The version published on this website shall constitute the current version of the Legal Notice.',
  'For formal legal correspondence, corporate inquiries, intellectual property matters, website-related concerns, or other official communications, Zebrold International Holdings Limited may be contacted using the official corporate contact details published below.'
];

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

      <main className="legal-document">
        <div className="container legal-document-inner">
          <header className="legal-header reveal">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">Legal Notice</span>
            </nav>
            <h1 className="legal-title">Legal Notice</h1>
          </header>

          <section className="legal-company-card reveal" aria-label="Company registration details">
            <p className="legal-company-name">ZEBROLD INTERNATIONAL HOLDINGS LIMITED</p>
            <dl className="legal-company-list">
              {companyDetails.map((detail) => (
                <div className="legal-company-row" key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <article className="legal-article reveal" aria-label="Legal notice content">
            {legalParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}
