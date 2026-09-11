/** Catálogo de eventos suportados e mapeamentos auxiliares. */
export const EVENTS = {
  pageView: "page_view",
  whatsappClick: "whatsapp_click",
  phoneClick: "phone_click",
  socialClick: "social_click",
  ctaClick: "cta_click",
  contact: "contact",
  formStart: "form_start",
  formSubmit: "form_submit",
  lead: "lead",
  galleryView: "gallery_view",
  locationClick: "location_click",
} as const;

/** Equivalência com os eventos padrão do Meta (quando existe um). */
export const META_EVENT_MAP: Record<string, string> = {
  page_view: "PageView",
  whatsapp_click: "Contact",
  phone_click: "Contact",
  contact: "Contact",
  form_submit: "Lead",
  lead: "Lead",
};

/**
 * Nomes antigos usados no site → nomes normalizados.
 * Mantém o comportamento existente sem duplicar eventos.
 */
export const LEGACY_EVENT_MAP: Record<string, string> = {
  clique_whatsapp: EVENTS.whatsappClick,
  clique_telefone: EVENTS.phoneClick,
  clique_instagram: EVENTS.socialClick,
  clique_formulario: EVENTS.formStart,
  envio_formulario: EVENTS.formSubmit,
  selecao_categoria_servico: EVENTS.ctaClick,
  visualizacao_galeria: EVENTS.galleryView,
  clique_localizacao: EVENTS.locationClick,
};

/** Parâmetros antigos (`local`) → parâmetros normalizados. */
export function normalizeParams(
  params: Record<string, string | number | boolean | undefined>,
) {
  const { local, ...rest } = params;
  return local === undefined ? rest : { button_location: local, ...rest };
}
