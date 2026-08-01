import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LabDump } from "@/components/sections/LabDump";
import { LabHero } from "@/components/sections/LabHero";
import { LabProjects } from "@/components/sections/LabProjects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `The Lab — ${profile.name}`,
  description:
    "The deliberately unprofessional page: a photo dump and build sheets from electronics, robotics, and whatever else didn't make the portfolio.",
};

export default function LabPage() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <LabHero />
        <LabProjects />
        <LabDump />
      </main>
      <SiteFooter />
    </div>
  );
}
