import type { SVGProps } from "react";
import {
  siCloudflare,
  siDocker,
  siEslint,
  siExpress,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedis,
  siSupabase,
  siStorybook,
  siTailwindcss,
  siTerraform,
  siTurborepo,
  siTypescript,
  siVite,
  siVercel,
  siVitest,
} from "simple-icons";

/**
 * Brand marks for the skills cells (Simple Icons, CC0). Each entry maps a
 * `logo` slug from data/skills.js to its open-license mark, drawn in the
 * page's own tokens via `currentColor`. Marks the slug list omits (e.g. AWS,
 * Playwright, whose icons were withdrawn from Simple Icons) simply render
 * nothing, leaving a text-only chip.
 */
const ICONS: Record<string, string> = {
  typescript: siTypescript.path,
  react: siReact.path,
  nextdotjs: siNextdotjs.path,
  nodedotjs: siNodedotjs.path,
  postgresql: siPostgresql.path,
  express: siExpress.path,
  mongodb: siMongodb.path,
  supabase: siSupabase.path,
  firebase: siFirebase.path,
  cloudflare: siCloudflare.path,
  tailwindcss: siTailwindcss.path,
  redis: siRedis.path,
  docker: siDocker.path,
  terraform: siTerraform.path,
  git: siGit.path,
  github: siGithub.path,
  vite: siVite.path,
  figma: siFigma.path,
  vitest: siVitest.path,
  turborepo: siTurborepo.path,
  storybook: siStorybook.path,
  vercel: siVercel.path,
  eslint: siEslint.path,
};

export function SkillLogo({
  slug,
  title,
  className,
  ...props
}: { slug: string; title?: string } & SVGProps<SVGSVGElement>) {
  const path = ICONS[slug];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d={path} />
    </svg>
  );
}
