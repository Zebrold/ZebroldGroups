/** Label/value spec cards — clean spec-table alternative used across all product pages. */
export default function SpecGrid({ specs }) {
  return (
    <div className="product-spec-grid">
      {specs.map((spec, i) => (
        <div className="product-spec-card" key={i}>
          <span className="product-spec-label">{spec.label}</span>
          <span className="product-spec-value">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
