export type WikiPage = {
  slug: string;
  fileName: string;
  title: string;
  summary: string;
  icon: "home" | "architecture" | "hardware" | "safety";
};

export const wikiPages: WikiPage[] = [
  {
    slug: "home",
    fileName: "Home.md",
    title: "Home",
    summary: "Start here for the overview and navigation.",
    icon: "home",
  },
  {
    slug: "firmware-arduinobms",
    fileName: "Firmware-ArduinoBMS.md",
    title: "Firmware ArduinoBMS",
    summary: "How the site and project structure are organized.",
    icon: "architecture",
  },
  {
    slug: "mechanical-design",
    fileName: "Mechanical-Design.md",
    title: "Mechanical Design",
    summary: "Notes about the battery platform and modules.",
    icon: "hardware",
  },
  {
    slug: "schematics",
    fileName: "Schematics.md",
    title: "Schematics",
    summary: "Electrical schematics and circuit diagrams.",
    icon: "safety",
  },
];

export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find((page) => page.slug === slug);
}

export function getWikiRootPage(): WikiPage {
  return wikiPages[0];
}
