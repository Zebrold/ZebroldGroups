import trainImg from '../assets/scolome_hero.jpg';
import bogieImg from '../assets/high_speed_bogie.jpg';
import cabinImg from '../assets/train_cockpit_digital.jpg';
import content from '../content/siteContent.json';

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

/**
 * Open roles. Edited from /admin — the source of truth is
 * src/content/siteContent.json.
 */
export const jobs = content.jobs;

/** Look up a role by its public reference code (used by /careers/apply?ref=…). */
export function findJobByRef(ref) {
  return jobs.find((job) => job.ref === ref) ?? null;
}
