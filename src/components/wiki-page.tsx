import { notFound } from "next/navigation";

import WikiMarkdown from "@/components/wiki-markdown";
import { getWikiPage } from "@/lib/wiki-data";
import { readWikiMarkdown } from "@/lib/wiki";

type WikiPageProps = {
  slug: string;
};

export default async function WikiPage({ slug }: WikiPageProps) {
  const page = getWikiPage(slug);

  if (!page) {
    notFound();
  }

  const source = await readWikiMarkdown(page.fileName);

  return <WikiMarkdown source={source} />;
}
