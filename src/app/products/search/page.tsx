"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// تعریف تایپ محصول
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

const PRODUCTS_MOCK: Product[] = [
  {
    id: "1",
    title: "برنج طارم اعلا",
    price: 480000,
    image: "/images/products/tarom.jpg",
    category: "برنج طارم",
    description: "برنج طارم اعلا با دانه‌های بلند و معطر، از مزارع شمال ایران",
    inStock: true,
  },
  {
    id: "2",
    title: "برنج هاشمی درجه یک",
    price: 450000,
    image: "/images/products/hashemi.jpg",
    category: "برنج هاشمی",
    description: "برنج هاشمی با کیفیت و خوش پخت، مناسب برای مصرف روزانه",
    inStock: true,
  },
  {
    id: "3",
    title: "برنج دم سیاه اصل",
    price: 520000,
    image: "/images/products/domsiah.jpg",
    category: "برنج دم سیاه",
    description: "برنج دم سیاه با طعم منحصر به فرد و عطر بی‌نظیر",
    inStock: true,
  },
  {
    id: "4",
    title: "برنج علی کاظمی",
    price: 430000,
    image: "/images/products/alikazemi.jpg",
    category: "برنج علی کاظمی",
    description: "برنج علی کاظمی با قیمت مناسب و کیفیت عالی",
    inStock: false,
  },
  {
    id: "5",
    title: "برنج طارم ممتاز",
    price: 520000,
    image: "/images/products/tarom-premium.jpg",
    category: "برنج طارم",
    description: "برنج طارم ممتاز درجه یک، محصول مزارع شمال با عطر فوق‌العاده",
    inStock: true,
  },
  {
    id: "6",
    title: "برنج طارم بسته 10 کیلویی",
    price: 950000,
    image: "/images/products/tarom-10kg.jpg",
    category: "برنج طارم",
    description: "بسته اقتصادی برنج طارم برای مصرف خانواده، کیفیت درجه یک",
    inStock: true,
  },
];

