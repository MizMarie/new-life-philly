import { ADDRESS_1, ADDRESS_2, EMAIL, PHONE, YOUTUBE_URL } from "@/lib/site-content";

export const SITE_URL = "https://new-life-philly.lovable.app";

export const abs = (path: string) => `${SITE_URL}${path}`;

export const CHURCH_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": `${SITE_URL}/#church`,
  name: "New Life Philly",
  alternateName: "New Life Philly Church",
  description:
    "A non-denominational church in the Olney section of North Philadelphia. Sundays at 10am — real people, real love, real hope.",
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_1,
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    postalCode: "19120",
    addressCountry: "US",
  },
  areaServed: ["Olney, Philadelphia", "North Philadelphia", "Philadelphia, PA"],
  geo: { "@type": "GeoCoordinates", latitude: 40.0289, longitude: -75.1235 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "11:30",
    },
  ],
  event: {
    "@type": "Event",
    name: "Sunday Worship Gathering",
    startDate: "2026-01-04T10:00:00-05:00",
    eventSchedule: {
      "@type": "Schedule",
      byDay: "https://schema.org/Sunday",
      startTime: "10:00",
      repeatFrequency: "P1W",
    },
    location: {
      "@type": "Place",
      name: "New Life Philly",
      address: `${ADDRESS_1}, ${ADDRESS_2}`,
    },
  },
  sameAs: [
    YOUTUBE_URL,
    "https://facebook.com/NewLifePhilly/",
    "https://instagram.com/newlifephilly/",
  ],
};

export const breadcrumbJsonLd = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
    { "@type": "ListItem", position: 2, name, item: abs(path) },
  ],
});

export const faqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
