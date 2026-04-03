"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  localeCookieName,
  localizedPath,
  type Locale,
  stripLocalePrefix,
} from "@/lib/i18n";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const languageLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

type LanguageSelectProps = {
  locale: Locale;
};

export default function LanguageSelect({ locale }: LanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(nextLocale: Locale) {
    const targetPath = localizedPath(nextLocale, stripLocalePrefix(pathname));
    const query = searchParams.toString();

    document.cookie = `${localeCookieName}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    router.replace(query ? `${targetPath}?${query}` : targetPath);
    router.refresh();
  }

  return (
    <div className="w-full max-w-48">
      <p className="mb-2 text-xs font-heading uppercase tracking-[0.2em]">
        Language
      </p>
      <Select
        value={locale}
        onValueChange={(value) => handleChange(value as Locale)}
      >
        <SelectTrigger aria-label="Select language">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {(["de", "en"] as Locale[]).map((option) => (
            <SelectItem key={option} value={option}>
              {languageLabels[option]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
