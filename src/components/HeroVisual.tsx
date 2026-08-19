import type { CSSProperties } from "react";

import PhoneMockup from "./PhoneMockup";
import { BANKS, BankCard } from "./BankCards";

const vars = {
  "--phone-w": "clamp(196px, min(30dvh, 56vw), 330px)",
  // How far the top of the phone rises above the fold, into the hero.
  "--phone-peek": "calc(var(--phone-w) * 0.34)",
} as CSSProperties;

export default function HeroVisual() {
  const step = 13.5;
  const start = -((BANKS.length - 1) / 2) * step;

  return (
    // flow-root stops the inner negative margin from collapsing through and
    // dragging this section's background up into the hero — the background box
    // stays at the fold and only the phone overhangs above it.
    // overflow-x-clip (not overflow-hidden) trims the fan horizontally while
    // still letting that upward overhang paint.
    <section style={vars} className="bg-mist relative flow-root overflow-x-clip">
      <div className="relative mt-[calc(var(--phone-peek)*-1)] flex h-[calc(var(--phone-w)*2.092)] items-end justify-center">
        {/* The arc pivots 0.30w below each card's bottom edge, with that pivot
            sitting 0.55w up the phone. That keeps every card's lower end inside
            the phone's silhouette (max corner reach 0.41w < the phone's 0.50w
            half-width) so the fan reads as emerging from behind the phone,
            and keeps the top of the arc clear of the fold. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[39%] flex justify-center">
          <div className="relative h-0 w-0">
            {BANKS.map((bank, i) => (
              <div
                key={bank.name}
                className="absolute bottom-0 h-[calc(var(--phone-w)*0.88)] w-[calc(var(--phone-w)*0.555)] overflow-hidden rounded-[calc(var(--phone-w)*0.05)] shadow-[0_10px_24px_-8px_rgba(13,16,22,0.4)]"
                style={{
                  transform: `translateX(-50%) rotate(${start + i * step}deg)`,
                  transformOrigin: "50% 134%",
                }}
              >
                <BankCard bank={bank} />
              </div>
            ))}
          </div>
        </div>

        <PhoneMockup className="relative z-10" />
      </div>
    </section>
  );
}
