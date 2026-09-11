import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Sistema de idiomas do Studio Riso Souza.
 *
 * O idioma base do conteúdo escrito no código é `pt-PT`.
 * Cada idioma adicional declara:
 *  - `ui`: traduções diretas de rótulos de interface (chave → texto);
 *  - `terms`: adaptações de vocabulário aplicadas automaticamente a todo o
 *    conteúdo textual da página (menus, títulos, textos, serviços, FAQ,
 *    blog, formulários e rodapé).
 *
 * Para acrescentar um novo idioma no futuro basta adicionar uma entrada em
 * `LOCALES` — nenhuma refatoração é necessária.
 */

export const BASE_LOCALE = "pt-PT";

export type Locale = "pt-PT" | "pt-BR";

type LocaleDefinition = {
  label: string;
  shortLabel: string;
  flag: string;
  htmlLang: string;
  ui: Record<string, string>;
  terms: Record<string, string>;
};

export const LOCALES: Record<Locale, LocaleDefinition> = {
  "pt-PT": {
    label: "Português Europeu (PT-PT)",
    shortLabel: "PT",
    flag: "🇵🇹",
    htmlLang: "pt-PT",
    ui: {},
    terms: {},
  },
  "pt-BR": {
    label: "Português Brasil (PT-BR)",
    shortLabel: "BR",
    flag: "🇧🇷",
    htmlLang: "pt-BR",
    ui: {
      "nav.inicio": "Início",
      "nav.servicos": "Serviços",
      "nav.sobre": "Riso Souza",
      "nav.studio": "O Studio",
      "nav.galeria": "Galeria",
      "nav.avaliacoes": "Avaliações",
      "nav.blog": "Blog",
      "nav.faq": "FAQ",
      "nav.contato": "Contato",
      "cta.whatsapp": "Agendar pelo WhatsApp",
      "lang.label": "Idioma",
    },
    terms: {
      // Vocabulário
      Contacto: "Contato",
      contacto: "contato",
      Contactos: "Contatos",
      contactos: "contatos",
      contactar: "entrar em contato",
      "casa de banho": "banheiro",
      telemóvel: "celular",
      Telemóvel: "Celular",
      ecrã: "tela",
      equipas: "equipes",
      equipa: "equipe",
      utilizador: "usuário",
      utilizadores: "usuários",
      morada: "endereço",
      Morada: "Endereço",
      connosco: "conosco",
      "facto ": "fato ",
      rececionista: "recepcionista",
      Receção: "Recepção",
      receção: "recepção",
      "a viver": "vivendo",
      "está a carregar": "está carregando",
      "gostaria de reservar": "gostaria de agendar",
      Reserve: "Agende",
      reserve: "agende",
      Reservar: "Agendar",
      reservar: "agendar",
      reserva: "agendamento",
      Reserva: "Agendamento",
      marcação: "agendamento",
      Marcação: "Agendamento",
      marcações: "agendamentos",
      Marcações: "Agendamentos",
      "horário marcado": "hora marcada",
      "com marcação": "com hora marcada",
      autocarro: "ônibus",
      comboio: "trem",
      estacionamento: "estacionamento",
      "pequeno-almoço": "café da manhã",
      "telefone fixo": "telefone fixo",
      "cartão de cidadão": "documento de identidade",
      // Construções e tratamento
      "a si": "a você",
      "consigo": "com você",
      "para si": "para você",
      "o seu tempo": "o seu tempo",
      "está a ": "está ",
      "estamos a ": "estamos ",
      "estou a ": "estou ",
      "vamos a ": "vamos ",
      "a realizar": "realizando",
      "a cuidar": "cuidando",
      "a trabalhar": "trabalhando",
      // Estética / beleza
      "unhas de gel": "unhas em gel",
      "verniz gel": "esmalte em gel",
      verniz: "esmalte",
      Verniz: "Esmalte",
      "pestanas": "cílios",
      "Pestanas": "Cílios",
      "extensão de pestanas": "extensão de cílios",
      "sobrancelhas": "sobrancelhas",
      "manicure e pedicure": "manicure e pedicure",
      "depilação com cera": "depilação com cera",
      "produtos de qualidade": "produtos de qualidade",
      // Ortografia / termos comuns
      "Almada, Portugal": "Almada, Portugal",
      "atendimento personalizado": "atendimento personalizado",
      "email": "e-mail",
      "Perguntas frequentes": "Perguntas frequentes",
      // Expressões e construções adicionais
      "atualmente vive": "mora atualmente",
      "pretende": "quer",
      "Pretende": "Quer",
      "aceda": "acesse",
      "Aceda": "Acesse",
      "consulte": "confira",
      "Consulte": "Confira",
      "encerrado": "fechado",
      "Encerrado": "Fechado",
      "pormenor": "detalhe",
      "Pormenor": "Detalhe",
      "pormenores": "detalhes",
      "Pormenores": "Detalhes",
      "de seguida": "em seguida",
      "à sua espera": "esperando por voc\u00ea",
      "no seu ecrã": "na sua tela",
      "levar a cabo": "realizar",
      "faça o favor de": "por favor,",
      "sítio": "site",
      "ficheiro": "arquivo",
      "frigorífico": "geladeira",
    },
  },
};

export const LOCALE_LIST = Object.keys(LOCALES) as Locale[];

const STORAGE_KEY = "srs-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, fallback: string) => string;
};

const I18nContext = createContext<Ctx>({
  locale: BASE_LOCALE,
  setLocale: () => {},
  t: (_k, fallback) => fallback,
});

export function useI18n() {
  return useContext(I18nContext);
}

function applyTerms(text: string, terms: Record<string, string>) {
  let out = text;
  for (const [from, to] of Object.entries(terms)) {
    if (!out.includes(from)) continue;
    out = out.split(from).join(to);
  }
  return out;
}

function translateTree(root: HTMLElement, terms: Record<string, string>) {
  if (!Object.keys(terms).length) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent) continue;
    const tag = parent.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") continue;
    const value = node.nodeValue ?? "";
    if (!value.trim()) continue;
    // Não adaptar dados literais (e-mails, URLs, identificadores)
    if (/[@]|https?:|www\.|\.pt\b|\.com\b/.test(value)) continue;
    const next = applyTerms(value, terms);
    if (next !== value) node.nodeValue = next;
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(BASE_LOCALE);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in LOCALES) setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALES[locale].htmlLang;
  }, [locale]);

  const t = useCallback(
    (key: string, fallback: string) => LOCALES[locale].ui[key] ?? fallback,
    [locale],
  );

  const terms = LOCALES[locale].terms;

  // Adapta todo o conteúdo textual já renderizado ao idioma escolhido.
  useLayoutEffect(() => {
    if (!ref.current) return;
    translateTree(ref.current, terms);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const added of Array.from(record.addedNodes)) {
          if (added.nodeType === Node.ELEMENT_NODE) {
            translateTree(added as HTMLElement, terms);
          } else if (added.nodeType === Node.TEXT_NODE) {
            const node = added as Text;
            const next = applyTerms(node.nodeValue ?? "", terms);
            if (next !== node.nodeValue) node.nodeValue = next;
          }
        }
      }
    });
    observer.observe(ref.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [terms]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return (
    <I18nContext.Provider value={value}>
      {/* `key` força a remontagem para restaurar o texto original ao trocar de idioma */}
      <div key={locale} ref={ref} className="contents">
        {children}
      </div>
    </I18nContext.Provider>
  );
}
