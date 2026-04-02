import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WikiPage from "@/components/wiki-page";
import { SITE_URL } from "@/lib/site";
import { getWikiPage, wikiPages } from "@/lib/wiki-data";

const baseUrl = SITE_URL;

type WikiSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return wikiPages
    .filter((page) => page.slug !== "home")
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: WikiSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getWikiPage(slug);

  if (!page) {
    return {
      title: "Wiki",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${page.title} | Wiki`,
    description: page.summary,
    alternates: {
      canonical: `/wiki/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | Wiki`,
      description: page.summary,
      type: "article",
      url: `${baseUrl}/wiki/${page.slug}`,
    },
    twitter: {
      title: `${page.title} | Wiki`,
      description: page.summary,
    },
  };
}

export default async function WikiSlugPage({ params }: WikiSlugPageProps) {
  const { slug } = await params;
  const page = getWikiPage(slug);

  if (!page || page.slug === "home") {
    notFound();
  }

  return <WikiPage slug={slug} />;
}
