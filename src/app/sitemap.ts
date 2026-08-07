import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

const siteUrl = profile.siteUrl.replace(/\/$/, "");

/**
 * sitemap.xml — the routes Google can crawl. The root page is the most
 * important; /lab is added so the photo bench gets indexed too.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/lab`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}