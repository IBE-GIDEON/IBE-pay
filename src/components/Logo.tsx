/**
 * The wordmark is the logo. No symbol — the name carries it.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[15px] font-extrabold tracking-[0.18em] uppercase ${className}`}
    >
      IBE Pay
    </span>
  );
}
