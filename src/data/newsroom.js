import slideFleet from '../assets/highspeed_in_service.jpg';
import slideProduction from '../assets/production_line_noses.jpg';
import slideCorridor from '../assets/rail_catenary_corridor.jpg';

/* ══ Newsroom masthead carousel ══ */
export const newsroomSlides = [
  {
    image: slideFleet,
    tone: 'coral',
    alt: {
      en: 'Scolome high-speed trainset running at speed',
      de: 'Scolome-Hochgeschwindigkeitszug in voller Fahrt',
    },
    badge: { en: 'Newsroom & dispatches', de: 'Newsroom & Meldungen' },
    title: {
      en: 'Zebrold Scolome Global Rail Newsroom',
      de: 'Zebrold Scolome — globaler Bahn-Newsroom',
    },
    body: {
      en: 'Official press releases, fleet commissioning records, engineering breakthroughs and contract awards from across the programme.',
      de: 'Offizielle Pressemitteilungen, Inbetriebnahmen, technische Durchbrüche und Auftragsvergaben aus dem gesamten Programm.',
    },
  },
  {
    image: slideProduction,
    tone: 'amber',
    alt: {
      en: 'Row of trainset nose sections in the production hall',
      de: 'Reihe von Zugkopfsektionen in der Produktionshalle',
    },
    badge: { en: 'Innovation & fleet milestones', de: 'Innovation & Flotten-Meilensteine' },
    title: {
      en: 'Pioneering Ultra Speed Intelligent Rolling Stocks',
      de: 'Wegweisende intelligente Hochgeschwindigkeitsfahrzeuge',
    },
    body: {
      en: 'Precision-engineered aerodynamic rolling stock, battery-electric trainsets and next-generation mainline deployments.',
      de: 'Präzisionsgefertigte aerodynamische Schienenfahrzeuge, batterieelektrische Triebzüge und Einsätze der nächsten Generation.',
    },
  },
  {
    image: slideCorridor,
    tone: 'emerald',
    alt: {
      en: 'Electrified rail corridor with overhead catenary',
      de: 'Elektrifizierter Schienenkorridor mit Oberleitung',
    },
    badge: { en: 'Corridors & sustainability', de: 'Korridore & Nachhaltigkeit' },
    title: {
      en: 'Decarbonising Intercity Passenger Transit',
      de: 'Dekarbonisierung des Fernverkehrs',
    },
    body: {
      en: 'Modular electric and battery-hybrid trainsets designed in India and precision-engineered in Germany for harsh climatic envelopes.',
      de: 'Modulare elektrische und batteriehybride Triebzüge, entworfen in Indien und präzisionsgefertigt in Deutschland für harte Klimabedingungen.',
    },
  },
];

/**
 * ⚠ COMMERCIAL FIGURES — PLACEHOLDER
 * Every number below is illustrative and has NOT been audited or signed off.
 * Replace with figures confirmed by Investor Relations before this page goes live,
 * and only then describe them as audited.
 */
export const FINANCIALS_ARE_PLACEHOLDER = true;

export const metrics = [
  {
    id: 'backlog',
    label: { en: 'Total order book backlog', de: 'Gesamter Auftragsbestand' },
    value: '€4.85bn',
    delta: { en: '+24% YoY', de: '+24 % ggü. Vj.' },
    note: {
      en: 'Multi-year deliveries across European and APAC corridors through 2032.',
      de: 'Mehrjährige Lieferungen auf europäischen und APAC-Korridoren bis 2032.',
    },
  },
  {
    id: 'revenue',
    label: { en: 'Annual rolling stock revenue', de: 'Jahresumsatz Schienenfahrzeuge' },
    value: '€1.62bn',
    period: { en: 'FY 2025/26', de: 'GJ 2025/26' },
    note: {
      en: 'Turnover from electric and battery-hybrid intercity trainsets.',
      de: 'Umsatz aus elektrischen und batteriehybriden Fernverkehrszügen.',
    },
  },
  {
    id: 'digital',
    label: { en: 'Digital transit & AI systems', de: 'Digitale Systeme & KI' },
    value: '€580m',
    delta: { en: '+38% YoY', de: '+38 % ggü. Vj.' },
    note: {
      en: 'Signalling, digital cockpits and trackside sensor arrays.',
      de: 'Signaltechnik, digitale Führerstände und streckenseitige Sensorik.',
    },
  },
  {
    id: 'margin',
    label: { en: 'Operating margin (EBITDA)', de: 'Operative Marge (EBITDA)' },
    value: '18.4%',
    period: { en: 'Group metric', de: 'Konzernkennzahl' },
    note: {
      en: 'Cost engineering and a vertically integrated silicon-carbide chain.',
      de: 'Kostenoptimierung und vertikal integrierte Siliziumkarbid-Kette.',
    },
  },
];

