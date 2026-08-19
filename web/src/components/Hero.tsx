export default function Hero() {
  return (
    <section
      id="top"
      className="sky clouds relative flex min-h-[calc(100dvh-4rem-1px)] flex-col items-center justify-center overflow-hidden px-5 text-center"
    >
      <h1 className="max-w-4xl text-[clamp(34px,min(7.2dvh,9vw),76px)] leading-[1.06] font-extrabold tracking-[-0.03em] text-balance">
        All your cards, one smart wallet&nbsp;&mdash;{" "}
        <span className="text-brand">IBE Pay</span>
      </h1>

      <p className="text-ink/75 mt-[clamp(14px,2.6dvh,30px)] max-w-lg text-[clamp(15px,min(2.2dvh,4.4vw),21px)] leading-relaxed font-medium text-balance">
        Tap to pay, spend without limits and earn cashback on every card you
        own.
      </p>

      <a
        href="#get"
        data-get-app
        className="bg-ink mt-[clamp(20px,3.6dvh,42px)] inline-flex h-[clamp(42px,5.4dvh,56px)] items-center rounded-full px-8 text-[clamp(14px,1.8dvh,17px)] font-semibold text-white transition-opacity hover:opacity-85"
      >
        Join the waitlist
      </a>
    </section>
  );
}
