import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Full-width cinematic section with a subtly slower-than-scroll image
 * (respects prefers-reduced-motion via the app-level MotionConfig).
 *
 * @param {boolean} flat - drops the gradient wash for a bare photograph with
 *   a solid semi-transparent panel behind the copy instead.
 * @param {boolean} tall - 60–75vh full-bleed variant for a closing/final section.
 * @param {{text: string, to: string}} cta - optional small link rendered under the subtitle.
 */
export default function ParallaxImage({ image, imageAlt, eyebrow, title, subtitle, flat, tall, cta }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      className={`product-parallax ${flat ? 'product-parallax--flat' : ''} ${tall ? 'product-parallax--tall' : ''}`}
      ref={ref}
    >
      <div className="product-parallax-media">
        <motion.img
          src={image}
          alt={imageAlt || ''}
          style={{ y }}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="product-parallax-overlay" />
      <div className="container">
        <div className="product-parallax-copy">
          {eyebrow && <span className="product-caption product-parallax-eyebrow">{eyebrow}</span>}
          <h2 className="product-parallax-title">{title}</h2>
          {subtitle && <p className="product-parallax-subtitle">{subtitle}</p>}
          {cta && (
            cta.to.startsWith('#')
              ? <a href={cta.to} className="product-parallax-cta">{cta.text}</a>
              : <Link to={cta.to} className="product-parallax-cta">{cta.text}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
