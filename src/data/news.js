import newsVelocity from '../assets/highspeed_in_service.jpg';
import newsBatteryFleet from '../assets/trainset_rollout.jpg';
import newsTraction from '../assets/traction_inverter.jpg';
import newsLongDistance from '../assets/intercity_platform.webp';
import newsQuarter from '../assets/assembly_line_robotics.webp';
import newsMilestones from '../assets/final_assembly_jacks.jpg';
import newsFleetOrder from '../assets/regional_fleet_platform.webp';
import newsCorridor from '../assets/rail_catenary_corridor.jpg';
import newsAiSafety from '../assets/autonomous_rail_sensor.jpg';

export const NEWS_CATEGORIES = [
  { id: 'press', label: { en: 'Press releases', de: 'Pressemitteilungen' } },
  { id: 'contract', label: { en: 'Contracts & awards', de: 'Aufträge & Vergaben' } },
  { id: 'results', label: { en: 'Corporate & results', de: 'Konzern & Ergebnisse' } },
  { id: 'technology', label: { en: 'Engineering & AI tech', de: 'Technik & KI' } },
];

/**
 * Newsroom releases matching the reference layout.
 */
export const news = [
  {
    id: 'transpennine-battery-fleet',
    date: '2026-09-11',
    category: 'contract',
    region: { en: 'United Kingdom', de: 'Vereinigtes Königreich' },
    source: { en: 'Frankfurt & London bureau', de: 'Büro Frankfurt & London' },
    featured: true,
    image:
      newsBatteryFleet,
    alt: {
      en: 'Battery-electric trainset leaving the assembly hall',
      de: 'Batterieelektrischer Triebzug verlässt die Montagehalle',
    },
    title: {
      en: 'Zebrold and TransPennine Express sign €1.2 billion contract for Scolome mainline battery-electric fleet',
      de: 'Zebrold und TransPennine Express unterzeichnen Vertrag über 1,2 Mrd. € für die batterieelektrische Scolome-Hauptstreckenflotte',
    },
    excerpt: {
      en: 'The award covers 48 five-car battery-electric trainsets, a 20-year availability contract and depot electrification across the northern corridor.',
      de: 'Der Auftrag umfasst 48 fünfteilige batterieelektrische Triebzüge, einen 20-jährigen Verfügbarkeitsvertrag und die Elektrifizierung der Depots im Nordkorridor.',
    },
    body: {
      en: 'The award covers 48 five-car battery-electric trainsets for mainline service, together with a 20-year availability contract and depot electrification across the northern corridor. The fleet runs on battery power over un-electrified sections and recharges under existing catenary without route infrastructure changes.\n\nDelivery is phased against the operator timetable change. The availability regime is managed from the Kassel service hub, and driver training runs jointly with the operator.',
      de: 'Der Auftrag umfasst 48 fünfteilige batterieelektrische Triebzüge für den Hauptstreckenverkehr, einen 20-jährigen Verfügbarkeitsvertrag sowie die Elektrifizierung der Depots im Nordkorridor. Die Flotte fährt auf nicht elektrifizierten Abschnitten im Batteriebetrieb und lädt unter vorhandener Oberleitung nach.\n\nDie Auslieferung erfolgt zum Fahrplanwechsel. Das Verfügbarkeitsregime steuert der Service-Hub Kassel, die Triebfahrzeugführerschulung läuft gemeinsam mit dem Betreiber.',
    },
  },
  {
    id: 'sic-traction-architecture',
    date: '2026-10-28',
    category: 'technology',
    region: { en: 'Munich technology centre', de: 'Technologiezentrum München' },
    source: { en: 'Propulsion & energy', de: 'Antrieb & Energie' },
    image:
      newsTraction,
    alt: {
      en: 'Engineer testing a silicon-carbide traction inverter on a bench',
      de: 'Ingenieur prüft einen Siliziumkarbid-Traktionsumrichter am Prüfstand',
    },
    title: {
      en: 'Zebrold Scolome unveils next-generation silicon-carbide traction power architecture for trans-European freight corridors',
      de: 'Zebrold Scolome stellt Siliziumkarbid-Traktionsarchitektur der nächsten Generation für transeuropäische Güterkorridore vor',
    },
    excerpt: {
      en: 'Next-generation 3.3 kV MOSFET power modules delivering 98.2% electrical energy conversion efficiency.',
      de: '3,3-kV-MOSFET-Leistungsmodule der nächsten Generation mit 98,2 % elektrischem Wirkungsgrad.',
    },
    body: {
      en: 'The next-generation traction package uses 3.3 kV silicon-carbide MOSFET power modules delivering 98.2% electrical energy conversion efficiency. Lower switching losses remove a cooling stage from the converter, cutting mass and one scheduled maintenance intervention from the lifecycle.\n\nThe architecture is common across the high-speed and regional platforms, so spares and diagnostic tooling are shared between fleets.',
      de: 'Das Traktionspaket der nächsten Generation nutzt 3,3-kV-Siliziumkarbid-MOSFET-Module mit 98,2 % elektrischem Wirkungsgrad. Geringere Schaltverluste erlauben den Entfall einer Kühlstufe — das spart Masse und ein Wartungsintervall im Lebenszyklus.\n\nDie Architektur ist plattformübergreifend einheitlich, sodass Ersatzteile und Diagnosewerkzeuge zwischen den Flotten geteilt werden.',
    },
  },
  {
    id: 'long-distance-fleet',
    date: '2026-09-03',
    category: 'contract',
    region: { en: 'Canada', de: 'Kanada' },
    source: { en: 'Commercial directorate', de: 'Vertriebsdirektion' },
    image:
      newsLongDistance,
    alt: {
      en: 'Intercity trainset waiting at a station platform',
      de: 'Fernverkehrszug am Bahnsteig',
    },
    title: {
      en: 'Zebrold wins landmark contract to deploy Scolome next-generation long-distance rail fleet',
      de: 'Zebrold gewinnt Großauftrag für die Scolome-Fernverkehrsflotte der nächsten Generation',
    },
    excerpt: {
      en: 'Sixteen-car trainsets configured for 1,100-passenger capacity on transcontinental overnight services.',
      de: 'Sechzehnteilige Triebzüge für 1.100 Fahrgäste im transkontinentalen Nachtverkehr.',
    },
    body: {
      en: 'The contract covers sixteen-car trainsets configured for 1,100-passenger capacity across seated, couchette and sleeper accommodation on transcontinental overnight services. Carbody structures are fabricated in Germany; traction control and passenger information software is developed in India.\n\nEach set carries redundant SIL-4 train control computers and a distributed telemetry network feeding the predictive maintenance model.',
      de: 'Der Auftrag umfasst sechzehnteilige Triebzüge für 1.100 Fahrgäste in Sitz-, Liege- und Schlafwagenkonfiguration im transkontinentalen Nachtverkehr. Die Wagenkastenstrukturen entstehen in Deutschland, die Traktions- und Fahrgastinformationssoftware in Indien.\n\nJeder Zug führt redundante SIL-4-Zugsteuerungsrechner sowie ein verteiltes Telemetrienetz für das prädiktive Wartungsmodell.',
    },
  },
  {
    id: 'q1-progress',
    date: '2026-07-22',
    category: 'results',
    region: { en: 'Frankfurt am Main', de: 'Frankfurt am Main' },
    source: { en: 'Investor relations', de: 'Investor Relations' },
    image:
      newsQuarter,
    alt: {
      en: 'Robotic assembly line building carbody sections',
      de: 'Roboterfertigungslinie beim Bau von Wagenkastensektionen',
    },
    title: {
      en: "Zebrold's Scolome Project: First quarter 2026/27 progress report",
      de: 'Scolome-Projekt von Zebrold: Fortschrittsbericht für das erste Quartal 2026/27',
    },
    excerpt: {
      en: 'Order intake of €560 million, book-to-bill of 1.38 and 14 trainsets handed over in the quarter.',
      de: 'Auftragseingang von 560 Mio. €, Book-to-Bill von 1,38 und 14 übergebene Triebzüge im Quartal.',
    },
    body: {
      en: 'Order intake for the quarter reached €560 million against a book-to-bill ratio of 1.38, with 14 trainsets handed over to operators. The carbody shop held its target takt throughout the period.\n\nSoftware recertification of the traction control stack was completed within the quarter, clearing the path to the next authorisation milestone.',
      de: 'Der Auftragseingang des Quartals erreichte 560 Mio. € bei einem Book-to-Bill-Verhältnis von 1,38; 14 Triebzüge wurden an Betreiber übergeben. Die Wagenkastenfertigung hielt ihren Zieltakt durchgehend.\n\nDie Rezertifizierung des Traktionssteuerungs-Stacks wurde im Quartal abgeschlossen und ebnet den Weg zum nächsten Zulassungsmeilenstein.',
    },
  },
  {
    id: 'fy-milestones',
    date: '2026-05-13',
    category: 'results',
    region: { en: 'Frankfurt am Main', de: 'Frankfurt am Main' },
    source: { en: 'Investor relations', de: 'Investor Relations' },
    image:
      newsMilestones,
    alt: {
      en: 'Trainsets raised on jacks in the final assembly hall',
      de: 'Triebzüge auf Hebeböcken in der Endmontagehalle',
    },
    title: {
      en: 'Zebrold Scolome Fiscal Year 2025/26 milestone achievements',
      de: 'Zebrold Scolome: Meilensteine des Geschäftsjahres 2025/26',
    },
    excerpt: {
      en: 'Full-year revenue of €1.62 billion, 62 trainsets delivered and a €4.85 billion order backlog.',
      de: 'Jahresumsatz von 1,62 Mrd. €, 62 ausgelieferte Triebzüge und ein Auftragsbestand von 4,85 Mrd. €.',
    },
    body: {
      en: 'Full-year revenue reached €1.62 billion with 62 trainsets delivered across the programme. Order backlog closed the year at €4.85 billion, equivalent to roughly three years of current output.\n\nAdditive manufacturing moved from prototype to series for interior and bracketry parts, reducing part count on the latest platform.',
      de: 'Der Jahresumsatz erreichte 1,62 Mrd. € bei 62 ausgelieferten Triebzügen. Der Auftragsbestand lag zum Jahresende bei 4,85 Mrd. € — rund drei Jahre der aktuellen Produktionsleistung.\n\nDie additive Fertigung ging bei Innenausbau- und Halterungsteilen in die Serie und reduzierte die Teilezahl der jüngsten Plattform.',
    },
  },
  {
    id: 'scolome-2-order',
    date: '2026-08-03',
    category: 'contract',
    region: { en: 'Australia', de: 'Australien' },
    source: { en: 'Regional transit directorate', de: 'Direktion Regionalverkehr' },
    image:
      newsFleetOrder,
    alt: {
      en: 'Regional trainsets standing at a station platform',
      de: 'Regionaltriebzüge am Bahnsteig',
    },
    title: {
      en: 'Zebrold to provide 25 additional Scolome 2.0 high-efficiency trains for €270m',
      de: 'Zebrold liefert 25 weitere Scolome-2.0-Hocheffizienzzüge für 270 Mio. €',
    },
    excerpt: {
      en: 'An options call-off under the existing framework, lifting the regional fleet to 91 trainsets.',
      de: 'Ein Optionsabruf im bestehenden Rahmenvertrag erhöht die Regionalflotte auf 91 Triebzüge.',
    },
    body: {
      en: 'The operator has exercised options for a further 25 trainsets under the existing framework agreement, lifting the regional fleet to 91 units. The platform reduces tare mass through a revised extruded-aluminium carbody and lattice-structure interior fittings.\n\nDeliveries run against the existing production slot allocation without additional tooling investment.',
      de: 'Der Betreiber hat Optionen für weitere 25 Triebzüge aus dem bestehenden Rahmenvertrag gezogen und erhöht die Regionalflotte damit auf 91 Einheiten. Die Plattform senkt die Leermasse durch einen überarbeiteten Aluminium-Wagenkasten und Innenausbauten in Gitterstruktur.\n\nDie Auslieferung erfolgt im Rahmen der bestehenden Produktionsslots ohne zusätzliche Werkzeuginvestitionen.',
    },
  },
  {
    id: 'corridor-consortium',
    date: '2026-06-18',
    category: 'contract',
    region: { en: 'Cairo, Egypt', de: 'Kairo, Ägypten' },
    source: { en: 'Middle East directorate', de: 'Direktion Naher Osten' },
    tone: 'dark',
    image:
      newsCorridor,
    alt: {
      en: 'Electrified rail corridor with overhead catenary',
      de: 'Elektrifizierter Schienenkorridor mit Oberleitung',
    },
    title: {
      en: 'Zebrold-led consortium signs €690 million contract to modernise strategic rail corridors with Scolome systems',
      de: 'Zebrold-geführtes Konsortium unterzeichnet Vertrag über 690 Mio. € zur Modernisierung strategischer Schienenkorridore',
    },
    excerpt: {
      en: 'ETCS Level 2 resignalling and traction power upgrades across 1,240 route kilometres.',
      de: 'ETCS-Level-2-Resignalisierung und Fahrstromausbau auf 1.240 Streckenkilometern.',
    },
    body: {
      en: 'The consortium will resignal 1,240 route kilometres to ETCS Level 2 and upgrade traction power provision across the corridors in scope. The programme raises line capacity without new alignment construction.\n\nInterlocking and traffic-management systems are supplied from the Hyderabad software centre, with trackside installation delivered by regional partners.',
      de: 'Das Konsortium rüstet 1.240 Streckenkilometer auf ETCS Level 2 um und baut die Fahrstromversorgung der betroffenen Korridore aus. Das Programm erhöht die Streckenkapazität ohne Neubautrassen.\n\nStellwerks- und Verkehrsmanagementsysteme kommen aus dem Softwarezentrum Hyderabad; die streckenseitige Installation übernehmen regionale Partner.',
    },
  },
  {
    id: 'ai-safety-trials',
    date: '2026-05-11',
    category: 'technology',
    region: { en: 'Field trials', de: 'Felderprobung' },
    source: { en: 'Intelligent transit lab', de: 'Labor für intelligenten Verkehr' },
    image:
      newsAiSafety,
    alt: {
      en: 'Forward-facing sensor array mounted in a trainset nose',
      de: 'Vorausschauendes Sensorarray in der Zugfront',
    },
    title: {
      en: 'Zebrold and Flox Intelligence deploy Scolome AI safety systems: launch of ground-breaking rail detection trials...',
      de: 'Zebrold und Flox Intelligence starten Erprobung von Scolome-KI-Sicherheitssystemen...',
    },
    excerpt: {
      en: 'Forward-facing sensor fusion detecting track obstructions at 1,100 m in degraded visibility.',
      de: 'Vorausschauende Sensorfusion erkennt Gleishindernisse auf 1.100 m bei eingeschränkter Sicht.',
    },
    body: {
      en: 'Trials combine long-wave infrared, millimetre-wave radar and stereo vision into a single forward-facing perception stack, detecting track obstructions at up to 1,100 metres in fog, heavy rain and night conditions.\n\nThe system advises the driver rather than commanding the brake, leaving the certified SIL-4 braking chain unmodified while the evidence base for autonomous intervention is built.',
      de: 'Die Erprobung kombiniert langwelliges Infrarot, Millimeterwellenradar und Stereokameras zu einem vorausschauenden Wahrnehmungssystem, das Gleishindernisse bei Nebel, Starkregen und Dunkelheit auf bis zu 1.100 Metern erkennt.\n\nDas System berät den Triebfahrzeugführer, statt die Bremse anzusteuern — die zertifizierte SIL-4-Bremskette bleibt unverändert, während die Nachweisbasis für autonome Eingriffe entsteht.',
    },
  },
  {
    id: 'velocity-360-trials',
    date: '2026-04-24',
    category: 'technology',
    region: { en: 'Velim test ring, Czechia', de: 'Versuchsring Velim, Tschechien' },
    source: { en: 'Rolling stock validation', de: 'Fahrzeugvalidierung' },
    image: newsVelocity,
    alt: {
      en: 'High-speed trainset on a dedicated test ring',
      de: 'Hochgeschwindigkeitszug auf einem Versuchsring',
    },
    title: {
      en: 'Scolome Velocity 360 reaches milestone homologation speeds in dynamic trials',
      de: 'Scolome Velocity 360 erreicht Zulassungsgeschwindigkeiten in dynamischen Versuchen',
    },
    excerpt: {
      en: 'Full-scale dynamic stability and regenerative braking runs confirm the drag coefficient and interior noise targets at sustained maximum velocity.',
      de: 'Vollmaßstäbliche Fahrstabilitäts- und Rekuperationsversuche bestätigen Luftwiderstands- und Innengeräuschziele bei Dauerhöchstgeschwindigkeit.',
    },
    body: {
      en: 'Dynamic trials on the Velim test ring completed the stability, ride-comfort and regenerative braking programme required for type authorisation. Measured aerodynamic drag held within 1.4% of the computational model, and interior noise stayed below 72 dBA at sustained maximum velocity.\n\nThe runs close the vehicle-level evidence package; trackside interoperability testing follows on the national network.',
      de: 'Die dynamischen Versuche auf dem Versuchsring Velim schlossen das für die Typzulassung erforderliche Programm zu Fahrstabilität, Fahrkomfort und Rekuperation ab. Der gemessene Luftwiderstand lag innerhalb von 1,4 % des Rechenmodells, das Innengeräusch blieb bei Dauerhöchstgeschwindigkeit unter 72 dBA.\n\nDamit ist der fahrzeugseitige Nachweisteil abgeschlossen; die streckenseitige Interoperabilitätsprüfung folgt im nationalen Netz.',
    },
  },
];
