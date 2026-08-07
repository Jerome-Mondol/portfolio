import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";

/** Section index for the page's table of contents. */
const navItems = [
  { href: "#skills", index: "01", label: "Skills" },
  { href: "#experience", index: "02", label: "Experience" },
  { href: "#certifications", index: "03", label: "Certifications" },
  { href: "#work", index: "04", label: "Selected Work" },
  { href: "#contact", index: "05", label: "Contact" },
];

/**
 * Hero — name, availability, bio, and a ruled table of contents that hands
 * the visitor straight to the sections that prove capability.
 */
export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <h1
              id="hero-name"
              className="hero-name text-[clamp(2.5rem,6.5vw,4.75rem)] font-extrabold leading-[0.95] tracking-tightest text-accent"
            >
              {profile.name}
            </h1>

            <p
              className="hero-in mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg"
              style={{ "--d": "0.08s" } as CSSProperties}
            >
              {profile.role}
            </p>

            <p
              className="hero-in mt-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-muted"
              style={{ "--d": "0.1s" } as CSSProperties}
            >
              <MapPin className="size-3.5 shrink-0 text-accent" strokeWidth={1.8} aria-hidden="true" />
              {profile.location}
            </p>

            <p
              className="hero-in mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg"
              style={{ "--d": "0.14s" } as CSSProperties}
            >
              {profile.bio}
            </p>
          </div>

          <figure
            className="hero-in relative mx-auto aspect-[4/5] w-32 shrink-0 self-center overflow-hidden rounded-md border border-line sm:w-36 lg:col-span-4 lg:w-48"
            style={{ "--d": "0.22s" } as CSSProperties}
          >
            <Image
              src="/profile/profile.webp"
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 288px, 384px"
              priority
              className="object-cover"
            />
          </figure>
        </div>

        <nav
          aria-label="Page sections"
          className="hero-in mt-12"
          style={{ "--d": "0.2s" } as CSSProperties}
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
