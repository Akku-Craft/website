import { cookies, headers } from "next/headers";

import {
  isLocale,
  localeCookieName,
  localeHeaderName,
  normalizeLocale,
  type Locale,
} from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const headerLocale = headerStore.get(localeHeaderName);

  if (isLocale(headerLocale)) {
    return headerLocale;
  }

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  return normalizeLocale(cookieLocale);
}
