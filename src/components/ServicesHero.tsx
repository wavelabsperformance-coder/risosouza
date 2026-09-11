import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import capaServicos from "@/assets/capa-servicos-riso-souza.png";

/** Hero amplo com a capa oficial horizontal — usado em toda a área de Serviços. */
export function ServicesHero({
  eyebrow,
  title,
  intro,
  note,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string | undefined;
  note?: string | undefined;
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section
      className="dark-block relative overflow-hidden border-b border-border bg-onyx bg-cover bg-center"
      style={{ backgroundImage: `url(${capaServicos})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/50"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24 lg:px-12 lg:pt-44 lg:pb-28">
        <Breadcrumbs items={crumbs} />
        <Reveal>
          <p className="eyebrow mt-10">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.05] font-light md:text-6xl">
            {title}
          </h1>
          <div className="mt-8 h-px w-12 bg-primary/50" />
          {intro && (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
          {note && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
