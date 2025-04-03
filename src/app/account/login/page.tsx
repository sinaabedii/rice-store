"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="bg-light-cream py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-accent mb-2">
                ورود به حساب کاربری
              </h1>
              <p className="text-gray-600">
                خوشحالیم که دوباره شما را می‌بینیم!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
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
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  رمز عبور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FiLock />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="رمز عبور خود را وارد کنید"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-primary focus:ring-primary rounded"
                  />
                  <label htmlFor="remember" className="mr-2 text-gray-700">
                    مرا به خاطر بسپار
                  </label>
                </div>
                <Link
                  href="/account/forget-password"
                  className="text-primary hover:underline text-sm"
                >
                  رمز عبور را فراموش کرده‌اید؟
                </Link>
              </div>

              <button type="submit" className="w-full btn-primary mb-4">
                ورود به حساب کاربری
              </button>

              <div className="relative flex items-center justify-center mb-6">
                <div className="border-t border-gray-300 w-full"></div>
                <span className="bg-white px-3 text-gray-500 text-sm">یا</span>
                <div className="border-t border-gray-300 w-full"></div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 488 512"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    fill="currentColor"
                  />
                </svg>
                <span>ورود با حساب گوگل</span>
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-700">
                  حساب کاربری ندارید؟
                  <Link
                    href="/account/register"
                    className="text-primary mr-1 hover:underline"
                  >
                    ثبت نام کنید
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
