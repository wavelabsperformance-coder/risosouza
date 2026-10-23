// Mãos
import manicureImg from "@/assets/masculino/maos/manicure.jpg";

// Pés (pasta "pe")
import pedicureImg from "@/assets/masculino/pe/pedicure.jpg";

// Combo / Executive
import exclusiveImg from "@/assets/masculino/exclusive.jpg";

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
};

export const masculineServiceImage = (name: string, fallback: string) =>
  masculineServiceImages[name] ?? fallback;