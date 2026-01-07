import type { Locale } from "@/lib/i18n";
import type { DeepLocalized } from "@/messages/types";
import en from "./en";
import zh from "./zh";
import es from "./es";
import fr from "./fr";
import id from "./id";

type BpCalculatorMessages = DeepLocalized<typeof en>;

const bpCalculatorContent = {
  en,
  zh,
  es,
  fr,
  id,
} satisfies Record<Locale, BpCalculatorMessages>;

export default bpCalculatorContent;
