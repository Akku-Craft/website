import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { wikiPages } from "@/lib/wiki-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/wiki`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/code-of-conduct`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contributing`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const wikiRoutes: MetadataRoute.Sitemap = wikiPages
    .filter((page) => page.slug !== "home")
    .map((page) => ({
      url: `${baseUrl}/wiki/${page.slug}`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [...staticRoutes, ...wikiRoutes];
}
