import slideFleet from '../assets/highspeed_in_service.jpg';
import slideProduction from '../assets/production_line_noses.jpg';
import slideCorridor from '../assets/rail_catenary_corridor.jpg';
import content from '../content/siteContent.json';

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
      en: 'Zebrold IHL Global Rail Newsroom',
      de: 'Zebrold IHL — globaler Bahn-Newsroom',
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

/* Everything below is edited from /admin — the source of truth is src/content/siteContent.json. */
export const { metrics, segments, regions, documents, calendar, calendarPeriod } = content;
