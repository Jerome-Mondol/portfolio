"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, FlaskConical } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

/**
 * SiteHeader — a minimal sticky bar. On desktop it shows the name and the
 * Lab / email / Résumé links; on small screens those collapse into an animated
 * hamburger that morphs into a close mark and opens a dropdown with the
 * section links. Path-aware so the name always returns home.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const onLab = pathname.startsWith("/lab");
  const [open, setOpen] = useState(false);

  // Close the menu on navigation and when Escape is pressed.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const menuItems = [{ href: onLab ? "/" : "/lab", label: onLab ? "Home" : "Lab" }];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={onLab ? "/" : "#top"}
          onClick={() => setOpen(false)}
          className="link-underline text-lg font-bold tracking-tight text-fg transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 sm:gap-7 md:flex" aria-label="Site">
          <Link
            href="/lab"
            className={cn(
              "group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200",
              onLab ? "text-accent" : "text-muted hover:text-accent"
            )}
          >
            <span className="inline-flex items-center gap-1.5">
              <FlaskConical className="size-3.5 shrink-0 animate-lab-cue" strokeWidth={1.8} />
              <span className="animate-lab-cue-delayed">lab</span>
            </span>
          </Link>

          <a
            href={`mailto:${profile.email}`}
            className="group link-underline inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            {profile.email}
            <ArrowUpRight
              className="size-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs font-bold tracking-wide text-fg transition-colors duration-200 hover:border-line-2 hover:text-accent"
          >
            Résumé
            <Download
              className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
              strokeWidth={1.75}
            />
          </a>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-line transition-colors duration-200 hover:border-line-2 md:hidden"
        >
          <span
            className={cn(
              "block h-px w-5 bg-fg transition-all duration-300 ease-out",
              open && "translate-y-[6px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-fg transition-all duration-300 ease-out",
              open && "translate-y-[-6px] -rotate-45"
            )}
          />
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full overflow-hidden border-b border-line bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out md:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col py-4">
          <nav
            aria-label="Mobile"
            className="divide-y divide-line border-y border-line"
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out",
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                )}
                style={{ transitionDelay: open ? `${120 + index * 50}ms` : "0ms" }}
              >
                <span className="inline-flex items-baseline gap-3">
                  <span className="text-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="transition-colors hover:text-accent">
                    {item.label}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </nav>

          <div
            className={cn(
              "mt-4 flex items-center justify-between gap-3 transition-all duration-300 ease-out",
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{ transitionDelay: open ? `${300 + menuItems.length * 50}ms` : "0ms" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs font-bold tracking-wide text-fg transition-colors duration-200 hover:border-line-2 hover:text-accent"
            >
              Résumé
              <Download
                className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}