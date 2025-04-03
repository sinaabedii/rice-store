import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // بدون ریدایرکت، فقط درخواست را به جلو پاس می‌دهیم
  return NextResponse.next();
}

export const config = {
  matcher: [], // هیچ مسیری را با میدلور تطبیق نمی‌دهیم
};