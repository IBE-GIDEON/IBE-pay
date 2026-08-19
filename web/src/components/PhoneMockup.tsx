import { Contactless, MetalChip, PINSTRIPE } from "./BankCards";

/**
 * iPhone 16 Pro mockup drawn to real proportions.
 *
 * Geometry is expressed in a 715 x 1496 viewBox, which is the device's physical
 * 71.5mm x 149.6mm body at 10 units/mm. The titanium rail and black glass edge
 * are painted in SVG and the screen area is punched out with a mask, so the
 * live HTML UI underneath shows through the hole. The Dynamic Island is drawn
 * after the mask, which is why it correctly overlaps the app content.
 *
 * Body   x 8..707   (buttons occupy the 8 units of overhang on each side)
 * Screen x 32.5..682.5, y 24..1472  -> a uniform 24.5 unit (2.45mm) bezel
 *
 * Inside the screen, 100cqw == the screen width == 393pt of iOS layout space,
 * so 1pt ~= 0.2545cqw. All UI sizes below are derived from that.
 */

/**
 * Merchant tiles use each brand's real colour with a drawn mark. They are
 * stand-ins, not the companies' official logo files — swap `mark` for a
 * supplied asset per merchant when you have the rights to display them.
 */
function Letter({ char }: { char: string }) {
  return (
    <span className="text-[5.6cqw] leading-none font-black tracking-[-0.04em]">
      {char}
    </span>
  );
}

function BoltMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[5.6cqw] w-[5.6cqw]" aria-hidden="true">
      <path d="M13.9 2 6.4 13.4h4.3L9.9 22l7.7-11.7h-4.4z" fill="currentColor" />
    </svg>
  );
}

function NetflixMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[6.4cqw] w-[6.4cqw]" aria-hidden="true">
      <rect x="6.2" y="2.4" width="3.5" height="19.2" fill="#e50914" />
      <rect x="14.3" y="2.4" width="3.5" height="19.2" fill="#e50914" />
      <path d="M9.7 2.4h3.4l5.2 19.2h-3.4z" fill="#b20710" />
    </svg>
  );
}

const TRANSACTIONS = [
  { name: "Bolt", note: "Transport", amount: "−₦3,400", bg: "#1fbf6f", fg: "#fff", mark: <BoltMark /> },
  { name: "Jumia", note: "Shopping", amount: "−₦12,500", bg: "#f68b1e", fg: "#fff", mark: <Letter char="J" /> },
  { name: "Shoprite", note: "Groceries", amount: "−₦8,750", bg: "#e30613", fg: "#fff", mark: <Letter char="S" /> },
  { name: "Netflix", note: "Subscription", amount: "−₦4,400", bg: "#000000", fg: "#e50914", mark: <NetflixMark /> },
  { name: "MTN", note: "Airtime", amount: "−₦2,000", bg: "#ffcb05", fg: "#0d1016", mark: <Letter char="M" /> },
  { name: "Chowdeck", note: "Food delivery", amount: "−₦6,200", bg: "#0fa958", fg: "#fff", mark: <Letter char="C" /> },
  { name: "DStv", note: "Subscription", amount: "−₦18,400", bg: "#0072ce", fg: "#fff", mark: <Letter char="D" /> },
];

function MerchantIcon({ tx }: { tx: (typeof TRANSACTIONS)[number] }) {
  return (
    <span
      className="relative block h-[9.5cqw] w-[9.5cqw] shrink-0 overflow-hidden rounded-[2.9cqw]"
      style={{ background: tx.bg, color: tx.fg }}
    >
      {/* app-icon gloss */}
      <span className="pointer-events-none absolute inset-x-0 top-0 block h-1/2 bg-gradient-to-b from-white/25 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        {tx.mark}
      </span>
    </span>
  );
}

const QUICK_ACTIONS = ["Add card", "Send", "Rules"];

function Cellular() {
  return (
    <svg viewBox="0 0 18 12" className="h-[3.1cqw] w-[4.6cqw]" fill="currentColor">
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
      <rect x="10" y="3" width="3" height="9" rx="1" />
      <rect x="15" y="0" width="3" height="12" rx="1" />
    </svg>
  );
}

