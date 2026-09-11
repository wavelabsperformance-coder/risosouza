import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import { ServicesHero } from "@/components/ServicesHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { regraStudio } from "@/lib/catalog";
import { track } from "@/lib/site";
import type { Genero } from "@/lib/service-categories";

import femininoImg from "@/assets/service-nails.jpg";
import masculinoImg from "@/assets/cuidados-masculinos.jpg";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços e Categorias em Almada | Studio Riso Souza" },
      {
        name: "description",
        content:
          "Escolha: Para Ela ou Para Ele. Mãos, pés, pestanas, sobrancelhas, depilação e Experiências Riso — estética premium em Almada.",
      },
      { property: "og:title", content: "Serviços | Studio Riso Souza" },
      {
        property: "og:description",
        content:
          "Para ela. Para ele. Para quem gosta de se cuidar. Escolha a sua categoria de cuidado em Almada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const OPCOES: {
  genero: Genero;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  image: string;
  alt: string;
}[] = [
  {
    genero: "para-ela",
    eyebrow: "Para Ela",
    title: "Serviços Femininos",
    text: "Mãos, pés, pestanas, sobrancelhas, depilação e Experiências Riso — beleza, cuidado e experiências pensadas para valorizar a sua rotina e a sua essência.",
    cta: "Conhecer serviços femininos",
    image: femininoImg,
    alt: "Cuidados femininos no Studio Riso Souza",
  },
  {
    genero: "para-ele",
    eyebrow: "Para Ele",
    title: "Cuidados Masculinos",
    text: "Mãos, pés, Riso Executive e depilação — higiene, apresentação e bem-estar com a mesma atenção aos detalhes da experiência Riso.",
    cta: "Conhecer cuidados masculinos",
    image: masculinoImg,
    alt: "Cuidados masculinos no Studio Riso Souza",
  },
];

function Servicos() {
  return (
    <>
      <ServicesHero
        eyebrow="Serviços"
        crumbs={[{ label: "Serviços" }]}
        title={
          <>
            Para ela. Para ele.
            <br />
            Para quem gosta de <span className="gold-text italic">se cuidar</span>
          </>
        }
        intro="Escolha primeiro para quem é o cuidado. Depois, dentro de cada área, encontra as categorias, os serviços e os valores — sempre com horário marcado."
      />

      <div>
        {/* ESCOLHA: PARA ELA / PARA ELE */}
        <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-12">
          <Reveal>
            <p className="eyebrow">Comece por aqui</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-light md:text-4xl">
              Escolha a sua área de cuidado
            </h2>
            <div className="mt-6 h-px w-10 bg-primary/50" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {OPCOES.map((c, i) => (
              <Reveal key={c.genero} delay={i * 0.05}>
                <Link
                  to="/servicos/$genero"
                  params={{ genero: c.genero }}
                  onClick={() =>
                    track("selecao_categoria_servico", {
                      categoria: c.genero,
                      local: "pagina_servicos",
                    })
                  }
                  className="dark-block group flex h-full flex-col border border-primary/15 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/45"
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
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-10">
                    <p className="eyebrow">{c.eyebrow}</p>
                    <h3 className="mt-4 font-display text-2xl leading-snug font-light sm:text-3xl">
                      {c.title}
                    </h3>
                    <div className="mt-4 h-px w-10 bg-primary/50" />
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                    <span className="mt-8 inline-flex items-center justify-center gap-2 border border-primary/50 px-7 py-4 text-[0.65rem] tracking-[0.22em] text-primary uppercase transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {c.cta}
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* REGRA DO STUDIO */}
        <section className="mx-auto max-w-[1400px] px-6 pb-28 lg:px-12">
          <Reveal>
            <div className="dark-block border border-primary/20 p-8 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] sm:p-12">
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center border border-primary/35 text-primary">
                  <Info size={16} strokeWidth={1.25} />
                </span>
                <div>
                  <h2 className="font-display text-2xl leading-snug font-light">
                    {regraStudio.title}
                  </h2>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {regraStudio.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <CtaBanner />
    </>
  );
}
