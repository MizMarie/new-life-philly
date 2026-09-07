import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/what-we-believe")({
  head: () => ({
    meta: [
      { title: "What We Believe | New Life Philly" },
      {
        name: "description",
        content:
          "What New Life Philly believes about Scripture, God, salvation, and unity in Christ.",
      },
      { property: "og:title", content: "What We Believe | New Life Philly" },
      {
        property: "og:description",
        content:
          "What New Life Philly believes about Scripture, God, salvation, and unity in Christ.",
      },
      { property: "og:url", content: abs("/what-we-believe") },
    ],
    links: [{ rel: "canonical", href: abs("/what-we-believe") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("What We Believe", "/what-we-believe")),
      },
    ],
  }),
  component: WhatWeBelievePage,
});

type Belief = {
  id: string;
  heading: string;
  bullets: string[];
};

const BELIEFS: Belief[] = [
  {
    id: "word-of-god",
    heading: "The Word of God",
    bullets: [
      "The Bible is the written word of God, inspired by the Holy Spirit and without error in the original manuscripts.",
      "Scripture is infallible and authoritative in all matters of faith and practice.",
    ],
  },
  {
    id: "nature-of-god",
    heading: "The Nature of God",
    bullets: [
      "There is one God who exists eternally in three persons: Father, Son, and Holy Spirit.",
      "God is gracious and faithful to His people across generations through His Covenant promises.",
      "The Holy Spirit indwells believers, providing strength and wisdom.",
    ],
  },
  {
    id: "salvation-through-christ",
    heading: "Salvation Through Christ",
    bullets: [
      "Jesus Christ is the eternal Son of God who atoned for sins through His perfect life and sacrificial death.",
      "Salvation comes by grace alone through faith in Jesus Christ.",
      "Jesus will return bodily to judge humanity and receive His people.",
    ],
  },
  {
    id: "humanitys-purpose-and-need",
    heading: "Humanity's Purpose and Need",
    bullets: [
      "All humans are made in God's image and deserve dignity and love as His image-bearers.",
      "All are sinners unable to save themselves except through God's mercy.",
      "Every aspect of life is to be lived for God's glory under Christ's Lordship.",
    ],
  },
  {
    id: "unity-in-essential-beliefs",
    heading: "Unity in Essential Beliefs, Charity in Differences",
    bullets: [
      "We embrace a generous orthodoxy that holds firmly to historic Christian truths while engaging thoughtfully with various Christian traditions.",
      "We value deep theological understanding and careful Biblical interpretation.",
      "We seek unity in essential doctrines while showing grace in areas where faithful Christians may differ.",
      "Our community includes believers from various denominational backgrounds, enriching our church family with diverse perspectives within orthodox Christianity.",
      "We are committed to prayerfully examining Scripture together as we consider questions about church leadership and practice.",
    ],
  },
];

/** Asymmetric 12-column layout: 7+5, 5+7, then a full-width closer. */
const BELIEF_SPANS: Record<string, string> = {
  "word-of-god": "lg:col-span-7",
  "nature-of-god": "lg:col-span-5",
  "salvation-through-christ": "lg:col-span-5",
  "humanitys-purpose-and-need": "lg:col-span-7",
  "unity-in-essential-beliefs": "lg:col-span-12",
};

function BeliefCard({
  belief,
  index,
  spanClass,
  wide = false,
}: {
  belief: Belief;
  index: number;
  spanClass: string;
  wide?: boolean;
}) {
  return (
    <article
      data-reveal
      className={`${spanClass} relative overflow-hidden rounded-[22px] bg-white p-7 shadow-[0_12px_32px_color-mix(in_oklab,var(--navy)_8%,transparent)] md:p-9`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-4 font-display text-[96px] leading-none font-extrabold tracking-[-0.04em] text-mist md:text-[124px]"
      >
        {index + 1}
      </span>
      <div className="relative">
        <div className="mb-4 h-[3px] w-12 rounded-full bg-olive" />
        <h3 className="m-0 max-w-[26ch] font-display text-[21px] leading-[1.2] font-bold tracking-[-0.012em] text-navy md:text-[25px]">
          {belief.heading}
        </h3>
        <ul
          className={`mt-6 list-disc space-y-3 pl-5 text-[16px] leading-[1.62] text-body ${
            wide ? "md:columns-2 md:gap-10 md:space-y-0 md:[&>li]:mb-3" : ""
          }`}
        >
          {belief.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function WhatWeBelievePage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* What We Believe Hero */}
      <section className="relative flex h-[55vh] min-h-[320px] max-h-[580px] items-center justify-center bg-mist">
        <span className="absolute inset-0 flex items-center justify-center text-[15px] font-semibold text-body-faint">
          Photo coming soon
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/80 to-navy/60" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center md:px-8">
          <h1 className="m-0 font-display text-[clamp(36px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-white">
            What We Believe
          </h1>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-sage py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mx-auto max-w-[820px] text-center">
            <p className="m-0 text-[18px] leading-[1.7] text-body">
              Our Real Hope is founded entirely on the truth of Scripture, which guides every aspect
              of our lives and practice. We hold firmly to the essential Christian truths while
              extending grace in all other matters.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 lg:grid-cols-12">
            {BELIEFS.map((belief, i) => (
              <BeliefCard
                key={belief.id}
                belief={belief}
                index={i}
                spanClass={BELIEF_SPANS[belief.id] ?? "lg:col-span-6"}
                wide={belief.id === "unity-in-essential-beliefs"}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
