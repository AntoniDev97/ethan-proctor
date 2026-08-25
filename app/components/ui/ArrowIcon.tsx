// components/ui/ArrowIcon.tsx

/**
 * The site's signature arrow (from public/Arrow.svg), inlined so it can
 * inherit its colour from the surrounding text via currentColor.
 * Points right by default; rotate with transform utilities as needed.
 */
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 37.83 24.57"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeMiterlimit={10}
    className={className}
    aria-hidden
  >
    <line y1="12.28" x2="37.83" y2="12.28" />
    <path d="M37.83,12.17c-6.72,0-12.17-5.45-12.17-12.17" />
    <path d="M37.83,12.4c-6.72,0-12.17,5.45-12.17,12.17" />
  </svg>
);

export default ArrowIcon;
