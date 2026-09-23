import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import heroImg from '../../assets/scolome_hero.jpg';
import trainNoseImg from '../../assets/highspeed_in_service.jpg';
import cabinImg from '../../assets/intercity_platform.webp';
import './About.css';

const SUB_SYSTEMS = [
  {
    num: '01',
    category: 'SIGNALLING & AUTOMATED OPTICS',
    title: {
      en: 'AI-Enabled Railway Signalling & Train Control',
      de: 'KI-gestützte Signalsysteme & Zugsteuerung',
    },
    paragraphs: {
      en: [
        'The evolution of high-capacity transportation demands ultra-dependable train protection and predictive headway automation. Scolome engineers certified SIL-4 failsafe architectures integrating continuous odometry, optical neural networks for real-time track obstacle detection, and automated moving-block transit management.',
        'Our signalling modules establish seamless cross-border operation across varied legacy infrastructures while enabling sub-90-second headway capabilities on congested corridors without sacrificing physical braking reserves.',
      ],
      de: [
        'Die Weiterentwicklung des Hochkapazitätsverkehrs erfordert absolut zuverlässige Zugbeeinflussung und vorausschauende Zugfolgeautomatisierung. Scolome entwickelt zertifizierte fehlersichere Architekturen nach SIL-4 mit kontinuierlicher Wegmessung, optischen neuronalen Netzen zur Hinderniserkennung und fahrplanoptimierter Moving-Block-Steuerung.',
        'Unsere Signalmodule ermöglichen den nahtlosen grenzüberschreitenden Betrieb auf heterogenen Altanlagen und verkürzen die Zugfolgezeit auf stark belasteten Korridoren auf unter 90 Sekunden ohne Einschränkung der Sicherheitsreserven.',
      ],
    },
    specsTitle: {
      en: 'Technical Specifications & Standards',
      de: 'Technische Spezifikationen & Normen',
    },
    specs: [
      'ETCS L2/L3 Baseline 3',
      'CENELEC SIL-4',
      'CBTC Moving Block',
      'AI Optical Trackside Vision',
    ],
    alignRight: false,
  },
  {
    num: '02',
    category: 'ROLLING STOCK DYNAMICS',
    title: {
      en: 'Rolling Stock & Advanced Bogie Engineering',
      de: 'Schienenfahrzeuge & Drehgestell-Engineering',
    },
    paragraphs: {
      en: [
        'Rolling stock is the technological core of Scolome. We develop lightweight aluminum-lithium integral extruded carbodies and advanced high-damping bogie frames engineered under rigorous EN 13749 standards to deliver exceptional ride comfort, track-force mitigation, and aerodynamic quietness at speeds exceeding 320 km/h.',
        'Coupled with state-of-the-art silicon carbide (SiC) traction inverters and EN 15227 crashworthiness crumple zones, our vehicles optimize energy efficiency while ensuring peerless structural passenger survivability.',
      ],
      de: [
        'Fahrzeugtechnik ist das technologische Herzstück von Scolome. Wir entwickeln integrale Strangpress-Wagenkästen aus Aluminium-Lithium und hochelastisch gedämpfte Drehgestellrahmen nach EN 13749 für überragenden Fahrkomfort, geringe Gleisbeanspruchung und aerodynamische Laufruhe jenseits von 320 km/h.',
        'In Kombination mit Siliziumkarbid-(SiC)-Traktionsumrichtern und Deformationszonen nach EN 15227 optimieren unsere Fahrzeuge die Energieeffizienz bei maximaler struktureller Überlebenssicherheit für die Fahrgäste.',
      ],
    },
    specsTitle: {
      en: 'Technical Specifications & Standards',
      de: 'Technische Spezifikationen & Normen',
    },
    specs: [
      'EN 13749 Bogie Structural Life',
      'EN 15227 Crashworthiness',
      'Silicon Carbide (SiC) Inverters',
      'Active Lateral Dampers',
    ],
    alignRight: true,
  },
  {
    num: '03',
    category: 'EDGE IOT, TELEMETRY & AI',
    title: {
      en: 'Digital Rail & Unified Predictive Telemetry',
      de: 'Digitale Schiene & Prädiktive Telemetrie',
    },
    paragraphs: {
      en: [
        "Bridging physical rolling stock with real-time computational infrastructure. Scolome's digital ecosystem unifies high-frequency onboard IoT edge gateways with cloud twin simulations to monitor thousands of critical data points across motor bearings, wheelsets, brake calipers, and pantograph-catenary contact strips.",
        'Dynamic digital twin models predict mechanical anomalies hundreds of operating hours prior to component degradation, empowering dispatchers with automated timetable conflict resolution and precision maintenance routing.',
      ],
      de: [
        'Die Verbindung physischer Fahrzeuge mit digitaler Echtzeitinfrastruktur: Scolomes digitales Ökosystem verknüpft hochfrequente Onboard-Edge-Gateways mit Cloud-Zwillingen zur Überwachung tausender Messpunkte an Motorlagern, Radsätzen, Bremszangen und Stromabnehmer-Schleifleisten.',
        'Dynamische digitale Zwillingsmodelle prognostizieren mechanische Auffälligkeiten hunderte Betriebsstunden vor einem Bauteilversagen und unterstützen Disponenten mit automatisierter Konfliktlösung und zielgerichteter Instandhaltungsplanung.',
      ],
    },
    specsTitle: {
      en: 'Technical Specifications & Standards',
      de: 'Technische Spezifikationen & Normen',
    },
    specs: [
      'Fleet Digital Twin Simulation',
      'Edge Vibration Telemetry',
      'Automated Conflict Resolution',
      'Passenger Comfort IoT',
    ],
    alignRight: false,
  },
  {
    num: '04',
    category: 'POWER & ELECTRIFICATION',
    title: {
      en: 'Traction Electrification & Smart Energy Systems',
      de: 'Traktionselektrifizierung & Intelligente Energiesysteme',
    },
    paragraphs: {
      en: [
        'High-efficiency power architecture tailored for high-speed trunk corridors and suburban expressways. We deliver robust 25 kV AC 50 Hz overhead catenary electrification paired with intelligent substations capable of regenerative braking energy capture and reverse-feed into regional electrical grids.',
        'For non-electrified regional links and zero-emission bridge zones, our modular lithium iron phosphate (LFP) hybrid battery powerpacks support catenary-free autonomy with dynamic phase-break neutral section controllers.',
      ],
      de: [
        'Hocheffiziente Energiearchitektur für Hochgeschwindigkeitsmagistralen und städtische Schnellbahnkorridore. Wir realisieren 25-kV-AC-50-Hz-Oberleitungssysteme mit intelligenten Unterwerken, die Bremsenergie rekuperieren und in regionale Verteilnetze zurückspeisen.',
        'Für nicht elektrifizierte Streckenabschnitte bieten unsere modularen LFP-Hybridbatteriepakete oberleitungsfreie Reichweite mit dynamischer Phasen- und Schutzstreckensteuerung.',
      ],
    },
    specsTitle: {
      en: 'Technical Specifications & Standards',
      de: 'Technische Spezifikationen & Normen',
    },
    specs: [
      '25 kV AC 50 Hz Catenary',
      'Smart Substation Grid Feedback',
      'Modular LFP Hybrid Units',
      'Phase Break Micro-Controllers',
    ],
    alignRight: true,
  },
  {
    num: '05',
    category: 'TRACK & INFRASTRUCTURE',
    title: {
      en: 'Resilient Track & High-Speed Infrastructure',
      de: 'Resistenter Oberbau & Hochgeschwindigkeitsinfrastruktur',
    },
    paragraphs: {
      en: [
        'Engineering durable permanent ways designed for extreme dynamic axle loads and high operational frequencies. Scolome develops ballastless slab track assemblies with elastomeric sub-ballast mats that attenuate ground-borne noise and vibration across dense metropolitan environments and tunnel passages.',
        'Integrated automated turnouts and geotechnical optical settlement sensors deliver sub-millimeter geometry verification in real time, dramatically cutting maintenance cycles and avoiding speed restrictions.',
      ],
      de: [
        'Konstruktion langlebiger Gleiskörper für extreme dynamische Achslasten und dichte Taktfrequenzen. Scolome konzipiert Feste Fahrbahn-Systeme mit elastomeren Unterschottermatten zur Dämpfung von Körperschall in Ballungsräumen und Tunneln.',
        'Integrierte Weichenantriebe und optogeotechnische Setzungssensoren ermöglichen die millimetergenaue Gleislagekontrolle in Echtzeit, reduzieren Instandhaltungsfenster und verhindern Geschwindigkeitsbeschränkungen.',
      ],
    },
    specsTitle: {
      en: 'Technical Specifications & Standards',
      de: 'Technische Spezifikationen & Normen',
    },
    specs: [
      'Ballastless Slab Track (Rheda System)',
      'Floating Track Slab Mats',
      'Automated Turnout Point Diagnostics',
      'Sub-mm Geotechnical Sensing',
    ],
    alignRight: false,
  },
  {
    num: '06',
    category: 'HOMOLOGATION & EPC DELIVERY',
    title: {
      en: 'Turnkey EPC & Cross-Border Homologation',
      de: 'Schlüsselfertige EPC-Lieferung & Grenzüberschreitende Zulassung',
    },
    paragraphs: {
      en: [
        'From greenfield feasibility studies through civil execution, signalling integration, and revenue commissioning. Scolome unifies multi-disciplinary engineering packages to minimize delivery variance, optimize capital deployment, and accelerate corridor commissioning timelines.',
        'We manage rigorous homologation workflows across European Railway Agency (ERA) TSI standards and Indian Railway RDSO frameworks, validating interoperability, EMC compatibility, and multi-jurisdiction compliance.',
      ],
      de: [
        'Von Machbarkeitsstudien über Tiefbauausführung und Leit- und Sicherungstechnik bis zur Betriebsaufnahme. Scolome bündelt gewerkeübergreifende Pakete zur Minimierung von Risiken, Optimierung des Kapitaleinsatzes und Beschleunigung der Inbetriebnahme.',
        'Wir steuern strukturierte Zulassungsprozesse nach den TSI-Standards der Europäischen Eisenbahnagentur (ERA) sowie den RDSO-Regularien in Indien zur Absicherung von Interoperabilität, EMV-Konformität und Gesamtsystemzulassung.',
      ],
    },
    specsTitle: {
      en: 'Technical Specifications & Standards',
      de: 'Technische Spezifikationen & Normen',
    },
    specs: [
      'TSI Interoperability Compliance',
      'Turnkey EPC Delivery',
      'ERA & RDSO Homologation',
      'EMC System Integration',
    ],
    alignRight: true,
  },
  {
    num: '07',
    category: 'LIFECYCLE & FLEET READINESS',
    title: {
      en: 'Services, Depot Automation & Lifecycle Support',
      de: 'Services, Depot-Automatisierung & Lebenszyklus-Support',
    },
    paragraphs: {
      en: [
        'Guaranteed fleet operational readiness across the entire 40-year design lifecycle. Scolome deploys automated robotic depot inspection portals, laser wheel-profile scanner rigs, and acoustic bearing wayside monitors that inspect trains at revenue speeds as they enter maintenance facilities.',
        'Backed by circular component remanufacturing loops, certified zero-defect spare logistics, and rapid-response field engineering teams ensuring stringent SLA uptime across high-density passenger and freight corridors.',
      ],
      de: [
        'Garantierte Flottenverfügbarkeit über den gesamten 40-jährigen Auslegungszeitraum. Scolome setzt automatisierte Roboter-Inspektionsportale, Laser-Radprofilscanner und streckenseitige Akustiksensoren ein, die Züge bei der Einfahrt ins Betriebswerk bei Regelgeschwindigkeit prüfen.',
        'Unterstützt durch zirkuläre Komponentenaufarbeitung, zertifizierte Ersatzteillogistik und mobile Serviceteams zur Sicherstellung höchster Verfügbarkeits-SLAs im Personen- und Güterverkehr.',
      ],
    },
    specsTitle: {
      en: 'Operational Assurance Matrix',
      de: 'Betriebliche Sicherungsmatrix',
    },
    specs: [
      '40-Year Structural Integrity Protocol',
      'Automated Depot Way-In Laser Profile Scanners',
      'Circular Remanufacturing & Overhaul Programs',
      '24/7 Mission-Critical SLA Dispatch & Logistics',
    ],
    alignRight: false,
  },
];

