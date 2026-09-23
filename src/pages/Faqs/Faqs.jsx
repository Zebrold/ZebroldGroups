import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import PageHero from '../../components/PageHero/PageHero';
import { faqGroups } from '../../data/faqs';
import './Faqs.css';

/** Flattened Q&A for the FAQPage rich result. */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q.en,
      acceptedAnswer: { '@type': 'Answer', text: item.a.en },
    }))
  ),
};

export default function Faqs() {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal();
  const [open, setOpen] = useState(`${faqGroups[0].id}-0`);

  return (
    <div ref={revealRef}>
      <SEO
        title="FAQs | Zebrold Scolome"
        description="Procurement, certification, supply chain and careers questions answered by Zebrold Scolome."
        keywords="Zebrold FAQ, rolling stock procurement, TSI certification, SIL-4, rail supply chain"
        url="/faqs"
        schemaData={FAQ_SCHEMA}
      />

      <PageHero eyebrow={t('faqs_title')} title={t('faqs_title')} lede={t('faqs_lede')} />

      <div className="pageBody">
        <div className="shell faq__layout">
          {/* ══ Jump list ══ */}
          <nav className="faq__nav" aria-label={t('faqs_title')}>
            <ul role="list">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <a href={`#${group.id}`}>{group.heading[lang]}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ══ Groups ══ */}
          <div className="faq__groups">
            {faqGroups.map((group) => (
              <section key={group.id} id={group.id} className="faqGroup" aria-labelledby={`${group.id}-title`}>
                <h2 className="faqGroup__heading" id={`${group.id}-title`}>
                  {group.heading[lang]}
                </h2>

                <ul className="faqGroup__list" role="list">
                  {group.items.map((item, i) => {
                    const key = `${group.id}-${i}`;
                    const isOpen = open === key;

                    return (
                      <li key={key} className={`faqItem ${isOpen ? 'is-open' : ''}`}>
                        <h3>
                          <button
                            type="button"
                            className="faqItem__q"
                            onClick={() => setOpen(isOpen ? null : key)}
                            aria-expanded={isOpen}
                            aria-controls={`answer-${key}`}
                          >
                            <span>{item.q[lang]}</span>
                            <span className="faqItem__icon" aria-hidden="true" />
                          </button>
                        </h3>
                        {isOpen && (
                          <div className="faqItem__a" id={`answer-${key}`}>
                            <p>{item.a[lang]}</p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}

            <div className="faq__cta">
              <p>{t('faqs_cta')}</p>
              <Link to="/contact" className="btn">
                {t('faqs_cta_btn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
