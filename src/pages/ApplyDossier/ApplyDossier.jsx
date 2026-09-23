import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import { findJobByRef, RELOCATION_SITES, JOB_CATEGORIES } from '../../data/careersData';
import { sendApplicationEmail } from '../../services/emailService';
import './ApplyDossier.css';

/* ── Form vocabulary, kept local to this page ── */
const COPY = {
  en: {
    title: 'Submit Your Engineering Dossier',
    speculative: 'Speculative engineering & operational dossier',
    forRole: 'Applying for',
    backToRoles: 'Back to all roles',
    required: '* Mandatory baseline fields',
    steps: [
      'Candidate profile',
      'Prior technical experience',
      'Technical rationale',
      'Document uploads',
      'Verification & GDPR',
    ],
    s1: 'Candidate Identification & Contact',
    firstName: 'First name',
    middleName: 'Middle name',
    lastName: 'Last name (family name)',
    email: 'Official email address',
    phone: 'Direct contact number',
    residence: 'Current residence (city, country)',
    employment: 'Current employment status',
    notice: 'Contractual notice period',
    relocation: 'Corridor relocation readiness',
    s2: 'Prior Technical Experience & Engineering Competencies',
    s2meta: 'Multidisciplinary engineering verification',
    specialisations: 'Key technical specialisations (select all verified domains)',
    experience: 'Total engineering & technical experience',
    toolchain: 'Primary software, hardware & toolchain stack',
    background: 'Detailed summary of technical & engineering background',
    backgroundHint:
      'Cite tangible projects, hardware or software architectures, system deliveries, performance benchmarks and engineering impact across your domain.',
    bottleneck: 'Describe your most complex technical or engineering bottleneck solved',
    bottleneckHint:
      'Outline the problem, the root-cause methodology, the debugging or failure-mode analysis applied, the roadblocks overcome and the validated outcome.',
    s3: 'Statement of Purpose & Technical Rationale',
    s3meta: 'Architectural vision',
    rationale: 'Why are you applying specifically to the Zebrold Scolome project?',
    rationaleHint:
      'Address your perspective on decarbonised intercity transport, the German–Indian engineering corridor, and high-speed rail competing with short-haul aviation.',
    s4: 'Engineering Dossier & Credential Vault',
    s4meta: 'PDF / CAD / ZIP up to 25 MB each',
    cvTitle: 'Curriculum vitae / résumé',
    cvHint: 'Structured technical CV highlighting your track record',
    cvBtn: 'Choose CV file',
    portfolioTitle: 'Engineering portfolio / technical papers',
    portfolioHint: 'Patents, published papers, simulation or test datasets',
    portfolioBtn: 'Attach dossier papers',
    attached: 'Attached',
    remove: 'Remove',
    s5: 'Compensation Expectations & Work Authorisation',
    s5meta: 'Contractual alignment',
    currentPkg: 'Current total annual package',
    targetPkg: 'Target expected annual compensation',
    authorisation: 'Work authorisation status',
    consent:
      'I certify that all technical assertions, engineering qualifications and project histories provided are precise and truthful. I consent to the processing of my dossier under the EU General Data Protection Regulation and German BDSG by Zebrold International Holdings Limited.',
    saveDraft: 'Save draft',
    submit: 'Submit official technical dossier',
    sending: 'Transmitting…',
    restoreDraft: 'Restore saved draft',
    draftSaved: 'Draft saved in this browser.',
    draftRestored: 'Draft restored from this browser.',
    incomplete: 'Please complete the required fields in every section before submitting.',
    error: 'Transmission failed. Please email talent.acquisition@zebrold.de directly.',
    successTitle: 'Dossier received',
    successBody:
      'Your dossier has been transmitted to the joint talent acquisition directorate in Frankfurt and Bengaluru. You will hear from us within five business days.',
    successBtn: 'Back to careers',
    optional: 'optional',
    progress: 'Dossier Completion Progress',
    stepStatusDone: 'Completed',
    stepStatusActive: 'In progress',
    stepStatusPending: 'Not started',
    stepCounter: (filled, total) => `${filled}/${total} fields`,
    overallProgress: (done, total, pct) => `${done} of ${total} steps completed (${pct}%)`,
    jumpToStep: 'Jump to section',
  },
  de: {
    title: 'Reichen Sie Ihr technisches Dossier ein',
    speculative: 'Initiativdossier Technik & Betrieb',
    forRole: 'Bewerbung für',
    backToRoles: 'Zurück zu allen Stellen',
    required: '* Pflichtfelder',
    steps: [
      'Profil',
      'Bisherige Erfahrung',
      'Technische Motivation',
      'Dokumente',
      'Bestätigung & DSGVO',
    ],
    s1: 'Identifikation & Kontakt',
    firstName: 'Vorname',
    middleName: 'Zweiter Vorname',
    lastName: 'Nachname',
    email: 'Offizielle E-Mail-Adresse',
    phone: 'Direkte Telefonnummer',
    residence: 'Aktueller Wohnort (Stadt, Land)',
    employment: 'Aktueller Beschäftigungsstatus',
    notice: 'Vertragliche Kündigungsfrist',
    relocation: 'Umzugsbereitschaft im Korridor',
    s2: 'Bisherige technische Erfahrung & Kompetenzen',
    s2meta: 'Multidisziplinäre technische Prüfung',
    specialisations: 'Technische Schwerpunkte (alle zutreffenden Bereiche auswählen)',
    experience: 'Gesamte technische Berufserfahrung',
    toolchain: 'Primärer Software-, Hardware- und Toolchain-Stack',
    background: 'Ausführliche Zusammenfassung Ihres technischen Hintergrunds',
    backgroundHint:
      'Nennen Sie konkrete Projekte, Hardware- oder Softwarearchitekturen, Systemlieferungen, Leistungskennzahlen und Ihren technischen Beitrag.',
    bottleneck: 'Beschreiben Sie den komplexesten technischen Engpass, den Sie gelöst haben',
    bottleneckHint:
      'Skizzieren Sie das Problem, die Ursachenanalyse, die eingesetzte Fehleranalyse, überwundene Hürden und das validierte Ergebnis.',
    s3: 'Motivation & technische Begründung',
    s3meta: 'Architektonische Perspektive',
    rationale: 'Warum bewerben Sie sich gezielt beim Zebrold-Scolome-Projekt?',
    rationaleHint:
      'Gehen Sie auf dekarbonisierten Fernverkehr, den deutsch-indischen Ingenieurkorridor und den Wettbewerb der Hochgeschwindigkeitsbahn mit Kurzstreckenflügen ein.',
    s4: 'Technisches Dossier & Nachweise',
    s4meta: 'PDF / CAD / ZIP, je bis 25 MB',
    cvTitle: 'Lebenslauf',
    cvHint: 'Strukturierter technischer Lebenslauf mit Ihrem Werdegang',
    cvBtn: 'Lebenslauf auswählen',
    portfolioTitle: 'Portfolio / Fachbeiträge',
    portfolioHint: 'Patente, Veröffentlichungen, Simulations- oder Testdaten',
    portfolioBtn: 'Unterlagen anhängen',
    attached: 'Angehängt',
    remove: 'Entfernen',
    s5: 'Gehaltsvorstellung & Arbeitserlaubnis',
    s5meta: 'Vertragliche Abstimmung',
    currentPkg: 'Aktuelles Jahresgesamtpaket',
    targetPkg: 'Gewünschte Jahresvergütung',
    authorisation: 'Status der Arbeitserlaubnis',
    consent:
      'Ich versichere, dass alle technischen Angaben, Qualifikationen und Projekthistorien zutreffend sind. Ich willige in die Verarbeitung meines Dossiers nach DSGVO und BDSG durch die Zebrold International Holdings Limited ein.',
    saveDraft: 'Entwurf speichern',
    submit: 'Technisches Dossier einreichen',
    sending: 'Wird übermittelt…',
    restoreDraft: 'Gespeicherten Entwurf laden',
    draftSaved: 'Entwurf in diesem Browser gespeichert.',
    draftRestored: 'Entwurf aus diesem Browser wiederhergestellt.',
    incomplete: 'Bitte füllen Sie die Pflichtfelder in allen Abschnitten aus.',
    error: 'Übermittlung fehlgeschlagen. Bitte schreiben Sie an talent.acquisition@zebrold.de.',
    successTitle: 'Dossier eingegangen',
    successBody:
      'Ihr Dossier wurde an die gemeinsame Personalgewinnung in Frankfurt und Bengaluru übermittelt. Wir melden uns innerhalb von fünf Werktagen.',
    successBtn: 'Zurück zur Karriereseite',
    optional: 'optional',
    progress: 'Dossier-Fortschritt',
    stepStatusDone: 'Abgeschlossen',
    stepStatusActive: 'In Bearbeitung',
    stepStatusPending: 'Ausstehend',
    stepCounter: (filled, total) => `${filled}/${total} Felder`,
    overallProgress: (done, total, pct) => `${done} von ${total} Schritten abgeschlossen (${pct}%)`,
    jumpToStep: 'Zu diesem Abschnitt springen',
  },
};

