import {
  ANALYTICS_CONFIG,
  injectInlineScript,
  injectSrcScript,
  isBrowser,
  type TrackingParams,
} from "./config";

let loaded = false;

/** Carrega o gtag.js apenas quando existir VITE_GA4_MEASUREMENT_ID. */
export function initGa4() {
  if (!isBrowser() || loaded || !ANALYTICS_CONFIG.ga4Id) return;
  loaded = true;

  injectSrcScript(
    "ga4-src",
    `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4Id}`,
  );
  injectInlineScript(
    "ga4-init",
    `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ANALYTICS_CONFIG.ga4Id}',{send_page_view:false});`,
  );
}

/** page_view manual (SPA): o carregamento inicial e cada rota passam por aqui. */
export function ga4PageView(path: string) {
  if (!isBrowser() || !ANALYTICS_CONFIG.ga4Id) return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function ga4Event(eventName: string, params: TrackingParams = {}) {
  if (!isBrowser() || !ANALYTICS_CONFIG.ga4Id) return;
  window.gtag?.("event", eventName, params);
}
