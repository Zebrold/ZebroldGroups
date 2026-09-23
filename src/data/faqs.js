/** FAQ entries grouped by theme. */
export const faqGroups = [
  {
    id: 'procurement',
    heading: { en: 'Procurement & programmes', de: 'Beschaffung & Programme' },
    items: [
      {
        q: {
          en: 'What is the typical lead time from contract signature to first trainset?',
          de: 'Wie lange dauert es typischerweise von der Vertragsunterzeichnung bis zum ersten Triebzug?',
        },
        a: {
          en: 'For a derivative of an existing platform, 26 to 34 months to first vehicle and a further 8 to 12 months to entry into passenger service, depending on the authorisation route. A genuinely new platform adds roughly 18 months for structural qualification and type testing.',
          de: 'Bei einer Ableitung einer bestehenden Plattform 26 bis 34 Monate bis zum ersten Fahrzeug und weitere 8 bis 12 Monate bis zur Inbetriebnahme im Fahrgastverkehr — abhängig vom Zulassungsweg. Eine wirklich neue Plattform erfordert rund 18 Monate zusätzlich für Strukturqualifikation und Typprüfung.',
        },
      },
      {
        q: {
          en: 'Do you take on availability contracts as well as vehicle supply?',
          de: 'Übernehmen Sie neben der Fahrzeuglieferung auch Verfügbarkeitsverträge?',
        },
        a: {
          en: 'Yes. Most current programmes combine supply with a 15 to 20 year availability regime covering maintenance, spares pooling and contractual uptime, managed from the Kassel service hub with regional depot partners.',
          de: 'Ja. Die meisten laufenden Programme verbinden die Lieferung mit einem 15- bis 20-jährigen Verfügbarkeitsregime für Wartung, Ersatzteilpooling und vertragliche Verfügbarkeit — gesteuert vom Service-Hub Kassel mit regionalen Depotpartnern.',
        },
      },
      {
        q: {
          en: 'Can an existing fleet be retrofitted rather than replaced?',
          de: 'Kann eine bestehende Flotte nachgerüstet statt ersetzt werden?',
        },
        a: {
          en: 'Often, yes — traction package replacement, ETCS fitment and interior refresh are all delivered as standalone programmes. Whether it is worth doing turns on remaining carbody fatigue life, which we assess before quoting.',
          de: 'Häufig ja — Austausch des Traktionspakets, ETCS-Ausrüstung und Innenraummodernisierung liefern wir als eigenständige Programme. Ob es sich lohnt, hängt von der verbleibenden Ermüdungslebensdauer des Wagenkastens ab, die wir vor einem Angebot bewerten.',
        },
      },
    ],
  },
  {
    id: 'certification',
    heading: { en: 'Certification & standards', de: 'Zertifizierung & Normen' },
    items: [
      {
        q: {
          en: 'Which standards are your vehicles certified against?',
          de: 'Nach welchen Normen sind Ihre Fahrzeuge zertifiziert?',
        },
        a: {
          en: 'European vehicles are authorised under the TSI framework, with structural design to EN 12663 and EN 13749, crashworthiness to EN 15227, welding to EN 15085, fire behaviour to EN 45545-2 and software to EN 50128. Indian programmes additionally follow the applicable RDSO specifications.',
          de: 'Europäische Fahrzeuge werden im TSI-Rahmen zugelassen: Strukturauslegung nach EN 12663 und EN 13749, Crashsicherheit nach EN 15227, Schweißen nach EN 15085, Brandverhalten nach EN 45545-2 und Software nach EN 50128. Indische Programme folgen zusätzlich den einschlägigen RDSO-Spezifikationen.',
        },
      },
      {
        q: {
          en: 'What does SIL-4 actually cover on your trains?',
          de: 'Was deckt SIL-4 auf Ihren Zügen tatsächlich ab?',
        },
        a: {
          en: 'SIL-4 applies to the train control and management functions whose failure could directly cause a hazardous event — braking command, door interlock and traction cut-off. Comfort and passenger information functions sit at lower integrity levels on physically separated hardware.',
          de: 'SIL-4 gilt für jene Zugsteuerungs- und Managementfunktionen, deren Ausfall unmittelbar zu einem gefährlichen Ereignis führen könnte — Bremsansteuerung, Türverriegelung und Traktionsabschaltung. Komfort- und Fahrgastinformationsfunktionen liegen auf niedrigeren Integritätsstufen auf physisch getrennter Hardware.',
        },
      },
      {
        q: {
          en: 'Is the obstacle-detection system allowed to apply the brake?',
          de: 'Darf das Hinderniserkennungssystem die Bremse auslösen?',
        },
        a: {
          en: 'No. It advises the driver. The certified SIL-4 braking chain is deliberately left unmodified while we build the evidence base that would be needed to justify autonomous intervention.',
          de: 'Nein. Es berät den Triebfahrzeugführer. Die zertifizierte SIL-4-Bremskette bleibt bewusst unverändert, während wir die Nachweisbasis aufbauen, die für einen autonomen Eingriff erforderlich wäre.',
        },
      },
    ],
  },
  {
    id: 'sustainability',
    heading: { en: 'Sustainability & supply chain', de: 'Nachhaltigkeit & Lieferkette' },
    items: [
      {
        q: {
          en: 'How much of a Scolome carbody is recycled material?',
          de: 'Wie hoch ist der Rezyklatanteil eines Scolome-Wagenkastens?',
        },
        a: {
          en: 'Carbody aluminium runs at 71% recycled content and is separable at end of life. Interior lattice components are single-material by design so they re-enter the recycling stream without manual separation.',
          de: 'Das Wagenkasten-Aluminium erreicht 71 % Rezyklatanteil und ist am Lebensende trennbar. Innenausbau-Gitterbauteile sind bewusst sortenrein ausgelegt und gelangen ohne manuelle Trennung zurück in den Recyclingkreislauf.',
        },
      },
      {
        q: {
          en: 'Do you still build diesel vehicles?',
          de: 'Bauen Sie noch Dieselfahrzeuge?',
        },
        a: {
          en: 'No. Every platform currently in production is battery-electric or fully electrified. Diesel has been removed from the regional roadmap entirely.',
          de: 'Nein. Jede derzeit in Produktion befindliche Plattform ist batterieelektrisch oder vollelektrifiziert. Diesel wurde vollständig aus der Regionalstrategie gestrichen.',
        },
      },
    ],
  },
  {
    id: 'careers',
    heading: { en: 'Working at Zebrold', de: 'Arbeiten bei Zebrold' },
    items: [
      {
        q: {
          en: 'Is the Indian site a support function for the German one?',
          de: 'Ist der indische Standort eine Zuarbeit für den deutschen?',
        },
        a: {
          en: 'No. Bengaluru and Hyderabad own the safety-critical software, traction algorithms and real-time computing outright. Neither site is a supplier to the other, and both hold equal authority in design reviews.',
          de: 'Nein. Bengaluru und Hyderabad verantworten sicherheitskritische Software, Traktionsalgorithmen und Echtzeitsysteme vollständig. Kein Standort ist Zulieferer des anderen; beide haben in Design Reviews gleiches Gewicht.',
        },
      },
      {
        q: {
          en: 'What language is engineering work conducted in?',
          de: 'In welcher Sprache wird die Ingenieurarbeit durchgeführt?',
        },
        a: {
          en: 'English is the working language for cross-site engineering and all certification evidence. German is used day to day at the Kassel and Frankfurt sites, and we support language learning in both directions.',
          de: 'Englisch ist die Arbeitssprache für standortübergreifende Technik und sämtliche Zertifizierungsnachweise. An den Standorten Kassel und Frankfurt wird im Alltag Deutsch gesprochen; wir fördern Sprachenlernen in beide Richtungen.',
        },
      },
    ],
  },
];
