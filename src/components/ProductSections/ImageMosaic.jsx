/**
 * Editorial 4-image mosaic — one medium-large image, two detail shots, one
 * wide image — rather than a uniform grid. Expects images in that order:
 * [large, detail1, detail2, wide].
 */
export default function ImageMosaic({ images }) {
  const [large, detail1, detail2, wide] = images;

  const cells = [
    { data: large, className: 'mosaic-cell--large' },
    { data: detail1, className: 'mosaic-cell--detail' },
    { data: detail2, className: 'mosaic-cell--detail' },
    { data: wide, className: 'mosaic-cell--wide' },
  ];

  return (
    <div className="product-mosaic">
      {cells.map((cell, i) => (
        cell.data && (
          <div className={`mosaic-cell ${cell.className}`} key={i}>
            <img
              src={cell.data.image}
              alt={cell.data.alt || ''}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        )
      ))}
    </div>
  );
}
