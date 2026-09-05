/** Multi-column technology/feature breakdown — "A Balanced Design Approach" style sections. */
export default function ColumnGrid({ columns }) {
  return (
    <div className="product-column-grid" style={{ '--col-count': columns.length }}>
      {columns.map((col, i) => (
        <div className="product-column" key={i}>
          <h3 className="product-column-title">{col.title}</h3>
          <ul>
            {col.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
