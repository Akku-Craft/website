import type { ReactNode } from "react";

import WikiShell from "@/components/wiki-shell";

type WikiLayoutProps = {
  children: ReactNode;
};

export default function WikiLayout({ children }: WikiLayoutProps) {
  return <WikiShell>{children}</WikiShell>;
}
