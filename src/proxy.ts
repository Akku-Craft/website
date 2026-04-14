import { NextRequest, NextResponse } from "next/server";

import {
  defaultLocale,
  isLocale,
  localeCookieName,
  localeHeaderName,
  localizedPath,
  locales,
  parsePreferredLocale,
  stripLocalePrefix,
} from "@/lib/i18n";

function isPublicFile(pathname: string) {
  return /\.[^/]+$/.test(pathname);
}

function shouldBypass(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    isPublicFile(pathname)
  );
}

function getLocaleFromPath(pathname: string) {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : null;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  const legacyLegalPath = pathname === "/legal";

  const pathLocale = getLocaleFromPath(pathname);

  if (pathLocale) {
    const strippedPath = stripLocalePrefix(pathname);

    if (strippedPath === "/legal") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = localizedPath(pathLocale, "/legal/imprint");
      redirectUrl.search = search;

      const response = NextResponse.redirect(redirectUrl);
      response.cookies.set(localeCookieName, pathLocale, {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365,
      });

      return response;
    }

    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = strippedPath;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(localeHeaderName, pathLocale);

    const response = NextResponse.rewrite(rewrittenUrl, {
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set(localeCookieName, pathLocale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  const preferredLocale = isLocale(cookieLocale)
    ? cookieLocale
    : parsePreferredLocale(request.headers.get("accept-language"));
  const targetLocale = locales.includes(preferredLocale)
    ? preferredLocale
    : defaultLocale;
  const redirectUrl = request.nextUrl.clone();
  const targetPathname = legacyLegalPath ? "/legal/imprint" : pathname;
  redirectUrl.pathname =
    targetLocale === defaultLocale && targetPathname === "/"
      ? `/${targetLocale}`
      : `/${targetLocale}${targetPathname === "/" ? "" : targetPathname}`;
  redirectUrl.search = search;

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set(localeCookieName, targetLocale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
