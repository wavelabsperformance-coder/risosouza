import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpeg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { MapSection } from "@/components/MapSection";
import { differentials } from "@/lib/content";
import { ImageCarousel } from "@/components/ImageCarousel";
import { CalendarCheck, HeartHandshake, Hourglass, Sparkles } from "lucide-react";
import studioHero from "@/assets/studio.jpg";
import studioAmbiente from "@/assets/studio-ambiente.jpg";
import risoEspaco from "@/assets/riso-espaco.jpg";

// Imagens verticais para o carrossel no Mobile
import mobile1 from "@/assets/1.jpeg";
import mobile2 from "@/assets/2.jpeg";
import mobile3 from "@/assets/3.jpeg";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "O Studio | Studio Riso Souza — Almada" },
      {
        name: "description",
        content:
          "Um espaço pensado para receber cada mulher com calma, atenção, exclusividade e respeito. Conheça o Studio Riso Souza, em Almada.",
      },
      { property: "og:title", content: "O Studio | Studio Riso Souza" },
      {
        property: "og:description",
        content:
          "Um ambiente para cuidar da beleza sem pressa, com privacidade e acolhimento, em Almada.",
      },
      { property: "og:url", content: "/studio" },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
  }),
  component: Studio,
});

function Studio() {
  return (
    <>
      <PageHero
        image={studioHero}
        imageAlt="Ambiente do Studio Riso Souza em Almada"
        eyebrow="Sobre o Studio"
        crumbs={[{ label: "O Studio" }]}
        title={
          <>
            “Como eu gostaria
            <br />
            de ser <span className="gold-text italic font-medium">atendida</span>?”
          </>
        }
        intro="O Studio Riso Souza nasceu de uma pergunta simples — e de uma resposta cuidada em cada detalhe."
      />

      <section className="mx-auto max-w-[1180px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-14">
          <Reveal>
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-primary" />
              <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                O nosso espaço
              </p>
            </div>

            {/* TÍTULO PRINCIPAL */}
            <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18] drop-shadow-sm">
              Um lugar pensado para
              <br />
              <span className="gold-text italic font-medium">a receber</span>
            </h2>

            {/* FOTO LOGO ABAIXO DO TÍTULO (SEM CORTES EM NENHUM DISPOSITIVO) */}
            <div className="relative mt-10 overflow-hidden border border-primary/25 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)]">
              <img
                src={risoEspaco}
                alt="Riso Souza no espaço do Studio em Almada"
                width={1280}
                height={1920}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* GRID DE CARDS */}
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Calma e exclusividade",
                  text: "O objetivo sempre foi criar um espaço onde cada mulher fosse recebida com calma, atenção, exclusividade e respeito.",
                },
                {
                  icon: Hourglass,
                  title: "Beleza sem pressa",
                  text: "Um ambiente pensado para cuidar da beleza sem pressa, proporcionando uma experiência completa de autocuidado.",
                },
                {
                  icon: HeartHandshake,
                  title: "Mais do que estética",
                  text: "Mais do que realizar procedimentos estéticos, o Studio entrega acolhimento, confiança e valorização pessoal.",
                },
                {
                  icon: CalendarCheck,
                  title: "O seu tempo",
                  text: "Aqui, o tempo do atendimento é o seu tempo — sem sobreposições e sem interrupções.",
                },
              ].map(({ icon: Icon, ...b }) => (
                <div
                  key={b.title}
                  className="dark-block group flex flex-col justify-between border border-primary/20 p-6 sm:p-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-primary/50"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center border border-primary/35 text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                    </div>

                    <h3 className="mt-6 font-display text-xl leading-snug font-normal text-foreground">
                      {b.title}
                    </h3>
                    <div className="mt-3.5 h-px w-8 bg-primary/45 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BLOCO MAIS INFORMAÇÕES */}
            <div className="dark-block mt-12 border border-primary/20 p-7 sm:p-10 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.95)]">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-primary" />
                <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                  Mais informações
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-primary/50" />
              <ul className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                {differentials.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 border-b border-border/70 pb-3.5 text-sm text-foreground/90 transition-colors hover:text-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARROSSEL NO DESKTOP: 2 IMAGENS HORIZONTAIS */}
      <section className="hidden border-t border-border md:block">
        <Reveal>
          <ImageCarousel
            items={[
              { src: studioAmbiente, alt: "Ambiente Studio Riso Souza", label: "" },
              { src: heroImg, alt: "Atendimento Studio Riso Souza", label: "" },
            ]}
          />
        </Reveal>
      </section>

      {/* CARROSSEL NO MOBILE: 3 IMAGENS VERTICAIS */}
      <section className="block border-t border-border md:hidden">
        <Reveal>
          <ImageCarousel
            items={[
              { src: mobile1, alt: "Espaço Studio Riso Souza 1", label: "" },
              { src: mobile2, alt: "Espaço Studio Riso Souza 2", label: "" },
              { src: mobile3, alt: "Espaço Studio Riso Souza 3", label: "" },
            ]}
          />
        </Reveal>
      </section>

      <CtaBanner
        eyebrow="O seu tempo"
        title="Um espaço reservado, sem pressa, dedicado inteiramente a si."
      />

      <MapSection />
    </>
  );
}