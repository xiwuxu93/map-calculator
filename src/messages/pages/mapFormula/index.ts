import { defaultLocale, type Locale } from '@/lib/i18n';
import type { MapFormulaContent, MapFormulaContentMap } from './types';
import mapFormulaEn from './en';
import mapFormulaZh from './zh';
import mapFormulaEs from './es';

const mapFormulaContent: MapFormulaContentMap = {
  en: mapFormulaEn,
  zh: mapFormulaZh,
  es: mapFormulaEs,
};

export function getMapFormulaContent(locale: Locale): MapFormulaContent {
  return mapFormulaContent[locale] ?? mapFormulaContent[defaultLocale];
}

export default mapFormulaContent;

