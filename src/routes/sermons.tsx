import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BrushstrokeAccent } from "@/components/BrushstrokeAccent";
import {
  APPLE_PODCAST_URL,
  SPOTIFY_PODCAST_URL,
  YOUTUBE_LIVE_URL,
  YOUTUBE_PLAYLISTS_URL,
} from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";


export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "New Life Philly" },
      {
        name: "description",
        content:
          "What following Jesus looks like on a Tuesday. Watch and listen to Sunday messages from New Life Philly.",
      },
      { property: "og:title", content: "Sermons | New Life Philly" },
      {
        property: "og:description",
        content:
          "What following Jesus looks like on a Tuesday. Watch and listen to Sunday messages from New Life Philly.",
      },
      { property: "og:url", content: abs("/sermons") },
    ],
    links: [{ rel: "canonical", href: abs("/sermons") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Sermons", "/sermons")),
      },
    ],
  }),
  component: SermonsPage,
});

function SermonsPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[320px] max-h-[580px] items-center justify-center overflow-hidden bg-navy">
        <BrushstrokeAccent
          drift
          rotate={-10}
          opacity={0.12}
          className="absolute -bottom-[70px] -left-[120px] h-[300px] w-[760px] text-olive"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Sermons</div>
          <h1 className="m-0 font-display text-[clamp(36px,5vw,64px)] leading-[1.03] font-extrabold tracking-[-0.024em] text-white">
            Practice the Way.
          </h1>
          <p className="mx-auto mt-5 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-white/80">
            What following Jesus looks like on a Tuesday. Catch up on Sunday's message at home, on
            the subway, or on your lunch break.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href={YOUTUBE_LIVE_URL}
              target="_blank"
              rel="noopener"
              className="pill bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-[38px]"
            >
              Watch Live →
            </a>
            <a
              href={YOUTUBE_PLAYLISTS_URL}
              target="_blank"
              rel="noopener"
              className="pill border-[1.5px] border-white/55 bg-transparent px-8 py-[19px] text-[15px] text-white no-underline hover:bg-white/15 md:px-[34px]"
            >
              Browse Past Sermons
            </a>

          </div>
        </div>
      </section>

      {/* Watch */}
      <section className="bg-white py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[1100px] px-5 md:px-8">
          <div className="eyebrow mb-5 text-olive-dark">Watch</div>
          <h2 className="m-0 mb-10 font-display text-[clamp(30px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
            Latest Sunday messages
          </h2>
          <div className="relative w-full overflow-hidden rounded-[20px] border border-hairline bg-black aspect-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/videoseries?list=UUZ3zurv6cRygshWvdQa42Wg"
              title="New Life Philly Sunday messages"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-sage py-24 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-dark">Listen</div>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,48px)] leading-[1.09] font-bold tracking-[-0.02em] text-navy">
            The sermon doesn't stop when Sunday does.
          </h2>
          <p className="mx-auto mt-6 mb-0 max-w-[50ch] text-[19px] leading-[1.65] text-body-soft">
            On the bus, on a break, or not ready to walk in yet? The podcast is for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <a
              href={APPLE_PODCAST_URL}
              target="_blank"
              rel="noopener"
              className="pill bg-navy px-8 py-[19px] text-[15px] text-white no-underline hover:bg-navy-mid md:px-[38px]"
            >
              Listen on Apple Podcasts →
            </a>
            <a
              href={SPOTIFY_PODCAST_URL}
              target="_blank"
              rel="noopener"
              className="pill border-[1.5px] border-navy/55 bg-transparent px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-navy/10 md:px-[34px]"
            >
              Listen on Spotify
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
              body: "Every message starts in the Bible and ends up in real life.",
            },
            {
              title: "Honest, not polished",
              body: "Real people, real questions. No performance.",
            },
            {
              title: "Built for Tuesdays",
              body: "We want your week to look different. At work, at home, on your block.",
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
            Come this Sunday at 10am. Stay for coffee and keep talking.
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
