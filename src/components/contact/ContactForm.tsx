"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-accent mb-6">ارسال پیام</h2>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 text-green-700 rounded-md"
        >
          پیام شما با موفقیت ارسال شد. کارشناسان ما در اسرع وقت با شما تماس
          خواهند گرفت.
        </motion.div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              نام و نام خانوادگی
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                <FiUser />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              ایمیل
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
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">
              شماره تماس
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                <FiPhone />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="۰۹*********"
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-1">
              موضوع
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">انتخاب موضوع</option>
              <option value="sales">سفارش محصول</option>
              <option value="support">پشتیبانی محصول</option>
              <option value="wholesale">خرید عمده</option>
              <option value="collaboration">همکاری</option>
              <option value="suggestion">پیشنهاد یا انتقاد</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-1">
            پیام
          </label>
          <div className="relative">
            <div className="absolute top-3 right-3 text-gray-500">
              <FiMessageSquare />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded-md py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="پیام خود را بنویسید..."
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="spinner h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              <span>در حال ارسال...</span>
            </div>
          ) : (
            "ارسال پیام"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
