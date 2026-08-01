import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Tag — a small mono chip used for tech-stack and skill items. Optional
 * `icon` renders a mark (e.g. a brand logo) ahead of the label.
 */
export function Tag({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border border-line bg-ink px-2 py-1",
        "text-xs font-medium leading-none text-muted",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
