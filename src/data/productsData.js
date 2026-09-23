import rsApex from '../assets/highspeed_in_service.jpg';
import rsBogie from '../assets/high_speed_bogie.jpg';
import rsHorizon from '../assets/metro_trainset.jpg';
import rsEtcs from '../assets/autonomous_rail_sensor.jpg';
import rsInverter from '../assets/traction_inverter.jpg';
import rsVelox from '../assets/intercity_platform.webp';
import rsTelematics from '../assets/field_engineer_diagnostics.jpg';
import rsInfra from '../assets/rail_catenary_corridor.jpg';

export const productCategories = [
  { id: 'all', label: { en: 'All Systems', de: 'Alle Systeme' } },
  { id: 'rolling-stock', label: { en: 'Rolling Stock Fleets', de: 'Fahrzeugflotten' } },
  { id: 'bogie-subsystems', label: { en: 'Bogies & Metallurgy', de: 'Drehgestelle & Metallurgie' } },
  { id: 'signalling-ai', label: { en: 'Signalling & AI Vision', de: 'Signaltechnik & KI-Optik' } },
  { id: 'power-electronics', label: { en: 'Traction & SiC Power', de: 'Traktion & SiC-Leistungselektronik' } },
  { id: 'digital-rail', label: { en: 'Digital Telematics', de: 'Digitale Telemetrie' } },
  { id: 'infrastructure', label: { en: 'Infrastructure & Superstructure', de: 'Infrastruktur & Oberbau' } },
];

