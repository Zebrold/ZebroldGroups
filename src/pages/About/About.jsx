import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import heroImg from '../../assets/zebrold_manufacturing_plant.jpg';
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
    specs: {
      en: [
        'ETCS L2/L3 Baseline 3',
        'CENELEC SIL-4',
        'CBTC Moving Block',
        'AI Optical Trackside Vision',
      ],
      de: [
        'ETCS L2/L3 Baseline 3',
        'CENELEC SIL-4',
        'CBTC Moving Block',
        'KI-gestützte optische Streckenüberwachung',
      ],
    },
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
    specs: {
      en: [
        'EN 13749 Bogie Structural Life',
        'EN 15227 Crashworthiness',
        'Silicon Carbide (SiC) Inverters',
        'Active Lateral Dampers',
      ],
      de: [
        'EN 13749 Drehgestell-Betriebsfestigkeit',
        'EN 15227 Crashsicherheit',
        'Siliziumkarbid-(SiC)-Umrichter',
        'Aktive Querdämpfer',
      ],
    },
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
    specs: {
      en: [
        'Fleet Digital Twin Simulation',
        'Edge Vibration Telemetry',
        'Automated Conflict Resolution',
        'Passenger Comfort IoT',
      ],
      de: [
        'Digitaler Flottenzwilling',
        'Edge-Schwingungstelemetrie',
        'Automatisierte Konfliktlösung',
        'IoT für Fahrgastkomfort',
      ],
    },
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
    specs: {
      en: [
        '25 kV AC 50 Hz Catenary',
        'Smart Substation Grid Feedback',
        'Modular LFP Hybrid Units',
        'Phase Break Micro-Controllers',
      ],
      de: [
        '25-kV-AC-50-Hz-Oberleitung',
        'Netzrückspeisung über intelligente Unterwerke',
        'Modulare LFP-Hybrideinheiten',
        'Mikrocontroller für Phasentrennstellen',
      ],
    },
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
    specs: {
      en: [
        'Ballastless Slab Track (Rheda System)',
        'Floating Track Slab Mats',
        'Automated Turnout Point Diagnostics',
        'Sub-mm Geotechnical Sensing',
      ],
      de: [
        'Feste Fahrbahn (System Rheda)',
        'Elastomermatten für Masse-Feder-Systeme',
        'Automatisierte Weichendiagnose',
        'Geotechnische Sensorik im Submillimeterbereich',
      ],
    },
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
    specs: {
      en: [
        'TSI Interoperability Compliance',
        'Turnkey EPC Delivery',
        'ERA & RDSO Homologation',
        'EMC System Integration',
      ],
      de: [
        'TSI-Interoperabilitätskonformität',
        'Schlüsselfertige EPC-Lieferung',
        'ERA- & RDSO-Zulassung',
        'EMV-Systemintegration',
      ],
    },
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
    specs: {
      en: [
        '40-Year Structural Integrity Protocol',
        'Automated Depot Way-In Laser Profile Scanners',
        'Circular Remanufacturing & Overhaul Programs',
        '24/7 Mission-Critical SLA Dispatch & Logistics',
      ],
      de: [
        '40-Jahres-Protokoll für strukturelle Integrität',
        'Automatisierte Laser-Profilscanner an der Depoteinfahrt',
        'Zirkuläre Aufarbeitungs- & Revisionsprogramme',
        '24/7-SLA-Disposition & Logistik für kritische Einsätze',
      ],
    },
    alignRight: false,
  },
];

/* Page copy that isn't shared with Home. Shared passages (intro, Bangalore
   section, quote) come from translations.js via t() so the two pages stay in sync. */
