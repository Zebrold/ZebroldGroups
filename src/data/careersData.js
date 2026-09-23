import trainImg from '../assets/scolome_hero.jpg';
import bogieImg from '../assets/high_speed_bogie.jpg';
import cabinImg from '../assets/train_cockpit_digital.jpg';

/* ══ Hero carousel on /careers ══ */
export const careersSlides = [
  {
    image: trainImg,
    tone: 'amber',
    alt: {
      en: 'Scolome high-speed trainset at speed on open track',
      de: 'Scolome-Hochgeschwindigkeitszug auf freier Strecke',
    },
    badge: { en: 'Careers & global talent', de: 'Karriere & internationale Talente' },
    title: {
      en: 'Build the Next Century of Rail Mobility',
      de: 'Bauen Sie das nächste Jahrhundert der Schienenmobilität',
    },
    body: {
      en: 'Join international engineering teams across Frankfurt and Bengaluru pioneering zero-emission high-speed rolling stock, predictive autonomous telemetry and aerodynamic trainsets.',
      de: 'Werden Sie Teil internationaler Ingenieurteams in Frankfurt und Bengaluru, die emissionsfreie Hochgeschwindigkeitsfahrzeuge, prädiktive autonome Telemetrie und aerodynamische Triebzüge entwickeln.',
    },
    cta: { en: 'Explore open roles', de: 'Offene Stellen ansehen' },
    meta: {
      en: '13 active positions across 4 technical hubs',
      de: '13 offene Positionen an 4 Technikstandorten',
    },
  },
  {
    image: bogieImg,
    tone: 'coral',
    alt: {
      en: 'EN 13749 high-speed bogie assembly with air suspension on assembly line',
      de: 'Hochgeschwindigkeits-Drehgestell nach EN 13749 auf der Montagelinie',
    },
    badge: { en: 'German precision · Indian innovation', de: 'Deutsche Präzision · indische Innovation' },
    title: {
      en: 'High-Speed Bogies & Decarbonised Traction',
      de: 'Hochgeschwindigkeits-Drehgestelle & dekarbonisierte Traktion',
    },
    body: {
      en: 'Work directly with senior mechanical specialists, aerodynamicists and mechatronic engineers on bogie dynamics compliant with EN 13749 and the TSI framework.',
      de: 'Arbeiten Sie direkt mit erfahrenen Maschinenbau-Spezialisten, Aerodynamikern und Mechatronik-Ingenieuren an Drehgestelldynamik nach EN 13749 und TSI.',
    },
    cta: { en: 'Mechanical & traction roles', de: 'Stellen in Mechanik & Traktion' },
    meta: null,
  },
  {
    image: cabinImg,
    tone: 'sky',
    alt: {
      en: 'Ergonomic high-speed train digital cockpit architecture',
      de: 'Ergonomische digitale Cockpit-Architektur für Hochgeschwindigkeitszüge',
    },
    badge: { en: 'Digital transit · autonomous telemetry', de: 'Digitaler Verkehr · autonome Telemetrie' },
    title: {
      en: 'Redefining the Passenger & Operator Experience',
      de: 'Das Fahrgast- und Bedienerlebnis neu definiert',
    },
    body: {
      en: 'From real-time sensor analytics to ergonomic cockpit architecture, our software and UX teams build unified digital ecosystems for mainline operators across Europe and APAC.',
      de: 'Von Echtzeit-Sensoranalytik bis zur ergonomischen Cockpit-Architektur: Unsere Software- und UX-Teams bauen einheitliche digitale Ökosysteme für Betreiber in Europa und APAC.',
    },
    cta: { en: 'Software & digital rail roles', de: 'Stellen in Software & digitaler Schiene' },
    meta: null,
  },
];

