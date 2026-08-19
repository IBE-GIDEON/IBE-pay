import { BANKS } from "./BankCards";

/**
 * Positions IBE Pay as the layer that houses Apple Pay, Google Pay and every
 * bank card — not as a rival to them. Apple and Google marks are drawn; swap
 * for their official brand assets before launch, as both publish usage rules
 * for the "Works with" style of placement used here.
 */

function AppleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M16.7 12.9c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1 1-3.9 1-.8 0-2-1-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.1-2.5.6-.9 1.1-1.9 1.4-3-.1 0-2.6-1-2.6-4z"
        fill="currentColor"
      />
      <path
        d="M14.5 5.5c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.1.1 2.3-.6 3-1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
        fill="#4285f4"
      />
      <path
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
        fill="#34a853"
      />
      <path
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
        fill="#fbbc05"
      />
      <path
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
        fill="#ea4335"
      />
    </svg>
  );
}

type Cell = boolean | string;

const ROWS: { label: string; ibe: Cell; apple: Cell; google: Cell }[] = [
  { label: "Works with every Nigerian bank", ibe: true, apple: false, google: false },
  { label: "Cashback on every card you own", ibe: true, apple: false, google: false },
  { label: "Go Back in Time® to move a payment between cards", ibe: true, apple: false, google: false },
  { label: "Beats your card's monthly international limit", ibe: true, apple: false, google: false },
  { label: "Lock and unlock every card from one place", ibe: true, apple: false, google: false },
  { label: "Smart Rules", ibe: true, apple: false, google: false },
  { label: "One statement across every bank", ibe: true, apple: false, google: false },
  { label: "Exchange rate", ibe: "Live", apple: "Bank rate", google: "Bank rate" },
  { label: "Foreign transaction fees", ibe: "0%", apple: "Up to 5%", google: "Up to 5%" },
];

function Mark({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-[11px] font-bold">{value}</span>;
  }
  if (value) {
    return (
      <svg viewBox="0 0 16 16" className="mx-auto h-4 w-4" aria-hidden="true">
        <path
          d="m3.4 8.4 3 3 6.2-6.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return <span className="text-ink/25 mx-auto block h-1.5 w-1.5 rounded-full bg-current" />;
}

const HOUSED = BANKS.slice(0, 5);

export default function Comparison() {
  return (
    <section id="compare" className="bg-lilac flex min-h-[100dvh] items-center py-16">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="max-w-3xl text-[clamp(28px,min(4.4dvh,6.2vw),46px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance">
          Apple Pay. Google Pay. Every card you own.{" "}
          <span className="text-brand">One wallet holds them all.</span>
        </h2>
        <p className="text-ink-soft mt-4 max-w-xl text-[clamp(14px,1.8dvh,17px)] leading-relaxed font-medium">
          IBE Pay doesn&rsquo;t replace what&rsquo;s already on your phone. It
          sits above it — so however you choose to tap, the right card pays.
        </p>

        {/* the wallet, holding everything */}
        <div className="border-ink/10 mt-8 rounded-3xl border bg-white/70 p-5 backdrop-blur sm:p-6">
          <span className="text-ink text-[12px] font-extrabold tracking-[0.18em] uppercase">
            Inside IBE Pay
          </span>

          <ul className="mt-4 flex flex-wrap items-center gap-2.5">
            <li className="bg-ink flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-white">
              <AppleMark className="h-4 w-4" />
              <span className="text-[13px] font-bold">Apple&nbsp;Pay</span>
            </li>
            <li className="border-ink/10 flex items-center gap-2 rounded-xl border bg-white px-3.5 py-2.5">
              <GoogleMark className="h-4 w-4" />
              <span className="text-[13px] font-bold">Google&nbsp;Pay</span>
            </li>
            <span className="text-ink/25 px-1 text-[15px] font-bold">+</span>
            {HOUSED.map((b) => (
              <li
                key={b.name}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[12px] font-bold text-white"
                style={{ background: b.bg }}
              >
                {b.name}
              </li>
            ))}
            <li className="border-ink/15 text-ink-soft rounded-xl border border-dashed px-3 py-2.5 text-[12px] font-bold">
              + every other bank
            </li>
          </ul>
        </div>

        {/* what they can't do alone */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-x-1.5 text-left">
            <thead>
              <tr>
                <th className="bg-mist w-[46%] rounded-t-xl px-5 py-4 text-[13px] font-extrabold">
                  What they can&rsquo;t do on their own
                </th>
                <th className="text-ink w-[18%] rounded-t-xl bg-white px-3 py-4 text-center">
                  <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase">
                    IBE Pay
                  </span>
                </th>
                <th className="w-[18%] rounded-t-xl bg-white/60 px-3 py-4 text-center">
                  <AppleMark className="text-ink mx-auto h-4 w-4" />
                </th>
                <th className="w-[18%] rounded-t-xl bg-white/60 px-3 py-4 text-center">
                  <GoogleMark className="mx-auto h-4 w-4" />
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => {
                const last = i === ROWS.length - 1;
                return (
                  <tr key={row.label}>
                    <td
                      className={`bg-mist text-ink/85 px-5 py-3 text-[12px] leading-snug font-semibold ${
                        last ? "rounded-b-xl" : ""
                      }`}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`text-brand bg-white px-3 py-3 text-center ${
                        last ? "rounded-b-xl" : ""
                      }`}
                    >
                      <Mark value={row.ibe} />
                    </td>
                    <td
                      className={`text-ink-soft bg-white/60 px-3 py-3 text-center ${
                        last ? "rounded-b-xl" : ""
                      }`}
                    >
                      <Mark value={row.apple} />
                    </td>
                    <td
                      className={`text-ink-soft bg-white/60 px-3 py-3 text-center ${
                        last ? "rounded-b-xl" : ""
                      }`}
                    >
                      <Mark value={row.google} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
