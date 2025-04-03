import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-white.svg"
                alt="برنج شمال"
                width={40}
                height={40}
              />
              <span className="mr-2 text-xl font-bold">برنج شمال</span>
            </div>
            <p className="mb-4 text-secondary/80">
              تولید و عرضه برنج درجه یک شمال با بیش از ۲۰ سال سابقه در کشت و
              پرورش بهترین برنج‌های ایرانی
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors ml-4"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors ml-4"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">
              دسترسی سریع
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-secondary transition-colors"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-secondary transition-colors"
                >
                  بلاگ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-secondary transition-colors"
                >
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">
              اطلاعات تماس
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMapPin className="ml-2" />
                <span>مازندران، شهرستان آمل، کیلومتر ۵ جاده هراز</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="ml-2" />
                <span dir="ltr">۰۱۱-۴۳۲۱۶۵۴۳</span>
              </li>
              <li className="flex items-center">
                <FiMail className="ml-2" />
                <span>info@shomalrice.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">خبرنامه</h3>
            <p className="mb-4">
              برای اطلاع از تخفیف‌ها و محصولات جدید، در خبرنامه ما عضو شوید.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} برنج شمال - تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
