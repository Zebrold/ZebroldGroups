import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import industrialSectorImg from '../../assets/industrial_sector.png';
import semiSectorImg from '../../assets/semi_sector.jpg';
import './About.css';

/* ── Icons — thin-stroke, currentColor, matching the footer's icon style ── */
function IconPlane() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 12 22l-3-8-8-3Z" />
      <path d="M22 2 3 11l8 3 3 8Z" />
    </svg>
  );
}
function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
function IconRobotArm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5" cy="19" r="2" />
      <path d="M5 17V9l7-4 6 3" />
      <circle cx="18" cy="8" r="2" />
      <path d="M18 10v3l-4 3" />
      <circle cx="14" cy="16" r="1.4" />
    </svg>
  );
}
function IconCompass() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m14.5 9.5-2 5-5 2 2-5Z" />
    </svg>
  );
}
function IconChip() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}
function IconFactory() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21V10l6 4v-4l6 4V6l6 4v11Z" />
      <path d="M3 21h18" />
    </svg>
  );
}
/** Thin brown bar at the very top of the viewport — the page's only scroll/navigation aid. */
function useTopScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = null;
    const measure = () => {
      raf = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };
    const onScrollOrResize = () => {
      if (raf == null) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}

const PROCESS_STEPS = ['Idea', 'Engineering Concept', 'Design', 'Prototype', 'Manufacturing', 'Intelligent Systems'];

const PILLARS = [
  {
    id: 'aerospace',
    icon: <IconPlane />,
    eyebrow: 'Aerospace',
    heading: 'Engineering for an Industry That Cannot Compromise',
    paragraphs: [
      "Aerospace is one of the central pillars of Zebrold's industrial strategy. The aerospace industry represents one of the highest standards of engineering in the world — every component, system, manufacturing process, and technology must operate within demanding requirements for precision, reliability, quality, safety, and consistency.",
      "Zebrold's aerospace activities focus on engineering, design, manufacturing, precision components, systems development, and advanced aerospace technologies. Our objective is to develop capabilities that can support both established aviation platforms and the emerging technologies that are transforming the future of flight.",
      'The aerospace industry is undergoing a fundamental transition — aircraft are becoming more efficient, aviation is exploring electric and hydrogen-powered propulsion, autonomous systems are developing rapidly, and software is becoming increasingly important to aerospace operations. Zebrold is positioning its aerospace capabilities around this transformation.',
    ],
    chips: ['Airbus', 'Boeing', 'Joby Aviation', 'H2FLY', 'ZeroAvia', 'SABREwing', 'Hello Aerospace', 'Eviation Air Mobility'],
  },
  {
    id: 'automotive',
    icon: <IconCar />,
    eyebrow: 'Automotive',
    heading: 'Manufacturing the Future of Mobility',
    paragraphs: [
      'The automobile is undergoing one of the most significant transformations in its history. Traditional mechanical systems are increasingly being combined with software, electronics, artificial intelligence, automation, connected technologies, and electric propulsion.',
      "Zebrold's automotive activities are focused on engineering, manufacturing, components, mobility technologies, industrial systems, automation, and next-generation automotive technologies. Our approach combines manufacturing expertise with engineering and technology development to support electric mobility, intelligent vehicle systems, advanced components, software-driven technologies, and new manufacturing approaches.",
    ],
    chips: ['Volvo', 'Aston Martin', 'REE Automotive', 'Lake Electric Vehicles', 'ElecQ'],
  },
  {
    id: 'healthcare-robotics',
    icon: <IconRobotArm />,
    eyebrow: 'Healthcare Robotics',
    heading: 'Technology Designed Around Human Needs',
    paragraphs: [
      "Zebrold's Healthcare Robotics activities bring together robotics, artificial intelligence, software, automation, engineering, and intelligent systems to support the development of technologies for healthcare environments.",
      'We see healthcare robotics as an emerging field in which intelligent machines can assist professionals, automate repetitive processes, improve operational efficiency, and create new capabilities within healthcare environments. Our objective is not to treat robotics as a replacement for people, but to extend human capabilities and support healthcare professionals.',
    ],
    chips: ['CYD Robotics'],
  },
];

