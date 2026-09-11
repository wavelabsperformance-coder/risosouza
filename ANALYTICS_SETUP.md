# Analytics — Studio Riso Souza

Nenhum ID está escrito no código. Basta definir as variáveis de ambiente
(`.env` local ou painel da hospedagem) e os scripts carregam automaticamente.

| Variável | Ferramenta |
| --- | --- |
| `VITE_GTM_ID` | Google Tag Manager (`GTM-XXXXXXX`) |
| `VITE_GA4_MEASUREMENT_ID` | Google Analytics 4 (`G-XXXXXXXXXX`) |
| `VITE_META_PIXEL_ID` | Meta Pixel |
| `VITE_META_DOMAIN_VERIFICATION` | Verificação de domínio Meta Business |
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console |

Sem ID definido, o respetivo script simplesmente não é injetado (zero impacto
em performance).

## Estrutura

- `src/integrations/analytics/config.ts` — leitura das variáveis e utilitários
- `src/integrations/analytics/gtm.ts` — contentor GTM + `dataLayer`
- `src/integrations/analytics/ga4.ts` — gtag.js com page views manuais (SPA)
- `src/integrations/analytics/metaPixel.ts` — Meta Pixel (eventos padrão/custom)
- `src/integrations/analytics/events.ts` — catálogo de eventos e equivalências
- `src/integrations/analytics/index.ts` — `initAnalytics`, `trackPageView`, `trackEvent`

`track()` em `src/lib/site.ts` continua a funcionar e encaminha tudo para esta camada.

## Eventos disparados

`page_view`, `whatsapp_click`, `phone_click`, `social_click`, `cta_click`,
`form_start`, `form_submit`, `lead`, `gallery_view`, `location_click`.

No Meta, os equivalentes padrão são `PageView`, `Contact` e `Lead`.

## Como testar

1. Definir os IDs no `.env` e reiniciar o servidor.
2. Google Tag Assistant / GA4 DebugView para GA4 e GTM.
3. Meta Pixel Helper para o Pixel.
4. Navegar entre páginas e confirmar um `page_view` por rota.
