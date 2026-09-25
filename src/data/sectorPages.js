import turbineImg from '../assets/hero_bg_3.jpg';
import bodyshopImg from '../assets/carbody_laser_welding.jpg';
import latticeImg from '../assets/carbody_laser_welding.jpg';
import fabHallImg from '../assets/high_speed_bogie.jpg';
import cleanroomImg from '../assets/deeptech_software_lab.jpg';
import siliconImg from '../assets/traction_inverter.jpg';

/**
 * Editorial content for the two sector pages. Both render through
 * <SectorPage>, so the shape here is the page's contract.
 */
export const sectorPages = {
  aerospace: {
    slug: 'aerospace',
    eyebrow: { en: 'Sector 01 · Aerospace', de: 'Sektor 01 · Luft- und Raumfahrt' },
    title: {
      en: 'Aerospace Structures & <em>Turbomachinery</em>',
      de: 'Luftfahrtstrukturen & <em>Turbomaschinen</em>',
    },
    lede: {
      en: 'Aerostructure metallurgy, high-temperature turbomachinery and composite discipline — the materials science that makes a 350 km/h carbody both lighter and stiffer.',
      de: 'Metallurgie für Luftfahrtstrukturen, Hochtemperatur-Turbomaschinen und Verbundwerkstoffe — die Werkstoffwissenschaft, die einen Wagenkasten für 350 km/h zugleich leichter und steifer macht.',
    },
    specs: [
      { label: { en: 'Certification', de: 'Zertifizierung' }, value: 'EN 9100 / AS9100D' },
      { label: { en: 'Service temp', de: 'Einsatztemperatur' }, value: '−55 °C … +1 150 °C' },
    ],
    hero: {
      image: turbineImg,
      alt: {
        en: 'Sectioned turbine assembly illuminated from within on a workshop floor',
        de: 'Aufgeschnittene Turbinenbaugruppe, von innen beleuchtet, in einer Werkhalle',
      },
      caption: {
        en: 'Single-crystal blade metallurgy validated across 30 000 thermal cycles',
        de: 'Einkristall-Schaufelmetallurgie, validiert über 30.000 Thermozyklen',
      },
      body: {
        en: 'Nickel-superalloy blade sets and titanium casings proven in aero service, transferred into rail traction cooling and crash-structure design.',
        de: 'Schaufelsätze aus Nickel-Superlegierungen und Titangehäuse, bewährt im Flugbetrieb, übertragen auf Traktionskühlung und Crashstrukturen im Schienenfahrzeugbau.',
      },
      stats: [
        { label: { en: 'Mass saving', de: 'Masseeinsparung' }, value: '−31 %' },
        { label: { en: 'Fatigue life', de: 'Lebensdauer' }, value: '30 000 cyc' },
      ],
    },
    mandate: {
      eyebrow: { en: 'Transnational Mandate', de: 'Transnationaler Auftrag' },
      title: {
        en: 'Where flight-grade discipline meets the railway',
        de: 'Wo Disziplin aus der Luftfahrt auf die Schiene trifft',
      },
      body: {
        en: 'Aerospace demands that every gram be justified and every joint be traceable. Zebrold applies that same evidentiary standard to rolling stock: each structural component carries a material certificate, a process record and a fatigue dossier from mill to service.',
        de: 'Die Luftfahrt verlangt, dass jedes Gramm begründet und jede Fügestelle rückverfolgbar ist. Zebrold überträgt diesen Nachweisstandard auf Schienenfahrzeuge: Jedes Strukturbauteil führt Werkstoffzeugnis, Prozessaufzeichnung und Ermüdungsdossier vom Walzwerk bis in den Betrieb.',
      },
      note: {
        heading: { en: 'Qualification basis', de: 'Qualifikationsgrundlage' },
        body: {
          en: 'Qualified under EN 9100 with material traceability to EN 10204 3.1, and cross-accepted into rail structures via EN 15085 welding certification.',
          de: 'Qualifiziert nach EN 9100 mit Werkstoffrückverfolgbarkeit gemäß EN 10204 3.1 und über die Schweißzertifizierung EN 15085 in Schienenfahrzeugstrukturen überführt.',
        },
      },
      divisions: [
        {
          eyebrow: { en: 'Division 01 · Kassel', de: 'Bereich 01 · Kassel' },
          title: { en: 'Structures & Metallurgy', de: 'Strukturen & Metallurgie' },
          body: {
            en: 'Titanium and aluminium-lithium forming, friction-stir welded panels and non-destructive inspection to aerospace acceptance limits.',
            de: 'Umformung von Titan und Aluminium-Lithium, rührreibgeschweißte Paneele und zerstörungsfreie Prüfung nach Abnahmegrenzen der Luftfahrt.',
          },
          points: {
            en: [
              'Friction-stir welded floor panels',
              'Al-Li alloys at 2.55 g/cm³',
              'Phased-array UT on 100% of welds',
            ],
            de: [
              'Rührreibgeschweißte Bodenpaneele',
              'Al-Li-Legierungen mit 2,55 g/cm³',
              'Phased-Array-Ultraschall an 100 % der Nähte',
            ],
          },
        },
        {
          eyebrow: { en: 'Division 02 · Bengaluru', de: 'Bereich 02 · Bengaluru' },
          title: { en: 'Composites & Additive', de: 'Verbundwerkstoffe & Additive Fertigung' },
          body: {
            en: 'Autoclave-cured carbon structures and lattice-optimised additive parts that remove mass without touching stiffness targets.',
            de: 'Autoklav-gehärtete Kohlefaserstrukturen und gitteroptimierte additive Bauteile, die Masse reduzieren, ohne Steifigkeitsziele zu verfehlen.',
          },
          points: {
            en: ['41 series additive part numbers', 'Lattice infill to 12% density', 'EN 45545-2 HL3 fire rating'],
            de: ['41 additive Serienteilnummern', 'Gitterfüllung bis 12 % Dichte', 'Brandschutz EN 45545-2 HL3'],
          },
        },
      ],
    },
    platformsTitle: { en: 'Programme Lines', de: 'Programmlinien' },
    platformsLede: {
      en: 'Two aerospace disciplines feeding directly into the Scolome rolling stock platform.',
      de: 'Zwei Luftfahrtdisziplinen, die direkt in die Scolome-Plattform einfließen.',
    },
    platforms: [
      {
        id: 'ax-turbo',
        tag: { en: 'Class T · Turbomachinery', de: 'Klasse T · Turbomaschinen' },
        badge: 'EN 9100 CERTIFIED',
        name: 'Zebrold AeroCore T7',
        subtitle: {
          en: 'High-temperature turbine and thermal management',
          de: 'Hochtemperaturturbine und Thermomanagement',
        },
        image: turbineImg,
        alt: {
          en: 'Illuminated turbine cutaway on the shop floor',
          de: 'Beleuchteter Turbinenschnitt in der Werkhalle',
        },
        body: {
          en: 'Single-crystal nickel-superalloy blades with thermal barrier coatings hold their creep margin at 1 150 °C. The same coating chemistry and cooling-channel modelling now govern traction converter heat rejection on the Apex 350, where inverter junction temperature limits fleet availability more than any mechanical wear item.',
          de: 'Einkristall-Schaufeln aus Nickel-Superlegierung mit Wärmedämmschichten halten ihre Kriechreserve bei 1.150 °C. Dieselbe Schichtchemie und Kühlkanalmodellierung bestimmt heute die Wärmeabfuhr der Traktionsumrichter im Apex 350, wo die Sperrschichttemperatur die Flottenverfügbarkeit stärker begrenzt als jedes mechanische Verschleißteil.',
        },
        specs: [
          { label: { en: 'Turbine inlet', de: 'Turbineneintritt' }, value: '1 150 °C' },
          { label: { en: 'Blade life', de: 'Schaufellebensdauer' }, value: '30 000 cyc' },
          { label: { en: 'Coating', de: 'Beschichtung' }, value: 'YSZ TBC' },
        ],
      },
      {
        id: 'ax-struct',
        tag: { en: 'Class S · Structures', de: 'Klasse S · Strukturen' },
        badge: 'EN 15085 CL1',
        name: 'Zebrold AeroCore S4',
        subtitle: { en: 'Lightweight carbody and crash structures', de: 'Leichtbau-Wagenkasten und Crashstrukturen' },
        image: latticeImg,
        alt: {
          en: 'Additively manufactured lattice structure component',
          de: 'Additiv gefertigtes Gitterstrukturbauteil',
        },
        body: {
          en: 'Aluminium-lithium extrusions and lattice-optimised additive brackets cut 31% of structural mass against the previous steel-intensive baseline, while raising torsional stiffness. Crash energy management follows EN 15227 scenarios C-I through C-IV, absorbing 4.5 MJ through sacrificial deformation modules that leave the passenger survival space intact.',
          de: 'Aluminium-Lithium-Strangpressprofile und gitteroptimierte additive Halterungen senken 31 % der Strukturmasse gegenüber der vorherigen stahlintensiven Basis — bei gleichzeitig höherer Torsionssteifigkeit. Das Crash-Energiemanagement folgt den Szenarien C-I bis C-IV der EN 15227 und absorbiert 4,5 MJ über Opferdeformationsmodule, die den Überlebensraum der Fahrgäste unversehrt lassen.',
        },
        specs: [
          { label: { en: 'Mass saving', de: 'Masseeinsparung' }, value: '−31 %' },
          { label: { en: 'Crash energy', de: 'Crashenergie' }, value: '4.5 MJ' },
          { label: { en: 'Density', de: 'Dichte' }, value: '2.55 g/cm³' },
        ],
      },
    ],
  },

  automotive: {
    slug: 'automotive',
    eyebrow: { en: 'Sector 02 · Automotive', de: 'Sektor 02 · Automobil' },
    title: {
      en: 'Electrified Drivetrain & <em>Series Automation</em>',
      de: 'Elektrifizierter Antriebsstrang & <em>Serienautomatisierung</em>',
    },
    lede: {
      en: 'High-volume automotive manufacturing discipline — takt, tolerance and traction electronics — applied to a rail industry that has historically built in tens, not thousands.',
      de: 'Fertigungsdisziplin aus der Großserie — Takt, Toleranz und Traktionselektronik — angewandt auf eine Branche, die bislang in Zehnern statt in Tausenden gebaut hat.',
    },
    specs: [
      { label: { en: 'Line takt', de: 'Linientakt' }, value: '26 h / shell' },
      { label: { en: 'Inverter', de: 'Umrichter' }, value: 'SiC 3.3 kV' },
    ],
    hero: {
      image: bodyshopImg,
      alt: {
        en: 'Robotic arms welding a vehicle bodyshell on an automated production line',
        de: 'Roboterarme schweißen eine Fahrzeugkarosserie auf einer automatisierten Fertigungslinie',
      },
      caption: {
        en: 'Automated bodyshell cells holding ±0.4 mm across a 26 m carbody',
        de: 'Automatisierte Rohbauzellen mit ±0,4 mm über einen 26 m langen Wagenkasten',
      },
      body: {
        en: 'Automotive body-in-white robotics retooled for rail-scale structures, holding automotive tolerances at ten times the part length.',
        de: 'Rohbau-Robotik aus der Automobilfertigung, umgerüstet auf Schienenfahrzeugstrukturen — mit Automobiltoleranzen bei zehnfacher Bauteillänge.',
      },
      stats: [
        { label: { en: 'Tolerance', de: 'Toleranz' }, value: '±0.4 mm' },
        { label: { en: 'Recuperation', de: 'Rekuperation' }, value: '98.2 %' },
      ],
    },
    mandate: {
      eyebrow: { en: 'Transnational Mandate', de: 'Transnationaler Auftrag' },
      title: {
        en: 'Series thinking for a bespoke industry',
        de: 'Seriendenken für eine Manufakturbranche',
      },
      body: {
        en: 'Rolling stock has long been built as bespoke engineering. Zebrold runs it as a product programme: frozen interfaces, a common traction architecture and a fixed line takt, so the ninth trainset costs materially less to build than the first and behaves identically in service.',
        de: 'Schienenfahrzeuge entstanden lange als Einzelanfertigung. Zebrold führt sie als Produktprogramm: eingefrorene Schnittstellen, eine gemeinsame Traktionsarchitektur und ein fester Linientakt — so kostet der neunte Triebzug deutlich weniger als der erste und verhält sich im Betrieb identisch.',
      },
      note: {
        heading: { en: 'Platform commonality', de: 'Plattformgleichteile' },
        body: {
          en: '78% part commonality across the Apex 350 and 2.0 regional platforms, cutting spares inventory and shortening depot training by an estimated 40%.',
          de: '78 % Gleichteile zwischen der Apex-350- und der Regionalplattform 2.0 — das senkt den Ersatzteilbestand und verkürzt die Depotschulung um schätzungsweise 40 %.',
        },
      },
      divisions: [
        {
          eyebrow: { en: 'Division 01 · Frankfurt', de: 'Bereich 01 · Frankfurt' },
          title: { en: 'Traction & Power Electronics', de: 'Traktion & Leistungselektronik' },
          body: {
            en: 'Silicon-carbide inverters and permanent-magnet motors developed against automotive qualification cycles rather than bespoke rail one-offs.',
            de: 'Siliziumkarbid-Umrichter und Permanentmagnetmotoren, entwickelt nach Qualifikationszyklen der Automobilindustrie statt als Einzelanfertigung.',
          },
          points: {
            en: ['3.3 kV SiC inverter modules', '98.2% regenerative recovery', 'AEC-Q101 derived screening'],
            de: ['3,3-kV-SiC-Umrichtermodule', '98,2 % Rekuperation', 'Screening abgeleitet aus AEC-Q101'],
          },
        },
        {
          eyebrow: { en: 'Division 02 · Hyderabad', de: 'Bereich 02 · Hyderabad' },
          title: { en: 'Manufacturing Systems', de: 'Fertigungssysteme' },
          body: {
            en: 'Line control software, digital twins and station-level quality gates that hold takt across a 26-metre carbody.',
            de: 'Liniensteuerungssoftware, digitale Zwillinge und stationsbezogene Qualitätstore, die den Takt über einen 26-Meter-Wagenkasten halten.',
          },
          points: {
            en: ['One shell per 26 hours', 'In-line optical metrology', 'Full genealogy per VIN-equivalent'],
            de: ['Ein Rohbau je 26 Stunden', 'Inline-Optikmesstechnik', 'Lückenlose Genealogie je Fahrzeugnummer'],
          },
        },
      ],
    },
    platformsTitle: { en: 'Programme Lines', de: 'Programmlinien' },
    platformsLede: {
      en: 'Two automotive-derived programmes underpinning Scolome traction and assembly.',
      de: 'Zwei aus der Automobilindustrie abgeleitete Programme als Basis für Traktion und Montage.',
    },
    platforms: [
      {
        id: 'au-traction',
        tag: { en: 'Class E · Traction', de: 'Klasse E · Traktion' },
        badge: 'EN 50155 QUALIFIED',
        name: 'Zebrold DriveCore E9',
        subtitle: { en: 'Silicon-carbide traction package', de: 'Siliziumkarbid-Traktionspaket' },
        image: siliconImg,
        alt: {
          en: 'Illuminated semiconductor wafer inspected under laboratory light',
          de: 'Beleuchteter Halbleiterwafer unter Laborlicht',
        },
        body: {
          en: 'A 3.3 kV silicon-carbide inverter package cuts switching losses by roughly 42% against comparable IGBT hardware, which removes a cooling stage and with it a maintenance interval. Distributed along the undercarriage, it holds axle load below 16 tonnes while recovering 98.2% of braking energy under electrodynamic braking.',
          de: 'Ein 3,3-kV-Siliziumkarbid-Umrichterpaket senkt die Schaltverluste um rund 42 % gegenüber vergleichbarer IGBT-Technik — das erspart eine Kühlstufe und damit ein Wartungsintervall. Verteilt entlang des Unterbodens hält es die Achslast unter 16 Tonnen und gewinnt 98,2 % der Bremsenergie zurück.',
        },
        specs: [
          { label: { en: 'Blocking voltage', de: 'Sperrspannung' }, value: '3.3 kV' },
          { label: { en: 'Loss reduction', de: 'Verlustreduktion' }, value: '−42 %' },
          { label: { en: 'Axle load', de: 'Achslast' }, value: '< 16.0 t' },
        ],
      },
      {
        id: 'au-assembly',
        tag: { en: 'Class M · Manufacturing', de: 'Klasse M · Fertigung' },
        badge: 'IATF-DERIVED',
        name: 'Zebrold LineCore M3',
        subtitle: { en: 'Takted carbody assembly system', de: 'Getaktetes Wagenkasten-Montagesystem' },
        image: fabHallImg,
        alt: {
          en: 'Robotic welding cells fabricating steel frame assemblies',
          de: 'Roboterschweißzellen fertigen Stahlrahmenbaugruppen',
        },
        body: {
          en: 'Eleven robotic stations move a carbody shell through weld, measure and correct cycles on a fixed 26-hour takt. In-line optical metrology checks every shell against its digital twin before it leaves the station, so deviation is caught at the station that caused it rather than at final acceptance.',
          de: 'Elf Roboterstationen führen einen Wagenkasten-Rohbau in festem 26-Stunden-Takt durch Schweiß-, Mess- und Korrekturzyklen. Inline-Optikmesstechnik prüft jeden Rohbau gegen seinen digitalen Zwilling, bevor er die Station verlässt — Abweichungen werden dort erkannt, wo sie entstehen, nicht erst bei der Endabnahme.',
        },
        specs: [
          { label: { en: 'Takt', de: 'Takt' }, value: '26 h' },
          { label: { en: 'Stations', de: 'Stationen' }, value: '11' },
          { label: { en: 'Tolerance', de: 'Toleranz' }, value: '±0.4 mm' },
        ],
      },
    ],
    closing: {
      image: cleanroomImg,
      alt: {
        en: 'Technicians at workstations in a cleanroom production hall',
        de: 'Techniker an Arbeitsplätzen in einer Reinraum-Produktionshalle',
      },
    },
  },
};