const WHO_WE_ARE_PARAGRAPHS = [
  'From its earliest stage, Zebrold was created with the intention of becoming more than a conventional manufacturing company. The foundation of the organization was built around engineering, product design, technology development, and manufacturing, with a long-term ambition to develop capabilities that could serve industries where precision, reliability, innovation, and advanced technology are essential.',
  'The company began its journey by working across aerospace, automotive, and healthcare robotics, three industries that represent some of the most technically demanding areas of modern industrial development. What began as an engineering and manufacturing-focused organization has evolved into a broader industrial ecosystem combining physical manufacturing with software development, robotics, artificial intelligence, automation, engineering, and international technology operations.',
  "Today, Zebrold IHL is developing a growing international structure of technical, engineering, manufacturing, and software-development capabilities. While Frankfurt am Main serves as the principal headquarters, the company's activities extend across multiple locations, bringing together specialized teams working on different parts of the technology and manufacturing lifecycle.",
  'Our story is ultimately about one idea: creating the industrial capabilities required to turn ambitious ideas into real technologies, real products, and real-world systems.',
];

const HISTORY_PARAGRAPHS = [
  'For Zebrold, that beginning was Bangalore in 2024. The company was established in one of India’s most important technology and engineering environments, with an initial focus on designing, engineering, and manufacturing technologies for aerospace, automotive, and healthcare robotics applications.',
  "Bangalore provided the foundation for the company's early engineering, design, manufacturing, and technology activities. As Zebrold developed its international strategy, the organization expanded beyond its original base and established Frankfurt am Main, Germany, as its principal headquarters.",
  "Frankfurt represents an important part of Zebrold's international identity. Located at the center of one of Europe's most important economic and industrial regions, the city provides a strategic base for international operations, partnerships, engineering activities, and global business development.",
  'The transition from Bangalore to Frankfurt was not a replacement of one identity with another. It represented the evolution of a company that began with an Indian engineering foundation and developed toward a broader international industrial structure with Germany at the center of its corporate operations.',
];

