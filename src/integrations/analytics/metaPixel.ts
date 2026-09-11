import {
  ANALYTICS_CONFIG,
  injectInlineScript,
  isBrowser,
  type TrackingParams,
} from "./config";

let loaded = false;

/** Eventos padrão do Meta — tudo o resto segue como evento personalizado. */
const STANDARD_EVENTS = new Set([
  "PageView",
  "Contact",
  "Lead",
  "Schedule",
  "CompleteRegistration",
  "ViewContent",
  "Search",
  "InitiateCheckout",
  "Purchase",
]);

/** Carrega o Meta Pixel apenas quando existir VITE_META_PIXEL_ID. */
export function initMetaPixel() {
  if (!isBrowser() || loaded || !ANALYTICS_CONFIG.metaPixelId) return;
  loaded = true;
  injectInlineScript(
    "meta-pixel-init",
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${ANALYTICS_CONFIG.metaPixelId}');`,
  );
}

/** Envia um evento ao Meta (padrão ou personalizado, conforme o nome). */
export function trackMetaEvent(eventName: string, params: TrackingParams = {}) {
  if (!isBrowser() || !ANALYTICS_CONFIG.metaPixelId) return;
  const method = STANDARD_EVENTS.has(eventName) ? "track" : "trackCustom";
  window.fbq?.(method, eventName, params);
}

export function metaPageView() {
  trackMetaEvent("PageView");
}
