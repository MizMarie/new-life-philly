import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { IS_STAGING_PREVIEW } from "../lib/site-content";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-sage py-24 md:py-[110px]">
          <div className="mx-auto max-w-[760px] px-5 text-center md:px-8">
            <h1 className="m-0 font-display text-[clamp(40px,5.4vw,72px)] leading-[1.03] font-extrabold tracking-[-0.024em] text-navy">
              404: Lost, but not alone.
            </h1>
            <p className="mx-auto mt-7 mb-0 max-w-[50ch] text-[19px] leading-[1.65] text-body-soft">
              Turns out even our website needs a little grace sometimes. This page isn't where you
              left it, but we are, right here, Sundays at 10am.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/"
                className="pill bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-[38px]"
              >
                Take Me Home
              </Link>
              <Link
                to="/plan-your-visit"
                className="pill border-[1.5px] border-navy/55 bg-transparent px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-navy/10 md:px-[34px]"
              >
                Plan Your Visit
              </Link>
            </div>
            <div className="mt-14">
              <p className="m-0 font-display text-[13px] font-bold tracking-[0.08em] text-body-faint uppercase">
                You might be looking for
              </p>
              <nav className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[16px]">
                <Link
                  to="/what-we-believe"
                  className="text-navy no-underline transition-colors hover:text-olive-dark"
                >
                  What We Believe
                </Link>
                <Link
                  to="/leadership"
                  className="text-navy no-underline transition-colors hover:text-olive-dark"
                >
                  Meet Our Team
                </Link>
                <Link
                  to="/sermons"
                  className="text-navy no-underline transition-colors hover:text-olive-dark"
                >
                  Sermons
                </Link>
                <Link
                  to="/next-steps"
                  className="text-navy no-underline transition-colors hover:text-olive-dark"
                >
                  Next Steps
                </Link>
                <Link
                  to="/plan-your-visit"
                  className="text-navy no-underline transition-colors hover:text-olive-dark"
                >
                  Plan Your Visit
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-sage py-24 md:py-[110px]">
          <div className="mx-auto max-w-[760px] px-5 text-center md:px-8">
            <h1 className="m-0 font-display text-[clamp(40px,5.4vw,72px)] leading-[1.03] font-extrabold tracking-[-0.024em] text-navy">
              That one's on us.
            </h1>
            <p className="mx-auto mt-7 mb-0 max-w-[50ch] text-[19px] leading-[1.65] text-body-soft">
              Something didn't load right, promise it's not a sign. Try again, or just head home,
              either way we're glad you're here.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <button
                onClick={() => {
                  router.invalidate();
                  reset();
                }}
                className="pill cursor-pointer bg-olive px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-olive-light md:px-[38px]"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="pill border-[1.5px] border-navy/55 bg-transparent px-8 py-[19px] text-[15px] text-navy no-underline hover:bg-navy/10 md:px-[34px]"
              >
                Take Me Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const meta = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "New Life Philly" },
      {
        name: "description",
        content:
          "New Life Philly is a non-denominational church in Olney, North Philadelphia. Sundays at 10am. Real people. Real love. Real hope.",
      },
      { name: "author", content: "New Life Philly Church" },
      { property: "og:site_name", content: "New Life Philly" },
      { property: "og:title", content: "New Life Philly | Church in Olney, Philadelphia" },
      {
        property: "og:description",
        content:
          "Our greatest hope is that you find your way to Jesus. We're simply here to walk alongside you at whatever pace you need.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ];

    if (IS_STAGING_PREVIEW) {
      meta.push({ name: "robots", content: "noindex, nofollow" });
    }

    return {
      meta,
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    };
  },

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
