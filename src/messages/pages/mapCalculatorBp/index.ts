import { defaultLocale, type Locale } from "@/lib/i18n";
import type {
  MapCalculatorBpContentMap,
  MapCalculatorBpContent,
} from "./types";
import mapCalculatorBpEn from "./en";
import mapCalculatorBpZh from "./zh";
import mapCalculatorBpEs from "./es";

const mapCalculatorBpContent: MapCalculatorBpContentMap = {
  en: mapCalculatorBpEn,
  zh: mapCalculatorBpZh,
  es: mapCalculatorBpEs,
};

export function getMapCalculatorBpContent(
  locale: Locale
): MapCalculatorBpContent {
  return (
    mapCalculatorBpContent[locale] ?? mapCalculatorBpContent[defaultLocale]
  );
}

export default mapCalculatorBpContent;