export default function About() {
  const { lang } = useLanguage();

  return (
    <div className="aboutPage">
      <SEO
        title="About Us | Zebrold IHL • Scolome Railway Technologies"
        description="Zebrold Scolome is a German rolling stock engineering company headquartered in Frankfurt am Main, dedicated to pioneering ultra high-speed intelligent rolling stocks."
        keywords="Zebrold, Scolome, rolling stock, high-speed rail, German rail engineering, Bangalore, Frankfurt am Main, Kassel"
        url="/about"
      />

      {/* ══ 1. Top Hero Section ══ */}
      <section className="aboutHero">
        <div className="aboutHero__stage">
          <img
            src={heroImg}
            alt="Scolome Next-Generation High Speed Train"
            className="aboutHero__img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="aboutHero__scrim" aria-hidden="true" />
          <div className="aboutHero__card">
            <h2 className="aboutHero__cardTitle">
              Pioneering Ultra Speed Intelligent Rolling Stocks
            </h2>
            <p className="aboutHero__cardDesc">
              Precision-engineered aerodynamic rolling stock designed for sustainable high-capacity rail transport across continents.
            </p>
          </div>
        </div>
      </section>

      {/* ══ Main Page Shell ══ */}
      <div className="aboutShell">
        {/* ══ 2. Section: Engineering the Future of Rail Mobility ══ */}
        <section className="aboutSec aboutSec--intro">
          <div className="aboutIntro__grid">
            <div className="aboutIntro__titleCol">
              <h1 className="aboutIntro__heading">
                Engineering the Future of Rail Mobility
              </h1>
            </div>
            <div className="aboutIntro__contentCol">
              <p className="aboutIntro__lead">
                <strong>Zebrold International Holdings Limited (Zebrold IHL)</strong> is a German rolling stock engineering and technology company headquartered in Frankfurt am Main, Germany, dedicated to advancing the future of rail transportation through innovation, engineering excellence, and intelligent railway solutions.
              </p>
              <p>
                The company began its root operations in 2024 in Bangalore, India, establishing the foundation for its railway technology vision and engineering development. From these early beginnings, Zebrold IHL has continued to shape its ambitions around the design, development, and manufacturing of advanced rolling stock and the technologies that support modern rail transportation.
              </p>
              <p>
                Today, <strong>Scolome</strong> represents our dedicated railway initiative, bringing together a comprehensive vision for rolling stock engineering, railway signalling, electrification, digital rail, infrastructure, components, services, and turnkey solutions. Our manufacturing vision is centred in Germany, bringing together German engineering standards, precision manufacturing, and an international approach to railway technology development.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 3. Section: Bangalore & Germany Cross-Border Engineering ══ */}
        <section className="aboutSec aboutSec--split">
          <div className="aboutSplit__grid">
            <div className="aboutSplit__text">
              <h2 className="aboutSec__title">
                From Bangalore to Frankfurt — A Cross-Border Vision
              </h2>
              <div className="aboutSplit__paragraphs">
                <p>
                  Scolome's journey is rooted in Bangalore, India, where Zebrold IHL began its initial operations in 2024. This foundation represents the beginning of our engineering and technology journey, connecting India's growing technical talent and innovation ecosystem with our long-term ambition to develop internationally focused railway solutions.
                </p>
                <p>
                  With Germany as our headquarters and manufacturing base, we are building a cross-border engineering vision that brings together design, technical development, manufacturing, and railway system capabilities. Our approach is centred on developing railway technologies that combine thoughtful engineering, precision, quality, and a forward-looking understanding of the transportation industry.
                </p>
                <p className="aboutText--subtle">
                  Our development journey reflects a commitment to building railway capabilities across multiple interconnected disciplines. From the design of railway coaches and rolling stock components to intelligent signalling and electrification systems, Scolome aims to create a foundation for a broader railway technology ecosystem.
                </p>
              </div>
            </div>
            <div className="aboutSplit__mediaCol">
              <div className="aboutMediaCard">
                <div className="aboutMediaCard__inner">
                  <img
                    src={trainNoseImg}
                    alt="Scolome high-speed trainset running at speed through open countryside"
                    className="aboutMediaCard__img"
                    loading="lazy"
                  />
                  <div className="aboutMediaCard__scrim" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. Section: Passenger Comfort & Aerodynamic Cohesion Card ══ */}
        <section className="aboutSec aboutSec--cabinCard">
          <div className="aboutCabinCard">
            <div className="aboutCabinCard__grid">
              <div className="aboutCabinCard__mediaCol">
                <div className="aboutCabinCard__frame">
                  <img
                    src={cabinImg}
                    alt="Scolome intercity trainset waiting at a covered station platform"
                    className="aboutCabinCard__img"
                    loading="lazy"
                  />
                </div>
                <div className="aboutCabinCard__caption">
                  Aerodynamic Cohesion &amp; Passenger Comfort
                </div>
              </div>
              <div className="aboutCabinCard__textCol">
                <div className="aboutCabinCard__body">
                  <h2 className="aboutCabinCard__title">
                    Aerodynamic Cohesion &amp; Passenger Experience
                  </h2>
                  <div className="aboutCabinCard__desc">
                    <p>
                      Rolling stock is at the centre of Scolome's railway engineering vision. We are focused on advancing the design and development of modern railway vehicles, with particular emphasis on railway coaches, passenger experience, engineering performance, and system integration.
                    </p>
                    <p>
                      Our ambition is to develop rolling stock solutions that combine contemporary industrial design with engineering principles focused on efficiency, reliability, safety, passenger comfort, maintainability, and operational requirements.
                    </p>
                    <p className="aboutText--subtle">
                      Through our rolling stock initiative, Scolome Apex, we explore vehicle architecture, interior design, structural development, onboard technologies, energy efficiency, and operational integration.
                    </p>
                  </div>
                </div>
                <div className="aboutCabinCard__footer">
                  <p>
                    Scolome's rolling stock vision is centred on developing railway vehicles that bring together functional performance, intelligent design, and manufacturing precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. Section: Technical Pillars / Sub-Systems Architecture ══ */}
        <section className="aboutSec aboutSec--systems">
          <div className="aboutSystems__head">
            <h2 className="aboutSystems__mainTitle">
              Integrated Railway Sub-Systems Architecture
            </h2>
            <p className="aboutSystems__mainSubtitle">
              An integrated architecture of German precision engineering and advanced cross-border intelligence formulated to solve the mission-critical lifecycle, safety, and operational demands of modern high-speed and mainline rail networks.
            </p>
          </div>

          <div className="aboutSystems__list">
            {SUB_SYSTEMS.map((item) => (
              <article
                key={item.num}
                className={`aboutSystemRow ${item.alignRight ? 'aboutSystemRow--reverse' : ''}`}
              >
                <div className="aboutSystemRow__titleCol">
                  <span className="aboutSystemRow__badge">
                    SUB-SYSTEM {item.num} // {item.category}
                  </span>
                  <h3 className="aboutSystemRow__heading">
                    {item.title[lang]}
                  </h3>
                </div>

                <div className="aboutSystemRow__bodyCol">
                  <div className="aboutSystemRow__paragraphs">
                    {item.paragraphs[lang].map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="aboutSystemRow__specsBox">
                    <div className="aboutSystemRow__specsLabel mono">
                      {item.specsTitle[lang]}
                    </div>
                    <div className="aboutSystemRow__specsList mono">
                      {item.specs.map((spec, sIdx) => (
                        <span key={spec}>
                          {sIdx > 0 && <span className="aboutSystemRow__specsDot">•</span>}
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══ 6. Section: Manufacturing in Germany & Vision for the Future ══ */}
        <section className="aboutSec aboutSec--governance">
          <div className="aboutGov__rows">
            {/* Manufacturing in Germany */}
            <div className="aboutGovRow">
              <div className="aboutGovRow__head">
                <h4 className="aboutGovRow__title">Manufacturing in Germany</h4>
                <p className="aboutGovRow__meta">
                  Frankfurt am Main Production Centre • DIN Specifications
                </p>
              </div>
              <div className="aboutGovRow__body">
                <p className="aboutGovRow__lead">
                  Germany serves as the headquarters and manufacturing focus of our railway engineering vision. Through our German base in Frankfurt am Main, Zebrold IHL is developing an approach that brings together engineering, precision manufacturing, quality, and international railway technology development.
                </p>
                <p>
                  Our manufacturing ambition is focused on producing rolling stock and related railway solutions through a structured engineering and manufacturing process. We recognise the importance of quality assurance, technical compliance, manufacturing consistency, and rigorous testing in the development of railway vehicles and components.
                </p>
                <p className="aboutGovRow__footerNote">
                  German manufacturing represents an important part of our intended railway identity, while our engineering roots in Bangalore, India, remain part of the company's development journey.
                </p>
              </div>
            </div>

            {/* Our Vision for the Future */}
            <div className="aboutGovRow">
              <div className="aboutGovRow__head">
                <h4 className="aboutGovRow__title">Our Vision for the Future</h4>
                <p className="aboutGovRow__meta">
                  Integrated Transportation Ecosystem
                </p>
              </div>
              <div className="aboutGovRow__body">
                <p>
                  At Scolome, we believe the future of rail transportation will be shaped by the integration of advanced rolling stock, intelligent signalling, digital technologies, electrification, infrastructure, and engineering services. Our ambition is to contribute to this future by developing a railway-focused technology ecosystem that connects individual products with the systems and infrastructure that support their operation.
                </p>
                <p>
                  From the advancement of railway coaches to the exploration of AI-enabled signalling and digital rail solutions, our focus is on building engineering capabilities that respond to the evolving demands of transportation. We aim to combine innovative thinking with practical engineering, developing a foundation for solutions that support efficiency, reliability, passenger experience, and long-term operational performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. Closing Quote ══ */}
        <section className="aboutSec aboutSec--quote">
          <blockquote className="aboutQuote">
            <p className="aboutQuote__text">
              “Rolling stock is the future of transportation, and Scolome is redefining the future of mobility through innovation and engineering excellence.”
            </p>
            <cite className="aboutQuote__cite mono">
              ZEBROLD INTERNATIONAL HOLDINGS LIMITED · SCOLOME RAIL INITIATIVE
            </cite>
          </blockquote>
        </section>
      </div>
    </div>
  );
}
