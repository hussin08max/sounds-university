export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function directionForLocale(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

const copy = {
  en: {
    brand: 'Sounds University',
    headline: 'An audio-first learning platform in development',
    support:
      'Structured academic learning with audio as the primary medium. No accreditation or degree claims are made at this stage.',
    apiStatusLabel: 'API status',
    apiOk: 'Reachable',
    apiError: 'Unavailable',
    correlationLabel: 'Correlation ID',
    switchToAr: 'العربية',
    switchToEn: 'English',
  },
  ar: {
    brand: 'الجامعة الصوتية',
    headline: 'منصة تعليم تعتمد على الصوت قيد التطوير',
    support:
      'تعلّم أكاديمي منظم يكون الصوت فيه الوسيلة الأساسية. لا تُقدَّم في هذه المرحلة أي ادعاءات اعتماد أو منح درجات.',
    apiStatusLabel: 'حالة واجهة البرمجة',
    apiOk: 'متاحة',
    apiError: 'غير متاحة',
    correlationLabel: 'معرّف الارتباط',
    switchToAr: 'العربية',
    switchToEn: 'English',
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
