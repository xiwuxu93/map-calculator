import type { Locale } from '@/lib/i18n';
import en from './en';
import zh from './zh';

const bpCalculatorContent = {
  en,
  zh,
} as const satisfies Record<Locale, typeof en>;

export default bpCalculatorContent;
