"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { profile } from "@/data/profile";

/**
 * SiteLoader — a shared-element, first-paint reveal. The name resolves
 * letter-by-letter in the screen center, then the whole center column FLIPs
 * across to wherever the hero's `#hero-name` heading sits (matched type size
 * and measure, so it lands pixel-tight). Once it is fully in place the sheet
 * fades — and because the loader name and hero name share identical geometry,
 * that one fade IS the crossfade, so the name never dips. Only then does the
 * rest of the hero slide in from the left. On pages that render no
 * `#hero-name` (the Lab) it simply fades away and hands over. Respects
 * `prefers-reduced-motion` by skipping straight to the reveal.
 */
/** Loader timeline (ms). Order: name lands on the hero h1 → crisp sheet fade
 *  (name swap) → description slides in behind it. Nothing moves through a
 *  translucent layer, so the hand-off is clean. */
const T_TRAVEL = 1000; // name begins moving to the hero h1 (750ms flight)
const T_SWAP = 1750; // name is in place: sheet fades + hero name revealed
const T_HIDE = 1750; // same moment — the fade IS the crossfade

export function SiteLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const center = centerRef.current;
    const name = nameRef.current;
    if (!root || !center || !name) return;

    const html = document.documentElement;

    const release = () => {
      html.classList.remove("site-loading");
      html.classList.add("site-loaded");
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      release();
      root.classList.add("is-hidden");
      return;
    }

    const hero = document.getElementById("hero-name");

    const travel = window.setTimeout(() => {
      root.classList.add("is-traveling");

      if (!hero) {
        // No hero to hand off to (e.g. the Lab): fade the sheet out.
        release();
        root.classList.add("is-hidden");
        return;
      }

      const nameRect = name.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();

      const dx = heroRect.left - nameRect.left;
      const dy = heroRect.top - nameRect.top;

      // The loader name shares the hero name's metrics, so landing here reads
      // as one continuous element; a scale FLIP corrects any round-off.
      center.style.transition = "transform 0.75s var(--ease-out-expo)";
      void center.offsetWidth;
      center.style.transform = `translate(${dx}px, ${dy}px)`;
    }, T_TRAVEL);

    // Once the name is fully in place, release the hero and fade the sheet —
    // the fade doubles as the name crossfade. The description's own slide-in
    // is staggered (via the hero's --d) to begin as this clears.
    const reveal = window.setTimeout(release, T_SWAP);
    const hide = window.setTimeout(() => root.classList.add("is-hidden"), T_HIDE);

    return () => {
      window.clearTimeout(travel);
      window.clearTimeout(reveal);
      window.clearTimeout(hide);
    };
  }, []);

  const letters = profile.name.split("");

  return (
    <div className="site-loader" ref={rootRef} aria-hidden="true">
      <span className="site-loader__corner site-loader__corner--tl" />
      <span className="site-loader__corner site-loader__corner--tr" />
      <span className="site-loader__corner site-loader__corner--bl" />
      <span className="site-loader__corner site-loader__corner--br" />

      <div className="site-loader__center" ref={centerRef}>
        <p className="site-loader__eyebrow">{profile.role}</p>
        <p className="site-loader__name" ref={nameRef}>
          {letters.map((letter, i) => (
            <span
              key={i}
              className="site-loader__letter"
              style={{ "--d": `${40 + i * 34}ms` } as CSSProperties}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
        <div className="site-loader__rule">
          <i />
        </div>
      </div>

      <p className="site-loader__meta site-loader__meta--left">
        Portfolio — first paint
      </p>
      <p className="site-loader__meta site-loader__meta--right">
        {profile.email}
      </p>
    </div>
  );
}
