"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ForgetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>
      <Header />
      <main className="bg-light-cream py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-2">
              <Link
                href="/account/login"
                className="flex items-center text-primary hover:underline mb-6"
              >
                <FiArrowLeft className="ml-1" />
                <span>بازگشت به صفحه ورود</span>
              </Link>
            </div>

            {step === 1 ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-accent mb-2">
                    بازیابی رمز عبور
                  </h1>
                  <p className="text-gray-600">
                    ایمیل یا شماره موبایل خود را وارد کنید
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      ایمیل یا شماره موبایل
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <FiMail />
                      </div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="ایمیل یا شماره موبایل خود را وارد کنید"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      لینک بازیابی رمز عبور به ایمیل یا پیامک به شماره موبایل
                      شما ارسال خواهد شد
                    </p>
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    ارسال لینک بازیابی
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-primary text-6xl mb-4">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-accent mb-2">
                  ایمیل بازیابی ارسال شد
                </h2>
                <p className="text-gray-600 mb-6">
                  لینک بازیابی رمز عبور به {formData.email} ارسال شد. لطفاً
                  ایمیل خود را بررسی کنید و روی لینک موجود در ایمیل کلیک کنید.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  اگر ایمیلی دریافت نکردید، پوشه اسپم خود را بررسی کنید یا
                  مجدداً تلاش کنید.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="text-primary hover:underline"
                >
                  بازگشت به صفحه بازیابی رمز عبور
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ForgetPasswordPage;
