import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NEXT_LINKS, STEPS } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/next-steps")({
  head: () => ({
    meta: [
      { title: "Next Steps — New Life Philly" },
      {
        name: "description",
        content:
          "Three simple steps at New Life Philly: gather on Sundays, connect in a group, and serve your neighbors in Philadelphia.",
      },
      { property: "og:title", content: "Next Steps — New Life Philly" },
      {
        property: "og:description",
        content:
          "Real People Gather. Real Love Connects. Real Hope Acts. Find your next step at New Life Philly.",
      },
      { property: "og:url", content: "/next-steps" },
    ],
    links: [{ rel: "canonical", href: "/next-steps" }],
  }),
  component: NextStepsPage,
});

function NextStepsPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="overflow-x-hidden bg-white font-sans text-body">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-[130px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -top-[180px] -right-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_45%_45%,color-mix(in_oklab,var(--olive)_24%,transparent),transparent_70%)]"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Next steps</div>
          <h1 className="m-0 max-w-[16ch] font-display text-[clamp(40px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.024em] text-white">
            Belonging doesn't happen by accident.
          </h1>
          <p className="mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-white/80">
            It's built in three simple steps — show up, find your people, and put your gifts to
            work. Here's the plan.
          </p>
        </div>
      </section>

      {/* Three steps */}
      <section className="bg-sage py-24 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-14 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-dark">The plan</div>
            <h2 className="m-0 font-display text-[clamp(32px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
              Three simple steps.
            </h2>
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

      {/* Deeper links */}
      <section className="bg-white py-24 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mb-12 max-w-[640px]">
            <div className="eyebrow mb-5 text-olive-dark">Go deeper</div>
            <h2 className="m-0 font-display text-[clamp(32px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
              Where will you start?
            </h2>
          </div>
          <div className="grid gap-10 border-t border-hairline pt-13 md:grid-cols-3">
            {NEXT_LINKS.map((item) =>
              "to" in item && item.to ? (
                <Link
                  key={item.title}
                  to={item.to}
                  data-reveal
                  className="group block no-underline"
                >
                  <div className="font-display text-[23px] font-bold tracking-tight text-navy">
                    {item.title}
                  </div>
                  <div className="mt-2.5 text-[17px] leading-[1.6] text-body-soft">{item.body}</div>
                  <div className="mt-4 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase transition-colors group-hover:text-navy">
                    {item.cta}
                  </div>
                </Link>
              ) : (
                <a
                  key={item.title}
                  href={item.href}
                  data-reveal
                  className="group block no-underline"
                >
                  <div className="font-display text-[23px] font-bold tracking-tight text-navy">
                    {item.title}
                  </div>
                  <div className="mt-2.5 text-[17px] leading-[1.6] text-body-soft">{item.body}</div>
                  <div className="mt-4 font-display text-[13px] font-bold tracking-[0.08em] text-olive-dark uppercase transition-colors group-hover:text-navy">
                    {item.cta}
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