const COPY = {
  en: {
    heroAlt: 'Zebrold IHL Manufacturing Plant and Scolome High Speed Train',
    heroDesc:
      'Precision-engineered aerodynamic rolling stock designed for sustainable high-capacity rail transport across continents.',
    introLeadRest:
      'is a German rolling stock engineering and technology company headquartered in Frankfurt am Main, Germany, dedicated to advancing the future of rail transportation through innovation, engineering excellence, and intelligent railway solutions.',
    introP2Before: 'Today,',
    introP2After:
      'represents our dedicated railway initiative, bringing together a comprehensive vision for rolling stock engineering, railway signalling, electrification, digital rail, infrastructure, components, services, and turnkey solutions. Our manufacturing vision is centred in Germany, bringing together German engineering standards, precision manufacturing, and an international approach to railway technology development.',
    splitTitle: 'From Bangalore to Frankfurt — A Cross-Border Vision',
    splitAlt: 'Scolome high-speed trainset running at speed through open countryside',
    cabinAlt: 'Scolome intercity trainset waiting at a covered station platform',
    cabinCaption: 'Aerodynamic Cohesion & Passenger Comfort',
    cabinTitle: 'Aerodynamic Cohesion & Passenger Experience',
    cabinP1:
      "Rolling stock is at the centre of Scolome's railway engineering vision. We are focused on advancing the design and development of modern railway vehicles, with particular emphasis on railway coaches, passenger experience, engineering performance, and system integration.",
    cabinP2:
      'Our ambition is to develop rolling stock solutions that combine contemporary industrial design with engineering principles focused on efficiency, reliability, safety, passenger comfort, maintainability, and operational requirements.',
    cabinP3:
      'Through our rolling stock initiative, Scolome Apex, we explore vehicle architecture, interior design, structural development, onboard technologies, energy efficiency, and operational integration.',
    cabinFooter:
      "Scolome's rolling stock vision is centred on developing railway vehicles that bring together functional performance, intelligent design, and manufacturing precision.",
    systemsTitle: 'Integrated Railway Sub-Systems Architecture',
    systemsSubtitle:
      'An integrated architecture of German precision engineering and advanced cross-border intelligence formulated to solve the mission-critical lifecycle, safety, and operational demands of modern high-speed and mainline rail networks.',
    mfgTitle: 'Manufacturing in Germany',
    mfgMeta: 'Frankfurt am Main Production Centre • DIN Specifications',
    mfgLead:
      'Germany serves as the headquarters and manufacturing focus of our railway engineering vision. Through our German base in Frankfurt am Main, Zebrold IHL is developing an approach that brings together engineering, precision manufacturing, quality, and international railway technology development.',
    mfgP:
      'Our manufacturing ambition is focused on producing rolling stock and related railway solutions through a structured engineering and manufacturing process. We recognise the importance of quality assurance, technical compliance, manufacturing consistency, and rigorous testing in the development of railway vehicles and components.',
    mfgNote:
      "German manufacturing represents an important part of our intended railway identity, while our engineering roots in Bangalore, India, remain part of the company's development journey.",
    visionTitle: 'Our Vision for the Future',
    visionMeta: 'Integrated Transportation Ecosystem',
    visionP1:
      'At Scolome, we believe the future of rail transportation will be shaped by the integration of advanced rolling stock, intelligent signalling, digital technologies, electrification, infrastructure, and engineering services. Our ambition is to contribute to this future by developing a railway-focused technology ecosystem that connects individual products with the systems and infrastructure that support their operation.',
    visionP2:
      'From the advancement of railway coaches to the exploration of AI-enabled signalling and digital rail solutions, our focus is on building engineering capabilities that respond to the evolving demands of transportation. We aim to combine innovative thinking with practical engineering, developing a foundation for solutions that support efficiency, reliability, passenger experience, and long-term operational performance.',
    quoteCite: 'ZEBROLD INTERNATIONAL HOLDINGS LIMITED · SCOLOME RAIL INITIATIVE',
  },
  de: {
    heroAlt: 'Zebrold IHL Fertigungswerk und Scolome Hochgeschwindigkeitszug',
    heroDesc:
      'Präzisionsgefertigte, aerodynamische Schienenfahrzeuge für nachhaltigen Hochkapazitätsverkehr über Kontinente hinweg.',
    introLeadRest:
      'ist ein deutsches Schienenfahrzeug- und Technologieunternehmen mit Hauptsitz in Frankfurt am Main, das sich der Weiterentwicklung des Schienenverkehrs durch Innovation, ingenieurtechnische Exzellenz und intelligente Bahntechnik widmet.',
    introP2Before: 'Heute repräsentiert',
    introP2After:
      'unsere dedizierte Eisenbahninitiative, die eine umfassende Vision für Schienenfahrzeugtechnik, Signaltechnik, Elektrifizierung, digitale Schiene, Infrastruktur, Komponenten, Services und schlüsselfertige Lösungen vereint. Unsere Produktionsvision ist in Deutschland verankert und vereint deutsche Ingenieurstandards, Präzisionsfertigung und einen internationalen Entwicklungsansatz.',
    splitTitle: 'Von Bangalore nach Frankfurt eine grenzüberschreitende Vision',
    splitAlt: 'Scolome-Hochgeschwindigkeitszug in voller Fahrt durch offene Landschaft',
    cabinAlt: 'Scolome-Intercityzug an einem überdachten Bahnsteig',
    cabinCaption: 'Aerodynamische Geschlossenheit & Fahrgastkomfort',
    cabinTitle: 'Aerodynamische Geschlossenheit & Fahrgasterlebnis',
    cabinP1:
      'Schienenfahrzeuge stehen im Mittelpunkt der Ingenieurvision von Scolome. Wir treiben Design und Entwicklung moderner Schienenfahrzeuge voran – mit besonderem Fokus auf Reisezugwagen, Fahrgasterlebnis, technische Leistungsfähigkeit und Systemintegration.',
    cabinP2:
      'Unser Anspruch ist es, Fahrzeuglösungen zu entwickeln, die zeitgemäßes Industriedesign mit ingenieurtechnischen Prinzipien verbinden – ausgerichtet auf Effizienz, Zuverlässigkeit, Sicherheit, Fahrgastkomfort, Instandhaltbarkeit und betriebliche Anforderungen.',
    cabinP3:
      'Mit unserer Fahrzeuginitiative Scolome Apex erforschen wir Fahrzeugarchitektur, Innenraumgestaltung, Strukturentwicklung, Bordtechnologien, Energieeffizienz und betriebliche Integration.',
    cabinFooter:
      'Die Fahrzeugvision von Scolome zielt auf Schienenfahrzeuge, die funktionale Leistungsfähigkeit, intelligentes Design und Fertigungspräzision vereinen.',
    systemsTitle: 'Integrierte Architektur der Bahn-Teilsysteme',
    systemsSubtitle:
      'Eine integrierte Architektur aus deutscher Präzisionstechnik und grenzüberschreitender Intelligenz – entwickelt für die kritischen Lebenszyklus-, Sicherheits- und Betriebsanforderungen moderner Hochgeschwindigkeits- und Fernverkehrsnetze.',
    mfgTitle: 'Fertigung in Deutschland',
    mfgMeta: 'Produktionszentrum Frankfurt am Main • DIN-Normen',
    mfgLead:
      'Deutschland ist Hauptsitz und Fertigungsschwerpunkt unserer Vision für die Bahntechnik. Von unserem Standort in Frankfurt am Main aus entwickelt Zebrold IHL einen Ansatz, der Engineering, Präzisionsfertigung, Qualität und internationale Bahntechnologieentwicklung zusammenführt.',
    mfgP:
      'Unser Fertigungsanspruch ist es, Schienenfahrzeuge und zugehörige Bahnlösungen in einem strukturierten Engineering- und Fertigungsprozess herzustellen. Qualitätssicherung, technische Normkonformität, gleichbleibende Fertigungsqualität und konsequente Prüfungen sind für uns bei der Entwicklung von Schienenfahrzeugen und Komponenten zentral.',
    mfgNote:
      'Die Fertigung in Deutschland ist ein wesentlicher Teil unserer angestrebten Identität als Bahnunternehmen, während unsere ingenieurtechnischen Wurzeln in Bangalore, Indien, fester Bestandteil der Unternehmensentwicklung bleiben.',
    visionTitle: 'Unsere Vision für die Zukunft',
    visionMeta: 'Integriertes Verkehrsökosystem',
    visionP1:
      'Bei Scolome sind wir überzeugt, dass die Zukunft des Schienenverkehrs durch das Zusammenspiel moderner Schienenfahrzeuge, intelligenter Signaltechnik, digitaler Technologien, Elektrifizierung, Infrastruktur und Engineering-Dienstleistungen geprägt wird. Wir wollen zu dieser Zukunft beitragen, indem wir ein bahnspezifisches Technologieökosystem aufbauen, das einzelne Produkte mit den Systemen und der Infrastruktur für ihren Betrieb verbindet.',
    visionP2:
      'Von der Weiterentwicklung von Reisezugwagen bis zur Erforschung KI-gestützter Signaltechnik und digitaler Bahnlösungen konzentrieren wir uns auf ingenieurtechnische Kompetenzen, die den sich wandelnden Anforderungen des Verkehrs gerecht werden. Wir verbinden innovatives Denken mit praxisnahem Engineering und schaffen so die Grundlage für Lösungen, die Effizienz, Zuverlässigkeit, Fahrgasterlebnis und langfristige Betriebsleistung fördern.',
    quoteCite: 'ZEBROLD INTERNATIONAL HOLDINGS LIMITED · SCOLOME-BAHNINITIATIVE',
  },
};

