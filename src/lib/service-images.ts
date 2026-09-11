import nailsImg from "@/assets/service-nails.jpg";
import pedicureImg from "@/assets/service-pedicure.jpg";
import lashImg from "@/assets/service-lash.jpg";
import sobrancelhasImg from "@/assets/service-sobrancelhas.jpg";
import hennaImg from "@/assets/service-henna.jpg";
import depilacaoImg from "@/assets/service-depilacao.jpg";

export const serviceImages: Record<string, string> = {
  "alongamento-em-gel": nailsImg,
  "pedicure-medical": pedicureImg,
  "lash-design": lashImg,
  "design-de-sobrancelhas": sobrancelhasImg,
  "design-de-sobrancelhas-com-henna": hennaImg,
  "depilacao-em-cera": depilacaoImg,
};

/** Imagem por nome de serviço do catálogo (fallback: imagem da categoria). */
const byKeyword: { match: RegExp; image: string }[] = [
  { match: /pestana|lash|extens/i, image: lashImg },
  { match: /henna/i, image: hennaImg },
  { match: /sobrancelha|design/i, image: sobrancelhasImg },
  { match: /depila|cera|virilha|axila|perna|buço|costas|peito/i, image: depilacaoImg },
  { match: /pedicure|pé|pes|unhas dos pés/i, image: pedicureImg },
  { match: /manicure|verniz|gel|mão|maos|nail/i, image: nailsImg },
];

export const serviceRowImage = (name: string, fallback: string) =>
  byKeyword.find((k) => k.match.test(name))?.image ?? fallback;
