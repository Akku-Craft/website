import type { Metadata } from "next";

import WikiPage from "@/components/wiki-page";
import { SITE_URL } from "@/lib/site";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Wiki",
  description: "Internal wiki and project notes for Akku-Craft.",
  alternates: {
    canonical: "/wiki",
  },
  openGraph: {
    title: "Wiki",
    description: "Internal wiki and project notes for Akku-Craft.",
    type: "website",
    url: `${baseUrl}/wiki`,
  },
  twitter: {
    title: "Wiki",
    description: "Internal wiki and project notes for Akku-Craft.",
  },
};

export default function WikiHomePage() {
  return <WikiPage slug="home" />;
}