const DIAL_CODES = ['+49 (Germany)', '+91 (India)', '+44 (UK)', '+33 (France)', '+41 (Switzerland)', '+1 (USA / CA)'];

const EMPLOYMENT = [
  { en: 'Employed in railway / rolling stock OEM', de: 'Angestellt bei Bahn-/Fahrzeug-OEM' },
  { en: 'Employed in aerospace / high-speed transit', de: 'Angestellt in Luftfahrt / Hochgeschwindigkeitsverkehr' },
  { en: 'Employed in automotive tier-1 engineering', de: 'Angestellt bei Automobilzulieferer (Tier 1)' },
  { en: 'Academic / advanced research laboratory', de: 'Hochschule / Forschungslabor' },
  { en: 'Independent rail systems consultant', de: 'Selbstständige Beratung für Bahnsysteme' },
  { en: 'Student / recent graduate', de: 'Studium / kürzlicher Abschluss' },
];

const NOTICE = [
  { en: 'Immediate / available within 15 days', de: 'Sofort / in 15 Tagen verfügbar' },
  { en: '30 calendar days', de: '30 Kalendertage' },
  { en: '60 calendar days', de: '60 Kalendertage' },
  { en: '90 calendar days', de: '90 Kalendertage' },
  { en: '6 months', de: '6 Monate' },
];

