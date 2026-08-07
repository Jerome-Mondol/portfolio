"use client";

import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

/**
 * SiteFooter — the quiet close: copyright, a back-to-top link, and the Lab
 * sub-page link. Path-aware: on /lab the second link becomes Home.
 */
export function SiteFooter() {
  const pathname = usePathname();
  const onLab = pathname === "/lab";

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-medium text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <nav className="flex items-center gap-6" aria-label="Site">
          <a
            href="#top"
            className="group link-underline inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp
              className="size-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>
          <a
            href={onLab ? "/" : "/lab"}
            className={cn(
              "link-underline text-xs font-medium tracking-wide transition-colors",
              onLab ? "text-accent" : "text-muted hover:text-accent"
            )}
          >
            {onLab ? "Home" : "Lab"}
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs font-medium tracking-wide text-muted transition-colors hover:text-accent"
          >
            Résumé
          </a>
        </nav>
      </Container>
    </footer>
  );
}
