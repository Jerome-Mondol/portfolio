import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

const siteUrl = profile.siteUrl.replace(/\/$/, "");

/**
 * robots.txt — allow full crawling and point Google at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}