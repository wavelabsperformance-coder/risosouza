import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { ServicesHero } from "@/components/ServicesHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { track, whatsappLink } from "@/lib/site";
import {
  bookingMessage,
  byGenero,
  legacyGenero,
  getServiceCategory,
  type ServiceCategory,
} from "@/lib/service-categories";
import type { CatalogItem } from "@/lib/catalog";
import { serviceRowImage } from "@/lib/service-images";
import { feminineServiceImage, feminineWaxImages } from "@/lib/service-images-feminino";
import { masculineServiceImage, masculineServiceImages } from "@/lib/service-images-masculino";
import { regraStudio } from "@/lib/catalog";

export const Route = createFileRoute("/servicos/$genero/$categoria")({
  loader: ({ params }): { category: ServiceCategory } => {
    const legacy = legacyGenero[params.genero];
    if (legacy) {
      throw redirect({
        to: "/servicos/$genero/$categoria",
        params: { genero: legacy, categoria: params.categoria },
        statusCode: 301,
      });
    }
    const category = getServiceCategory(params.genero, params.categoria);
    if (!category) throw notFound();
    return { category };
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
    const c = loaderData.category;
    const label = c.genero === "para-ela" ? "Feminino" : "Masculino";
    const title = `${c.label} — ${label} em Almada | Studio Riso Souza`;
    const url = `/servicos/${c.genero}/${c.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: c.description },
        { property: "og:title", content: title },
        { property: "og:description", content: c.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CategoriaPage,
});

function CategoriaPage() {
  const { category } = Route.useLoaderData() as { category: ServiceCategory };
  const generoLabel = category.genero === "para-ela" ? "Para Ela" : "Para Ele";
  const outras = byGenero(category.genero).filter((c) => c.slug !== category.slug);

  return (
    <div>
      {/* HERO COM CAPA OFICIAL */}
      <ServicesHero
        eyebrow={generoLabel}
        title={category.label}
        intro={category.description}
        note={category.intro}
        crumbs={[
          { label: "Serviços", to: "/servicos" },
          { label: generoLabel, to: `/servicos/${category.genero}` },
          { label: category.label },
        ]}
      />

      {/* SERVIÇOS */}
      {category.items?.length ? (
        <section className="mx-auto max-w-[1400px] px-6 pt-20 lg:px-12">
          <Reveal>
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-light md:text-4xl">
              Escolha o seu cuidado
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-col gap-6">
            {category.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.04}>
                <ServiceRow
                  item={item}
                  image={
                    category.genero === "para-ela"
                      ? feminineServiceImage(item.name, serviceRowImage(item.name, category.image))
                      : masculineServiceImage(
                          item.name,
                          serviceRowImage(item.name, category.image),
                        )
                  }
                />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* LISTA COMPACTA (DEPILAÇÃO) */}
      {category.compact?.length ? (
        <section className="mx-auto max-w-[1400px] px-6 pt-20 lg:px-12">
          <Reveal>
            <p className="eyebrow">Áreas e valores</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-light md:text-4xl">
              Escolha a área
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {category.compact.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.03}>
                <article className="dark-block grid grid-cols-1 border border-primary/15 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/45 sm:grid-cols-[minmax(0,180px)_1fr]">
                  <img
                    src={
                      (category.genero === "para-ela"
                        ? feminineWaxImages[c.name]
                        : masculineServiceImages[c.name]) ?? category.image
                    }
                    alt={c.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-40 w-full object-cover sm:h-full"
                  />
                  <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div>
                      <h3 className="font-display text-xl font-light">{c.name}</h3>
                      <p className="mt-2 text-sm tracking-[0.14em] text-primary">{c.price}</p>
                    </div>
                    <BookButton name={`Depilação — ${c.name}`} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {category.footnote && (
        <section className="mx-auto max-w-[1400px] px-6 pt-14 lg:px-12">
          <Reveal>
            <div className="dark-block flex items-start gap-4 border border-primary/20 p-7 sm:p-9">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center border border-primary/35 text-primary">
                <Info size={15} strokeWidth={1.25} />
              </span>
              <p className="text-xs leading-relaxed text-muted-foreground">{category.footnote}</p>
            </div>
          </Reveal>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 pt-20 lg:px-12">
        <Reveal>
          <div className="dark-block flex flex-col items-start justify-between gap-8 border border-primary/25 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div>
              <p className="eyebrow">Marcações</p>
              <h2 className="mt-4 max-w-xl font-display text-2xl leading-snug font-light md:text-3xl">
                Atendimento exclusivo, com horário marcado só para você.
              </h2>
            </div>
            <a
              href={whatsappLink(
                `Olá! 🤍\nGostaria de saber mais sobre os serviços de ${category.label} no Studio Riso Souza.`,
              )}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                track("clique_whatsapp", { local: "categoria", categoria: category.slug })
              }
              className="inline-flex shrink-0 items-center gap-3 bg-primary px-8 py-4 text-[0.66rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon size={15} />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* REGRA GERAL DO STUDIO */}
      <section className="mx-auto max-w-[1400px] px-6 pt-20 lg:px-12">
          <Reveal>
            <div className="dark-block border border-primary/20 p-8 sm:p-12">
              <p className="eyebrow">Transparência</p>
              <h2 className="mt-4 max-w-2xl font-display text-2xl leading-snug font-light md:text-3xl">
                {regraStudio.title}
              </h2>
              <div className="mt-6 h-px w-10 bg-primary/50" />
              <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
                {regraStudio.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
      </section>


      {/* OUTRAS CATEGORIAS */}
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-28 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Continuar a explorar</p>
              <h2 className="mt-4 font-display text-2xl leading-snug font-light md:text-3xl">
                Outras categorias {generoLabel.toLowerCase()}
              </h2>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-3 border border-primary/40 px-7 py-3.5 text-[0.62rem] tracking-[0.24em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft size={14} />
              Todas as categorias
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outras.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <Link
                to="/servicos/$genero/$categoria"
                params={{ genero: c.genero, categoria: c.slug }}
                className="dark-block group flex h-full flex-col border border-primary/15 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/45"
              >
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-light">{c.label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.6rem] tracking-[0.24em] text-primary uppercase">
                    {"Ver mais"}
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServiceRow({ item, image }: { item: CatalogItem; image: string }) {
  return (
    <article className="dark-block grid grid-cols-1 border border-primary/15 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/45 lg:grid-cols-[minmax(0,300px)_1fr]">
      <img
        src={image}
        alt={item.name}
        loading="lazy"
        width={1200}
        height={912}
        className="h-52 w-full object-cover lg:h-full"
      />
      <div className="flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <h3 className="font-display text-xl leading-snug font-light sm:text-2xl">{item.name}</h3>
          {item.description && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          )}

          {item.includes?.length ? (
            <div className="mt-6">
              <p className="text-[0.6rem] tracking-[0.24em] text-foreground/70 uppercase">Inclui</p>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
                {item.includes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {item.excludes?.length ? (
            <div className="mt-6">
              <p className="text-[0.6rem] tracking-[0.24em] text-foreground/70 uppercase">
                Não inclui
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
                {item.excludes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-primary/60">—</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {item.extra?.length ? (
            <ul className="mt-6 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
              {item.extra.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-primary">—</span>
                  {x}
                </li>
              ))}
            </ul>
          ) : null}

          {item.note && (
            <p className="mt-6 border-l border-primary/40 pl-4 text-xs leading-relaxed text-muted-foreground italic">
              {item.note}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-col items-start gap-5 lg:items-end lg:text-right">
          <span className="font-display text-2xl tracking-[0.06em] text-primary">{item.price}</span>
          <BookButton name={item.name} />
        </div>
      </div>
    </article>
  );
}

function BookButton({ name }: { name: string }) {
  return (
    <a
      href={whatsappLink(bookingMessage(name))}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("clique_whatsapp", { local: "servico", servico: name })}
      className="inline-flex items-center gap-2 border border-primary/50 px-6 py-3.5 text-[0.62rem] tracking-[0.24em] whitespace-nowrap text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <WhatsAppIcon size={14} />
      Agendar este serviço
    </a>
  );
}
