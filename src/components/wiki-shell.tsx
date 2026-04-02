"use client";

import { getWikiRootPage, wikiPages } from "@/lib/wiki-data";
import {
  BookOpenText,
  ChevronRight,
  Cpu,
  House,
  Shield,
  Library,
} from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

const iconMap = {
  home: House,
  architecture: Library,
  hardware: Cpu,
  safety: Shield,
} as const;

type WikiShellProps = {
  children: ReactNode;
};

function getWikiPath(slug: string) {
  return slug === getWikiRootPage().slug ? "/wiki" : `/wiki/${slug}`;
}

export default function WikiShell({ children }: WikiShellProps) {
  const segment = useSelectedLayoutSegment();
  const activeSlug = segment ?? getWikiRootPage().slug;
  const currentPage =
    wikiPages.find((page) => page.slug === activeSlug) ?? getWikiRootPage();

  return (
    <main className="relative w-full px-0 pb-12">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[36px_36px] opacity-10" />

      <div className="w-full">
        <aside className="mb-6 h-fit w-full rounded-base border-2 border-border bg-secondary-background p-4 font-normal shadow-shadow md:fixed md:left-0 md:top-28 md:mb-0 md:w-64 md:max-h-[calc(100vh-7rem)] md:overflow-y-auto md:rounded-r-base md:border-l-0">
          <div className="mb-4 flex items-center gap-3 rounded-base border-2 border-border bg-background p-3 shadow-shadow">
            <div className="inline-flex size-10 items-center justify-center rounded-base border-2 border-border bg-main text-foreground shadow-shadow">
              <BookOpenText className="size-5" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/60">
                Wiki
              </p>
              <p className="text-sm font-medium">Project notes</p>
            </div>
          </div>

          <nav className="space-y-2" aria-label="Wiki navigation">
            {wikiPages.map((page) => {
              const Icon = iconMap[page.icon];
              const isActive = page.slug === currentPage.slug;

              return (
                <Link
                  key={page.slug}
                  href={getWikiPath(page.slug)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-base border-2 border-border px-3 py-3 shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-main text-main-foreground"
                      : "bg-background text-foreground"
                  }`}
                >
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-medium">
                    {page.title}
                  </span>
                  <ChevronRight className="mt-1 size-4 shrink-0 opacity-70" />
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0 px-4 md:pl-72 md:pr-8 lg:pl-80 lg:pr-12">
          <div className="mb-6 rounded-base border-2 border-border bg-secondary-background px-4 py-3 font-normal shadow-shadow">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/55">
              /wiki/ {currentPage.title}
            </p>
          </div>

          {children}
        </section>
      </div>
    </main>
  );
}