export default function About() {
  const { lang, t } = useLanguage();
  const c = COPY[lang];

  return (
    <div className="aboutPage">
      <SEO
        title="About Us | Zebrold IHL • Scolome Railway Technologies"
        description="Zebrold IHL is a German rolling stock engineering company headquartered in Frankfurt am Main, dedicated to pioneering ultra high-speed intelligent rolling stocks."
        keywords="Zebrold, Scolome, rolling stock, high-speed rail, German rail engineering, Bangalore, Frankfurt am Main, Kassel"
        url="/about"
      />

      {/* ══ 1. Top Hero Section ══ */}
      <section className="aboutHero">
        <div className="aboutHero__stage">
          <img
            src={heroImg}
            alt={c.heroAlt}
            className="aboutHero__img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="aboutHero__scrim" aria-hidden="true" />
          <div className="aboutHero__card">
            <h2 className="aboutHero__cardTitle">{t('home_pioneering_title')}</h2>
            <p className="aboutHero__cardDesc">{c.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* ══ Main Page Shell ══ */}
      <div className="aboutShell">
        {/* ══ 2. Section: Engineering the Future of Rail Mobility ══ */}
        <section className="aboutSec aboutSec--intro">
          <div className="aboutIntro__grid">
            <div className="aboutIntro__titleCol">
              <h1 className="aboutIntro__heading">{t('home_future_title')}</h1>
            </div>
            <div className="aboutIntro__contentCol">
              <p className="aboutIntro__lead">
                <strong>Zebrold International Holdings Limited (Zebrold IHL)</strong>{' '}
                {c.introLeadRest}
              </p>
              <p>{t('home_future_p1')}</p>
              <p>
                {c.introP2Before} <strong>Scolome</strong> {c.introP2After}
              </p>
            </div>
          </div>
        </section>

        {/* ══ 3. Section: Bangalore & Germany Cross-Border Engineering ══ */}
        <section className="aboutSec aboutSec--split">
          <div className="aboutSplit__grid">
            <div className="aboutSplit__text">
              <h2 className="aboutSec__title">{c.splitTitle}</h2>
              <div className="aboutSplit__paragraphs">
                <p>{t('home_pioneering_p1')}</p>
                <p>{t('home_pioneering_p2')}</p>
                <p className="aboutText--subtle">{t('home_pioneering_p3')}</p>
              </div>
            </div>
            <div className="aboutSplit__mediaCol">
              <div className="aboutMediaCard">
                <div className="aboutMediaCard__inner">
                  <img
                    src={trainNoseImg}
                    alt={c.splitAlt}
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
                    alt={c.cabinAlt}
                    className="aboutCabinCard__img"
                    loading="lazy"
                  />
                </div>
                <div className="aboutCabinCard__caption">{c.cabinCaption}</div>
              </div>
              <div className="aboutCabinCard__textCol">
                <div className="aboutCabinCard__body">
                  <h2 className="aboutCabinCard__title">{c.cabinTitle}</h2>
                  <div className="aboutCabinCard__desc">
                    <p>{c.cabinP1}</p>
                    <p>{c.cabinP2}</p>
                    <p className="aboutText--subtle">{c.cabinP3}</p>
                  </div>
                </div>
                <div className="aboutCabinCard__footer">
                  <p>{c.cabinFooter}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. Section: Technical Pillars / Sub-Systems Architecture ══ */}
        <section className="aboutSec aboutSec--systems">
          <div className="aboutSystems__head">
            <h2 className="aboutSystems__mainTitle">{c.systemsTitle}</h2>
            <p className="aboutSystems__mainSubtitle">{c.systemsSubtitle}</p>
          </div>

          <div className="aboutSystems__list">
            {SUB_SYSTEMS.map((item) => (
              <article
                key={item.num}
                className={`aboutSystemRow ${item.alignRight ? 'aboutSystemRow--reverse' : ''}`}
              >
                <div className="aboutSystemRow__titleCol">
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
                      {item.specs[lang].map((spec, sIdx) => (
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
                <h4 className="aboutGovRow__title">{c.mfgTitle}</h4>
                <p className="aboutGovRow__meta">{c.mfgMeta}</p>
              </div>
              <div className="aboutGovRow__body">
                <p className="aboutGovRow__lead">{c.mfgLead}</p>
                <p>{c.mfgP}</p>
                <p className="aboutGovRow__footerNote">{c.mfgNote}</p>
              </div>
            </div>

            {/* Our Vision for the Future */}
            <div className="aboutGovRow">
              <div className="aboutGovRow__head">
                <h4 className="aboutGovRow__title">{c.visionTitle}</h4>
                <p className="aboutGovRow__meta">{c.visionMeta}</p>
              </div>
              <div className="aboutGovRow__body">
                <p>{c.visionP1}</p>
                <p>{c.visionP2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. Closing Quote ══ */}
        <section className="aboutSec aboutSec--quote">
          <blockquote className="aboutQuote">
            <p className="aboutQuote__text">{t('home_quote')}</p>
            <cite className="aboutQuote__cite mono">{c.quoteCite}</cite>
          </blockquote>
        </section>
      </div>
    </div>
  );
}
