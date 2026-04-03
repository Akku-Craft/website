import SiteFooter from "@/components/site-footer";
import { getRequestLocale } from "@/lib/i18n-server";
import { localizedPath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { readFile } from "fs/promises";
import path from "path";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Contributing",
  description:
    "How to contribute to Akku-Craft, where to start, and which project areas are open for help.",
  alternates: {
    canonical: "/contributing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contributing | Akku-Craft",
    description:
      "How to contribute to Akku-Craft, where to start, and which project areas are open for help.",
    type: "website",
    url: "${baseUrl}/contributing",
  },
  twitter: {
    title: "Contributing to Akku-Craft",
    description:
      "How to contribute to Akku-Craft, where to start, and which project areas are open for help.",
  },
};

export default async function ContributingPage() {
  const locale = await getRequestLocale();
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "pages",
    locale,
    "contributing.mdx"
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
          ),
          WikiLink: () => (
            <Link
              href={localizedPath(locale, "/wiki")}
              className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-heading uppercase tracking-wide text-main-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Akku-Craft Wiki
            </Link>
          )
        }} 
      />

      <SiteFooter />
    </main>
  );
}
