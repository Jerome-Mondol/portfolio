import { Camera } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ImageDump } from "@/components/ui/ImageDump";
import { Reveal } from "@/components/ui/Reveal";
import { labItems } from "@/data/lab";

/**
 * LabDump — the photo pile, sat at the very end of /lab: images dumped,
 * overlapping, and draggable so you can rummage to the ones underneath.
 * Each photo carries a little "taken at" tag. Data comes from data/lab.js.
 */
export function LabDump() {
  return (
    <section className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
            The dump.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Photos dumped, not arranged. Drag them around to see the ones
            underneath — the tag on each says where it was taken.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ImageDump items={labItems} />
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
