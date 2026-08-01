import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { StatusTag } from "@/components/ui/StatusTag";
import { profile } from "@/data/profile";

/** Section index for the page's table of contents. */
const navItems = [
  { href: "#skills", index: "01", label: "Skills" },
  { href: "#experience", index: "02", label: "Experience" },
  { href: "#work", index: "03", label: "Selected Work" },
  { href: "#contact", index: "04", label: "Contact" },
];

/**
 * Hero — name, availability, bio, and a ruled table of contents that hands
 * the visitor straight to the sections that prove capability.
 */
export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="pb-16 pt-14 sm:pb-24 sm:pt-20">
        <StatusTag className="animate-hero-fade">{profile.availability}</StatusTag>

        <h1
          className="animate-hero-rise mt-8 max-w-[12ch] text-balance text-[clamp(2.75rem,7vw,5.25rem)] font-extrabold leading-[0.95] tracking-tightest text-fg"
          style={{ animationDelay: "0.08s" }}
        >
          {profile.name}
        </h1>

        <p
          className="animate-hero-rise mt-7 max-w-prose text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "0.16s" }}
        >
          {profile.bio}
        </p>

        <nav
          aria-label="Page sections"
          className="animate-hero-rise mt-14"
          style={{ animationDelay: "0.24s" }}
        >
          <ol className="divide-y divide-line border-y border-line">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-center justify-between gap-4 py-3.5 text-xs font-medium tracking-wide text-muted transition-colors hover:text-fg sm:py-4"
                >
                  <span className="inline-flex items-baseline gap-3">
                    <span className="text-accent" aria-hidden="true">
                      {item.index}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
