"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

/**
 * SiteHeader — a minimal sticky bar: name on the left, the Lab sub-page and
 * contact email on the right. Path-aware so the name always returns home and
 * the current page reads as such.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const onLab = pathname.startsWith("/lab");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={onLab ? "/" : "#top"}
          className="link-underline text-sm font-bold tracking-tight text-fg transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7" aria-label="Site">
          <Link
            href="/lab"
            className={cn(
              "link-underline text-xs font-medium tracking-wide transition-colors",
              onLab ? "text-accent" : "text-muted hover:text-accent"
            )}
          >
            lab
          </Link>

          <a
            href={`mailto:${profile.email}`}
            className="group link-underline inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            {profile.email}
            <ArrowUpRight
              className="size-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </a>
        </nav>
      </Container>
    </header>
  );
}