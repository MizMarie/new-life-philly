import { createFileRoute } from "@tanstack/react-router";

import guideImg from "@/assets/nlp-guide.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ADDRESS_1,
  ADDRESS_2,
  EMAIL,
  FIRST_SUNDAY,
  PHONE,
  PRAYER_URL,
} from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/plan-your-visit")({
  head: () => ({
    meta: [
      { title: "Plan Your Visit — Sundays 10am in Olney | New Life Philly" },
      {
        name: "description",
        content:
          "Your first Sunday at New Life Philly, answered: 10am at 425 E Roosevelt Blvd, free parking, casual dress, kids covered, coffee after.",
      },
      { property: "og:title", content: "Plan Your Visit — New Life Philly" },
      {
        property: "og:description",
        content:
          "Sundays at 10am in Olney, Philadelphia. Come as you are, sit in the back, decide nothing.",
      },
      { property: "og:url", content: abs("/plan-your-visit") },
    ],
    links: [{ rel: "canonical", href: abs("/plan-your-visit") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Plan Your Visit", "/plan-your-visit")),
      },
    ],
  }),
  component: PlanYourVisitPage,
});

function PlanYourVisitPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Hero / guide */}
      <section className="overflow-hidden bg-white py-24 md:py-[130px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div data-reveal>
            <div className="eyebrow mb-5 text-olive-dark">Plan a visit</div>
            <h1 className="m-0 max-w-[14ch] font-display text-[clamp(36px,3.9vw,56px)] leading-[1.07] font-extrabold tracking-[-0.022em] text-navy">
              We believe there is more for you.
            </h1>
            <p className="mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-body-soft">
              In a city this busy it's easy to feel invisible. At New Life Philly you'll find
              genuine community and a purpose worth showing up for. This is where belonging begins.
            </p>
            <div className="mt-9 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-2">
              <div>
                <div className="eyebrow mb-2 text-[11px] text-olive-dark">When & where</div>
                <div className="text-[17px] leading-[1.6] text-body">
                  Sundays at 10am
                  <br />
                  {ADDRESS_1}
                  <br />
                  {ADDRESS_2}
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2 text-[11px] text-olive-dark">Questions first?</div>
                <div className="text-[17px] leading-[1.6] text-body">
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
            </div>
            <a
              href={PRAYER_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block border-b-2 border-cream pb-1 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase no-underline transition-colors hover:border-olive"
            >
              Send a prayer request →
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

      {/* First Sunday FAQ */}
      <section className="bg-sage py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-11 max-w-[600px]">
            <div className="eyebrow mb-4 text-olive-dark">Before you come</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              Your first Sunday, answered.
            </h2>
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

      {/* Reassurance */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-[110px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -bottom-[220px] -left-[160px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_40%_40%,color-mix(in_oklab,var(--olive)_30%,transparent),transparent_68%)]"
        />
        <div data-reveal className="relative mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">No pressure, ever</div>
          <p className="m-0 font-display text-[clamp(26px,3vw,40px)] leading-[1.28] font-semibold tracking-[-0.015em] text-white">
            Come as you are, sit in the back, and decide nothing. We'll save you a seat.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