export const segments = [
  {
    id: 'rolling-stock',
    label: {
      en: 'High-speed & intercity rolling stock',
      de: 'Hochgeschwindigkeits- und Fernverkehrsfahrzeuge',
    },
    pct: 45,
    value: '€729m',
  },
  {
    id: 'epc',
    label: {
      en: 'Turnkey EPC, permanent way & electrification',
      de: 'Schlüsselfertige EPC, Oberbau & Elektrifizierung',
    },
    pct: 25,
    value: '€405m',
  },
  {
    id: 'digital',
    label: {
      en: 'Digital rail, signalling & AI telemetry',
      de: 'Digitale Schiene, Signaltechnik & KI-Telemetrie',
    },
    pct: 18,
    value: '€291m',
  },
  {
    id: 'services',
    label: {
      en: 'Lifecycle maintenance & depot services',
      de: 'Instandhaltung über den Lebenszyklus & Depotservice',
    },
    pct: 12,
    value: '€195m',
  },
];

export const regions = [
  {
    id: 'europe',
    name: { en: 'Europe corridor', de: 'Korridor Europa' },
    detail: { en: 'Germany, UK, Scandinavia & France', de: 'Deutschland, UK, Skandinavien & Frankreich' },
    pct: '52%',
    value: '€842.4m',
  },
  {
    id: 'apac',
    name: { en: 'Asia-Pacific', de: 'Asien-Pazifik' },
    detail: { en: 'India R&D centre, Australia & Middle East', de: 'F&E-Zentrum Indien, Australien & Naher Osten' },
    pct: '28%',
    value: '€453.6m',
  },
  {
    id: 'americas',
    name: { en: 'Americas', de: 'Amerika' },
    detail: { en: 'Canadian corridors & US cross-border lines', de: 'Kanadische Korridore & grenzüberschreitende US-Strecken' },
    pct: '20%',
    value: '€324.0m',
  },
];

/**
 * Investor documents. `href` is intentionally null — no PDFs have been supplied,
 * so each row offers a request route rather than a dead download link.
 * Drop the files into /public and set `href` to enable direct download.
 */
export const documents = [
  {
    id: 'q3-interim',
    title: { en: 'Q3 2026 interim statement', de: 'Zwischenbericht Q3 2026' },
    meta: { en: 'Published 12 Aug 2026', de: 'Veröffentlicht 12. Aug. 2026' },
    href: null,
  },
  {
    id: 'annual-report',
    title: { en: 'Annual report & ESG impact review', de: 'Geschäftsbericht & ESG-Bericht' },
    meta: { en: 'Full year 2025/26', de: 'Gesamtjahr 2025/26' },
    href: null,
  },
  {
    id: 'delivery-pipeline',
    title: { en: 'Scolome fleet delivery pipeline 2026–32', de: 'Scolome-Lieferplan 2026–32' },
    meta: { en: 'Programme release', de: 'Programmveröffentlichung' },
    href: null,
  },
];

export const calendar = [
  {
    id: 'cmd',
    month: { en: 'Oct', de: 'Okt' },
    day: '28',
    title: { en: 'Capital Markets Day 2026', de: 'Kapitalmarkttag 2026' },
    detail: { en: 'Frankfurt am Main · in person & live webcast', de: 'Frankfurt am Main · vor Ort & Live-Webcast' },
  },
  {
    id: 'q3-call',
    month: { en: 'Nov', de: 'Nov' },
    day: '14',
    title: { en: 'Q3 2026 earnings conference call', de: 'Telefonkonferenz zu den Q3-Zahlen 2026' },
    detail: { en: 'Global webcast & analyst Q&A', de: 'Weltweiter Webcast & Analysten-Q&A' },
  },
  {
    id: 'green-bond',
    month: { en: 'Jan', de: 'Jan' },
    day: '12',
    title: { en: 'Decarbonisation & green bond briefing', de: 'Briefing zu Dekarbonisierung & Green Bond' },
    detail: { en: 'Scolome sustainable rail framework', de: 'Scolome-Rahmenwerk für nachhaltige Schiene' },
  },
];
