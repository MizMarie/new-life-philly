import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BrushstrokeAccent } from "@/components/BrushstrokeAccent";
import { EMAIL, PHONE } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { abs, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "New Life Philly" },
      {
        name: "description",
        content:
          "New Life Philly's privacy policy: what information this site collects, how third-party tools like Planning Center and Stripe handle your data, and how to contact us.",
      },
      { property: "og:title", content: "Privacy Policy | New Life Philly" },
      {
        property: "og:description",
        content:
          "What information this site collects, how third-party tools handle your data, and how to reach us with questions.",
      },
      { property: "og:url", content: abs("/privacy") },
    ],
    links: [{ rel: "canonical", href: abs("/privacy") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("Privacy Policy", "/privacy")),
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white font-sans text-body">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-[140px]">
        <BrushstrokeAccent
          drift
          rotate={-10}
          opacity={0.16}
          className="absolute -bottom-[70px] -left-[120px] h-[300px] w-[760px] text-olive"
        />
        <div data-reveal className="relative mx-auto max-w-[860px] px-5 text-center md:px-8">
          <div className="eyebrow mb-5 text-olive-light">Legal</div>
          <h1 className="m-0 font-display text-[clamp(40px,5.4vw,72px)] leading-[1.03] font-extrabold tracking-[-0.024em] text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-20 md:py-[110px]">
        <div data-reveal className="mx-auto max-w-[720px] px-5 md:px-8">
          <div className="space-y-6 text-[18px] leading-[1.72] text-body">
            <p>
              This website doesn't collect any personal information directly. It's here to tell you
              about New Life Philly, not to gather your data.
            </p>
            <p>
              When you fill out a form, give online, or sign up for something, you're doing that
              through Planning Center (our church management system) or Stripe (our payment
              processor), not through this website. Those tools have their own privacy policies,
              which you can read here:{" "}
              <a
                href="https://www.planningcenter.com/congregant-privacy"
                target="_blank"
                rel="noopener"
                className="text-olive-dark no-underline transition-colors hover:underline"
              >
                Planning Center Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener"
                className="text-olive-dark no-underline transition-colors hover:underline"
              >
                Stripe Privacy Policy
              </a>
              .
            </p>
            <p>This site doesn't use tracking cookies or analytics.</p>
            <p>
              If you have questions about your information, reach out to us directly at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-olive-dark no-underline transition-colors hover:underline"
              >
                {EMAIL}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="text-olive-dark no-underline transition-colors hover:underline"
              >
                {PHONE}
              </a>
              .
            </p>
          </div>
          <p className="mt-12 text-sm text-body-faint">Last updated: September 2026</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
