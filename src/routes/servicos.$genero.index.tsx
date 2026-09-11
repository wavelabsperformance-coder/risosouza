import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ServicesHero } from "@/components/ServicesHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { byGenero, legacyGenero, type Genero, type ServiceCategory } from "@/lib/service-categories";

const GENEROS: Record<Genero, { label: string; title: string; intro: string }> = {
  "para-ela": {
    label: "Para Ela",
    title: "Serviços Femininos",
    intro:
      "Beleza, cuidado e experiências pensadas para valorizar a sua rotina e a sua essência. Escolha a categoria de cuidado.",
  },
  "para-ele": {
    label: "Para Ele",
    title: "Cuidados Masculinos",
    intro:
      "Higiene, apresentação e bem-estar com a mesma atenção aos detalhes da experiência Riso. Escolha a categoria de cuidado.",
  },
};

export const Route = createFileRoute("/servicos/$genero/")({
  loader: ({ params }): { genero: Genero } => {
    const legacy = legacyGenero[params.genero];
    if (legacy) {
      throw redirect({ to: "/servicos/$genero", params: { genero: legacy }, statusCode: 301 });
    }
    if (params.genero !== "para-ela" && params.genero !== "para-ele") throw notFound();
    return { genero: params.genero };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Categoria indisponível | Studio Riso Souza" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const g = GENEROS[loaderData.genero];
    const title = `${g.title} em Almada | Studio Riso Souza`;
    const url = `/servicos/${loaderData.genero}`;
    return {
      meta: [
        { title },
        { name: "description", content: g.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: g.intro },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: GeneroPage,
});

function GeneroPage() {
  const { genero } = Route.useLoaderData() as { genero: Genero };
  const g = GENEROS[genero];
  const items = byGenero(genero);
  const outro: Genero = genero === "para-ela" ? "para-ele" : "para-ela";

  return (
    <div>
      {/* HERO COM CAPA OFICIAL */}
      <ServicesHero
        eyebrow={g.label}
        title={g.title}
        intro={g.intro}
        crumbs={[{ label: "Serviços", to: "/servicos" }, { label: g.label }]}
      />

      {/* CATEGORIAS */}
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-12">
        <Reveal>
          <p className="eyebrow">Categorias</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-light md:text-4xl">
            Escolha a sua categoria de cuidado
          </h2>
          <div className="mt-6 h-px w-10 bg-primary/50" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <CategoryCard category={c} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[0.62rem] tracking-[0.24em] text-foreground/80 uppercase transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={14} />
              Todas as categorias
            </Link>
            <Link
              to="/servicos/$genero"
              params={{ genero: outro }}
              className="inline-flex items-center gap-3 border border-primary/40 px-7 py-3.5 text-[0.62rem] tracking-[0.24em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver {GENEROS[outro].label}
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </div>
  );
}

function CategoryCard({ category, featured }: { category: ServiceCategory; featured?: boolean }) {
  return (
    <Link
      to="/servicos/$genero/$categoria"
      params={{ genero: category.genero, categoria: category.slug }}
      className="dark-block group flex h-full flex-col border border-primary/15 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/45"
    >
      <div className="relative overflow-hidden">
        <img
          src={category.image}
          alt={category.label}
          loading="lazy"
          width={1200}
          height={912}
          className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04] ${
            featured ? "h-64 sm:h-72" : "h-56 sm:h-60"
          }`}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-display text-2xl leading-snug font-light">{category.label}</h3>
        <div className="mt-4 h-px w-8 bg-primary/50" />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <span className="mt-8 inline-flex items-center gap-3 text-[0.62rem] tracking-[0.24em] text-primary uppercase">
          {"Ver mais"}
          <ArrowRight
            size={14}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
