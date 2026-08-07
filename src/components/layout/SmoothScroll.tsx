"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";

/**
 * SmoothScroll — site-wide inertial scrolling via Lenis. It reads the native
 * scroll but eases wheel/touch input over a short lerp, which makes the pinned
 * certificate pile and the scroll reveals feel worked by hand rather than
 * snapped. Disabled for users who prefer reduced motion. Anchor links are
 * eased through Lenis too.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!reduceMotion.matches);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        wheelMultiplier: 1,
        touchMultiplier: 1.3,
        smoothWheel: true,
        syncTouch: true,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}