import {
  ANALYTICS_CONFIG,
  injectInlineScript,
  isBrowser,
  type TrackingParams,
} from "./config";

let loaded = false;

/** Carrega o contentor do GTM apenas quando existir VITE_GTM_ID. */
export function initGtm() {
  if (!isBrowser() || loaded) return;
  window.dataLayer = window.dataLayer ?? [];
  if (!ANALYTICS_CONFIG.gtmId) return;
  loaded = true;
  injectInlineScript(
    "gtm-init",
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${ANALYTICS_CONFIG.gtmId}');`,
  );
}

/**
 * Ponto único de envio para o dataLayer.
 * Funciona mesmo sem GTM configurado (a fila fica disponível para o futuro).
 */
export function pushToDataLayer(eventName: string, params: TrackingParams = {}) {
  if (!isBrowser()) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: eventName, ...params });
}
