import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BrushstrokeAccent } from "@/components/BrushstrokeAccent";
import { CALENDAR_URL, GROUPS_URL, MINISTRIES, RESOURCE_LINKS } from "@/lib/site-content";
import groupsImg from "@/assets/nlp-story.jpg";
import eventsImg from "@/assets/nlp-guide.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/next-steps")({
  head: () => ({
    meta: [
      { title: "Next Steps — Groups, Events & Ministries | New Life Philly" },
      {
        name: "description",
        content:
          "Sunday is the front door. Find Life Groups, events, and ministries for every age and stage at New Life Philly in Olney, Philadelphia.",
      },
      { property: "og:title", content: "Next Steps — New Life Philly" },
      {
        property: "og:description",
        content:
          "The rest of the week is where real friendships get built. Life Groups, events, kids, youth, women, men, and young adults at New Life Philly.",
      },
      { property: "og:url", content: abs("/next-steps") },
    ],
    links: [{ rel: "canonical", href: abs("/next-steps") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Next Steps", "/next-steps")),
      },
    ],
  }),
  component: NextStepsPage,
});

const CARD =
  "block overflow-hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-hairline bg-white no-underline shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_7%,transparent)] transition-shadow duration-300 hover:shadow-[0_20px_46px_color-mix(in_oklab,var(--navy)_16%,transparent)]";

function NextStepsPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Hero — asymmetric, brushstroke-led */}
      <section className="relative flex min-h-[320px] max-h-[520px] items-center overflow-hidden bg-navy py-16 md:py-20">
        {/* Flagship brushstroke, sweeping across the headline at large scale */}
        <BrushstrokeAccent
          rotate={-7}
          opacity={0.15}
          className="absolute top-[24%] -left-[8%] h-[420px] w-[130%] text-olive md:h-[560px]"
        />
        <BrushstrokeAccent
          drift
          flip
          rotate={12}
          opacity={0.12}
          className="absolute -bottom-[90px] right-[-14%] h-[300px] w-[70%] text-olive-light"
        />

        <div className="relative mx-auto grid max-w-[1240px] grid-cols-12 gap-y-10 px-5 md:px-8">
          <div data-reveal className="col-span-12 lg:col-span-9">
            <div className="eyebrow mb-6 text-olive-light">Next steps</div>
            <h1 className="m-0 max-w-[16ch] font-display text-[clamp(46px,9vw,120px)] leading-[0.94] font-extrabold tracking-[-0.035em] text-white">
              Sunday is the
              <span className="block text-olive-light">front door.</span>
            </h1>
          </div>

          <div
            data-reveal
            className="col-span-12 mt-2 lg:col-span-5 lg:col-start-8 lg:mt-8 lg:text-right"
          >
            <div className="inline-block border-l-2 border-olive pl-6 text-left lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-6 lg:text-right">
              <p className="m-0 max-w-[44ch] text-[19px] leading-[1.66] text-white/80 md:text-[20px]">
                The rest of the week is where real friendships — with Jesus, and with each other —
                get built: around tables, in the gym, on the street. Here's everything happening at
                New Life Philly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find your people */}
      <section className="bg-white py-24 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-14 max-w-[660px]">
            <div className="eyebrow mb-5 text-olive-dark">Find your people</div>
            <h2 className="m-0 font-display text-[clamp(32px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
              Pick the room that fits your life.
            </h2>
          </div>
          <div className="grid gap-[26px] lg:grid-cols-12 lg:items-start">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener"
              data-reveal
              className={`${CARD} lg:col-span-6`}
            >
              <div className="h-[210px] lg:h-[320px]">
                <img
                  src={eventsImg}
                  alt="Church members together at a New Life Philly event"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="px-[26px] pt-7 pb-[30px]">
                <h3 className="m-0 font-display text-[26px] font-bold tracking-tight text-navy">
                  Events
                </h3>
                <p className="mt-2.5 mb-0 text-[17px] leading-[1.6] text-body-soft">
                  Something's always happening: worship nights, serve days, seasonal gatherings. Show up whenever works, no RSVP required.
                </p>
                <span className="mt-5 inline-block rounded-full bg-olive px-6 py-3 font-display text-[13px] font-bold tracking-[0.08em] text-navy uppercase">
                  See What's Coming →
                </span>
              </div>
            </a>

            <a
              href={GROUPS_URL}
              target="_blank"
              rel="noopener"
              data-reveal
              className={`${CARD} lg:col-span-3`}
            >
              <div className="h-[210px]">
                <img
                  src={groupsImg}
                  alt="A Life Group gathered around a table"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="px-[26px] pt-7 pb-[30px]">
                <h3 className="m-0 font-display text-[23px] font-bold tracking-tight text-navy">
                  Life Groups
                </h3>
                <p className="mt-2.5 mb-0 text-[17px] leading-[1.6] text-body-soft">
                  Small groups that meet each week to eat, talk about real life, and pray together.
                </p>
                <span className="mt-4 inline-block font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase">
                  How Groups Work →
                </span>
              </div>
            </a>

            {MINISTRIES.map((m) => (
              <a
                key={m.id}
                href={m.url}
                target="_blank"
                rel="noopener"
                data-reveal
                className={`${CARD} lg:col-span-3`}
              >
                <div className="h-[210px]">
                  <img
                    src={m.img}
                    alt={m.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="px-[26px] pt-7 pb-[30px]">
                  <h3 className="m-0 font-display text-[23px] font-bold tracking-tight text-navy">
                    {m.name}
                  </h3>
                  <span className="mt-4 inline-block font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase">
                    Learn More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional resources */}
      <section id="resources" className="scroll-mt-24 bg-navy py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-11 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-light">Additional resources</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-white">
              Need something specific?
            </h2>
            <p className="mt-6 mb-0 max-w-[46ch] text-[18px] leading-[1.65] text-white/75">
              These open our secure Church Center forms in a new tab, so this page stays right where
              you left it.
            </p>
          </div>
          <div data-reveal className="flex flex-wrap gap-3.5">
            {RESOURCE_LINKS.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener"
                className="pill border-[1.5px] border-white/40 bg-white/5 px-6 py-3.5 text-[14px] text-white no-underline transition-colors hover:bg-olive hover:text-navy"
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
