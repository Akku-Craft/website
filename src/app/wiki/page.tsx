import type { Metadata } from "next";

import WikiPage from "@/components/wiki-page";

const baseUrl =
  process.env.NEXT_PUBLIC_URL || "https://akku-craft.usbverkehrtherum.de";

export const metadata: Metadata = {
  title: "Wiki | Akku-Craft",
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
