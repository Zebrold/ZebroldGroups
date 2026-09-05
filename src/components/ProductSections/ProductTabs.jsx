import { useState } from 'react';

/** Reusable tab component — white nav, maroon active-underline, image+copy panel that swaps on change. */
export default function ProductTabs({ tabs, defaultId }) {
  const [activeId, setActiveId] = useState(defaultId || tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) || tabs[0];

  return (
    <div className="product-tabs">
      <div className="product-tabs-nav" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            className={`product-tab-btn ${tab.id === activeId ? 'is-active' : ''}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="product-tab-panel" key={active.id}>
        <div className="product-tab-panel-media">
          <img
            src={active.image}
            alt={active.imageAlt || ''}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="product-tab-panel-copy">
          <h3 className="product-tab-panel-title">{active.title}</h3>
          <p className="product-tab-panel-desc">{active.desc}</p>
        </div>
      </div>
    </div>
  );
}
