import ThemeModeSelect from "@/components/theme-mode-select";
import LanguageSelect from "@/components/language-select";
import { getRequestLocale } from "@/lib/i18n-server";
import { getDictionary } from "@/dictionaries";
import { localizedPath } from "@/lib/i18n";

export default async function SiteFooter() {
  const locale = await getRequestLocale();
  const dict = await getDictionary(locale, "common");

  return (
    <footer className="mt-8 border-t-2 border-border bg-secondary-background ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-base border-2 border-border bg-background p-4">
            <h3 className="mb-3 text-sm font-heading uppercase tracking-wide">
              {dict.navigation}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="underline underline-offset-2"
                  href={localizedPath(locale, "/")}
                >
                  {dict.home}
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-2"
                  href={localizedPath(locale, "/wiki")}
                >
                  {dict.wiki}
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-2"
                  href={localizedPath(locale, "/contributing")}
                >
                  {dict.contributing}
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-2"
                  href={localizedPath(locale, "/contact")}
                >
                  {dict.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-base border-2 border-border bg-background p-4">
            <h3 className="mb-3 text-sm font-heading uppercase tracking-wide">
              {dict.legal}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="underline underline-offset-2"
                  href={localizedPath(locale, "/legal")}
                >
                  {dict.legal}
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-2"
                  href={localizedPath(locale, "/code-of-conduct")}
                >
                  {dict.codeOfConduct}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-base border-2 border-border bg-background p-4">
            <h3 className="mb-3 text-sm font-heading uppercase tracking-wide">
              {dict.preferences}
            </h3>
            <div className="mt-1 space-y-4">
              <LanguageSelect locale={locale} />
              <ThemeModeSelect />
            </div>
          </div>

          <div className="rounded-base border-2 border-border bg-background p-4">
            <h3 className="mb-3 text-sm font-heading uppercase tracking-wide">
              {dict.links}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="underline underline-offset-2"
                  href="https://github.com/akku-craft"
                  target="_blank"
                >
                  {dict.github}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-base border-2 border-border bg-main px-4 py-3 text-sm text-main-foreground">
          {dict.copyright}
          <p>{dict.projectInfo}</p>
        </div>
      </div>
    </footer>
  );
}
