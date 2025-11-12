import EditorialPolicyPage, { generateMetadata as generateLocaleMetadata } from '../[locale]/editorial-policy/page';
import { defaultLocale } from '@/lib/i18n';

export async function generateMetadata() {
  return generateLocaleMetadata({ params: { locale: defaultLocale } });
}

export default function Page() {
  return <EditorialPolicyPage params={{ locale: defaultLocale }} />;
}

