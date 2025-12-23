import MapFormulaPage, {
  generateMetadata as generateLocaleMetadata,
} from '../[locale]/map-formula/page';
import { defaultLocale } from '@/lib/i18n';

export async function generateMetadata() {
  return generateLocaleMetadata({ params: { locale: defaultLocale } });
}

export default function Page() {
  return <MapFormulaPage params={{ locale: defaultLocale }} />;
}

