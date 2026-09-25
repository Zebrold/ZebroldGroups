/**
 * People shown on /leadership (and the executive list teased on /about).
 *
 * Portraits: import a photo and add `image: photo` to a person to replace the
 * initials placeholder, e.g. `import hksPhoto from '../assets/leadership/hks.jpg';`
 */

export const EXECUTIVES = [
  {
    id: 'hemendrah-kumar-sadamsetty',
    name: 'Hemendrah Kumar Sadamsetty',
    role: {
      en: 'Chairman of the Board & President',
      de: 'Vorsitzender des Verwaltungsrats & Präsident',
    },
    bio: {
      en: 'Founded in 2024 by Hemendrah Kumar Sadamsetty, Zebrold was born from a transformative ideology: uniting German mechanical precision with Indian computational engineering excellence to pioneer decarbonized heavy rail transit. Under his governance, the enterprise architects, homologates, and deploys next-generation zero-tailpipe emission rolling stock across European mainlines and high-density Asian transit corridors.',
      de: 'Zebrold wurde 2024 von Hemendrah Kumar Sadamsetty aus einer wegweisenden Idee heraus gegründet: deutsche Maschinenbaupräzision mit indischer Exzellenz im Computational Engineering zu vereinen, um den dekarbonisierten Schienenverkehr voranzutreiben. Unter seiner Führung konzipiert das Unternehmen Schienenfahrzeuge der nächsten Generation ohne lokale Emissionen, führt sie durch die Zulassung und bringt sie auf europäische Hauptstrecken und dicht befahrene Verkehrskorridore in Asien.',
    },
  },
  {
    id: 'indu-reddy-mortala',
    name: 'Indu Reddy Mortala',
    role: {
      en: 'Director, Corporate Governance & Expansion',
      de: 'Direktorin, Corporate Governance & Expansion',
    },
    bio: {
      en: 'Overseeing regulatory homologation and transnational corporate governance, Indu spearheads strategic institutional alliances across European and international rail transport jurisdictions. Her work ensures total conformity with European Railway Agency (ERA) mandates, Office of Rail and Road (ORR) frameworks, and cross-border commercial alignment.',
      de: 'Indu verantwortet die regulatorische Zulassung und die länderübergreifende Corporate Governance und treibt strategische institutionelle Allianzen in europäischen und internationalen Bahnrechtsräumen voran. Ihre Arbeit stellt die vollständige Konformität mit den Vorgaben der Eisenbahnagentur der Europäischen Union (ERA) und den Regelwerken des Office of Rail and Road (ORR) sowie die grenzüberschreitende kommerzielle Abstimmung sicher.',
    },
  },
  {
    id: 'hendrik-vance',
    name: 'Dr. Hendrik Vance',
    role: {
      en: 'Managing Director, European Operations',
      de: 'Geschäftsführer, Europageschäft',
    },
    bio: {
      en: "Directing Zebrold's continental manufacturing and delivery ecosystem, Dr. Vance oversees the integration of German fabrication hubs in Kassel and Frankfurt. His leadership governs the physical commissioning, TSI certification, and commercial deployment of battery-electric multiple unit (BEMU) intercity fleets across European mainline corridors.",
      de: 'Dr. Vance leitet das kontinentaleuropäische Fertigungs- und Liefernetzwerk von Zebrold und verantwortet die Integration der deutschen Fertigungsstandorte in Kassel und Frankfurt. Unter seiner Leitung erfolgen Inbetriebnahme, TSI-Zertifizierung und kommerzieller Einsatz batterieelektrischer Intercity-Triebzugflotten (BEMU) auf europäischen Hauptstrecken.',
    },
  },
  {
    id: 'pooja-krishnamurthy',
    name: 'Pooja Krishnamurthy',
    role: {
      en: 'Chief Technology Officer, Embedded & RTOS',
      de: 'Chief Technology Officer, Embedded & RTOS',
    },
    bio: {
      en: "Leading Zebrold's computational engineering division, Pooja orchestrates the architecture of BM-RTOS—a deterministic, SIL-4 safety-critical operating kernel. Her teams across Bengaluru and Kassel pioneer real-time wayside telemetry, edge sensor fusion, and neuromorphic diagnostic models for autonomous rail operations.",
      de: 'Pooja leitet den Bereich Computational Engineering von Zebrold und verantwortet die Architektur von BM-RTOS – einem deterministischen, sicherheitskritischen Betriebssystemkern nach SIL-4. Ihre Teams in Bengaluru und Kassel entwickeln Echtzeit-Streckentelemetrie, Edge-Sensorfusion und neuromorphe Diagnosemodelle für den autonomen Bahnbetrieb.',
    },
  },
];

