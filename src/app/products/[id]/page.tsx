"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/products/ProductDetails";

const PRODUCT = {
  id: "1",
  title: "برنج طارم اعلا",
  description:
    "برنج طارم یکی از مرغوب‌ترین و خوش عطرترین برنج‌های ایرانی است که در استان‌های شمالی کشور کشت می‌شود. این برنج به دلیل دانه‌های بلند و باریک، عطر و طعم منحصر به فرد و خاصیت کشیدگی عالی در هنگام پخت، از محبوبیت زیادی برخوردار است.\n\nبرنج طارم اعلای ما از بهترین مزارع استان مازندران انتخاب و با دقت فرآوری می‌شود تا کیفیت استثنایی آن حفظ شود.",
  price: 480000,
  images: [
    "/images/products/tarom-1.jpg",
    "/images/products/tarom-2.jpg",
    "/images/products/tarom-3.jpg",
    "/images/products/tarom-4.jpg",
  ],
  weight: 5,
  category: "برنج طارم",
  stock: 50,
  harvestYear: 1402,
  originRegion: "آمل، مازندران",
  specifications: [
    { name: "نوع دانه", value: "بلند و باریک" },
    { name: "میزان عطر", value: "بسیار معطر" },
    { name: "رنگ", value: "سفید روشن" },
    { name: "چسبندگی", value: "کم (دانه‌های جدا از هم)" },
    { name: "روش کشت", value: "سنتی" },
    { name: "نحوه فرآوری", value: "آسیاب سنگی" },
  ],
  reviews: [
    {
      id: 1,
      user: "محمد امینی",
      date: "۱۴۰۲/۰۵/۱۲",
      rating: 5,
      text: "کیفیت برنج عالی بود. کاملاً تازه و خوش عطر. پس از پخت دانه‌ها کاملاً سالم و جدا از هم بودند. قطعاً مجدد خرید خواهم کرد.",
    },
    {
      id: 2,
      user: "سارا احمدی",
      date: "۱۴۰۲/۰۴/۲۳",
      rating: 4,
      text: "برنج خوشمزه‌ای بود و از خرید راضی هستم. بسته‌بندی مناسب و ارسال به موقع انجام شد.",
    },
    {
      id: 3,
      user: "علی رضایی",
      date: "۱۴۰۲/۰۳/۱۵",
      rating: 5,
      text: "بهترین برنجی که تا به حال خریده‌ام. عطر و طعم فوق‌العاده‌ای دارد و پخت آن بسیار آسان است.",
    },
  ],
  relatedProducts: [
    {
      id: "2",
      title: "برنج هاشمی درجه یک",
      price: 450000,
      image: "/images/products/hashemi.jpg",
      weight: 5,
      category: "برنج هاشمی",
    },
    {
      id: "3",
      title: "برنج دم سیاه اصل",
      price: 520000,
      image: "/images/products/domsiah.jpg",
      weight: 5,
      category: "برنج دم سیاه",
    },
    {
      id: "5",
      title: "برنج طارم ممتاز",
      price: 520000,
      image: "/images/products/tarom-premium.jpg",
      weight: 10,
      category: "برنج طارم",
    },
  ],
};

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <ProductDetails product={PRODUCT} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
