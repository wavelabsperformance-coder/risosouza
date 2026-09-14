// Exclusivo / Combos
import exclusiveImg from "@/assets/feminino/exclusive.jpg";

// Mãos (mapeadas exatamente conforme os arquivos da pasta)
import blindagemImg from "@/assets/feminino/maos/blindagem.jpg";
import vernizGelImg from "@/assets/feminino/maos/vernizgel.jpg";
import alongamentoImg from "@/assets/feminino/maos/alongamentoemgel.jpeg";
import manicureTradicionalImg from "@/assets/feminino/maos/manicuretradicional.jpeg";
import manutencaoGelImg from "@/assets/feminino/maos/manutencao.jpeg";
import reparoImg from "@/assets/feminino/maos/repararunha.jpeg";
import removerGelImg from "@/assets/feminino/maos/remocao.jpeg";

// Pés
import pedicureImg from "@/assets/feminino/pes/pedicure.jpg";
import pedicureGelImg from "@/assets/feminino/pes/pedicuregel.jpg";
import pedicureMedicalImg from "@/assets/feminino/pes/pedicuremedical.jpg";

// Pestanas (em .jpeg)
import pestanasImg from "@/assets/feminino/pestanas/pestanas.jpeg";
import lashImg from "@/assets/feminino/pestanas/lash.jpeg";
import remocaoPestanasImg from "@/assets/feminino/pestanas/remocao.jpeg";

// Sobrancelhas (designer.jpeg e henna.jpeg)
import designImg from "@/assets/feminino/Sobrancelhas/designer.jpeg";
import designHennaImg from "@/assets/feminino/Sobrancelhas/henna.jpeg";

// Depilação (cards compactos e genérico)
import depilacaoAxilasImg from "@/assets/feminino/depilacao/axilas.jpg";
import depilacaoBarrigaImg from "@/assets/feminino/depilacao/barriga.jpg";
import depilacaoBracoImg from "@/assets/feminino/depilacao/braco.jpg";
import depilacaoBucoImg from "@/assets/feminino/depilacao/buco.jpg";
import depilacaoMeiaPernaImg from "@/assets/feminino/depilacao/meiaperna.jpg";
import depilacaoPernaCompletaImg from "@/assets/feminino/depilacao/pernacompleta.jpg";
import depilacaoQueixoImg from "@/assets/feminino/depilacao/queixo.jpg";
import depilacaoRostoImg from "@/assets/feminino/depilacao/rosto.jpg";
import depilacaoVirilhaImg from "@/assets/feminino/depilacao/virilha.jpg";
import depilacaoVirilhaTotalImg from "@/assets/feminino/depilacao/virilhacompleta.jpg";

/** Nome do serviço (catálogo) → ficheiro local importado. */
export const feminineServiceImages: Record<string, string> = {
  // Mãos
  "Manicure Tradicional + Verniz Tradicional": manicureTradicionalImg,
  "Manicure + Verniz Gel": vernizGelImg,
  "Blindagem ou Banho de Gel": blindagemImg,
  Blindagem: blindagemImg,
  "Alongamento em Gel — Aplicação": alongamentoImg,
  "Manutenção de Gel": manutencaoGelImg,
  "Reparação de Unha": reparoImg,
  "Remoção de Gel / Alongamento": removerGelImg,

  // Pés
  "Pedicure Tradicional": pedicureImg,
  "Pedicure + Verniz Gel": pedicureGelImg,
  "Pedicure Medical": pedicureMedicalImg,
  "Pedicure Medical — Avaliação + Preventiva": pedicureMedicalImg,
  "Pedicure Medical — Nível 1": exclusiveImg,
  "Pedicure Medical — Nível 2": exclusiveImg,
  "Pedicure Medical — Casos Complexos": exclusiveImg,

  // Pestanas
  "Pestanas Express em Tela": pestanasImg,
  "Remoção": remocaoPestanasImg,
  "Remoção de Pestanas": remocaoPestanasImg,
  "Lash Design": lashImg,
  "Lash Design / Extensão de Cílios": lashImg,

  // Sobrancelhas
  "Design de Sobrancelhas": designImg,
  "Design + Henna": designHennaImg,
  "Design de Sobrancelhas com Henna": designHennaImg,

  // Depilação
  "Depilação em Cera": depilacaoPernaCompletaImg,
  "Depilação feminina com cera quente": depilacaoPernaCompletaImg,

  // Experiências Riso
  "Riso Essential": exclusiveImg,
  "Riso Beauty": exclusiveImg,
  "Riso Signature": exclusiveImg,
  "Riso Complete": exclusiveImg,
};

/** Imagem local do serviço feminino, com fallback para a imagem da categoria. */
export const feminineServiceImage = (name: string, fallback: string) =>
  feminineServiceImages[name] ?? fallback;

/** Áreas de depilação feminina → ficheiro local importado. */
export const feminineWaxImages: Record<string, string> = {
  Buço: depilacaoBucoImg,
  Queixo: depilacaoQueixoImg,
  Rosto: depilacaoRostoImg,
  Axilas: depilacaoAxilasImg,
  "Virilha Linha Biquíni": depilacaoVirilhaImg,
  "Virilha Total": depilacaoVirilhaTotalImg,
  "Meia Perna": depilacaoMeiaPernaImg,
  "Perna Inteira": depilacaoPernaCompletaImg,
  Braços: depilacaoBracoImg,
  Barriga: depilacaoBarrigaImg,
  Costas: depilacaoPernaCompletaImg,
};