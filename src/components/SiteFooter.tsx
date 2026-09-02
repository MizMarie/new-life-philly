import logoAsset from "@/assets/nlp-logo.jpg.asset.json";
import {
  ADDRESS_1,
  ADDRESS_2,
  CHURCH_CENTER_URL,
  EMAIL,
  GIVE_URL,
  PHONE,
  PRAYER_URL,
  SOCIALS,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pt-20 pb-8 text-white">
      <div className="mx-auto grid max-w-[1240px] gap-11 px-5 md:px-8 lg:grid-cols-[1.4fr_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <img
            src={logoAsset.url}
            alt="New Life Philly"
            className="block h-[84px] w-[84px] rounded-full bg-white object-cover"
            loading="lazy"
            width={84}
            height={84}
          />
          <p className="mt-5 mb-0 font-display text-[19px] font-semibold tracking-tight text-white">
            Real People. Real Love. Real Hope.
          </p>
          <p className="mt-3.5 mb-0 max-w-[34ch] text-[16px] leading-[1.65] text-white/65">
            A non-denominational church in the Olney section of North Philadelphia — wherever
            you're coming from, you're welcome here.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener"
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 text-white no-underline transition-colors hover:bg-olive hover:text-navy"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px]"
                  fill="currentColor"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4 text-[11px] text-olive-light">Visit</div>
          <div className="text-[16px] leading-[1.85] text-white/80">
            {ADDRESS_1}
            <br />
            {ADDRESS_2}
            <br />
            <br />
            Sundays · 10am
            <br />
            Fellowship after the service
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4 text-[11px] text-olive-light">Contact</div>
          <div className="text-[16px] leading-[1.85] text-white/80">
            {PHONE}
            <br />
            <a
              href={`mailto:${EMAIL}`}
              className="text-white/80 no-underline transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4 text-[11px] text-olive-light">Connect</div>
          <div className="grid gap-2.5 text-[16px]">
            <a
              href={PRAYER_URL}
              className="text-white/80 no-underline transition-colors hover:text-white"
            >
              Need Prayer?
            </a>
            <a
              href="https://newlifephilly.churchcenter.com/pages/unbound-prayer"
              className="text-white/80 no-underline transition-colors hover:text-white"
            >
              Unbound Prayer
            </a>
            <a
              href={GIVE_URL}
              className="text-white/80 no-underline transition-colors hover:text-white"
            >
              Give
            </a>
            <a
              href={CHURCH_CENTER_URL}
              className="text-white/80 no-underline transition-colors hover:text-white"
            >
              Church Center
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-13 flex max-w-[1240px] flex-wrap justify-between gap-4 border-t border-white/15 px-5 pt-6 text-sm text-white/50 md:px-8">
        <span>© 2026 New Life Philly Church</span>
        <span>Made with care in Philadelphia</span>
      </div>
    </footer>
  );
}
