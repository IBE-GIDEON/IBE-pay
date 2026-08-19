"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Two-step by design: the email is banked on step one, and the qualifying
 * question only appears afterwards and is optional. Asking anything before
 * the address is captured costs signups.
 *
 * The options deliberately cover domestic failures too — cards decline at a
 * POS far more often than abroad, and a foreign-only question would exclude
 * most people and read as irrelevant.
 */
const PAIN_POINTS = [
  "At a shop or POS",
  "Paying in dollars online",
  "Transfer or bank app failed",
  "Honestly, all of them",
];

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest("[data-get-app]")) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    (state === "done" ? closeRef : inputRef).current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, state]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setError(null);
    setState("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong. Try again.");
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setError("Check your connection and try again.");
      setState("idle");
    }
  }

  function pick(option: string) {
    setPicked(option);
    // fire and forget — the signup itself is already saved
    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, painPoint: option }),
    }).catch(() => {});
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      className="fixed inset-0 z-100 overflow-y-auto"
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="fixed inset-0 h-full w-full cursor-default bg-[#141b23]/80"
      />

      <div className="relative flex min-h-full items-center justify-center px-5 py-12">
        <div className="relative w-full max-w-lg">
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="bg-brand absolute -top-5 right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl transition-opacity hover:opacity-90 sm:-right-4"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="rounded-2xl bg-white px-7 py-10 shadow-2xl sm:px-10 sm:py-12">
            {state !== "done" ? (
              <>
                <h2
                  id="waitlist-title"
                  className="text-[26px] leading-[1.14] font-extrabold tracking-[-0.025em] text-balance sm:text-[32px]"
                >
                  Get early access to IBE Pay
                </h2>
                <p className="text-ink-soft mt-3 text-[14.5px] leading-relaxed font-medium">
                  We&rsquo;re onboarding in batches. Leave your email and
                  you&rsquo;ll be in the first one.
                </p>

                <form onSubmit={submit} className="mt-7">
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={inputRef}
                    id="waitlist-email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    className="border-ink/15 focus:border-ink h-13 w-full rounded-full border px-5 text-[15px] font-medium outline-none"
                  />
                  {error && (
                    <p
                      role="alert"
                      className="text-brand mt-2 px-1 text-[13px] font-semibold"
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="bg-ink mt-3 h-13 w-full rounded-full text-[15px] font-bold text-white transition-opacity hover:opacity-85 disabled:opacity-60"
                  >
                    {state === "sending" ? "Joining…" : "Join the waitlist"}
                  </button>
                </form>

                <p className="text-ink-soft mt-4 text-center text-[12px] font-medium">
                  No spam. One email when we launch.
                </p>
              </>
            ) : (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 12.5 4.5 4.5L19 7.5"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2
                  id="waitlist-title"
                  className="mt-5 text-[26px] leading-[1.14] font-extrabold tracking-[-0.025em] sm:text-[30px]"
                >
                  You&rsquo;re on the list.
                </h2>
                <p className="text-ink-soft mt-3 text-[14.5px] leading-relaxed font-medium">
                  {picked
                    ? "Noted — that is exactly what we are building for. See you at launch."
                    : "One optional question, so we build the right thing first."}
                </p>

                {!picked && (
                  <>
                    <p className="mt-7 text-[14px] font-bold">
                      When did a card last let you down?
                    </p>
                    <ul className="mt-3 grid gap-2">
                      {PAIN_POINTS.map((p) => (
                        <li key={p}>
                          <button
                            type="button"
                            onClick={() => pick(p)}
                            className="border-ink/12 hover:border-ink hover:bg-mist w-full rounded-xl border px-4 py-3 text-left text-[14px] font-semibold transition-colors"
                          >
                            {p}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-ink-soft hover:text-ink mt-6 text-[13px] font-semibold transition-colors"
                >
                  {picked ? "Close" : "Skip"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
