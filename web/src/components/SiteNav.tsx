"use client";

import { useEffect, useRef, useState } from "react";

import { Wordmark } from "./Logo";

// Every link points at a section that actually exists on the page.
const LINKS = [
  { label: "Benefits", href: "#benefits" },
  { label: "Controls", href: "#controls" },
  { label: "Compare", href: "#compare" },
];

const DELTA = 6;
const TOP_ZONE = 90;

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - last;

      setScrolled(y > 8);

      // never tuck the bar away while the mobile menu is hanging off it
      if (!menuOpenRef.current) {
        if (y <= TOP_ZONE) setHidden(false);
        else if (Math.abs(delta) >= DELTA) setHidden(delta > 0);
      }

      if (Math.abs(delta) >= DELTA) last = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes; widening to desktop closes so state can't get stranded.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWide = () => mq.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || menuOpen ? "border-black/10 shadow-sm" : "border-black/5"}`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-ink shrink-0">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-ink/80 hover:text-ink text-[13.5px] font-semibold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#get"
            data-get-app
            className="bg-ink inline-flex h-9 items-center rounded-full px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
          >
            Join waitlist
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-ink -mr-1 flex h-9 w-9 items-center justify-center lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-black/5 bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-ink block border-b border-black/5 py-3.5 text-[15px] font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#get"
                data-get-app
                onClick={() => setMenuOpen(false)}
                className="bg-ink block rounded-full py-3.5 text-center text-[14px] font-semibold text-white"
              >
                Join waitlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
