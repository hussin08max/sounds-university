import { notFound } from 'next/navigation';
import { fetchApiHealthStatus } from '../../lib/api-status';
import { getCopy, isLocale, type Locale } from '../../lib/i18n';

export const dynamic = 'force-dynamic';

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale as Locale;
  const copy = getCopy(locale);
  const apiStatus = await fetchApiHealthStatus();

  return (
    <main className="hero">
      <h1 className="brand">{copy.brand}</h1>
      <p className="headline">{copy.headline}</p>
      <p className="support">{copy.support}</p>
      <p className="status">
        <strong>{copy.apiStatusLabel}:</strong>{' '}
        {apiStatus.ok ? copy.apiOk : `${copy.apiError} (${apiStatus.message})`}
        {apiStatus.correlationId ? (
          <>
            {' · '}
            {copy.correlationLabel}: {apiStatus.correlationId}
          </>
        ) : null}
      </p>
    </main>
  );
}
