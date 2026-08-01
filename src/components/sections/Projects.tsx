import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

/**
 * Projects — featured work as editorial cards with a visual header: a real
 * screenshot when data/projects.js provides one, otherwise a ruled "spec
 * drawing" plate (filename, index, abstract interface bars) as a clearly
 * labeled stand-in for the user to replace. Each card carries one accent
 * from the coordinated set, rotated across cards.
 */

/** One accent per card, rotated — each project owns one hue. */
const textAccents = [
  "text-accent",
  "text-accent-2",
  "text-accent-3",
  "text-accent-4",
];
const barAccents = ["bg-accent", "bg-accent-2", "bg-accent-3", "bg-accent-4"];

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading>Selected Work</SectionHeading>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
            A few recent builds — shipped, maintained, and measured.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 80}>
              <article
                className={cn(
                  "flex h-full flex-col border border-line bg-surface",
                  "transition-colors duration-200 hover:border-line-2 hover:bg-surface-2"
                )}
              >
                <ProjectImage project={project} index={index} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-xs font-medium tracking-wide text-muted">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-fg">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-6 border-t border-line pt-4">
                    {project.links.live && (
                      <ArrowLink
                        href={project.links.live}
                        external={project.links.live !== "#"}
                        className="text-sm"
                      >
                        Live
                      </ArrowLink>
                    )}
                    {project.links.code && (
                      <ArrowLink
                        href={project.links.code}
                        external={project.links.code !== "#"}
                        className="text-sm"
                      >
                        Source
                      </ArrowLink>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** The card's visual header: a real screenshot or the spec-drawing plate. */
function ProjectImage({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full border-b border-line">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const textAccent = textAccents[index % textAccents.length];
  const barAccent = barAccents[index % barAccents.length];

  return (
    <div
      aria-hidden="true"
      className="aspect-[16/10] w-full border-b border-line bg-ink/60 p-5 sm:p-6"
    >
      <div className="flex items-baseline justify-between text-xs font-medium tracking-wide">
        <span className="text-muted">{project.slug}</span>
        <span className={textAccent}>
          P.{String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-6 flex h-[60%] flex-col justify-between">
        <div className="plate-bar h-2.5 w-2/5 bg-line-2" />
        <div className="plate-bar h-2.5 w-full bg-line-2/70" />
        <div className="plate-bar h-2.5 w-4/5 bg-line-2/50" />
        <div className={cn("plate-bar h-2.5 w-1/3", barAccent)} />
      </div>
    </div>
  );
}
