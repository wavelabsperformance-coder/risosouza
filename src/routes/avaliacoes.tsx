import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { SITE } from "@/lib/site";
import avaliacoesHero from "@/assets/hero-ambiente.jpg";

export const Route = createFileRoute("/avaliacoes")({
  head: () => ({
    meta: [
      { title: "Avaliações de Clientes | Studio Riso Souza — Almada" },
      {
        name: "description",
        content:
          "O que dizem as clientes do Studio Riso Souza, estúdio de estética feminina em Almada.",
      },
      { property: "og:title", content: "Avaliações | Studio Riso Souza" },
      {
        property: "og:description",
        content: "Experiências reais de quem passou pelo Studio, em Almada.",
      },
      { property: "og:url", content: "/avaliacoes" },
    ],
    links: [{ rel: "canonical", href: "/avaliacoes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: SITE.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            postalCode: SITE.address.postal,
            addressLocality: SITE.address.city,
            addressCountry: "PT",
          },
        }),
      },
    ],
  }),
  component: Avaliacoes,
});

function Avaliacoes() {
  return (
    <>
      <PageHero
        image={avaliacoesHero}
        imageAlt="Ambiente acolhedor do Studio Riso Souza"
        eyebrow="Avaliações"
        crumbs={[{ label: "Avaliações" }]}
        title={
          <>
            A confiança de quem
            <br />
            <span className="gold-text italic">volta sempre</span>
          </>
        }
        intro="Cada avaliação abaixo é um espaço reservado para os depoimentos oficiais das clientes do Studio."
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow">Depoimentos</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl">
              Histórias de quem passou pelo Studio
            </h2>
          </Reveal>
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      <CtaBanner
        eyebrow="A sua vez"
        title="Reserve o seu momento e viva a experiência do Studio."
      />
    </>
  );
}
