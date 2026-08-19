import { Wordmark } from "./Logo";

const COLUMNS = [
  {
    title: "Product",
    links: ["How it works", "Cards", "Plans", "IBE for Business"],
  },
  {
    title: "Company",
    links: ["About us", "Contact"],
  },
  {
    title: "Help",
    links: ["Getting started", "Linking your cards", "System status"],
  },
  {
    title: "Legal",
    links: [
      "Terms and conditions",
      "Privacy policy",
      "Cookie policy",
      "Complaints",
    ],
  },
];

const SOCIALS = [
  {
    label: "X",
    path: "M17.5 3h3l-6.6 7.5L21.8 21h-6l-4.7-6.1L5.7 21h-3l7-8-7-10h6.1l4.3 5.6zm-1 16h1.6L7.6 4.7H5.9z",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9s.7.8.9 1.4c.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9s-.7-.8-.9-1.4c-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.4-.1 1-.3 2.2-.4 1.3-.1 1.7-.1 4.8-.1zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3zm6.9-11.1a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zM10 9.5h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v6.2h-4v-5.5c0-1.31-.02-3-1.9-3-1.9 0-2.2 1.42-2.2 2.9v5.6h-4z",
  },
];

export default function SiteFooter() {
  return (
    // A step darker than the closing section, with a hairline, so the two dark
    // zones read as separate rather than one continuous block.
    <footer className="border-t border-white/10 bg-[#07080a] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        {/* brand */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed font-medium text-white/45">
              One wallet for every Nigerian bank card. Tap anywhere, and the
              right card pays.
            </p>
          </div>

          <ul className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href="#top"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/55 transition-colors hover:border-white/35 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-[13.5px] font-medium text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* disclosure */}
        <div className="border-t border-white/10 pt-9">
          <p className="max-w-3xl text-[11.5px] leading-relaxed font-medium text-white/35">
            <span className="text-white/60">
              IBE Pay is a technology company, not a bank, and does not take
              deposits.
            </span>{" "}
            Card issuing, payment processing and settlement are provided by
            partners licensed and regulated by the Central Bank of Nigeria.
            Cashback, exchange rates, international spend routing and
            card-switching features are subject to eligibility, fair use limits
            and the applicable terms and conditions. Rates shown in the app are
            indicative and may change before a transaction settles. Cards and
            accounts you link remain governed by the terms of the bank that
            issued them.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-[12px] font-medium text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} IBE Pay Technologies Limited
            </span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
