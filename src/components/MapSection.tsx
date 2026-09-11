import { Clock, MapPin, Navigation } from "lucide-react";
import { SITE, mapsDirections, mapsEmbedSrc, track } from "@/lib/site";

export function MapSection() {
  return (
    <section aria-labelledby="localizacao" className="relative w-full">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-12 lg:px-12">
        <p className="eyebrow">Localização</p>
        <h2
          id="localizacao"
          className="mt-4 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl"
        >
          Encontre o seu momento em <span className="gold-text">Almada</span>
        </h2>

        <div className="dark-block mt-10 grid gap-10 border border-primary/20 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)] sm:p-12 lg:grid-cols-3">
          <div>
            <div className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-medium">{SITE.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postal} {SITE.address.city},{" "}
                  {SITE.address.country}
                </p>
                <p className="mt-3 text-sm text-primary">
                  Localizado na Cave Esquerda.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <Clock size={18} className="mt-1 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-medium">Horário</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {SITE.hours.map((h) => (
                    <li key={h.day}>
                      {h.day}: {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Pontos de referência</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {SITE.landmarks.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <a
              href={mapsDirections}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("clique_localizacao", { acao: "como_chegar" })}
              className="mt-6 inline-flex items-center gap-2 border border-primary/60 px-6 py-3 text-[0.65rem] tracking-[0.24em] text-primary uppercase transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Navigation size={14} /> Como chegar
            </a>
          </div>
        </div>

      </div>

      <div className="relative w-full border-y border-border">
        <iframe
          title={`Mapa — ${SITE.name}, Almada`}
          src={mapsEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full grayscale-[0.35] contrast-[1.02] md:h-[520px]"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </section>
  );
}
