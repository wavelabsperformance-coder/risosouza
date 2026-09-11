import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.7rem] tracking-[0.18em] uppercase">
      <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-primary">
            Início
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight size={12} className="opacity-50" />
            {item.to ? (
              <Link to={item.to as "/"} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