export const productsList = [
  {
    id: 'apex-350',
    category: 'rolling-stock',
    code: 'ZS-APEX-350',
    badge: 'TSI HS-2024 / EIRENE',
    name: {
      en: 'Apex 350 High-Speed EMU',
      de: 'Apex 350 Hochgeschwindigkeits-Triebzug',
    },
    tagline: {
      en: 'Aerodynamic distributed propulsion designed for 360 km/h commercial velocity.',
      de: 'Aerodynamischer verteilter Antrieb für 360 km/h Reisegeschwindigkeit.',
    },
    categoryLabel: {
      en: 'High-Speed Passenger Rail',
      de: 'Hochgeschwindigkeits-Personenverkehr',
    },
    description: {
      en: 'Our flagship high-speed trainset engineered via wind-tunnel simulations in Kassel and computational fluid dynamic modeling in Bengaluru. Features lightweight aluminum-lithium extruded carbodies, distributed silicon-carbide traction, and passive crashworthiness exceeding EN 15227 Scenario 1.',
      de: 'Unser Flaggschiff-Hochgeschwindigkeitszug, entwickelt durch Windkanalversuche in Kassel und numerische Strömungsmechanik in Bengaluru. Mit Wagenkästen aus Aluminium-Lithium-Strangpressprofilen, verteilter SiC-Traktion und passiver Crashsicherheit nach EN 15227 Szenario 1.',
    },
    image: rsApex,
    imageAlt: {
      en: 'Apex 350 High-Speed train in service running at full speed',
      de: 'Apex 350 Hochgeschwindigkeitszug im Schnellfahrbetrieb',
    },
    metrics: [
      { label: { en: 'Max Speed', de: 'Höchstgeschw.' }, value: '360 km/h', isAccent: true },
      { label: { en: 'Axle Load', de: 'Radsatzlast' }, value: '16.5 T' },
      { label: { en: 'Energy Recovery', de: 'Rückspeisung' }, value: '98.2%' },
      { label: { en: 'Aero Drag Cd', de: 'Luftwiderstand Cd' }, value: '≤ 0.198' },
    ],
    specs: [
      { label: { en: 'Traction Architecture', de: 'Antriebsarchitektur' }, value: 'Distributed SiC MOSFET' },
      { label: { en: 'Total Rated Power', de: 'Nennleistung gesamt' }, value: '9,600 kW (8-car set)' },
      { label: { en: 'Gauge Compatibility', de: 'Spurweitenkompatibilität' }, value: '1,435 mm / 1,676 mm' },
      { label: { en: 'Supply Voltages', de: 'Versorgungsspannungen' }, value: '25 kV 50 Hz / 15 kV 16.7 Hz' },
    ],
    highlights: {
      en: [
        'Full TSI HS-2024 compliance for seamless transnational European-Asian corridors.',
        'Regenerative braking returning over 98% kinematic energy back into 25 kV catenary.',
        'Continuous fiber-optic structural health telemetry across all carbody zones.',
      ],
      de: [
        'Vollständige TSI HS-2024-Konformität für grenzüberschreitende europäisch-asiatische Korridore.',
        'Rückspeisebremse führt über 98% der Bremsenergie in die 25-kV-Fahrleitung zurück.',
        'Kontinuierliche faseroptische Strukturüberwachung über alle Wagenkastenbereiche.',
      ],
    },
    certifications: ['TSI HS-2024', 'EN 15227', 'EN 45545-2 HL3', 'CENELEC SIL-4'],
    deepLink: '/rolling-stock',
  },
  {
    id: 'ksl-350-bogie',
    category: 'bogie-subsystems',
    code: 'ZS-BOGIE-KSL350',
    badge: 'EN 13749 CLASS E / UIC 515',
    name: {
      en: 'KSL-350 Dynamic High-Speed Bogie',
      de: 'KSL-350 Dynamisches Hochgeschwindigkeits-Drehgestell',
    },
    tagline: {
      en: 'Heavy mechanical metallurgy with embedded multi-axis vibration telemetry.',
      de: 'Schwere mechanische Metallurgie mit integrierter Mehrachs-Schwingungstelemetrie.',
    },
    categoryLabel: {
      en: 'High-Stress Mechanical Assembly',
      de: 'Hochbeanspruchte mechanische Baugruppe',
    },
    description: {
      en: 'Cast and robotically welded tubular chassis fabricated under strict EN 10204 3.2 certification in Kassel Werk Pit IV. Equipped with active yaw dampers, hollow-forged nickel-chromium axles, and autonomous optical brake-disc wear sensors with 1.2M km overhaul endurance.',
      de: 'Gegossener und robotergeschweißter Rohrrahmen, gefertigt unter strenger EN 10204 3.2 Zertifizierung im Kasseler Werk Prüfstand IV. Ausgestattet mit aktiven Schlingerdämpfern, hohlgeschmiedeten Nickel-Chrom-Achsen und optischen Verschleißsensoren mit 1,2 Mio. km Revisionsintervall.',
    },
    image: rsBogie,
    imageAlt: {
      en: 'KSL-350 bogie frame undergoing dynamic bench calibration',
      de: 'KSL-350 Drehgestellrahmen bei der dynamischen Prüfstandskalibrierung',
    },
    metrics: [
      { label: { en: 'Fatigue Proofing', de: 'Dauerfestigkeit' }, value: '12×10⁶ Cyc' },
      { label: { en: 'Axle Load Rating', de: 'Achslastgrenze' }, value: '16.0 – 25.0 T' },
      { label: { en: 'Major Overhaul', de: 'Hauptrevision' }, value: '1.2M km', isAccent: true },
      { label: { en: 'Ride Quality Index', de: 'W-Fahrgüteindex' }, value: 'Wz ≤ 1.95' },
    ],
    specs: [
      { label: { en: 'Primary Suspension', de: 'Primärfederung' }, value: 'Coil springs + hydraulic dampers' },
      { label: { en: 'Secondary Suspension', de: 'Sekundärfederung' }, value: 'Air springs with leveling valves' },
      { label: { en: 'Braking Modules', de: 'Bremseinheiten' }, value: 'Wheel-mounted sintered calliper discs' },
      { label: { en: 'Wheel Diameter', de: 'Raddurchmesser' }, value: '920 mm (new) / 840 mm (worn)' },
    ],
    highlights: {
      en: [
        'Ultrasonic weld boundary verification on 100% of manufactured chassis frames.',
        'Continuous bearing condition telemetry transmitted at 50 Hz to central cloud.',
        'Validated on multi-axial hydraulic shake test beds under 1.5× dynamic fatigue factors.',
      ],
      de: [
        'Ultraschall-Schweißnahtprüfung an 100% aller gefertigten Drehgestellrahmen.',
        'Kontinuierliche Lagerzustandstelemetrie mit 50 Hz Abtastung an die Cloud.',
        'Validiert auf servohydraulischen Mehrachsprüfständen unter 1,5-fachem Dauerschwingfaktor.',
      ],
    },
    certifications: ['EN 13749 Class E', 'EN 15085-2 CL1', 'UIC 515-4', 'ISO 22163 (IRIS)'],
    deepLink: '/components',
  },
  {
    id: 'horizon-bemu',
    category: 'rolling-stock',
    code: 'ZS-HORIZON-BEMU',
    badge: 'ZERO EMISSION REGIONAL / CE',
    name: {
      en: 'Horizon Regional B-EMU Platform',
      de: 'Horizon Regional B-EMU Plattform',
    },
    tagline: {
      en: 'Hybrid catenary and lithium-titanate battery fleet for non-electrified corridors.',
      de: 'Hybrid-Fahrleitungs- und Lithium-Titanat-Akkuzug für teilelektrifizierte Strecken.',
    },
    categoryLabel: {
      en: 'Zero-Emission Regional Transit',
      de: 'Emissionsfreier Nahverkehr',
    },
    description: {
      en: 'Eliminates diesel rail emissions on non-electrified branch lines. Recharges within 12 minutes under station catenary or overhead charging gantries while delivering 120 km autonomous battery range at 160 km/h service speed.',
      de: 'Ersetzt Dieselzüge auf nicht-elektrifizierten Nebenstrecken. Lädt innerhalb von 12 Minuten unter regulärer Oberleitung oder Ladestationen bei 120 km autonomer Reichweite und 160 km/h Reisegeschwindigkeit.',
    },
    image: rsHorizon,
    imageAlt: {
      en: 'Horizon Regional EMU trainset standing at modern station platform',
      de: 'Horizon Regional-Triebzug am modernen Bahnsteig',
    },
    metrics: [
      { label: { en: 'Battery Range', de: 'Akkureichweite' }, value: '120 km', isAccent: true },
      { label: { en: 'Charge Duration', de: 'Ladedauer' }, value: '12 min' },
      { label: { en: 'Commercial Speed', de: 'Betriebsgeschw.' }, value: '160 km/h' },
      { label: { en: 'Recuperation', de: 'Rekuperation' }, value: '98.6%' },
    ],
    specs: [
      { label: { en: 'Cell Chemistry', de: 'Zellchemie' }, value: 'Lithium Titanate (LTO)' },
      { label: { en: 'Battery Pack Capacity', de: 'Batteriekapazität' }, value: '520 kWh per power coach' },
      { label: { en: 'Passenger Capacity', de: 'Sitzplatzkapazität' }, value: '180 – 320 seats' },
      { label: { en: 'Lifecycle Expectancy', de: 'Zyklenfestigkeit' }, value: '25,000 charge cycles' },
    ],
    highlights: {
      en: [
        'Direct drop-in replacement for Class 100/200 legacy diesel multiple units.',
        'Thermal runaway immune LTO battery pack with active liquid dielectric cooling.',
        'Ultra-low cabin noise levels (≤ 62 dBA at 140 km/h).',
      ],
      de: [
        'Direkter Ersatz für herkömmliche Diesel-Triebwagen ohne Gleisumbauten.',
        'Eigensichere LTO-Batterieblöcke mit dielektrischer Flüssigkeitskühlung.',
        'Hervorragend gedämmter Fahrgastraum mit maximal 62 dBA bei 140 km/h.',
      ],
    },
    certifications: ['EN 50125-1', 'UN 38.3', 'EN 45545 HL3', 'TSI LOC&PAS'],
    deepLink: '/rolling-stock',
  },
  {
    id: 'etcs-neural-atp',
    category: 'signalling-ai',
    code: 'ZS-ETCS-L3-NEURAL',
    badge: 'CENELEC SIL-4 / ETCS BL3',
    name: {
      en: 'ETCS-L3 Neural Train Protection & Optical Vision',
      de: 'ETCS-L3 Neuraler Zugschutz & Optische Hinderniserkennung',
    },
    tagline: {
      en: 'SIL-4 moving-block signalling paired with trackside neural vision perception.',
      de: 'SIL-4 Moving-Block-Zugsicherung mit neuronaler optischer Gleisüberwachung.',
    },
    categoryLabel: {
      en: 'Autonomous Signalling & Headway Control',
      de: 'Autonome Signaltechnik & Zugabstandsregelung',
    },
    description: {
      en: 'Sovereign train protection architecture developed in Bengaluru and certified to CENELEC EN 50128 SIL-4. Features multi-spectral optical neural networks capable of detecting obstacles, rail deformities, and track-intruders at 850m distance under zero-visibility conditions.',
      de: 'Zukunftsweisende Zugsicherungsarchitektur, entwickelt in Bengaluru und zertifiziert nach CENELEC EN 50128 SIL-4. Multispektrale neuronale Bildverarbeitung erkennt Hindernisse, Gleisverwerfungen und Fremdkörper auf 850 m Distanz auch bei Nullsicht.',
    },
    image: rsEtcs,
    imageAlt: {
      en: 'Forward-facing autonomous optical rail sensor array in trainset nose',
      de: 'Vorausschauendes optisches Sensorsystem in der Triebzugnase',
    },
    metrics: [
      { label: { en: 'Headway Minimum', de: 'Mindestzugfolge' }, value: '75 sec', isAccent: true },
      { label: { en: 'Perception Range', de: 'Erfassungsreichweite' }, value: '850 m' },
      { label: { en: 'Safety Level', de: 'Sicherheitslevel' }, value: 'SIL-4' },
      { label: { en: 'Odometry Precision', de: 'Wegmesspräzision' }, value: '±0.05%' },
    ],
    specs: [
      { label: { en: 'Standard Compliance', de: 'Normenkonformität' }, value: 'ETCS Baseline 3 Release 2' },
      { label: { en: 'Radio Protocol', de: 'Funkprotokoll' }, value: 'GSM-R & Future FRMCS (5G-Rail)' },
      { label: { en: 'Sensor Integration', de: 'Sensoreinheiten' }, value: '77 GHz FMCW Radar + Dual SWIR LiDAR' },
      { label: { en: 'Computer Hardware', de: 'Rechnerarchitektur' }, value: 'Triple-Modular Redundant (TMR)' },
    ],
    highlights: {
      en: [
        'Enables sub-90-second moving block headways on high-density mixed traffic corridors.',
        'Continuous Doppler radar and optical odometry eliminates wheel-slip distance drift.',
        'Dual-homed FRMCS radio link with quantum-resistant encryption.',
      ],
      de: [
        'Ermöglicht Zugfolgen unter 90 Sekunden im Moving-Block-Betrieb bei Mischverkehr.',
        'Doppler-Radar und optische Wegmessung eliminieren Schlupffehler vollständig.',
        'FRMCS-Mobilfunkredundanz mit quantensicherer Ende-zu-Ende-Verschlüsselung.',
      ],
    },
    certifications: ['CENELEC EN 50126/128/129', 'ETCS B3 R2', 'TSI CCS-2024'],
    deepLink: '/signalling',
  },
  {
    id: 'sic-3300-inverter',
    category: 'power-electronics',
    code: 'ZS-SIC-3300-TX',
    badge: '3.3 kV MOSFET / 98.7% EFF',
    name: {
      en: 'SiC-3300 Liquid-Cooled Traction Inverter',
      de: 'SiC-3300 Flüssigkeitsgekühlter Traktionsumrichter',
    },
    tagline: {
      en: 'Next-generation silicon-carbide semiconductor propulsion module.',
      de: 'Siliziumkarbid-Halbleiter-Traktionsantrieb der nächsten Generation.',
    },
    categoryLabel: {
      en: 'Traction Power Electronics',
      de: 'Antriebs- & Leistungselektronik',
    },
    description: {
      en: 'High-frequency 3.3 kV SiC MOSFET power switches engineered in Munich and Frankfurt. Reduces thermal dissipation losses by 42% compared to conventional IGBTs, delivering unmatched acoustic quietness, higher power density, and continuous torque across 0 to 6,000 RPM.',
      de: 'Hochfrequente 3,3-kV-SiC-MOSFET-Leistungshalbleiter, entwickelt in München und Frankfurt. Senkt thermische Verlustleistungen um 42% gegenüber herkömmlichen IGBTs und bietet flüsterleisen Betrieb sowie maximales Drehmoment von 0 bis 6.000 U/min.',
    },
    image: rsInverter,
    imageAlt: {
      en: 'Engineer bench-testing silicon carbide power inverter in clean room',
      de: 'Ingenieur beim Testen des Siliziumkarbid-Umrichters im Prüflabor',
    },
    metrics: [
      { label: { en: 'Efficiency', de: 'Wirkungsgrad' }, value: '98.7%', isAccent: true },
      { label: { en: 'Switching Freq', de: 'Schaltfrequenz' }, value: '16 kHz' },
      { label: { en: 'Volume Reduction', de: 'Bauraumersparnis' }, value: '−38%' },
      { label: { en: 'Operating Temp', de: 'Einsatztemperatur' }, value: '−40°C … +55°C' },
    ],
    specs: [
      { label: { en: 'Continuous Output', de: 'Dauerleistung' }, value: '1,400 kVA per module' },
      { label: { en: 'DC Link Voltage', de: 'Zwischenkreisspannung' }, value: '1,800 – 3,600 V DC' },
      { label: { en: 'Cooling Medium', de: 'Kühlmedium' }, value: 'Bio-degradable deionized water-glycol' },
      { label: { en: 'Semiconductor Type', de: 'Halbleitertyp' }, value: 'Wide Bandgap SiC MOSFET' },
    ],
    highlights: {
      en: [
        'Virtually eliminates audible traction motor whine through ultra-high switching frequencies.',
        'Integrated regenerative backfeed bridge returns braking current directly into overhead lines.',
        'Modular slide-in tray design allows underfloor module replacement in under 25 minutes.',
      ],
      de: [
        'Eliminiert hörbare Motorpfeifgeräusche durch ultrahohe Taktfrequenzen über 16 kHz.',
        'Integrierte Netzrückspeiseeinheit leitet Bremsenergie verlustarm in die Fahrleitung.',
        'Modulare Einschubtechnik ermöglicht den Komponententausch im Unterflurbereich unter 25 Min.',
      ],
    },
    certifications: ['IEC 61287-1', 'EN 50155', 'IEC 60077', 'ISO 9001 / IRIS'],
    deepLink: '/components',
  },
  {
    id: 'velox-intercity',
    category: 'rolling-stock',
    code: 'ZS-VELOX-IC250',
    badge: 'MULTI-VOLTAGE TRANS-EU',
    name: {
      en: 'Velox InterCity Multi-Voltage EMU',
      de: 'Velox InterCity Mehrsystem-Triebzug',
    },
    tagline: {
      en: 'Cross-border intercity fleet capable of seamless voltage and signalling changeovers.',
      de: 'Grenzüberschreitender Fernzug mit automatischer Stromsystem- und Signalumschaltung.',
    },
    categoryLabel: {
      en: 'InterCity & Long-Distance Express',
      de: 'InterCity- & Fernverkehrsexpress',
    },
    description: {
      en: 'Designed for international corridors requiring seamless transition across 15 kV 16.7 Hz AC, 25 kV 50 Hz AC, 3 kV DC, and 1.5 kV DC. Features pressurized aerodynamic passenger coaches, low-noise acoustic floors, and panoramic ergonomic seating for long-haul journeys.',
      de: 'Entwickelt für paneuropäische Korridore mit automatischer Umschaltung zwischen 15 kV 16,7 Hz, 25 kV 50 Hz, 3 kV DC und 1,5 kV DC. Bietet druckertüchtigte Wagenkästen, extrem leise Akustikböden und ergonomische Komfortzonen für die Langstrecke.',
    },
    image: rsVelox,
    imageAlt: {
      en: 'Velox InterCity train coach passing through mountain valley',
      de: 'Velox InterCity Fernzug bei der Durchquerung eines Bergtals',
    },
    metrics: [
      { label: { en: 'Max Speed', de: 'Höchstgeschw.' }, value: '250 km/h' },
      { label: { en: 'Voltages Supported', de: 'Stromsysteme' }, value: '4 Systems', isAccent: true },
      { label: { en: 'Cabin Noise', de: 'Innenraumpegel' }, value: '≤ 58 dBA' },
      { label: { en: 'Formation Length', de: 'Zuglänge' }, value: '200 – 400 m' },
    ],
    specs: [
      { label: { en: 'Available Seating', de: 'Fahrgastkapazität' }, value: '460 – 920 passengers' },
      { label: { en: 'Pressure Sealing', de: 'Druckdichtigkeit' }, value: 'Full aerodynamic seal for tunnels' },
      { label: { en: 'HVAC Air Exchange', de: 'Klimatisierung' }, value: 'CO2-sensing HEPA filtration' },
      { label: { en: 'Connectivity', de: 'Passagier-WLAN' }, value: 'Dual 5G multi-carrier satellite array' },
    ],
    highlights: {
      en: [
        'Instantaneous dynamic power phase transition with zero traction loss at borders.',
        'Modular interior layout convertible from high-capacity commuter to luxury sleeper.',
        'Pressure-tight gangways prevent eardrum discomfort during 250 km/h tunnel crossings.',
      ],
      de: [
        'Unterbrechungsfreie Schutzstreckendurchfahrt und automatische Grenzsystemumschaltung.',
        'Wandelbarer Innenraum von dichter Großraum- bis hin zu Luxus-Schlafwagenkonfiguration.',
        'Druckdichte Wagenübergänge verhindern Druckstöße im Gehörgang bei Tunnelfahrten mit 250 km/h.',
      ],
    },
    certifications: ['TSI LOC&PAS', 'TSI PRM (Barrier-Free)', 'TSI SRT (Safety in Tunnels)', 'EN 15085'],
    deepLink: '/rolling-stock',
  },
  {
    id: 'predictive-telematics',
    category: 'digital-rail',
    code: 'ZS-TELEMATICS-CORE',
    badge: 'AI EDGE COMPUTING / SIL-2',
    name: {
      en: 'Predictive Rail Telematics & Fleet Core',
      de: 'Prädiktive Schienen-Telemetrie & Flotten-Core',
    },
    tagline: {
      en: 'Continuous edge-AI sensor array predicting mechanical anomalies before failure.',
      de: 'Kontinuierliche Edge-KI-Sensorik zur Früherkennung mechanischer Anomalien.',
    },
    categoryLabel: {
      en: 'Digital Rail & Autonomous Maintenance',
      de: 'Digitale Schiene & Autonome Instandhaltung',
    },
    description: {
      en: 'Comprehensive digital rail platform architected in Bengaluru. Integrates over 1,800 telemetry points per trainset—monitoring bearing acoustic harmonics, pantograph arcing thermography, and wheel-flat vibration patterns to schedule depot interventions with 99.88% availability.',
      de: 'Umfassende digitale Bahnplattform aus unseren Entwicklungszentren in Bengaluru. Überwacht mehr als 1.800 Telemetriepunkte pro Triebzug — von akustischen Lagerschwingungen über Stromabnehmer-Thermografie bis zu Flachstellen, um Depotaufenthalte vorausschauend zu steuern.',
    },
    image: rsTelematics,
    imageAlt: {
      en: 'Service engineers utilizing mobile telemetry diagnostics tablet next to trainset',
      de: 'Servicetechniker mit digitalem Diagnosetablet am Triebzug im Wartungswerk',
    },
    metrics: [
      { label: { en: 'Fleet Availability', de: 'Flottenverfügbarkeit' }, value: '99.88%', isAccent: true },
      { label: { en: 'Sensors / Trainset', de: 'Sensoren / Zug' }, value: '1,840' },
      { label: { en: 'Unscheduled Stops', de: 'Außerplanm. Halte' }, value: '−74%' },
      { label: { en: 'Telemetry Latency', de: 'Übertragungszeit' }, value: '≤ 120 ms' },
    ],
    specs: [
      { label: { en: 'Edge Processor', de: 'Edge-Recheneinheit' }, value: 'Quad-Core Rail-Grade NPU' },
      { label: { en: 'Data Protocol', de: 'Datenprotokoll' }, value: 'MQTT / Kafka over TLS 1.3' },
      { label: { en: 'Depot ERP Sync', de: 'Werkstattanbindung' }, value: 'Automated SAP / IBM Maximo API' },
      { label: { en: 'Cyber-Security', de: 'Cybersicherheit' }, value: 'IEC 62443 Security Level 3' },
    ],
    highlights: {
      en: [
        'Automated parts staging at the receiving depot 6 hours prior to train arrival.',
        'Acoustic bearing analysis detects raceway spalling up to 60,000 km prior to failure.',
        'Cryptographically secured digital journey logbook compliant with EU CSM-RA.',
      ],
      de: [
        'Automatische Ersatzteilbereitstellung im Depot 6 Stunden vor Ankunft des Zuges.',
        'Akustische Frequenzanalyse erkennt Lagerschäden bis zu 60.000 km vor einem Ausfall.',
        'Kryptografisch versiegeltes elektronisches Fahrtenbuch nach EU CSM-RA Vorgaben.',
      ],
    },
    certifications: ['IEC 62443-4-2', 'EN 50155', 'EU CSM-RA', 'ISO 27001'],
    deepLink: '/digital-rail',
  },
  {
    id: 'monolithic-infrastructure',
    category: 'infrastructure',
    code: 'ZS-SUPERSTRUCTURE-25K',
    badge: 'FIDIC SILVER / 40Y LIFE',
    name: {
      en: 'High-Velocity Catenary & Slab Superstructure',
      de: 'Hochgeschwindigkeits-Oberbau & Feste Fahrbahn',
    },
    tagline: {
      en: 'Integrated 25 kV AC catenary and monolithic ballastless slab corridor synthesis.',
      de: 'Ganzheitliche 25-kV-Fahrleitung und feste Fahrbahn für Hochgeschwindigkeitskorridore.',
    },
    categoryLabel: {
      en: 'Turnkey Infrastructure & Civil Superstructure',
      de: 'Schlüsselfertige Bahn-Infrastruktur',
    },
    description: {
      en: 'Turnkey corridor electrification and ballastless slab track engineering delivered under FIDIC Silver Book conditions. Engineered for 350+ km/h sustained axle loading with laser-tacheometry subgrade homologation and zero maintenance window downtime over a 40-year design lifecycle.',
      de: 'Schlüsselfertige Elektrifizierung und schotterloser Oberbau nach FIDIC Silver Book. Ausgelegt für dauerhafte 350+ km/h Achslastbeanspruchung mit submillimetergenauer Laserausrichtung und wartungsfreiem Betrieb über einen Lebenszyklus von 40 Jahren.',
    },
    image: rsInfra,
    imageAlt: {
      en: 'Electrified high-speed corridor with catenary masts and continuous concrete trackbed',
      de: 'Elektrifizierter Hochgeschwindigkeitskorridor mit Oberleitung und fester Fahrbahn',
    },
    metrics: [
      { label: { en: 'Design Lifecycle', de: 'Bemessungsdauer' }, value: '40 Years', isAccent: true },
      { label: { en: 'Track Tolerance', de: 'Gleislagetoleranz' }, value: '±0.5 mm' },
      { label: { en: 'Catenary Tension', de: 'Fahrleitungszug' }, value: '25 kN (CuMg)' },
      { label: { en: 'Maintenance Save', de: 'Instandhaltung' }, value: '−68%' },
    ],
    specs: [
      { label: { en: 'Trackbed System', de: 'Oberbausystem' }, value: 'Continuous Monolithic Slab Track' },
      { label: { en: 'Electrification Spec', de: 'Fahrleitungssystem' }, value: '25 kV 50 Hz AC High-Tensile Catenary' },
      { label: { en: 'Max Design Velocity', de: 'Entwurfsgeschw.' }, value: '400 km/h envelope' },
      { label: { en: 'Corridor Nodes Delivered', de: 'Installierte Knoten' }, value: '14,200+ continuous km' },
    ],
    highlights: {
      en: [
        'Eliminates ballast churning and stone flying hazards at velocities over 250 km/h.',
        'High-conductivity copper-magnesium contact wire prevents thermal pantograph fatigue.',
        'Bilateral EPC delivery with sovereign long-term availability guarantees.',
      ],
      de: [
        'Verhindert Schotterflug und Gleisbettverschiebungen bei Geschwindigkeiten über 250 km/h.',
        'Hochfester Kupfer-Magnesium-Fahrdraht verhindert thermische Überlastung der Stromabnehmer.',
        'Bilateraler EPC-Gesamtauftrag mit souveränen Verfügbarkeitsgarantien über Jahrzehnte.',
      ],
    },
    certifications: ['TSI INF-2024', 'TSI ENE-2024', 'EN 13803', 'FIDIC Silver Book'],
    deepLink: '/infrastructure',
  },
];

