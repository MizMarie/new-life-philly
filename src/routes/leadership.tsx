import { createFileRoute } from "@tanstack/react-router";

import allisonWanaselija from "@/assets/allison-wanaselija.jpg";
import deaconBrianMast from "@/assets/deacon-brian-mast.jpg";
import deaconDarleneHolman from "@/assets/deacon-darlene-holman.jpg";
import deaconEuniceKalbach from "@/assets/deacon-eunice-kalbach.jpg";
import deaconJacobGood from "@/assets/deacon-jacob-good.jpg";
import deaconMattTheogood from "@/assets/deacon-matt-theogood.jpg";
import deaconMikeWood from "@/assets/deacon-mike-wood.jpg";
import deaconRobertMorales from "@/assets/deacon-robert-morales.jpg";
import deaconTomDeRivera from "@/assets/deacon-tom-de-rivera.jpg";
import elderJedTrott from "@/assets/elder-jed-trott.jpg";
import elderJoseNegron from "@/assets/elder-jose-negron.jpg";
import elderMikeDelVecchio from "@/assets/elder-mike-del-vecchio.jpg";
import elderTimBathurst from "@/assets/elder-tim-bathurst.jpg";
import gregSnow from "@/assets/greg-snow.jpg";
import sethCross from "@/assets/seth-cross.jpg";
import timBathurstStaff from "@/assets/tim-bathurst.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | New Life Philly" },
      {
        name: "description",
        content:
          "Meet the team of New Life Philly — everyday people with deep faith, committed to walking alongside you through the real stuff of life.",
      },
      { property: "og:title", content: "Meet Our Team | New Life Philly" },
      {
        property: "og:description",
        content:
          "Meet the team of New Life Philly — everyday people with deep faith, committed to walking alongside you through the real stuff of life.",
      },
      { property: "og:url", content: abs("/leadership") },
    ],
    links: [{ rel: "canonical", href: abs("/leadership") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Meet Our Team", "/leadership")),
      },
    ],
  }),
  component: LeadershipPage,
});

type TeamMember = {
  id: string;
  name: string;
  title: string;
  photo?: string;
  qa: { q: string; a: string }[];
};

const TEAM: TeamMember[] = [
  {
    id: "tim-bathurst",
    name: "Tim Bathurst",
    title: "Pastor of Spiritual Formation",
    photo: timBathurstStaff,
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

function NameCard({
  name,
  photoUrl,
  role,
}: {
  name: string;
  photoUrl?: string;
  role?: string;
}) {
  return (
    <div
      data-reveal
      className="rounded-[22px] bg-white p-5 text-center shadow-[0_12px_32px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
    >
      <div className="mx-auto flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full bg-mist">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-[11px] font-semibold text-body-faint md:text-[12px]">
            Photo coming soon
          </span>
        )}
      </div>
      <div className="mt-4 font-display text-[16px] font-bold text-navy md:text-[17px]">{name}</div>
      {role && <div className="mt-1 text-[15px] font-medium text-olive-dark">{role}</div>}
    </div>
  );
}

function LeadershipPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Leadership Hero */}
      <section className="relative flex h-[55vh] min-h-[320px] max-h-[580px] items-center justify-center bg-mist">
        <span className="absolute inset-0 flex items-center justify-center text-[15px] font-semibold text-body-faint">
          Photo coming soon
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/100 via-navy/90 to-navy/80" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center md:px-8">
          <h1 className="m-0 font-display text-[clamp(36px,5vw,64px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-white">
            Meet Our Team
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

          {/* The Session */}
          <div data-reveal className="mt-16 md:mt-20">
            <div className="eyebrow mb-5 text-center text-olive-dark">Our Shepherds</div>
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              The Session
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[18px] leading-[1.7] text-body">
              The Session — our teaching and ruling elders — is New Life Philly's governing
              authority. They set policy and budget, hire and shepherd our staff, and walk alongside
              our congregation.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Tim Bathurst", photoUrl: elderTimBathurst, role: "Teaching Elder" },
                { name: "Mike Del Vecchio", photoUrl: elderMikeDelVecchio, role: "Ruling Elder" },
                { name: "Jose Negron", photoUrl: elderJoseNegron, role: "Ruling Elder" },
                { name: "Jed Trott", photoUrl: elderJedTrott, role: "Ruling Elder" },
              ].map((elder) => (
                <NameCard
                  key={elder.name}
                  name={elder.name}
                  photoUrl={elder.photoUrl}
                  role={elder.role}
                />
              ))}
            </div>
          </div>

          {/* Elder's Council */}
          <div data-reveal className="mt-20 md:mt-24">
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Elder's Council
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[18px] leading-[1.7] text-body">
              An advisory panel of congregation members. It advises the Session but does not hold
              governing authority.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {[
                "Pam Bryan",
                "Nes Espinosa",
                "Jacob Good",
                "Marissa Morales",
                "Christiana Ogunsami",
                "Dan Schafhauser",
              ].map((name) => (
                <NameCard key={name} name={name} />
              ))}
            </div>
          </div>

          {/* Our Servants (Deacons) */}
          <div data-reveal className="mt-20 md:mt-24">
            <div className="eyebrow mb-5 text-center text-olive-dark">Our Servants</div>
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Deacons
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[18px] leading-[1.7] text-body">
              Our Deacons offer practical, hands-on care — meeting real needs so no one walks through
              a hard season alone.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Tom de Rivera", photoUrl: deaconTomDeRivera },
                { name: "Jacob Good", photoUrl: deaconJacobGood },
                { name: "Eunice Kalbach", photoUrl: deaconEuniceKalbach },
                { name: "Darlene Holman", photoUrl: deaconDarleneHolman },
                { name: "Brian Mast", photoUrl: deaconBrianMast },
                { name: "Robert Morales, Sr.", photoUrl: deaconRobertMorales },
                { name: "Matt Theogood", photoUrl: deaconMattTheogood },
                { name: "Mike Wood", photoUrl: deaconMikeWood },
              ].map((deacon) => (
                <NameCard key={deacon.name} name={deacon.name} photoUrl={deacon.photoUrl} />
              ))}
            </div>
            <p className="mt-6 text-center text-[17px] leading-[1.55] text-body">
              <strong className="text-navy">Diaconal Assistant:</strong> Len Nicoletti
            </p>
          </div>

          {/* Our Staff */}
          <div className="mt-20 md:mt-24">
            <h2 className="m-0 text-center font-display text-[clamp(24px,2.5vw,32px)] leading-[1.15] font-bold tracking-[-0.012em] text-navy">
              Our Staff
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {TEAM.map((member) => (
                <NameCard key={member.id} name={member.name} role={member.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
