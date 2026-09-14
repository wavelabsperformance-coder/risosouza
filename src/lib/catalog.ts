/**
 * Catálogo oficial de serviços do Studio Riso Souza.
 * Editar aqui valores, inclusões e descrições — a página /servicos usa esta fonte única.
 */

export interface CatalogItem {
  name: string;
  price: string;
  description?: string;
  includes?: string[];
  excludes?: string[];
  extra?: string[];
  note?: string;
}

export interface CatalogGroup {
  id: string;
  title: string;
  intro?: string;
  /** Lista compacta (ex.: depilação) em vez de cards detalhados. */
  compact?: { name: string; price: string }[];
  items?: CatalogItem[];
  footnote?: string;
}

export interface CatalogCategory {
  id: "feminino" | "masculino";
  label: string;
  title: string;
  tagline: string;
  intro: string;
  groups: CatalogGroup[];
}

export const regraStudio = {
  title: "Para que tudo fique claro desde o início 🤍",
  paragraphs: [
    "O valor de cada serviço corresponde ao procedimento descrito.",
    "Cuidados adicionais, tratamentos específicos, remoções, reparações, decorações, áreas extras ou procedimentos que não estejam incluídos na descrição poderão ser considerados serviços adicionais e ter custo extra.",
    "Em caso de dúvida, o Studio terá todo o prazer em orientar antes do início do atendimento.",
  ],
};

