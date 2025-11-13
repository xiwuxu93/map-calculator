import type { Locale } from "@/lib/i18n";
import type { DeepLocalized } from "@/messages/types";
import en from "./en";
import zh from "./zh";
import es from "./es";

type MapTargetsMessages = DeepLocalized<typeof en>;

// For now, reuse English for all locales until translations are added.
const localized = {
  en,
  zh,
  es,
} satisfies Record<Locale, MapTargetsMessages>;

export default localized;
