// Mãos
import manicureImg from "@/assets/masculino/maos/manicure.jpg";

// Pés (pasta "pe")
import pedicureImg from "@/assets/masculino/pe/pedicure.jpg";

// Combo / Executive
import exclusiveImg from "@/assets/masculino/exclusive.jpg";

// Depilação
import axilaImg from "@/assets/masculino/depilacao/axila.jpg";
import peitoImg from "@/assets/masculino/depilacao/peito.jpg";
import abdomenImg from "@/assets/masculino/depilacao/abdomem.jpg";
import costasImg from "@/assets/masculino/depilacao/costas.jpg";
import bracoImg from "@/assets/masculino/depilacao/braco.jpg";
import meiaPernaImg from "@/assets/masculino/depilacao/meia perna.jpg";
import narizOrelhaImg from "@/assets/masculino/depilacao/narizorelha.png";
import ombroImg from "@/assets/masculino/depilacao/ombro.png";
import pernaCompletaImg from "@/assets/masculino/depilacao/pernacompleta.png";

/** Nome do serviço (catálogo) → imagem local importada. */
export const masculineServiceImages: Record<string, string> = {
  // Mãos
  "Manicure Masculina": manicureImg,
  "Manicure Masculina + Hidratação": exclusiveImg,

  // Pés
  "Pedicure Masculina": pedicureImg,
  "Pedicure Masculina + Cuidado de Calosidades": exclusiveImg,

  // Combo Riso Executive (imagem exclusive)
  "Riso Executive — Mãos + Pés": exclusiveImg,

  // Depilação masculina (por área)
  Axilas: axilaImg,
  Peito: peitoImg,
  Abdómen: abdomenImg,
  "Peito + Abdómen": exclusiveImg,
  Costas: costasImg,
  Braços: bracoImg,
  "Meia Perna": meiaPernaImg,
  "Perna Completa": pernaCompletaImg,
  Ombros: ombroImg,
  "Nariz / Orelhas": narizOrelhaImg,
};

export const masculineServiceImage = (name: string, fallback: string) =>
  masculineServiceImages[name] ?? fallback;