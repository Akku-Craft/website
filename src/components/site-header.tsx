"use client";

import { useThemeMode } from "@/components/theme-mode-provider";
import { localizedPath, type Locale } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  logoSrc?: string;
  siteName?: string;
  locale: Locale;
  dict: any;
};

const socialLinks = [
  {
    href: "https://github.com/akku-craft",
    iconName: "github",
    label: "GitHub",
  },
];

function socialIconButtonClassName(isCompact: boolean) {
  return `inline-flex items-center justify-center rounded-base border-2 border-border bg-secondary-background shadow-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-main ${
    isCompact ? "size-9" : "size-11"
  }`;
}

export default function SiteHeader({
  logoSrc = "/logo.png",
  siteName = "Akku-Craft",
  locale,
  dict,
}: SiteHeaderProps) {
  const { effectiveMode } = useThemeMode();
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      if (currentScrollY <= 40) {
        setIsCompact(false);
      } else if (isScrollingDown && currentScrollY > 60) {
        setIsCompact(true);
      } else if (!isScrollingDown && lastScrollY - currentScrollY > 10) {
        setIsCompact(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial check
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: localizedPath(locale, "/wiki"), label: dict.wiki },
    {
      href: localizedPath(locale, "/contributing"),
      label: dict.contributing,
    },
    { href: localizedPath(locale, "/contact"), label: dict.contact },
  ];

  return (
    <div
      className={`transition-all duration-300 ${isCompact ? "pt-0 px-0" : "pt-4 px-4 md:pt-6 md:px-8"}`}
    >
      <header
        className={`mx-auto w-full max-w-6xl border-2 border-border bg-secondary-background/95 shadow-shadow backdrop-blur supports-backdrop-filter:bg-secondary-background/85 transition-all duration-300 ${
          isCompact
            ? "rounded-none border-t-0 p-1 md:p-1.5"
            : "rounded-base p-3 md:p-4"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link
            href={localizedPath(locale, "/")}
            className="inline-flex min-w-0 items-center gap-2 md:gap-3"
          >
            <Image
              src={logoSrc}
              alt={`${siteName} Logo`}
              width={40}
              height={40}
              className={`shrink-0 rounded-base border-2 border-border bg-background p-1 shadow-shadow transition-all duration-300 ${
                isCompact ? "size-7 md:size-8" : "size-9 md:size-10"
              }`}
            />
            <span
              className={`truncate font-heading uppercase tracking-wide transition-all duration-300 ${
                isCompact ? "text-base md:text-lg" : "text-lg md:text-xl"
              }`}
            >
              {siteName}
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-base border-2 border-border bg-background shadow-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:hidden ${
                isCompact ? "size-9" : "size-11"
              }`}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-site-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className={isCompact ? "size-4" : "size-5"} />
              ) : (
                <Menu className={isCompact ? "size-4" : "size-5"} />
              )}
            </button>

            <div className="hidden flex-wrap gap-2 md:flex">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  className={socialIconButtonClassName(isCompact)}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Image
                    src={`/badges/${link.iconName}${effectiveMode === "light" ? "-dark" : ""}.png`}
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className={`object-contain transition-all duration-300 ${
                      isCompact ? "size-4" : "size-5"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-site-menu"
            className="mt-3 space-y-3 rounded-base border-2 border-border bg-background p-3 md:hidden"
          >
            <nav className="space-y-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm text-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  className={socialIconButtonClassName(isCompact)}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Image
                    src={`/badges/${link.iconName}${effectiveMode === "light" ? "-dark" : ""}.png`}
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className="size-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
