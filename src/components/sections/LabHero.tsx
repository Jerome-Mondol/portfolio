import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

/**
 * LabHero — the /lab masthead, kept deliberately clean: name, one line of
 * honest voice, and a way back. The chaos lives in the dump below, not the
 * header.
 */
export function LabHero() {
  return (
    <section className="border-b border-line">
      <Container className="pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="relative">
          <h1 className="max-w-[10ch] text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-tightest text-fg">
            The Lab.
          </h1>
          <span
            aria-hidden="true"
            className="absolute right-0 top-1 rotate-6 rounded-sm border border-accent px-2 py-1 text-[10px] font-bold tracking-[0.18em] text-accent"
          >
            UNSORTED
          </span>
        </div>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
          The unprofessional page. Electronics, robotics, and whatever else I
          was building instead of the portfolio.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent px-4 py-3 text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-bright hover:bg-accent-bright focus-visible:border-accent-bright focus-visible:bg-accent-bright"
        >
          <span className="inline-flex size-7 items-center justify-center rounded-sm border border-ink/15 bg-ink/10 text-ink transition-transform duration-200 group-hover:-translate-x-0.5">
          <ArrowLeft
            className="size-4 shrink-0"
            strokeWidth={1.5}
          />
          </span>
          Back to the professional page
        </Link>
      </Container>
    </section>
  );
}
