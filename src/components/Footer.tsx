import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Music2 } from "lucide-react";
import { SITE, track, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { serviceCategories } from "@/lib/service-categories";

export function Footer() {
  return (
    <footer className="dark-block border-t border-border">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-4 lg:px-12">

        <div>
          <p className="font-display text-2xl tracking-[0.2em] uppercase">
            <span className="gold-text">Riso</span> Souza
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Um espaço de beleza, acolhimento e autoestima em Almada. Florescer
            não tem idade.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              onClick={() => track("clique_instagram", { local: "footer" })}
              className="border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram size={16} />
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Music2 size={16} />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              onClick={() => track("clique_whatsapp", { local: "footer" })}
              className="border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow">Serviços</h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {serviceCategories.map((c) => (
              <li key={`${c.genero}-${c.slug}`}>
                <Link
                  to="/servicos/$genero/$categoria"
                  params={{ genero: c.genero, categoria: c.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {c.label}
                  {c.genero === "para-ele" ? " · Para Ele" : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contacto</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.postal} {SITE.address.city}, {SITE.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon size={16} className="mt-0.5 shrink-0 text-primary" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("clique_whatsapp", { local: "footer_tel" })}
                className="hover:text-primary"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram size={16} className="mt-0.5 shrink-0 text-primary" />
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Horário</h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-foreground/80">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Atendimento realizado somente com horário marcado.
          </p>
          <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/politica-de-privacidade" className="hover:text-primary">
                Política de privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-6 text-[0.7rem] tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos
            reservados.
          </p>
          <a
            href={SITE.agency.instagram}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Site desenvolvido por {SITE.agency.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
