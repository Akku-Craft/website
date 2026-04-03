import { Badge } from "@/components/ui/badge";
import GitHubSections from "@/components/github-sections";
import SectionHeading from "@/components/section-heading";
import SiteFooter from "@/components/site-footer";
import { getRequestLocale } from "@/lib/i18n-server";
import { localizedPath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";

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

export default async function Page() {
  const locale = await getRequestLocale();
  const dict = await getDictionary(locale, "home");

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
          {dict.heroSubtitle}
        </p>
      </section>

      <section className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow md:p-8">
        <SectionHeading index="02" title={dict.getStarted.title} />
        <p className="mb-5 max-w-3xl text-sm leading-relaxed md:text-base">
          {dict.getStarted.text}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={localizedPath(locale, "/wiki")}
            className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-heading uppercase tracking-wide text-main-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            {dict.getStarted.readWiki}
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href={localizedPath(locale, "/contributing")}
            className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-background px-4 py-2 text-sm font-heading uppercase tracking-wide text-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            {dict.getStarted.contribute}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section
        id="about"
        className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
      >
        <SectionHeading index="03" title={dict.about.title} />
        <p className="mb-4 max-w-4xl text-sm leading-relaxed md:text-base">
          {dict.about.subtitle}
        </p>
        <p className="mb-4 max-w-4xl text-sm leading-relaxed md:text-base">
          {dict.about.description}
        </p>
        <h2 className="mb-3 text-xl font-heading">
          {dict.about.teamTitle}
        </h2>
        <ul className="list-disc pl-6">
          <li className="mb-2 text-sm leading-relaxed md:text-base">
            <a
              href="https://github.com/0day-sudo"
              target="_blank"
              className="underline underline-offset-2"
            >
              Timon
            </a>{" "}
            - {dict.about.teamTimon}
          </li>
          <li className="mb-2 text-sm leading-relaxed md:text-base">
            <a
              href="https://github.com/keineahnungwasichhierreinschreibensoll"
              target="_blank"
              className="underline underline-offset-2"
            >
              Fabian
            </a>{" "}
            - {dict.about.teamFabian}
          </li>
          <li className="mb-2 text-sm leading-relaxed md:text-base">
            <a
              href="https://github.com/jumpstone"
              target="_blank"
              className="underline underline-offset-2"
            >
              Henry
            </a>{" "}
            - {dict.about.teamHenry}
          </li>
        </ul>
      </section>

      <section
        id="projects"
        className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
      >
        <SectionHeading index="04" title={dict.repos.title} />
        <ProjectGrid projects={dict.repos.projects} />
      </section>

      <GitHubSections organization="akku-craft" />

      <SiteFooter />
    </main>
  );
}
