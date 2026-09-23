import heroBrandTrain from '../assets/scolome_hero.jpg';
import heroInService from '../assets/highspeed_in_service.jpg';
import heroCabin from '../assets/tram_carbody_shop.jpg';
import heroBogie from '../assets/high_speed_bogie.jpg';
import heroCockpit from '../assets/train_cockpit_digital.jpg';

/**
 * Homepage hero slides with exact high-resolution imagery and copy from the reference design.
 * Each `tone` maps to a badge colour class in HeroCarousel.css (coral | amber | sky | violet | emerald).
 */
export const heroSlides = [
  {
    image:
      heroInService,
    tone: 'amber',
    alt: {
      en: 'Red high-speed trainset running at speed through wooded countryside',
      de: 'Roter Hochgeschwindigkeitszug in voller Fahrt durch bewaldete Landschaft',
    },
    badge: { en: 'TRACTION EXCELLENCE', de: 'TRAKTIONSEXZELLENZ' },
    title: {
      en: 'Precision High Speed Engineering',
      de: 'Präzise Hochgeschwindigkeitstechnik',
    },
    body: {
      en: 'Aerodynamic engineering and SiC traction inverters achieving 360+ km/h with zero emissions.',
      de: 'Aerodynamik und SiC-Traktionsumrichter erreichen über 360 km/h mit null Emissionen.',
    },
  },
  {
    image:
      heroBrandTrain,
    tone: 'coral',
    alt: {
      en: 'Scolome high-speed trainset in Zebrold livery running at speed',
      de: 'Scolome-Hochgeschwindigkeitszug in Zebrold-Lackierung in voller Fahrt',
    },
    badge: { en: 'NEXT-GEN HIGH SPEED', de: 'HOCHGESCHWINDIGKEIT DER NÄCHSTEN GENERATION' },
    title: {
      en: 'Pioneering Ultra Speed Intelligent Rolling Stocks',
      de: 'Wegweisende intelligente Hochgeschwindigkeits-Schienenfahrzeuge',
    },
    body: {
      en: 'Precision-engineered aerodynamic rolling stock designed for sustainable high-capacity rail transport across continents.',
      de: 'Präzisionsgefertigte aerodynamische Schienenfahrzeuge für nachhaltigen Hochkapazitätsverkehr über Kontinente hinweg.',
    },
  },
  {
    image:
      heroCabin,
    tone: 'emerald',
    alt: {
      en: 'Rail carbody under assembly in the bodyshell shop',
      de: 'Wagenkasten in der Rohbaufertigung',
    },
    badge: { en: 'CARBODY PRECISION', de: 'WAGENKASTEN-PRÄZISION' },
    title: {
      en: 'Precision Carbody & Structural Assembly',
      de: 'Präzise Wagenkasten- und Strukturmontage',
    },
    body: {
      en: 'Extruded aluminium shells welded to ±0.4 mm across a 26-metre carbody, measured in line against the digital twin.',
      de: 'Aluminium-Strangpressschalen, geschweißt auf ±0,4 mm über 26 Meter Wagenkasten, inline gegen den digitalen Zwilling vermessen.',
    },
  },
  {
    image:
      heroBogie,
    tone: 'sky',
    alt: {
      en: 'High-speed bogie frame and suspension assembly',
      de: 'Drehgestellrahmen und Federung eines Hochgeschwindigkeitszuges',
    },
    badge: { en: 'MECHANICAL EXCELLENCE', de: 'MECHANISCHE EXZELLENZ' },
    title: {
      en: 'Advanced Bogie & Mechanical Engineering',
      de: 'Fortschrittlicher Drehgestell- und Maschinenbau',
    },
    body: {
      en: 'High-damping bogie frames engineered under rigorous EN 13749 standards with active lateral dampers.',
      de: 'Hochdämpfende Drehgestellrahmen nach strengen EN-13749-Standards mit aktiven Querdämpfern.',
    },
  },
  {
    image:
      heroCockpit,
    tone: 'violet',
    alt: {
      en: 'Digital driver cockpit with predictive control displays',
      de: 'Digitales Führerpult mit prädiktiven Steuerungsanzeigen',
    },
    badge: { en: 'DIGITAL RAIL & AUTOMATION', de: 'DIGITALE SCHIENE & AUTOMATISIERUNG' },
    title: {
      en: 'Digital Cockpit & Predictive Control',
      de: 'Digitales Cockpit & vorausschauende Steuerung',
    },
    body: {
      en: 'SIL-4 failsafe architectures integrating automated track obstacle detection and predictive telemetry.',
      de: 'SIL-4-Failsafe-Architekturen mit automatisierter Hinderniserkennung und prädiktiver Flottentelemetrie.',
    },
  },
];
