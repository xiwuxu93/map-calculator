import type { Locale } from '@/lib/i18n';
import type { DeepLocalized } from '@/messages/types';
import en from './en';
import zh from './zh';

type MapCalculationNursingMessages = DeepLocalized<typeof en>;

const localized = {
  en,
  zh,
} satisfies Record<Locale, MapCalculationNursingMessages>;

export default localized;