/* ══ Filter categories ══ */
export const JOB_CATEGORIES = [
  { id: 'software', label: { en: 'Software Development', de: 'Softwareentwicklung' } },
  { id: 'hardware', label: { en: 'Hardware Engineering', de: 'Hardwareentwicklung' } },
  { id: 'manufacturing', label: { en: 'Manufacturing & Production', de: 'Fertigung & Produktion' } },
  { id: 'internships', label: { en: 'Internships & Trainees', de: 'Praktika & Trainees' } },
];

export const RELOCATION_SITES = [
  { id: 'kassel', label: { en: 'Kassel bogie manufacturing facility', de: 'Drehgestellfertigung Kassel' } },
  { id: 'bengaluru', label: { en: 'Bengaluru R&D software centre', de: 'F&E-Softwarezentrum Bengaluru' } },
  { id: 'hyderabad', label: { en: 'Hyderabad design facility', de: 'Designzentrum Hyderabad' } },
  { id: 'frankfurt', label: { en: 'Frankfurt am Main headquarters', de: 'Hauptsitz Frankfurt am Main' } },
];

/* ══ Open roles ══ */
export const jobs = [
  /* ── Software Development ── */
  {
    id: 'telemetry-engineer',
    ref: 'ZEB-SW-201',
    category: 'software',
    location: { en: 'Bengaluru R&D bureau, India', de: 'F&E-Büro Bengaluru, Indien' },
    salary: '€65,000 – €92,000',
    terms: { en: 'Full-time · Hybrid', de: 'Vollzeit · Hybrid' },
    title: {
      en: 'Staff Distributed Systems & Telemetry Engineer',
      de: 'Staff Engineer Verteilte Systeme & Telemetrie',
    },
    summary: {
      en: 'Architect ultra-low-latency event streaming pipelines, time-series storage and edge-to-cloud telemetry sync for cross-continental high-speed fleets.',
      de: 'Konzipieren Sie Event-Streaming-Pipelines mit minimaler Latenz, Zeitreihenspeicher und Edge-zu-Cloud-Telemetriesynchronisation für kontinentübergreifende Hochgeschwindigkeitsflotten.',
    },
    requirements: {
      en: [
        'Production experience with Kafka, Pulsar or an equivalent streaming backbone',
        'Time-series storage at scale — ClickHouse, TimescaleDB or similar',
        'Comfort reasoning about partial connectivity and out-of-order ingest',
        'Go, Rust or modern Java in a distributed context',
      ],
      de: [
        'Produktionserfahrung mit Kafka, Pulsar oder vergleichbarem Streaming-Backbone',
        'Zeitreihenspeicher im großen Maßstab — ClickHouse, TimescaleDB oder ähnlich',
        'Sicherer Umgang mit unterbrochener Konnektivität und ungeordneter Datenaufnahme',
        'Go, Rust oder modernes Java im verteilten Umfeld',
      ],
    },
  },
  {
    id: 'firmware-architect',
    ref: 'ZEB-SW-115',
    category: 'software',
    location: { en: 'Frankfurt am Main, Germany', de: 'Frankfurt am Main, Deutschland' },
    salary: '€115,000 – €135,000',
    terms: { en: 'Full-time · Hybrid', de: 'Vollzeit · Hybrid' },
    title: {
      en: 'Lead Embedded Software & Firmware Architect (RTOS / C++)',
      de: 'Lead-Architekt/in Embedded Software & Firmware (RTOS / C++)',
    },
    summary: {
      en: 'Spearhead deterministic real-time firmware architecture for traction control units, braking supervision and SIL-4 railway safety protocols.',
      de: 'Verantworten Sie die deterministische Echtzeit-Firmwarearchitektur für Traktionssteuergeräte, Bremsüberwachung und SIL-4-Sicherheitsprotokolle.',
    },
    requirements: {
      en: [
        'Deep C++ and RTOS experience in a safety-critical context',
        'EN 50128, IEC 61508 or DO-178C lifecycle practice',
        'Understanding of deterministic scheduling and watchdog design',
        'Written English suitable for certification evidence',
      ],
      de: [
        'Fundierte C++- und RTOS-Erfahrung im sicherheitskritischen Umfeld',
        'Praxis mit Lebenszyklen nach EN 50128, IEC 61508 oder DO-178C',
        'Verständnis für deterministisches Scheduling und Watchdog-Design',
        'Englisch in Wort und Schrift für Zertifizierungsnachweise',
      ],
    },
  },
  {
    id: 'perception-specialist',
    ref: 'ZEB-SW-089',
    category: 'software',
    location: { en: 'Bengaluru / Hyderabad, India', de: 'Bengaluru / Hyderabad, Indien' },
    salary: '€58,000 – €80,000',
    terms: { en: 'Full-time · R&D centre', de: 'Vollzeit · F&E-Zentrum' },
    title: {
      en: 'Computer Vision & Autonomous Perception Specialist',
      de: 'Spezialist/in Computer Vision & autonome Wahrnehmung',
    },
    summary: {
      en: 'Develop neural models and multi-spectral sensor fusion pipelines for real-time track obstacle detection and wayside infrastructure monitoring.',
      de: 'Entwickeln Sie neuronale Modelle und multispektrale Sensorfusion für die Echtzeit-Hinderniserkennung und die Überwachung streckenseitiger Infrastruktur.',
    },
    requirements: {
      en: [
        'Python and C++ with a computer-vision or sensor-fusion background',
        'Experience validating models against field-collected data',
        'Interest in the evidence standards that gate autonomous intervention',
      ],
      de: [
        'Python und C++ mit Hintergrund in Computer Vision oder Sensorfusion',
        'Erfahrung in der Validierung von Modellen anhand von Felddaten',
        'Interesse an Nachweisstandards für autonome Eingriffe',
      ],
    },
  },

  /* ── Hardware Engineering ── */
  {
    id: 'sic-inverter-lead',
    ref: 'ZEB-HW-042',
    category: 'hardware',
    location: { en: 'Frankfurt am Main, Germany', de: 'Frankfurt am Main, Deutschland' },
    salary: '€118,000 – €138,000',
    terms: { en: 'Full-time · Hybrid', de: 'Vollzeit · Hybrid' },
    title: {
      en: 'Senior Silicon Carbide (SiC) Power Electronics & Inverter Lead',
      de: 'Senior Lead Leistungselektronik & Siliziumkarbid-Umrichter',
    },
    summary: {
      en: 'Design high-efficiency 3.3 kV SiC traction converters, planar magnetics and advanced thermal cooling modules for high-speed EMU trainsets.',
      de: 'Entwerfen Sie hocheffiziente 3,3-kV-SiC-Traktionsumrichter, planare Magnetik und fortschrittliche Kühlmodule für Hochgeschwindigkeits-Triebzüge.',
    },
    requirements: {
      en: [
        'Wide-bandgap device experience in traction or EV powertrain',
        'Familiarity with EN 50155 and EN 50124 insulation coordination',
        'Comfortable in a lab with double-pulse and thermal-cycling rigs',
      ],
      de: [
        'Erfahrung mit Wide-Bandgap-Bauelementen in Traktion oder E-Antrieb',
        'Kenntnisse in EN 50155 und Isolationskoordination nach EN 50124',
        'Sicher im Labor mit Doppelpuls- und Thermowechsel-Prüfständen',
      ],
    },
  },
  {
    id: 'pcb-design-engineer',
    ref: 'ZEB-HW-077',
    category: 'hardware',
    location: { en: 'Hyderabad design facility, India', de: 'Designzentrum Hyderabad, Indien' },
    salary: '€60,000 – €84,000',
    terms: { en: 'Full-time · Design hub', de: 'Vollzeit · Designzentrum' },
    title: {
      en: 'Principal Hardware & High-Speed PCB Design Engineer',
      de: 'Principal Engineer Hardware & High-Speed-Leiterplattendesign',
    },
    summary: {
      en: 'Lead multi-layer high-speed digital circuit design, signal integrity simulation, EMC/EMI hardening and ruggedised packaging for onboard rail compute.',
      de: 'Verantworten Sie mehrlagiges High-Speed-Digitaldesign, Signalintegritätssimulation, EMV-Härtung und robuste Gehäuse für Bordrechner.',
    },
    requirements: {
      en: [
        'Altium or Cadence at multi-layer, controlled-impedance level',
        'Signal integrity and EMC simulation practice',
        'Experience with rolling stock or automotive environmental qualification',
      ],
      de: [
        'Altium oder Cadence auf Mehrlagen- und Impedanzkontrollniveau',
        'Praxis in Signalintegritäts- und EMV-Simulation',
        'Erfahrung mit Umweltqualifikation im Schienen- oder Fahrzeugbau',
      ],
    },
  },
  {
    id: 'bms-systems-engineer',
    ref: 'ZEB-HW-103',
    category: 'hardware',
    location: { en: 'Frankfurt / Kassel, Germany', de: 'Frankfurt / Kassel, Deutschland' },
    salary: '€105,000 – €125,000',
    terms: { en: 'Full-time · Hybrid', de: 'Vollzeit · Hybrid' },
    title: {
      en: 'BMS & Battery Pack Hardware Systems Engineer',
      de: 'Systemingenieur/in BMS & Batteriepaket-Hardware',
    },
    summary: {
      en: 'Develop modular lithium-titanate high-voltage enclosures, integrated cell monitoring circuitry and automated isolation fail-safes for zero-emission propulsion.',
      de: 'Entwickeln Sie modulare Lithium-Titanat-Hochvoltgehäuse, integrierte Zellüberwachung und automatisierte Isolationsabschaltungen für emissionsfreien Antrieb.',
    },
    requirements: {
      en: [
        'High-voltage battery system design experience',
        'Cell monitoring IC and isolation monitoring practice',
        'Working knowledge of EN 50155 and relevant fire standards',
      ],
      de: [
        'Erfahrung in der Auslegung von Hochvolt-Batteriesystemen',
        'Praxis mit Zellüberwachungs-ICs und Isolationsüberwachung',
        'Fundierte Kenntnisse der EN 50155 und einschlägiger Brandschutznormen',
      ],
    },
  },

  /* ── Manufacturing & Production ── */
  {
    id: 'bogie-assembly-head',
    ref: 'ZEB-MFG-031',
    category: 'manufacturing',
    location: { en: 'Kassel manufacturing facility, Germany', de: 'Fertigungswerk Kassel, Deutschland' },
    salary: '€125,000 – €145,000',
    terms: { en: 'Full-time · On-site plant', de: 'Vollzeit · Vor Ort im Werk' },
    title: {
      en: 'Head of High-Precision Bogie Assembly & Quality Assurance',
      de: 'Leitung Präzisionsmontage Drehgestelle & Qualitätssicherung',
    },
    summary: {
      en: 'Direct plant lines for forged alloy wheelsets, air suspension dampers, axle press fitting and laser metrology inspection protocols.',
      de: 'Leiten Sie Fertigungslinien für geschmiedete Radsätze, Luftfederdämpfer, Achspressverbände und Laser-Messprotokolle.',
    },
    requirements: {
      en: [
        'Heavy manufacturing leadership in rail, automotive or aerospace',
        'Practical grasp of GD&T and laser metrology',
        'Track record closing out deviations at the causing station',
      ],
      de: [
        'Führungserfahrung in der Schwerfertigung (Schiene, Automobil oder Luftfahrt)',
        'Praktisches Verständnis von Form- und Lagetoleranzen sowie Lasermesstechnik',
        'Nachweisliche Abstellung von Abweichungen an der verursachenden Station',
      ],
    },
  },
  {
    id: 'robotic-welding-lead',
    ref: 'ZEB-MFG-064',
    category: 'manufacturing',
    location: { en: 'Kassel manufacturing plant, Germany', de: 'Fertigungswerk Kassel, Deutschland' },
    salary: '€95,000 – €115,000',
    terms: { en: 'Full-time · Manufacturing unit', de: 'Vollzeit · Fertigungseinheit' },
    title: {
      en: 'Robotic Welding & Precision Tooling Lead',
      de: 'Leitung Roboterschweißen & Präzisionswerkzeugbau',
    },
    summary: {
      en: 'Supervise automated laser seam welding cells, custom jig fixturing and non-destructive ultrasonic testing for extruded aluminium car bodies.',
      de: 'Verantworten Sie automatisierte Laserschweißzellen, Sondervorrichtungen und zerstörungsfreie Ultraschallprüfung für Aluminium-Wagenkästen.',
    },
    requirements: {
      en: [
        'Robotic welding cell programming and process ownership',
        'EN 15085 welding certification context',
        'Phased-array ultrasonic testing familiarity',
      ],
      de: [
        'Programmierung und Prozessverantwortung für Roboterschweißzellen',
        'Kontext der Schweißzertifizierung EN 15085',
        'Vertrautheit mit Phased-Array-Ultraschallprüfung',
      ],
    },
  },
  {
    id: 'production-director',
    ref: 'ZEB-MFG-090',
    category: 'manufacturing',
    location: { en: 'Frankfurt / Kassel, Germany', de: 'Frankfurt / Kassel, Deutschland' },
    salary: '€145,000 – €175,000',
    terms: { en: 'Full-time · Executive', de: 'Vollzeit · Führungsebene' },
    title: {
      en: 'Director of Production Operations & Mainline Homologation',
      de: 'Direktor/in Produktionsbetrieb & Streckenzulassung',
    },
    summary: {
      en: 'Coordinate end-to-end multi-facility trainset rollout, production takt times, supply chain vendor auditing and TSI factory acceptance certification.',
      de: 'Koordinieren Sie den werksübergreifenden Serienanlauf, Produktionstaktzeiten, Lieferantenaudits und die TSI-Werksabnahme.',
    },
    requirements: {
      en: [
        'Multi-site production leadership at programme scale',
        'Direct experience with TSI or equivalent authorisation regimes',
        'Supplier audit and escalation ownership',
      ],
      de: [
        'Standortübergreifende Produktionsleitung auf Programmebene',
        'Direkte Erfahrung mit TSI oder vergleichbaren Zulassungsregimen',
        'Verantwortung für Lieferantenaudits und Eskalationen',
      ],
    },
  },

  /* ── Internships & Trainees ── */
  {
    id: 'intern-embedded',
    ref: 'ZEB-INT-001',
    category: 'internships',
    location: { en: 'Bengaluru / Hyderabad, India', de: 'Bengaluru / Hyderabad, Indien' },
    salary: '₹45,000 – ₹60,000 / mo',
    terms: { en: '6–12 months · Internship', de: '6–12 Monate · Praktikum' },
    title: {
      en: 'Graduate Trainee / Intern — Embedded Software & Edge Computing',
      de: 'Trainee / Praktikum — Embedded Software & Edge Computing',
    },
    summary: {
      en: 'Hands-on rotation in Linux kernel driver debugging, CANopen bus telemetry drivers and automated software-in-the-loop test execution.',
      de: 'Praxisrotation in Linux-Kerneltreiber-Debugging, CANopen-Telemetrietreibern und automatisierter Software-in-the-Loop-Testausführung.',
    },
    requirements: {
      en: [
        'Final-year or recent graduate in CS, ECE or a related discipline',
        'C and Linux fundamentals',
        'Curiosity about hardware you can put your hands on',
      ],
      de: [
        'Abschlussjahr oder kürzlicher Abschluss in Informatik, ECE oder verwandtem Fach',
        'Grundlagen in C und Linux',
        'Neugier auf Hardware zum Anfassen',
      ],
    },
  },
  {
    id: 'intern-hardware',
    ref: 'ZEB-INT-002',
    category: 'internships',
    location: { en: 'Frankfurt am Main / Kassel, Germany', de: 'Frankfurt am Main / Kassel, Deutschland' },
    salary: '€2,100 – €2,500 / mo',
    terms: { en: '6 months · Internship', de: '6 Monate · Praktikum' },
    title: {
      en: 'Engineering Intern — Hardware Design & Power Electronics',
      de: 'Praktikum Technik — Hardwaredesign & Leistungselektronik',
    },
    summary: {
      en: 'Support lab testing of silicon carbide switches, gate driver thermal performance, test bench harness wiring and oscilloscope waveform analysis.',
      de: 'Unterstützen Sie Labortests von Siliziumkarbid-Schaltern, Gate-Treiber-Thermik, Prüfstandsverkabelung und Oszilloskop-Signalanalyse.',
    },
    requirements: {
      en: [
        'Electrical engineering student in an advanced semester',
        'Basic lab instrumentation confidence',
        'German or English working proficiency',
      ],
      de: [
        'Studium der Elektrotechnik im fortgeschrittenen Semester',
        'Grundsicherheit im Umgang mit Labormesstechnik',
        'Deutsch- oder Englischkenntnisse auf Arbeitsniveau',
      ],
    },
  },
  {
    id: 'intern-manufacturing',
    ref: 'ZEB-INT-003',
    category: 'internships',
    location: { en: 'Kassel heavy production unit, Germany', de: 'Schwerfertigung Kassel, Deutschland' },
    salary: '€2,000 – €2,400 / mo',
    terms: { en: '6 months · Plant internship', de: '6 Monate · Werkspraktikum' },
    title: {
      en: 'Manufacturing & Mechatronics Intern',
      de: 'Praktikum Fertigung & Mechatronik',
    },
    summary: {
      en: 'Assist bogie manufacturing supervisors with CMM calibration, precision torque validation and assembly floor digital workflows.',
      de: 'Unterstützen Sie die Fertigungsleitung bei KMG-Kalibrierung, Drehmomentvalidierung und digitalen Montageabläufen.',
    },
    requirements: {
      en: [
        'Mechanical or mechatronics student in an advanced semester',
        'Interest in metrology and shop-floor process',
        'German working proficiency preferred',
      ],
      de: [
        'Studium Maschinenbau oder Mechatronik im fortgeschrittenen Semester',
        'Interesse an Messtechnik und Fertigungsprozessen',
        'Deutschkenntnisse auf Arbeitsniveau bevorzugt',
      ],
    },
  },
  {
    id: 'intern-navigation',
    ref: 'ZEB-INT-004',
    category: 'internships',
    location: { en: 'Bengaluru / Hyderabad, India', de: 'Bengaluru / Hyderabad, Indien' },
    salary: '₹50,000 – ₹65,000 / mo',
    terms: { en: '6–12 months · Research', de: '6–12 Monate · Forschung' },
    title: {
      en: 'Autonomous Navigation & Telemetry Research Intern',
      de: 'Forschungspraktikum Autonome Navigation & Telemetrie',
    },
    summary: {
      en: 'Collaborate with research scientists on synthetic sensor data generation, point cloud labelling pipelines and high-speed rail trajectory simulation.',
      de: 'Arbeiten Sie mit Forschenden an synthetischer Sensordatengenerierung, Punktwolken-Labeling und Trajektoriensimulation für Hochgeschwindigkeitszüge.',
    },
    requirements: {
      en: [
        'Python plus exposure to a deep-learning framework',
        'Some background in robotics, SLAM or geometry',
        'Willingness to work with messy real-world data',
      ],
      de: [
        'Python sowie Erfahrung mit einem Deep-Learning-Framework',
        'Hintergrund in Robotik, SLAM oder Geometrie',
        'Bereitschaft zur Arbeit mit unsauberen Realdaten',
      ],
    },
  },
];

/** Look up a role by its public reference code (used by /careers/apply?ref=…). */
export function findJobByRef(ref) {
  return jobs.find((job) => job.ref === ref) ?? null;
}
