// Exclusivo / Combos
import exclusiveImg from "@/assets/feminino/exclusive.jpg";

// Mãos
import alongamentoImg from "@/assets/feminino/maos/alongamento.jpg";
import blindagemImg from "@/assets/feminino/maos/blindagem.jpg";
import esmaltacaoImg from "@/assets/feminino/maos/esmaltacao.jpg";
import manutencaoGelImg from "@/assets/feminino/maos/manutencaogel.jpg";
import removerGelImg from "@/assets/feminino/maos/remover gel.jpg";
import reparoImg from "@/assets/feminino/maos/reparo.jpg";
import vernixImg from "@/assets/feminino/maos/vernix.jpg";
import vernizGelImg from "@/assets/feminino/maos/vernizgel.jpg";

// Pés
import pedicureImg from "@/assets/feminino/pes/pedicure.jpg";
import pedicureGelImg from "@/assets/feminino/pes/pedicuregel.jpg";
import pedicureMedicalImg from "@/assets/feminino/pes/pedicuremedical.jpg";

// Pestanas
import pestanasImg from "@/assets/feminino/pestanas/pestanas.jpg";
import extensaoImg from "@/assets/feminino/pestanas/extensao.jpg";
import remocaoPestanasImg from "@/assets/feminino/pestanas/remocao.jpg";

// Sobrancelhas (pasta com "S" maiúsculo)
import bucoImg from "@/assets/feminino/Sobrancelhas/buco.jpg";
import designImg from "@/assets/feminino/Sobrancelhas/design.jpg";
import designHennaImg from "@/assets/feminino/Sobrancelhas/designhenna.jpg";

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
  "Manicure Tradicional + Verniz Tradicional": vernixImg,
  "Esmaltação Tradicional": esmaltacaoImg,
  "Manicure + Verniz Gel": vernizGelImg,
  Blindagem: blindagemImg,
  "Alongamento em Gel — Aplicação": alongamentoImg,
  "Manutenção de Gel": manutencaoGelImg,
  "Reparação de Unha": reparoImg,
  "Remoção de Gel / Alongamento": removerGelImg,

  // Pés
  "Pedicure Tradicional": pedicureImg,
  "Pedicure + Verniz Gel": pedicureGelImg,
  "Pedicure Medical — Avaliação + Preventiva": pedicureMedicalImg,
  "Pedicure Medical — Nível 1": exclusiveImg,
  "Pedicure Medical — Nível 2": exclusiveImg,
  "Pedicure Medical — Casos Complexos": exclusiveImg,

  // Pestanas
  "Pestanas Express em Tela": pestanasImg,
  "Manutenção — até 30 dias": exclusiveImg,
  Remoção: remocaoPestanasImg,
  "Remoção + Nova Aplicação": exclusiveImg,
  "Lash Design / Extensão de Cílios": extensaoImg,

  // Sobrancelhas
  "Design de Sobrancelhas": designImg,
  "Design + Henna": designHennaImg,
  "Manutenção de Design": exclusiveImg,
  Buço: bucoImg,
  "Design + Buço": exclusiveImg,

  // Depilação
  "Depilação em Cera": depilacaoPernaCompletaImg,

  // Experiências Riso (todos recebem exclusive)
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
  Costas: depilacaoPernaCompletaImg, // fallback para costas
};