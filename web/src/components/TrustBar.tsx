import type { CSSProperties } from "react";

import { AfriGo, Mastercard, Nibss, Nqr, Verve, Visa } from "./NetworkLogos";

const NETWORKS = [Visa, Mastercard, Verve, AfriGo, Nqr, Nibss];

// One knob drives every mark, so they stay optically matched.
const logoRow = {
  "--logo-h": "clamp(26px, 3.4vw, 40px)",
} as CSSProperties;

export default function TrustBar() {
  return (
    <section className="bg-mist pt-14 pb-16">
      <div className="mx-auto max-w-4xl px-5">
        <ul
          style={logoRow}
          className="flex flex-wrap items-center justify-center gap-x-[clamp(24px,4.5vw,56px)] gap-y-7"
        >
          {NETWORKS.map((Logo, i) => (
            <li key={i}>
              <Logo />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
