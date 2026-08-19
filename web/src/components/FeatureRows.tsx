import Image from "next/image";

/**
 * Photography is from Pexels (free for commercial use, no attribution
 * required). Files live in /public/features — swap a file and keep the name
 * to change a section's image without touching this component.
 */

type Feature = {
  id: string;
  eyebrow: string;
  highlight: string;
  body: string;
  cta: string;
  img: string;
  alt: string;
  badge: string;
  badgeIcon: "spark" | "tap" | "check";
  bg: string;
  reversed?: boolean;
};

const FEATURES: Feature[] = [
  {
    id: "currency",
    eyebrow: "Make every card a",
    highlight: "currency card",
    body: "Your naira card has a monthly international limit. IBE Pay checks every linked card before a foreign payment goes out and routes it to whichever one still has headroom — so the payment goes through instead of being declined. No bank markup, and 1% cashback on top.",
    cta: "Explore benefits",
    img: "/features/travel.jpg",
    alt: "Traveller walking through an airport walkway with a suitcase",
    badge: "Save + earn",
    badgeIcon: "spark",
    bg: "bg-white",
  },
  {
    id: "rewards",
    eyebrow: "Make every card a",
    highlight: "rewards card",
    body: "Earn cashback at hundreds of merchants — Jumia, Bolt, Netflix, Shoprite and more — paid on top of whatever rewards your bank already gives you. One wallet, every card, rewards that stack. Terms and limits apply.",
    cta: "Check out cashback",
    img: "/features/market.jpg",
    alt: "Woman in an orange dress choosing oranges at a fruit market stall",
    badge: "with a tap",
    badgeIcon: "tap",
    bg: "bg-mist",
    reversed: true,
  },
  {
    id: "time",
    eyebrow: "Make every card a",
    highlight: "time machine",
    body: "Charged the wrong card? Move a purchase from one card to another up to 120 days after you made it with Go Back in Time — so a big spend can land on the card that actually suits you, long after the terminal beeped.",
    cta: "How it works",
    img: "/features/cards.jpg",
    alt: "Hand holding a fan of three bank cards",
    badge: "All cards",
    badgeIcon: "check",
    bg: "bg-white",
  },
];

function BadgeIcon({ kind }: { kind: Feature["badgeIcon"] }) {
  if (kind === "check") {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
        <circle cx="8" cy="8" r="8" className="fill-[#22c55e]" />
        <path
          d="m4.6 8.2 2.2 2.2 4.6-4.6"
          fill="none"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "tap") {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4.5 4.5a5 5 0 0 1 0 7M7 2.2a8.2 8.2 0 0 1 0 11.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <path
        d="M8 1.5 9.6 6l4.4 1.6L9.6 9.2 8 13.6 6.4 9.2 2 7.6 6.4 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FeatureRows() {
  return (
    <div id="benefits">
      {FEATURES.map((f, i) => (
        <section
          key={f.id}
          className={`flex min-h-[100dvh] items-center py-16 ${f.bg}`}
        >
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 lg:gap-20">
            {/* photo */}
            <div className={f.reversed ? "md:order-2" : ""}>
              <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_34px_80px_-34px_rgba(13,16,22,0.5)] md:h-[min(66dvh,620px)] md:w-auto">
                <Image
                  src={f.img}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 45vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <span className="text-ink absolute bottom-[10%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/95 px-4 py-2.5 text-[13px] font-bold whitespace-nowrap shadow-lg backdrop-blur">
                  <BadgeIcon kind={f.badgeIcon} />
                  {f.badge}
                </span>
              </div>
            </div>

            {/* copy */}
            <div className={f.reversed ? "md:order-1" : ""}>
              <h2 className="text-[clamp(30px,min(5.2dvh,7vw),56px)] leading-[1.06] font-extrabold tracking-[-0.03em]">
                {f.eyebrow}
                <br />
                <span className="text-brand">{f.highlight}</span>
              </h2>
              <p className="text-ink-soft mt-[clamp(16px,2.4dvh,28px)] max-w-lg text-[clamp(15px,min(2dvh,4vw),19px)] leading-relaxed font-medium">
                {f.body}
              </p>
              <a
                href="#get"
                className="bg-ink mt-[clamp(20px,3dvh,34px)] inline-flex h-[clamp(42px,5.2dvh,54px)] items-center rounded-full px-7 text-[clamp(14px,1.8dvh,16px)] font-semibold text-white transition-opacity hover:opacity-85"
              >
                {f.cta}
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
