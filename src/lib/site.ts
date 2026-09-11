import { trackEvent } from "@/integrations/analytics";

export const SITE = {
  name: "Studio Riso Souza",
  professional: "Riso Souza",
  tagline: "Estúdio de estética premium feminina em Almada",
  phoneDisplay: "+351 967 042 938",
  phoneRaw: "+351967042938",
  whatsapp: "351967042938",
  email: "contacto@studiorisosouza.pt",
  instagram: "https://instagram.com/eusouriso",
  instagramHandle: "@eusouriso",
  tiktok: "https://tiktok.com/@eusouriso",
  address: {
    street: "Rua Torcato José Clavine 17D, Cave Esquerda",
    postal: "2800-710",
    city: "Almada",
    region: "Setúbal",
    country: "Portugal",
  },
  addressFull:
    "Rua Torcato José Clavine 17D, Cave Esquerda, 2800-710 Almada, Portugal",
  landmarks: ["SMAS Almada", "AIPICA", "Rotunda dos Bancos de Almada"],
  hours: [
    { day: "Segunda a sexta", time: "09:00 às 19:00" },
    { day: "Sábado", time: "Atendimento sob consulta" },
    { day: "Domingo", time: "Encerrado" },
  ],
  /** Agência responsável pelo site — editar aqui o Instagram oficial. */
  agency: {
    name: "Wavy Labs Performance",
    instagram: "https://www.instagram.com/wavylabsperformance",
  },
} as const;

export const mapsQuery = encodeURIComponent(SITE.addressFull);
export const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Olá, Riso! Vim pelo site e gostaria de reservar o meu momento de autocuidado.",
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

type TrackPayload = Record<string, string | number | boolean | undefined>;

/**
 * Camada única de rastreamento — GTM / GA4 / Meta Pixel.
 * Delegada a src/integrations/analytics (sem IDs no código).
 */
export function track(event: string, payload: TrackPayload = {}) {
  trackEvent(event, payload);
}

