import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * ArrowLink — an inline link with a drawn arrow. External links open in a
 * new tab with an up-right arrow; internal/placeholder links use a plain
 * right arrow.
 */
export function ArrowLink({
  href,
  external,
  children,
  className,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = external ?? /^https?:/.test(href);
  const Icon = isExternal ? ArrowUpRight : ArrowRight;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group/link link-underline inline-flex items-center gap-1.5 font-medium text-fg",
        "transition-colors duration-200 hover:text-accent",
        className
      )}
    >
      {children}
      <Icon
        className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        strokeWidth={1.5}
      />
    </a>
  );
}
