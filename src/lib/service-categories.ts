/**
 * Categorias da área de Serviços — cada categoria tem a sua própria página.
 * Os serviços e valores vêm de src/lib/catalog.ts (fonte única de preços).
 */
import { categories, type CatalogGroup, type CatalogItem } from "@/lib/catalog";

import maosImg from "@/assets/cat-maos.jpg";
import pesImg from "@/assets/cat-pes.jpg";
import pestanasImg from "@/assets/cat-pestanas.jpg";
import sobrancelhasImg from "@/assets/cat-sobrancelhas.jpg";
import depilacaoImg from "@/assets/cat-depilacao.jpg";
import maosMascImg from "@/assets/cat-maos-masc.jpg";
import pesMascImg from "@/assets/cat-pes-masc.jpg";
import executiveImg from "@/assets/cat-executive.jpg";
import depilacaoMascImg from "@/assets/cat-depilacao-masc.jpg";

export type Genero = "para-ela" | "para-ele";

/** Mapeia o slug público para o id interno do catálogo. */
const catalogId: Record<Genero, "feminino" | "masculino"> = {
  "para-ela": "feminino",
  "para-ele": "masculino",
};

/** Slugs antigos -> novos (para redirecionamento). */
export const legacyGenero: Record<string, Genero> = {
  feminino: "para-ela",
  masculino: "para-ele",
};

export interface ServiceCategory {
  genero: Genero;
  slug: string;
  label: string;
  title: string;
  description: string;
  image: string;
  items?: CatalogItem[];
  compact?: { name: string; price: string }[];
  footnote?: string;
  intro?: string;
}

const group = (genero: Genero, id: string): CatalogGroup | undefined =>
  categories.find((c) => c.id === catalogId[genero])?.groups.find((g) => g.id === id);

function build(
  genero: Genero,
  slug: string,
  groupId: string,
  label: string,
  description: string,
  image: string,
): ServiceCategory {
  const g = group(genero, groupId);
  return {
    genero,
    slug,
    label,
    title: label,
    description,
    image,
    ...(g?.items ? { items: g.items } : {}),
    ...(g?.compact ? { compact: g.compact } : {}),
    ...(g?.footnote ? { footnote: g.footnote } : {}),
    ...(g?.intro ? { intro: g.intro } : {}),
  };
}

export const serviceCategories: ServiceCategory[] = [
  build(
    "para-ela",
    "maos",
    "maos",
    "Mãos",
    "Cuidados para unhas bonitas, saudáveis e bem apresentadas.",
    maosImg,
  ),
  build(
    "para-ela",
    "pes",
    "pes",
    "Pés",
    "Cuidado, higiene e bem-estar para os seus pés.",
    pesImg,
  ),
  build(
    "para-ela",
    "pestanas",
    "pestanas",
    "Pestanas",
    "Técnicas pensadas para valorizar e realçar a beleza natural do seu olhar.",
    pestanasImg,
  ),
  build(
    "para-ela",
    "sobrancelhas",
    "sobrancelhas",
    "Sobrancelhas",
    "Harmonia, definição e naturalidade para o seu olhar.",
    sobrancelhasImg,
  ),
  build(
    "para-ela",
    "depilacao",
    "depilacao",
    "Depilação feminina com cera quente",
    "Pele suave e cuidados com cera quente para diferentes áreas.",
    depilacaoImg,
  ),
  build(
    "para-ele",
    "maos",
    "maos-masc",
    "Mãos",
    "Cuidados pessoais para manter as mãos limpas e bem apresentadas.",
    maosMascImg,
  ),
  build(
    "para-ele",
    "pes",
    "pes-masc",
    "Pés",
    "Higiene, cuidado e bem-estar para o dia a dia.",
    pesMascImg,
  ),
  build(
    "para-ele",
    "riso-executive",
    "executive",
    "Riso Executive",
    "Mãos e pés numa experiência prática e completa.",
    executiveImg,
  ),
  build(
    "para-ele",
    "depilacao",
    "depilacao-masc",
    "Depilação Masculina",
    "Cuidados de depilação pensados para diferentes áreas.",
    depilacaoMascImg,
  ),
];

export const getServiceCategory = (genero: string, slug: string) =>
  serviceCategories.find((c) => c.genero === genero && c.slug === slug);

export const byGenero = (genero: Genero) =>
  serviceCategories.filter((c) => c.genero === genero);

/** Mensagem personalizada de agendamento por serviço. */
export const bookingMessage = (serviceName: string) =>
  `Olá! 🤍\nGostaria de agendar o serviço ${serviceName} no Studio Riso Souza.\nPoderiam informar a disponibilidade, por favor?\nObrigada!`;