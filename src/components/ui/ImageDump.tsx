"use client";

import { useCallback, useRef, useState } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { LabItem } from "@/data/lab";

/** Small tilts so the pile reads as dropped, not arranged. */
const tilts = [
  "-rotate-3",
  "rotate-2",
  "-rotate-1",
  "rotate-3",
  "-rotate-2",
  "rotate-1",
  "rotate-4",
  "-rotate-4",
];

/** Mixed photo sizes so a full pile stays organic, whatever the count. */
const sizes = ["w-60", "w-72", "w-56", "w-64", "w-60", "w-80"];

/**
 * Deterministic scatter — same on server and client, so hydration never
 * blinks. Cells spread any number of photos across the pile; jitter keeps
 * the overlap that makes it read as a dump rather than a gallery.
 */
function initialPosition(index: number, count: number) {
  const cols = Math.max(2, Math.ceil(Math.sqrt(count * 1.5)));
  const rows = Math.max(2, Math.ceil(count / cols));
  const col = index % cols;
  const row = Math.floor(index / cols);
  return {
    x: (col / cols) * 78 + ((index * 37) % 14),
    y: ((row / rows) * 70 + ((index * 53) % 18) + 4),
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * ImageDump — the /lab photo pile. Photos are dumped, overlapping, and
 * slightly tilted; you drag them around to see the ones underneath. The
 * grabbed photo lifts to the top of the pile. Pointer-driven (mouse and
 * touch), with arrow-key nudging for keyboard users.
 */
export function ImageDump({ items }: { items: LabItem[] }) {
  const seed = items.map((_, index) =>
    initialPosition(index, items.length)
  );
  const [positions, setPositions] = useState(seed);
  const positionsRef = useRef(seed);
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const drag = useRef<{
    index: number;
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
    widthPx: number;
    heightPx: number;
  } | null>(null);
  const [front, setFront] = useState<number | null>(null);
  const [zCounter, setZCounter] = useState(0);

  const moveTo = useCallback((index: number, x: number, y: number) => {
    positionsRef.current[index] = { x, y };
    const tile = tileRefs.current[index];
    if (tile) {
      tile.style.left = `${x}%`;
      tile.style.top = `${y}%`;
    }
  }, []);

  const onPointerDown = useCallback(
    (event: React.PointerEvent, index: number) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const container = containerRef.current;
      const tile = tileRefs.current[index];
      if (!container || !tile) return;
      tile.setPointerCapture(event.pointerId);
      drag.current = {
        index,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: positionsRef.current[index].x,
        originY: positionsRef.current[index].y,
        widthPx: tile.offsetWidth,
        heightPx: tile.offsetHeight,
      };
      setFront(index);
      setZCounter((count) => count + 1);
    },
    []
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      const current = drag.current;
      const container = containerRef.current;
      if (!current || !container || event.pointerId !== current.pointerId) {
        return;
      }
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const x = clamp(
        current.originX + ((event.clientX - current.startX) / cw) * 100,
        0,
        100 - (current.widthPx / cw) * 100
      );
      const y = clamp(
        current.originY + ((event.clientY - current.startY) / ch) * 100,
        0,
        100 - (current.heightPx / ch) * 100
      );
      moveTo(current.index, x, y);
    },
    [moveTo]
  );

  const endDrag = useCallback(() => {
    if (!drag.current) return;
    drag.current = null;
    setPositions([...positionsRef.current]);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      const step = 2;
      let dx = 0;
      let dy = 0;
      switch (event.key) {
        case "ArrowLeft":
          dx = -step;
          break;
        case "ArrowRight":
          dx = step;
          break;
        case "ArrowUp":
          dy = -step;
          break;
        case "ArrowDown":
          dy = step;
          break;
        default:
          return;
      }
      event.preventDefault();
      const current = positionsRef.current[index];
      positionsRef.current[index] = {
        x: clamp(current.x + dx, 0, 100),
        y: clamp(current.y + dy, 0, 100),
      };
      setPositions([...positionsRef.current]);
      setFront(index);
      setZCounter((count) => count + 1);
    },
    []
  );

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label="Photo dump — drag the photos around to see the ones underneath"
      className="relative h-[34rem] w-full overflow-hidden border border-line bg-surface"
      style={{ minHeight: `max(34rem, ${items.length * 1.9}rem)` }}
    >
      {items.map((item, index) => {
        const position = positions[index];
        return (
          <div
            key={index}
            ref={(element) => {
              tileRefs.current[index] = element;
            }}
            role="img"
            tabIndex={0}
            aria-label={`${item.title} — taken at ${item.location}, ${item.date}`}
            onPointerDown={(event) => onPointerDown(event, index)}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "absolute touch-none select-none outline-none cursor-grab focus-visible:ring-2 focus-visible:ring-accent active:cursor-grabbing",
              sizes[index % sizes.length],
              tilts[index % tilts.length]
            )}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              zIndex: front === index ? 1000 + zCounter : index + 1,
            }}
          >
            <div className="border border-line bg-ink/70 transition-colors duration-200 hover:border-line-2">
              <div className="relative aspect-[4/3] w-full">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} photo`}
                    fill
                    draggable={false}
                    sizes="(min-width: 640px) 320px, 240px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera
                      className="size-5 text-muted/50"
                      strokeWidth={1.25}
                    />
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 select-none"
                />
              </div>
            </div>
              <div className="flex items-center justify-between gap-2 border-t border-line bg-surface px-2.5 py-1.5">
                <span className="truncate text-[11px] font-semibold tracking-wide text-fg">
                  {item.location}
                </span>
                <span className="shrink-0 text-[10px] font-medium tracking-wide text-muted">
                  {item.date}
                </span>
              </div>
            </div>
        );
      })}
    </div>
  );
}
