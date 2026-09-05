import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** Expandable technical feature list — one open at a time, smooth height/opacity reveal. */
export default function FeatureAccordion({ items, defaultOpenId }) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id);

  return (
    <div className="product-accordion">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div className={`product-accordion-item ${isOpen ? 'is-open' : ''}`} key={item.id}>
            <button
              type="button"
              className="product-accordion-trigger"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="product-accordion-label">{item.label}</span>
              <span className="product-accordion-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="product-accordion-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="product-accordion-desc">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
