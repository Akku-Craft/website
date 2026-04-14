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
  title: "Privacy Policy",
  description:
    "Privacy policy for the Akku-Craft website, including contact handling and local preference storage.",
  alternates: {
    canonical: "/legal/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Akku-Craft",
    description:
      "Privacy policy for the Akku-Craft website, including contact handling and local preference storage.",
    type: "website",
    url: `${baseUrl}/legal/privacy`,
  },
  twitter: {
    title: "Privacy Policy",
    description:
      "Privacy policy for the Akku-Craft website, including contact handling and local preference storage.",
  },
};

export default async function PrivacyPage() {
  const locale = await getRequestLocale();
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "pages",
    locale,
    "legal",
    "privacy.mdx"
  );

  const mdxSource = await readFile(filePath, "utf8");

  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[36px_36px] opacity-10" />

      <MDXRemote
        source={mdxSource}
        components={{
          ContactButton: ({ children }) => (
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-heading uppercase tracking-wide text-main-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              {children}
            </Link>
          ),
        }}
      />

      <SiteFooter />
    </main>
  );
}