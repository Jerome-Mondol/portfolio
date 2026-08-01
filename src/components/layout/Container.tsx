import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Container — the main content column. Capped at 70% of the viewport on
 * large screens (per the project brief), with responsive padding below.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:max-w-[60%]",
        className
      )}
    >
      {children}
    </div>
  );
}
