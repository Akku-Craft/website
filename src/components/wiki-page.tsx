import { notFound } from "next/navigation";

import WikiMarkdown from "@/components/wiki-markdown";
import { getWikiPage } from "@/lib/wiki-data";
import { readWikiMarkdown } from "@/lib/wiki";
import { getRequestLocale } from "@/lib/i18n-server";

type WikiPageProps = {
  slug: string;
};

export default async function WikiPage({ slug }: WikiPageProps) {
  const page = getWikiPage(slug);
  const locale = await getRequestLocale();

  if (!page) {
    notFound();
  }

  const source = await readWikiMarkdown(page.fileName, locale);

  return <WikiMarkdown source={source} />;
}
