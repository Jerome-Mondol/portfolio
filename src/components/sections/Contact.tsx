import type { ComponentType, SVGProps } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { profile } from "@/data/profile";

const socialLinks: {
  key: keyof typeof profile.links;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { key: "github", label: "GitHub", Icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "x", label: "X (Twitter)", Icon: XIcon },
];

/**
 * Contact — the closing band. A bordered panel with the call to action,
 * social links, and a UI-first contact form (name, email, message). The
 * sending pipeline lands here later; the mailto route works right now.
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <Container className="py-20 sm:py-28">
        <div className="border border-line bg-surface p-6 sm:p-10">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Let&apos;s build something worth shipping.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted">
              {profile.location && (
                <>
                  {profile.location}.{" "}
                </>
              )}
              I&apos;m open to freelance and contract work. Tell me about your
              project and timeline, and I usually reply within a day or two.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-accent-bright"
              >
                Start a conversation
                <ArrowRight
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-bold text-fg transition-colors duration-200 hover:border-line-2 hover:text-accent"
              >
                Résumé
                <Download
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
                  strokeWidth={2}
                />
              </a>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ key, label, Icon }) => {
                  const href = profile.links[key];
                  if (!href) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-md border border-line text-muted transition-colors duration-200 hover:border-line-2 hover:text-accent"
                    >
                      <Icon className="size-[16px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 border-t border-line pt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