const EXPERIENCE = [
  { en: '10–15 years (principal / executive lead)', de: '10–15 Jahre (Principal / Führung)' },
  { en: '7–10 years (senior staff engineer)', de: '7–10 Jahre (Senior Staff Engineer)' },
  { en: '4–7 years (mid-senior engineer)', de: '4–7 Jahre (Mid-Senior)' },
  { en: '1–3 years (associate engineer)', de: '1–3 Jahre (Associate)' },
  { en: 'Student / graduate entry', de: 'Studium / Berufseinstieg' },
];

const SPECIALISATIONS = [
  { id: 'embedded', en: 'Embedded systems & firmware (C/C++, RTOS)', de: 'Embedded Systems & Firmware (C/C++, RTOS)' },
  { id: 'cloud', en: 'Cloud infrastructure & distributed systems', de: 'Cloud-Infrastruktur & verteilte Systeme' },
  { id: 'pcb', en: 'Hardware & PCB design (Altium / Cadence)', de: 'Hardware- & Leiterplattendesign (Altium / Cadence)' },
  { id: 'power', en: 'Power electronics & inverters (SiC / GaN)', de: 'Leistungselektronik & Umrichter (SiC / GaN)' },
  { id: 'robotics', en: 'Autonomous systems & robotics / ROS', de: 'Autonome Systeme & Robotik / ROS' },
  { id: 'cad', en: 'Carbody & mechanical CAD (SolidWorks / CATIA)', de: 'Wagenkasten- & Maschinenbau-CAD (SolidWorks / CATIA)' },
  { id: 'hpc', en: 'High-performance & parallel computing', de: 'Hochleistungs- & Parallelrechnen' },
  { id: 'safety', en: 'Safety-critical systems (EN 50128 / IEC 61508)', de: 'Sicherheitskritische Systeme (EN 50128 / IEC 61508)' },
  { id: 'ai', en: 'Applied AI / machine learning & computer vision', de: 'Angewandte KI / ML & Computer Vision' },
  { id: 'cfd', en: 'Thermal & CFD simulation (ANSYS / OpenFOAM)', de: 'Thermo- & CFD-Simulation (ANSYS / OpenFOAM)' },
];

