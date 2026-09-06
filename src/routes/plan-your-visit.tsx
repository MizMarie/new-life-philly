import { createFileRoute } from "@tanstack/react-router";

import guideImg from "@/assets/nlp-guide.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
    answer:
      "We're located in the Olney section of North Philadelphia at 425 E. Roosevelt Blvd, Philadelphia, PA 19120.",
  },
  {
    question: "Where can I park?",
    answer:
      "Free street parking is available on D St, Bingham, and Westford. Use the map below for directions.",
  },
  {
    question: "How do I get there by public transportation?",
    answer:
      "We're easily accessible by the following buses: 57, 41, 51, and 82. Use the map below and select Transit for complete directions.",
  },
  {
    question: "When is the Sunday Service?",
    answer:
      "Our Sunday gathering begins at 10:00 AM. We recommend arriving about 10 minutes early so you can get settled comfortably.",
  },
  {
    question: "What should I expect when I arrive?",
    answer:
      "As you step inside, you'll be greeted by members of our Welcome Team. They're happy to answer questions and help guide you and your family. Our gathering takes place on the second floor — just take either set of stairs in the lobby, and you'll find the rest of the New Life family waiting.",
  },
  {
    question: "What happens during the service?",
    answer:
      "Our gathering runs about 1.5 hours and includes: Worship — our worship team leads attendees in a unified worship experience, with song lyrics projected on screens so you can sing along or engage however you feel comfortable. Prayer & Announcements — a brief time of prayer, church announcements, and an offering. The Lord's Prayer — recited together as a congregation. The Message — one of our leaders shares an encouraging, hope-filled message about Jesus. After the service, we gather informally in the Fellowship Hall on the first floor to share snacks and connect with one another — consider it an extension of the service!",
  },
  {
    question: "Do you have programs for children?",
    answer:
      "Yes! New Life Kids Church runs most Sundays during the service for children ages 1 year through 5th grade. A nursery is also available for infants and young toddlers. Drop-off and registration takes place in the Ministry Center starting at 9:45 AM. We prioritize safety with comprehensive security measures, so you can have peace of mind while your child enjoys the program.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as you are! Whether you dress up or keep it casual, you're welcome here. Most of our attendees opt for a comfortable, relaxed style.",
  },
];

export const Route = createFileRoute("/plan-your-visit")({
  head: () => ({
    meta: [
      { title: "Plan Your Visit — Sundays 10am in Olney | New Life Philly" },
      {
        name: "description",
        content:
          "Your first Sunday, made simple: 10am at 425 E Roosevelt Blvd, Philadelphia. Parking, transit, kids programs, what to wear — everything answered.",
      },
      { property: "og:title", content: "Plan Your Visit — New Life Philly" },
      {
        property: "og:description",
        content:
          "Sundays at 10am in Olney, Philadelphia. No forms, no sign-up — just show up. Here's everything else you need to know.",
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
              Your first Sunday, made simple.
            </h1>
            <p className="mt-7 mb-0 max-w-[46ch] text-[20px] leading-[1.68] text-body-soft">
              No forms. No sign-up. No need to know anyone here already. Just show up — here's
              everything else you need to know before you do.
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
              Everything you're wondering about.
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
                  <AccordionContent className="text-[17px] leading-[1.65] text-body-soft">
                    {faq.answer}
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
            Our greatest hope is that you find your way to Jesus. We're simply here to walk alongside you at whatever pace you need.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
