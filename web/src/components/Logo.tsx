export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      <path
        d="M23 11.4A8.7 8.7 0 1 0 24.4 16"
        fill="none"
        stroke="#fff"
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3.1" fill="#fff" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  markClass = "h-6 w-6",
}: {
  className?: string;
  markClass?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markClass} />
      <span className="text-[15px] font-extrabold tracking-[0.18em] uppercase">
        IBE Pay
      </span>
    </span>
  );
}
