import { createFileRoute } from "@tanstack/react-router";

import guideImg from "@/assets/nlp-guide.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BrushstrokeAccent } from "@/components/BrushstrokeAccent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const VISIT_FAQS = [
  {
    question: "Where are you located?",
    answer: "We're at 425 E. Roosevelt Blvd in Olney, Philadelphia, PA 19120.",
  },
  {
    question: "Where can I park?",
    answer:
      "Free street parking on D St, Bingham, and Westford. The map below shows the way.",
  },
  {
    question: "How do I get there by public transportation?",
    answer:
      "Take the 57, 41, 51, or 82 bus. Tap Transit on the map below for directions.",
  },
  {
    question: "When is the Sunday Service?",
    answer:
      "Sundays at 10:00 AM. Try to get here about 10 minutes early so you can settle in.",
  },
  {
    question: "What should I expect when I arrive?",
    answer:
      "Our Welcome Team will meet you at the door. Ask them anything. We meet on the second floor, so take either set of stairs in the lobby.",
  },
  {
    question: "What happens during the service?",
    answer:
      "About 90 minutes. Worship: songs with the lyrics on the screen. Sing along or just listen. Prayer & Announcements: a short prayer, a few announcements, and the offering. The Lord's Prayer: we say it together. The Message: one of our leaders talks about Jesus and real life. Afterward, come down to the Fellowship Hall on the first floor for snacks and conversation.",
    intro: "About 90 minutes.",
    bullets: [
      {
        label: "Worship",
        body: "songs with the lyrics on the screen. Sing along or just listen.",
      },
      {
        label: "Prayer & Announcements",
        body: "a short prayer, a few announcements, and the offering.",
      },
      {
        label: "The Lord's Prayer",
        body: "we say it together.",
      },
      {
        label: "The Message",
        body: "one of our leaders talks about Jesus and real life.",
      },
    ],
    closing:
      "Afterward, come down to the Fellowship Hall on the first floor for snacks and conversation.",
  },
  {
    question: "Do you have programs for children?",
    answer:
      "Kids stay with you for worship, prayer, and the offering. Before the message, we bring every child up front and pray for them. Then the youngest go to nursery and toddler care, and grades 1 through 5 go to Kids Church.\n\nDrop-off and registration start at 10:45 AM in the Ministry Center. We take safety seriously and have security measures in place.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as you are. Dressed up or dressed down, you're welcome. Most people go comfortable.",
  },
];

export const Route = createFileRoute("/plan-your-visit")({
  head: () => ({
    meta: [
      { title: "New Life Philly" },
      {
        name: "description",
        content:
          "Your first Sunday, made simple: 10am at 425 E Roosevelt Blvd, Philadelphia. Parking, transit, kids programs, and what to wear, all answered.",
      },
      { property: "og:title", content: "Plan Your Visit — New Life Philly" },
      {
        property: "og:description",
        content:
          "Sundays at 10am in Olney, Philadelphia. No forms, no sign-up. Just show up. Here's everything you need to know.",
      },
      { property: "og:url", content: abs("/plan-your-visit") },
    ],
    links: [{ rel: "canonical", href: abs("/plan-your-visit") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Plan Your Visit", "/plan-your-visit")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(VISIT_FAQS)),
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

      {/* Hero */}
      <section className="overflow-hidden bg-white py-24 md:py-[130px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div data-reveal>
            <div className="eyebrow mb-5 text-olive-dark">Plan a visit</div>
            <h1 className="m-0 max-w-[14ch] font-display text-[clamp(36px,3.9vw,56px)] leading-[1.07] font-extrabold tracking-[-0.022em] text-navy">
              Your first Sunday,{" "}
              <span className="relative inline-block">
                made simple.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.34em] -left-[1%] h-[0.17em] w-[104%] overflow-visible"
                >
                  <path
                    d="M2 9C38 4.4 74 3.2 110 4.1c36 .9 72 3.6 108 3.1 26-.4 52-2.1 78-4.6"
                    fill="none"
                    stroke="var(--olive)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-body-soft">
              No forms. No sign-up. You don't have to know anyone. Just show up. Here's what to
              expect.
            </p>
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
        <div className="mx-auto max-w-[860px] px-5 md:px-8">
          <div data-reveal className="mb-11 max-w-[600px]">
            <div className="eyebrow mb-4 text-olive-dark">Before you come</div>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-navy">
              FAQs
            </h2>
          </div>
          <div data-reveal className="rounded-[20px] border border-hairline bg-white px-7 md:px-9">
            <Accordion type="single" collapsible>
              {VISIT_FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="border-hairline last:border-b-0"
                >
                  <AccordionTrigger className="py-6 font-display text-[19px] font-bold tracking-tight text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line text-[17px] leading-[1.65] text-body-soft">
                    {"bullets" in faq && faq.bullets ? (
                      <>
                        <p className="m-0">{faq.intro}</p>
                        <ul className="mt-4 list-disc space-y-3 pl-5 text-[16px] leading-[1.62] text-body">
                          {faq.bullets.map((bullet) => (
                            <li key={bullet.label}>
                              <span className="font-bold text-navy">{bullet.label}</span>:{" "}
                              {bullet.body}
                            </li>
                          ))}
                        </ul>
                        <p className="mb-0 mt-4">{faq.closing}</p>
                      </>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Map + directions */}
          <div data-reveal className="mt-10">
            <div className="overflow-hidden rounded-[20px] border border-hairline">
              <iframe
                src={MAP_EMBED_URL}
                title="Map to New Life Philly, 425 E Roosevelt Blvd, Philadelphia, PA 19120"
                className="h-[360px] w-full border-0 md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-navy px-8 py-4 font-display text-[14px] font-bold tracking-[0.06em] text-white uppercase no-underline transition-colors hover:bg-navy-deep"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-[110px]">
        <BrushstrokeAccent
          drift
          rotate={8}
          flip
          opacity={0.16}
          className="absolute -bottom-[60px] -left-[100px] h-[280px] w-[720px] text-olive"
        />
        <div data-reveal className="relative mx-auto max-w-[760px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">No pressure, ever</div>
          <p className="m-0 font-display text-[clamp(26px,3vw,40px)] leading-[1.28] font-semibold tracking-[-0.015em] text-white">
            We hope you meet Jesus here. Take your time. Go at your own pace.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
