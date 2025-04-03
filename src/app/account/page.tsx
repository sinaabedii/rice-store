"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiSettings,
  FiLogOut,
  FiEdit2,
  FiEye,
  FiDownload,
  FiTrash,
} from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const userData = {
  id: 1,
  name: "علی محمدی",
  email: "ali@example.com",
  phone: "09123456789",
  avatar: "/images/profile/avatar.jpg",
  address: [
    {
      id: 1,
      title: "منزل",
      fullAddress: "تهران، خیابان ولیعصر، کوچه نیلوفر، پلاک 24، واحد 5",
      postalCode: "1234567890",
      receiver: "علی محمدی",
      phoneNumber: "09123456789",
      default: true,
    },
    {
      id: 2,
      title: "محل کار",
      fullAddress:
        "تهران، میدان ونک، خیابان ملاصدرا، پلاک 128، طبقه 3، واحد 12",
      postalCode: "9876543210",
      receiver: "علی محمدی",
      phoneNumber: "09123456789",
      default: false,
    },
  ],
};

const orders = [
  {
    id: "ORD-12345",
    date: "1402/10/15",
    status: "تحویل داده شده",
    statusClass: "bg-green-100 text-green-800",
    total: 1250000,
    items: [
      {
        id: 1,
        name: "برنج طارم اعلا",
        quantity: 2,
        price: 450000,
        image: "/images/products/tarom.jpg",
      },
      {
        id: 2,
        name: "برنج هاشمی درجه یک",
        quantity: 1,
        price: 350000,
        image: "/images/products/hashemi.jpg",
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "1402/09/20",
    status: "در حال ارسال",
    statusClass: "bg-blue-100 text-blue-800",
    total: 980000,
    items: [
      {
        id: 3,
        name: "برنج دم سیاه اصل",
        quantity: 2,
        price: 490000,
        image: "/images/products/domsiah.jpg",
      },
    ],
  },
  {
    id: "ORD-12347",
    date: "1402/08/05",
    status: "تحویل داده شده",
    statusClass: "bg-green-100 text-green-800",
    total: 1450000,
    items: [
      {
        id: 1,
        name: "برنج طارم اعلا",
        quantity: 1,
        price: 450000,
        image: "/images/products/tarom.jpg",
      },
      {
        id: 4,
        name: "برنج علی کاظمی",
        quantity: 3,
        price: 380000,
        image: "/images/products/alikazemi.jpg",
      },
    ],
  },
];

const favorites = [
  {
    id: 1,
    name: "برنج طارم اعلا",
    price: 450000,
    image: "/images/products/tarom.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "برنج هاشمی درجه یک",
    price: 350000,
    image: "/images/products/hashemi.jpg",
    inStock: true,
  },
  {
    id: 5,
    name: "برنج طارم ممتاز",
    price: 520000,
    image: "/images/products/tarom-premium.jpg",
    inStock: false,
  },
];

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Updating profile:", profileData);
    setEditingProfile(false);
  };

  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 text-center border-b">
                  <div className="relative h-24 w-24 mx-auto mb-4">
                    <Image
                      src={userData.avatar}
                      alt={userData.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-accent mb-1">
                    {userData.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{userData.email}</p>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveTab("dashboard")}
                        className={`w-full flex items-center p-3 rounded-md transition-colors ${
                          activeTab === "dashboard"
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <FiUser className="ml-3" />
                        <span>داشبورد</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("orders")}
                        className={`w-full flex items-center p-3 rounded-md transition-colors ${
                          activeTab === "orders"
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <FiShoppingBag className="ml-3" />
                        <span>سفارش‌های من</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("favorites")}
                        className={`w-full flex items-center p-3 rounded-md transition-colors ${
                          activeTab === "favorites"
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <FiHeart className="ml-3" />
                        <span>علاقه‌مندی‌ها</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("addresses")}
                        className={`w-full flex items-center p-3 rounded-md transition-colors ${
                          activeTab === "addresses"
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <FiMapPin className="ml-3" />
                        <span>آدرس‌های من</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("settings")}
                        className={`w-full flex items-center p-3 rounded-md transition-colors ${
                          activeTab === "settings"
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <FiSettings className="ml-3" />
                        <span>تنظیمات</span>
                      </button>
                    </li>
                    <li className="border-t pt-2 mt-4">
                      <button className="w-full flex items-center p-3 rounded-md text-red-600 hover:bg-red-50 transition-colors">
                        <FiLogOut className="ml-3" />
                        <span>خروج از حساب</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                {activeTab === "dashboard" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold text-accent">
                        داشبورد
                      </h2>
                      <button
                        onClick={() => setEditingProfile(!editingProfile)}
                        className="flex items-center text-primary"
                      >
                        <FiEdit2 className="ml-1" size={18} />
                        <span>
                          {editingProfile ? "انصراف" : "ویرایش پروفایل"}
                        </span>
                      </button>
                    </div>

                    {!editingProfile ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-700 mb-3">
                            اطلاعات شخصی
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                نام و نام خانوادگی:
                              </span>
                              <span>{userData.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">ایمیل:</span>
                              <span>{userData.email}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                شماره موبایل:
                              </span>
                              <span>{userData.phone}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-700 mb-3">
                            خلاصه حساب کاربری
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                تعداد سفارش‌ها:
                              </span>
                              <span>{orders.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                محصولات مورد علاقه:
                              </span>
                              <span>{favorites.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                آدرس‌های ثبت شده:
                              </span>
                              <span>{userData.address.length}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleProfileSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-gray-700 mb-1"
                            >
                              نام و نام خانوادگی
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={profileData.name}
                              onChange={handleProfileChange}
                              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-gray-700 mb-1"
                            >
                              ایمیل
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={profileData.email}
                              onChange={handleProfileChange}
                              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-gray-700 mb-1"
                            >
                              شماره موبایل
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={profileData.phone}
                              onChange={handleProfileChange}
                              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="avatar"
                              className="block text-gray-700 mb-1"
                            >
                              تصویر پروفایل
                            </label>
                            <div className="flex items-center">
                              <div className="relative h-16 w-16 rounded-full overflow-hidden ml-4">
                                <Image
                                  src={userData.avatar}
                                  alt={userData.name}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                              <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                className="hidden"
                              />
                              <label
                                htmlFor="avatar"
                                className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md transition-colors"
                              >
                                انتخاب تصویر
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setEditingProfile(false)}
                            className="btn-outline ml-3"
                          >
                            انصراف
                          </button>
                          <button type="submit" className="btn-primary">
                            ذخیره تغییرات
                          </button>
                        </div>
                      </form>
                    )}

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-accent mb-4">
                        آخرین سفارش‌ها
                      </h3>
                      {orders.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="py-3 px-4 text-right font-medium text-gray-500">
                                  شماره سفارش
                                </th>
                                <th className="py-3 px-4 text-right font-medium text-gray-500">
                                  تاریخ
                                </th>
                                <th className="py-3 px-4 text-right font-medium text-gray-500">
                                  وضعیت
                                </th>
                                <th className="py-3 px-4 text-right font-medium text-gray-500">
                                  مبلغ
                                </th>
                                <th className="py-3 px-4 text-right font-medium text-gray-500">
                                  عملیات
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {orders.slice(0, 3).map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                  <td className="py-3 px-4">{order.id}</td>
                                  <td className="py-3 px-4">{order.date}</td>
                                  <td className="py-3 px-4">
                                    <span
                                      className={`px-2 py-1 rounded-full text-xs ${order.statusClass}`}
                                    >
                                      {order.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-4">
                                    {order.total.toLocaleString()} تومان
                                  </td>
                                  <td className="py-3 px-4">
                                    <button className="text-primary hover:underline">
                                      مشاهده جزئیات
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-6 text-center rounded-lg">
                          <p className="text-gray-500">
                            هنوز سفارشی ثبت نکرده‌اید.
                          </p>
                          <Link
                            href="/products"
                            className="text-primary hover:underline mt-2 inline-block"
                          >
                            مشاهده محصولات
                          </Link>
                        </div>
                      )}

                      {orders.length > 3 && (
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => setActiveTab("orders")}
                            className="text-primary hover:underline"
                          >
                            مشاهده همه سفارش‌ها
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-2xl font-semibold text-accent mb-6">
                      سفارش‌های من
                    </h2>

                    {orders.length > 0 ? (
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div
                            key={order.id}
                            className="border rounded-lg overflow-hidden"
                          >
                            <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center">
                              <div>
                                <span className="text-gray-500 ml-2">
                                  شماره سفارش:
                                </span>
                                <span className="font-medium">{order.id}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 ml-2">
                                  تاریخ:
                                </span>
                                <span>{order.date}</span>
                              </div>
                              <div>
                                <span
                                  className={`px-3 py-1 rounded-full text-sm ${order.statusClass}`}
                                >
                                  {order.status}
                                </span>
                              </div>
                            </div>

                            <div className="p-4">
                              <div className="space-y-4">
                                {order.items.map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex items-center"
                                  >
                                    <div className="relative h-16 w-16 rounded-md overflow-hidden ml-3">
                                      <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                      />
                                    </div>
                                    <div className="flex-grow">
                                      <h4 className="font-medium">
                                        {item.name}
                                      </h4>
                                      <div className="text-sm text-gray-500">
                                        <span>{item.quantity} عدد</span>
                                        <span className="mx-2">•</span>
                                        <span>
                                          {item.price.toLocaleString()} تومان
                                        </span>
                                      </div>
                                    </div>
                                    <div className="font-bold text-accent">
                                      {(
                                        item.price * item.quantity
                                      ).toLocaleString()}{" "}
                                      تومان
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                                <div className="flex space-x-3 space-x-reverse">
                                  <button className="flex items-center text-primary hover:underline">
                                    <FiEye className="ml-1" size={16} />
                                    <span>جزئیات سفارش</span>
                                  </button>
                                  <button className="flex items-center text-primary hover:underline">
                                    <FiDownload className="ml-1" size={16} />
                                    <span>دانلود فاکتور</span>
                                  </button>
                                </div>
                                <div className="font-bold text-lg">
                                  <span className="text-gray-600 ml-2 text-base">
                                    مجموع:
                                  </span>
                                  <span className="text-accent">
                                    {order.total.toLocaleString()} تومان
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-8 text-center rounded-lg">
                        <div className="text-gray-400 text-6xl mb-4">
                          <FiShoppingBag className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">
                          سفارشی یافت نشد
                        </h3>
                        <p className="text-gray-500 mb-4">
                          شما هنوز هیچ سفارشی ثبت نکرده‌اید.
                        </p>
                        <Link href="/products" className="btn-primary">
                          مشاهده محصولات
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "favorites" && (
                  <div>
                    <h2 className="text-2xl font-semibold text-accent mb-6">
                      محصولات مورد علاقه
                    </h2>

                    {favorites.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((item) => (
                          <div
                            key={item.id}
                            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                          >
                            <div className="relative h-48 w-full">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                              <button className="absolute top-2 right-2 bg-white p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors">
                                <FiHeart fill="currentColor" size={18} />
                              </button>
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium mb-2">{item.name}</h3>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-accent">
                                  {item.price.toLocaleString()} تومان
                                </span>
                                {item.inStock ? (
                                  <Link
                                    href={`/products/${item.id}`}
                                    className="btn-primary text-sm py-1 px-3"
                                  >
                                    مشاهده محصول
                                  </Link>
                                ) : (
                                  <span className="text-red-600 text-sm">
                                    ناموجود
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-8 text-center rounded-lg">
                        <div className="text-gray-400 text-6xl mb-4">
                          <FiHeart className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">
                          لیست علاقه‌مندی‌های شما خالی است
                        </h3>
                        <p className="text-gray-500 mb-4">
                          محصولات مورد علاقه خود را با کلیک بر روی آیکون قلب به
                          این لیست اضافه کنید.
                        </p>
                        <Link href="/products" className="btn-primary">
                          مشاهده محصولات
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "addresses" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold text-accent">
                        آدرس‌های من
                      </h2>
                      <button className="btn-primary flex items-center">
                        <span className="ml-1">+</span>
                        <span>افزودن آدرس جدید</span>
                      </button>
                    </div>

                    {userData.address.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {userData.address.map((address) => (
                          <div
                            key={address.id}
                            className={`border rounded-lg p-4 ${
                              address.default ? "border-primary" : ""
                            }`}
                          >
                            <div className="flex justify-between mb-3">
                              <div className="flex items-center">
                                <h3 className="font-medium">{address.title}</h3>
                                {address.default && (
                                  <span className="mr-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                    پیش‌فرض
                                  </span>
                                )}
                              </div>
                              <div className="flex space-x-2 space-x-reverse">
                                <button className="text-primary hover:text-primary/80">
                                  <FiEdit2 size={16} />
                                </button>
                                <button className="text-red-500 hover:text-red-600">
                                  <FiTrash size={16} />
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2 text-gray-700">
                              <p>
                                <span className="font-medium ml-1">
                                  گیرنده:
                                </span>
                                {address.receiver}
                              </p>
                              <p>
                                <span className="font-medium ml-1">
                                  شماره تماس:
                                </span>
                                {address.phoneNumber}
                              </p>
                              <p>
                                <span className="font-medium ml-1">
                                  کد پستی:
                                </span>
                                {address.postalCode}
                              </p>
                              <p>
                                <span className="font-medium ml-1">آدرس:</span>
                                {address.fullAddress}
                              </p>
                            </div>

                            {!address.default && (
                              <button className="mt-4 text-primary hover:underline text-sm">
                                تنظیم به عنوان آدرس پیش‌فرض
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-8 text-center rounded-lg">
                        <div className="text-gray-400 text-6xl mb-4">
                          <FiMapPin className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">
                          هیچ آدرسی ثبت نشده است
                        </h3>
                        <p className="text-gray-500 mb-4">
                          لطفاً آدرس خود را برای تحویل سفارش‌ها اضافه کنید.
                        </p>
                        <button className="btn-primary">
                          افزودن آدرس جدید
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "settings" && (
                  <div>
                    <h2 className="text-2xl font-semibold text-accent mb-6">
                      تنظیمات
                    </h2>

                    <div className="space-y-8">
                      {/* تغییر رمز عبور */}
                      <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-medium text-accent mb-4">
                          تغییر رمز عبور
                        </h3>
                        <form>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label
                                htmlFor="current-password"
                                className="block text-gray-700 mb-1"
                              >
                                رمز عبور فعلی
                              </label>
                              <input
                                type="password"
                                id="current-password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                              />
                            </div>
                            <div className="md:col-span-2 border-t my-4 pt-4"></div>
                            <div>
                              <label
                                htmlFor="new-password"
                                className="block text-gray-700 mb-1"
                              >
                                رمز عبور جدید
                              </label>
                              <input
                                type="password"
                                id="new-password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                رمز عبور باید حداقل ۸ کاراکتر و شامل حروف و
                                اعداد باشد
                              </p>
                            </div>
                            <div>
                              <label
                                htmlFor="confirm-password"
                                className="block text-gray-700 mb-1"
                              >
                                تکرار رمز عبور جدید
                              </label>
                              <input
                                type="password"
                                id="confirm-password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                              />
                            </div>
                          </div>

                          <div className="mt-6 flex justify-end">
                            <button type="submit" className="btn-primary">
                              تغییر رمز عبور
                            </button>
                          </div>
                        </form>
                      </div>

                      <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-medium text-accent mb-4">
                          تنظیمات اعلان‌ها
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-800">
                                اعلان‌های ایمیلی
                              </h4>
                              <p className="text-sm text-gray-500">
                                دریافت اطلاعات سفارش و اخبار فروشگاه از طریق
                                ایمیل
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                defaultChecked
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-800">
                                اعلان‌های پیامکی
                              </h4>
                              <p className="text-sm text-gray-500">
                                دریافت کد تخفیف و وضعیت سفارش از طریق پیامک
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-800">
                                خبرنامه
                              </h4>
                              <p className="text-sm text-gray-500">
                                دریافت آخرین اخبار و تخفیف‌ها
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                defaultChecked
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button type="button" className="btn-primary">
                            ذخیره تنظیمات
                          </button>
                        </div>
                      </div>

                      <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                        <h3 className="text-xl font-medium text-red-600 mb-4">
                          حذف حساب کاربری
                        </h3>
                        <p className="text-gray-700 mb-4">
                          با حذف حساب کاربری، تمامی اطلاعات شما به صورت کامل از
                          سیستم حذف خواهد شد و این عملیات غیرقابل بازگشت است.
                        </p>
                        <button className="bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-colors py-2 px-4 rounded-md">
                          حذف حساب کاربری
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserProfilePage;
