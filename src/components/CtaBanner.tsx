import { track, whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function CtaBanner({
  eyebrow = "Reserve o seu momento",
  title = "Toda mulher merece sentir-se bonita, segura e valorizada.",
  message,
}: {
  eyebrow?: string;
  title?: string;
  message?: string;
}) {
  return (
    <section className="dark-block border-y border-border">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.15] font-light md:text-5xl">
            {title}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("clique_whatsapp", { local: "cta_banner" })}
              className="bg-primary px-9 py-4 text-[0.68rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="/contato"
              className="border border-border px-9 py-4 text-[0.68rem] tracking-[0.24em] text-foreground/80 uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Reserve seu momento de autocuidado
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
