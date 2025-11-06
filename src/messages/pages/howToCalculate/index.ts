import type { Locale } from "@/lib/i18n";
import type { DeepLocalized } from "@/messages/types";
import en from "./en";
import zh from "./zh";
import es from "./es";

type HowToCalculateMessages = DeepLocalized<typeof en>;

const localized = {
  en,
  zh,
  es,
} satisfies Record<Locale, HowToCalculateMessages>;

export default localized;
