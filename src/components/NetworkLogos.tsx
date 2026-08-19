/**
 * Payment-network marks for the trust bar.
 *
 * Mastercard is drawn to its real construction and Visa is set in type in the
 * correct brand blue. Verve, AfriGo, NQR and NIBSS are approximations —
 * replace all six with the official asset kits before launch (Visa and
 * Mastercard publish theirs publicly; NIBSS supplies its own, AfriGo and NQR
 * marks to licensed partners).
 *
 * Each mark fills `--logo-h`, set once on the row, so they stay optically
 * balanced against each other at any size.
 */

function Row({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-[var(--logo-h)] items-center justify-center">
      {children}
    </span>
  );
}

export function Visa() {
  return (
    <Row>
      <span className="text-[calc(var(--logo-h)*0.86)] leading-none font-black tracking-[-0.04em] text-[#1434cb] italic">
        VISA
      </span>
    </Row>
  );
}

export function Mastercard() {
  return (
    <Row>
      <span className="flex h-full flex-col items-center justify-center gap-[calc(var(--logo-h)*0.08)]">
        <svg
          viewBox="0 0 48 30"
          className="h-[62%] w-auto"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="mc-overlap">
              <circle cx="17" cy="15" r="13" />
            </clipPath>
          </defs>
          <circle cx="17" cy="15" r="13" fill="#eb001b" />
          <circle cx="31" cy="15" r="13" fill="#f79e1b" />
          <circle cx="31" cy="15" r="13" fill="#ff5f00" clipPath="url(#mc-overlap)" />
        </svg>
        <span className="text-[calc(var(--logo-h)*0.26)] leading-none font-semibold tracking-[-0.02em] text-[#231f20]">
          mastercard
        </span>
      </span>
    </Row>
  );
}

export function Verve() {
  return (
    <Row>
      <span className="flex h-full items-center gap-[calc(var(--logo-h)*0.16)]">
        <svg viewBox="0 0 24 24" className="h-[68%] w-auto" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#00425f" />
          <path d="M7 8.5 12 17l5-8.5h-3.1L12 12.2 10.1 8.5z" fill="#e4032e" />
        </svg>
        <span className="text-[calc(var(--logo-h)*0.68)] leading-none font-extrabold tracking-[-0.04em] text-[#00425f] lowercase">
          verve
        </span>
      </span>
    </Row>
  );
}

export function AfriGo() {
  return (
    <Row>
      <span className="flex h-full items-center gap-[calc(var(--logo-h)*0.16)]">
        <svg viewBox="0 0 24 24" className="h-[68%] w-auto" aria-hidden="true">
          <path
            d="M12 1.6a10.4 10.4 0 1 0 10.4 10.4h-5.2A5.2 5.2 0 1 1 12 6.8z"
            fill="#008751"
          />
          <circle cx="18.4" cy="6" r="3" fill="#f5a524" />
        </svg>
        <span className="text-[calc(var(--logo-h)*0.62)] leading-none font-extrabold tracking-[-0.035em] text-[#0a5c38]">
          AfriGo
        </span>
      </span>
    </Row>
  );
}

export function Nqr() {
  return (
    <Row>
      <span className="flex h-full items-center gap-[calc(var(--logo-h)*0.16)]">
        <svg
          viewBox="0 0 24 24"
          className="h-[70%] w-auto text-[#1b3b6f]"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="2.6">
            <rect x="1.3" y="1.3" width="8" height="8" rx="1.6" />
            <rect x="14.7" y="1.3" width="8" height="8" rx="1.6" />
            <rect x="1.3" y="14.7" width="8" height="8" rx="1.6" />
          </g>
          <g fill="currentColor">
            <rect x="14.2" y="14.2" width="3.6" height="3.6" rx="0.6" />
            <rect x="19.2" y="19.2" width="3.6" height="3.6" rx="0.6" />
            <rect x="14.2" y="19.2" width="3.6" height="3.6" rx="0.6" />
          </g>
        </svg>
        <span className="text-[calc(var(--logo-h)*0.66)] leading-none font-extrabold tracking-[-0.03em] text-[#1b3b6f]">
          NQR
        </span>
      </span>
    </Row>
  );
}

export function Nibss() {
  return (
    <Row>
      <span className="flex h-full items-center gap-[calc(var(--logo-h)*0.16)]">
        {/* connected nodes — an interbank settlement network */}
        <svg viewBox="0 0 24 24" className="h-[68%] w-auto" aria-hidden="true">
          <path
            d="M12 4.6 18.6 8.4v7.2L12 19.4 5.4 15.6V8.4z"
            fill="none"
            stroke="#16326b"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="4.6" r="2.6" fill="#16326b" />
          <circle cx="18.6" cy="15.6" r="2.6" fill="#008751" />
          <circle cx="5.4" cy="15.6" r="2.6" fill="#008751" />
        </svg>
        <span className="text-[calc(var(--logo-h)*0.62)] leading-none font-extrabold tracking-[-0.035em] text-[#16326b]">
          NIBSS
        </span>
      </span>
    </Row>
  );
}
