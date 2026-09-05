import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import exteriorImg from '../../assets/proposal_exterior.jpg';
import interiorImg from '../../assets/proposal_interior.jpg';
import safetyImg from '../../assets/proposal_safety.jpg';
import './IndustryProposals.css';

/* Index-aligned with SLIDES (language-independent) */
const SLIDE_IMAGES = [exteriorImg, interiorImg, safetyImg];

const COPY = {
  en: {
    eyebrow: 'PROPOSALS BY INDUSTRY:',
    heading: 'Automotive',
    desc: "Proposals with technical spec sheets, model comparisons, financing and 360° views with real-time vehicle color changes. The customer receives a visual, interactive proposal they can explore at their own pace.",
    watchVideo: 'Watch Video',
  },
  de: {
    eyebrow: 'ANGEBOTE NACH BRANCHE:',
    heading: 'Automobil',
    desc: 'Angebote mit technischen Datenblättern, Modellvergleichen, Finanzierung und 360°-Ansichten mit Echtzeit-Farbwechsel. Der Kunde erhält ein visuelles, interaktives Angebot, das er in seinem eigenen Tempo erkunden kann.',
    watchVideo: 'Video ansehen',
  },
};

const SLIDES = {
  en: [
    {
      feature: 'Exterior Design',
      cardTitle: 'Adaptive Driving Headlights',
      cardBody: 'Headlights automatically react to conditions and other vehicles, enhancing visibility while reducing glare for oncoming traffic.',
    },
    {
      feature: 'Interior Comfort',
      cardTitle: 'Ambient Cabin Lighting',
      cardBody: '64-color ambient lighting adapts to drive mode and time of day, creating a calm, premium cabin atmosphere.',
    },
    {
      feature: 'Safety Systems',
      cardTitle: 'LiDAR Sensor Array',
      cardBody: 'A 360° sensor array detects obstacles at range, enabling predictive collision avoidance in real time.',
    },
  ],
  de: [
    {
      feature: 'Außendesign',
      cardTitle: 'Adaptive Scheinwerfer',
      cardBody: 'Die Scheinwerfer reagieren automatisch auf die Bedingungen und andere Fahrzeuge und verbessern die Sicht bei reduzierter Blendung für den Gegenverkehr.',
    },
    {
      feature: 'Innenraumkomfort',
      cardTitle: 'Ambientebeleuchtung',
      cardBody: 'Die Ambientebeleuchtung mit 64 Farben passt sich dem Fahrmodus und der Tageszeit an und schafft eine ruhige, hochwertige Kabinenatmosphäre.',
    },
    {
      feature: 'Sicherheitssysteme',
      cardTitle: 'LiDAR-Sensor-Array',
      cardBody: 'Ein 360°-Sensor-Array erkennt Hindernisse auf Distanz und ermöglicht vorausschauende Kollisionsvermeidung in Echtzeit.',
    },
  ],
};

export default function IndustryProposals() {
  const { lang } = useLanguage();
  const copy = COPY[lang] || COPY.en;
  const slides = SLIDES[lang] || SLIDES.en;

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index) => {
    setActiveSlide((index + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!inView) return undefined;
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [inView, slides.length]);

  return (
    <section className={`ip-section ${inView ? 'is-in-view' : ''}`} ref={sectionRef} aria-label="Proposals by industry — Automotive">
      <div className="padding-global">
        <div className="container-large ip-grid">
          <div className="ip-left">
            <span className="ip-eyebrow">
              <span className="ip-eyebrow-triangle">▲</span>
              {copy.eyebrow}
            </span>
            <h2 className="ip-heading">{copy.heading}</h2>
            <p className="ip-desc">{copy.desc}</p>
            <button type="button" className="ip-watch-video">
              {copy.watchVideo} <span className="ip-watch-arrow" aria-hidden="true">→</span>
            </button>
            <div className="ip-dots" aria-hidden="true">
              {slides.map((slide, i) => (
                <span key={slide.feature} className={`ip-dot ${i === activeSlide ? 'is-active' : ''}`} />
              ))}
            </div>
          </div>

          <div className="ip-right">
            <div className="ip-preview">
              <div className="ip-preview-stage">
                <button type="button" className="ip-nav-btn ip-nav-prev" onClick={() => goTo(activeSlide - 1)} aria-label="Previous slide">
                  ←
                </button>

                <div
                  className="ip-slide-track"
                  style={{ transform: `translateX(calc(-${activeSlide} * (var(--ip-slide-w) + var(--ip-slide-gap))))` }}
                >
                  {slides.map((slide, i) => (
                    <div
                      className={`ip-slide ip-slide-tone-${i % 3} ${i === activeSlide ? 'is-active' : ''}`}
                      key={slide.feature}
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${SLIDE_IMAGES[i]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="ip-slide-art" aria-hidden="true">
                        <span className="ip-slide-ring ip-ring-1" />
                        <span className="ip-slide-ring ip-ring-2" />
                        <span className="ip-slide-glow" />
                      </div>
                      <h3 className="ip-slide-heading">{slide.feature}</h3>
                      <div className="ip-slide-card">
                        <span className="ip-slide-play" aria-hidden="true">▶</span>
                        <div className="ip-slide-card-text">
                          <span className="ip-slide-card-title">{slide.cardTitle}</span>
                          <p className="ip-slide-card-body">{slide.cardBody}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button type="button" className="ip-nav-btn ip-nav-next" onClick={() => goTo(activeSlide + 1)} aria-label="Next slide">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
