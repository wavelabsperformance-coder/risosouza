import { createFileRoute, notFound } from "@tanstack/react-router";
import studioImg from "@/assets/studio.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { posts } from "@/lib/content";

type Post = (typeof posts)[number];

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo indisponível | Studio Riso Souza" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} | Blog Studio Riso Souza` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Person", name: "Riso Souza" },
          }),
        },
      ],
    };
  },
  component: Artigo,
});

function Artigo() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article>
        <div className="mx-auto max-w-3xl px-6 pt-36 pb-16">
          <Breadcrumbs
            items={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
          />
          <p className="eyebrow mt-10">{post.category}</p>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.1] font-light md:text-5xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-5 block text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase"
          >
            {new Date(post.date).toLocaleDateString("pt-PT", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <img
          src={studioImg}
          alt={post.title}
          loading="lazy"
          className="h-[45vh] w-full object-cover md:h-[60vh]"
        />

        <div className="mx-auto max-w-3xl space-y-6 px-6 py-20 text-sm leading-loose text-muted-foreground">
          <p className="font-display text-2xl leading-snug font-light text-foreground/90">
            {post.excerpt}
          </p>
          <p>
            Este é o espaço reservado para o conteúdo completo do artigo,
            escrito na voz de Riso Souza — elegante, feminina, acolhedora e
            inspiradora.
          </p>
          <p>
            No Studio Riso Souza, cada atendimento é pensado como um momento de
            pausa e reconexão. Acreditamos que o cuidado com a beleza é também
            uma forma de cuidar da confiança, da autoestima e da forma como cada
            mulher se vê.
          </p>
          <p>
            Para partilhar a sua experiência ou marcar o seu momento de
            autocuidado, fale connosco pelo WhatsApp.
          </p>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
