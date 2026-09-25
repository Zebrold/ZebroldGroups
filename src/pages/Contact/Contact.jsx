import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import PageHero from '../../components/PageHero/PageHero';
import Toast from '../../components/Toast/Toast';
import { sendContactEmail } from '../../services/emailService';
import { LOCATIONS } from '../../data/locations';
import hqImg from '../../assets/company_hq.jpg';
import './Contact.css';

const EMPTY = { name: '', email: '', company: '', subject: '', message: '' };

const CHANNELS = [
  {
    key: 'general',
    title: { en: 'General enquiries', de: 'Allgemeine Anfragen' },
    email: 'info@zebrold.de',
    body: {
      en: 'Corporate correspondence, partnerships and press.',
      de: 'Unternehmenskorrespondenz, Partnerschaften und Presse.',
    },
  },
  {
    key: 'talent',
    title: { en: 'Talent acquisition', de: 'Personalgewinnung' },
    email: 'talent.acquisition@zebrold.de',
    body: {
      en: 'Applications, interview scheduling and candidate questions.',
      de: 'Bewerbungen, Terminplanung für Gespräche und Fragen von Kandidatinnen und Kandidaten.',
    },
  },
];

export default function Contact() {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal();
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ type: 'error', message: t('contact_required') });
      return;
    }

    setSending(true);
    try {
      await sendContactEmail(form);
      setToast({ type: 'success', message: t('contact_success') });
      setForm(EMPTY);
    } catch {
      setToast({ type: 'error', message: t('contact_error') });
    } finally {
      setSending(false);
    }
  };

  return (
    <div ref={revealRef}>
      <SEO
        title="Contact | Zebrold IHL"
        description="Contact Zebrold IHL — programme enquiries, procurement, media and general correspondence. Headquarters in Frankfurt am Main."
        keywords="Zebrold contact, Scolome enquiries, Frankfurt headquarters, rail procurement"
        url="/contact"
      />

      <PageHero eyebrow={t('contact_title')} title={t('contact_title')} lede={t('contact_lede')} />

      <div className="pageBody">
        <div className="shell ct__layout">
          {/* ══ Form ══ */}
          <form className="ct__form" onSubmit={submit}>
            <div className="ct__row">
              <label>
                <span>{t('contact_name')} *</span>
                <input type="text" required value={form.name} onChange={update('name')} />
              </label>
              <label>
                <span>{t('contact_email')} *</span>
                <input type="email" required value={form.email} onChange={update('email')} />
              </label>
            </div>

            <div className="ct__row">
              <label>
                <span>{t('contact_company')}</span>
                <input type="text" value={form.company} onChange={update('company')} />
              </label>
              <label>
                <span>{t('contact_subject')}</span>
                <input type="text" value={form.subject} onChange={update('subject')} />
              </label>
            </div>

            <label>
              <span>{t('contact_message')} *</span>
              <textarea rows="7" required value={form.message} onChange={update('message')} />
            </label>

            <button type="submit" className="btn ct__submit" disabled={sending}>
              {sending ? t('contact_sending') : t('contact_send')}
            </button>
          </form>

          {/* ══ Aside ══ */}
          <aside className="ct__aside">
            <div className="ct__media zoom-frame">
              <img
                src={hqImg}
                alt={
                  lang === 'de'
                    ? 'Hauptsitz von Zebrold in Frankfurt am Main'
                    : 'Zebrold headquarters in Frankfurt am Main'
                }
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="ct__block">
              <h2 className="ct__blockTitle">{t('footer_locations') || t('footer_hq')}</h2>
              <div className="ct__locations">
                {LOCATIONS.map((loc) => (
                  <div key={loc.id} className="ct__locItem">
                    <div className="ct__locHead">
                      <strong className="ct__locTitle">{loc.title[lang] || loc.title.en}</strong>
                      {loc.isPrimary && (
                        <span className="ct__locBadge">{loc.tag[lang] || 'Primary'}</span>
                      )}
                    </div>
                    <address className="ct__address">
                      {loc.fullAddress}
                    </address>
                  </div>
                ))}
              </div>
            </div>

            {CHANNELS.map((channel) => (
              <div className="ct__block" key={channel.key}>
                <h2 className="ct__blockTitle">{channel.title[lang]}</h2>
                <p className="ct__blockBody">{channel.body[lang]}</p>
                <a href={`mailto:${channel.email}`} className="ct__mail">
                  {channel.email}
                </a>
              </div>
            ))}
          </aside>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />}
    </div>
  );
}
