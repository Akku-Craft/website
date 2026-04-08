export type WikiPage = {
  kind: "page";
  slug: string;
  fileName: string;
  title: string;
  summary: string;
  icon: "home" | "architecture" | "hardware" | "safety";
};

export type WikiExternalLink = {
  kind: "external";
  href: string;
  title: string;
  summary: string;
  icon: "external" | "user";
};

export type WikiSidebarItem = WikiPage | WikiExternalLink;

export const wikiPages: WikiPage[] = [
  {
    kind: "page",
    slug: "home",
    fileName: "Home.md",
    title: "Home",
    summary: "Start here for the overview and navigation.",
    icon: "home",
  },
  {
    kind: "page",
    slug: "firmware-arduinobms",
    fileName: "Firmware-ArduinoBMS.md",
    title: "Firmware ArduinoBMS",
    summary: "How the site and project structure are organized.",
    icon: "architecture",
  },
  {
    kind: "page",
    slug: "mechanical-design",
    fileName: "Mechanical-Design.md",
    title: "Mechanical Design",
    summary: "Notes about the battery platform and modules.",
    icon: "hardware",
  },
  {
    kind: "page",
    slug: "schematics",
    fileName: "Schematics.md",
    title: "Schematics",
    summary: "Electrical schematics and circuit diagrams.",
    icon: "safety",
  },
];

export const wikiSidebarItems: WikiSidebarItem[] = [
  ...wikiPages,
  {
    kind: "external",
    href: "/contributing",
    title: "Contributing",
    summary: "Learn how to contribute to the project.",
    icon: "user",
  },
];

export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find((page) => page.slug === slug);
}

export function getWikiRootPage(): WikiPage {
  return wikiPages[0];
}
