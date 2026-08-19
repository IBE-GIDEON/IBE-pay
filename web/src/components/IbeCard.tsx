import { Contactless, MetalChip, PINSTRIPE } from "./BankCards";

/**
 * The IBE Pay card, landscape ID-1 (1.586:1).
 *
 * Wrapper carries `@container`; every internal dimension is `cqw` against the
 * card's own width, so it composes identically at any size.
 */
export default function IbeCard({ className = "" }: { className?: string }) {
  return (
    <div className={`@container ${className}`}>
      <div
        className="relative aspect-[1.586/1] w-full overflow-hidden rounded-[4.2cqw] text-white"
        style={{
          background:
            "linear-gradient(152deg,#26262a 0%,#101012 40%,#050506 70%,#1b1b1e 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-0 block"
          style={{ background: PINSTRIPE }}
        />
        {/* key light across the upper left */}
        <span
          className="pointer-events-none absolute inset-0 block"
          style={{
            background:
              "radial-gradient(120% 90% at 12% 0%,rgba(255,255,255,0.14) 0%,rgba(255,255,255,0) 58%)",
          }}
        />
        <span className="pointer-events-none absolute inset-0 block rounded-[4.2cqw] ring-[0.35cqw] ring-white/15 ring-inset" />

        <div className="relative flex h-full flex-col justify-between p-[6cqw]">
          <div className="flex items-start justify-between">
            <span className="font-serif text-[5.2cqw] leading-none tracking-[0.32em]">
              IBE
            </span>
            <Contactless className="h-[4.8cqw] w-[4.8cqw] text-white/55" />
          </div>

          <MetalChip className="h-[8.5cqw] w-[11cqw]" />

          <div>
            <span className="block font-serif text-[6.2cqw] leading-none tracking-[0.16em]">
              •••• •••• •••• 2094
            </span>

            <div className="mt-[4.5cqw] flex items-end justify-between gap-[3cqw]">
              <span>
                <span className="block text-[2.4cqw] leading-none tracking-[0.24em] text-white/45 uppercase">
                  Cardholder
                </span>
                <span className="mt-[1.8cqw] block font-serif text-[3.6cqw] leading-none">
                  IBE Dev
                </span>
              </span>
              <span>
                <span className="block text-[2.4cqw] leading-none tracking-[0.24em] text-white/45 uppercase">
                  Tier
                </span>
                <span className="mt-[1.8cqw] block font-serif text-[3.6cqw] leading-none">
                  PLATINUM
                </span>
              </span>
              <span className="text-[3cqw] leading-none tracking-[0.26em] text-white/55 uppercase">
                Verve
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