function Wifi() {
  return (
    <svg viewBox="0 0 16 12" className="h-[3.1cqw] w-[4.1cqw]" fill="currentColor">
      <path d="M8 11.2 5.9 8.9a3 3 0 0 1 4.2 0z" />
      <path
        d="M3.4 6.3a6.6 6.6 0 0 1 9.2 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M1 3.6a10.2 10.2 0 0 1 14 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Battery() {
  return (
    <svg viewBox="0 0 27 12" className="h-[3.1cqw] w-[7cqw]">
      <rect
        x="0.6"
        y="0.6"
        width="23"
        height="10.8"
        rx="3.2"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.1"
      />
      <rect x="2.2" y="2.2" width="16" height="7.6" rx="2" fill="currentColor" />
      <path
        d="M25.3 4.3v3.4a2 2 0 0 0 0-3.4z"
        fill="currentColor"
        fillOpacity="0.45"
      />
    </svg>
  );
}

export default function PhoneMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[715/1496] w-[var(--phone-w)] ${className}`}
    >
      {/* ---- live screen content, clipped to the display area ---- */}
      <div
        className="@container absolute overflow-hidden bg-white"
        style={{
          left: "4.545%",
          right: "4.545%",
          top: "1.604%",
          bottom: "1.604%",
          borderRadius: "calc(var(--phone-w) * 0.126)",
        }}
      >
        {/* status bar — laid out around the Dynamic Island */}
        <div className="flex h-[15cqw] items-center justify-between px-[8.5cqw]">
          <span className="text-[4.4cqw] font-semibold tracking-tight">
            9:41
          </span>
          <span className="text-ink flex items-center gap-[1.6cqw]">
            <Cellular />
            <Wifi />
            <Battery />
          </span>
        </div>

        {/* title */}
        <div className="flex items-center justify-between px-[6cqw] pt-[1.5cqw] pb-[3cqw]">
          <span className="text-[7cqw] font-extrabold tracking-[-0.02em]">
            Wallet
          </span>
          <span className="bg-mist h-[9cqw] w-[9cqw] rounded-full" />
        </div>

        {/* active card — the black IBE Pay card */}
        <div className="px-[6cqw]">
          <div
            className="relative h-[48cqw] overflow-hidden rounded-[4cqw] text-white"
            style={{
              background:
                "linear-gradient(152deg,#232326 0%,#0d0d0f 46%,#050506 72%,#191919 100%)",
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 block"
              style={{ background: PINSTRIPE }}
            />
            <span className="pointer-events-none absolute inset-0 block rounded-[4cqw] ring-[0.4cqw] ring-white/12 ring-inset" />

            <div className="relative flex h-full flex-col justify-between p-[4.4cqw]">
              <div className="flex items-start justify-between">
                <span className="font-serif text-[4.6cqw] leading-none tracking-[0.3em]">
                  IBE
                </span>
                <Contactless className="h-[4.4cqw] w-[4.4cqw] text-white/55" />
              </div>

              <MetalChip className="h-[6.4cqw] w-[8cqw]" />

              <div>
                <span className="block font-serif text-[4.4cqw] leading-none tracking-[0.14em]">
                  •••• •••• •••• 2094
                </span>
                <div className="mt-[3cqw] flex items-end justify-between gap-[2cqw]">
                  <span>
                    <span className="block text-[2.1cqw] leading-none tracking-[0.22em] text-white/45 uppercase">
                      Cardholder
                    </span>
                    <span className="mt-[1.4cqw] block font-serif text-[3.2cqw] leading-none">
                      IBE Dev
                    </span>
                  </span>
                  <span>
                    <span className="block text-[2.1cqw] leading-none tracking-[0.22em] text-white/45 uppercase">
                      Tier
                    </span>
                    <span className="mt-[1.4cqw] block font-serif text-[3.2cqw] leading-none">
                      PLATINUM
                    </span>
                  </span>
                  <span className="text-[2.6cqw] leading-none tracking-[0.24em] text-white/55 uppercase">
                    Verve
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* balances */}
        <div className="mt-[4cqw] flex gap-[3cqw] px-[6cqw]">
          {[
            { label: "Balance", value: "₦120,000" },
            { label: "This month", value: "₦45,300" },
          ].map((b) => (
            <div
              key={b.label}
              className="bg-mist flex-1 rounded-[3.2cqw] px-[4cqw] py-[3.2cqw]"
            >
              <p className="text-ink-soft text-[2.9cqw] font-semibold uppercase">
                {b.label}
              </p>
              <p className="text-[5cqw] font-extrabold tracking-tight">
                {b.value}
              </p>
            </div>
          ))}
        </div>

        {/* quick actions */}
        <div className="mt-[3.5cqw] flex gap-[2.5cqw] px-[6cqw]">
          {QUICK_ACTIONS.map((a) => (
            <span
              key={a}
              className="bg-ink flex-1 rounded-full py-[2.4cqw] text-center text-[3.2cqw] font-bold text-white"
            >
              {a}
            </span>
          ))}
        </div>

        {/* recent activity */}
        <p className="text-ink-soft mt-[5cqw] px-[6cqw] text-[3cqw] font-bold tracking-[0.1em] uppercase">
          Recent activity
        </p>
        <ul className="mt-[2.8cqw] space-y-[3.7cqw] px-[6cqw]">
          {TRANSACTIONS.map((t) => (
            <li key={t.name} className="flex items-center gap-[3.4cqw]">
              <MerchantIcon tx={t} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[3.7cqw] font-bold">
                  {t.name}
                </span>
                <span className="text-ink-soft block truncate text-[3cqw] font-medium">
                  {t.note}
                </span>
              </span>
              <span className="text-[3.7cqw] font-bold">{t.amount}</span>
            </li>
          ))}
        </ul>

        {/* home indicator */}
        <span className="bg-ink/85 absolute bottom-[2cqw] left-1/2 h-[1.2cqw] w-[35cqw] -translate-x-1/2 rounded-full" />
      </div>

      {/* ---- titanium frame drawn over the screen ---- */}
      <svg
        viewBox="0 0 715 1496"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          {/* horizontal sheen across the side rails */}
          <linearGradient id="ibe-rail" x1="0" y1="0" x2="715" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#54555b" />
            <stop offset="0.02" stopColor="#caccd3" />
            <stop offset="0.055" stopColor="#6c6e75" />
            <stop offset="0.11" stopColor="#3a3b41" />
            <stop offset="0.5" stopColor="#2a2b2f" />
            <stop offset="0.89" stopColor="#3a3b41" />
            <stop offset="0.945" stopColor="#6c6e75" />
            <stop offset="0.98" stopColor="#caccd3" />
            <stop offset="1" stopColor="#54555b" />
          </linearGradient>

          <linearGradient id="ibe-btn" x1="0" y1="0" x2="0" y2="1" >
            <stop offset="0" stopColor="#7c7e85" />
            <stop offset="0.5" stopColor="#4a4b51" />
            <stop offset="1" stopColor="#7c7e85" />
          </linearGradient>

          {/* faint glass reflection laid over the display */}
          <linearGradient id="ibe-glare" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* everything in this mask's group is painted except the screen */}
          <mask id="ibe-screen-hole">
            <rect width="715" height="1496" fill="#fff" />
            <rect x="32.5" y="24" width="650" height="1448" rx="90" fill="#000" />
          </mask>
        </defs>

        {/* side buttons sit behind the body so the rail overlaps their base */}
        <g fill="url(#ibe-btn)">
          <rect x="0" y="330" width="10" height="58" rx="3" />
          <rect x="0" y="446" width="10" height="104" rx="3" />
          <rect x="0" y="578" width="10" height="104" rx="3" />
          <rect x="705" y="470" width="10" height="172" rx="3" />
        </g>

        <g mask="url(#ibe-screen-hole)">
          {/* titanium rail */}
          <rect x="8" y="0" width="699" height="1496" rx="112" fill="url(#ibe-rail)" />
          {/* black glass edge inside the rail */}
          <rect x="16" y="8" width="683" height="1480" rx="105" fill="#0b0b0d" />
          {/* thin highlight where the glass meets the rail */}
          <rect
            x="16.5"
            y="8.5"
            width="682"
            height="1479"
            rx="104.5"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.14"
            strokeWidth="1.6"
          />
        </g>

        {/* glass glare over the display */}
        <rect
          x="32.5"
          y="24"
          width="650"
          height="1448"
          rx="90"
          fill="url(#ibe-glare)"
        />

        {/* Dynamic Island */}
        <g>
          <rect x="251.5" y="43" width="212" height="62" rx="31" fill="#000" />
          <circle cx="432" cy="74" r="11" fill="#101014" />
          <circle cx="429" cy="71" r="4" fill="#1e2a3a" fillOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