export const platformComparisonMatrix = {
  columns: [
    { key: 'platform', label: { en: 'Product Platform', de: 'Produkt-Plattform' } },
    { key: 'category', label: { en: 'Engineering Domain', de: 'Fachbereich' } },
    { key: 'velocity', label: { en: 'Design Velocity', de: 'Auslegungsgeschw.' } },
    { key: 'propulsion', label: { en: 'Propulsion / Architecture', de: 'Antriebsarchitektur' } },
    { key: 'silRating', label: { en: 'Safety / Certification', de: 'Sicherheitszertifikat' } },
    { key: 'overhaul', label: { en: 'Overhaul Interval', de: 'Revisionsintervall' } },
    { key: 'mfgHubs', label: { en: 'Primary Facilities', de: 'Fertigung & Entwicklung' } },
  ],
  rows: [
    {
      platform: 'Apex 350 EMU',
      category: { en: 'High-Speed Rail', de: 'Hochgeschwindigkeitszug' },
      velocity: '360 km/h',
      propulsion: 'Distributed SiC MOSFET',
      silRating: 'TSI HS-2024 / SIL-4',
      overhaul: '1.2M km',
      mfgHubs: 'Kassel & Bengaluru',
    },
    {
      platform: 'KSL-350 Bogie',
      category: { en: 'Heavy Metallurgy', de: 'Schwere Drehgestelle' },
      velocity: '360 km/h',
      propulsion: 'Mechanical Chassis + Telematics',
      silRating: 'EN 13749 Class E',
      overhaul: '1.2M km',
      mfgHubs: 'Kassel Werk Pit IV',
    },
    {
      platform: 'Horizon Regional',
      category: { en: 'Zero-Emission B-EMU', de: 'Batterie-Triebzug' },
      velocity: '160 km/h',
      propulsion: 'Catenary + LTO Battery',
      silRating: 'TSI LOC&PAS / SIL-2',
      overhaul: '800,000 km',
      mfgHubs: 'Frankfurt & Bengaluru',
    },
    {
      platform: 'ETCS-L3 Neural',
      category: { en: 'Signalling & Vision', de: 'Signaltechnik & KI' },
      velocity: 'Continuous',
      propulsion: 'SIL-4 Onboard ATP & Optical NPU',
      silRating: 'CENELEC SIL-4',
      overhaul: 'Predictive (Continuous)',
      mfgHubs: 'Bengaluru DeepTech Lab',
    },
    {
      platform: 'SiC-3300 Inverter',
      category: { en: 'Power Electronics', de: 'Leistungselektronik' },
      velocity: '3.3 kV / 16 kHz',
      propulsion: 'Liquid-Cooled SiC MOSFET',
      silRating: 'IEC 61287-1 / IRIS',
      overhaul: '2.5M km',
      mfgHubs: 'Munich & Frankfurt',
    },
    {
      platform: 'Velox InterCity',
      category: { en: 'Cross-Border EMU', de: 'Fernverkehrs-Express' },
      velocity: '250 km/h',
      propulsion: 'Multi-Voltage Quad System',
      silRating: 'TSI LOC&PAS / PRM',
      overhaul: '1.0M km',
      mfgHubs: 'Kassel & Frankfurt',
    },
    {
      platform: 'Predictive Telematics',
      category: { en: 'Digital Rail IoT', de: 'Digitale Telemetrie' },
      velocity: 'Real-time (<120ms)',
      propulsion: 'Edge AI + Multi-Axis Sensing',
      silRating: 'IEC 62443 SL3',
      overhaul: 'Over-The-Air Continuous',
      mfgHubs: 'Bengaluru & Hyderabad',
    },
    {
      platform: 'Monolithic Superstructure',
      category: { en: 'Turnkey Infrastructure', de: 'Schlüsselfertiger Oberbau' },
      velocity: '400 km/h Envelope',
      propulsion: '25 kV AC Catenary + Slab',
      silRating: 'FIDIC Silver / TSI INF',
      overhaul: '40-Year Design Life',
      mfgHubs: 'Transnational EPC Consortia',
    },
  ],
};
