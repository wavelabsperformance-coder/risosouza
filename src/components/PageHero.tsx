import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import capaInterna from "@/assets/capa-interna.png";

/** Capa única das páginas internas — identidade visual consistente. */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  crumbs: { label: string; to?: string }[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="dark-block relative overflow-hidden border-b border-border">
      <img
        src={capaInterna}
        alt={imageAlt ?? ""}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/45"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-44 pb-28 lg:px-12">
        <Breadcrumbs items={crumbs} />
        <Reveal>
          <p className="eyebrow mt-12">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.05] font-light md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
