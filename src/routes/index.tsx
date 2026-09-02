import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/nlp-logo.jpg.asset.json";
import heroImg from "@/assets/nlp-hero.jpg";
import problemImg from "@/assets/nlp-problem.jpg";
import guideImg from "@/assets/nlp-guide.jpg";
import step1Img from "@/assets/nlp-step1.jpg";
import step2Img from "@/assets/nlp-step2.jpg";
import step3Img from "@/assets/nlp-step3.jpg";
import storyImg from "@/assets/nlp-story.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Life Philly — Homepage Draft" },
      {
        name: "description",
        content:
          "Real People. Real Love. Real Hope. A non-denominational church in Olney, Philadelphia. Sundays at 10am at 425 E Roosevelt Blvd.",
      },
      { property: "og:title", content: "New Life Philly — Homepage Draft" },
      {
        property: "og:description",
        content:
          "Community rooted in Olney. Open to all of Philadelphia. Plan your visit for Sunday at 10am.",
      },
    ],
  }),
  component: Home,
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Next Steps", href: "#next" },
  { label: "Give", href: "#give" },
];

const FIRST_SUNDAY = [
  { title: "10:00 AM on Sundays", body: "About 90 minutes, start to finish." },
  { title: "Free street parking", body: "On D St, Bingham, and Westford." },
  { title: "Wear whatever", body: "Most people are in jeans." },
  { title: "Kids are covered", body: "Ages 1 through 5th grade have their own space." },
  { title: "We meet upstairs", body: "Someone at the door will walk you to the stairs." },
  { title: "Stay for coffee — or slip out", body: "Both are completely fine." },
];

const STEPS = [
  {
    n: "1",
    img: step1Img,
    alt: "People greeting each other as they arrive for a Sunday gathering",
    title: "Real People Gather",
    body: "Sundays at 10am. You're welcome here.",
    cta: "Plan a Visit →",
    href: "#visit",
  },
  {
    n: "2",
    img: step2Img,
    alt: "A small group laughing together around a table",
    title: "Real Love Connects",
    body: "Find your people. There's a place for every age and every stage.",
    cta: "Find a Group →",
    href: "https://newlifephilly.churchcenter.com/home",
  },
  {
    n: "3",
    img: step3Img,
    alt: "Volunteers sorting donation boxes on a Philadelphia street",
    title: "Real Hope Acts",
    body: "Serve your neighbors. Live your purpose.",
    cta: "See Ways to Serve →",
    href: "https://newlifephilly.churchcenter.com/calendar?view=gallery",
  },
];

const NEXT_LINKS = [
  {
    title: "Find Your Community",
    body: "Real connection in a group committed to honesty and growth.",
    cta: "Explore Groups →",
    href: "https://newlifephilly.churchcenter.com/groups/life-groups?enrollment=open_signup%2Crequest_to_join&filter=enrollment",
  },
  {
    title: "Live Out Your Mission",
    body: "Use your gifts and make a tangible impact right here in Philly.",
    cta: "Find a Way to Serve →",
    href: "https://newlifephilly.churchcenter.com/home",
  },
  {
    title: "Practice the Way",
    body: "Discover the way of Jesus and what it looks like on a Tuesday.",
    cta: "Watch Sermons →",
    href: "#sermons",
  },
];

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@NewLifePhilly",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/NewLifePhilly/",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/newlifephilly/",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.9-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
];

