import type { ReactNode } from "react";

import WikiShell from "@/components/wiki-shell";
import { getRequestLocale } from "@/lib/i18n-server";

export const runtime = "edge";

type WikiLayoutProps = {
  children: ReactNode;
};

export default async function WikiLayout({ children }: WikiLayoutProps) {
  const locale = await getRequestLocale();

  return <WikiShell locale={locale}>{children}</WikiShell>;
}
