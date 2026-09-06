import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GROUPS_URL } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";
import groupsImg from "@/assets/nlp-story.jpg";

export const Route = createFileRoute("/groups")({
  head: () => ({
    meta: [
      { title: "Life Groups — Small Groups in Philadelphia | New Life Philly" },
      {
        name: "description",
        content:
          "Life Groups at New Life Philly meet through the week across Philadelphia — a handful of people, real conversation, and a Bible open on the table.",
      },
      { property: "og:title", content: "Life Groups — New Life Philly" },
      {
        property: "og:description",
        content:
          "Small groups meeting through the week across Philadelphia. Here's what a Life Group is and how to join one.",
      },
      { property: "og:url", content: abs("/groups") },
    ],
    links: [{ rel: "canonical", href: abs("/groups") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Life Groups", "/groups")),
      },
    ],
  }),
  component: GroupsPage,
});

const FACTS = [
  {
    title: "Eight to twelve people",
    body: "Small enough that you're missed when you're not there.",
  },
  {
    title: "Through the week",
    body: "Most groups meet on weeknights in homes across the city.",
  },
  {
    title: "About 90 minutes",
    body: "Food, catching up, a passage of Scripture, and prayer.",
  },
  {
    title: "No prep required",
    body: "You don't have to know the Bible well to come. Nobody's calling on you.",
  },
  {
    title: "Every age and stage",
    body: "Some groups are couples, some singles, some a mix of everything.",
  },
  {
    title: "Try one, no commitment",
    body: "Visit a group once before you decide. That's completely normal here.",
  },
];

function GroupsPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      <section className="relative overflow-hidden bg-navy py-24 md:py-[130px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -bottom-[200px] -left-[160px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_40%_40%,color-mix(in_oklab,var(--olive)_26%,transparent),transparent_70%)]"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Life Groups</div>
          <h1 className="m-0 max-w-[17ch] font-display text-[clamp(40px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.024em] text-white">
            Church is easier to believe around a table.
          </h1>
          <p className="mt-7 mb-0 max-w-[48ch] text-[20px] leading-[1.68] text-white/80">
            Sunday is where we gather. A Life Group is where you're actually known — a handful of
            people who learn your name, your story, and what you're carrying this week.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-[110px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <div data-reveal className="overflow-hidden rounded-[24px]">
            <img
              src={groupsImg}
              alt="A Life Group sharing a meal around a table"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
          <div data-reveal>
            <div className="eyebrow mb-5 text-olive-dark">What actually happens</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              A meal, a passage, and honest talk.
            </h2>
            <p className="mt-6 mb-0 text-[19px] leading-[1.68] text-body-soft">
              You'll walk in, someone will hand you a plate, and you'll spend the first half hour
              just catching up. Then someone opens a Bible, reads a few verses, and the group talks
              about what it means for an ordinary Tuesday. It ends in prayer — usually short,
              usually specific, always for each other.
            </p>
            <p className="mt-5 mb-0 text-[19px] leading-[1.68] text-body-soft">
              No one performs. No one has it together. That's rather the point.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-12 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-dark">The details</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              Answered before you ask.
            </h2>
          </div>
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f) => (
              <div
                key={f.title}
                data-reveal
                className="rounded-[20px] border border-hairline bg-white px-7 pt-7 pb-8 shadow-[0_3px_14px_color-mix(in_oklab,var(--navy)_6%,transparent)]"
              >
                <h3 className="m-0 font-display text-[20px] font-extrabold tracking-tight text-navy">
                  {f.title}
                </h3>
                <p className="mt-3 mb-0 text-[17px] leading-[1.6] text-body-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-dark">Join a group</div>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
            See which groups have room right now.
          </h2>
          <p className="mx-auto mt-6 mb-0 max-w-[46ch] text-[19px] leading-[1.65] text-body-soft">
            The list below shows every group currently open for signup, with the night it meets and
            who it's for.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a
              href={GROUPS_URL}
              target="_blank"
              rel="noopener"
              className="pill bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-dark md:px-9"
            >
              Browse Open Groups →
            </a>
            <Link
              to="/next-steps"
              className="pill border-[1.5px] border-navy/25 bg-transparent px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-cream md:px-8"
            >
              See All Ministries
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
