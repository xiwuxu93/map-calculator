import MapCalculatorBpPage, {
  generateMetadata as generateLocaleMetadata,
} from '../[locale]/map-calculator-bp/page';
import { defaultLocale } from '@/lib/i18n';

export async function generateMetadata() {
  return generateLocaleMetadata({ params: { locale: defaultLocale } });
}

export default function Page() {
  return <MapCalculatorBpPage params={{ locale: defaultLocale }} />;
}
