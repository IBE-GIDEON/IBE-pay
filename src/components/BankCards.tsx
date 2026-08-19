/**
 * Cards for the hero fan.
 *
 * Vertical ID-1 format (53.98 x 85.6mm, ratio 1.586). Every dimension is in
 * `cqw` against the card's own width, so proportions hold at any scale.
 *
 * Finish follows the IBE Pay card: fine diagonal pinstripe, brushed-metal chip,
 * serif numerals with wide tracking, letterspaced caps micro-labels and a
 * light-catching inset edge.
 *
 * Wordmarks are set in type, not the banks' official logo artwork.
 */

export type Network = "verve" | "mastercard" | "visa";

export type Bank = {
  name: string;
  bg: string;
  fg: string;
  network: Network;
  last4: string;
  exp: string;
};

const IIN: Record<Network, string> = {
  verve: "5061",
  mastercard: "5399",
  visa: "4658",
};

const HOLDER = "I. OKONKWO";

export const BANKS: Bank[] = [
  { name: "Zenith", bg: "linear-gradient(155deg,#ff2447,#8e0018)", fg: "#fff", network: "visa", last4: "9044", exp: "09/28" },
  { name: "UBA", bg: "linear-gradient(155deg,#e0262d,#6b0d12)", fg: "#fff", network: "verve", last4: "1276", exp: "04/29" },
  { name: "Sterling", bg: "linear-gradient(155deg,#f0621f,#832506)", fg: "#fff", network: "mastercard", last4: "5518", exp: "12/27" },
  { name: "Access", bg: "linear-gradient(155deg,#ff9026,#a94a04)", fg: "#fff", network: "verve", last4: "4821", exp: "07/29" },
  { name: "GTBank", bg: "linear-gradient(155deg,#f57f2c,#96340b)", fg: "#fff", network: "mastercard", last4: "7310", exp: "02/28" },
  { name: "FirstBank", bg: "linear-gradient(155deg,#0d5f9e,#011d36)", fg: "#fff", network: "verve", last4: "6653", exp: "10/28" },
  { name: "Fidelity", bg: "linear-gradient(155deg,#16a566,#044125)", fg: "#fff", network: "verve", last4: "3390", exp: "06/27" },
  { name: "OPay", bg: "linear-gradient(155deg,#23dd8c,#076037)", fg: "#fff", network: "verve", last4: "8802", exp: "01/30" },
  { name: "Union", bg: "linear-gradient(155deg,#00c2e8,#004f65)", fg: "#fff", network: "mastercard", last4: "2147", exp: "08/28" },
  { name: "Moniepoint", bg: "linear-gradient(155deg,#3d7bff,#001c73)", fg: "#fff", network: "verve", last4: "6034", exp: "03/29" },
  { name: "Stanbic IBTC", bg: "linear-gradient(155deg,#1350d6,#00114d)", fg: "#fff", network: "visa", last4: "7725", exp: "11/27" },
  { name: "PalmPay", bg: "linear-gradient(155deg,#8b52ff,#2f0a76)", fg: "#fff", network: "mastercard", last4: "9518", exp: "05/29" },
  { name: "Kuda", bg: "linear-gradient(155deg,#7c39cc,#1f0940)", fg: "#fff", network: "visa", last4: "4406", exp: "09/29" },
];

/** Fine diagonal pinstripe, as on the IBE Pay card. */
export const PINSTRIPE =
  "repeating-linear-gradient(45deg,rgba(255,255,255,0.055) 0 1px,rgba(255,255,255,0) 1px 6px)";

/** Diagonal sheen falling to a darkened lower-right — laminated plastic. */
const GLOSS =
  "linear-gradient(122deg,rgba(255,255,255,0.22) 0%,rgba(255,255,255,0.07) 26%,rgba(255,255,255,0) 46%,rgba(0,0,0,0.14) 74%,rgba(0,0,0,0.3) 100%)";

/** Soft key light from the upper left. */
const KEYLIGHT =
  "radial-gradient(120% 80% at 18% 8%,rgba(255,255,255,0.2) 0%,rgba(255,255,255,0) 60%)";

