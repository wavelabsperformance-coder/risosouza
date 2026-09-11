import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { MapSection } from "@/components/MapSection";
import { Testimonials } from "@/components/Testimonials";
import { services } from "@/lib/services";
import { SITE, track, whatsappLink } from "@/lib/site";
import contatoHero from "@/assets/hero-recepcao.jpg";
import risoImg from "@/assets/riso.jpg";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contacto e Marcações | Studio Riso Souza — Almada" },
      {
        name: "description",
        content:
          "Marque o seu atendimento no Studio Riso Souza, em Almada. WhatsApp +351 967 042 938, Rua Torcato José Clavine 17D, Cave Esquerda.",
      },
      { property: "og:title", content: "Contacto | Studio Riso Souza" },
      {
        property: "og:description",
        content: "Reserve o seu momento de autocuidado em Almada.",
      },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [multiplos, setMultiplos] = useState("nao");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "");
    const telefone = String(data.get("telefone") ?? "");
    const servico = String(data.get("servico") ?? "");
    const horario = String(data.get("horario") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    track("envio_formulario", { servico });

    const texto = [
      `Olá, Riso! Sou ${nome}.`,
      `Telefone: ${telefone}`,
      `Serviço desejado: ${servico}`,
      `Deseja mais de um serviço: ${multiplos === "sim" ? "Sim" : "Não"}`,
      `Preferência de horário: ${horario || "Sem preferência"}`,
      mensagem ? `Mensagem: ${mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    toast.success("A abrir o WhatsApp para concluir a sua marcação…");
    window.open(whatsappLink(texto), "_blank", "noopener");
  }

  return (
    <>
      <Toaster />
      <PageHero
        image={contatoHero}
        imageAlt="Receção do Studio Riso Souza"
        eyebrow="Contacto"
        crumbs={[{ label: "Contacto" }]}
        title={
          <>
            Reserve o seu momento
            <br />
            de <span className="gold-text italic">autocuidado</span>
          </>
        }
        intro="O atendimento é realizado somente com horário marcado. Preencha o formulário ou fale diretamente pelo WhatsApp."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="dark-block space-y-7 border border-primary/15 p-7 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] sm:p-10"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="Telefone" name="telefone" type="tel" required />
              </div>

              <div>
                <label htmlFor="servico" className="eyebrow">
                  Serviço desejado
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  className="mt-3 w-full border-b border-input bg-transparent py-3 text-sm outline-none focus:border-primary"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.name} className="bg-card">
                      {s.name}
                    </option>
                  ))}
                  <option value="Outro" className="bg-card">
                    Outro / Ainda não sei
                  </option>
                </select>
              </div>

              <fieldset>
                <legend className="eyebrow">
                  Deseja realizar mais de um serviço?
                </legend>
                <div className="mt-4 flex gap-3">
                  {[
                    { v: "sim", l: "Sim" },
                    { v: "nao", l: "Não" },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setMultiplos(opt.v)}
                      className={`border px-7 py-3 text-[0.65rem] tracking-[0.22em] uppercase transition-colors ${
                        multiplos === opt.v
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-primary"
                      }`}
                    >
                      {opt.l}
                    </button>
                  ))}
                </div>
              </fieldset>

              <Field
                label="Preferência de horário"
                name="horario"
                placeholder="Ex.: manhãs de terça-feira"
              />

              <div>
                <label htmlFor="mensagem" className="eyebrow">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-input bg-transparent py-3 text-sm outline-none focus:border-primary"
                  placeholder="Conte-nos o que procura"
                />
              </div>

              <button
                type="submit"
                onClick={() => track("clique_formulario")}
                className="w-full bg-primary px-9 py-4 text-[0.68rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90 sm:w-auto"
              >
                Enviar e agendar pelo WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="dark-block border border-primary/15 p-9 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)]">
              <h2 className="font-display text-2xl font-light">
                Informações de atendimento
              </h2>
              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MessageCircle size={17} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">WhatsApp</p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        track("clique_whatsapp", { local: "pagina_contacto" })
                      }
                      className="mt-1 block text-muted-foreground hover:text-primary"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone size={17} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">Telefone</p>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      onClick={() => track("clique_telefone")}
                      className="mt-1 block text-muted-foreground hover:text-primary"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Instagram size={17} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">Instagram</p>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        track("clique_instagram", { local: "pagina_contacto" })
                      }
                      className="mt-1 block text-muted-foreground hover:text-primary"
                    >
                      {SITE.instagramHandle}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Music2 size={17} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">TikTok</p>
                    <a
                      href={SITE.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-muted-foreground hover:text-primary"
                    >
                      @eusouriso · @risosouza
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail size={17} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">E-mail</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block text-muted-foreground hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">Morada</p>
                    <p className="mt-1 text-muted-foreground">
                      {SITE.address.street}
                      <br />
                      {SITE.address.postal} {SITE.address.city},{" "}
                      {SITE.address.country}
                    </p>
                    <p className="mt-2 text-primary">
                      Localizado na Cave Esquerda.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="hairline my-8" />

              <p className="eyebrow">Horário</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-foreground/80">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RISO SOUZA */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -inset-3 border border-primary/25"
                aria-hidden
              />
              <img
                src={risoImg}
                alt="Riso Souza, fundadora do Studio Riso Souza"
                width={1104}
                height={1408}
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="dark-block border border-primary/15 p-8 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] sm:p-11">
              <p className="eyebrow">Quem a recebe</p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-light md:text-5xl">
                Riso <span className="gold-text italic">Souza</span>
              </h2>
              <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                {SITE.tagline}. Cada atendimento é conduzido pessoalmente, com
                calma, privacidade e atenção ao detalhe.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  track("clique_whatsapp", { local: "contacto_riso" })
                }
                className="mt-9 inline-flex items-center bg-primary px-8 py-4 text-[0.68rem] tracking-[0.24em] text-primary-foreground uppercase"
              >
                Falar com a Riso
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow">Avaliações</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl">
              Quem já passou pelo Studio
            </h2>
          </Reveal>
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      <MapSection />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-input bg-transparent py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
