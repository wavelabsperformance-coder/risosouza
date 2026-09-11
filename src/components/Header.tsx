import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SITE, track, whatsappLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Riso Souza" },
  { to: "/studio", label: "O Studio" },
  { to: "/galeria", label: "Galeria" },
  { to: "/avaliacoes", label: "Avaliações" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contacto" },
] as const;


export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`dark-block fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border py-0 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.8)]"
          : "border-b border-border/40"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-12">

        <Link
          to="/"
          className="font-display text-lg leading-none tracking-[0.28em] uppercase"
          onClick={() => setOpen(false)}
        >
          <span className="gold-text">Riso</span>{" "}
          <span className="text-foreground/80">Souza</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.slice(0, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>


        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:block" />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("clique_whatsapp", { local: "header" })}
            className="hidden border border-primary/60 px-6 py-3 text-[0.65rem] tracking-[0.24em] text-primary uppercase transition-all hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            Agendar pelo WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-foreground xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="dark-block fixed inset-0 top-[73px] z-40 overflow-y-auto px-6 pt-8 pb-16 xl:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 font-display text-3xl font-light"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("clique_whatsapp", { local: "menu_mobile" })}
            className="mt-10 block bg-primary px-6 py-4 text-center text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase"
          >
            Agendar pelo WhatsApp
          </a>
          <div className="mt-6 flex justify-center sm:hidden">
            <LanguageSwitcher />
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            {SITE.phoneDisplay}
          </p>

        </div>
      )}
    </header>
  );
}
