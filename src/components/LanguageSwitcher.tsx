import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { LOCALES, LOCALE_LIST, useI18n, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={t("lang.label", "Idioma")}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 border border-border px-3 py-2.5 text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:border-primary hover:text-primary"
      >
        <Globe size={13} />
        <span>{LOCALES[locale].shortLabel}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-56 border border-border bg-card py-1 shadow-lg"
        >
          {LOCALE_LIST.map((l: Locale) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-xs tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <span>
                  <span aria-hidden className="mr-2">
                    {LOCALES[l].flag}
                  </span>
                  {LOCALES[l].label}
                </span>
                {l === locale && <Check size={13} className="text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
