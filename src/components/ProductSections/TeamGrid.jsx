import { useState } from 'react';

function Avatar({ name, photo }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map((n) => n[0]).join('');

  if (!photo || failed) return initials;

  return (
    <img
      src={photo}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/** Profile-style expert cards (photo + name + role + quote). Content is placeholder until real input is supplied. */
export default function TeamGrid({ members, placeholderNote }) {
  return (
    <>
      {placeholderNote && (
        <span className="product-placeholder-flag">⚠ {placeholderNote}</span>
      )}
      <div className="product-team-grid">
        {members.map((m, i) => (
          <div className="product-team-card" key={i}>
            <div className="product-team-avatar">
              <Avatar name={m.name} photo={m.photo} />
            </div>
            <p className="product-team-quote">&ldquo;{m.quote}&rdquo;</p>
            <span className="product-team-name">{m.name}</span>
            <span className="product-team-role">{m.role}</span>
          </div>
        ))}
      </div>
    </>
  );
}
