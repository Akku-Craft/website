import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contact/verify", "/de/contact/verify", "/en/contact/verify"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