const AUTHORISATION = [
  {
    id: 'eu',
    en: 'EU citizen / German permanent residence (Niederlassungserlaubnis)',
    de: 'EU-Bürger/in / Niederlassungserlaubnis',
  },
  {
    id: 'bluecard',
    en: 'Eligible for German EU Blue Card (fast-track STEM)',
    de: 'Berechtigt für die Blaue Karte EU (MINT-Schnellverfahren)',
  },
  {
    id: 'india',
    en: 'Indian citizen / authorised for the Bengaluru engineering bureau',
    de: 'Indische Staatsangehörigkeit / Arbeitserlaubnis für Bengaluru',
  },
  {
    id: 'other',
    en: 'Other / requires international relocation and visa support',
    de: 'Sonstiges / benötigt Visums- und Umzugsunterstützung',
  },
];

const DRAFT_KEY = 'zebrold_dossier_draft';

const EMPTY = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  dial: DIAL_CODES[0],
  phone: '',
  residence: '',
  employment: EMPLOYMENT[0].en,
  notice: NOTICE[0].en,
  relocation: [],
  specialisations: [],
  experience: EXPERIENCE[0].en,
  toolchain: '',
  background: '',
  bottleneck: '',
  rationale: '',
  currentPkg: '',
  targetPkg: '',
  authorisation: AUTHORISATION[0].id,
  consent: false,
};

