import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul className="marquee-track flex w-max gap-6">
        {loop.map((t, i) => (
          <li
            key={i}
            className="dark-block flex w-[85vw] max-w-sm shrink-0 flex-col border border-primary/20 p-9 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)] sm:w-[26rem]"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} fill="currentColor" />
                ))}
              </div>
              <Quote size={18} className="text-primary/60" />
            </div>
            <div className="mt-6 h-px w-10 bg-primary/50" />
            <p className="mt-5 flex-1 font-display text-xl leading-relaxed font-light text-foreground/90">
              {t.text}
            </p>
            <p className="mt-7 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
              {t.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

