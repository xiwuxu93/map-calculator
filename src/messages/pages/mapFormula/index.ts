import { defaultLocale, type Locale } from '@/lib/i18n';
import type { MapFormulaContent } from './types';
import mapFormulaEn from './en';
import mapFormulaZh from './zh';
import mapFormulaEs from './es';

const mapFormulaContent: Record<Locale, MapFormulaContent> = {
  en: mapFormulaEn,
  zh: mapFormulaZh,
  es: mapFormulaEs,
  fr: mapFormulaEn,
  id: mapFormulaEn,
};

export function getMapFormulaContent(locale: Locale): MapFormulaContent {
  return mapFormulaContent[locale] ?? mapFormulaContent[defaultLocale];
}

export default mapFormulaContent;

