import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import storyImg from "@/assets/nlp-story.jpg";
import problemImg from "@/assets/nlp-problem.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Church in Olney, Philadelphia | New Life Philly" },
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

function AboutPage() {
  const pageRef = useReveal<HTMLDivElement>();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
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
              A thriving family in the city where the broken from all nations are made alive and whole — finding hope and purpose in Jesus.
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

      {/* Leadership */}
      <section className="bg-sage py-24 md:py-[110px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div data-reveal className="mx-auto max-w-[820px] text-center">
            <div className="eyebrow mb-5 text-olive-dark">Our Leadership</div>
            <h2 className="m-0 font-display text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.02em] text-navy">
              Leadership
            </h2>
            <p className="mt-5 mb-0 text-[18px] leading-[1.7] text-body">
              Our leaders are everyday people with deep faith, committed to walking alongside you
              through the real stuff of life. They're here to guide, encourage, and help our
              community stay rooted as we pursue Jesus together.
            </p>
          </div>

          {/* Meet Our Team */}
          <div className="mt-16 md:mt-20">
            <h3 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Meet Our Team
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  expanded={expandedIds.has(member.id)}
                  onToggle={() => toggle(member.id)}
                />
              ))}
            </div>
          </div>

          {/* Our Shepherds (Elders) */}
          <div data-reveal className="mt-20 md:mt-24">
            <h3 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Our Shepherds (Elders)
            </h3>
            <ul className="mt-8 grid gap-x-8 gap-y-3 text-center text-[17px] leading-[1.55] text-body md:grid-cols-2 lg:grid-cols-4">
              <li>Tim Bathurst</li>
              <li>Mike Del Vecchio</li>
              <li>Jose Negron</li>
              <li>Jed Trott</li>
            </ul>
          </div>

          {/* Elder's Council */}
          <div data-reveal className="mt-20 md:mt-24">
            <h3 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Elder's Council
            </h3>
            <ul className="mt-8 grid gap-x-8 gap-y-3 text-center text-[17px] leading-[1.55] text-body md:grid-cols-2 lg:grid-cols-4">
              <li>Pam Bryan</li>
              <li>Nes Espinosa</li>
              <li>Jacob Good</li>
              <li>Marissa Morales</li>
              <li>Christiana Ogunsami</li>
              <li>Greg Snow (Pastoral Apprentice)</li>
              <li>Dan Schafhauser</li>
            </ul>
          </div>

          {/* Our Servants (Deacons) */}
          <div data-reveal className="mt-20 md:mt-24">
            <h3 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Our Servants (Deacons)
            </h3>
            <ul className="mt-8 grid gap-x-8 gap-y-3 text-center text-[17px] leading-[1.55] text-body md:grid-cols-2 lg:grid-cols-4">
              <li>Tom de Rivera</li>
              <li>Jacob Good</li>
              <li>Eunice Kalbach</li>
              <li>Darlene Holman</li>
              <li>Brian Mast</li>
              <li>Robert Morales, Sr.</li>
              <li>Matt Theogood</li>
              <li>Mike Wood</li>
            </ul>
            <p className="mt-6 text-center text-[17px] leading-[1.55] text-body">
              <strong className="text-navy">Diaconal Assistant:</strong> Len Nicoletti
            </p>
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
