import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { YOUTUBE_URL, CHURCH_CENTER_URL } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons — New Life Philly" },
      {
        name: "description",
        content:
          "Watch and listen to Sunday messages from New Life Philly — discover the way of Jesus and what it looks like on a Tuesday.",
      },
      { property: "og:title", content: "Sermons — New Life Philly" },
      {
        property: "og:description",
        content:
          "Watch and listen to Sunday messages from New Life Philly — discover the way of Jesus and what it looks like on a Tuesday.",
      },
      { property: "og:url", content: "/sermons" },
    ],
    links: [{ rel: "canonical", href: "/sermons" }],
  }),
  component: SermonsPage,
});

function SermonsPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="overflow-x-hidden bg-white font-sans text-body">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-[140px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -bottom-[220px] -left-[160px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_40%_40%,color-mix(in_oklab,var(--olive)_30%,transparent),transparent_68%)]"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Sermons</div>
          <h1 className="m-0 font-display text-[clamp(40px,5.4vw,72px)] leading-[1.03] font-extrabold tracking-[-0.024em] text-white">
            Practice the Way.
          </h1>
          <p className="mx-auto mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-white/80">
            Discover the way of Jesus and what it looks like on a Tuesday. Catch up on Sunday
            messages wherever you are — at home, on the El, or on your lunch break.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener"
              className="pill bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-[38px]"
            >
              Watch on YouTube →
            </a>
            <a
              href={CHURCH_CENTER_URL}
              target="_blank"
              rel="noopener"
              className="pill border-[1.5px] border-white/55 bg-transparent px-8 py-[19px] text-[15px] text-white no-underline hover:bg-white/15 md:px-[34px]"
            >
              Browse on Church Center
            </a>
          </div>
        </div>
      </section>

      {/* Why we preach */}
      <section className="bg-white py-24 md:py-[110px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 md:px-8 lg:grid-cols-3 lg:gap-10">
          {[
            {
              title: "Rooted in Scripture",
              body: "Every message starts with the Bible and works outward into real life in Philadelphia.",
            },
            {
              title: "Honest, not polished",
              body: "We preach to real people with real questions — no performance, no pretending.",
            },
            {
              title: "Built for Tuesdays",
              body: "The goal isn't a good Sunday. It's a different week — at work, at home, in your neighborhood.",
            },
          ].map((item) => (
            <div
              key={item.title}
              data-reveal
              className="rounded-[20px] border border-hairline bg-white px-8 pt-[34px] pb-9"
            >
              <h2 className="m-0 font-display text-[24px] font-bold tracking-tight text-navy">
                {item.title}
              </h2>
              <p className="mt-3 mb-0 text-[17px] leading-[1.6] text-body-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-dark">Better in person</div>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
            Sermons make more sense around a table.
          </h2>
          <p className="mx-auto mt-6 mb-0 max-w-[46ch] text-[19px] leading-[1.65] text-body-soft">
            Join us this Sunday at 10am — then stay for coffee and keep the conversation going.
          </p>
          <Link
            to="/plan-your-visit"
            className="pill mt-9 inline-block bg-navy-mid px-8 py-[19px] text-[15px] text-white no-underline hover:bg-navy md:px-9"
          >
            Plan Your Visit This Sunday →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
