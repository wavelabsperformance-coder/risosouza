export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  duration: string;
  /** Valor do serviço. Editar aqui para exibir na página do serviço (ex.: "35 EUR"). Deixe vazio para não mostrar. */
  price?: string;
  care?: string;
  note?: string;
  /**
   * Antes e Depois do serviço. Basta adicionar aqui os pares de imagens reais
   * (importadas de `src/assets`) para que apareçam na página do serviço.
   * Enquanto estiver vazio, a secção mostra apenas as molduras reservadas.
   */
  beforeAfter?: { before?: string; after?: string; caption?: string }[];
  faq: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "alongamento-em-gel",
    name: "Alongamento em Gel, Esmaltação, Manicure e Blindagem",
    short:
      "Unhas elegantes, resistentes e com acabamento natural, desenhadas para o seu estilo.",
    description:
      "Unhas elegantes, resistentes e com acabamento natural, personalizadas de acordo com o estilo e a rotina de cada cliente. Cada aplicação é pensada para acompanhar o seu dia a dia com beleza e conforto.",
    benefits: [
      "Maior durabilidade",
      "Acabamento sofisticado",
      "Fortalecimento da autoestima",
      "Praticidade",
      "Aparência natural e impecável",
    ],
    duration: "2h a 2h30",
    care: "Manutenção recomendada entre 15 e 21 dias.",
    faq: [
      {
        q: "De quanto em quanto tempo faço a manutenção?",
        a: "A manutenção é recomendada entre 15 e 21 dias, conforme o crescimento natural das suas unhas.",
      },
      {
        q: "Quanto tempo demora o atendimento?",
        a: "Entre 2h e 2h30, sempre com horário marcado e sem pressa.",
      },
    ],
    seoTitle: "Alongamento em Gel em Almada | Studio Riso Souza",
    seoDescription:
      "Alongamento em gel, esmaltação em gel, manicure e blindagem em Almada. Unhas naturais, resistentes e personalizadas. Atendimento com horário marcado.",
  },
  {
    slug: "pedicure-medical",
    name: "Pedicure Medical",
    short:
      "Tratamento especializado para saúde, conforto e beleza dos pés, com técnica segura.",
    description:
      "Tratamento especializado para promover saúde, conforto e beleza dos pés através de técnicas seguras e cuidadosas, com atenção às necessidades individuais de cada cliente.",
    benefits: [
      "Tratamento de calosidades",
      "Cuidados com fissuras",
      "Tratamento de unhas espessas",
      "Corte técnico",
      "Cuidados preventivos para pé diabético",
      "Higiene e prevenção",
      "Hidratação profunda",
      "Esfoliação e renovação da pele",
      "Maior conforto ao caminhar",
    ],
    duration: "1h30",
    note: "Realizado mediante avaliação das necessidades da cliente.",
    faq: [
      {
        q: "Preciso de avaliação prévia?",
        a: "Sim. O procedimento é realizado mediante avaliação das necessidades de cada cliente.",
      },
      {
        q: "É indicado para pé diabético?",
        a: "Sim, com cuidados preventivos específicos e técnica adaptada a cada caso.",
      },
    ],
    seoTitle: "Pedicure Medical em Almada | Studio Riso Souza",
    seoDescription:
      "Pedicure medical em Almada: calosidades, fissuras, unhas espessas, corte técnico e cuidados preventivos. Saúde e conforto para os seus pés.",
  },
  {
    slug: "lash-design",
    name: "Lash Design",
    short:
      "Extensões de cílios personalizadas que realçam o olhar respeitando a sua beleza natural.",
    description:
      "Realce do olhar através da aplicação personalizada de extensões de cílios, respeitando o formato dos olhos e a beleza natural de cada mulher.",
    benefits: [
      "Olhar mais expressivo",
      "Resultado natural ou marcante",
      "Mais praticidade no dia a dia",
      "Mais autoestima",
    ],
    duration: "30 minutos",
    care: "Evitar molhar nas primeiras 24 horas.",
    faq: [
      {
        q: "Posso molhar os cílios depois?",
        a: "Recomenda-se evitar molhar nas primeiras 24 horas após a aplicação.",
      },
      {
        q: "O resultado fica natural?",
        a: "Sim. O desenho é escolhido consigo, do mais natural ao mais marcante.",
      },
    ],
    seoTitle: "Lash Design — Extensão de Cílios em Almada | Studio Riso Souza",
    seoDescription:
      "Lash design em Almada. Extensões de cílios personalizadas ao formato dos seus olhos, com resultado natural e olhar mais expressivo.",
  },
  {
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    short:
      "Modelagem personalizada que valoriza a harmonia facial e as suas características naturais.",
    description:
      "Modelagem personalizada valorizando a harmonia facial e as características naturais de cada rosto, com um desenho pensado para si.",
    benefits: [
      "Harmonização facial",
      "Expressão mais elegante",
      "Valorização do olhar",
      "Resultado natural",
    ],
    duration: "40 minutos",
    faq: [
      {
        q: "O desenho é o mesmo para todas?",
        a: "Não. O desenho é definido a partir da sua estrutura facial e das suas preferências.",
      },
    ],
    seoTitle: "Design de Sobrancelhas em Almada | Studio Riso Souza",
    seoDescription:
      "Design de sobrancelhas em Almada com modelagem personalizada, harmonização facial e resultado natural. Horário marcado.",
  },
  {
    slug: "design-de-sobrancelhas-com-henna",
    name: "Design de Sobrancelhas com Henna",
    short:
      "Modelagem com henna para preenchimento temporário e valorização do desenho natural.",
    description:
      "Modelagem com aplicação de henna para preenchimento temporário e valorização do desenho natural das sobrancelhas, corrigindo falhas com delicadeza.",
    benefits: [
      "Correção de falhas",
      "Efeito preenchido",
      "Valorização facial",
      "Resultado natural",
    ],
    duration: "40 minutos",
    faq: [
      {
        q: "A henna escurece muito?",
        a: "O tom é escolhido em conjunto consigo, respeitando a sua cor natural.",
      },
    ],
    seoTitle: "Sobrancelhas com Henna em Almada | Studio Riso Souza",
    seoDescription:
      "Design de sobrancelhas com henna em Almada. Correção de falhas, efeito preenchido e resultado natural.",
  },
  {
    slug: "depilacao-em-cera",
    name: "Depilação em Cera",
    short:
      "Técnica cuidadosa para uma pele lisa, macia e uma sensação prolongada de bem-estar.",
    description:
      "Remoção dos pelos através de técnica cuidadosa, proporcionando pele lisa, macia e sensação prolongada de bem-estar, num ambiente reservado e confortável.",
    benefits: [
      "Pele suave por mais tempo",
      "Crescimento gradual dos pelos",
      "Conforto",
      "Praticidade",
    ],
    duration: "Conforme a área",
    note: "Evitar exposição solar intensa após o procedimento.",
    faq: [
      {
        q: "Posso apanhar sol depois?",
        a: "Recomenda-se evitar exposição solar intensa após o procedimento.",
      },
    ],
    seoTitle: "Depilação em Cera em Almada | Studio Riso Souza",
    seoDescription:
      "Depilação em cera em Almada com técnica cuidadosa, ambiente reservado e pele suave por mais tempo.",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