/** Brushed-metal EMV module with the contact grid. */
export function MetalChip({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative block overflow-hidden rounded-[16%] ${className}`}
      style={{
        background:
          "linear-gradient(135deg,#eceef3 0%,#a6aab6 26%,#f4f5f9 48%,#8b8f9c 72%,#d9dbe2 100%)",
      }}
    >
      <svg
        viewBox="0 0 40 32"
        className="absolute inset-0 h-full w-full"
        fill="none"
        stroke="rgba(38,42,52,0.45)"
        strokeWidth="1.3"
        aria-hidden="true"
      >
        <rect x="0.7" y="0.7" width="38.6" height="30.6" rx="4.5" />
        <path d="M13.6 0.7v30.6M26.4 0.7v30.6M0.7 10.9h38.6M0.7 21.1h38.6" />
      </svg>
    </span>
  );
}

export function Contactless({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4.6 5.2a4.2 4.2 0 0 1 0 5.6" />
      <path d="M7.3 3.2a7.4 7.4 0 0 1 0 9.6" />
      <path d="M10 1.2a10.6 10.6 0 0 1 0 13.6" />
    </svg>
  );
}

function NetworkMark({ kind }: { kind: Network }) {
  if (kind === "mastercard") {
    return (
      <svg viewBox="0 0 38 24" className="h-[10cqw] w-[16cqw] shrink-0" aria-hidden="true">
        <circle cx="15" cy="12" r="11" fill="#eb001b" />
        <circle cx="23" cy="12" r="11" fill="#f79e1b" fillOpacity="0.88" />
      </svg>
    );
  }
  if (kind === "visa") {
    return (
      <span className="shrink-0 text-[8.4cqw] leading-none font-black tracking-[0.02em] italic opacity-95">
        VISA
      </span>
    );
  }
  return (
    <span className="shrink-0 text-[8cqw] leading-none font-extrabold tracking-[-0.02em] lowercase opacity-95">
      verve
    </span>
  );
}

export function BankCard({ bank }: { bank: Bank }) {
  return (
    <div
      className="@container relative h-full w-full"
      style={{ background: bank.bg, color: bank.fg }}
    >
      <span className="pointer-events-none absolute inset-0 block" style={{ background: KEYLIGHT }} />
      <span className="pointer-events-none absolute inset-0 block" style={{ background: PINSTRIPE }} />
      <span className="pointer-events-none absolute inset-0 block" style={{ background: GLOSS }} />
      {/* light-catching inset edge */}
      <span className="pointer-events-none absolute inset-0 z-2 block ring-[0.6cqw] ring-white/20 ring-inset" />

      <div className="relative z-1 flex h-full flex-col justify-between p-[8cqw]">
        <div className="flex items-start justify-between gap-[3cqw]">
          <span className="min-w-0 truncate font-serif text-[9cqw] leading-none tracking-[0.08em] uppercase">
            {bank.name}
          </span>
          <Contactless className="h-[9.5cqw] w-[9.5cqw] opacity-70" />
        </div>

        <MetalChip className="h-[16cqw] w-[20cqw]" />

        <div>
          <span className="block text-[2.9cqw] leading-none tracking-[0.2em] uppercase opacity-50">
            Valid thru {bank.exp}
          </span>
          <span className="mt-[2.6cqw] block font-serif text-[6.4cqw] leading-none tracking-[0.07em]">
            {IIN[bank.network]} •••• •••• {bank.last4}
          </span>

          <div className="mt-[4.6cqw] flex items-end justify-between gap-[3cqw]">
            <span className="min-w-0">
              <span className="block text-[2.9cqw] leading-none tracking-[0.2em] uppercase opacity-50">
                Cardholder
              </span>
              <span className="mt-[2.2cqw] block truncate font-serif text-[5cqw] leading-none tracking-[0.06em]">
                {HOLDER}
              </span>
            </span>
            <NetworkMark kind={bank.network} />
          </div>
        </div>
      </div>
    </div>
  );
}
