import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  Flower2,
  Gem,
  Heart,
  HeartHandshake,
  Lock,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const processIcons = [MessageCircle, Gem, CalendarCheck, Flower2, Sparkles];

import heroImg from "@/assets/hero.jpeg";
import studioImg from "@/assets/studio.jpg";
import risoRetrato from "@/assets/riso-retrato.jpg";
import risoPro from "@/assets/riso-hero.jpg";
import vernizgelImg from "@/assets/cat-maos.jpg";
import femininoImg from "@/assets/service-nails.jpg";
import masculinoImg from "@/assets/cuidados-masculinos.jpg";

import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { MapSection } from "@/components/MapSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Lightbox, useLightbox } from "@/components/Lightbox";
import { processSteps } from "@/lib/content";
import { track, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Riso Souza | Estúdio de Estética em Almada" },
      {
        name: "description",
        content:
          "Estúdio de estética premium feminina em Almada. Alongamento em gel, verniz gel, pedicure medical, lash design, sobrancelhas e depilação com horário marcado.",
      },
      {
        property: "og:title",
        content: "Studio Riso Souza | Estúdio de Estética em Almada",
      },
      {
        property: "og:description",
        content:
          "Beleza, acolhimento e autoestima em Almada. Reserve o seu momento de autocuidado.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const galleryItems = [
  { src: vernizgelImg, alt: "Verniz gel com acabamento natural e duradouro", label: "Verniz Gel" },
  { src: studioImg, alt: "Ambiente do Studio Riso Souza", label: "O Studio" },
  { src: heroImg, alt: "Estação de atendimento do Studio", label: "Atendimento" },
  { src: risoRetrato, alt: "Riso Souza, fundadora do Studio", label: "Riso Souza" },
];

function Home() {
  const lb = useLightbox();

  return (
    <>
      {/* HERO */}
      <section className="dark-block relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
          <div className="contents lg:block">
            <div className="order-1 lg:order-none">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3"
              >
                <span className="h-px w-6 bg-primary" />
                <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                  Almada · Margem Sul · Portugal
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-2xl font-display text-[2.85rem] leading-[1.05] font-normal tracking-tight text-foreground sm:text-6xl lg:text-[4.6rem]"
              >
                Florescer não
                <br />
                tem <span className="gold-text italic font-medium">idade</span>.
              </motion.h1>
            </div>
            <div className="order-3 lg:order-none">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
              >
                Um estúdio de estética feminina onde cada atendimento é uma pausa —
                um tempo só seu para cuidar da sua beleza sem pressa, com atenção,
                privacidade e acolhimento.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45 }}
                className="mt-11 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track("clique_whatsapp", { local: "hero" })}
                  className="group inline-flex items-center justify-center gap-3 bg-primary px-9 py-4 text-[0.68rem] tracking-[0.24em] font-medium text-primary-foreground uppercase transition-all duration-300 hover:opacity-95 hover:shadow-lg"
                >
                  Agendar pelo WhatsApp
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center border border-border px-9 py-4 text-[0.68rem] tracking-[0.24em] font-medium text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  Conhecer os serviços
                </Link>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-16 grid gap-6 border-t border-border/80 pt-8 sm:grid-cols-3"
              >
                {[
                  { icon: Clock, label: "Atendimento com horário marcado" },
                  { icon: Heart, label: "+12 anos dedicados à beleza" },
                  { icon: Sparkles, label: "Resultado natural e personalizado" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon size={16} className="shrink-0 text-primary" />
                    <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      {label}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 mx-auto w-full max-w-md lg:order-none lg:max-w-none"
          >
            <div className="absolute -inset-4 border border-primary/25" aria-hidden />
            <img
              src={risoPro}
              alt="Riso Souza, fundadora do Studio Riso Souza em Almada"
              width={1104}
              height={1645}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-none">
            <div className="relative overflow-hidden border border-primary/20 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)]">
              <img
                src={risoRetrato}
                alt="Riso Souza, fundadora do Studio Riso Souza"
                width={1280}
                height={1920}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="contents lg:block">
            <Reveal className="order-1 lg:order-none">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-primary" />
                <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                  Quem é Riso Souza
                </p>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]">
                A beleza como caminho de{" "}
                <span className="gold-text italic font-medium">recomeço</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="order-3 lg:order-none">
              <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Nascida em Aracaju, Sergipe, e hoje a viver em Almada, Riso Souza construiu uma trajetória marcada pelo desejo de transformar vidas através da autoestima, do cuidado e do desenvolvimento humano.",
                  "São mais de 12 anos em áreas ligadas à beleza, ao atendimento ao público, à liderança e à construção de marcas pessoais — como gestora de equipas, cerimonialista, empresária, mentora, palestrante e criadora de conteúdo digital.",
                  "A sua própria transformação também faz parte desta história: após uma cirurgia bariátrica, eliminou mais de 47 kg e viveu uma mudança profunda de saúde, autoestima e qualidade de vida. Foi daí que nasceu o propósito de mostrar que toda mulher pode florescer, em qualquer fase da vida.",
                ].map((texto) => (
                  <div
                    key={texto.slice(0, 24)}
                    className="max-lg:dark-block text-muted-foreground max-lg:border max-lg:border-primary/15 max-lg:p-6 max-lg:shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)]"
                  >
                    <p>{texto}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/sobre"
                className="mt-8 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.24em] font-semibold text-primary uppercase hover:underline"
              >
                Ler a história completa <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="border-t border-border/80 bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-primary" />
              <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                Serviços Exclusivos
              </p>
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]">
              Experiências feitas para quem{" "}
              <span className="gold-text italic font-medium">valoriza o detalhe</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              No Studio Riso Souza, cada cuidado é pensado para proporcionar uma
              experiência personalizada, com atenção aos detalhes, bem-estar e
              beleza natural.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                categoria: "para-ela" as const,
                eyebrow: "Para Ela",
                image: femininoImg,
                alt: "Cuidados femininos no Studio Riso Souza",
                text: "Beleza, cuidado e experiências pensadas para valorizar a sua rotina, a sua essência e os detalhes que fazem você se sentir ainda melhor.",
                cta: "Conhecer serviços femininos",
              },
              {
                categoria: "para-ele" as const,
                eyebrow: "Para Ele",
                image: masculinoImg,
                alt: "Cuidados masculinos no Studio Riso Souza",
                text: "Cuidados pensados para homens que valorizam higiene, apresentação e bem-estar, com a mesma atenção aos detalhes e experiência personalizada do Studio Riso Souza.",
                cta: "Conhecer cuidados masculinos",
              },
            ].map((c, i) => (
              <Reveal key={c.categoria} delay={i * 0.05}>
                <Link
                  to="/servicos/$genero"
                  params={{ genero: c.categoria }}
                  onClick={() =>
                    track("selecao_categoria_servico", {
                      categoria: c.categoria,
                      local: "home",
                    })
                  }
                  className="dark-block group flex h-full flex-col border border-primary/20 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-10">
                    <p className="eyebrow">{c.eyebrow}</p>
                    <div className="mt-4 h-px w-10 bg-primary/50" />
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                    <span className="mt-8 inline-flex items-center justify-center gap-2 border border-primary/50 px-7 py-4 text-[0.65rem] tracking-[0.22em] font-medium text-primary uppercase transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {c.cta}
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex justify-center">
              <Link
                to="/servicos"
                className="border border-border/80 px-9 py-4 text-[0.68rem] tracking-[0.24em] font-medium text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
              >
                Conheça todos os serviços
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PADRÃO DE ATENDIMENTO — 4 PILARES DIRETOS */}
      <section className="dark-block border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-primary/20 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-6 bg-primary" />
                  <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                    Padrão de Atendimento
                  </p>
                </div>
                <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]">
                  O cuidado está nos{" "}
                  <span className="gold-text italic font-medium">detalhes</span>
                </h2>
              </div>
              <span className="font-display text-sm tracking-[0.24em] font-medium text-primary/80 uppercase">
                04 pilares
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CalendarCheck,
                number: "01",
                title: "Horário exclusivo",
                desc: "Sem sobreposição de clientes e sem interrupções durante a sua sessão.",
              },
              {
                icon: Lock,
                number: "02",
                title: "Privacidade e calma",
                desc: "Espaço reservado e silencioso para garantir relaxamento e conforto.",
              },
              {
                icon: BadgeCheck,
                number: "03",
                title: "Higiene e biossegurança",
                desc: "Materiais esterilizados em autoclave e descartáveis individuais.",
              },
              {
                icon: HeartHandshake,
                number: "04",
                title: "Atendimento humano",
                desc: "Escuta atenta e atenção dedicada às suas necessidades reais.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="flex flex-col justify-between border border-primary/20 bg-black/30 p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-primary/45">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center border border-primary/35 text-primary">
                          <Icon size={18} strokeWidth={1.5} />
                        </span>
                        <span className="font-display text-xs tracking-widest text-primary/40">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-lg font-normal text-foreground">
                        {item.title}
                      </h3>
                      <div className="mt-3 h-px w-8 bg-primary/40" />
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12">
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-primary" />
            <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
              A Sua Experiência
            </p>
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]">
            Do primeiro contacto ao seu momento de{" "}
            <span className="gold-text italic font-medium">autocuidado</span>
          </h2>
        </Reveal>
        <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => {
            const Icon = processIcons[i] ?? Sparkles;
            return (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="dark-block relative flex h-full flex-col border border-primary/20 p-6 sm:p-8 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/50">
                  <span
                    aria-hidden
                    className="absolute top-6 right-6 font-display text-3xl leading-none font-normal text-primary/30"
                  >
                    0{i + 1}
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-primary/35 text-primary">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-normal text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-primary" />
              <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
                Avaliações Reais
              </p>
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]">
              A confiança de quem já viveu o{" "}
              <span className="gold-text italic font-medium">Studio Riso Souza</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12">
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-primary" />
            <p className="text-[0.72rem] tracking-[0.28em] font-semibold text-primary uppercase">
              Galeria do Espaço
            </p>
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]">
            Resultados precisos e a tranquilidade do{" "}
            <span className="gold-text italic font-medium">nosso ambiente</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => {
                  track("visualizacao_galeria", { item: item.label });
                  lb.open(i);
                }}
                className="group relative block w-full overflow-hidden border border-primary/20 bg-black/40 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-primary/50"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-left text-[0.68rem] tracking-[0.22em] font-medium text-cream uppercase">
                  {item.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <Link
          to="/galeria"
          className="mt-10 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.24em] font-semibold text-primary uppercase hover:underline"
        >
          Ver galeria completa <ArrowRight size={14} />
        </Link>
      </section>

      <CtaBanner />

      <MapSection />

      <Lightbox
        items={galleryItems}
        index={lb.index}
        onClose={lb.close}
        onNavigate={lb.navigate}
      />
    </>
  );
}