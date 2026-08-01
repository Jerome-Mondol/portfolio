import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * StatusTag — the "Available for opportunities" pill with the page's one
 * authored motion moment: a soft pulsing dot.
 */
export function StatusTag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5",
        "text-xs font-medium tracking-wide text-fg",
        className
      )}
    >
      <span className="relative flex size-2" aria-hidden="true">
        <span className="animate-pulse-dot block size-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}
