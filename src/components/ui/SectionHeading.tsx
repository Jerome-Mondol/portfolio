import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * SectionHeading — the ruled heading used at the top of each section.
 * The hairline above it is the "spec sheet" page voice, not a kicker.
 */
export function SectionHeading({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-line pt-5", className)}>
      <h2
        id={id}
        className="scroll-mt-24 text-balance text-2xl font-bold tracking-tight text-fg sm:text-3xl"
      >
        {children}
      </h2>
      <span aria-hidden="true" className="heading-rule" />
    </div>
  );
}
