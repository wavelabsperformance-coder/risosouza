import { track, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

/** Botão flutuante do WhatsApp — usa o número já configurado em SITE. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      onClick={() => track("clique_whatsapp", { local: "botao_flutuante" })}
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
      }}
      className="fixed z-50 grid h-14 w-14 place-items-center rounded-full bg-onyx text-cream shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] ring-1 ring-primary/50 transition-transform duration-300 hover:scale-105"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-primary/25 [animation-duration:2.8s]"
      />
      <WhatsAppIcon size={26} className="relative text-primary" />
    </a>
  );
}
