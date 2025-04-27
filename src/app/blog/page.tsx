"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FiCalendar, FiUser, FiTag } from "react-icons/fi";

const BLOG_POSTS = [
  {
    id: 1,
    title: "معرفی انواع برنج ایرانی و ویژگی‌های هر کدام",
    excerpt:
      "در این مقاله به معرفی انواع مختلف برنج ایرانی از جمله طارم، هاشمی، دم سیاه و علی کاظمی می‌پردازیم و تفاوت‌های آن‌ها را بررسی می‌کنیم.",
    image: "/images/Daily-price-of-Iranian-rice.jpg",
    author: "زهرا احمدی",
    date: "۱۴۰۲/۰۳/۱۵",
    category: "آموزشی",
    tags: ["برنج ایرانی", "طارم", "هاشمی", "دم سیاه"],
  },
  {
    id: 2,
    title: "روش‌های تشخیص برنج اصل از تقلبی",
    excerpt:
      "چگونه برنج اصل و با کیفیت را از نمونه‌های تقلبی تشخیص دهیم؟ در این مقاله روش‌های ساده و کاربردی برای تشخیص برنج مرغوب را به شما آموزش می‌دهیم.",
    image: "/images/برنج.jpg",
    author: "محمد کریمی",
    date: "۱۴۰۲/۰۲/۲۲",
    category: "آموزشی",
    tags: ["تشخیص برنج", "برنج اصل", "برنج مرغوب", "خرید برنج"],
  },
  {
    id: 3,
    title: "دستور پخت کته برنج ایرانی به روش حرفه‌ای‌ها",
    excerpt:
      "آموزش گام به گام پخت کته برنج ایرانی به روشی که دانه‌ها کاملاً جدا از هم و خوش عطر و طعم باشند. ترفندهای طلایی آشپزهای حرفه‌ای را یاد بگیرید.",
    image: "/images/2017-05-22-HT-Rice-19.jpg",
    author: "لیلا محمدی",
    date: "۱۴۰۲/۰۱/۱۸",
    category: "آشپزی",
    tags: ["طرز تهیه برنج", "کته", "آشپزی ایرانی", "دستور پخت"],
  },
  {
    id: 4,
    title: "تاریخچه کشت برنج در شمال ایران",
    excerpt:
      "آشنایی با تاریخ و فرهنگ کشت برنج در استان‌های شمالی ایران. چگونه مردمان شمال، هزاران سال است که با این محصول زندگی می‌کنند و آن را پرورش می‌دهند؟",
    image: "/images/4-3.jpg",
    author: "علی محمدی",
    date: "۱۴۰۱/۱۲/۱۰",
    category: "تاریخی",
    tags: ["تاریخچه برنج", "شمال ایران", "کشاورزی", "فرهنگ"],
  },
  {
    id: 5,
    title: "خواص تغذیه‌ای برنج و جایگاه آن در سبد غذایی خانواده‌ها",
    excerpt:
      "برنج چه ارزش غذایی دارد و چرا هنوز پس از قرن‌ها، یکی از اصلی‌ترین مواد غذایی در سفره‌های ایرانی است؟ در این مقاله به بررسی ارزش تغذیه‌ای برنج می‌پردازیم.",
    image: "/images/N83230444-72880637.jpg",
    author: "دکتر مریم حسینی",
    date: "۱۴۰۱/۱۱/۰۵",
    category: "سلامت و تغذیه",
    tags: ["ارزش غذایی برنج", "سلامت", "تغذیه", "رژیم غذایی"],
  },
  {
    id: 6,
    title: "چالش‌های کشاورزان برنج در سال‌های اخیر",
    excerpt:
      "کشاورزان شمال با چه مشکلاتی در کشت برنج مواجه هستند؟ از تغییرات اقلیمی تا مشکلات اقتصادی. چگونه می‌توان از کشاورزان حمایت کرد؟",
    image: "/images/Challenges-of-the-countrys-agricultural-sectorr-780x470.jpg",
    author: "رضا حسینی",
    date: "۱۴۰۱/۰۹/۲۰",
    category: "اقتصادی",
    tags: ["کشاورزان", "چالش‌ها", "اقتصاد کشاورزی", "حمایت از تولید"],
  },
];

const BlogPage = () => {
  const categories = Array.from(
    new Set(BLOG_POSTS.map((post) => post.category))
  );

  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <h1 className="heading-2 text-accent mb-6">بلاگ</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-[1.02] duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-4">
                      <Link href={`/blog/${post.id}`}>
                        <h2 className="text-xl font-semibold text-accent hover:text-primary transition-colors mb-2">
                          {post.title}
                        </h2>
                      </Link>

                      <div className="flex flex-wrap text-sm text-gray-500 mb-3">
                        <div className="flex items-center ml-4 mb-1">
                          <FiCalendar size={14} className="ml-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center ml-4 mb-1">
                          <FiUser size={14} className="ml-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <FiTag size={14} className="ml-1" />
                          <span>{post.category}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary font-medium hover:underline inline-flex items-center"
                      >
                        ادامه مطلب
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex">
                  <button className="px-4 py-2 border border-gray-300 rounded-r-md bg-white hover:bg-gray-50">
                    قبلی
                  </button>
                  <button className="px-4 py-2 border-t border-b border-gray-300 bg-primary text-white">
                    1
                  </button>
                  <button className="px-4 py-2 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50">
                    بعدی
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">
                    جستجو در بلاگ
                  </h3>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="جستجو..."
                      className="flex-grow border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">
                    دسته‌بندی‌ها
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category}`}
                          className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors"
                        >
                          <span>{category}</span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {
                              BLOG_POSTS.filter(
                                (post) => post.category === category
                              ).length
                            }
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">
                    آخرین مطالب
                  </h3>
                  <div className="space-y-4">
                    {BLOG_POSTS.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex">
                        <div className="relative h-16 w-16 rounded overflow-hidden ml-3">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="font-medium text-gray-700 hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">
                    برچسب‌ها
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(
                      new Set(BLOG_POSTS.flatMap((post) => post.tags))
                    ).map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag}`}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-2">
                    عضویت در خبرنامه
                  </h3>
                  <p className="text-gray-600 mb-4">
                    برای دریافت آخرین مقالات و تخفیف‌های ویژه در خبرنامه ما عضو
                    شوید.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      className="flex-grow border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 transition-colors">
                      عضویت
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
