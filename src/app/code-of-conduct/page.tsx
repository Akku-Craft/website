import SiteFooter from "@/components/site-footer";
import { getRequestLocale } from "@/lib/i18n-server";
import { localizedPath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { readFile } from "fs/promises";
import path from "path";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "Community guidelines for respectful and inclusive interaction across Akku-Craft spaces and projects.",
  alternates: {
    canonical: "/code-of-conduct",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Code of Conduct | Akku-Craft",
    description:
      "Community guidelines for respectful and inclusive interaction across Akku-Craft spaces.",
    type: "website",
    url: "${baseUrl}/code-of-conduct",
  },
  twitter: {
    title: "Code of Conduct",
    description:
      "Community guidelines for respectful and inclusive interaction across Akku-Craft spaces.",
  },
};

export default async function CodeOfConductPage() {
  const locale = await getRequestLocale();
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "pages",
    locale,
    "code-of-conduct.mdx"
  );
  
  const mdxSource = await readFile(filePath, "utf8");

  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[36px_36px] opacity-10" />      
      
      <MDXRemote 
        source={mdxSource} 
        components={{
          ContactLink: ({ children }) => (
            <a
              style={{ textDecoration: "underline" }}
              href={localizedPath(locale, "/contact")}
            >
              {children}
            </a>
          )
        }} 
      />

      <SiteFooter />
    </main>
  );
}
