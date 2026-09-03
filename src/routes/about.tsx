import { createFileRoute, Link } from "@tanstack/react-router";

import storyImg from "@/assets/nlp-story.jpg";
import problemImg from "@/assets/nlp-problem.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — New Life Philly" },
      {
        name: "description",
        content:
          "A non-denominational church in Olney, North Philadelphia. Learn our story, our vision, and why people stay.",
      },
      { property: "og:title", content: "About — New Life Philly" },
      {
        property: "og:description",
        content:
          "A thriving family in the city where the broken from all nations are made alive and whole — finding hope and purpose in Jesus.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Intro */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-[130px]">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -top-[180px] -right-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_45%_45%,color-mix(in_oklab,var(--olive)_24%,transparent),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-[72px]">
          <div data-reveal>
            <div className="eyebrow mb-5 text-olive-light">About New Life Philly</div>
            <h1 className="m-0 max-w-[16ch] font-display text-[clamp(40px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.024em] text-white">
              Community rooted in Olney. Open to all of Philadelphia.
            </h1>
            <p className="mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-white/80">
              New Life Philly is a non-denominational church in the Olney section of North
              Philadelphia. We gather every Sunday at 10am — real people, from every background,
              learning to follow Jesus together.
            </p>
            <p className="mt-5 mb-0 max-w-[44ch] text-[18px] leading-[1.7] text-white/65">
              Maybe you grew up in church and walked away. Maybe you've never set foot in one.
              However you got here — you can come as you are, sit in the back, and decide nothing.
            </p>
            <Link
              to="/plan-your-visit"
              className="pill mt-9 inline-block bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-9"
            >
              Plan Your Visit →
            </Link>
          </div>
          <div
            data-reveal
            className="relative overflow-hidden rounded-[22px] bg-mist shadow-[0_26px_60px_rgba(0,0,0,0.25)]"
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

      {/* Vision */}
      <section className="bg-white py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[900px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-dark">Our vision</div>
          <p className="m-0 font-display text-[clamp(26px,3vw,40px)] leading-[1.28] font-semibold tracking-[-0.015em] text-navy">
            A thriving family in the city where the broken from all nations are made alive and whole
            — finding hope and purpose in Jesus.
          </p>
        </div>
      </section>

      {/* Member story */}
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
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
