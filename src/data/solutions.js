import solRollingStock from '../assets/rolling_stock_highspeed.jpg';
import solSignalling from '../assets/rail_signalling_dwarf.jpg';
import solComponents from '../assets/bogie_components_production.jpg';
import solInfrastructure from '../assets/rail_catenary_corridor.jpg';
import solDigitalRail from '../assets/digital_rail_sunset_train.jpg';
import solServices from '../assets/depot_maintenance_bay.webp';

/** The "complete range of mobility solutions" rail on the homepage. */
export const solutions = [
  {
    id: 'rolling-stock',
    image:
      solRollingStock,
    alt: {
      en: 'High-speed electric passenger train on mainline railway tracks',
      de: 'Hochgeschwindigkeits-Elektrotriebzug auf der Hauptstrecke',
    },
    name: { en: 'Rolling stock', de: 'Schienenfahrzeuge' },
    blurb: {
      en: 'High-speed EMUs, battery-electric regional fleets and metro trainsets.',
      de: 'Hochgeschwindigkeits-Triebzüge, batterieelektrische Regionalflotten und Metro-Fahrzeuge.',
    },
    path: '/rolling-stock',
  },
  {
    id: 'signalling',
    image:
      solSignalling,
    alt: {
      en: 'Trackside railway dwarf signal illuminated at dusk',
      de: 'Gleisseitiges Signal mit Signalbegriff in der Dämmerung',
    },
    name: { en: 'Signalling', de: 'Signaltechnik' },
    blurb: {
      en: 'ETCS Level 2/3, CBTC and interlocking systems certified to SIL-4.',
      de: 'ETCS Level 2/3, CBTC und Stellwerkssysteme, zertifiziert nach SIL-4.',
    },
    path: '/signalling',
  },
  {
    id: 'components',
    image:
      solComponents,
    alt: {
      en: 'High-speed train bogie frames and wheelsets in manufacturing workshop',
      de: 'Drehgestellrahmen und Radsätze in der Fertigungshalle',
    },
    name: { en: 'Components', de: 'Komponenten' },
    blurb: {
      en: 'Bogies, traction drives, couplers and additively manufactured structures.',
      de: 'Drehgestelle, Traktionsantriebe, Kupplungen und additiv gefertigte Strukturen.',
    },
    path: '/components',
  },
  {
    id: 'infrastructure',
    image:
      solInfrastructure,
    alt: {
      en: 'Electrified rail corridor with overhead catenary',
      de: 'Elektrifizierter Schienenkorridor mit Oberleitung',
    },
    name: { en: 'Infrastructure', de: 'Infrastruktur' },
    blurb: {
      en: 'Electrification, depots and freight corridor modernisation programmes.',
      de: 'Elektrifizierung, Depots und Modernisierung von Güterkorridoren.',
    },
    path: '/infrastructure',
  },
  {
    id: 'digital-rail',
    image:
      solDigitalRail,
    alt: {
      en: 'Zebrold high-speed train travelling through landscape at sunset',
      de: 'Zebrold Hochgeschwindigkeitszug auf der Strecke bei Sonnenuntergang',
    },
    name: { en: 'Digital rail', de: 'Digitale Schiene' },
    path: '/digital-rail',
    blurb: {
      en: 'Predictive telemetry, traffic management and automated train operation.',
      de: 'Prädiktive Telemetrie, Verkehrsmanagement und automatisierter Zugbetrieb.',
    },
  },
  {
    id: 'services',
    image:
      solServices,
    alt: {
      en: 'Trainset standing in a maintenance depot bay',
      de: 'Triebzug in einem Wartungsstand des Depots',
    },
    name: { en: 'Services', de: 'Service' },
    path: '/services',
    blurb: {
      en: 'Full-lifecycle maintenance, overhaul and fleet availability contracts.',
      de: 'Wartung über den gesamten Lebenszyklus, Überholung und Verfügbarkeitsverträge.',
    },
  },
];
