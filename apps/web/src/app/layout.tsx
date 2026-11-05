import type { Metadata } from 'next';
import { headers } from 'next/headers';
import type { ReactNode } from 'react';
import { defaultLocale, directionForLocale, isLocale } from '../lib/i18n';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sounds University',
  description: 'Audio-first university platform — runtime skeleton',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerStore = await headers();
  const rawLocale = headerStore.get('x-locale') ?? defaultLocale;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  return (
    <html lang={locale} dir={directionForLocale(locale)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
