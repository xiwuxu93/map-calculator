import type { Locale } from '@/lib/i18n';
import type { DeepLocalized } from '@/messages/types';
import en from './en';
import zh from './zh';

type BpCalculatorMessages = DeepLocalized<typeof en>;

const bpCalculatorContent = {
  en,
  zh,
} satisfies Record<Locale, BpCalculatorMessages>;

export default bpCalculatorContent;
