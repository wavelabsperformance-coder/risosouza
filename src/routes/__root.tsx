import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LocaleProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import {
  ANALYTICS_CONFIG,
  initAnalytics,
  trackPageView,
} from "@/integrations/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-4 font-display text-5xl font-light">
          Página não encontrada
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-[0.68rem] tracking-[0.24em] text-primary-foreground uppercase"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-light">
          Esta página não carregou
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ocorreu um problema. Pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-primary px-8 py-4 text-[0.68rem] tracking-[0.24em] text-primary-foreground uppercase"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-border px-8 py-4 text-[0.68rem] tracking-[0.24em] uppercase"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Studio Riso Souza | Estética Premium em Almada" },
      {
        name: "description",
        content:
          "Studio de estética premium feminina em Almada. Unhas, lash design, sobrancelhas, pedicure medical e depilação com atendimento exclusivo.",
      },
      { name: "author", content: SITE.professional },
      { name: "theme-color", content: "#0d0d0c" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:card", content: "summary_large_image" },
      // Meta Business — verificação de domínio (VITE_FACEBOOK_DOMAIN_VERIFICATION)
      ...(ANALYTICS_CONFIG.metaDomainVerification
        ? [
            {
              name: "facebook-domain-verification",
              content: ANALYTICS_CONFIG.metaDomainVerification,
            },
          ]
        : []),
      // Google Search Console (VITE_GOOGLE_SITE_VERIFICATION)
      ...(ANALYTICS_CONFIG.googleSiteVerification
        ? [
            {
              name: "google-site-verification",
              content: ANALYTICS_CONFIG.googleSiteVerification,
            },
          ]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#organization",
              name: SITE.name,
              founder: { "@type": "Person", name: SITE.professional },
              telephone: SITE.phoneDisplay,
              email: SITE.email,
              sameAs: [SITE.instagram, SITE.tiktok],
            },
            {
              "@type": "BeautySalon",
              "@id": "#localbusiness",
              name: SITE.name,
              description:
                "Estúdio de estética premium feminina em Almada: unhas em gel, pedicure medical, lash design, sobrancelhas e depilação.",
              telephone: SITE.phoneDisplay,
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                postalCode: SITE.address.postal,
                addressLocality: SITE.address.city,
                addressRegion: SITE.address.region,
                addressCountry: "PT",
              },
              areaServed: ["Almada", "Margem Sul", "Setúbal", "Portugal"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              sameAs: [SITE.instagram, SITE.tiktok],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT">
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
  const router = useRouter();

  useEffect(() => {
    initAnalytics();
    trackPageView(window.location.pathname);
    return router.subscribe("onResolved", () => {
      trackPageView(window.location.pathname);
    });
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <Header />
        <main className="min-h-screen">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </LocaleProvider>
    </QueryClientProvider>
  );
}

