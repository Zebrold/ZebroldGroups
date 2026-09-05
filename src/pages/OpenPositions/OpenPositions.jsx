import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { getStoredJobs } from '../../data/careersData';
import SEO from '../../components/SEO/SEO';
import './OpenPositions.css';

export default function OpenPositions() {
  const { t, lang } = useLanguage();
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLoc, setSelectedLoc] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);

  useEffect(() => {
    setJobs(getStoredJobs().filter(j => j.status === 'Active' || !j.status));
  }, []);

  // Filter options
  const departments = ['All', ...new Set(jobs.map(j => j.department))];
  const locations = ['All', ...new Set(jobs.map(j => j.location))];

  const filteredJobs = jobs.filter(job => {
    const matchSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchDept = selectedDept === 'All' || job.department === selectedDept;
    const matchLoc = selectedLoc === 'All' || job.location === selectedLoc;

    return matchSearch && matchDept && matchLoc;
  });

  const openPositionsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Open Positions — Zebrold International Holdings Limited (Zebrold IHL)",
    "description": "Current job openings at Zebrold International Holdings Limited (Zebrold IHL).",
    "url": "https://www.zebrold.de/careers/open-positions",
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
    <div className="open-positions-page">
      <SEO
        title="Open Positions | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Browse current job openings at Zebrold International Holdings Limited (Zebrold IHL) across engineering, operations, and corporate roles."
        keywords="Zebrold open positions, Zebrold jobs, Zebrold IHL careers, Zebrold International Holdings Limited job openings"
        url="/careers/open-positions"
        schemaData={openPositionsSchema}
      />

      <section className="open-positions-header">
        <div className="padding-global">
          <div className="container-large">
            <Link to="/careers" className="back-to-careers-link">
              {lang === 'en' ? '← Back to Careers' : '← Zurück zur Karriere'}
            </Link>
            <span className="careers-section-caption">
              {lang === 'en' ? 'Current Opportunities' : 'Aktuelle Stellenangebote'}
            </span>
            <h1 className="open-positions-title">
              {lang === 'en' ? 'Open Positions' : 'Offene Positionen'}
            </h1>
            <p className="open-positions-sub">
              {lang === 'en'
                ? 'Explore current opportunities across engineering, operations, and corporate roles at Zebrold Group.'
                : 'Entdecken Sie aktuelle Möglichkeiten in Technik, Betrieb und Verwaltung bei der Zebrold Group.'}
            </p>
          </div>
        </div>
      </section>

      <section className="open-positions-listings">
        <div className="padding-global">
          <div className="container-large">
            <div className="careers-section-header">
              <div />
              <div className="careers-count-badge">
                {filteredJobs.length} {filteredJobs.length === 1 ? (lang === 'en' ? 'Position' : 'Stelle') : (lang === 'en' ? 'Positions' : 'Stellen')}
              </div>
            </div>

            {/* Controls Bar */}
            <div className="careers-filter-bar">
              <div className="careers-search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder={t('careers_search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="careers-search-input"
                />
                {searchTerm && (
                  <button className="search-clear-btn" onClick={() => setSearchTerm('')}>✕</button>
                )}
              </div>

              <div className="careers-select-row">
                <div className="careers-select-wrap">
                  <label htmlFor="dept-filter" className="sr-only">Department</label>
                  <select
                    id="dept-filter"
                    className="careers-select"
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                  >
                    <option value="All">{t('careers_all_departments')}</option>
                    {departments.filter(d => d !== 'All').map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="careers-select-wrap">
                  <label htmlFor="loc-filter" className="sr-only">Location</label>
                  <select
                    id="loc-filter"
                    className="careers-select"
                    value={selectedLoc}
                    onChange={(e) => setSelectedLoc(e.target.value)}
                  >
                    <option value="All">{t('careers_all_locations')}</option>
                    {locations.filter(l => l !== 'All').map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Jobs List Grid */}
            {jobs.length === 0 ? (
              <div className="careers-empty-state">
                <p>{lang === 'en' ? 'No open positions right now — check back soon.' : 'Derzeit keine offenen Stellen — schauen Sie bald wieder vorbei.'}</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="careers-empty-state">
                <p>{lang === 'en' ? 'No job openings match your filter criteria.' : 'Keine Stellenangebote entsprechen Ihren Kriterien.'}</p>
                <button
                  className="btn-wine-pill"
                  onClick={() => { setSearchTerm(''); setSelectedDept('All'); setSelectedLoc('All'); }}
                >
                  {lang === 'en' ? 'Reset Filters' : 'Filter zurücksetzen'}
                </button>
              </div>
            ) : (
              <div className="careers-job-grid">
                {filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <motion.div
                      key={job.id}
                      className={`careers-job-card ${isExpanded ? 'is-expanded' : ''}`}
                      layout
                    >
                      <div className="job-card-top">
                        <div className="job-card-meta">
                          <span className="job-dept-pill">{job.department}</span>
                          <span className="job-type-pill">{job.type}</span>
                          <span className="job-exp-pill">{job.experience}</span>
                        </div>
                        <span className="job-location-text">{job.location}</span>
                      </div>

                      <h3 className="job-card-title">{job.title}</h3>
                      <p className="job-card-desc">{job.description}</p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            className="job-card-expanded-body"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="expanded-heading">{lang === 'en' ? 'Requirements & Qualifications:' : 'Anforderungen & Qualifikationen:'}</h4>
                            <ul className="expanded-req-list">
                              {job.requirements.map((req, idx) => (
                                <li key={idx}>✓ {req}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="job-card-actions">
                        <button
                          className="btn-link-details"
                          onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        >
                          {isExpanded ? (lang === 'en' ? 'Hide Details ▲' : 'Details verbergen ▲') : (lang === 'en' ? 'View Requirements ▼' : 'Anforderungen anzeigen ▼')}
                        </button>
                        <Link
                          className="btn-wine-pill"
                          to={`/careers/${job.id}`}
                        >
                          {t('careers_apply_now')} →
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