export const categories: CatalogCategory[] = [
  {
    id: "feminino",
    label: "Para Ela",
    title: "Serviços Femininos",
    tagline: "Beleza, cuidado e experiências personalizadas.",
    intro:
      "Beleza, cuidado e experiências pensadas para valorizar a sua rotina e a sua essência, com atenção aos detalhes em cada atendimento.",
    groups: [
      {
        id: "maos",
        title: "Mãos",
        intro: "Cuidado, higiene e acabamento elegante para as suas mãos.",
        items: [
          {
            name: "Manicure Tradicional + Verniz Tradicional",
            price: "20€",
            description:
              "Embelezamento das mãos com cuidado, higiene e acabamento elegante.",
            includes: [
              "Higienização das mãos e unhas",
              "Corte e/ou ajuste do comprimento",
              "Modelagem das unhas",
              "Limpeza e cuidado das cutículas",
              "Preparação das unhas",
              "Aplicação de verniz tradicional",
            ],
            excludes: [
              "Esfoliação",
              "Massagem",
              "Hidratação ou tratamento específico",
              "Tratamento de calosidades",
              "Remoção de produtos artificiais",
              "Aplicação de gel",
              "Blindagem",
              "Nail art",
              "Outros procedimentos adicionais",
            ],
            note: "No Studio Riso Souza, a limpeza das cutículas é realizada de forma cuidadosa e delicada, respeitando a proteção natural da região.",
          },
          {
            name: "Manicure + Verniz Gel",
            price: "25€",
            description:
              "Inclui o cuidado completo da manicure associado à aplicação de verniz gel duradouro.",
          },
          {
            name: "Blindagem ou Banho de Gel",
            price: "30€",
            description:
              "Proteção e estrutura para a unha natural, sem acrescentar comprimento.",
            includes: [
              "Preparação da unha",
              "Aplicação do produto de blindagem / banho de gel",
              "Estruturação",
              "Nivelamento",
              "Acabamento",
            ],
            note: "Blindagem e alongamento são técnicas diferentes.",
          },
          {
            name: "Alongamento em Gel — Aplicação",
            price: "35€",
            description:
              "O alongamento em gel é um serviço diferente da manicure tradicional e envolve preparação, construção e acabamento da extensão da unha.",
            includes: [
              "Preparação da unha natural",
              "Construção do alongamento em gel",
              "Definição do formato e comprimento",
              "Acabamento e nivelamento",
              "Esmaltação em gel, conforme serviço contratado",
              "Finalização",
            ],
            excludes: [
              "Manicure tradicional isolada",
              "Remoção de alongamento de outro profissional, salvo se especificado",
              "Decorações especiais",
              "Reparações extensas ou reconstruções, quando não previstas no serviço",
            ],
            note: "O valor poderá variar conforme comprimento, formato, complexidade e necessidade de manutenção.",
          },
          {
            name: "Manutenção de Gel",
            price: "30€",
            description:
              "Manutenção da estrutura e acabamento do alongamento em gel.",
          },
          {
            name: "Reparação de Unha",
            price: "5€ / unha",
            description: "Reparação individual quando necessária.",
          },
          {
            name: "Remoção de Gel / Alongamento",
            price: "12€",
            description: "Remoção cuidadosa do produto artificial.",
          },
        ],
      },
      {
        id: "pes",
        title: "Pés",
        intro:
          "Cuidados estéticos e preventivos, com avaliação individualizada quando necessário.",
        items: [
          {
            name: "Pedicure Tradicional",
            price: "25€",
            description:
              "Embelezamento e cuidado essencial para manter os pés limpos e bem cuidados.",
            includes: [
              "Higienização dos pés",
              "Corte e modelagem das unhas",
              "Limpeza cuidadosa das cutículas",
              "Preparação das unhas",
              "Aplicação de verniz tradicional",
            ],
            excludes: [
              "Tratamento de calosidades profundas",
              "Tratamentos terapêuticos",
              "Tratamento de fissuras profundas",
              "Tratamento de unhas espessas",
              "Cuidados relacionados a alterações que ultrapassem o âmbito do serviço estético",
            ],
          },
          {
            name: "Pedicure + Verniz Gel",
            price: "32€",
            description:
              "Inclui o cuidado da pedicure associado à aplicação de verniz gel.",
          },
          {
            name: "Pedicure Medical",
            price: "Valor sob análise de cada caso",
            description:
              "A Pedicure Medical é indicada quando, além do embelezamento, existem necessidades específicas relacionadas à pele, unhas ou conforto dos pés. O atendimento começa com uma avaliação individualizada.",
            includes: [
              "Corte técnico das unhas",
              "Redução de calosidades / hiperqueratoses",
              "Cuidados com calos",
              "Cuidados com fissuras e ressecamento intenso",
              "Cuidados com unhas espessas",
              "Higienização e cuidado das unhas",
              "Cuidados preventivos para clientes com diabetes, dentro do âmbito de atuação profissional",
              "Orientações de manutenção em casa",
              "Acompanhamento da evolução dos pés",
            ],
            note: "O valor final é definido sob análise de cada caso, de acordo com as necessidades identificadas e o tempo necessário para o procedimento.",
          },
        ],
        footnote:
          "O valor final da Pedicure Medical é definido sob análise de cada caso. Alterações que ultrapassem o âmbito profissional do Studio poderão necessitar de encaminhamento para um profissional de saúde habilitado.",
      },
      {
        id: "pestanas",
        title: "Pestanas",
        intro:
          "Técnicas pensadas para valorizar e realçar a beleza natural do olhar.",
        items: [
          {
            name: "Pestanas Express em Tela",
            price: "35€",
            description:
              "A Pestanas Express em Tela é uma técnica brasileira de aplicação rápida, ideal para quem deseja um olhar mais definido, bonito e expressivo sem precisar passar horas no Studio. A aplicação é realizada com pestanas em tela, proporcionando um resultado elegante e imediato.",
            includes: [
              "Higienização e preparação da região dos olhos",
              "Avaliação das pestanas naturais",
              "Escolha do modelo mais adequado ao efeito desejado",
              "Aplicação das pestanas em tela",
              "Acabamento e orientação de cuidados",
            ],
            extra: ["Duração aproximada: 20 minutos"],
          },
          {
            name: "Remoção de Pestanas",
            price: "10€",
            description: "Remoção cuidadosa e segura das pestanas.",
          },
          {
            name: "Lash Design / Extensão de Cílios",
            price: "Sob consulta",
            description:
              "Cada aplicação é escolhida de acordo com o formato dos olhos, características dos cílios naturais e resultado desejado.",
            includes: [
              "Avaliação dos cílios naturais",
              "Escolha da técnica",
              "Personalização de comprimento e curvatura",
              "Aplicação",
              "Orientações de cuidados posteriores",
            ],
            note: "Técnicas especiais e remoção de outros profissionais são serviços distintos.",
          },
        ],
      },
      {
        id: "sobrancelhas",
        title: "Sobrancelhas",
        intro: "Harmonia, naturalidade e personalidade.",
        items: [
          {
            name: "Design de Sobrancelhas",
            price: "15€",
            description:
              "Modelagem personalizada, respeitando o formato natural do seu rosto.",
            includes: [
              "Avaliação do formato",
              "Modelagem",
              "Limpeza dos pelos excedentes",
              "Acabamento",
            ],
          },
          {
            name: "Design de Sobrancelhas com Henna",
            price: "27€",
            description:
              "Design associado à aplicação de henna para proporcionar preenchimento visual e definição temporária.",
          },
        ],
      },
      {
        id: "depilacao",
        title: "Depilação feminina com cera quente",
        intro: "Técnica cuidadosa com cera quente, num ambiente reservado e confortável.",
        compact: [
          { name: "Buço", price: "5€" },
          { name: "Queixo", price: "5€" },
          { name: "Rosto", price: "18€" },
          { name: "Axilas", price: "8€" },
          { name: "Virilha Linha Biquíni", price: "10€" },
          { name: "Virilha Total", price: "15€" },
          { name: "Meia Perna", price: "17€" },
          { name: "Perna Inteira", price: "22€" },
          { name: "Braços", price: "15€" },
          { name: "Barriga", price: "10€" },
          { name: "Costas", price: "20€" },
        ],
        footnote:
          "O valor corresponde à área escolhida no momento da marcação. Duas ou mais áreas são consideradas serviços adicionais.",
      },
    ],
  },
  {
    id: "masculino",
    label: "Para Ele",
    title: "Cuidados Masculinos",
    tagline: "Cuidado pessoal também é autocuidado.",
    intro:
      "Criámos uma seleção de serviços pensados para homens que valorizam higiene, apresentação e bem-estar, com a mesma atenção aos detalhes e atendimento personalizado que fazem parte da experiência Riso Souza.",
    groups: [
      {
        id: "maos-masc",
        title: "Mãos",
        intro:
          "Cuidados pessoais para manter as mãos limpas, cuidadas e bem apresentadas, com a mesma atenção aos detalhes que faz parte da experiência Riso Souza.",
        items: [
          {
            name: "Manicure Masculina",
            price: "18€",
            description:
              "Um cuidado essencial para homens que valorizam higiene, apresentação e cuidado pessoal.",
            includes: [
              "Higienização",
              "Corte e modelagem",
              "Limpeza cuidadosa das cutículas",
              "Polimento das unhas",
              "Finalização",
            ],
            note: "Sem esmaltação, salvo se solicitada.",
          },
          {
            name: "Manicure Masculina + Hidratação",
            price: "25€",
            description:
              "Manicure masculina completa associada ao cuidado e hidratação das mãos.",
            includes: ["Manicure Masculina", "Hidratação das mãos", "Finalização"],
          },
        ],
      },
      {
        id: "pes-masc",
        title: "Pés",
        intro:
          "Cuidado pessoal para manter os pés limpos, cuidados e apresentáveis, com atenção ao conforto e aos detalhes.",
        items: [
          {
            name: "Pedicure Masculina",
            price: "25€",
            description:
              "Para o homem que deseja manter os pés limpos, cuidados e apresentáveis.",
            includes: [
              "Higienização",
              "Corte e modelagem das unhas",
              "Limpeza cuidadosa das cutículas",
              "Polimento",
              "Finalização / hidratação leve",
            ],
          },
        ],
      },
      {
        id: "executive",
        title: "Riso Executive",
        intro:
          "Cuidado pessoal para homens que gostam de estar bem cuidados, sem excessos e sem complicação.",
        items: [
          {
            name: "Riso Executive — Mãos + Pés",
            price: "42€",
            description:
              "Uma experiência prática e completa para quem valoriza higiene, apresentação e bem-estar em um único atendimento.",
            includes: ["Manicure Masculina", "Pedicure Masculina"],
          },
        ],
      },
      {
        id: "depilacao-masc",
        title: "Depilação Masculina",
        compact: [
          { name: "Axilas", price: "10€" },
          { name: "Peito", price: "18€" },
          { name: "Abdómen", price: "15€" },
          { name: "Peito + Abdómen", price: "28€" },
          { name: "Costas", price: "22€" },
          { name: "Braços", price: "18€" },
          { name: "Meia Perna", price: "20€" },
          { name: "Perna Completa", price: "27€" },
          { name: "Ombros", price: "10€" },
          { name: "Nariz / Orelhas", price: "7€" },
        ],
        footnote:
          "O valor corresponde à área escolhida no momento da marcação. Duas ou mais áreas são consideradas serviços adicionais.",
      },
    ],
  },
];

export const getCategory = (id?: string) =>
  categories.find((c) => c.id === id) ?? categories[0];