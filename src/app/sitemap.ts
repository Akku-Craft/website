import type { MetadataRoute } from "next";
import { localizedPath, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { wikiPages } from "@/lib/wiki-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const localizedStaticRoutes: MetadataRoute.Sitemap = locales.flatMap(
    (locale) => [
      {
        url: `${baseUrl}${localizedPath(locale, "/")}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${baseUrl}${localizedPath(locale, "/wiki")}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}${localizedPath(locale, "/contact")}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}${localizedPath(locale, "/code-of-conduct")}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.4,
      },
      {
        url: `${baseUrl}${localizedPath(locale, "/legal")}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.4,
      },
      {
        url: `${baseUrl}${localizedPath(locale, "/contributing")}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.9,
      },
    ],
  );

  const localizedWikiRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    wikiPages
      .filter((page) => page.slug !== "home")
      .map((page) => ({
        url: `${baseUrl}${localizedPath(locale, `/wiki/${page.slug}`)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
      })),
  );

  return [...localizedStaticRoutes, ...localizedWikiRoutes];
}
