import { createFileRoute, Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import heroImg from "@/assets/homepage-hero.jpg.asset.json";

const HERO_IMG = heroImg.url;
import problemImg from "@/assets/nlp-problem.jpg";
import guideImg from "@/assets/nlp-guide.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ADDRESS_1,
  CALENDAR_URL,
  EMAIL,
  FIRST_SUNDAY,
  PHONE,
  PRAYER_URL,
  STEPS,
  UPCOMING,
  YOUTUBE_LIVE_URL,
} from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { CHURCH_JSONLD, abs } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Life Philly" },
      {
        name: "description",
        content:
          "Non-denominational church in Olney, North Philadelphia. Sundays at 10am, 425 E Roosevelt Blvd. Free parking, casual dress, kids covered. Plan your visit.",
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

      {/* Hero */}
      <section className="relative flex max-w-[100vw] items-end overflow-hidden bg-navy min-h-[640px] md:min-h-[760px] md:items-center md:bg-[linear-gradient(to_bottom_left,#2A6496,#1F4E79)]">
        <div className="absolute inset-y-0 right-0 left-0 md:right-[45%] md:[-webkit-mask-image:linear-gradient(to_right,black_0%,black_68%,rgba(0,0,0,0.9)_73%,rgba(0,0,0,0.72)_78%,rgba(0,0,0,0.5)_84%,rgba(0,0,0,0.28)_90%,rgba(0,0,0,0.1)_96%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_0%,black_68%,rgba(0,0,0,0.9)_73%,rgba(0,0,0,0.72)_78%,rgba(0,0,0,0.5)_84%,rgba(0,0,0,0.28)_90%,rgba(0,0,0,0.1)_96%,transparent_100%)]">
          <img
            src={HERO_IMG}
            alt="A man and a woman from the worship team singing into microphones on a Sunday morning"
            className="h-full w-full object-cover object-[0%_0%] md:object-[50%_0%]"
            width={1200}
            height={1500}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--navy)_0%,color-mix(in_oklab,var(--navy)_78%,transparent)_55%,color-mix(in_oklab,var(--navy)_55%,transparent)_100%)] opacity-95 md:hidden"
        />
        <div className="pointer-events-none relative mx-auto w-full max-w-[1240px] px-5 pt-28 pb-16 md:px-8 md:pt-[120px] md:pb-[84px]">
          <div className="max-w-[660px] md:ml-auto md:max-w-[min(588px,calc(50vw-80px))] md:pl-20">
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
            <div className="pointer-events-auto mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[17px] leading-[1.5] text-white md:mt-11">
              <svg
                aria-hidden="true"
                className="h-5 w-5 flex-none text-white/80"
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
              <span className="font-medium text-white">425 E Roosevelt Blvd, Olney, Philly</span>
            </div>
            <h2 className="mt-5 mb-0 max-w-[34ch] text-[22px] leading-[1.55] font-normal text-white/90 md:mt-7">
              <span className="block">Community rooted in Olney.</span>
              <span className="block">Open to all of Philadelphia.</span>
            </h2>
            <div className="pointer-events-auto mt-8 flex flex-wrap gap-3.5 md:mt-10">
              <Link
                to="/plan-your-visit"
                className="pill relative bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-[38px]"
              >
                <span
                  aria-hidden="true"
                  className="animate-ring pointer-events-none absolute inset-0 rounded-full border-2 border-olive"
                />
                Plan Your Visit →
              </Link>
              <a
                href={YOUTUBE_LIVE_URL}
                target="_blank"
                rel="noopener"
                className="pill border-[1.5px] border-white/55 bg-transparent px-8 py-[19px] text-[15px] text-white no-underline hover:bg-white/15 md:px-[34px]"
              >
                Watch Live
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Problem */}
      <section className="relative max-w-[100vw] overflow-hidden rounded-t-[28px] bg-sage py-24 md:py-[120px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[140px] -right-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_45%_45%,color-mix(in_oklab,var(--olive)_16%,transparent),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-[72px]">
          <div data-reveal className="lg:order-2">
            <div className="eyebrow mb-5 text-olive-dark">If you're searching</div>
            <h2 className="m-0 max-w-[20ch] font-display text-[clamp(32px,3.9vw,54px)] leading-[1.1] font-bold tracking-[-0.022em] text-navy">
              Our lives are full but are we fulfilled?
            </h2>
            <p className="mt-7 mb-0 max-w-[30ch] text-[22px] leading-[1.6] font-semibold text-olive-dark">
              You weren't made to just survive.
            </p>
            <p className="mt-5 mb-0 max-w-[44ch] text-[18px] leading-[1.7] text-body-soft">
              Maybe you grew up in church and walked away. Maybe you've never set foot in one. Maybe
              you just moved to Philly and the city feels bigger than you expected. Whatever it is,
              you can come as you are, sit in the back, and decide nothing.
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
              You'll find people who want to know you and a reason to show up.
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
              <p className="mt-3 mb-0 text-[17px] leading-[1.55] text-body-soft">
                Start with Sunday. Take the next step whenever you're ready.
              </p>
            </div>
            <Link
              to="/next-steps"
              className="border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
            >
              See all next steps →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr] md:grid-rows-[1fr_1fr] md:gap-10">
            {(() => {
              const step = STEPS[0]!;
              const inner = (
                <>
                  <div className="relative flex-none">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="block w-full aspect-[3/2] object-cover md:aspect-[5/4]"
                      loading="lazy"
                      width={1200}
                      height={800}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-10">
                    <h3 className="m-0 font-display text-[24px] font-bold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 mb-0 text-[17px] leading-[1.6] text-body-soft">
                      {step.body}
                    </p>
                    <span className="mt-auto inline-block pt-[18px] font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase">
                      {step.cta}
                    </span>
                  </div>
                </>
              );
              return (
                <Link
                  key={step.n}
                  to={step.to!}
                  data-reveal
                  className="flex h-full flex-col overflow-hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-white no-underline shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_7%,transparent)] transition-shadow duration-300 hover:shadow-[0_20px_46px_color-mix(in_oklab,var(--navy)_16%,transparent)] md:col-start-1 md:row-span-2"
                >
                  {inner}
                </Link>
              );
            })()}
            {STEPS.slice(1).map((step, i) => {
              const inner = (
                <>
                  <div className="relative flex-none">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="block w-full aspect-[3/2] object-cover md:aspect-[10/3]"
                      loading="lazy"
                      width={1200}
                      height={800}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-10">
                    <h3 className="m-0 font-display text-[22px] font-bold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 mb-0 text-[16px] leading-[1.55] text-body-soft">
                      {step.body}
                    </p>
                    <span className="mt-auto inline-block pt-4 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase">
                      {step.cta}
                    </span>
                  </div>
                </>
              );
              const cardClass = `flex h-full flex-col overflow-hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-white no-underline shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_7%,transparent)] transition-shadow duration-300 hover:shadow-[0_20px_46px_color-mix(in_oklab,var(--navy)_16%,transparent)] md:col-start-2 ${
                i === 0 ? "md:row-start-1" : "md:row-start-2"
              }`;
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

      {/* First Sunday */}
      <section className="bg-sage py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[600px]">
              <div className="eyebrow mb-4 text-olive-dark">Before you come</div>
              <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
                Your first Sunday, answered.
              </h2>
              <p className="mt-3 mb-0 text-[17px] leading-[1.55] text-body-soft">
                Everything a first-timer wonders about, in one place.
              </p>
            </div>
            <Link
              to="/plan-your-visit"
              className="border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
            >
              More about visiting →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FIRST_SUNDAY.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                className="rounded-2xl border border-hairline bg-white px-7 pt-[30px] pb-8 shadow-[0_2px_14px_rgba(0,0,0,0.04)]"
              >
                <div
                  className={cn(
                    "font-display tracking-tight text-navy",
                    i >= 3 ? "text-[20px] font-extrabold" : "text-[19px] font-bold"
                  )}
                >
                  {item.title}
                </div>
                <div className="mt-2 text-[17px] leading-[1.55] text-body-soft">{item.body}</div>
              </div>
            ))}
          </div>
          <div className="pointer-events-auto mt-12 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="eyebrow mb-2 text-[13px] text-olive-dark">You're invited</div>
              <div className="text-[17px] leading-[1.5] text-body">
                Sundays at 10am
                <br />
                <span className="text-body-soft">{ADDRESS_1}, Philadelphia</span>
              </div>
            </div>
            <div className="text-center">
              <div className="eyebrow mb-2 text-[13px] text-olive-dark">Contact us</div>
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
            <div className="text-center">
              <div className="eyebrow mb-2 text-[13px] text-olive-dark">Need prayer?</div>
              <div className="text-[17px] leading-[1.5] text-body">
                <a
                  href={PRAYER_URL}
              target="_blank"
              rel="noopener"
                  className="border-b border-body-faint text-body no-underline transition-colors hover:border-olive-dark"
                >
                  Send a prayer request →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming up */}
      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-11 text-center">
            <div className="eyebrow mb-4 text-olive-dark">Coming up</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              What's happening at New Life
            </h2>
            <p className="mt-3 mb-0 text-[17px] leading-[1.55] text-body-soft">
              Something's always happening. Come to one, or come to them all.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {UPCOMING.map((event) => (
              <article
                key={event.url}
                data-reveal
                className="flex flex-col rounded-2xl border border-hairline bg-white px-7 pt-[30px] pb-8 shadow-[0_2px_14px_rgba(0,0,0,0.04)]"
              >
                <span className="w-fit rounded bg-olive px-3 py-1 font-display text-[12px] font-bold text-navy">
                  {event.date}
                </span>
                <h3 className="mt-5 mb-0 font-display text-[20px] font-extrabold text-navy">
                  {event.title}
                </h3>
                <p className="mt-2 mb-0 flex-1 text-[17px] leading-[1.55] text-body-soft">
                  {event.body}
                </p>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-fit border-b border-olive-dark pb-1 font-display text-[13px] font-bold text-olive-dark uppercase no-underline transition-colors hover:text-navy"
                >
                  Details →
                </a>
              </article>
            ))}
          </div>
          <div data-reveal className="mt-10 text-center">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-olive-dark pb-1 font-display text-[13px] font-bold text-olive-dark uppercase no-underline transition-colors hover:text-navy"
            >
              See the full calendar →
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-mist">
        <div className="relative overflow-hidden rounded-t-[28px] bg-navy py-24 md:py-[110px]">
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
            <div className="eyebrow mb-5 text-olive-light">OUR VISION</div>
            <p className="m-0 font-display text-[clamp(26px,3vw,40px)] leading-[1.28] font-semibold tracking-[-0.015em] text-white">
              New Life Philly is a thriving family in the city where the broken from all nations are made alive and whole, finding hope and purpose in Jesus Christ.
            </p>
            <div aria-hidden="true" className="mx-auto mt-9 mb-8 h-[2px] w-10 bg-olive" />
            <p className="mx-auto mb-0 max-w-[800px] text-[20px] leading-[1.6] italic text-white/80">
              Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.
            </p>
            <div className="eyebrow mt-5 text-olive-light">2 Corinthians 5:17 (World English Bible)</div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
