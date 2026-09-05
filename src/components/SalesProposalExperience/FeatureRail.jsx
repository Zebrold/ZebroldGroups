const FEATURES = {
  en: [
    { num: '01', title: 'Automation', body: 'Automate the creation of beautiful sales proposals.' },
    { num: '02', title: 'Interaction', body: 'Interact in real time with the customer as they review the proposal.' },
    { num: '03', title: 'Prediction', body: "Predict the customer's true interest in your sales proposal." },
    { num: '04', title: 'Analytics', body: 'Analyze historical data and uncover meaningful sales metrics.' },
  ],
  de: [
    { num: '01', title: 'Automatisierung', body: 'Automatisieren Sie die Erstellung überzeugender Verkaufsangebote.' },
    { num: '02', title: 'Interaktion', body: 'Interagieren Sie in Echtzeit mit dem Kunden, während er das Angebot prüft.' },
    { num: '03', title: 'Vorhersage', body: 'Erkennen Sie das echte Interesse des Kunden an Ihrem Angebot.' },
    { num: '04', title: 'Analyse', body: 'Analysieren Sie historische Daten und gewinnen Sie aussagekräftige Vertriebskennzahlen.' },
  ],
};

export default function FeatureRail({ lang, progress }) {
  const items = FEATURES[lang] || FEATURES.en;
  const opacity = Math.min(1, Math.max(0, (progress - 0.04) / 0.1));

  return (
    <div className="sp-feature-rail" style={{ opacity }}>
      {items.map((item, i) => (
        <div className="sp-feature-item" key={item.num} style={{ transitionDelay: `${i * 60}ms` }}>
          <span className="sp-feature-num">{item.num}.</span>
          <span className="sp-feature-title">{item.title}</span>
          <p className="sp-feature-body">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
