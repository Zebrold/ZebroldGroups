import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { getStoredJobs, addApplication } from '../../data/careersData';
import Toast from '../../components/Toast/Toast';
import SEO from '../../components/SEO/SEO';
import leadershipTeamImg from '../../assets/leadership_team_zebrold.jpg';
import industrialSectorImg from '../../assets/industrial_sector.png';
import techSectorImg from '../../assets/tech_sector.png';
import financeSectorImg from '../../assets/finance_sector.png';
import healthcareSectorImg from '../../assets/healthcare_sector.png';
import './Careers.css';

export default function Careers() {
  const { t, lang } = useLanguage();
  const [jobs, setJobs] = useState([]);

  // Application modal state
  const [activeJobForApp, setActiveJobForApp] = useState(null);
  const [form, setForm] = useState({
    candidateName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverNote: ''
  });
  const [cvFile, setCvFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setJobs(getStoredJobs().filter(j => j.status === 'Active' || !j.status));
  }, []);

  // Handle File Upload & Base64 conversion
  const handleFile = (file) => {
    if (!file) return;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type) && !file.name.endsWith('.pdf') && !file.name.endsWith('.docx') && !file.name.endsWith('.doc')) {
      alert(lang === 'en' ? 'Please upload a PDF or DOC/DOCX file.' : 'Bitte laden Sie eine PDF- oder DOC/DOCX-Datei hoch.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert(lang === 'en' ? 'File exceeds 10MB limit.' : 'Datei überschreitet das Limit von 10 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setCvFile({
        name: file.name,
        size: file.size,
        type: file.type || 'application/pdf',
        dataUrl: ev.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    if (!form.candidateName || !form.email || !form.phone) {
      alert(lang === 'en' ? 'Please fill in all required fields.' : 'Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }
    if (!cvFile) {
      alert(lang === 'en' ? 'Please attach your CV / Resume before submitting.' : 'Bitte fügen Sie Ihren Lebenslauf (CV) an.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const jobTitle = activeJobForApp?.title || (lang === 'en' ? 'Spontaneous Application' : 'Initiativbewerbung');
      const department = activeJobForApp?.department || 'General';

      addApplication({
        jobId: activeJobForApp?.id || 'spontaneous',
        jobTitle: jobTitle,
        candidateName: form.candidateName,
        email: form.email,
        phone: form.phone,
        linkedin: form.linkedin,
        coverNote: form.coverNote,
        cvFile: cvFile
      });

      sendApplicationEmail({
        candidateName: form.candidateName,
        email: form.email,
        phone: form.phone,
        jobTitle: jobTitle,
        department: department,
        coverNote: form.coverNote,
        cvFileName: cvFile?.name,
      });

      setSubmitting(false);
      setActiveJobForApp(null);
      setForm({ candidateName: '', email: '', phone: '', linkedin: '', coverNote: '' });
      setCvFile(null);
      setToast({
        message: t('careers_success_msg'),
        type: 'success'
      });
    }, 600);
  };

  /* ── "Grow as a person and a professional" cards ──
     Placeholder culture/benefits copy — replace with real HR-sourced
     content before launch (flagged in the task summary). */
  const growCards = [
    {
      id: 'jumpstart',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      title: lang === 'en' ? 'Jumpstart your future' : 'Starten Sie Ihre Zukunft',
      desc: lang === 'en'
        ? 'Internship and graduate programs that turn ambitious engineers and analysts into industry leaders.'
        : 'Praktikums- und Traineeprogramme, die ambitionierte Ingenieure und Analysten zu Branchenführern machen.',
    },
    {
      id: 'fuel',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: lang === 'en' ? 'Fuel your career' : 'Treiben Sie Ihre Karriere voran',
      desc: lang === 'en'
        ? 'Structured mentoring, hands-on project ownership, and continuous technical training keep your skills sharp.'
        : 'Strukturiertes Mentoring, eigenverantwortliche Projekte und kontinuierliche fachliche Weiterbildung halten Ihre Fähigkeiten scharf.',
    },
    {
      id: 'live-well',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: lang === 'en' ? 'Live well, do good' : 'Gut leben, Gutes tun',
      desc: lang === 'en'
        ? 'Flexible working arrangements, wellbeing support, and the chance to work on technology that matters.'
        : 'Flexible Arbeitsmodelle, Unterstützung für Ihr Wohlbefinden und die Möglichkeit, an Technologie zu arbeiten, die wirklich zählt.',
    },
  ];

  /* ── "Featured Opportunities" — real departments pulled from careersData.js,
     using existing sector photography already licensed/used elsewhere on the site. */
  const featuredDepartments = [
    {
      id: 'engineering-cleantech',
      dept: 'Engineering & CleanTech',
      title: lang === 'en' ? 'Engineering & CleanTech' : 'Engineering & CleanTech',
      desc: lang === 'en'
        ? 'Architect next-generation energy systems and industrial hardware for our manufacturing network.'
        : 'Entwickeln Sie Energiesysteme und Industriehardware der nächsten Generation für unser Fertigungsnetzwerk.',
      image: industrialSectorImg,
    },
    {
      id: 'software-ai',
      dept: 'Software & AI',
      title: lang === 'en' ? 'Software & AI' : 'Software & KI',
      desc: lang === 'en'
        ? 'Build the platforms, data pipelines, and intelligent systems behind our industrial operations.'
        : 'Entwickeln Sie die Plattformen, Datenpipelines und intelligenten Systeme hinter unserem industriellen Betrieb.',
      image: techSectorImg,
    },
    {
      id: 'investment-finance',
      dept: 'Investment & Finance',
      title: lang === 'en' ? 'Investment & Finance' : 'Investment & Finanzen',
      desc: lang === 'en'
        ? 'Shape capital strategy and portfolio performance across a EUR 216M subsidiary network.'
        : 'Gestalten Sie Kapitalstrategie und Portfolioleistung in einem Tochtergesellschafts-Netzwerk von 216 Mio. EUR.',
      image: financeSectorImg,
    },
    {
      id: 'healthcare-medtech',
      dept: 'Healthcare & MedTech',
      title: lang === 'en' ? 'Healthcare & MedTech' : 'Healthcare & MedTech',
      desc: lang === 'en'
        ? 'Drive technology partnerships that bring medical innovation from lab to market.'
        : 'Treiben Sie Technologiepartnerschaften voran, die medizinische Innovation vom Labor zur Marktreife bringen.',
      image: healthcareSectorImg,
    },
  ];

  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Careers at Zebrold International Holdings Limited (Zebrold IHL)",
    "description": "Global career opportunities at Zebrold International Holdings Limited (Zebrold IHL).",
    "url": "https://www.zebrold.de/careers",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": jobs.map((job, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "JobPosting",
          "title": job.title,
          "description": job.description,
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": job.location
            }
          },
          "hiringOrganization": {
            "@type": "Corporation",
            "name": "Zebrold International Holdings Limited",
            "alternateName": ["Zebrold IHL", "Zebrold Group"]
          },
          "employmentType": job.type || "FULL_TIME"
        }
      }))
    }
  };

  return (
    <div className="careers-page">
      <SEO 
        title="Careers & Opportunities | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Explore global career opportunities at Zebrold International Holdings Limited (Zebrold IHL). Join our team across Frankfurt, London, Sydney, Hyderabad, and 26 subsidiaries."
        keywords="Zebrold careers, jobs at Zebrold, Zebrold IHL jobs, Zebrold International Holdings Limited careers, Frankfurt jobs, engineering careers"
        url="/careers"
        schemaData={careersSchema}
      />
      {/* Hero Banner — flat solid maroon overlay (::before) over image, no gradients */}
      <section
        className="careers-hero"
        style={{
          backgroundImage: `url(${leadershipTeamImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="careers-hero-overlay" aria-hidden="true" />
        <div className="padding-global careers-hero-content">
          <div className="container-large">
            <motion.div
              className="careers-hero-inner"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="careers-badge">
                <span className="badge-dot" />
                {t('careers_hero_badge')}
              </div>
              <h1 className="careers-hero-title">{t('careers_hero_title')}</h1>
              <p className="careers-hero-sub">{t('careers_hero_subtitle')}</p>

              {/* CTA — navigates to the dedicated Open Positions page (existing route, unchanged) */}
              <div className="careers-toggle-row">
                <Link to="/careers/open-positions" className="btn-wine-pill careers-toggle-btn">
                  {lang === 'en' ? 'View Open Positions →' : 'Offene Stellen ansehen →'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SECONDARY CTA — Oracle-style "video thumbnail" row, flat white card overlapping the hero ═══════ */}
      <section className="careers-subcta-section">
        <div className="padding-global">
          <div className="container-large">
            <motion.div
              className="careers-subcta-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="careers-subcta-text">
                <h3 className="careers-subcta-title">
                  {lang === 'en' ? 'Transform the world for the better' : 'Verändern Sie die Welt zum Besseren'}
                </h3>
                <p className="careers-subcta-desc">
                  {lang === 'en'
                    ? 'See how our people are engineering the vehicles, aircraft systems, and medical robotics that shape a better shared future.'
                    : 'Erfahren Sie, wie unsere Mitarbeitenden an Fahrzeugen, Luftfahrtsystemen und Medizinrobotik arbeiten, die eine bessere gemeinsame Zukunft gestalten.'}
                </p>
              </div>
              <Link to="/careers/open-positions" className="btn-wine-pill careers-subcta-btn">
                {lang === 'en' ? 'Search for jobs →' : 'Stellen durchsuchen →'}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ GROW AS A PERSON AND A PROFESSIONAL ═══════ */}
      <section className="careers-grow-section">
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <motion.div
              className="heading-wrapper is-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="caption">{lang === 'en' ? 'GROWTH & DEVELOPMENT' : 'WACHSTUM & ENTWICKLUNG'}</span>
              <h2 className="heading-style-h2 careers-section-title">
                {lang === 'en' ? 'Grow as a person and a professional' : 'Wachsen Sie als Mensch und als Fachkraft'}
              </h2>
              <p className="careers-section-intro">
                {lang === 'en'
                  ? 'Wherever you want to take your career, we’ll help you build the skills and momentum to get there.'
                  : 'Wohin auch immer Sie Ihre Karriere führen wollen — wir helfen Ihnen, die Fähigkeiten und den Antrieb dafür aufzubauen.'}
              </p>
            </motion.div>

            <div className="grow-card-grid">
              {growCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  className="grow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="grow-card-icon">{card.icon}</div>
                  <h3 className="grow-card-title">{card.title}</h3>
                  <p className="grow-card-desc">{card.desc}</p>
                  <Link to="/careers/open-positions" className="grow-card-link">
                    {lang === 'en' ? 'Learn more →' : 'Mehr erfahren →'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED OPPORTUNITIES ═══════ */}
      <section className="careers-opportunities-section">
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <motion.div
              className="heading-wrapper is-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="caption">{lang === 'en' ? 'FEATURED OPPORTUNITIES' : 'AUSGEWÄHLTE POSITIONEN'}</span>
              <h2 className="heading-style-h2 careers-section-title">
                {lang === 'en' ? 'Explore our core teams' : 'Entdecken Sie unsere Kernteams'}
              </h2>
              <p className="careers-section-intro">
                {lang === 'en'
                  ? 'Opportunities across the engineering and business functions that power Zebrold Group.'
                  : 'Positionen in den technischen und geschäftlichen Bereichen, die die Zebrold Group antreiben.'}
              </p>
            </motion.div>

            <div className="opportunity-card-grid">
              {featuredDepartments.map((dept, i) => (
                <motion.div
                  key={dept.id}
                  className="opportunity-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div
                    className="opportunity-card-image"
                    style={{ backgroundImage: `url(${dept.image})` }}
                    role="img"
                    aria-label={dept.dept}
                  />
                  <div className="opportunity-card-body">
                    <h3 className="opportunity-card-title">{dept.title}</h3>
                    <p className="opportunity-card-desc">{dept.desc}</p>
                    <Link to="/careers/open-positions" className="opportunity-card-link">
                      {lang === 'en' ? 'Apply now →' : 'Jetzt bewerben →'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ EMPLOYER OF CHOICE ═══════ */}
      <section className="careers-employer-section">
        <div className="padding-global padding-section-small">
          <div className="container-medium">
            <motion.div
              className="careers-employer-inner"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="careers-employer-title">
                {lang === 'en' ? 'Employer of choice' : 'Bevorzugter Arbeitgeber'}
                <span className="careers-employer-underline" aria-hidden="true" />
              </h2>
              <p className="careers-employer-desc">
                {lang === 'en'
                  ? "We listen to what all our people have to say. It's what makes us a great place to work."
                  : 'Wir hören zu, was alle unsere Mitarbeitenden zu sagen haben. Das macht uns zu einem großartigen Arbeitgeber.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CLOSING CTA BAND ═══════ */}
      <section className="careers-cta-band">
        <div className="padding-global">
          <div className="container-large">
            <motion.div
              className="careers-cta-band-inner"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="careers-cta-band-title">{lang === 'en' ? 'Apply today' : 'Jetzt bewerben'}</h2>
              <p className="careers-cta-band-sub">
                {lang === 'en'
                  ? 'Explore open roles and find the future of your career.'
                  : 'Entdecken Sie offene Stellen und finden Sie die Zukunft Ihrer Karriere.'}
              </p>
              <div className="careers-cta-band-actions">
                <Link to="/careers/open-positions" className="btn-wine-pill careers-toggle-btn">
                  {lang === 'en' ? 'View Open Positions →' : 'Offene Stellen ansehen →'}
                </Link>
                <button
                  type="button"
                  className="btn-wine-outline"
                  onClick={() => setActiveJobForApp({ id: 'spontaneous', title: lang === 'en' ? 'Spontaneous Application' : 'Initiativbewerbung' })}
                >
                  {lang === 'en' ? 'Join our talent network' : 'Unserem Talentnetzwerk beitreten'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application & CV Upload Modal */}
      <AnimatePresence>
        {activeJobForApp && (
          <div className="careers-modal-backdrop" onClick={() => setActiveJobForApp(null)}>
            <motion.div
              className="careers-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-badge">{lang === 'en' ? 'APPLICATION FORM' : 'BEWERBUNGSFORMULAR'}</span>
                  <h3 className="modal-title">{activeJobForApp.title}</h3>
                  {activeJobForApp.location && <p className="modal-sub">{activeJobForApp.location} • {activeJobForApp.department}</p>}
                </div>
                <button className="modal-close-btn" onClick={() => setActiveJobForApp(null)}>✕</button>
              </div>

              <form onSubmit={handleSubmitApplication} className="modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="app-name" className="form-label">{t('careers_full_name')} *</label>
                    <input
                      id="app-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Julia Hoffmann"
                      className="form-input"
                      value={form.candidateName}
                      onChange={(e) => setForm(p => ({ ...p, candidateName: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="app-email" className="form-label">{t('careers_email')} *</label>
                    <input
                      id="app-email"
                      type="email"
                      required
                      placeholder="j.hoffmann@example.com"
                      className="form-input"
                      value={form.email}
                      onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="app-phone" className="form-label">{t('careers_phone')} *</label>
                    <input
                      id="app-phone"
                      type="tel"
                      required
                      placeholder="+49 170 1234567"
                      className="form-input"
                      value={form.phone}
                      onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="app-linkedin" className="form-label">{t('careers_linkedin')}</label>
                    <input
                      id="app-linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      className="form-input"
                      value={form.linkedin}
                      onChange={(e) => setForm(p => ({ ...p, linkedin: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="app-cover" className="form-label">{t('careers_cover_note')}</label>
                  <textarea
                    id="app-cover"
                    rows={3}
                    placeholder={lang === 'en' ? 'Briefly describe your relevant achievements or experience...' : 'Beschreiben Sie kurz Ihre relevanten Qualifikationen...'}
                    className="form-textarea"
                    value={form.coverNote}
                    onChange={(e) => setForm(p => ({ ...p, coverNote: e.target.value }))}
                  />
                </div>

                {/* CV Upload Box */}
                <div className="form-group">
                  <label className="form-label">{t('careers_upload_cv')} *</label>
                  {!cvFile ? (
                    <div
                      className={`cv-dropzone ${dragOver ? 'is-dragover' : ''}`}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('cv-file-input').click()}
                    >
                      <div className="dropzone-icon">📄</div>
                      <p className="dropzone-text">{t('careers_upload_hint')}</p>
                      <span className="dropzone-sub">PDF, DOC, DOCX — Max 10MB</span>
                    </div>
                  ) : (
                    <div className="cv-file-attached">
                      <div className="cv-file-info">
                        <span className="cv-file-icon">📑</span>
                        <div>
                          <p className="cv-file-name">{cvFile.name}</p>
                          <p className="cv-file-size">{(cvFile.size / 1024).toFixed(1)} KB • {lang === 'en' ? 'Ready to upload' : 'Bereit zum Hochladen'}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="cv-file-remove"
                        onClick={() => setCvFile(null)}
                        title="Remove file"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                  <input
                    id="cv-file-input"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sr-only"
                    onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setActiveJobForApp(null)}
                  >
                    {t('careers_close')}
                  </button>
                  <button
                    type="submit"
                    className="btn-wine-pill"
                    disabled={submitting}
                  >
                    {submitting ? (lang === 'en' ? 'Submitting...' : 'Wird gesendet...') : t('careers_submit_app')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {toast && (
        <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />
      )}
    </div>
  );
}
