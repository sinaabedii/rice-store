"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AccountActivatedPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-cream py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-green-500 text-6xl mb-4">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-accent mb-2">
              حساب کاربری شما فعال شد!
            </h1>
            <p className="text-gray-600 mb-6">
              با تشکر از ثبت‌نام شما. حساب کاربری شما با موفقیت فعال شد و اکنون
              می‌توانید از تمامی امکانات سایت استفاده کنید.
            </p>

            <div className="space-y-4">
              <Link href="/account/profile" className="btn-primary block">
                مشاهده پروفایل
              </Link>

              <Link href="/products" className="btn-outline block">
                مشاهده محصولات
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountActivatedPage;
