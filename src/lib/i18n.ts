export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";
export const localeCookieName = "akku-craft-locale";
export const localeHeaderName = "x-akku-craft-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "de" || value === "en";
}

export function normalizeLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) {
      return "/";
    }

    if (pathname.startsWith(`/${locale}/`)) {
      const stripped = pathname.slice(locale.length + 1);
      return stripped.length > 0 ? stripped : "/";
    }
  }

  return pathname;
}

export function localizedPath(locale: Locale, pathname: string): string {
  const [pathWithQuery, hash = ""] = pathname.split("#", 2);
  const [rawPath, query = ""] = pathWithQuery.split("?", 2);
  const normalizedPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  const localizedRoot =
    normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;

  return `${localizedRoot}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

export function parsePreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("de")) {
    return "de";
  }

  if (normalized.includes("en")) {
    return "en";
  }

  return defaultLocale;
}
