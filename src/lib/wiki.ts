import { readFile } from "node:fs/promises";
import path from "node:path";

const wikiDirectory = path.join(process.cwd(), "src", "content", "wiki");

export async function readWikiMarkdown(
  fileName: string,
  locale: string = "de",
): Promise<string> {
  const filePath = path.join(wikiDirectory, locale, fileName);
  return readFile(filePath, "utf8");
}
