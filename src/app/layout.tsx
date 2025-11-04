import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Locale, defaultLocale, locales } from '@/lib/i18n';
import ResourceHints from '@/components/ResourceHints';
import ThirdPartyScripts from '@/components/ThirdPartyScripts';
import '@/styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
  params?: { locale?: string };
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const localeParam = params?.locale;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <ResourceHints />
      </head>
      <body className="bg-gray-100 text-gray-900 antialiased">
        <ThirdPartyScripts />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
