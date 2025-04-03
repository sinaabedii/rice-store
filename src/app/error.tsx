"use client";

import React from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-cream px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md text-center">
        <div className="text-red-500 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-accent mb-4">مشکلی پیش آمد!</h1>
        <p className="text-gray-600 mb-6">
          متأسفانه در پردازش درخواست شما مشکلی رخ داده است. لطفاً دوباره تلاش
          کنید یا با پشتیبانی تماس بگیرید.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
          <button onClick={reset} className="btn-primary w-full sm:w-auto">
            تلاش مجدد
          </button>

          <Link href="/" className="btn-outline w-full sm:w-auto">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
