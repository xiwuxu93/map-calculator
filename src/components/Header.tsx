import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function Header() {
  const t = await getTranslations('common');

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
            {t('siteName')}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500 md:text-sm">
            {t('professionalUseOnly')}
          </span>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
