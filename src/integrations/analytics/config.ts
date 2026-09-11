/**
 * Configuração central de analytics.
 *
 * Nenhum ID está escrito no código. Defina as variáveis abaixo (.env / Vercel):
 *
 *   VITE_GTM_ID                    → Google Tag Manager (GTM-XXXXXXX)
 *   VITE_GA4_MEASUREMENT_ID        → Google Analytics 4 (G-XXXXXXXXXX)
 *   VITE_META_PIXEL_ID             → Meta Pixel
 *   VITE_META_DOMAIN_VERIFICATION  → Meta Business (verificação de domínio)
 *   VITE_GOOGLE_SITE_VERIFICATION  → Google Search Console
 *
 * Nomes antigos continuam a funcionar como fallback.
 */
const env = import.meta.env as Record<string, string | undefined>;

const pick = (...keys: string[]) => {
  for (const key of keys) {
    const value = env[key];
    if (value && value.trim()) return value.trim();
  }
  return "";
};

export const ANALYTICS_CONFIG = {
  gtmId: pick("VITE_GTM_ID", "VITE_GTM_CONTAINER_ID"),
  ga4Id: pick("VITE_GA4_MEASUREMENT_ID"),
  metaPixelId: pick("VITE_META_PIXEL_ID"),
  metaDomainVerification: pick(
    "VITE_META_DOMAIN_VERIFICATION",
    "VITE_FACEBOOK_DOMAIN_VERIFICATION",
  ),
  googleSiteVerification: pick("VITE_GOOGLE_SITE_VERIFICATION"),
} as const;

export type TrackingParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: unknown;
    };
    _fbq?: unknown;
  }
}

export const isBrowser = () => typeof window !== "undefined";

/** Injeta um <script> inline uma única vez (identificado por id). */
export function injectInlineScript(id: string, code: string) {
  if (!isBrowser() || document.getElementById(id)) return;
  const el = document.createElement("script");
  el.id = id;
  el.async = true;
  el.innerHTML = code;
  document.head.appendChild(el);
}

/** Injeta um <script src> assíncrono uma única vez. */
export function injectSrcScript(id: string, src: string) {
  if (!isBrowser() || document.getElementById(id)) return;
  const el = document.createElement("script");
  el.id = id;
  el.async = true;
  el.src = src;
  document.head.appendChild(el);
}
