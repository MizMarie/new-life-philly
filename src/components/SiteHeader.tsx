import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/nlp-logo.jpg.asset.json";
import { NAV_LINKS, GIVE_URL } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-60 border-b border-navy/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center gap-8 px-5 py-3.5 md:px-8">
        <Link to="/" className="flex flex-none items-center gap-3 no-underline">
          <img
            src={logoAsset.url}
            alt="New Life Philly"
            className="block h-12 w-auto"
            width={48}
            height={48}
          />
          <span className="font-display text-[19px] font-extrabold tracking-tight text-navy">
            New Life <span className="text-olive-dark">Philly</span>
          </span>
        </Link>
        <nav className="ml-auto flex items-center gap-5 md:gap-[30px]">
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
              className="font-display text-sm font-semibold tracking-[0.04em] text-navy no-underline transition-colors hover:text-olive-dark"
            >
              Give
            </a>
          </span>
          <Link
            to="/plan-your-visit"
            className="pill bg-olive px-5 py-2.5 text-[13px] tracking-[0.09em] text-navy no-underline hover:bg-olive-dark"
            activeProps={{ className: "bg-olive-dark" }}
          >
            Plan a Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
