"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { certifications } from "@/data/certifications";

/** Vertical step between stacked certificates, in px. */
const GAP = 48;

/** How far a certificate travels in — it rises from below the page. */
const RISE = 100; // in svh

/**
 * How much scroll (in svh) sits between each certificate settling into the
 * pile. A smaller number means less scrolling between cards.
 */
const CARD_SCROLL = 50;

/** Card width — 94% of the container, capped on extreme wide screens. */
const CARD_WIDTH = "min(94%, 106svh)";

/** Certificate aspect — height is 66.7% of the width (3:2, landscape). */
const CARD_RATIO = 2 / 3;

/**
 * CertificationsStack — a pinned certificate pile. The section is deliberately
 * tall; while you scroll through it the pile stays stuck to the top of the
 * viewport (the "scroll lock") and each next certificate rises from below the
 * page into the stack, resting a little lower than the one before it. No fade
 * — pure upward travel. When every card has landed the pin releases and normal
 * scrolling resumes. Professional page: no tilts, landscape certificates (3:2)
 * centered in the container.
 */
export function CertificationsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = certifications.length;

  useEffect(() => {
    if (count <= 1) return;
    let raf = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const viewport = window.innerHeight;
      const scrollable = Math.max(section.offsetHeight - viewport, 1);
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      cardRefs.current.forEach((card, index) => {
        if (!card || index === 0) return;
        const start = (index - 1) / (count - 1);
        const end = index / (count - 1);
        const t = Math.min(Math.max((progress - start) / (end - start), 0), 1);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        card.style.transform = `translateY(${(1 - eased) * RISE}svh)`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      cardRefs.current.forEach((card) => {
        if (card) card.style.transform = "";
      });
    } else {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${CARD_SCROLL * (count - 1) + 100}svh` }}
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <Container>
          <div className="w-full">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="relative mx-auto overflow-hidden rounded-md border border-line bg-surface"
              style={{
                width: CARD_WIDTH,
                aspectRatio: "3 / 2",
                marginTop:
                  index === 0
                    ? undefined
                    : `calc(${GAP}px - ${CARD_WIDTH} * ${CARD_RATIO})`,
                transform:
                  index === 0 ? undefined : `translateY(${RISE}svh)`,
                opacity: 1,
              }}
            >
              <Image
                src={cert.image}
                alt={`${cert.title} certificate`}
                fill
                unoptimized
                sizes="(min-width: 640px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        </Container>
      </div>
    </div>
  );
}
