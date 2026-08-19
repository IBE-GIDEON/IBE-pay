import { PINSTRIPE } from "./BankCards";
import IbeCard from "./IbeCard";

/**
 * Closing section: one message, one action, the product as the hero.
 * Legal copy lives in the footer — it does not belong in a call to action.
 */

export default function ClosingCta() {
  return (
    <section
      id="get"
      className="bg-ink relative flex min-h-[100dvh] items-center overflow-hidden py-20 text-white"
    >
      {/* card texture across the whole section */}
      <span
        className="pointer-events-none absolute inset-0 block opacity-70"
        style={{ background: PINSTRIPE }}
      />
      {/* spotlight behind the card */}
      <span className="pointer-events-none absolute top-1/2 right-[6%] block h-[52vw] max-h-[620px] w-[52vw] max-w-[620px] -translate-y-1/2 rounded-full bg-[#ff2d46]/12 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:gap-16">
        {/* message */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.3em] text-white/45 uppercase">
            IBE Pay
          </span>

          <h2 className="mt-5 text-[clamp(32px,min(5.6dvh,7.4vw),58px)] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance">
            Every card you own.
            <br />
            <span className="text-brand">One black card.</span>
          </h2>

          <p className="mt-6 max-w-md text-[clamp(15px,2dvh,18px)] leading-relaxed font-medium text-white/60">
            Link your bank cards once. Tap anywhere in Nigeria or abroad, and
            IBE Pay quietly picks the card that costs you least.
          </p>

          <div className="mt-9">
            <a
              href="#get"
              data-get-app
              className="text-ink inline-flex h-14 items-center rounded-full bg-white px-9 text-[16px] font-bold transition-opacity hover:opacity-90"
            >
              Join the waitlist
            </a>
          </div>

          <p className="mt-6 text-[13px] font-medium text-white/35">
            Free to join. We are onboarding in batches, earliest first.
          </p>
        </div>

        {/* product */}
        <div className="relative">
          <IbeCard className="mx-auto w-full max-w-[440px] rotate-[-7deg] drop-shadow-[0_40px_70px_rgba(0,0,0,0.65)]" />
        </div>
      </div>
    </section>
  );
}
