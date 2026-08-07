"use client";

import { useMemo, useState } from "react";
import { Camera } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ImageDump } from "@/components/ui/ImageDump";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { labItems } from "@/data/lab";

/**
 * LabDump — the photo pile, sat at the very end of /lab: images dumped,
 * overlapping, and draggable so you can rummage to the ones underneath.
 * Each photo carries a little "taken at" tag. Data comes from data/lab.js.
 * A year filter above the pile derives its options straight from that data
 * and shows only the selected year's photos.
 */
export function LabDump() {
  const years = useMemo(
    () =>
      [...new Set(labItems.map((item) => item.date))].sort(
        (a, b) => Number(b) - Number(a)
      ),
    []
  );
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const visibleItems =
    selectedYear === "all"
      ? labItems
      : labItems.filter((item) => item.date === selectedYear);

  return (
    <section className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
            The dump.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            MEMORIES ARENT ORGANIZED!!!
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
              By year
            </span>
            {["all", ...years].map((year) => {
              const active = selectedYear === year;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-[11px] font-medium tracking-wide transition-colors duration-200",
                    active
                      ? "border-accent bg-ink text-accent"
                      : "border-line bg-ink text-muted hover:border-line-2 hover:text-fg"
                  )}
                >
                  {year === "all" ? "All" : year}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-4">
            <ImageDump key={selectedYear} items={visibleItems} />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-6 border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-bold tracking-tight text-fg">
                That&apos;s the lab.
              </p>
              <p className="mt-1 text-sm text-muted">
                The professional stuff is one click away — I promise it&apos;s
                tidier.
              </p>
            </div>
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-accent-bright"
            >
              Back to the professional page
              <Camera
                className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
