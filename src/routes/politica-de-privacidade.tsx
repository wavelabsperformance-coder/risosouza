import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Studio Riso Souza" },
      {
        name: "description",
        content:
          "Como o Studio Riso Souza recolhe, utiliza e protege os dados partilhados através do site e dos canais de contacto.",
      },
      { property: "og:title", content: "Política de Privacidade" },
      {
        property: "og:description",
        content: "Tratamento de dados no Studio Riso Souza.",
      },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Política de privacidade" }]}
        title="Política de privacidade"
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-20 text-sm leading-loose text-muted-foreground">
        <p>
          O {SITE.name} respeita a sua privacidade. Os dados partilhados através
          do formulário de contacto — nome, telefone, serviço pretendido e
          mensagem — são utilizados exclusivamente para responder ao seu pedido
          de marcação.
        </p>
        <p>
          Não vendemos nem partilhamos os seus dados com terceiros para fins
          comerciais. O site pode utilizar ferramentas de medição (Google
          Analytics, Google Tag Manager e Meta Pixel) para compreender a
          navegação e melhorar a experiência.
        </p>
        <p>
          Pode solicitar, a qualquer momento, o acesso, a correção ou a
          eliminação dos seus dados através do e-mail {SITE.email} ou do
          WhatsApp {SITE.phoneDisplay}.
        </p>
      </section>
    </>
  );
}
