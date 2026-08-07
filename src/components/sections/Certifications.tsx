import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationsStack } from "@/components/sections/CertificationsStack";
import { certificationsUrl } from "@/data/certifications";

/**
 * Certifications — a pinned pile of certificates. Scrolling locks the pile to
 * the viewport and stacks each certificate on top of the last; when the pile
 * is complete the scroll releases into a single "view all certificates"
 * link. Issuers come from data/certifications.js.
 */
export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 border-b border-line">
      <Container className="pt-16 sm:pt-24">
        <Reveal>
          <SectionHeading id="certifications">Certifications</SectionHeading>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
            Credentials earned along the way, newest on top. Keep scrolling to
            stack the pile.
          </p>
        </Reveal>
      </Container>

      <div className="mt-8 sm:mt-10">
        <CertificationsStack />
      </div>

      <Container className="pt-14 pb-16 sm:pt-16 sm:pb-24">
        <Reveal delay={120}>
          <div className="flex justify-center">
            <a
              href={certificationsUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-bold text-fg transition-colors duration-200 hover:border-line-2 hover:text-accent"
            >
              View all certificates
              <ArrowUpRight
                className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}