import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import logoAsset from "@/assets/new-life-logo-2026.png.asset.json";
import { NAV_LINKS, GIVE_URL, PHONE } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-60 border-b border-navy/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center gap-8 px-5 py-3.5 md:px-8">
        <Link to="/" className="flex flex-none items-center gap-3 no-underline">
          <img
            src={logoAsset.url}
            alt="New Life Philly"
            className="block h-12 w-12 rounded-full bg-white object-cover"
            width={48}
            height={48}
            fetchPriority="low"
          />
          <span className="font-display text-[19px] font-extrabold tracking-tight text-navy">
            New Life <span className="text-olive-dark">Philly</span>
          </span>
        </Link>
        <nav className="ml-auto flex items-center gap-3 md:gap-[30px]">
          <span className="hidden items-center gap-[30px] md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-display text-sm font-semibold tracking-[0.04em] text-navy no-underline transition-colors hover:text-olive-dark"
                activeProps={{ className: "text-olive-dark" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener"
              className="font-display text-sm font-semibold tracking-[0.04em] text-navy no-underline transition-colors hover:text-olive-dark"
            >
              Give
            </a>
          </span>
          <Link
            to="/plan-your-visit"
            className="pill hidden bg-olive px-5 py-2.5 text-[13px] tracking-[0.09em] text-navy no-underline hover:bg-olive-dark sm:inline-flex"
            activeProps={{ className: "bg-olive-dark" }}
          >
            Plan a Visit
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-cream md:hidden"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-white px-5 pt-4 pb-7 md:hidden"
        >
          <div className="grid gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-3.5 font-display text-[19px] font-bold tracking-tight text-navy no-underline"
                activeProps={{ className: "text-olive-dark" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3.5 font-display text-[19px] font-bold tracking-tight text-navy no-underline"
            >
              Give
            </a>
          </div>
          <Link
            to="/plan-your-visit"
            onClick={() => setOpen(false)}
            className="pill mt-5 w-full justify-center bg-olive px-6 py-4 text-[14px] text-navy no-underline"
          >
            I'm New — Plan Your Visit →
          </Link>
          <div className="mt-5 text-[16px] leading-[1.6] text-body-soft">
            Sundays at 10am · Olney, Philadelphia
            <br />
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="text-olive-dark no-underline"
            >
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
