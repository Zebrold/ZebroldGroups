import plateDusk from '../assets/highspeed_in_service.jpg';

/**
 * Communiqué extras for the press-release pages, keyed by the id in news.js.
 *
 * Everything here is OPTIONAL — Release.jsx falls back to the news entry's own
 * title / excerpt / body, so a release with no entry still renders a complete
 * page. Only the lead communiqué carries the full editorial furniture
 * (pull-quote, bilateral synthesis, endorsements, second plate).
 *
 * ⚠ The named individuals and the operator endorsement below were supplied as
 * reference copy and are NOT verified attributions. Clear them with the named
 * parties before this page is published.
 */
export const releases = {
  'transpennine-battery-fleet': {
    overline: {
      en: 'Official bilateral communiqué • Rolling stock fleet procurement',
      de: 'Offizielles bilaterales Kommuniqué • Beschaffung Schienenfahrzeugflotte',
    },
    readMins: 4,
    standards: 'EN 13749 • SIL-4',
    time: '09:00 CET',
    repositories: 'MANCHESTER (PICCADILLY) & FRANKFURT AM MAIN',
    ref: 'ZS-FRA-TPE-2026/DOC-08',

    synopsis: {
      en: 'Zebrold International Holdings Limited, operating through its dedicated Scolome rolling stock division, has concluded commercial and engineering agreements for the delivery and 20-year lifecycle asset management of bi-mode battery-electric trainsets engineered to decarbonise intercity regional corridors across northern England.',
      de: 'Die Zebrold International Holdings Limited hat über ihren Geschäftsbereich Scolome Verträge über Lieferung und 20-jähriges Lebenszyklusmanagement bimodaler batterieelektrischer Triebzüge geschlossen, die den Fernverkehr in Nordengland dekarbonisieren sollen.',
    },

    plate1: {
      caption: {
        en: 'Plate 01: Scolome bi-mode battery-electric trainset homologated for TransPennine Express northern corridors',
        de: 'Tafel 01: Bimodaler batterieelektrischer Scolome-Triebzug, zugelassen für die Nordkorridore von TransPennine Express',
      },
      reg: 'ARCHIVAL REG: ZS-FRA-TPE-P01 // TSI COHERENT',
    },

    specIndex: [
      { label: { en: 'Units ordered', de: 'Bestellte Einheiten' }, value: '48 CONSISTS' },
      { label: { en: 'Traction protocol', de: 'Traktionsprotokoll' }, value: '25 kV AC + LTO CELLS' },
      { label: { en: 'Autonomy (non-electrified)', de: 'Reichweite (ohne Fahrdraht)' }, value: '137 KM SUSTAINED' },
      { label: { en: 'Operating velocity', de: 'Betriebsgeschwindigkeit' }, value: '200 KM/H (125 MPH)' },
      { label: { en: 'Contract envelope', de: 'Vertragsvolumen' }, value: '€1.200.000.000 EUR' },
    ],

    acceptance: {
      title: { en: 'Regulatory acceptance vector', de: 'Zulassungspfad' },
      body: {
        en: 'Vehicle type approval progressed concurrently through the UK Office of Rail and Road and European Union Agency for Railways baseline specifications.',
        de: 'Die Fahrzeugtypzulassung läuft parallel über das UK Office of Rail and Road und die Basisspezifikationen der Eisenbahnagentur der Europäischen Union.',
      },
    },

    sectionTitle: {
      en: 'A Decisive Decarbonisation Milestone for Intercity Rail',
      de: 'Ein entscheidender Schritt zur Dekarbonisierung des Fernverkehrs',
    },

    paragraphs: [
      {
        en: 'The agreement outlines a delivery deployment aimed at superseding the legacy diesel fleets that have served northern England’s interurban arteries for over two decades. Operating across heavy passenger nodes between Manchester, Leeds, York, Newcastle and Hull, the Scolome units provide zero tailpipe emissions on non-electrified segments via rapid-cycling, liquid-cooled lithium-titanate traction modules.',
        de: 'Die Vereinbarung sieht einen Rollout vor, der die Dieselflotten ablöst, die Nordenglands Fernverkehrsachsen seit über zwei Jahrzehnten bedienen. Auf den stark frequentierten Knoten zwischen Manchester, Leeds, York, Newcastle und Hull fahren die Scolome-Einheiten auf nicht elektrifizierten Abschnitten emissionsfrei — mit schnellzyklischen, flüssigkeitsgekühlten Lithium-Titanat-Traktionsmodulen.',
      },
      {
        en: 'Running under live 25 kV AC catenary, high-capacity pantographs energise the traction inverters while feeding regenerative current into the onboard storage banks. The result is uninterrupted intercity service at up to 200 km/h without requiring immediate permanent-way electrification across difficult geological sections such as the Standedge Tunnel and the Pennine crests.',
        de: 'Unter 25-kV-Wechselstrom-Oberleitung speisen Hochleistungsstromabnehmer die Traktionsumrichter und führen Rekuperationsstrom in die Bordspeicher zurück. So entsteht durchgehender Fernverkehr mit bis zu 200 km/h, ohne dass schwierige Abschnitte wie der Standedge-Tunnel sofort elektrifiziert werden müssen.',
      },
      {
        en: 'Under the accompanying 20-year technical support and spares supply agreement, Zebrold will establish maintenance depots in Manchester and Newcastle, targeting fleet availability above 99.4% through real-time telemetry pipelines.',
        de: 'Im Rahmen des begleitenden 20-jährigen Technik- und Ersatzteilvertrags richtet Zebrold Wartungsdepots in Manchester und Newcastle ein und strebt über Echtzeit-Telemetrie eine Flottenverfügbarkeit von über 99,4 % an.',
      },
    ],

    quote: {
      label: { en: 'Directorial endorsement • Zebrold IHL', de: 'Erklärung der Geschäftsführung • Zebrold IHL' },
      text: {
        en: '“Rolling stock is the future of transportation, and Scolome is redefining the future of mobility through innovation and engineering excellence. This partnership with TransPennine Express confirms our commitment to eliminating heavy diesel emissions from vital regional transit veins.”',
        de: '„Schienenfahrzeuge sind die Zukunft des Transports, und Scolome definiert die Zukunft der Mobilität durch Innovation und ingenieurtechnische Exzellenz neu. Diese Partnerschaft mit TransPennine Express bekräftigt unseren Anspruch, schwere Dieselemissionen aus wichtigen Regionalverbindungen zu verbannen.“',
      },
      cite: {
        en: 'Dr. Hendrik Vance, Managing Director • Zebrold Corporate Directorate, Frankfurt am Main',
        de: 'Dr. Hendrik Vance, Geschäftsführer • Zebrold Konzerndirektion, Frankfurt am Main',
      },
    },

    synthesis: {
      eyebrow: { en: 'Bilateral engineering paradigm', de: 'Bilaterales Ingenieurparadigma' },
      title: {
        en: 'Sovereign Metallurgy Meets Real-Time Distributed Cybernetics',
        de: 'Souveräne Metallurgie trifft verteilte Echtzeit-Kybernetik',
      },
      intro: {
        en: 'The Scolome platform sits at the intersection of heavy mechanical engineering and deterministic control logic, combining precision physical manufacturing with millisecond-accuracy digital state coordination.',
        de: 'Die Scolome-Plattform verbindet schweren Maschinenbau mit deterministischer Steuerungslogik — Präzisionsfertigung trifft auf millisekundengenaue digitale Zustandskoordination.',
      },
      domains: [
        {
          site: 'KASSEL & FRANKFURT AM MAIN',
          tag: { en: 'Fabrication domain', de: 'Fertigungsdomäne' },
          title: {
            en: 'German High-Precision Bogies & Structural Monocoques',
            de: 'Deutsche Präzisionsdrehgestelle & Strukturmonocoques',
          },
          body: {
            en: 'Built to EN 13749 fatigue-life standards, each bogie frame and extruded aluminium bodyshell undergoes laser interferometric structural validation at the Kassel workshops. Wheelset dynamic stability is calibrated for sustained high-speed transit while minimising railhead wear on tightly curving historic track geometry.',
            de: 'Nach den Betriebsfestigkeitsanforderungen der EN 13749 gefertigt, durchläuft jeder Drehgestellrahmen und jeder Aluminium-Wagenkasten in Kassel eine laserinterferometrische Strukturprüfung. Die Radsatzdynamik ist auf dauerhaften Schnellverkehr ausgelegt und minimiert zugleich den Schienenkopfverschleiß in enger Altstreckengeometrie.',
          },
          footLabel: { en: 'Standards conformity', de: 'Normenkonformität' },
          footValue: 'TSI LOC&PAS • DIN EN 15227 (CRASHWORTHINESS)',
        },
        {
          site: 'BENGALURU & HYDERABAD',
          tag: { en: 'Cybernetics domain', de: 'Kybernetikdomäne' },
          title: {
            en: 'Indian Edge Computing & Deterministic BMS Algorithms',
            de: 'Indisches Edge Computing & deterministische BMS-Algorithmen',
          },
          body: {
            en: 'The battery management real-time operating system provides SIL-4 compliant cell monitoring at microsecond resolution. Wayside telemetry models thermal gradients and harmonic regenerative feeds continuously, projecting cell degradation curves and scheduling pre-emptive charging cycles.',
            de: 'Das Echtzeitbetriebssystem des Batteriemanagements überwacht Zellen SIL-4-konform im Mikrosekundenbereich. Streckenseitige Telemetrie modelliert laufend Temperaturgradienten und harmonische Rekuperationsströme, prognostiziert Degradationskurven und plant Ladezyklen vorausschauend.',
          },
          footLabel: { en: 'System architecture', de: 'Systemarchitektur' },
          footValue: 'SIL-4 CENELEC EN 50128/50129 • EDGE TELEMATICS',
        },
      ],
    },

    plate2: {
      image: plateDusk,
      alt: {
        en: 'Scolome trainset under high-velocity aerodynamic testing at dusk',
        de: 'Scolome-Triebzug bei aerodynamischen Hochgeschwindigkeitsversuchen in der Dämmerung',
      },
      caption: {
        en: 'Plate 02: High-velocity aerodynamic testing of the Scolome consist at dusk',
        de: 'Tafel 02: Aerodynamische Hochgeschwindigkeitserprobung des Scolome-Zuges in der Dämmerung',
      },
      reg: 'CHASSIS REGISTRY: SC-804-01X // TEST CIRCUIT',
    },

    endorsements: {
      eyebrow: { en: 'Verification testimony', de: 'Bestätigende Stimmen' },
      title: { en: 'Industry Stakeholder Endorsements', de: 'Stimmen aus der Branche' },
      items: [
        {
          quote: {
            en: '“This agreement secures a technically advanced regional fleet. The Scolome trainsets unlock decarbonisation across the northern heartland without waiting years for complete route electrification.”',
            de: '„Diese Vereinbarung sichert eine technisch fortschrittliche Regionalflotte. Die Scolome-Triebzüge ermöglichen Dekarbonisierung im Norden, ohne jahrelang auf die vollständige Streckenelektrifizierung zu warten.“',
          },
          name: 'Alistair Sterling',
          role: { en: 'Fleet Operations Director • TransPennine Express', de: 'Leiter Flottenbetrieb • TransPennine Express' },
          meta: 'STATION: MANCHESTER PICCADILLY',
        },
        {
          quote: {
            en: '“The predictive telematics engineered by our Bengaluru teams provide continuous wayside health monitoring, letting depot engineers pre-empt mechanical stress before it shows up as a service delay.”',
            de: '„Die von unseren Teams in Bengaluru entwickelte prädiktive Telematik überwacht den Zustand laufend, sodass Depot-Ingenieure mechanische Belastung erkennen, bevor sie zu Verspätungen führt.“',
          },
          name: 'Pooja Krishnamurthy',
          role: { en: 'Chief Systems Architect • Zebrold Mobility Solutions India', de: 'Chefarchitektin Systeme • Zebrold Mobility Solutions India' },
          meta: 'HUB: BENGALURU CAMPUS',
        },
      ],
    },

    authority: 'ZEBROLD INTERNATIONAL HOLDINGS LIMITED • SCOLOME MOBILITY ARCHITECTURE',
    sites: 'FRANKFURT • KASSEL • BENGALURU • HYDERABAD • MANCHESTER',
  },

  /* ── The remaining communiqués carry the ledger furniture only; the page
        builds their narrative from the news entry's own excerpt and body. ── */

  'sic-traction-architecture': {
    overline: { en: 'Technology communiqué • Traction power architecture', de: 'Technisches Kommuniqué • Traktionsarchitektur' },
    readMins: 3,
    standards: 'EN 50155 • SIL-4',
    time: '10:30 CET',
    repositories: 'MUNICH TECHNOLOGY CENTRE & FRANKFURT AM MAIN',
    ref: 'ZS-FRA-SIC-2026/DOC-14',
    specIndex: [
      { label: { en: 'Blocking voltage', de: 'Sperrspannung' }, value: '3.3 kV SiC MOSFET' },
      { label: { en: 'Conversion efficiency', de: 'Wirkungsgrad' }, value: '98.2 %' },
      { label: { en: 'Cooling stages removed', de: 'Entfallene Kühlstufen' }, value: '1' },
    ],
  },

  'long-distance-fleet': {
    overline: { en: 'Official communiqué • Long-distance fleet award', de: 'Offizielles Kommuniqué • Fernverkehrsauftrag' },
    readMins: 3,
    standards: 'TSI LOC&PAS • SIL-4',
    time: '08:00 CET',
    repositories: 'FRANKFURT AM MAIN & BENGALURU',
    ref: 'ZS-FRA-LDF-2026/DOC-06',
    specIndex: [
      { label: { en: 'Consist length', de: 'Zuglänge' }, value: '16 CARS' },
      { label: { en: 'Capacity', de: 'Kapazität' }, value: '1,100 PASSENGERS' },
      { label: { en: 'Telemetry network', de: 'Telemetrienetz' }, value: '4,800 POINTS / SET' },
    ],
  },

  'q1-progress': {
    overline: { en: 'Financial communiqué • Quarterly progress', de: 'Finanzkommuniqué • Quartalsbericht' },
    readMins: 3,
    standards: 'INVESTOR RELATIONS',
    time: '07:00 CET',
    repositories: 'FRANKFURT AM MAIN',
    ref: 'ZS-FRA-FIN-2026/Q1',
    specIndex: [
      { label: { en: 'Order intake', de: 'Auftragseingang' }, value: '€560 MILLION' },
      { label: { en: 'Book-to-bill', de: 'Book-to-Bill' }, value: '1.38' },
      { label: { en: 'Trainsets handed over', de: 'Übergebene Triebzüge' }, value: '14' },
    ],
  },

  'fy-milestones': {
    overline: { en: 'Financial communiqué • Full-year milestones', de: 'Finanzkommuniqué • Jahresmeilensteine' },
    readMins: 3,
    standards: 'INVESTOR RELATIONS',
    time: '07:00 CET',
    repositories: 'FRANKFURT AM MAIN',
    ref: 'ZS-FRA-FIN-2026/FY',
    specIndex: [
      { label: { en: 'Full-year revenue', de: 'Jahresumsatz' }, value: '€1.62 BILLION' },
      { label: { en: 'Trainsets delivered', de: 'Ausgelieferte Triebzüge' }, value: '62' },
      { label: { en: 'Order backlog', de: 'Auftragsbestand' }, value: '€4.85 BILLION' },
    ],
  },

  'scolome-2-order': {
    overline: { en: 'Official communiqué • Framework options call-off', de: 'Offizielles Kommuniqué • Optionsabruf' },
    readMins: 3,
    standards: 'TSI LOC&PAS',
    time: '09:30 CET',
    repositories: 'FRANKFURT AM MAIN & KASSEL',
    ref: 'ZS-FRA-OPT-2026/DOC-11',
    specIndex: [
      { label: { en: 'Additional units', de: 'Zusätzliche Einheiten' }, value: '25 TRAINSETS' },
      { label: { en: 'Resulting fleet', de: 'Resultierende Flotte' }, value: '91 UNITS' },
      { label: { en: 'Contract envelope', de: 'Vertragsvolumen' }, value: '€270 MILLION' },
    ],
  },

  'corridor-consortium': {
    overline: { en: 'Official communiqué • Corridor modernisation accord', de: 'Offizielles Kommuniqué • Korridormodernisierung' },
    readMins: 4,
    standards: 'ETCS L2 • CENELEC',
    time: '11:00 CET',
    repositories: 'CAIRO & HYDERABAD',
    ref: 'ZS-CAI-COR-2026/DOC-03',
    specIndex: [
      { label: { en: 'Route length', de: 'Streckenlänge' }, value: '1,240 KM' },
      { label: { en: 'Signalling baseline', de: 'Signaltechnik' }, value: 'ETCS LEVEL 2' },
      { label: { en: 'Contract envelope', de: 'Vertragsvolumen' }, value: '€690 MILLION' },
    ],
  },

  'ai-safety-trials': {
    overline: { en: 'Technology communiqué • Obstacle detection trials', de: 'Technisches Kommuniqué • Hinderniserkennung' },
    readMins: 3,
    standards: 'SIL-4 ADVISORY',
    time: '14:00 CET',
    repositories: 'FIELD TRIALS & BENGALURU',
    ref: 'ZS-FLX-DET-2026/DOC-04',
    specIndex: [
      { label: { en: 'Detection range', de: 'Erkennungsreichweite' }, value: '1,100 M' },
      { label: { en: 'Sensor fusion', de: 'Sensorfusion' }, value: 'LWIR + mmWAVE + STEREO' },
      { label: { en: 'Braking chain', de: 'Bremskette' }, value: 'UNMODIFIED (ADVISORY)' },
    ],
  },

  'velocity-360-trials': {
    overline: { en: 'Technology communiqué • Homologation trials', de: 'Technisches Kommuniqué • Zulassungsversuche' },
    readMins: 3,
    standards: 'TSI • EN 14067',
    time: '13:00 CET',
    repositories: 'VELIM TEST RING & KASSEL',
    ref: 'ZS-VEL-HOM-2026/DOC-02',
    specIndex: [
      { label: { en: 'Drag model deviation', de: 'Abweichung Luftwiderstand' }, value: '1.4 %' },
      { label: { en: 'Interior noise', de: 'Innengeräusch' }, value: '< 72 dBA' },
      { label: { en: 'Programme stage', de: 'Programmstand' }, value: 'VEHICLE EVIDENCE CLOSED' },
    ],
  },
};

export function getRelease(id) {
  return releases[id] ?? null;
}
