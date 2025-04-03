import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // تنظیم پیش‌فرض زبان به فارسی
  const url = request.nextUrl.clone();
  
  const pathname = url.pathname;
  
  // اگر کاربر مستقیماً به ریشه سایت مراجعه کرده باشد، او را به نسخه فارسی هدایت می‌کنیم
  if (pathname === '/') {
    url.pathname = '/fa';
    return NextResponse.redirect(url);
  }
  
  // پاس دادن درخواست به جلو
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};

// 34. فایل تنظیمات i18n
// i18n-config.ts
export const i18n = {
  defaultLocale: 'fa',
  locales: ['fa', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