function Home() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="overflow-x-hidden bg-white font-sans text-body">
      {/* Header */}
      <header className="sticky top-0 z-60 border-b border-navy/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center gap-8 px-5 py-3.5 md:px-8">
          <a href="#top" className="flex flex-none items-center gap-3 no-underline">
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
          </a>
          <nav className="ml-auto flex items-center gap-5 md:gap-[30px]">
            <span className="hidden items-center gap-[30px] md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display text-sm font-semibold tracking-[0.04em] text-navy no-underline transition-colors hover:text-olive-dark"
                >
                  {link.label}
                </a>
              ))}
            </span>
            <a
              href="#visit"
              className="pill bg-olive px-5 py-2.5 text-[13px] tracking-[0.09em] text-navy hover:bg-olive-dark"
            >
              Plan a Visit
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex max-w-[100vw] items-end overflow-hidden bg-navy min-h-[640px] md:min-h-[760px]"
      >
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
            <div className="eyebrow mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-white">
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
            <p className="mt-7 mb-0 max-w-[34ch] text-[22px] leading-[1.55] text-white/90">
              Community rooted in Olney. Open to all of Philadelphia.
            </p>
            <div className="pointer-events-auto mt-10 flex flex-wrap gap-3.5">
              <a
                href="#visit"
                className="pill relative bg-olive px-8 py-[19px] text-[15px] text-navy hover:bg-olive-light md:px-[38px]"
              >
                <span
                  aria-hidden="true"
                  className="animate-ring pointer-events-none absolute inset-0 rounded-full border-2 border-olive"
                />
                Plan Your Visit →
              </a>
              <a
                href="#sermons"
                className="pill border-[1.5px] border-white/55 bg-transparent px-8 py-[19px] text-[15px] text-white hover:bg-white/15 md:px-[34px]"
              >
                Watch a Sermon
              </a>
            </div>
            <div className="pointer-events-auto mt-14 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
              <div>
                <div className="eyebrow mb-2 text-[11px] text-olive-light">You're invited</div>
                <div className="text-[17px] leading-[1.5] text-white">
                  Sundays at 10am
                  <br />
                  <span className="text-white/70">425 E Roosevelt Blvd, Philadelphia</span>
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2 text-[11px] text-olive-light">Contact us</div>
                <div className="text-[17px] leading-[1.5] text-white">
                  215-324-4566
                  <br />
                  <a
                    href="mailto:newlife@newlifephilly.net"
                    className="text-white/70 no-underline transition-colors hover:text-white"
                  >
                    newlife@newlifephilly.net
                  </a>
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2 text-[11px] text-olive-light">Need prayer?</div>
                <div className="text-[17px] leading-[1.5] text-white">
                  <a
                    href="https://newlifephilly.churchcenter.com/people/forms/382423"
                    className="border-b border-white/40 text-white no-underline transition-colors hover:border-olive"
                  >
                    Send a prayer request →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Sunday */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div
            data-reveal
            className="mb-11 flex flex-wrap items-end justify-between gap-8"
          >
            <div className="max-w-[600px]">
              <div className="eyebrow mb-4 text-olive-dark">Before you come</div>
              <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
                Your first Sunday, answered.
              </h2>
            </div>
            <a
              href="#visit"
              className="border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
            >
              More about visiting →
            </a>
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
      <section id="visit" className="overflow-hidden bg-white py-24 md:py-[130px]">
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
            <a
              href="#visit"
              className="pill mt-9 bg-navy-mid px-8 py-[19px] text-[15px] text-white hover:bg-navy md:px-9"
            >
              Plan Your Visit This Sunday →
            </a>
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
      <section id="next" className="bg-sage py-24 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-14 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-dark">The plan</div>
            <h2 className="m-0 font-display text-[clamp(32px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
              Three simple steps.
            </h2>
          </div>
          <div className="grid gap-[26px] md:grid-cols-3">
            {STEPS.map((step) => (
              <a
                key={step.n}
                href={step.href}
                data-reveal
                className="block overflow-hidden rounded-[20px] bg-white no-underline shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_7%,transparent)] transition-shadow duration-300 hover:shadow-[0_20px_46px_color-mix(in_oklab,var(--navy)_16%,transparent)]"
              >
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
                  <p className="mt-3 mb-0 text-[17px] leading-[1.6] text-body-soft">{step.body}</p>
                  <span className="mt-[18px] inline-block font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase">
                    {step.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Story / About */}
      <section id="about" className="max-w-[100vw] overflow-hidden bg-sage py-24 md:py-[120px]">
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
            </div>
          </div>

          <div className="mt-[88px] grid gap-10 border-t border-sage-line pt-13 md:grid-cols-3">
            {NEXT_LINKS.map((item) => (
              <a key={item.title} href={item.href} data-reveal className="group block no-underline">
                <div className="font-display text-[23px] font-bold tracking-tight text-navy">
                  {item.title}
                </div>
                <div className="mt-2.5 text-[17px] leading-[1.6] text-body-soft">{item.body}</div>
                <div className="mt-4 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase transition-colors group-hover:text-navy">
                  {item.cta}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="sermons" className="bg-navy py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[900px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Our vision</div>
          <p className="m-0 font-display text-[clamp(26px,3vw,40px)] leading-[1.28] font-semibold tracking-[-0.015em] text-white">
            A thriving family in the city where the broken from all nations are made alive and whole
            — finding hope and purpose in Jesus.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="give" className="bg-navy-deep pt-20 pb-8 text-white">
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
              425 E Roosevelt Blvd
              <br />
              Philadelphia, PA 19120
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
              215-324-4566
              <br />
              <a
                href="mailto:newlife@newlifephilly.net"
                className="text-white/80 no-underline transition-colors hover:text-white"
              >
                newlife@newlifephilly.net
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4 text-[11px] text-olive-light">Connect</div>
            <div className="grid gap-2.5 text-[16px]">
              <a
                href="https://newlifephilly.churchcenter.com/people/forms/382423"
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
                href="https://newlifephilly.churchcenter.com/giving"
                className="text-white/80 no-underline transition-colors hover:text-white"
              >
                Give
              </a>
              <a
                href="https://newlifephilly.churchcenter.com/home"
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
    </div>
  );
}
