import { type Locale } from "./lib/i18n";

type Namespace = "home" | "contact" | "common";

const dictionaries = {
  en: {
    home: () => import("./dictionaries/en/home.json").then((m) => m.default),
    contact: () =>
      import("./dictionaries/en/contact.json").then((m) => m.default),
    common: () =>
      import("./dictionaries/en/common.json").then((m) => m.default),
  },
  de: {
    home: () => import("./dictionaries/de/home.json").then((m) => m.default),
    contact: () =>
      import("./dictionaries/de/contact.json").then((m) => m.default),
    common: () =>
      import("./dictionaries/de/common.json").then((m) => m.default),
  },
};

export const getDictionary = async <T extends Namespace>(
  locale: Locale,
  namespace: T,
): Promise<Awaited<ReturnType<(typeof dictionaries)["en"][T]>>> => {
  // @ts-ignore Let TypeScript infer the specific module type through the wrapper signatures
  return dictionaries[locale][namespace]();
};
