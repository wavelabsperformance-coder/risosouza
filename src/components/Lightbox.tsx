import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export interface GalleryItem {
  src: string;
  alt: string;
  label?: string;
}

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const open = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  if (!open || index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeria em ecrã inteiro"
      className="fixed inset-0 z-[100] flex flex-col bg-background/98 backdrop-blur-md"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const delta = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        if (delta < -50) next();
        if (delta > 50) prev();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-xs tracking-[0.26em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="p-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <X size={22} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4">
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-2 z-10 border border-border bg-background/60 p-3 text-foreground transition-colors hover:border-primary hover:text-primary md:left-8"
        >
          <ChevronLeft size={20} />
        </button>
        <figure className="max-h-full">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[75vh] w-auto object-contain"
          />
          {item.label && (
            <figcaption className="mt-4 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {item.label}
            </figcaption>
          )}
        </figure>
        <button
          type="button"
          aria-label="Seguinte"
          onClick={next}
          className="absolute right-2 z-10 border border-border bg-background/60 p-3 text-foreground transition-colors hover:border-primary hover:text-primary md:right-8"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    navigate: (i: number) => setIndex(i),
  };
}
