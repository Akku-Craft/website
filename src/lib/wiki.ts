import { readFile } from "node:fs/promises";
import path from "node:path";

const wikiDirectory = path.join(process.cwd(), "src", "content", "wiki");

export async function readWikiMarkdown(fileName: string): Promise<string> {
  const filePath = path.join(wikiDirectory, fileName);
  return readFile(filePath, "utf8");
}
