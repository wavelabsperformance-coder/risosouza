import { ANALYTICS_CONFIG, isBrowser, type TrackingParams } from "./config";
import { initGtm, pushToDataLayer } from "./gtm";
import { ga4Event, ga4PageView, initGa4 } from "./ga4";
import { initMetaPixel, metaPageView, trackMetaEvent } from "./metaPixel";
import { LEGACY_EVENT_MAP, META_EVENT_MAP, normalizeParams } from "./events";

export { ANALYTICS_CONFIG, EVENTS_READY };
export * from "./events";

const EVENTS_READY = true;

let initialised = false;

/** Carrega GTM, GA4 e Meta Pixel — apenas os que tiverem ID configurado. */
export function initAnalytics() {
  if (!isBrowser() || initialised) return;
  initialised = true;
  initGtm();
  initGa4();
  initMetaPixel();
}

/** Page view manual (SPA). */
export function trackPageView(path: string) {
  if (!isBrowser()) return;
  pushToDataLayer("page_view", { page_path: path });
  ga4PageView(path);
  metaPageView();
}

/** Ponto único de rastreamento — GTM + GA4 + Meta Pixel. */
export function trackEvent(event: string, params: TrackingParams = {}) {
  if (!isBrowser()) return;
  const name = LEGACY_EVENT_MAP[event] ?? event;
  const payload = normalizeParams(params);

  pushToDataLayer(name, payload);
  ga4Event(name, payload);
  trackMetaEvent(META_EVENT_MAP[name] ?? name, payload);
}
