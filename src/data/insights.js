import bogieImg from '../assets/high_speed_bogie.jpg';
import inverterImg from '../assets/traction_inverter.jpg';
import carbodyImg from '../assets/carbody_laser_welding.jpg';
import catenaryImg from '../assets/rail_catenary_corridor.jpg';
import sensorImg from '../assets/autonomous_rail_sensor.jpg';
import labImg from '../assets/deeptech_software_lab.jpg';

/** Long-form technical pieces from the Scolome engineering office. */
export const insights = [
  {
    id: 'axle-load-economics',
    date: '2026-08-28',
    readMins: 9,
    image: bogieImg,
    alt: {
      en: 'EN 13749 high-speed bogie assembly with air suspension',
      de: 'Hochgeschwindigkeits-Drehgestell nach EN 13749',
    },
    topic: { en: 'Structures', de: 'Strukturen' },
    title: {
      en: 'Why axle load is the real constraint on high-speed economics',
      de: 'Warum die Achslast die eigentliche Grenze der Hochgeschwindigkeitsökonomie ist',
    },
    body: {
      en: 'Track access charges scale with the damage a vehicle does to the permanent way, and that damage rises far faster than linearly with axle load. Dropping below 16 tonnes per axle is therefore not a vanity target — it changes the whole-life cost of a franchise. Distributed traction is what makes it reachable: spreading inverters and motors along the undercarriage removes the concentrated mass of a power car entirely.',
      de: 'Trassenentgelte richten sich nach dem Schaden, den ein Fahrzeug am Oberbau verursacht — und dieser Schaden wächst deutlich überproportional mit der Achslast. Unter 16 Tonnen je Achse zu bleiben, ist daher kein Prestigeziel, sondern verändert die Lebenszykluskosten einer Konzession. Verteilte Traktion macht das erreichbar: Werden Umrichter und Motoren über den Unterboden verteilt, entfällt die konzentrierte Masse eines Triebkopfs vollständig.',
    },
  },
  {
    id: 'sic-thermal-headroom',
    date: '2026-08-05',
    readMins: 7,
    image: inverterImg,
    alt: {
      en: '3.3 kV silicon carbide traction converter in engineering laboratory',
      de: '3,3-kV-Siliziumkarbid-Traktionsumrichter im Prüflabor',
    },
    topic: { en: 'Traction', de: 'Traktion' },
    title: {
      en: 'Silicon carbide buys thermal headroom, not just efficiency',
      de: 'Siliziumkarbid schafft thermische Reserve, nicht nur Effizienz',
    },
    body: {
      en: 'The efficiency gain from wide-bandgap switching is real but modest at the fleet level. The decisive benefit is thermal: roughly 42% lower switching losses removes a cooling stage, and removing a cooling stage removes a maintenance interval, a failure mode and several hundred kilograms. Availability improves more from the parts you delete than from the watts you save.',
      de: 'Der Effizienzgewinn durch Wide-Bandgap-Schalten ist real, auf Flottenebene aber moderat. Entscheidend ist der thermische Effekt: rund 42 % geringere Schaltverluste erübrigen eine Kühlstufe — und damit ein Wartungsintervall, einen Fehlermodus und mehrere hundert Kilogramm. Die Verfügbarkeit steigt stärker durch entfallene Bauteile als durch eingesparte Watt.',
    },
  },
  {
    id: 'lattice-fire-rating',
    date: '2026-07-14',
    readMins: 6,
    image: carbodyImg,
    alt: {
      en: 'Aluminium carbody fabrication and interior structural testing',
      de: 'Aluminium-Wagenkastenbau und Strukturprüfung',
    },
    topic: { en: 'Materials', de: 'Werkstoffe' },
    title: {
      en: 'Additive interiors and the EN 45545 fire barrier',
      de: 'Additive Innenausbauten und die Brandschutzhürde EN 45545',
    },
    body: {
      en: 'Lattice geometry is the easy part of additive interiors. The hard part is EN 45545-2 hazard level HL3, which governs heat release, smoke density and toxicity together. Polymer chemistries that pass in isolation often fail once the lattice raises surface area by an order of magnitude — the same geometry that saves mass also feeds a fire. Qualification has to be done on the final geometry, never on a coupon.',
      de: 'Die Gittergeometrie ist der einfache Teil additiver Innenausbauten. Schwierig ist die Gefahrenstufe HL3 der EN 45545-2, die Wärmefreisetzung, Rauchdichte und Toxizität gemeinsam bewertet. Polymerchemien, die isoliert bestehen, scheitern häufig, sobald das Gitter die Oberfläche um eine Größenordnung erhöht — dieselbe Geometrie, die Masse spart, nährt auch ein Feuer. Die Qualifikation muss an der finalen Geometrie erfolgen, nie an einer Probe.',
    },
  },
  {
    id: 'etcs-capacity',
    date: '2026-06-30',
    readMins: 11,
    image: catenaryImg,
    alt: {
      en: 'High-speed electrified rail corridor with ETCS Level 2 signalling',
      de: 'Elektrifizierter Hochgeschwindigkeitskorridor mit ETCS Level 2',
    },
    topic: { en: 'Signalling', de: 'Signaltechnik' },
    title: {
      en: 'Resignalling beats new alignment on cost per added path',
      de: 'Resignalisierung schlägt Neubautrasse bei Kosten je zusätzlicher Trasse',
    },
    body: {
      en: 'Migrating a corridor to ETCS Level 2 raised capacity by an estimated 31% at a fraction of the cost per added train path of new construction, and without a decade of consenting. The limiting factor is rarely the trackside equipment; it is fleet fitment, since a corridor runs at the capability of its least-equipped vehicle. Retrofit sequencing, not installation, is what determines the delivery date.',
      de: 'Die Migration eines Korridors auf ETCS Level 2 erhöhte die Kapazität um schätzungsweise 31 % — zu einem Bruchteil der Kosten je zusätzlicher Zugtrasse gegenüber einem Neubau und ohne ein Jahrzehnt Genehmigungsverfahren. Begrenzend ist selten die Streckenausrüstung, sondern die Fahrzeugausrüstung: Ein Korridor fährt auf dem Niveau seines am schlechtesten ausgerüsteten Fahrzeugs. Nicht die Installation, sondern die Nachrüstreihenfolge bestimmt den Termin.',
    },
  },
  {
    id: 'aero-to-rail',
    date: '2026-06-02',
    readMins: 8,
    image: sensorImg,
    alt: {
      en: 'Aerodynamic train nose with integrated sensors',
      de: 'Aerodynamischer Zugkopf mit integrierter Sensorik',
    },
    topic: { en: 'Cross-sector', de: 'Sektorübergreifend' },
    title: {
      en: 'What rail can honestly take from aerospace — and what it cannot',
      de: 'Was die Schiene ehrlich von der Luftfahrt übernehmen kann — und was nicht',
    },
    body: {
      en: 'Materials traceability, fatigue substantiation and configuration control transfer cleanly. Weight-at-any-cost does not: a train that gains a tonne loses far less than an aircraft that does, so the optimisation curve sits in a different place. Copying aerospace mass targets into rail produces expensive structures that solve a problem the railway does not have.',
      de: 'Werkstoffrückverfolgbarkeit, Ermüdungsnachweis und Konfigurationskontrolle lassen sich sauber übertragen. Gewichtsminimierung um jeden Preis nicht: Ein Zug, der eine Tonne zulegt, verliert weit weniger als ein Flugzeug — die Optimierungskurve liegt anders. Werden Massenziele der Luftfahrt auf die Schiene übertragen, entstehen teure Strukturen für ein Problem, das die Bahn nicht hat.',
    },
  },
  {
    id: 'takt-in-rail',
    date: '2026-05-19',
    readMins: 10,
    image: labImg,
    alt: {
      en: 'Digital twin monitoring and optical metrology station',
      de: 'Digitaler Zwilling und optische Messtechnik',
    },
    topic: { en: 'Manufacturing', de: 'Fertigung' },
    title: {
      en: 'Holding takt when the part is twenty-six metres long',
      de: 'Takt halten, wenn das Bauteil sechsundzwanzig Meter lang ist',
    },
    body: {
      en: 'Automotive takt discipline assumes a part you can fixture rigidly and measure in one frame. A 26-metre carbody deflects under its own weight, so every measurement is a measurement of the fixture as much as the part. In-line optical metrology referenced to the digital twin at each station is what makes ±0.4 mm survivable — and it means deviation is caught where it was caused, not at final acceptance where it is unattributable.',
      de: 'Taktdisziplin aus der Automobilfertigung setzt ein Bauteil voraus, das sich starr aufspannen und in einem Bild vermessen lässt. Ein 26-Meter-Wagenkasten verformt sich unter Eigengewicht — jede Messung misst die Vorrichtung ebenso wie das Bauteil. Erst Inline-Optikmesstechnik mit Bezug auf den digitalen Zwilling je Station macht ±0,4 mm haltbar: Abweichungen werden dort erkannt, wo sie entstehen, statt bei der Endabnahme, wo sie niemandem zuzuordnen sind.',
    },
  },
];
