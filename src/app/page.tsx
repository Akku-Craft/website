import { Badge } from "@/components/ui/badge";
import GitHubSections from "@/components/github-sections";
import SectionHeading from "@/components/section-heading";
import SiteFooter from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  description:
    "Akku-Craft develops a modular battery system to reduce e-waste with decentralized monitoring, open hardware, and open source firmware.",
  title: {
    absolute: "Akku-Craft",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akku-Craft",
    description:
      "Discover the modular Akku-Craft battery platform, project architecture, and open source repositories.",
    type: "website",
    url: baseUrl,
  },
  twitter: {
    title: "Akku-Craft",
    description:
      "Discover the modular Akku-Craft battery platform and open source repositories.",
  },
};

type ProjectCard = {
  title: string;
  description: string;
  tags: string[];
  links: Array<{ label: string; href: string }>;
};

const featuredProjects: ProjectCard[] = [
  {
    title: "ArduinoBMS",
    description: "Arduino firmware for our battery management system.",
    tags: ["C", "C++", "Arduino", "BMS"],
    links: [
      { label: "Repository", href: "https://github.com/Akku-Craft/ArduinoBms" },
    ],
  },
  {
    title: "Schematics",
    description: "Hardware schematics and electronic circuit designs.",
    tags: ["KiCAD"],
    links: [
      { label: "Repository", href: "https://github.com/Akku-Craft/schematics" },
    ],
  },
  {
    title: "3d-models",
    description: "3D design files and CAD models for the enclosure.",
    tags: ["KiCAD"],
    links: [
      { label: "Repository", href: "https://github.com/Akku-Craft/3d-models" },
    ],
  },
];

function ProjectGrid({ projects }: { projects: ProjectCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow"
        >
          <h3 className="mb-3 text-xl font-heading">{project.title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-foreground/80">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="neutral">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-main px-3 py-1.5 text-sm font-heading text-main-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                {link.label}
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[36px_36px] opacity-10" />

      <section className="mb-8 rounded-base border-2 border-border bg-main px-8 py-10 text-main-foreground shadow-shadow md:px-12 md:py-14">
        <h1 className="mb-4 text-5xl font-heading leading-tight sm:text-6xl md:text-7xl">
          <span className="glitch-name" data-text="Akku-Craft">
            Akku-Craft
          </span>
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed md:text-xl">
          Damit unsere Zukunft modular bleibt.
        </p>
      </section>

      <section className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow md:p-8">
        <SectionHeading index="02" title="Get Started" />
        <p className="mb-5 max-w-3xl text-sm leading-relaxed md:text-base">
          Want to get involved? Read the wiki to understand the project, or jump
          straight in and contribute.{" "}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/wiki"
            className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-heading uppercase tracking-wide text-main-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Read Wiki
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="/contributing"
            className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-background px-4 py-2 text-sm font-heading uppercase tracking-wide text-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Learn how to contribute
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section
        id="about"
        className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
      >
        <SectionHeading index="03" title="About" />
        <p className="mb-4 max-w-4xl text-sm leading-relaxed md:text-base">
          Sustainable • Modular • Decentralized
        </p>
        <p className="mb-4 max-w-4xl text-sm leading-relaxed md:text-base">
          Akku-Craft is a universal, modular battery system designed to actively
          reduce electronic waste. Thanks to decentralized monitoring and
          precise cell balancing, the system guarantees a safe, long-lasting,
          and sustainable power supply for a wide variety of devices.
        </p>
        <h2 className="mb-3 text-xl font-heading">The Team:</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2 text-sm leading-relaxed md:text-base">
            <a
              href="https://github.com/0day-sudo"
              target="_blank"
              className="underline underline-offset-2"
            >
              Timon
            </a>{" "}
            - Firmware Developer (C++ / BMS Logic)
          </li>
          <li className="mb-2 text-sm leading-relaxed md:text-base">
            <a
              href="https://github.com/keineahnungwasichhierreinschreibensoll"
              target="_blank"
              className="underline underline-offset-2"
            >
              Fabian
            </a>{" "}
            - Hardware Engineering, Prototyping & Management
          </li>
          <li className="mb-2 text-sm leading-relaxed md:text-base">
            <a
              href="https://github.com/jumpstone"
              target="_blank"
              className="underline underline-offset-2"
            >
              Henry
            </a>{" "}
            - Circuit Design, 3D Modeling, Website Developer & IT-Management
          </li>
        </ul>
      </section>

      <section
        id="projects"
        className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
      >
        <SectionHeading index="04" title="Featured Repositories" />
        <ProjectGrid projects={featuredProjects} />
      </section>

      <GitHubSections organization="akku-craft" />

      <SiteFooter />
    </main>
  );
}
