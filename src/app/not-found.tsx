import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-cream px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg text-center">
        <div className="relative h-48 w-48 mx-auto mb-6">
          <Image
            src="/images/404.svg"
            alt="صفحه یافت نشد"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <h1 className="text-3xl font-bold text-accent mb-4">صفحه مورد نظر یافت نشد!</h1>
        <p className="text-gray-600 mb-6">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            بازگشت به صفحه اصلی
          </Link>
          
          <Link href="/products" className="btn-outline w-full sm:w-auto">
            مشاهده محصولات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;