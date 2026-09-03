import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/nlp-hero.jpg";
import problemImg from "@/assets/nlp-problem.jpg";
import guideImg from "@/assets/nlp-guide.jpg";
import storyImg from "@/assets/nlp-story.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ADDRESS_1,
  EMAIL,
  FIRST_SUNDAY,
  PHONE,
  PRAYER_URL,
  STEPS,
} from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { CHURCH_JSONLD, abs } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Church in Olney, Philadelphia | New Life Philly" },
      {
        name: "description",
        content:
          "Non-denominational church in Olney, North Philadelphia. Sundays at 10am, 425 E Roosevelt Blvd — free parking, casual dress, kids covered. Plan your visit.",
      },
      { property: "og:title", content: "Church in Olney, Philadelphia | New Life Philly" },
      {
        property: "og:description",
        content:
          "Community rooted in Olney. Open to all of Philadelphia. Plan your visit for Sunday at 10am.",
      },
      { property: "og:url", content: abs("/") },
    ],
    links: [{ rel: "canonical", href: abs("/") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(CHURCH_JSONLD) },
    ],
  }),
  component: Home,
});

function Home() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Mobile service-time bar */}
      <div className="sticky top-[76px] z-50 border-b border-white/10 bg-navy px-5 py-2.5 md:hidden">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 text-[14px] text-white">
          <span className="truncate">
            Sundays at 10am · {ADDRESS_1}, Philadelphia
          </span>
          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="flex-none text-olive-light no-underline"
          >
            {PHONE}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative flex max-w-[100vw] items-end overflow-hidden bg-navy min-h-[640px] md:min-h-[760px]">
        <div className="absolute inset-0 bg-mist" />
        <div className="absolute inset-y-0 right-0 left-0 md:left-[max(58%,780px)]">
          <img
            src={heroImg}
            alt="Members of New Life Philly laughing together after a Sunday service"
            className="h-full w-full object-cover"
            width={1280}
            height={1600}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--navy)_0%,color-mix(in_oklab,var(--navy)_78%,transparent)_55%,color-mix(in_oklab,var(--navy)_55%,transparent)_100%)] opacity-95 md:bg-[linear-gradient(102deg,var(--navy)_0%,color-mix(in_oklab,var(--navy)_72%,transparent)_38%,color-mix(in_oklab,var(--navy)_18%,transparent)_72%,color-mix(in_oklab,var(--navy)_5%,transparent)_100%)]"
        />
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -bottom-[220px] -left-[160px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_40%_40%,color-mix(in_oklab,var(--olive)_36%,transparent),transparent_68%)]"
        />
        <div className="pointer-events-none relative mx-auto w-full max-w-[1240px] px-5 pt-28 pb-16 md:px-8 md:pt-[120px] md:pb-[84px]">
          <div className="max-w-[660px]">
            <div className="eyebrow mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 text-white">
              <span className="block h-[7px] w-[7px] rounded-full bg-olive-light" />
              A church in Olney, Philadelphia
            </div>
            <h1 className="m-0 max-w-[13ch] font-display text-[clamp(46px,6.4vw,92px)] leading-[0.98] font-extrabold tracking-[-0.028em] text-white">
              Real People.
              <br />
              Real Love.
              <br />
              <span className="relative inline-block">
                Real Hope.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.34em] -left-[1%] h-[0.17em] w-[104%] overflow-visible"
                >
                  <path
                    d="M2 9C38 4.4 74 3.2 110 4.1c36 .9 72 3.6 108 3.1 26-.4 52-2.1 78-4.6"
                    fill="none"
                    stroke="var(--olive)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </h1>
            <div className="pointer-events-auto mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[17px] leading-[1.5] text-white md:mt-7">
              <svg
                aria-hidden="true"
                className="h-5 w-5 flex-none text-olive-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="font-semibold">Sundays at 10am</span>
              <span className="hidden text-white/50 md:inline">·</span>
              <span className="w-full md:hidden" />
              <span className="text-white/80">{ADDRESS_1}, Olney, Philadelphia</span>
            </div>
            <p className="mt-5 mb-0 max-w-[34ch] text-[22px] leading-[1.55] text-white/90 md:mt-7">
              Community rooted in Olney. Open to all of Philadelphia.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap gap-3.5 md:mt-10">
              <Link
                to="/plan-your-visit"
                className="pill relative bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-[38px]"
              >
                <span
                  aria-hidden="true"
                  className="animate-ring pointer-events-none absolute inset-0 rounded-full border-2 border-olive"
                />
                I'm New — Plan Your Visit →
              </Link>
              <Link
                to="/sermons"
                className="pill border-[1.5px] border-white/55 bg-transparent px-8 py-[19px] text-[15px] text-white no-underline hover:bg-white/15 md:px-[34px]"
              >
                Watch a Sermon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* First Sunday */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[600px]">
              <div className="eyebrow mb-4 text-olive-dark">Before you come</div>
              <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
                Your first Sunday, answered.
              </h2>
            </div>
            <Link
              to="/plan-your-visit"
              className="border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
            >
              More about visiting →
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {FIRST_SUNDAY.map((item) => (
              <div key={item.title} data-reveal className="bg-white px-7 pt-[30px] pb-8">
                <div className="font-display text-[19px] font-bold tracking-tight text-navy">
                  {item.title}
                </div>
                <div className="mt-2 text-[17px] leading-[1.55] text-body-soft">{item.body}</div>
              </div>
            ))}
          </div>
          <div className="pointer-events-auto mt-12 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
            <div>
              <div className="eyebrow mb-2 text-[11px] text-olive-dark">You're invited</div>
              <div className="text-[17px] leading-[1.5] text-body">
                Sundays at 10am
                <br />
                <span className="text-body-soft">{ADDRESS_1}, Philadelphia</span>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-2 text-[11px] text-olive-dark">Contact us</div>
              <div className="text-[17px] leading-[1.5] text-body">
                {PHONE}
                <br />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-body-soft no-underline transition-colors hover:text-navy"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-2 text-[11px] text-olive-dark">Need prayer?</div>
              <div className="text-[17px] leading-[1.5] text-body">
                <a
                  href={PRAYER_URL}
                  className="border-b border-body-faint text-body no-underline transition-colors hover:border-olive-dark"
                >
                  Send a prayer request →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative max-w-[100vw] overflow-hidden bg-navy py-24 md:py-[120px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[140px] -right-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_45%_45%,color-mix(in_oklab,var(--olive)_22%,transparent),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-[72px]">
          <div data-reveal className="lg:order-2">
            <div className="eyebrow mb-5 text-olive-light">If you're searching</div>
            <h2 className="m-0 max-w-[20ch] font-display text-[clamp(32px,3.9vw,54px)] leading-[1.1] font-bold tracking-[-0.022em] text-white">
              Most people don't go looking for a church until something makes them stop.
            </h2>
            <p className="mt-7 mb-0 max-w-[30ch] text-[22px] leading-[1.6] font-semibold text-olive-light">
              That's not a bad reason to be here. It might be the most honest one.
            </p>
            <p className="mt-5 mb-0 max-w-[44ch] text-[18px] leading-[1.7] text-white/75">
              Maybe you grew up in church and walked away. Maybe you've never set foot in one. Maybe
              you just moved to Philly and the city feels bigger than you expected. However you got
              to this page — you can come as you are, sit in the back, and decide nothing.
            </p>
          </div>
          <div
            data-reveal
            className="relative overflow-hidden rounded-[22px] bg-mist shadow-[0_26px_60px_rgba(0,0,0,0.25)] lg:order-1"
          >
            <img
              src={problemImg}
              alt="A person sitting quietly by a window, deep in thought"
              className="h-[320px] w-full object-cover md:h-[440px]"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Guide / Plan a visit */}
      <section className="overflow-hidden bg-white py-24 md:py-[130px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div data-reveal>
            <div className="eyebrow mb-5 text-olive-dark">Plan a visit</div>
            <h2 className="m-0 max-w-[14ch] font-display text-[clamp(36px,3.9vw,56px)] leading-[1.07] font-bold tracking-[-0.022em] text-navy">
              We believe there is more for you.
            </h2>
            <p className="mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-body-soft">
              In a city this busy it's easy to feel invisible. At New Life Philly you'll find
              genuine community and a purpose worth showing up for. This is where belonging begins.
            </p>
            <Link
              to="/plan-your-visit"
              className="pill mt-9 inline-block bg-navy-mid px-8 py-[19px] text-[15px] text-white no-underline hover:bg-navy md:px-9"
            >
              Plan Your Visit This Sunday →
            </Link>
          </div>
          <div data-reveal className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-10 -left-10 hidden h-[78%] w-[78%] rounded-[26px] bg-cream md:block"
            />
            <div
              aria-hidden="true"
              className="absolute -right-[34px] -bottom-[34px] hidden h-[52%] w-[52%] rounded-[26px] bg-mist-deep md:block"
            />
            <div className="relative overflow-hidden rounded-[22px] shadow-[0_26px_60px_color-mix(in_oklab,var(--navy)_18%,transparent)]">
              <img
                src={guideImg}
                alt="Two people in a warm, close conversation"
                className="h-[400px] w-full object-cover md:h-[520px]"
                loading="lazy"
                width={1100}
                height={1300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="bg-sage py-24 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[640px]">
              <div className="eyebrow mb-5 text-olive-dark">The plan</div>
              <h2 className="m-0 font-display text-[clamp(32px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
                Three simple steps.
              </h2>
            </div>
            <Link
              to="/next-steps"
              className="border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
            >
              See all next steps →
            </Link>
          </div>
          <div className="grid gap-[26px] md:grid-cols-3">
            {STEPS.map((step) => {
              const inner = (
                <>
                  <div className="relative h-[240px]">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={1200}
                      height={800}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-5 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-olive font-display text-[15px] font-extrabold text-navy"
                    >
                      {step.n}
                    </span>
                  </div>
                  <div className="px-[26px] pt-7 pb-[30px]">
                    <h3 className="m-0 font-display text-[24px] font-bold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 mb-0 text-[17px] leading-[1.6] text-body-soft">
                      {step.body}
                    </p>
                    <span className="mt-[18px] inline-block font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase">
                      {step.cta}
                    </span>
                  </div>
                </>
              );
              const cardClass =
                "block overflow-hidden rounded-[20px] bg-white no-underline shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_7%,transparent)] transition-shadow duration-300 hover:shadow-[0_20px_46px_color-mix(in_oklab,var(--navy)_16%,transparent)]";
              return "to" in step && step.to ? (
                <Link key={step.n} to={step.to} data-reveal className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <a key={step.n} href={step.href} data-reveal className={cardClass}>
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story / About */}
      <section className="max-w-[100vw] overflow-hidden bg-sage py-24 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div
            data-reveal
            className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-[30px] -bottom-[30px] hidden h-[60%] w-[60%] rounded-3xl bg-mist-deep md:block"
              />
              <div className="relative overflow-hidden rounded-[22px] bg-mist shadow-[0_24px_56px_color-mix(in_oklab,var(--navy)_16%,transparent)]">
                <img
                  src={storyImg}
                  alt="Portrait of a longtime New Life Philly member"
                  className="h-[400px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  width={1100}
                  height={1300}
                />
              </div>
            </div>
            <div>
              <div className="eyebrow mb-6 text-olive-dark">Why people stay</div>
              <div
                aria-hidden="true"
                className="font-display text-[64px] leading-[0.6] font-extrabold text-olive-light"
              >
                &ldquo;
              </div>
              <blockquote className="mt-3.5 mb-0 max-w-[22ch] font-display text-[clamp(24px,2.7vw,36px)] leading-[1.32] font-semibold tracking-[-0.016em] text-navy">
                I came in late and sat in the back for about two months before anyone knew my name.
                Nobody rushed me. That's why I'm still here.
              </blockquote>
              <div className="mt-7 flex items-center gap-3.5">
                <div className="h-0.5 w-11 rounded-full bg-olive" />
                <div>
                  <div className="font-display text-[17px] font-bold text-navy">
                    First name, Last initial
                  </div>
                  <div className="mt-0.5 text-[15px] text-body-faint">
                    Neighborhood · at New Life since 20XX
                  </div>
                </div>
              </div>
              <p className="mt-6 mb-0 max-w-[44ch] text-[15px] leading-[1.6] text-olive-dark italic">
                Placeholder — replace with a real member quote and portrait. Two or three sentences,
                in their own words, about what made them stay.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-block border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
              >
                More about us →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden rounded-t-[28px] bg-navy py-24 md:py-[110px]">
        {/* Luminous layered background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--olive)_22%,transparent),transparent_50%),radial-gradient(circle_at_100%_100%,color-mix(in_oklab,var(--olive-light)_18%,transparent),transparent_50%)] opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-noise opacity-[0.035]"
        />
        {/* Bottom divider / separator from footer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-olive/40 to-transparent shadow-[0_0_24px_color-mix(in_oklab,var(--olive)_45%,transparent)]"
        />
        <div data-reveal className="relative mx-auto max-w-[900px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Our Mission</div>
          <p className="m-0 font-display text-[clamp(26px,3vw,40px)] leading-[1.28] font-semibold tracking-[-0.015em] text-white">
            To make disciples of all nations by equipping each member, serving in ministry,
            connecting in community, and engaging our neighbors.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
