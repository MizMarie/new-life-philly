import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Leadership & Beliefs | New Life Philly" },
      {
        name: "description",
        content:
          "Meet the leaders of New Life Philly and read what we believe about Scripture, God, salvation, and unity in Christ.",
      },
      { property: "og:title", content: "Leadership & Beliefs — New Life Philly" },
      {
        property: "og:description",
        content:
          "Meet the leaders of New Life Philly and read what we believe about Scripture, God, salvation, and unity in Christ.",
      },
      { property: "og:url", content: abs("/about") },
    ],
    links: [{ rel: "canonical", href: abs("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("About", "/about")),
      },
    ],
  }),
  component: AboutPage,
});

type TeamMember = {
  id: string;
  name: string;
  title: string;
  qa: { q: string; a: string }[];
};

const TEAM: TeamMember[] = [
  {
    id: "tim-bathurst",
    name: "Tim Bathurst",
    title: "Pastor of Spiritual Formation",
    qa: [
      {
        q: "I feel most alive when:",
        a: "When I'm experiencing Jesus in the power of his love, forgiveness, and mercy.",
      },
      {
        q: "My heart breaks for:",
        a: "People bound up by their sin and hurts, longing to be free but feeling trapped.",
      },
      {
        q: "I believe God is going to:",
        a: "Set us free and heal us, both as individuals and as communities.",
      },
      {
        q: "The best advice I ever received:",
        a: "When you're struggling with someone, ask God to show you how you're just like them. When he reveals it, you will have instantaneous grace for that other person.",
      },
    ],
  },
  {
    id: "seth-cross",
    name: "Seth Cross",
    title: "Youth Ministry Director",
    qa: [
      { q: "I feel most alive when:", a: "Exploring a new place with my girls." },
      {
        q: "My heart breaks for:",
        a: "Parents whose kids have not fallen in love with Jesus.",
      },
      { q: "I believe God is going to:", a: "Humble us." },
      { q: "The best advice I ever received:", a: "Cling to Jesus." },
    ],
  },
  {
    id: "greg-snow",
    name: "Greg Snow",
    title: "Pastoral Apprentice",
    qa: [
      {
        q: "I feel most alive when:",
        a: "Talking to people about Jesus over some good food!",
      },
      {
        q: "My heart breaks for:",
        a: "The outcast, hurting or doubting young adult.",
      },
      {
        q: "I believe God is going to:",
        a: "Raise up an authentic expanding community of love, right here right now.",
      },
      {
        q: "The best advice I ever received:",
        a: "Seek first the kingdom of God and his righteousness and all these things will be added to you — Matthew 6:33.",
      },
    ],
  },
  {
    id: "allison-wanaselija",
    name: "Allison Wanaselija",
    title: "Children's Ministry Director",
    qa: [
      {
        q: "I feel most alive when:",
        a: "Interacting with kids and watching them make connections with other kids and adults who love them. I also feel the most alive digging in the dirt, putting my feet in the sand, or dipping in the water soaking in the sun!",
      },
      {
        q: "My heart breaks for:",
        a: "Kids who are hurting, parents and families who are broken and hurting.",
      },
      {
        q: "I believe God is going to:",
        a: "Raise up a generation of kids who want to grow in their faith and follow Jesus, seeking justice and mercy.",
      },
      {
        q: "The best advice I ever received:",
        a: "Surround yourself with community and invest in them.",
      },
    ],
  },
  {
    id: "sue-carter",
    name: "Sue Carter",
    title: "Interim Treasurer",
    qa: [
      {
        q: "I feel most alive when:",
        a: "I'm exploring God's beautiful creation and when I'm having a meaningful conversation with someone.",
      },
      { q: "My heart breaks when:", a: "Someone is suffering." },
      {
        q: "I believe God is going to:",
        a: "Sustain us through anything we face.",
      },
      {
        q: "The best advice I've received is:",
        a: "Love God with all heart, soul and mind and love your neighbor as yourself.",
      },
    ],
  },
];

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

