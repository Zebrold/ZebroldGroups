import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { getItem, getRelated, categoryLabel } from '../../data/newsroomData';
import SEO from '../../components/SEO/SEO';
import './NewsroomArticle.css';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase();
}

function typeLabel(type) {
  if (type === 'press-release') return 'Press Release';
  if (type === 'event') return 'Event';
  return 'Story';
}

function BodyBlock({ block }) {
  if (block.type === 'paragraph') {
    return <p className="na-paragraph">{block.text}</p>;
  }
  if (block.type === 'quote') {
    return <blockquote className="na-quote">{block.text}</blockquote>;
  }
  if (block.type === 'image') {
    return (
      <figure className="na-figure">
        <div className="na-figure-imgwrap">
          <img src={block.src} alt={block.caption || ''} loading="lazy" />
        </div>
        {block.caption && <figcaption className="na-figure-caption">{block.caption}</figcaption>}
      </figure>
    );
  }
  if (block.type === 'stat') {
    return (
      <div className="na-stat-row">
        {block.items.map((s, i) => (
          <div className="na-stat" key={i}>
            <span className="na-stat-value">{s.value}</span>
            <span className="na-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function NewsroomArticle() {
  const { id } = useParams();
  const item = getItem(id);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  if (!item) {
    return (
      <div className="na-page na-notfound">
        <div className="padding-global">
          <div className="container-medium">
            <span className="na-eyebrow">Newsroom</span>
            <h1 className="na-notfound-title">Article not found</h1>
            <p className="na-notfound-desc">This story may have been moved or unpublished.</p>
            <Link to="/news" className="na-back-link">← Back to Newsroom</Link>
          </div>
        </div>
      </div>
    );
  }

  const related = getRelated(item, 3);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: item.title, url }); } catch { /* user cancelled */ }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard.');
      } catch {
        alert(url);
      }
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": item.type === 'press-release' ? 'NewsArticle' : 'Article',
    headline: item.title,
    description: item.excerpt,
    datePublished: item.date,
    publisher: {
      "@type": "Corporation",
      name: "Zebrold International Holdings Limited",
      alternateName: ["Zebrold IHL", "Zebrold Group"],
    },
  };

  return (
    <div className="na-page">
      <SEO
        title={`${item.title} | Zebrold Newsroom`}
        description={item.excerpt}
        keywords={(item.tags || []).join(', ')}
        url={`/news/${item.id}`}
        schemaData={articleSchema}
      />

      {/* Subtle reading-progress indicator */}
      <motion.div className="na-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <header className="na-header">
        <div className="padding-global">
          <div className="container-medium">
            <Link to="/news" className="na-back-link">← Back to Newsroom</Link>
            <div className="na-header-tags">
              <span className="na-tag">{categoryLabel(item.category)}</span>
              <span className="na-tag na-tag-outline">{typeLabel(item.type)}</span>
            </div>
            <h1 className="na-title">{item.title}</h1>
            <p className="na-intro">{item.excerpt}</p>
            <div className="na-header-footer">
              <span className="na-meta">{formatDate(item.date)}{item.readTime ? ` · ${item.readTime}` : ''}{item.location ? ` · ${item.location}` : ''}</span>
              {item.type === 'press-release' && (
                <div className="na-utility-actions">
                  <button type="button" className="na-utility-btn" onClick={() => window.print()}>Print</button>
                  <button type="button" className="na-utility-btn" onClick={handleShare}>Share</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="na-hero-imgwrap">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>

      <article className="na-content" ref={contentRef}>
        <div className="padding-global">
          <div className="container-medium na-content-inner">
            {(item.body || []).map((block, i) => (
              <BodyBlock block={block} key={i} />
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="na-related">
          <div className="padding-global">
            <div className="container-large">
              <span className="na-eyebrow">Continue reading</span>
              <h2 className="na-related-title">Related stories</h2>
              <div className="na-related-grid">
                {related.map((r) => (
                  <Link to={`/news/${r.id}`} key={r.id} className="na-related-card">
                    <div className="na-related-imgwrap">
                      <img src={r.image} alt={r.title} loading="lazy" />
                    </div>
                    <div className="na-related-body">
                      <span className="na-tag na-tag-sm">{categoryLabel(r.category)}</span>
                      <h3 className="na-related-card-title">{r.title}</h3>
                      <span className="na-meta">{formatDate(r.date)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
