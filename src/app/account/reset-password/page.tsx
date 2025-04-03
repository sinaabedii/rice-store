"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiLock, FiUser, FiPhone, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


 const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      password: '',
      confirmPassword: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert('رمز عبور و تکرار آن مطابقت ندارند');
        return;
      }
      // در اینجا می‌توان اطلاعات را به سرور ارسال کرد
      console.log('Reset password submitted:', formData);
      // نمایش پیام موفقیت‌آمیز
      setIsSubmitted(true);
    };
  
    return (
      <>
        <Header />
        <main className="bg-light-cream py-12">
          <div className="container-custom">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-accent mb-2">تنظیم رمز عبور جدید</h1>
                    <p className="text-gray-600">رمز عبور جدید خود را وارد کنید</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-gray-700 mb-1">رمز عبور جدید</label>
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
                          placeholder="رمز عبور جدید خود را وارد کنید"
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
                      <p className="text-xs text-gray-500 mt-1">رمز عبور باید حداقل ۸ کاراکتر و شامل حروف و اعداد باشد</p>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">تکرار رمز عبور جدید</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                          <FiLock />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                          placeholder="رمز عبور جدید خود را تکرار کنید"
                          required
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      تنظیم رمز عبور جدید
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="text-green-500 text-6xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-accent mb-2">رمز عبور با موفقیت تغییر یافت</h2>
                  <p className="text-gray-600 mb-6">
                    رمز عبور جدید شما با موفقیت تنظیم شد. اکنون می‌توانید با استفاده از رمز عبور جدید خود وارد شوید.
                  </p>
                  <Link href="/account/login" className="btn-primary inline-block">
                    ورود به حساب کاربری
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  };

  export default ResetPasswordPage
  