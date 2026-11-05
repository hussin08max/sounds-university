import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { getCopy, isLocale, type Locale } from '../../lib/i18n';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale as Locale;
  const copy = getCopy(locale);

  return (
    <div className="shell">
      <nav className="topbar" aria-label="Language">
        <a href="/en" hrefLang="en" lang="en">
          {copy.switchToEn}
        </a>
        <a href="/ar" hrefLang="ar" lang="ar">
          {copy.switchToAr}
        </a>
      </nav>
      {children}
    </div>
  );
}
