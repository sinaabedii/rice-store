"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiMail,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const CheckoutForm = () => {
  const [activeAccordion, setActiveAccordion] = useState({
    shipping: true,
    payment: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    province: "",
    city: "",
    address: "",
    postalCode: "",
    paymentMethod: "online",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleAccordion = (section: "shipping" | "payment") => {
    setActiveAccordion((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const provinces = [
    "تهران",
    "مازندران",
    "گیلان",
    "آذربایجان شرقی",
    "اصفهان",
    "فارس",
    "خراسان رضوی",
    "البرز",
    "کرمان",
    "خوزستان",
    "قم",
    "یزد",
  ];

  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-gray-50"
          onClick={() => toggleAccordion("shipping")}
        >
          <div className="flex items-center">
            <FiMapPin className="ml-2 text-primary" />
            <h3 className="font-semibold">اطلاعات ارسال</h3>
          </div>
          <div>
            {activeAccordion.shipping ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: activeAccordion.shipping ? "auto" : 0 }}
        >
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-1">
                  نام و نام خانوادگی
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 mb-1"
                >
                  شماره موبایل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FiPhone />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="۰۹*********"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  ایمیل (اختیاری)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="example@gmail.com"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="province" className="block text-gray-700 mb-1">
                  استان
                </label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="">انتخاب استان</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-700 mb-1">
                  شهر
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="نام شهر خود را وارد کنید"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 mb-1">
                آدرس کامل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                  <FiMapPin />
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="آدرس دقیق خود را وارد کنید"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="postalCode" className="block text-gray-700 mb-1">
                کد پستی
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="کد پستی ۱۰ رقمی"
                dir="ltr"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-gray-50"
          onClick={() => toggleAccordion("payment")}
        >
          <div className="flex items-center">
            <FiUser className="ml-2 text-primary" />
            <h3 className="font-semibold">روش پرداخت</h3>
          </div>
          <div>
            {activeAccordion.payment ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: activeAccordion.payment ? "auto" : 0 }}
        >
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="online"
                  name="paymentMethod"
                  value="online"
                  checked={formData.paymentMethod === "online"}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="online" className="mr-2 block">
                  <span className="font-medium">پرداخت آنلاین</span>
                  <p className="text-sm text-gray-500">
                    پرداخت از طریق درگاه بانکی
                  </p>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="cod" className="mr-2 block">
                  <span className="font-medium">پرداخت در محل</span>
                  <p className="text-sm text-gray-500">
                    فقط برای مشتریان تهران و کرج
                  </p>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="bank" className="mr-2 block">
                  <span className="font-medium">واریز به حساب</span>
                  <p className="text-sm text-gray-500">
                    ارسال پس از تایید پرداخت
                  </p>
                </label>
              </div>
            </div>

            {formData.paymentMethod === "bank" && (
              <div className="mt-4 p-3 border border-gray-200 rounded-md bg-gray-50">
                <p className="font-medium">اطلاعات حساب:</p>
                <p className="text-sm mt-1">شماره کارت: ۶۱۰۴-۳۳۷۷-۱۲۳۴-۵۶۷۸</p>
                <p className="text-sm">به نام: شرکت تولیدی برنج شمال</p>
                <p className="text-sm">بانک: ملت</p>
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="notes" className="block text-gray-700 mb-1">
                توضیحات سفارش (اختیاری)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="هرگونه توضیحات اضافی برای سفارش خود را اینجا بنویسید..."
              ></textarea>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutForm;
