import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpeg";
import studioImg from "@/assets/studio.jpg";
import risoImg from "@/assets/riso.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Lightbox, useLightbox } from "@/components/Lightbox";
import { track } from "@/lib/site";
import galeriaHero from "@/assets/service-nails.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | Studio Riso Souza — Almada" },
      {
        name: "description",
        content:
          "Galeria do Studio Riso Souza em Almada: conheça os resultados dos procedimentos e o ambiente onde cada atendimento acontece.",
      },
      { property: "og:title", content: "Galeria | Studio Riso Souza" },
      {
        property: "og:description",
        content: "Resultados reais e o ambiente acolhedor do Studio, em Almada.",
      },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

const gallery = [
  { src: nailsImg, alt: "Unhas em gel com acabamento natural", label: "Unhas em gel" },
  { src: studioImg, alt: "Ambiente do Studio Riso Souza", label: "Ambiente" },
  { src: heroImg, alt: "Estação de atendimento", label: "Atendimento" },
  { src: risoImg, alt: "Riso Souza no Studio", label: "Riso Souza" },
  { src: nailsImg, alt: "Detalhe de acabamento das unhas", label: "Detalhe" },
  { src: studioImg, alt: "Espaço reservado do Studio", label: "Privacidade" },
];

function Galeria() {
  const lb = useLightbox();

  return (
    <>
      <PageHero
        image={galeriaHero}
        imageAlt="Detalhe de unhas em gel realizadas no Studio"
        eyebrow="Galeria"
        crumbs={[{ label: "Galeria" }]}
        title={
          <>
            Resultados que falam
            <br />
            por <span className="gold-text italic font-medium">si</span>
          </>
        }
        intro="Fotografias e registos reais do Studio. Toque em qualquer imagem para ver em ecrã inteiro."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {gallery.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
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
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-left text-[0.68rem] tracking-[0.22em] font-medium text-cream uppercase">
                  {item.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        eyebrow="Marcações"
        title="Agende o seu momento de cuidado exclusivo e personalizado."
      />

      <Lightbox
        items={gallery}
        index={lb.index}
        onClose={lb.close}
        onNavigate={lb.navigate}
      />
    </>
  );
}