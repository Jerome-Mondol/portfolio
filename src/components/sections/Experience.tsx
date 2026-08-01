import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

/**
 * Experience — a ruled timeline in the same grammar as the table of
 * contents: period on the left, role, company, summary, and a short set
 * of spec-style highlights with a teal marker. Data comes from
 * data/experience.js.
 */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading>Experience</SectionHeading>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
            Where the work has been done, recent first.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.period}`} delay={index * 60}>
              <div className="py-6 sm:py-8">
                <div className="grid gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted">
                      {entry.period}
                    </p>
                    {entry.location && (
                      <p className="mt-1 text-xs font-medium tracking-wide text-muted/70">
                        {entry.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-fg sm:text-xl">
                      {entry.role}
                      <span className="text-muted"> · {entry.company}</span>
                    </h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                      {entry.summary}
                    </p>

                    {entry.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {entry.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-baseline gap-2.5 text-sm text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.55em] size-1 shrink-0 self-baseline bg-accent-2"
                            />
                            <span className="leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
