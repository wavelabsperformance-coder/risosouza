import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import studioImg from "@/assets/studio.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import risoImg from "@/assets/riso.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { posts } from "@/lib/content";
import blogHero from "@/assets/hero-blog.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Studio Riso Souza — Beleza e Autoestima em Almada" },
      {
        name: "description",
        content:
          "Artigos sobre autoestima feminina, cuidados de beleza e bem-estar, escritos a partir da experiência do Studio Riso Souza, em Almada.",
      },
      { property: "og:title", content: "Blog | Studio Riso Souza" },
      {
        property: "og:description",
        content: "Autoestima, cuidados e bem-estar por Riso Souza.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const covers = [studioImg, nailsImg, risoImg];

function Blog() {
  return (
    <>
      <PageHero
        image={blogHero}
        imageAlt="Composição editorial de beleza"
        eyebrow="Blog"
        crumbs={[{ label: "Blog" }]}
        title={
          <>
            Palavras sobre beleza
            <br />e <span className="gold-text italic">autoestima</span>
          </>
        }
        intro="Reflexões e cuidados partilhados por Riso Souza."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <article className="dark-block group flex h-full flex-col border border-primary/15 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-primary/45">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={covers[i % covers.length]}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-4 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                  <span className="text-primary">{post.category}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pt-PT", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-snug font-light">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.24em] text-primary uppercase"
                >
                  Ler mais
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
