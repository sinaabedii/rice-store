"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OtpVerificationPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef());

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // انتقال فوکوس به فیلد بعدی
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // حذف و انتقال فوکوس به فیلد قبلی
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs[5].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      alert("لطفاً کد تأیید 6 رقمی را وارد کنید");
      return;
    }
    console.log("OTP submitted:", otpValue);
  };

  const resendOtp = () => {
    console.log("Resend OTP");
    setTimer(120);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      <Header />
      <main className="bg-light-cream py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-accent mb-2">
                تأیید شماره موبایل
              </h1>
              <p className="text-gray-600">
                کد تأیید به شماره{" "}
                <span className="font-medium">۰۹۱۲***۶۷۸۹</span> ارسال شد.
                <br />
                لطفاً کد 6 رقمی را در کادر زیر وارد کنید.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-3 text-center">
                  کد تأیید
                </label>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : null}
                      className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-6">
                {timer > 0 ? (
                  <p className="text-gray-700">
                    امکان ارسال مجدد کد تا{" "}
                    <span className="text-primary font-medium">
                      {formatTime(timer)}
                    </span>{" "}
                    دیگر
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={resendOtp}
                    className="text-primary hover:underline"
                  >
                    ارسال مجدد کد تأیید
                  </button>
                )}
              </div>

              <button type="submit" className="w-full btn-primary">
                تأیید
              </button>

              <div className="text-center mt-6">
                <Link
                  href="/account/login"
                  className="text-primary hover:underline"
                >
                  بازگشت به صفحه ورود
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OtpVerificationPage;