// تعریف تایپ فیلترها
interface ActiveFilters {
  categories: string[];
  priceRange: [number, number];
  availability: 'all' | 'inStock' | 'outOfStock';
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    categories: [],
    priceRange: [0, 1000000],
    availability: "all",
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"relevance" | "price_asc" | "price_desc" | "newest">("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      setTimeout(() => {
        let filtered = PRODUCTS_MOCK.filter(
          (product) =>
            product.title.includes(searchQuery) ||
            product.category.includes(searchQuery) ||
            product.description.includes(searchQuery)
        );

        if (activeFilters.categories.length > 0) {
          filtered = filtered.filter((product) =>
            activeFilters.categories.includes(product.category)
          );
        }

        filtered = filtered.filter(
          (product) =>
            product.price >= activeFilters.priceRange[0] &&
            product.price <= activeFilters.priceRange[1]
        );

        if (activeFilters.availability === "inStock") {
          filtered = filtered.filter((product) => product.inStock);
        } else if (activeFilters.availability === "outOfStock") {
          filtered = filtered.filter((product) => !product.inStock);
        }

        if (sortBy === "price_asc") {
          filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price_desc") {
          filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === "newest") {
          filtered = [...filtered];
        }

        setResults(filtered);
        setIsLoading(false);
      }, 800);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [searchQuery, activeFilters, sortBy]);

  const categories = [
    ...new Set(PRODUCTS_MOCK.map((product) => product.category)),
  ];

  const handleCategoryFilter = (category: string) => {
    setActiveFilters((prev) => {
      const categories = [...prev.categories];
      const index = categories.indexOf(category);

      if (index > -1) {
        categories.splice(index, 1);
      } else {
        categories.push(category);
      }

      return { ...prev, categories };
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: [min, max],
    }));
  };

  const handleAvailabilityChange = (value: 'all' | 'inStock' | 'outOfStock') => {
    setActiveFilters((prev) => ({
      ...prev,
      availability: value,
    }));
  };

  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-accent mb-2">
              نتایج جستجو برای "{searchQuery}"
            </h1>
            <p className="text-gray-600">{results.length} محصول یافت شد</p>
          </div>

          <div className="flex justify-between items-center mb-4 lg:hidden">
            <button
              className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <FiFilter className="ml-2" />
              <span>فیلترها</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "relevance" | "price_asc" | "price_desc" | "newest")}
              className="bg-white px-4 py-2 rounded-md shadow-sm border-none focus:ring-1 focus:ring-primary"
            >
              <option value="relevance">مرتب‌سازی: مرتبط‌ترین</option>
              <option value="price_asc">قیمت: کم به زیاد</option>
              <option value="price_desc">قیمت: زیاد به کم</option>
              <option value="newest">جدیدترین</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div
              className={`lg:w-1/4 ${
                filtersOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-lg">فیلترها</h2>
                  <button
                    className="text-primary hover:underline text-sm lg:hidden"
                    onClick={() => setFiltersOpen(false)}
                  >
                    بستن
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">دسته‌بندی</h3>
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center mb-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.categories.includes(category)}
                        onChange={() => handleCategoryFilter(category)}
                        className="h-4 w-4 text-primary focus:ring-primary rounded"
                      />
                      <span className="mr-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">
                    محدوده قیمت
                  </h3>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="number"
                      min="0"
                      value={activeFilters.priceRange[0]}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handlePriceRangeChange(
                          Number(e.target.value),
                          activeFilters.priceRange[1]
                        )
                      }
                      className="w-1/2 border border-gray-300 rounded p-2 text-sm"
                      placeholder="حداقل"
                    />
                    <input
                      type="number"
                      min="0"
                      value={activeFilters.priceRange[1]}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handlePriceRangeChange(
                          activeFilters.priceRange[0],
                          Number(e.target.value)
                        )
                      }
                      className="w-1/2 border border-gray-300 rounded p-2 text-sm"
                      placeholder="حداکثر"
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    از {activeFilters.priceRange[0].toLocaleString()} تا{" "}
                    {activeFilters.priceRange[1].toLocaleString()} تومان
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">موجودی</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={activeFilters.availability === "all"}
                        onChange={() => handleAvailabilityChange("all")}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <span className="mr-2 text-gray-700">همه</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={activeFilters.availability === "inStock"}
                        onChange={() => handleAvailabilityChange("inStock")}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <span className="mr-2 text-gray-700">موجود</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={activeFilters.availability === "outOfStock"}
                        onChange={() => handleAvailabilityChange("outOfStock")}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <span className="mr-2 text-gray-700">ناموجود</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="btn-primary w-full">اعمال فیلترها</button>
                  <button
                    className="btn-outline w-full"
                    onClick={() =>
                      setActiveFilters({
                        categories: [],
                        priceRange: [0, 1000000],
                        availability: "all",
                      })
                    }
                  >
                    حذف فیلترها
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 hidden lg:flex justify-between items-center">
                <div className="flex items-center">
                  <span className="ml-2 text-gray-700">نمایش:</span>
                  <button
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-gray-100 text-primary"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="نمایش شبکه‌ای"
                  >
                    <FiGrid size={20} />
                  </button>
                  <button
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-gray-100 text-primary"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                    onClick={() => setViewMode("list")}
                    aria-label="نمایش لیستی"
                  >
                    <FiList size={20} />
                  </button>
                </div>

                <div className="flex items-center">
                  <span className="ml-2 text-gray-700">مرتب‌سازی بر اساس:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "relevance" | "price_asc" | "price_desc" | "newest")}
                    className="border-none focus:ring-1 focus:ring-primary text-gray-700"
                  >
                    <option value="relevance">مرتبط‌ترین</option>
                    <option value="price_asc">قیمت: کم به زیاد</option>
                    <option value="price_desc">قیمت: زیاد به کم</option>
                    <option value="newest">جدیدترین</option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">در حال جستجوی محصولات...</p>
                </div>
              ) : results.length > 0 ? (
                viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                      >
                        <Link
                          href={`/products/${product.id}`}
                          className="block"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            {!product.inStock && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                ناموجود
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-gray-500">
                                {product.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-accent hover:text-primary transition-colors mb-2 line-clamp-1">
                              {product.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-primary font-bold">
                                {product.price.toLocaleString()} تومان
                              </span>
                              <button className="btn-primary py-1 px-3 text-sm">
                                مشاهده محصول
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={`/products/${product.id}`} className="flex">
                          <div className="relative w-1/3 sm:w-1/4">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            {!product.inStock && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                ناموجود
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex-grow">
                            <span className="text-xs text-gray-500 block mb-1">
                              {product.category}
                            </span>
                            <h3 className="text-lg font-semibold text-accent hover:text-primary transition-colors mb-2">
                              {product.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-primary font-bold text-lg">
                                {product.price.toLocaleString()} تومان
                              </span>
                              <button className="btn-primary py-2 px-4">
                                مشاهده محصول
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg
                      className="mx-auto h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    محصولی یافت نشد
                  </h3>
                  <p className="text-gray-500 mb-6">
                    متاسفانه محصولی با عبارت "{searchQuery}" پیدا نشد.
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-600">پیشنهادات:</p>
                    <ul className="text-gray-600 list-disc list-inside text-right">
                      <li>املای کلمات را بررسی کنید</li>
                      <li>از کلمات کلیدی عمومی‌تر استفاده کنید</li>
                      <li>فیلترهای انتخابی را کمتر کنید</li>
                      <li>دسته‌بندی‌های دیگر را بررسی کنید</li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/products" className="btn-primary">
                        مشاهده همه محصولات
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}