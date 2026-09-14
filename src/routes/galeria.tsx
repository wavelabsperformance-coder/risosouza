import { createFileRoute } from "@tanstack/react-router";

// Institucional - Espaço e Riso (nomes e extensões exatas do print)
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import risoEspacoImg from "@/assets/riso-espaco.jpg";

// Serviços Femininos
import manicureImg from "@/assets/feminino/maos/manicuretradicional.jpeg";
import vernizGelImg from "@/assets/feminino/maos/vernizgel.jpg";
import pedicureImg from "@/assets/feminino/pes/pedicure.jpg";
import pestanasImg from "@/assets/feminino/pestanas/pestanas.jpeg";
import designImg from "@/assets/feminino/Sobrancelhas/designer.jpeg";

// Serviços Masculinos
import maosMascImg from "@/assets/cat-maos-masc.jpg";
import pesMascImg from "@/assets/cat-pes-masc.jpg";

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
  { src: img1, alt: "Riso Souza - Atendimento", label: "Studio Riso Souza" },
  { src: img2, alt: "Ambiente do Studio", label: "Ambiente" },
  { src: img3, alt: "Cuidado e Detalhe", label: "Exclusividade" },
  { src: risoEspacoImg, alt: "Espaço Studio Riso Souza", label: "Riso Espaço" },
  { src: manicureImg, alt: "Manicure Tradicional", label: "Manicure" },
  { src: vernizGelImg, alt: "Manicure com Verniz Gel", label: "Verniz Gel" },
  { src: pedicureImg, alt: "Pedicure Feminina", label: "Pedicure" },
  { src: pestanasImg, alt: "Pestanas Express em Tela", label: "Pestanas" },
  { src: designImg, alt: "Design de Sobrancelhas", label: "Sobrancelhas" },
  { src: maosMascImg, alt: "Manicure Masculina", label: "Manicure Masculina" },
  { src: pesMascImg, alt: "Pedicure Masculina", label: "Pedicure Masculina" },
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