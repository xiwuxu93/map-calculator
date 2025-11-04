import HowToCalculateMapPage, {
  generateMetadata as generateLocaleMetadata,
} from '../[locale]/how-to-calculate-map-blood-pressure/page';
import { defaultLocale } from '@/lib/i18n';

export async function generateMetadata() {
  return generateLocaleMetadata({ params: { locale: defaultLocale } });
}

export default function Page() {
  return <HowToCalculateMapPage params={{ locale: defaultLocale }} />;
}
