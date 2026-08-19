import Image from "next/image";

/**
 * Software-only capabilities — no hardware partners, no lending licence, no
 * balance sheet. Everything here is buildable by the team that ships the app.
 *
 * Photography from Pexels (free for commercial use). Files in /public/features.
 */

const CARDS = [
  {
    title: "Smart Rules",
    body: "Set a rule once and IBE Pay picks the right card every time — by merchant, by amount, or by currency.",
    img: "/features/rules.jpg",
    alt: "Man at a desk setting something up on his phone",
  },
  {
    title: "Anti-Embarrassment",
    body: "Card declined at the counter? IBE Pay retries instantly on your backup card, before anyone behind you notices.",
    img: "/features/tap.jpg",
    alt: "Hand tapping a black card on a shop payment terminal",
  },
  {
    title: "One running list",
    body: "Every card, every bank, in one place. Stop opening five apps to work out where your money actually went.",
    img: "/features/overview.jpg",
    alt: "Woman checking her phone while holding a coffee cup",
  },
];

export default function FeatureGrid() {
  return (
    <section
      id="controls"
      className="bg-mist flex min-h-[100dvh] items-center py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="max-w-2xl text-[clamp(28px,min(4.6dvh,6.4vw),48px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance">
          Every card you own,{" "}
          <span className="text-brand">under your control</span>
        </h2>

        <div className="mt-[clamp(28px,5dvh,56px)] grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {CARDS.map((card) => (
            <article key={card.title} className="flex flex-col">
              <div className="relative aspect-[3/4] max-h-[42dvh] w-full overflow-hidden rounded-3xl shadow-[0_26px_60px_-30px_rgba(13,16,22,0.5)]">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-[clamp(14px,2.2dvh,22px)] text-[clamp(17px,2.4dvh,23px)] leading-tight font-extrabold tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="text-ink-soft mt-[clamp(6px,1.2dvh,12px)] text-[clamp(13px,1.7dvh,16px)] leading-relaxed font-medium">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
