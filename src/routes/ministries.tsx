import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GROUPS_URL, MINISTRIES } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — Kids, Youth, Women, Men & Young Adults | New Life Philly" },
      {
        name: "description",
        content:
          "Ministries at New Life Philly in Olney, Philadelphia — kids from age 1 through 5th grade, youth, women, men, and young adults.",
      },
      { property: "og:title", content: "Ministries — New Life Philly" },
      {
        property: "og:description",
        content:
          "Kids, youth, women, men, and young adults — there's a place for every age and every stage at New Life Philly.",
      },
      { property: "og:url", content: abs("/ministries") },
    ],
    links: [{ rel: "canonical", href: abs("/ministries") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Ministries", "/ministries")),
      },
    ],
  }),
  component: MinistriesPage,
});

function MinistriesPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      <section className="relative overflow-hidden bg-navy py-24 md:py-[130px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -bottom-[200px] -right-[160px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_40%_40%,color-mix(in_oklab,var(--olive)_26%,transparent),transparent_70%)]"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Ministries</div>
          <h1 className="m-0 max-w-[17ch] font-display text-[clamp(40px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.024em] text-white">
            Every age. Every stage.
          </h1>
          <p className="mt-7 mb-0 max-w-[48ch] text-[20px] leading-[1.68] text-white/80">
            Whether you're four or seventy-four, there are people here who are glad you came and
            who'd like to know you. Start with the group that fits where you are.
          </p>
          <nav className="mt-9 flex flex-wrap gap-2.5">
            {MINISTRIES.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="pill border-[1.5px] border-white/40 bg-white/5 px-5 py-2.5 text-[13px] text-white no-underline transition-colors hover:bg-olive hover:text-navy"
              >
                {m.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {MINISTRIES.map((m, i) => (
        <section
          key={m.id}
          id={m.id}
          className={`scroll-mt-24 py-20 md:py-[100px] ${i % 2 === 0 ? "bg-white" : "bg-sage"}`}
        >
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div
              data-reveal
              className={`overflow-hidden rounded-[24px] ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <img
                src={m.img}
                alt={m.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
            </div>
            <div data-reveal>
              <div className="eyebrow mb-4 text-[12px] text-olive-dark">{m.ages}</div>
              <h2 className="m-0 font-display text-[clamp(28px,3vw,42px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
                {m.name}
              </h2>
              <p className="mt-6 mb-0 text-[19px] leading-[1.68] text-body-soft">{m.body}</p>
              <p className="mt-5 mb-0 text-[16px] leading-[1.6] text-body-soft italic">
                Photo and full description coming soon — we're swapping in real pictures from our own
                Sundays.
              </p>
              <Link
                to="/plan-your-visit"
                className="mt-7 inline-block font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline hover:text-navy"
              >
                Visit This Sunday →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Next step</div>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.09] font-bold tracking-[-0.02em] text-white">
            The fastest way in is a Life Group.
          </h2>
          <p className="mx-auto mt-6 mb-0 max-w-[46ch] text-[19px] leading-[1.65] text-white/80">
            Ministries meet on their own rhythms, but a weekly group is where most people stop
            feeling new.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link
              to="/groups"
              className="pill bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-9"
            >
              How Life Groups Work →
            </Link>
            <a
              href={GROUPS_URL}
              target="_blank"
              rel="noopener"
              className="pill border-[1.5px] border-white/55 bg-transparent px-8 py-[19px] text-[15px] text-white no-underline hover:bg-white/15 md:px-8"
            >
              Browse Open Groups
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