export const DOMAIN_LEADS = [
  {
    id: 'alistair-finch',
    name: 'Alistair Finch',
    role: {
      en: 'Chief Rolling Stock Architect & Aerodynamics',
      de: 'Leitung Fahrzeugarchitektur & Aerodynamik',
    },
    bio: {
      en: 'Directs aerodynamic profile optimization, drag reduction, and exterior structural synthesis across mainline trainsets to maximize operational energy efficiency.',
      de: 'Verantwortet die Optimierung aerodynamischer Profile, die Widerstandsreduzierung und die Gestaltung der Außenstruktur von Fernverkehrszügen für maximale Energieeffizienz im Betrieb.',
    },
  },
  {
    id: 'rajeshwari-nair',
    name: 'Dr. Rajeshwari Nair',
    role: {
      en: 'VP, Embedded Firmware & Traction Control',
      de: 'VP Embedded-Firmware & Traktionssteuerung',
    },
    bio: {
      en: 'Oversees microsecond-deterministic motor inverter sequencing and regenerative braking firmware protocols, guaranteeing sub-millisecond response loops.',
      de: 'Verantwortet die mikrosekundengenaue, deterministische Ansteuerung der Motorumrichter sowie Firmware-Protokolle für die Nutzbremsung mit Regelschleifen im Submillisekundenbereich.',
    },
  },
  {
    id: 'maximilian-weber',
    name: 'Maximilian Weber',
    role: {
      en: 'Head of Structural Dynamics & Bogie Systems',
      de: 'Leitung Strukturdynamik & Drehgestellsysteme',
    },
    bio: {
      en: 'Leads suspension resonance dampening, axle load distribution, and high-speed bogie structural integrity certification under stringent EN standards.',
      de: 'Verantwortet Resonanzdämpfung der Federung, Achslastverteilung und die Zertifizierung der strukturellen Integrität von Hochgeschwindigkeits-Drehgestellen nach strengen EN-Normen.',
    },
  },
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    role: {
      en: 'Director of SIL-4 Signalling & ETCS Homologation',
      de: 'Leitung SIL-4-Signaltechnik & ETCS-Zulassung',
    },
    bio: {
      en: 'Validates fail-safe trackside communications, interlocking interfaces, and ETCS Level 2 on-board conformity across multinational rail boundaries.',
      de: 'Validiert fehlersichere Streckenkommunikation, Stellwerksschnittstellen und die Konformität der ETCS-Level-2-Fahrzeugausrüstung über Ländergrenzen hinweg.',
    },
  },
  {
    id: 'florian-becker',
    name: 'Florian Becker',
    role: {
      en: 'Chief Mechanical Engineer & Modular Assembly',
      de: 'Leitung Maschinenbau & modulare Montage',
    },
    bio: {
      en: 'Architects precision modular chassis components and multi-car mechanical linkage systems across European fabrication sites in Kassel and Frankfurt.',
      de: 'Konzipiert modulare Präzisions-Fahrwerkskomponenten und mechanische Kupplungssysteme für Mehrwagenzüge an den europäischen Fertigungsstandorten Kassel und Frankfurt.',
    },
  },
  {
    id: 'vikramaditya-sen',
    name: 'Vikramaditya Sen',
    role: {
      en: 'Principal Scientist, Neuromorphic Rail Analytics',
      de: 'Principal Scientist, Neuromorphe Bahnanalytik',
    },
    bio: {
      en: 'Engineers event-based sensor networks and real-time spike-neural anomaly detectors for predictive axle bearing and wheel-rail interface condition monitoring.',
      de: 'Entwickelt ereignisbasierte Sensornetze und gepulste neuronale Echtzeit-Anomaliedetektoren für die vorausschauende Zustandsüberwachung von Achslagern und des Rad-Schiene-Kontakts.',
    },
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: {
      en: 'Lead Homologation Engineer, ERA & TSI Compliance',
      de: 'Lead Engineer Zulassung, ERA- & TSI-Konformität',
    },
    bio: {
      en: 'Coordinates safety case dossiers, statutory cross-border verification audits, and European Technical Specifications for Interoperability (TSI) conformity.',
      de: 'Koordiniert Sicherheitsnachweise, gesetzlich vorgeschriebene grenzüberschreitende Prüfaudits und die Konformität mit den Technischen Spezifikationen für die Interoperabilität (TSI).',
    },
  },
  {
    id: 'marcus-lindqvist',
    name: 'Marcus Lindqvist',
    role: {
      en: 'Principal Thermal Architect & Cryo-Cooling',
      de: 'Principal Architect Thermomanagement & Kryokühlung',
    },
    bio: {
      en: 'Designs advanced liquid-immersion thermal dissipation matrices and phase-change heat exchangers for high-density traction converter battery enclosures.',
      de: 'Entwickelt Immersionskühlsysteme und Phasenwechsel-Wärmetauscher für hochverdichtete Batteriegehäuse von Traktionsumrichtern.',
    },
  },
  {
    id: 'shruti-sengupta',
    name: 'Dr. Shruti Sengupta',
    role: {
      en: 'Head of RTOS Formal Verification & Math Methods',
      de: 'Leitung formale RTOS-Verifikation & mathematische Methoden',
    },
    bio: {
      en: 'Spearheads mathematical proof assertions, static analysis, and theorem-proving pipelines for BM-RTOS microkernel safety critical invariants.',
      de: 'Verantwortet mathematische Beweisführung, statische Analyse und Theorembeweis-Pipelines für die sicherheitskritischen Invarianten des BM-RTOS-Mikrokerns.',
    },
  },
  {
    id: 'klaus-reinhardt',
    name: 'Klaus Reinhardt',
    role: {
      en: 'Director of Power Electronics & SiC Inverters',
      de: 'Leitung Leistungselektronik & SiC-Umrichter',
    },
    bio: {
      en: 'Supervises wide-bandgap silicon carbide (SiC) switching architecture, achieving 99.2% electrical efficiency in continuous multi-megawatt draw cycles.',
      de: 'Verantwortet die Schaltarchitektur mit Wide-Bandgap-Halbleitern aus Siliziumkarbid (SiC) und erreicht 99,2 % elektrischen Wirkungsgrad im Dauerbetrieb im Multi-Megawatt-Bereich.',
    },
  },
  {
    id: 'tanvi-chhabra',
    name: 'Tanvi Chhabra',
    role: {
      en: 'Chief Telematics & Wayside Network Architect',
      de: 'Leitung Telematik & Streckennetz-Architektur',
    },
    bio: {
      en: 'Builds dual-redundant multi-bearer 5G-Rail and satellite wayside communication meshes, assuring uninterrupted telemetry in remote alpine conduits.',
      de: 'Baut doppelt redundante Multi-Bearer-Kommunikationsnetze aus 5G-Rail und Satellit entlang der Strecke auf und sichert so unterbrechungsfreie Telemetrie auch in abgelegenen Alpenkorridoren.',
    },
  },
  {
    id: 'henrik-blomqvist',
    name: 'Henrik Blomqvist',
    role: {
      en: 'Lead Brake System Specialist & Pneumatics',
      de: 'Lead Specialist Bremssysteme & Pneumatik',
    },
    bio: {
      en: 'Engineers electro-pneumatic blending and eddy-current retardation units engineered for zero-wear emergency deceleration across 200 km/h passenger corridors.',
      de: 'Entwickelt elektropneumatische Bremsmischung und Wirbelstrombremsen für verschleißfreie Notverzögerung auf Personenverkehrskorridoren mit 200 km/h.',
    },
  },
  {
    id: 'aris-thorne',
    name: 'Dr. Aris Thorne',
    role: {
      en: 'Senior Fellow, Energy Storage Chemistry & BMS',
      de: 'Senior Fellow, Speicherchemie & Batteriemanagement (BMS)',
    },
    bio: {
      en: 'Directs next-generation LFP and solid-state cell packaging chemistry, cycle-life degradation simulations, and high-rate rapid pantograph charging logic.',
      de: 'Verantwortet Zellchemie und Zell-Packaging der nächsten Generation für LFP- und Festkörperzellen, Simulationen der Zyklenalterung sowie die Ladelogik für die Schnellladung über den Stromabnehmer.',
    },
  },
  {
    id: 'meera-swaminathan',
    name: 'Meera Swaminathan',
    role: {
      en: 'Staff Autonomous Perception & Sensor Fusion Engineer',
      de: 'Staff Engineer autonome Wahrnehmung & Sensorfusion',
    },
    bio: {
      en: 'Develops long-range FMCW lidar and hyperspectral vision fusion algorithms, enabling forward obstacle detection through heavy snow, fog, and zero-light environments.',
      de: 'Entwickelt Fusionsalgorithmen für FMCW-Lidar mit großer Reichweite und hyperspektrale Bildverarbeitung – für zuverlässige Hinderniserkennung bei starkem Schneefall, Nebel und völliger Dunkelheit.',
    },
  },
  {
    id: 'stefan-holzer',
    name: 'Stefan Holzer',
    role: {
      en: 'Principal Acoustic & NVH Dynamics Engineer',
      de: 'Principal Engineer Akustik & NVH',
    },
    bio: {
      en: 'Spearheads vibro-acoustic dampening and wheel-shroud aerodynamic isolation, securing ultra-low interior decibel thresholds for long-haul passenger comfort.',
      de: 'Verantwortet vibroakustische Dämpfung und aerodynamische Radverkleidungen für besonders niedrige Innengeräuschpegel und hohen Fahrgastkomfort im Fernverkehr.',
    },
  },
  {
    id: 'lavanya-venkatesh',
    name: 'Lavanya Venkatesh',
    role: {
      en: 'Lead Cybersecurity Engineer, Rail OT Systems',
      de: 'Lead Engineer Cybersecurity, Bahn-OT-Systeme',
    },
    bio: {
      en: 'Implements zero-trust hardware security modules (HSMs) and IEC 62443 cyberdefense perimeters for train control and management systems (TCMS).',
      de: 'Implementiert Zero-Trust-Hardware-Sicherheitsmodule (HSMs) und Cyberabwehr nach IEC 62443 für Zugsteuerungs- und Managementsysteme (TCMS).',
    },
  },
  {
    id: 'christoph-bauer',
    name: 'Christoph Bauer',
    role: {
      en: 'Head of Lightweight Composite Materials',
      de: 'Leitung Leichtbau-Verbundwerkstoffe',
    },
    bio: {
      en: 'Oversees carbon-fiber reinforced polymer (CFRP) structural cab design, yielding 28% tare weight reduction while surpassing EN 15227 crashworthiness criteria.',
      de: 'Verantwortet die Konstruktion von Führerstandsstrukturen aus kohlenstofffaserverstärktem Kunststoff (CFK) – mit 28 % weniger Leergewicht bei Übererfüllung der Crashsicherheitsanforderungen nach EN 15227.',
    },
  },
  {
    id: 'farhan-qureshi',
    name: 'Farhan Qureshi',
    role: {
      en: 'Principal Systems Integration Engineer',
      de: 'Principal Engineer Systemintegration',
    },
    bio: {
      en: 'Harmonizes multi-vendor subsystem telematics, high-voltage buslines, and auxiliary hotel-load management into unified central vehicle controller topologies.',
      de: 'Führt Subsystem-Telematik verschiedener Hersteller, Hochspannungsleitungen und das Management der Bordnetzversorgung in einer einheitlichen zentralen Fahrzeugsteuerung zusammen.',
    },
  },
  {
    id: 'sophia-von-berg',
    name: 'Sophia Von Berg',
    role: {
      en: 'Lead Environmental Lifecycle & Circularity Specialist',
      de: 'Lead Specialist Umwelt-Lebenszyklus & Kreislaufwirtschaft',
    },
    bio: {
      en: 'Champions full cradle-to-cradle material traceability, guaranteeing 96% component recyclability across rolling stock decommissioning cycles.',
      de: 'Treibt die lückenlose Cradle-to-Cradle-Rückverfolgbarkeit von Materialien voran und sichert 96 % Recyclingfähigkeit der Komponenten bei der Außerdienststellung von Fahrzeugen.',
    },
  },
];