export default function About() {
  const pageRef = useScrollReveal();
  const scrollProgress = useTopScrollProgress();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Zebrold International Holdings Limited (Zebrold IHL)',
    description:
      'Zebrold International Holdings Limited (Zebrold IHL) is a German industrial and technology group headquartered in Frankfurt am Main, with origins in Bangalore, India, engineering across Aerospace, Automotive, and Healthcare Robotics.',
    url: 'https://www.zebrold.de/about',
    mainEntity: {
      '@type': 'Corporation',
      name: 'Zebrold International Holdings Limited',
      alternateName: ['Zebrold IHL', 'Zebrold Group', 'ZIHL'],
      foundingDate: '2024',
      foundingLocation: {
        '@type': 'Place',
        name: 'Bangalore, India',
      },
      url: 'https://www.zebrold.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bockenheimer Landstrasse 17-19',
        addressLocality: 'Frankfurt am Main',
        postalCode: '60325',
        addressCountry: 'DE',
      },
    },
  };

  return (
    <div ref={pageRef} className="about-dark">
      <SEO
        title="About Us | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Zebrold International Holdings Limited (Zebrold IHL) is a German industrial and technology group headquartered in Frankfurt am Main, with origins in Bangalore, India — engineering across Aerospace, Automotive, and Healthcare Robotics."
        keywords="About Zebrold, Zebrold IHL, Zebrold International Holdings Limited, aerospace engineering, automotive manufacturing, healthcare robotics, Frankfurt industrial group, Bangalore engineering"
        url="/about"
        schemaData={aboutSchema}
      />

      <div className="about-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />

      {/* 1. Hero */}
      <header className="about-hero">
        <img src={industrialSectorImg} alt="" className="about-hero__bg" loading="eager" />
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <span className="about-eyebrow about-eyebrow--hero reveal">Zebrold International Holdings Limited</span>
          <h1 className="about-hero__title reveal" data-delay="1">
            Building an Industrial Group for the Next Generation
          </h1>
          <p className="about-hero__subtitle reveal" data-delay="2">
            Zebrold International Holdings Limited is a German industrial and technology group headquartered in
            Frankfurt am Main, with its origins in Bangalore, India, founded in 2024.
          </p>
          <a href="#industries" className="about-cta reveal" data-delay="3">
            Explore Our Industries
          </a>
        </div>
      </header>

      {/* 2. Who We Are */}
      <section className="about-section">
        <div className="about-container about-container--narrow">
          <span className="about-eyebrow reveal">Who We Are</span>
          <h2 className="about-heading reveal" data-delay="1">A Company Built Around Engineering</h2>
          <div className="about-prose">
            {WHO_WE_ARE_PARAGRAPHS.map((p, i) => (
              <p key={i} className="reveal" data-delay={Math.min(i + 1, 3)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A Journey Built on Engineering */}
      <section className="about-section about-section--alt">
        <div className="about-container about-container--narrow">
          <span className="about-eyebrow reveal">Our History</span>
          <h2 className="about-heading reveal" data-delay="1">A Journey Built on Engineering</h2>

          <div className="about-journey reveal" data-delay="2">
            <div className="about-journey__node">
              <span className="about-journey__year">2024</span>
              <h3 className="about-journey__place">Bangalore, India</h3>
              <p className="about-journey__tag">Founding location</p>
            </div>
            <div className="about-journey__line" aria-hidden="true">
              <span className="about-journey__arrow" />
            </div>
            <div className="about-journey__node about-journey__node--hq">
              <span className="about-journey__year">Today</span>
              <h3 className="about-journey__place">Frankfurt am Main</h3>
              <p className="about-journey__tag">Principal headquarters</p>
            </div>
          </div>

          <div className="about-prose">
            {HISTORY_PARAGRAPHS.map((p, i) => (
              <p key={i} className="reveal" data-delay={Math.min(i + 1, 3)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What Zebrold Is */}
      <section className="about-section">
        <div className="about-container">
          <span className="about-eyebrow reveal">What Zebrold Is</span>
          <h2 className="about-heading reveal" data-delay="1">From Idea to Intelligent System</h2>

          <div className="about-process reveal" data-delay="2">
            {PROCESS_STEPS.map((step, i) => (
              <div className="about-process__item" key={step}>
                {i > 0 && <span className="about-process__connector" aria-hidden="true" />}
                <div className="about-process__node">
                  <span className="about-process__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="about-process__label">{step}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-prose">
            <p className="reveal" data-delay="1">
              Zebrold IHL is built around the convergence of industrial manufacturing and advanced technology. We
              design and develop products, components, systems, and technologies while building the manufacturing
              capabilities required to bring those technologies into the physical world.
            </p>
            <p className="reveal" data-delay="2">
              A product begins with an idea. That idea becomes an engineering concept. The concept becomes a design.
              The design becomes a prototype. The prototype is tested, refined, and engineered for manufacturing.
              Manufacturing transforms it into a physical product. Software, electronics, robotics, and intelligent
              systems can then add another layer of capability.
            </p>
            <p className="reveal" data-delay="3">
              Our focus is therefore not limited to producing individual components. It is about developing the
              knowledge, infrastructure, technology, people, and manufacturing capabilities required to participate
              across the industrial value chain.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Industry Pillars */}
      <div id="industries">
        {PILLARS.map((pillar) => (
          <section className="about-pillar" key={pillar.id}>
            <div className="about-container">
              <div className="about-pillar__visual reveal" aria-hidden="true">
                <span className="about-pillar__icon">{pillar.icon}</span>
              </div>
              <div className="about-pillar__text">
                <span className="about-eyebrow reveal">{pillar.eyebrow}</span>
                <h2 className="about-heading about-heading--pillar reveal" data-delay="1">{pillar.heading}</h2>
                <div className="about-prose">
                  {pillar.paragraphs.map((p, i) => (
                    <p key={i} className="reveal" data-delay={Math.min(i + 2, 3)}>{p}</p>
                  ))}
                </div>
                <div className="about-chips reveal" data-delay="3">
                  {pillar.chips.map((name) => (
                    <span className="about-chip" key={name}>{name}</span>
                  ))}
                </div>
                <p className="about-chips__note">
                  Organizations referenced above represent the industry landscape Zebrold studies and engineers
                  toward — not confirmed commercial partnerships unless separately disclosed.
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 6. Manufacturing */}
      <section className="about-section about-manufacturing">
        <div className="about-container">
          <div className="about-manufacturing__text">
            <span className="about-eyebrow reveal">Manufacturing</span>
            <h2 className="about-heading reveal" data-delay="1">Where Engineering Becomes Reality</h2>
            <div className="about-prose">
              <p className="reveal" data-delay="2">
                At the center of Zebrold is manufacturing. The ability to design a product is only the beginning —
                building it consistently, efficiently, accurately, and at the required quality is an entirely
                different challenge.
              </p>
              <p className="reveal" data-delay="3">
                Our manufacturing capabilities are designed around the complete product-development lifecycle,
                including engineering, prototyping, precision manufacturing, component production, assembly,
                automation, testing, integration, and production development, supporting highly technical
                applications across aerospace, automotive, robotics, and other advanced industrial sectors.
              </p>
            </div>
          </div>
          <div className="about-manufacturing__visual reveal" data-delay="1">
            <img src={semiSectorImg} alt="Precision manufacturing and assembly" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 7. Engineering & Software */}
      <section className="about-section about-section--alt">
        <div className="about-container">
          <div className="about-split-2col">
            <div className="about-split-2col__item reveal">
              <span className="about-eyebrow"><IconCompass /> Engineering and Design</span>
              <h2 className="about-heading about-heading--sm">Before Something Can Be Manufactured, It Has to Be Understood</h2>
              <p>
                Our teams work across mechanical engineering, manufacturing engineering, robotics, software, systems
                engineering, industrial design, and technology development — ensuring products are not designed in
                isolation from their eventual manufacturing environment.
              </p>
              <p>
                A successful industrial product must be engineered not only to function, but also to be manufactured,
                tested, maintained, integrated, and scaled.
              </p>
            </div>
            <div className="about-split-2col__item reveal" data-delay="1">
              <span className="about-eyebrow"><IconChip /> Software and Digital Technology</span>
              <h2 className="about-heading about-heading--sm">The Intelligence Behind Modern Industry</h2>
              <p>
                Aircraft, vehicles, robots, factories, production lines, and healthcare systems are all becoming more
                connected and intelligent. Our technology teams work across software engineering, artificial
                intelligence, robotics software, embedded systems, industrial automation, digital engineering,
                connected technologies, cloud systems, data platforms, and intelligent manufacturing technologies.
              </p>
              <p>For Zebrold, software is not a separate business from manufacturing — it is an essential part of modern manufacturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our International Structure */}
      <section className="about-section">
        <div className="about-container about-container--narrow">
          <span className="about-eyebrow reveal">Global Structure</span>
          <h2 className="about-heading reveal" data-delay="1">Our International Structure</h2>

          <div className="about-map reveal" data-delay="2">
            <svg className="about-map__lines" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path d="M 152 50 Q 410 20 672 306" />
              <path d="M 152 50 Q 190 75 216 115" />
            </svg>
            <div className="about-map__pin about-map__pin--frankfurt" style={{ left: '19%', top: '14%' }}>
              <span className="about-map__dot about-map__dot--hq" />
              <span className="about-map__label about-map__label--hq">Frankfurt am Main · HQ</span>
            </div>
            <div className="about-map__pin about-map__pin--milan" style={{ left: '27%', top: '32%' }}>
              <span className="about-map__dot" />
              <span className="about-map__label">Milan</span>
            </div>
            <div className="about-map__pin about-map__pin--bangalore" style={{ left: '84%', top: '85%' }}>
              <span className="about-map__dot" />
              <span className="about-map__label">Bangalore</span>
            </div>
          </div>

          <div className="about-prose">
            <p className="reveal" data-delay="1">
              Zebrold is developing an international network rather than operating from a single location. Our
              principal headquarters in Frankfurt am Main provides the corporate center for the organization, while
              our technical and operational network allows specialized teams to work across engineering, software
              development, manufacturing, technology development, and other industrial functions.
            </p>
            <p className="reveal" data-delay="2">
              The world does not have one center of innovation. Different regions have different strengths. Our
              objective is to connect those strengths.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Closing Statement */}
      <section className="about-closing">
        <div className="about-closing__rule reveal" />
        <div className="about-container about-container--narrow">
          <p className="about-closing__kicker reveal" data-delay="1">ZEBROLD INTERNATIONAL HOLDINGS LIMITED</p>
          <p className="about-closing__meta reveal" data-delay="2">
            Founded in Bangalore, India — 2024<br />
            Headquartered in Frankfurt am Main, Germany<br />
            Operating across Automotive, Aerospace &amp; Healthcare Robotics
          </p>
          <p className="about-closing__statement reveal" data-delay="3">
            From the first engineering concept to the final manufactured product, from software development to
            intelligent robotics, from automotive mobility to aerospace systems and healthcare technologies, our
            purpose remains consistent: to turn engineering possibilities into industrial realities.
          </p>
          <p className="about-closing__statement reveal" data-delay="3">
            The journey started in Bangalore. The vision extends far beyond either. Zebrold is building for the
            industries that will define the next generation.
          </p>
        </div>
      </section>
    </div>
  );
}
