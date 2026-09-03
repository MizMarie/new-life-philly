import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CALENDAR_URL } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Weekly Rhythms | New Life Philly, Olney Philadelphia" },
      {
        name: "description",
        content:
          "What's happening at New Life Philly — Sunday worship, 7am weekday prayer, Life Groups, serve days, retreats, and celebrations through the year.",
      },
      { property: "og:title", content: "Events — New Life Philly" },
      {
        property: "og:description",
        content:
          "Sunday worship, weekday prayer, serve days, retreats, and celebrations at New Life Philly in Olney, Philadelphia.",
      },
      { property: "og:url", content: abs("/events") },
    ],
    links: [{ rel: "canonical", href: abs("/events") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Events", "/events")),
      },
    ],
  }),
  component: EventsPage,
});

const WEEKLY = [
  {
    when: "Sunday · 10am",
    title: "Worship gathering",
    body: "Singing, prayer, the Lord's Prayer, and a message from Scripture — about 90 minutes, with coffee and fellowship after.",
  },
  {
    when: "Weekdays · 7am",
    title: "Zoom prayer",
    body: "A short, unhurried prayer call to start the day together. Password: Pray.",
  },
  {
    when: "Through the week",
    title: "Life Groups",
    body: "Small groups meeting in homes across the city for food, Scripture, and prayer.",
  },
  {
    when: "Monthly",
    title: "Serve days",
    body: "Hands-on work in Olney and beyond — food distribution, neighborhood cleanups, and building projects.",
  },
];

const YEARLY = [
  {
    title: "Retreats",
    body: "Weekends away for men, women, youth, and young adults — rest, teaching, and friendships that stick.",
  },
  {
    title: "Baptisms & dedications",
    body: "Public celebrations of new faith and of families committing their children to the Lord.",
  },
  {
    title: "Holiday gatherings",
    body: "Christmas, Easter, and Thanksgiving services and meals — the easiest Sundays to bring a friend.",
  },
  {
    title: "Outreach in Olney",
    body: "Block events and partnerships with neighbors and schools right around 425 E Roosevelt Blvd.",
  },
];

function EventsPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      <section className="relative overflow-hidden bg-navy py-24 md:py-[130px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -top-[180px] -right-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_45%_45%,color-mix(in_oklab,var(--olive)_24%,transparent),transparent_70%)]"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Events</div>
          <h1 className="m-0 max-w-[18ch] font-display text-[clamp(40px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.024em] text-white">
            The rhythms of our week and our year.
          </h1>
          <p className="mt-7 mb-0 max-w-[48ch] text-[20px] leading-[1.68] text-white/80">
            Some things happen every week. Some things happen once a year and are worth clearing your
            calendar for. Here's the shape of life together at New Life Philly.
          </p>
        </div>
      </section>

      <section className="bg-sage py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-12 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-dark">Every week</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              What you can count on.
            </h2>
          </div>
          <div className="grid gap-[22px] sm:grid-cols-2">
            {WEEKLY.map((w) => (
              <div
                key={w.title}
                data-reveal
                className="rounded-[20px] border border-hairline bg-white px-8 pt-7 pb-8 shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_6%,transparent)]"
              >
                <div className="eyebrow mb-3 text-[12px] text-olive-dark">{w.when}</div>
                <h3 className="m-0 font-display text-[22px] font-extrabold tracking-tight text-navy">
                  {w.title}
                </h3>
                <p className="mt-3 mb-0 text-[17px] leading-[1.6] text-body-soft">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-12 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-dark">Through the year</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              Worth putting on the calendar.
            </h2>
          </div>
          <div className="grid gap-10 border-t border-hairline pt-13 sm:grid-cols-2">
            {YEARLY.map((y) => (
              <div key={y.title} data-reveal>
                <h3 className="m-0 font-display text-[23px] font-bold tracking-tight text-navy">
                  {y.title}
                </h3>
                <p className="mt-2.5 mb-0 text-[17px] leading-[1.6] text-body-soft">{y.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-dark">Dates and times</div>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
            See exactly what's coming up.
          </h2>
          <p className="mx-auto mt-6 mb-0 max-w-[46ch] text-[19px] leading-[1.65] text-body-soft">
            Our live calendar has every date, time, and registration link — opens in a new tab so
            this page stays put.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener"
              className="pill bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-dark md:px-9"
            >
              Open the Calendar →
            </a>
            <Link
              to="/plan-your-visit"
              className="pill border-[1.5px] border-navy/25 bg-transparent px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-cream md:px-8"
            >
              Plan Your First Sunday
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
