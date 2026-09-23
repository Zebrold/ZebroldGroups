import { Link } from 'react-router-dom';

/** Text link with a trailing circled arrow — styled by `.arrow-link` in base.css. */
export default function ArrowLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`arrow-link ${className}`}>
      <span>{children}</span>
      <span aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="13" height="13">
          <path d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
