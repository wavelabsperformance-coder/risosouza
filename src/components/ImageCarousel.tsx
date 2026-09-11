import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselItem = { src: string; alt: string; label?: string };

/** Carrossel com navegação lateral, suporte a gestos (swipe) e adaptação dinâmica à quantidade de slides. */
export function ImageCarousel({
  items,
  className = "",
}: {
  items: CarouselItem[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  // Garante que o índice resete e reconheça a lista correta se a quantidade de itens mudar
  useEffect(() => {
    setIndex(0);
  }, [items]);

  const go = (dir: number) => {
    if (!items.length) return;
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  const current = items[index];
  if (!current || items.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onTouchStart={(e) => {
        startX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const delta = (e.changedTouches[0]?.clientX ?? 0) - startX.current;
        if (Math.abs(delta) > 45) go(delta < 0 ? 1 : -1);
        startX.current = null;
      }}
    >
      {/* Imagem do slide com transição suave */}
      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        loading="lazy"
        className="h-[55vh] min-h-[420px] w-full animate-[fade-in_0.6s_ease] object-cover md:h-[70vh]"
      />

      {current.label && (
        <span className="absolute bottom-5 left-5 bg-onyx/80 px-4 py-2 text-[0.62rem] tracking-[0.26em] text-cream uppercase">
          {current.label}
        </span>
      )}

      {items.length > 1 && (
        <>
          {/* Seta esquerda */}
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-4 -translate-y-1/2 border border-cream/30 bg-onyx/60 p-3 text-cream backdrop-blur transition-colors hover:border-primary hover:text-primary active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Seta direita */}
          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={() => go(1)}
            className="absolute top-1/2 right-4 -translate-y-1/2 border border-cream/30 bg-onyx/60 p-3 text-cream backdrop-blur transition-colors hover:border-primary hover:text-primary active:scale-95"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicadores de slides (tracinhos) */}
          <div className="absolute right-5 bottom-6 flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Ir para a imagem ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-4 bg-cream/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}