function TeamCard({
  member,
  expanded,
  onToggle,
}: {
  member: TeamMember;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      data-reveal
      className="rounded-[22px] bg-white p-6 shadow-[0_12px_32px_color-mix(in_oklab,var(--navy)_8%,transparent)] transition-all duration-300 md:p-8 md:hover:-translate-y-1 md:hover:shadow-[0_20px_48px_color-mix(in_oklab,var(--navy)_12%,transparent)] md:cursor-pointer"
    >
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-mist">
        <span className="text-[15px] font-semibold text-body-faint">Photo coming soon</span>
      </div>
      <div className="mt-6">
        <div className="font-display text-[20px] font-bold text-navy">{member.name}</div>
        <div className="mt-1 text-[15px] font-medium text-olive-dark">{member.title}</div>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="mt-5 inline-flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 font-display text-[14px] font-bold uppercase tracking-[0.07em] text-olive-dark hover:text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2"
        >
          {expanded ? "Read less" : "Read more"}
          <span
            aria-hidden="true"
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
        {expanded && (
          <div className="mt-4 space-y-4 text-[15px] leading-[1.6] text-body">
            {member.qa.map(({ q, a }) => (
              <p key={q}>
                <strong className="text-navy">{q}</strong> {a}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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

function NameCard({ name, photoUrl }: { name: string; photoUrl?: string }) {
  return (
    <div
      data-reveal
      className="rounded-[22px] bg-white p-5 text-center shadow-[0_12px_32px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
    >
      <div className="mx-auto flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full bg-mist md:w-24">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-[11px] font-semibold text-body-faint md:text-[12px]">
            Photo coming soon
          </span>
        )}
      </div>
      <div className="mt-4 font-display text-[16px] font-bold text-navy md:text-[17px]">{name}</div>
    </div>
  );
}

function AboutPage() {
  const pageRef = useReveal<HTMLDivElement>();
  const [expandedTeamIds, setExpandedTeamIds] = useState<Set<string>>(new Set());
  

  const toggleTeam = (id: string) => {
    setExpandedTeamIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };


  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Leadership Hero */}
      <section className="relative flex h-[55vh] min-h-[320px] max-h-[580px] items-center justify-center bg-mist">
        <span className="absolute inset-0 flex items-center justify-center text-[15px] font-semibold text-body-faint">
          Photo coming soon
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/50 to-navy/25" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center md:px-8">
          <h1 className="m-0 font-display text-[clamp(36px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-white">
            Leadership
          </h1>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-sage py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mx-auto max-w-[820px] text-center">
            <div className="eyebrow mb-5 text-olive-dark">Our Leadership</div>
            <p className="mt-5 mb-0 text-[18px] leading-[1.7] text-body">
              Our leaders are everyday people with deep faith, committed to walking alongside you
              through the real stuff of life. They're here to guide, encourage, and help our
              community stay rooted as we pursue Jesus together.
            </p>
          </div>

          {/* Meet Our Team */}
          <div className="mt-16 md:mt-20">
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Meet Our Team
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  expanded={expandedTeamIds.has(member.id)}
                  onToggle={() => toggleTeam(member.id)}
                />
              ))}
            </div>
          </div>

          {/* Our Shepherds (Elders) */}
          <div data-reveal className="mt-20 md:mt-24">
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Our Shepherds (Elders)
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {["Tim Bathurst", "Mike Del Vecchio", "Jose Negron", "Jed Trott"].map((name) => (
                <NameCard key={name} name={name} />
              ))}
            </div>
          </div>

          {/* Elder's Council */}
          <div data-reveal className="mt-20 md:mt-24">
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Elder's Council
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {[
                "Pam Bryan",
                "Nes Espinosa",
                "Jacob Good",
                "Marissa Morales",
                "Christiana Ogunsami",
                "Greg Snow (Pastoral Apprentice)",
                "Dan Schafhauser",
              ].map((name) => (
                <NameCard key={name} name={name} />
              ))}
            </div>
          </div>

          {/* Our Servants (Deacons) */}
          <div data-reveal className="mt-20 md:mt-24">
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Our Servants (Deacons)
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Tom de Rivera", photoUrl: "https://drive.google.com/uc?export=download&id=19pcsbweO1HgstFURK83ZydYsSqvndGFc" },
                { name: "Jacob Good", photoUrl: "https://drive.google.com/uc?export=download&id=1-ntnqTwVf2gtAkcBINsoGOGFjkyv-38I" },
                { name: "Eunice Kalbach", photoUrl: "https://drive.google.com/uc?export=download&id=1q4jxeJ2dPG4YMPFDd-9a4hg5RFGoz3IX" },
                { name: "Darlene Holman", photoUrl: "https://drive.google.com/uc?export=download&id=1ts7OtKFuApXKoHc_dzt2t58xtfEEsXxj" },
                { name: "Brian Mast", photoUrl: "https://drive.google.com/uc?export=download&id=1LWtXcRoyzMsmthiY0nF07FcxAZHrgbmE" },
                { name: "Robert Morales, Sr.", photoUrl: "https://drive.google.com/uc?export=download&id=1r0aLqvuUTFNCGPm_cHXnf94AbdG6okbS" },
                { name: "Matt Theogood", photoUrl: "https://drive.google.com/uc?export=download&id=1t8ZI6FuiLKTi1bc1AwvIrod8HOGlDaWj" },
                { name: "Mike Wood", photoUrl: "https://drive.google.com/uc?export=download&id=1qdRUqrO1WuDpDMtQfVYwINtbDF0j437c" },
              ].map((deacon) => (
                <NameCard key={deacon.name} name={deacon.name} photoUrl={deacon.photoUrl} />
              ))}
            </div>
            <p className="mt-6 text-center text-[17px] leading-[1.55] text-body">
              <strong className="text-navy">Diaconal Assistant:</strong> Len Nicoletti
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-sage py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mx-auto max-w-[820px] text-center">
            <div className="eyebrow mb-5 text-olive-dark">What We Believe</div>
            <h2 className="m-0 font-display text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.02em] text-navy">
              What We Believe
            </h2>
            <p className="mt-5 mb-0 text-[18px] leading-[1.7] text-body">
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
