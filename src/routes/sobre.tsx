import { createFileRoute } from "@tanstack/react-router";
import risoImg from "@/assets/riso.jpg";
import risoRetrato from "@/assets/riso-retrato.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Award, HeartPulse, MapPin, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Riso Souza — História e Trajetória | Studio Riso Souza" },
      {
        name: "description",
        content:
          "Conheça Riso Souza: empreendedora, mentora e especialista em autoestima feminina. Mais de 12 anos dedicados à beleza, hoje em Almada, Portugal.",
      },
      {
        property: "og:title",
        content: "Riso Souza — História e Trajetória",
      },
      {
        property: "og:description",
        content:
          "De Aracaju a Almada: a trajetória de uma mulher que recomeçou e faz da beleza um caminho de autoestima.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const timelineIcons = [MapPin, Users, HeartPulse, Award, Sparkles];

const timeline = [
  {
    title: "Aracaju, Sergipe",
    text: "O início de tudo. Uma trajetória marcada desde cedo pelo desejo de transformar vidas através do cuidado e do desenvolvimento humano.",
  },
  {
    title: "Beleza, liderança e eventos",
    text: "Atuação como gestora de equipas, cerimonialista, empresária, mentora, palestrante e criadora de conteúdo digital.",
  },
  {
    title: "A transformação pessoal",
    text: "Após uma cirurgia bariátrica, eliminou mais de 47 kg — uma mudança profunda de saúde, autoestima e qualidade de vida.",
  },
  {
    title: "Almada, Portugal",
    text: "Uma nova vida do outro lado do Atlântico e a construção de uma comunidade baseada em confiança e autenticidade.",
  },
  {
    title: "Studio Riso Souza",
    text: "O espaço onde a filosofia de sempre ganha forma: cada atendimento é uma oportunidade de fortalecer a autoestima de cada mulher.",
  },
];

function Sobre() {
  return (
    <>
      <PageHero
        image={risoImg}
        imageAlt="Riso Souza, fundadora do Studio"
        eyebrow="A profissional"
        crumbs={[{ label: "Riso Souza" }]}
        title={
          <>
            A história de uma mulher
            <br />
            que <span className="gold-text italic font-medium">recomeçou</span>
          </>
        }
        intro="Riso Souza é empreendedora, palestrante, mentora, criadora de conteúdo digital e especialista em autoestima feminina."
      />

      {/* SEÇÃO PRINCIPAL / BIOGRAFIA */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* RETRATO COM EFEITO DE MOLDURA SUAVE */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-sm border border-primary/25 sm:-inset-3" />
                <div className="dark-block relative overflow-hidden border border-primary/30 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)]">
                  <img
                    src={risoRetrato}
                    alt="Retrato de Riso Souza"
                    width={1280}
                    height={1920}
                    loading="lazy"
                    className="aspect-[4/5] max-h-[540px] w-full object-cover object-top sm:max-h-[620px] lg:max-h-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* CONTEÚDO E CARDS */}
          <div className="flex flex-col lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-primary" />
                <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                  A profissional
                </p>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18] drop-shadow-sm">
                Autoestima como <span className="gold-text italic font-medium">propósito</span>
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {[
                  {
                    title: "Origem",
                    text: "Riso Souza nasceu em Aracaju, Sergipe, e atualmente vive em Almada, Portugal. A sua trajetória sempre foi marcada pelo desejo de transformar vidas através da autoestima, do cuidado e do desenvolvimento humano.",
                  },
                  {
                    title: "Experiência",
                    text: "São mais de 12 anos em áreas ligadas à beleza, ao atendimento ao público, à liderança e à construção de marcas pessoais. Antes de criar o Studio Riso Souza, atuou como gestora de equipas, cerimonialista, empresária, mentora, palestrante e criadora de conteúdo digital.",
                  },
                  {
                    title: "Transformação pessoal",
                    text: "Após uma cirurgia bariátrica, eliminou mais de 47 kg, vivendo uma profunda mudança relacionada com a saúde, a autoestima e a qualidade de vida. Essa experiência fortaleceu o seu propósito: mostrar que toda mulher pode florescer, independentemente da idade ou da fase da vida.",
                  },
                  {
                    title: "Comunidade",
                    text: "Ao longo dos anos construiu uma comunidade baseada em confiança, autenticidade e transformação. Hoje leva essa mesma filosofia para o Studio Riso Souza, acreditando que cada atendimento é uma oportunidade de fortalecer a autoestima e revelar a melhor versão de cada mulher.",
                  },
                ].map((bloco) => (
                  <div
                    key={bloco.title}
                    className="dark-block group flex flex-col justify-between border border-primary/20 p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-primary/50 sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-[0.7rem] tracking-[0.22em] font-medium text-primary uppercase">
                          {bloco.title}
                        </h3>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                      </div>
                      <div className="mt-3 h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-14 group-hover:bg-primary/80" />
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {bloco.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CITAÇÃO DESTACADA */}
              <div className="dark-block relative mt-8 overflow-hidden border border-primary/30 p-7 sm:mt-10 sm:p-9 shadow-[0_24px_60px_-35px_rgba(0,0,0,0.9)]">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/20" />
                <blockquote className="font-display text-xl leading-relaxed font-normal text-foreground italic sm:text-2xl">
                  “Florescer não tem idade. Toda mulher merece sentir-se bonita, segura e valorizada.”
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO DA TRAJETÓRIA / TIMELINE */}
      <section className="border-t border-border/80 bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <Reveal>
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-primary" />
                <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                  Trajetória
                </p>
              </div>
              <h2 className="max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18] drop-shadow-sm">
                Cada etapa construiu o Studio de hoje
              </h2>
            </div>
          </Reveal>

          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {timeline.map((t, i) => {
              const Icon = timelineIcons[i] ?? Sparkles;
              return (
                <Reveal key={t.title} delay={i * 0.05}>
                  <li className="dark-block group relative flex h-full flex-col justify-between border border-primary/20 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-primary/50 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center border border-primary/35 text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10">
                          <Icon size={18} strokeWidth={1.5} />
                        </span>
                        <span className="font-display text-2xl font-normal text-muted-foreground/35">
                          0{i + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-lg leading-snug font-normal text-foreground sm:text-xl">
                        {t.title}
                      </h3>
                      <div className="mt-3.5 h-px w-8 bg-primary/45 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {t.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBanner
        eyebrow="Propósito"
        title="Elevar a autoestima, fortalecer a confiança e proporcionar bem-estar."
      />
    </>
  );
}