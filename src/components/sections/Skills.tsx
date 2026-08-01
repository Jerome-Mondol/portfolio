import type { SkillGroup, SkillItem } from "@/data/skills";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillLogo } from "@/components/ui/SkillLogo";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

/** Desktop span classes per cell layout — the bento grid's asymmetry. */
const layoutClasses = {
  feature: "sm:col-span-7 sm:row-span-2",
  stack: "sm:col-span-5 sm:row-span-1",
  band: "sm:col-span-12",
};

/** Accent bar color per cell — each cell owns one hue from the set. */
const accentClasses = {
  accent: "bg-accent",
  "accent-2": "bg-accent-2",
  "accent-3": "bg-accent-3",
  "accent-4": "bg-accent-4",
};

/**
 * Skills — an asymmetric bento grid proving full-stack breadth at a glance:
 * one large cell for the primary stack, two stacked cells for tools and
 * infrastructure, and a full-width band for specializations.
 */
export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-line">
      <Container className="py-16 sm:py-24">
        <SectionHeading>Skills</SectionHeading>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
          Primary stack, workflow, infrastructure, and where I go deep —
          breadth across the whole build without a wall of logos.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:auto-rows-[minmax(11rem,auto)]">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              className={layoutClasses[group.layout]}
              delay={index * 80}
            >
              <BentoCell group={group} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BentoCell({ group }: { group: SkillGroup }) {
  const isFeature = group.layout === "feature";
  const isBand = group.layout === "band";
  const items = group.items.map((item) =>
    typeof item === "string" ? { name: item } : item
  );

  return (
    <article
      className={cn(
        "group h-full border border-line bg-surface p-5 sm:p-6",
        "transition-colors duration-200 hover:border-line-2 hover:bg-surface-2",
        isFeature && "flex flex-col gap-6",
        isBand && "sm:flex-row sm:gap-10"
      )}
    >
      <div className={cn(isBand && "sm:w-[18rem] sm:shrink-0")}>
        <h3
          className={cn(
            "font-bold tracking-tight text-fg",
            isFeature ? "text-xl sm:text-2xl" : "text-base"
          )}
        >
          {group.label}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            "cell-bar mt-3 block h-0.5 w-6",
            accentClasses[group.accent]
          )}
        />
        <p className="mt-3 text-sm leading-relaxed text-muted">{group.blurb}</p>
      </div>

      {isFeature && <FeatureItems items={items} />}
      {group.layout === "stack" && <StackItems items={items} />}
      {isBand && <BandItems items={items} />}
    </article>
  );
}

/**
 * Ruled list helper — one hairline above each row (two columns on desktop,
 * one on mobile), never above the first row.
 */
function ruledItemClasses(index: number) {
  return cn(
    "border-t border-line py-3.5",
    index === 0 && "first:border-t-0",
    index === 1 && "sm:border-t-0"
  );
}

/** Primary stack — a ruled two-column list of logo + name + detail lines. */
function FeatureItems({ items }: { items: SkillItem[] }) {
  return (
    <ul className="mt-auto grid gap-x-8 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={item.name} className={ruledItemClasses(index)}>
          <p className="flex items-center gap-2.5 text-sm font-semibold text-fg">
            <SkillLogo
              slug={item.logo ?? ""}
              className="size-[18px] shrink-0 text-muted/80 transition-colors duration-200 group-hover:text-muted"
            />
            {item.name}
          </p>
          {item.detail && (
            <p className="mt-0.5 text-xs leading-relaxed text-muted">
              {item.detail}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Tools & infrastructure — mono tag chips (with brand marks) pinned to the base. */
function StackItems({ items }: { items: SkillItem[] }) {
  return (
    <ul className="mt-auto flex flex-wrap gap-2 pt-4">
      {items.map((item) => (
        <li key={item.name}>
          <Tag
            icon={
              item.logo ? (
                <SkillLogo slug={item.logo} className="size-3 shrink-0" />
              ) : undefined
            }
          >
            {item.name}
          </Tag>
        </li>
      ))}
    </ul>
  );
}

/** Specializations — a full-width ruled band of name + detail rows. */
function BandItems({ items }: { items: SkillItem[] }) {
  return (
    <ul className="grid gap-x-10 sm:flex-1 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={item.name} className={ruledItemClasses(index)}>
          <p className="text-sm font-semibold text-fg">{item.name}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-muted">
            {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}
