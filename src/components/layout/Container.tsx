import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Container — the main content column. 80% on laptop screens (where a fixed
 * 60% crowds the hero name and photo), 60% once the display is large. Every
 * section/component renders inside this so content never spills full-bleed.
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
        "mx-auto w-full px-5 sm:px-8 lg:max-w-[80%] xl:max-w-[60%]",
        className
      )}
    >
      {children}
    </div>
  );
}