export default function ApplyDossier() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [params] = useSearchParams();
  const job = findJobByRef(params.get('ref') ?? '');

  const [form, setForm] = useState(EMPTY);
  const [cvFile, setCvFile] = useState(null);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [notice, setNotice] = useState(null);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const toggleIn = (field, value) =>
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(value) ? f[field].filter((v) => v !== value) : [...f[field], value],
    }));

  /* Live progress calculation — tracks exact fields completed per section */
  const stepStats = useMemo(() => {
    // Step 1: firstName, lastName, email, phone, residence (5 mandatory)
    const s1Filled = [
      form.firstName.trim(),
      form.lastName.trim(),
      form.email.trim(),
      form.phone.trim(),
      form.residence.trim(),
    ].filter(Boolean).length;
    const s1Total = 5;

    // Step 2: specialisations, background, bottleneck (3 mandatory)
    const s2Filled =
      (form.specialisations.length > 0 ? 1 : 0) +
      (form.background.trim() ? 1 : 0) +
      (form.bottleneck.trim() ? 1 : 0);
    const s2Total = 3;

    // Step 3: rationale (1 mandatory)
    const s3Filled = form.rationale.trim() ? 1 : 0;
    const s3Total = 1;

    // Step 4: cvFile (1 mandatory)
    const s4Filled = cvFile ? 1 : 0;
    const s4Total = 1;

    // Step 5: consent (1 mandatory)
    const s5Filled = form.consent ? 1 : 0;
    const s5Total = 1;

    return [
      { filled: s1Filled, total: s1Total, isDone: s1Filled === s1Total, isStarted: s1Filled > 0 },
      { filled: s2Filled, total: s2Total, isDone: s2Filled === s2Total, isStarted: s2Filled > 0 },
      { filled: s3Filled, total: s3Total, isDone: s3Filled === s3Total, isStarted: s3Filled > 0 },
      { filled: s4Filled, total: s4Total, isDone: s4Filled === s4Total, isStarted: s4Filled > 0 },
      { filled: s5Filled, total: s5Total, isDone: s5Filled === s5Total, isStarted: s5Filled > 0 },
    ];
  }, [form, cvFile]);

  const done = useMemo(() => stepStats.map((s) => s.isDone), [stepStats]);
  const doneCount = useMemo(() => stepStats.filter((s) => s.isDone).length, [stepStats]);
  const progressPercent = Math.round((doneCount / 5) * 100);

  const scrollToStep = (stepIndex) => {
    const el = document.getElementById(`dsec-${stepIndex + 1}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const saveDraft = () => {
    try {
      /* Files can't be serialised, so a draft holds the text fields only. */
      localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
      setNotice({ type: 'ok', text: c.draftSaved });
    } catch {
      setNotice({ type: 'error', text: c.error });
    }
  };

  const restoreDraft = () => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      setForm({ ...EMPTY, ...JSON.parse(raw) });
      setNotice({ type: 'ok', text: c.draftRestored });
    } catch {
      /* A corrupt or blocked draft is not worth surfacing. */
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!done.every(Boolean)) {
      setNotice({ type: 'error', text: c.incomplete });
      return;
    }

    setSending(true);
    setNotice(null);
    try {
      const chosen = (ids, list) =>
        ids.map((id) => list.find((x) => x.id === id)?.en ?? id).join(', ') || '—';

      await sendApplicationEmail({
        candidateName: [form.firstName, form.middleName, form.lastName].filter(Boolean).join(' '),
        email: form.email,
        phone: `${form.dial} ${form.phone}`,
        jobTitle: job ? job.title.en : COPY.en.speculative,
        department: job
          ? JOB_CATEGORIES.find((k) => k.id === job.category)?.label.en ?? '—'
          : 'Talent acquisition',
        coverNote: [
          `Role: ${job ? job.title.en : 'General Application'}`,
          `Residence: ${form.residence}`,
          `Employment: ${form.employment}`,
          `Notice: ${form.notice}`,
          `Relocation: ${chosen(form.relocation, RELOCATION_SITES)}`,
          `Specialisations: ${chosen(form.specialisations, SPECIALISATIONS)}`,
          `Experience: ${form.experience}`,
          `Toolchain: ${form.toolchain || '—'}`,
          `Current package: ${form.currentPkg || '—'}`,
          `Target package: ${form.targetPkg || '—'}`,
          `Authorisation: ${AUTHORISATION.find((a) => a.id === form.authorisation)?.en ?? '—'}`,
          '',
          `Background:\n${form.background}`,
          '',
          `Bottleneck solved:\n${form.bottleneck}`,
          '',
          `Rationale:\n${form.rationale}`,
        ].join('\n'),
        cvFileName: cvFile?.name ?? '',
      });

      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {
        /* Storage may be blocked; the submission already succeeded. */
      }
      setSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setNotice({ type: 'error', text: c.error });
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="dossier">
        <SEO title="Dossier received | Zebrold Scolome" url="/careers/apply" />
        <div className="shell dossier__done">
          <span className="dossier__doneMark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h1 className="dossier__doneTitle">{c.successTitle}</h1>
          <p className="dossier__doneBody">{c.successBody}</p>
          <Link to="/careers" className="btn">
            {c.successBtn}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dossier">
      <SEO
        title="Submit Your Engineering Dossier | Zebrold Scolome"
        description="Submit a full technical dossier to the Zebrold Scolome joint talent acquisition directorate in Frankfurt and Bengaluru."
        url="/careers/apply"
      />

      <div className="shell">
        {/* ══ Header ══ */}
        <header className="dossier__head">
          <Link to="/careers" className="dossier__back">
            ← {c.backToRoles}
          </Link>

          <h1 className="dossier__title">{c.title}</h1>

          {job ? (
            <p className="dossier__context">
              <span className="dossier__contextLabel mono">{c.forRole}</span>
              <strong>{job.title[lang]}</strong>
              <span className="dossier__contextMeta">
                {job.location[lang]} · {job.salary}
              </span>
            </p>
          ) : (
            <p className="dossier__context">
              <span className="dossier__contextLabel mono">{c.forRole}</span>
              <strong>{c.speculative}</strong>
            </p>
          )}

          {/* Progress Tracker & Stepper */}
          <div className="dossier__progressTracker">
            <div className="dossier__progressMeta">
              <span className="dossier__progressLabel mono">{c.progress}</span>
              <span className="dossier__progressCount mono">
                {c.overallProgress(doneCount, 5, progressPercent)}
              </span>
            </div>
            <div
              className="dossier__progressBar"
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={c.progress}
            >
              <div className="dossier__progressFill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <ol className="dossier__steps" role="list">
            {c.steps.map((label, i) => {
              const stat = stepStats[i];
              const statusClass = stat.isDone ? 'is-done' : stat.isStarted ? 'is-active' : 'is-pending';
              return (
                <li key={label}>
                  <button
                    type="button"
                    className={`dossier__step ${statusClass}`}
                    onClick={() => scrollToStep(i)}
                    title={`${c.jumpToStep}: ${label}`}
                  >
                    <div className="dossier__stepHeader">
                      <span className="dossier__stepNum mono">
                        {stat.isDone ? (
                          <span className="dossier__checkIcon" aria-hidden="true">✓</span>
                        ) : (
                          String(i + 1).padStart(2, '0')
                        )}
                      </span>
                      <span className="dossier__stepTag mono">
                        {stat.isDone
                          ? c.stepStatusDone
                          : stat.isStarted
                          ? `${stat.filled}/${stat.total}`
                          : c.stepStatusPending}
                      </span>
                    </div>
                    <span className="dossier__stepLabel">{label}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </header>

        <form className="dossier__form" onSubmit={submit} noValidate>
          {/* ══ 01 Candidate profile ══ */}
          <section className="dsec" id="dsec-1" aria-labelledby="dsec-heading-1">
            <div className="dsec__head">
              <h2 id="dsec-heading-1">
                <span className={`dsec__num mono ${stepStats[0].isDone ? 'is-done' : ''}`}>
                  {stepStats[0].isDone ? '✓' : '01'}
                </span>
                {c.s1}
              </h2>
              <div className="dsec__headMeta">
                <span className={`dsec__status mono ${stepStats[0].isDone ? 'is-done' : stepStats[0].isStarted ? 'is-active' : ''}`}>
                  {stepStats[0].isDone
                    ? `✓ ${c.stepStatusDone}`
                    : stepStats[0].isStarted
                    ? `${c.stepStatusActive} (${stepStats[0].filled}/${stepStats[0].total})`
                    : c.required}
                </span>
              </div>
            </div>

            <div className="dgrid dgrid--3">
              <label className="dfield">
                <span>{c.firstName} *</span>
                <input type="text" value={form.firstName} onChange={set('firstName')} autoComplete="given-name" />
              </label>
              <label className="dfield">
                <span>
                  {c.middleName} <em>({c.optional})</em>
                </span>
                <input type="text" value={form.middleName} onChange={set('middleName')} autoComplete="additional-name" />
              </label>
              <label className="dfield">
                <span>{c.lastName} *</span>
                <input type="text" value={form.lastName} onChange={set('lastName')} autoComplete="family-name" />
              </label>
            </div>

            <div className="dgrid dgrid--2">
              <label className="dfield">
                <span>{c.email} *</span>
                <input type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              </label>
              <div className="dfield">
                <span>{c.phone} *</span>
                <div className="dfield__split">
                  <select value={form.dial} onChange={set('dial')} aria-label={c.phone}>
                    {DIAL_CODES.map((code) => (
                      <option key={code}>{code}</option>
                    ))}
                  </select>
                  <input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                </div>
              </div>
            </div>

            <div className="dgrid dgrid--3">
              <label className="dfield">
                <span>{c.residence} *</span>
                <input type="text" value={form.residence} onChange={set('residence')} />
              </label>
              <label className="dfield">
                <span>{c.employment} *</span>
                <select value={form.employment} onChange={set('employment')}>
                  {EMPLOYMENT.map((opt) => (
                    <option key={opt.en} value={opt.en}>
                      {opt[lang]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="dfield">
                <span>{c.notice} *</span>
                <select value={form.notice} onChange={set('notice')}>
                  {NOTICE.map((opt) => (
                    <option key={opt.en} value={opt.en}>
                      {opt[lang]}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="dbox">
              <legend>{c.relocation}</legend>
              <div className="dbox__grid">
                {RELOCATION_SITES.map((site) => (
                  <label key={site.id} className="dcheck">
                    <input
                      type="checkbox"
                      checked={form.relocation.includes(site.id)}
                      onChange={() => toggleIn('relocation', site.id)}
                    />
                    <span>{site.label[lang]}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          {/* ══ 02 Experience ══ */}
          <section className="dsec" id="dsec-2" aria-labelledby="dsec-heading-2">
            <div className="dsec__head">
              <h2 id="dsec-heading-2">
                <span className={`dsec__num mono ${stepStats[1].isDone ? 'is-done' : ''}`}>
                  {stepStats[1].isDone ? '✓' : '02'}
                </span>
                {c.s2}
              </h2>
              <div className="dsec__headMeta">
                <span className={`dsec__status mono ${stepStats[1].isDone ? 'is-done' : stepStats[1].isStarted ? 'is-active' : ''}`}>
                  {stepStats[1].isDone
                    ? `✓ ${c.stepStatusDone}`
                    : stepStats[1].isStarted
                    ? `${c.stepStatusActive} (${stepStats[1].filled}/${stepStats[1].total})`
                    : c.s2meta}
                </span>
              </div>
            </div>

            <div className="dfield">
              <span>{c.specialisations} *</span>
              <div className="dchips">
                {SPECIALISATIONS.map((spec) => {
                  const active = form.specialisations.includes(spec.id);
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      className={`dchip ${active ? 'is-active' : ''}`}
                      onClick={() => toggleIn('specialisations', spec.id)}
                      aria-pressed={active}
                    >
                      {spec[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="dgrid dgrid--2">
              <label className="dfield">
                <span>{c.experience} *</span>
                <select value={form.experience} onChange={set('experience')}>
                  {EXPERIENCE.map((opt) => (
                    <option key={opt.en} value={opt.en}>
                      {opt[lang]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="dfield">
                <span>{c.toolchain}</span>
                <input
                  type="text"
                  value={form.toolchain}
                  onChange={set('toolchain')}
                  placeholder="C/C++, Rust, Python, CUDA, Altium, ANSYS Fluent, CATIA, Kubernetes, RTOS"
                />
              </label>
            </div>

            <label className="dfield">
              <span>{c.background} *</span>
              <em className="dfield__hint">{c.backgroundHint}</em>
              <textarea rows="5" value={form.background} onChange={set('background')} />
            </label>

            <label className="dfield">
              <span>{c.bottleneck} *</span>
              <em className="dfield__hint">{c.bottleneckHint}</em>
              <textarea rows="4" value={form.bottleneck} onChange={set('bottleneck')} />
            </label>
          </section>

          {/* ══ 03 Rationale ══ */}
          <section className="dsec" id="dsec-3" aria-labelledby="dsec-heading-3">
            <div className="dsec__head">
              <h2 id="dsec-heading-3">
                <span className={`dsec__num mono ${stepStats[2].isDone ? 'is-done' : ''}`}>
                  {stepStats[2].isDone ? '✓' : '03'}
                </span>
                {c.s3}
              </h2>
              <div className="dsec__headMeta">
                <span className={`dsec__status mono ${stepStats[2].isDone ? 'is-done' : stepStats[2].isStarted ? 'is-active' : ''}`}>
                  {stepStats[2].isDone
                    ? `✓ ${c.stepStatusDone}`
                    : stepStats[2].isStarted
                    ? c.stepStatusActive
                    : c.s3meta}
                </span>
              </div>
            </div>

            <label className="dfield">
              <span>{c.rationale} *</span>
              <em className="dfield__hint">{c.rationaleHint}</em>
              <textarea rows="5" value={form.rationale} onChange={set('rationale')} />
            </label>
          </section>

          {/* ══ 04 Documents ══ */}
          <section className="dsec" id="dsec-4" aria-labelledby="dsec-heading-4">
            <div className="dsec__head">
              <h2 id="dsec-heading-4">
                <span className={`dsec__num mono ${stepStats[3].isDone ? 'is-done' : ''}`}>
                  {stepStats[3].isDone ? '✓' : '04'}
                </span>
                {c.s4}
              </h2>
              <div className="dsec__headMeta">
                <span className={`dsec__status mono ${stepStats[3].isDone ? 'is-done' : stepStats[3].isStarted ? 'is-active' : ''}`}>
                  {stepStats[3].isDone
                    ? `✓ ${c.stepStatusDone}`
                    : stepStats[3].isStarted
                    ? c.stepStatusActive
                    : c.s4meta}
                </span>
              </div>
            </div>

            <div className="dgrid dgrid--2">
              <DropZone
                id="cv-upload"
                title={`${c.cvTitle} *`}
                hint={c.cvHint}
                button={c.cvBtn}
                file={cvFile}
                onFile={setCvFile}
              />
              <DropZone
                id="portfolio-upload"
                title={c.portfolioTitle}
                hint={c.portfolioHint}
                button={c.portfolioBtn}
                file={portfolioFile}
                onFile={setPortfolioFile}
              />
            </div>

            {[cvFile, portfolioFile].filter(Boolean).map((file, i) => (
              <div className="dfile" key={`${file.name}-${i}`}>
                <div className="dfile__info">
                  <span className="dfile__name mono">{file.name}</span>
                  <span className="dfile__size">
                    {(file.size / 1024 / 1024).toFixed(2)} MB · {c.attached}
                  </span>
                </div>
                <button
                  type="button"
                  className="dfile__remove"
                  onClick={() => (i === 0 && cvFile ? setCvFile(null) : setPortfolioFile(null))}
                >
                  {c.remove}
                </button>
              </div>
            ))}
          </section>

          {/* ══ 05 Compensation ══ */}
          <section className="dsec" id="dsec-5" aria-labelledby="dsec-heading-5">
            <div className="dsec__head">
              <h2 id="dsec-heading-5">
                <span className={`dsec__num mono ${stepStats[4].isDone ? 'is-done' : ''}`}>
                  {stepStats[4].isDone ? '✓' : '05'}
                </span>
                {c.s5}
              </h2>
              <div className="dsec__headMeta">
                <span className={`dsec__status mono ${stepStats[4].isDone ? 'is-done' : stepStats[4].isStarted ? 'is-active' : ''}`}>
                  {stepStats[4].isDone
                    ? `✓ ${c.stepStatusDone}`
                    : stepStats[4].isStarted
                    ? c.stepStatusActive
                    : c.s5meta}
                </span>
              </div>
            </div>

            <div className="dgrid dgrid--2">
              <label className="dfield">
                <span>
                  {c.currentPkg} <em>({c.optional})</em>
                </span>
                <input type="text" value={form.currentPkg} onChange={set('currentPkg')} placeholder="€138,000" />
              </label>
              <label className="dfield">
                <span>{c.targetPkg}</span>
                <input
                  type="text"
                  value={form.targetPkg}
                  onChange={set('targetPkg')}
                  placeholder={job ? job.salary : '€145,000'}
                />
              </label>
            </div>

            <fieldset className="dfield">
              <legend>
                <span>{c.authorisation} *</span>
              </legend>
              <div className="dgrid dgrid--2 dradios">
                {AUTHORISATION.map((opt) => (
                  <label key={opt.id} className="dradio">
                    <input
                      type="radio"
                      name="authorisation"
                      value={opt.id}
                      checked={form.authorisation === opt.id}
                      onChange={set('authorisation')}
                    />
                    <span>{opt[lang]}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          {/* ══ Consent & actions ══ */}
          <section className="dsec dsec--flush">
            <label className="dconsent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
              />
              <span>{c.consent}</span>
            </label>

            {notice && (
              <p className={`dnotice dnotice--${notice.type}`} role="status">
                {notice.text}
              </p>
            )}

            <div className="dactions">
              <button
                type="button"
                className="btn btn--ghost"
                onClick={restoreDraft}
                title={c.restoreDraft}
                aria-label={c.restoreDraft}
              >
                <span aria-hidden="true">↺</span>
              </button>
              <button type="button" className="btn btn--ghost" onClick={saveDraft}>
                {c.saveDraft}
              </button>
              <button type="submit" className="btn dsubmit" disabled={sending}>
                {sending ? c.sending : c.submit}
                {!sending && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </section>
        </form>

        <p className="dossier__quote">
          “Rolling stock is the future of transportation, and Scolome is redefining the future of mobility through
          innovation and engineering excellence.”
        </p>
      </div>
    </div>
  );
}

/* ── File drop zone ── */
function DropZone({ id, title, hint, button, file, onFile }) {
  const [over, setOver] = useState(false);

  const take = (list) => {
    if (list && list[0]) onFile(list[0]);
  };

  return (
    <div
      className={`dzone ${over ? 'is-over' : ''} ${file ? 'is-filled' : ''}`}
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        take(e.dataTransfer.files);
      }}
    >
      <span className="dzone__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="dzone__title">{title}</span>
      <span className="dzone__hint">{hint}</span>

      <input
        id={id}
        type="file"
        className="sr-only"
        accept=".pdf,.doc,.docx,.zip,.step,.stp"
        onChange={(e) => take(e.target.files)}
      />
      <label htmlFor={id} className="dzone__btn">
        {button}
      </label>
    </div>
  );
}
