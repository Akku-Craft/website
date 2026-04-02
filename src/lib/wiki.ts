import { readFile } from "node:fs/promises";
import path from "node:path";

const wikiDirectory = path.join(process.cwd(), "src", "content", "wiki");

export async function readWikiMarkdown(slug: string): Promise<string> {
  const filePath = path.join(wikiDirectory, `${slug}.md`);
  return readFile(filePath, "utf8");
}
