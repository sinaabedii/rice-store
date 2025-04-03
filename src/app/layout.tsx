import React from 'react';
import { Metadata } from 'next';
import './globals.css';

// تنظیمات متادیتا برای SEO
export const metadata: Metadata = {
  title: 'فروشگاه برنج شمال | خرید برنج درجه یک از تولیدکننده',
  description: 'فروشگاه اینترنتی برنج شمال، عرضه‌کننده انواع برنج مرغوب ایرانی از مزارع شمال کشور. خرید مستقیم از تولیدکننده با کیفیت تضمینی و ارسال رایگان.',
  keywords: 'خرید برنج, برنج ایرانی, برنج شمال, برنج طارم, برنج هاشمی, برنج دم سیاه, فروشگاه اینترنتی برنج',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}