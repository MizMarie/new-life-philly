import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { IS_STAGING_PREVIEW } from "@/lib/site-content";

const STAGING_ROBOTS = `User-agent: *
Disallow: /`;

const PRODUCTION_ROBOTS = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://new-life-philly.lovable.app/sitemap.xml`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(IS_STAGING_PREVIEW ? STAGING_ROBOTS : PRODUCTION_ROBOTS, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
