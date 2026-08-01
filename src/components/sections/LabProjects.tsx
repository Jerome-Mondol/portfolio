"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { LabProject } from "@/data/lab-projects";
import { labProjects } from "@/data/lab-projects";

/** Status → accent hue. WORKING is teal, SMOKED is amber — the hues are earned. */
const statusHues: Record<
  LabProject["status"],
  { text: string; border: string }
> = {
  WORKING: { text: "text-accent-2", border: "border-accent-2" },
  "HALF-WORKING": { text: "text-accent-3", border: "border-accent-3" },
  SMOKED: { text: "text-accent", border: "border-accent" },
  "IN PIECES": { text: "text-accent-4", border: "border-accent-4" },
};

const fallbackStatusHue = statusHues.SMOKED;

/** Sheets sit a fraction off-square, pinned rather than aligned. */
const sheetTilts = [
  "rotate-[0.6deg]",
  "rotate-[-0.7deg]",
  "rotate-[0.4deg]",
  "rotate-[-0.5deg]",
];

/**
 * LabProjects — the /lab project showcase. Not cards: pinned bench "build
 * sheets", each with a photo slot, an inventory serial, build spec rows
 * (where it was made, what it was built from, how long it took), and a short
 * honest account of how it was made. Data comes from data/lab-projects.js.
 */
export function LabProjects() {
  return (
    <section className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
            Build sheets.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            The projects, filed the honest way — pinned up like bench notes,
            with a photo and the full story: where, what, how long, and how
            (including the part where it broke).
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labProjects.map((project, index) => (
            <Reveal
              key={project.serial}
              delay={(index % 3) * 70}
              className="h-full"
            >
              <BuildSheet
                project={project}
                tilt={sheetTilts[index % sheetTilts.length]}
              />
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}

function BuildSheet({
  project,
  tilt,
}: {
  project: LabProject;
  tilt: string;
}) {
  const hue = statusHues[project.status] ?? fallbackStatusHue;
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });

  const updateActiveImage = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100));

      setImagePosition({ x, y });

      if (images.length <= 1) return;

      const ratio = (event.clientX - rect.left) / rect.width;
      const nextIndex = Math.min(
        images.length - 1,
        Math.max(0, Math.floor(ratio * images.length))
      );

      setActiveImageIndex(nextIndex);
    },
    [images.length]
  );

  const resetActiveImage = useCallback(() => {
    setActiveImageIndex(0);
    setImagePosition({ x: 50, y: 50 });
  }, []);

  return (
    <article
      className={cn(
        "relative border border-line bg-surface",
        "transition-colors duration-200 hover:border-line-2 hover:bg-surface-2",
        tilt
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-6 z-10 h-4 w-14 -rotate-3 rounded-[2px] bg-accent/70"
      />

      <div
        className="relative aspect-[16/10] w-full border-b border-line bg-ink/60"
        onPointerEnter={updateActiveImage}
        onPointerMove={updateActiveImage}
        onPointerLeave={resetActiveImage}
      >
        {images.length > 0 ? (
          <Image
            key={images[activeImageIndex]}
            src={images[activeImageIndex]}
            alt={`${project.title} photo`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-[object-position] duration-150 ease-out"
            style={{ objectPosition: `${imagePosition.x}% ${imagePosition.y}%` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="size-5 text-muted/50" strokeWidth={1.25} />
          </div>
        )}
        {images.length > 1 && (
          <span className="absolute bottom-3 left-3 rounded-sm border border-line bg-ink/70 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.15em] text-fg">
            {String(activeImageIndex + 1).padStart(2, "0")}/{String(
              images.length
            ).padStart(2, "0")}
          </span>
        )}
        <span
          aria-hidden="true"
          className={cn(
            "absolute right-3 top-3 rotate-6 rounded-sm border bg-ink/60 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.15em]",
            hue.text,
            hue.border
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[10px] font-bold tracking-[0.18em] text-muted">
            {project.serial}
          </span>
          <span className="text-xs font-medium tracking-wide text-muted">
            {project.year}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold tracking-tight text-fg">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium tracking-wide text-muted">
          {project.category}
        </p>

        <dl className="mt-4 divide-y divide-line border-y border-line">
          <SpecRow label="Made where" value={project.where} />
          <SpecRow label="Built from" value={project.builtFrom} />
          <SpecRow label="Time spent" value={project.time} />
        </dl>

        <div className="mt-4">
          <p className="text-[11px] font-medium tracking-wide text-muted/70">
            How it was made
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {project.how}
          </p>
        </div>
      </div>
    </article>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2">
      <dt className="shrink-0 text-[11px] font-medium tracking-wide text-muted/70">
        {label}
      </dt>
      <dd className="text-right text-[13px] font-medium text-fg">{value}</dd>
    </div>
  );
}
