"use client";

import React, { useState, useEffect, useRef, MouseEvent, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { FiSearch, FiX, FiLoader } from "react-icons/fi";
import { useRouter } from "next/navigation";

// تعریف interface برای محصولات
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const PRODUCTS_MOCK: Product[] = [
  {
    id: "1",
    title: "برنج طارم اعلا",
    price: 480000,
    image: "/images/products/tarom.jpg",
    category: "برنج طارم",
    inStock: true,
  },
  {
    id: "2",
    title: "برنج هاشمی درجه یک",
    price: 450000,
    image: "/images/products/hashemi.jpg",
    category: "برنج هاشمی",
    inStock: true,
  },
  {
    id: "3",
    title: "برنج دم سیاه اصل",
    price: 520000,
    image: "/images/products/domsiah.jpg",
    category: "برنج دم سیاه",
    inStock: true,
  },
  {
    id: "4",
    title: "برنج علی کاظمی",
    price: 430000,
    image: "/images/products/alikazemi.jpg",
    category: "برنج علی کاظمی",
    inStock: false,
  },
  {
    id: "5",
    title: "برنج طارم ممتاز",
    price: 520000,
    image: "/images/products/tarom-premium.jpg",
    category: "برنج طارم",
    inStock: true,
  },
  {
    id: "6",
    title: "برنج طارم بسته 10 کیلویی",
    price: 950000,
    image: "/images/products/tarom-10kg.jpg",
    category: "برنج طارم",
    inStock: true,
  },
];

const HeaderSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside as unknown as EventListener);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as unknown as EventListener);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const searchProducts = () => {
      if (query.trim() === "") {
        setResults([]);
        setShowResults(false);
        return;
      }

      setIsLoading(true);
      setShowResults(true);

      setTimeout(() => {
        const filteredResults = PRODUCTS_MOCK.filter(
          (product) =>
            product.title.includes(query) || product.category.includes(query)
        );
        setResults(filteredResults);
        setIsLoading(false);
      }, 300);
    };

    const timer = setTimeout(() => {
      searchProducts();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/products/search?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
      setShowResults(false);
    }
  };

  const handleSelectProduct = (productId: string) => {
    router.push(`/products/${productId}`);
    setIsSearchOpen(false);
    setShowResults(false);
    setQuery("");
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        className="p-2 text-gray-700 hover:text-primary transition-colors"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        aria-label="جستجو"
      >
        <FiSearch size={20} />
      </button>

      {isSearchOpen && (
        <>
          {/* نسخه موبایل */}
          <div className="fixed md:hidden top-0 left-0 w-full h-full bg-white shadow-lg overflow-hidden z-50">
            {/* هدر موبایل */}
            <div className="flex items-center p-3 border-b bg-primary">
              <button
                type="button"
                className="flex items-center justify-center p-2 text-white mr-1"
                onClick={() => setIsSearchOpen(false)}
              >
                <FiX size={24} />
              </button>
              <span className="text-white font-medium text-lg mr-2">جستجو</span>
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-b">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                  placeholder="نام محصول یا دسته‌بندی را وارد کنید..."
                  className="w-full border border-gray-300 rounded-md py-2 pr-10 pl-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                  <FiSearch size={18} />
                </div>
                {query && (
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setQuery("")}
                  >
                    <FiX size={18} />
                  </button>
                )}
              </div>
            </form>

            {showResults && (
              <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
                {isLoading ? (
                  <div className="flex justify-center items-center p-4">
                    <FiLoader className="animate-spin text-primary" size={24} />
                    <span className="text-gray-600 mr-2">در حال جستجو...</span>
                  </div>
                ) : results.length > 0 ? (
                  <div className="p-2">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                        onClick={() => handleSelectProduct(product.id)}
                      >
                        <div className="relative h-16 w-16 rounded-md overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="mr-3 flex-grow">
                          <h4 className="font-medium text-gray-800">
                            {product.title}
                          </h4>
                          <div className="flex justify-between mt-1 flex-wrap">
                            <span className="text-sm text-gray-500">
                              {product.category}
                            </span>
                            <span className="text-sm font-bold text-primary">
                              {product.price.toLocaleString()} تومان
                            </span>
                          </div>
                        </div>
                        {!product.inStock && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md shrink-0">
                            ناموجود
                          </span>
                        )}
                      </div>
                    ))}
                    <div className="text-center p-2 border-t mt-2">
                      <button
                        onClick={() => handleSubmit({preventDefault: () => {}} as unknown as FormEvent<HTMLFormElement>)}
                        className="text-primary hover:underline text-sm"
                      >
                        مشاهده همه نتایج ({results.length})
                      </button>
                    </div>
                  </div>
                ) : query ? (
                  <div className="p-6 text-center">
                    <div className="text-gray-400 mb-2">
                      <svg
                        className="mx-auto h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-gray-700 font-medium mb-1">
                      محصولی یافت نشد
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      متاسفانه محصولی با عبارت "{query}" پیدا نشد.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">پیشنهادات:</p>
                      <ul className="text-sm text-primary list-disc list-inside">
                        <li>املای کلمات را بررسی کنید</li>
                        <li>از کلمات کلیدی عمومی‌تر استفاده کنید</li>
                        <li>دسته‌بندی محصولات را بررسی کنید</li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
            
            {/* دکمه بستن در پایین صفحه برای موبایل */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t">
              <button
                type="button"
                className="w-full py-2 bg-gray-200 rounded-md text-gray-700 font-medium"
                onClick={() => setIsSearchOpen(false)}
              >
                بستن
              </button>
            </div>
          </div>

          {/* نسخه دسکتاپ */}
          <div className="hidden md:block absolute left-0 mt-2 w-screen max-w-md bg-white shadow-lg rounded-lg overflow-hidden z-10">
            <form onSubmit={handleSubmit} className="p-3 border-b">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                  placeholder="نام محصول یا دسته‌بندی را وارد کنید..."
                  className="w-full border border-gray-300 rounded-md py-2 pr-10 pl-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                  <FiSearch size={18} />
                </div>
                {query && (
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setQuery("")}
                  >
                    <FiX size={18} />
                  </button>
                )}
              </div>
            </form>

            {showResults && (
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="flex justify-center items-center p-4">
                    <FiLoader className="animate-spin text-primary" size={24} />
                    <span className="text-gray-600 mr-2">در حال جستجو...</span>
                  </div>
                ) : results.length > 0 ? (
                  <div className="p-2">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                        onClick={() => handleSelectProduct(product.id)}
                      >
                        <div className="relative h-16 w-16 rounded-md overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="mr-3 flex-grow">
                          <h4 className="font-medium text-gray-800">
                            {product.title}
                          </h4>
                          <div className="flex justify-between mt-1">
                            <span className="text-sm text-gray-500">
                              {product.category}
                            </span>
                            <span className="text-sm font-bold text-primary">
                              {product.price.toLocaleString()} تومان
                            </span>
                          </div>
                        </div>
                        {!product.inStock && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md">
                            ناموجود
                          </span>
                        )}
                      </div>
                    ))}
                    <div className="text-center p-2 border-t mt-2">
                      <button
                        onClick={() => handleSubmit({preventDefault: () => {}} as unknown as FormEvent<HTMLFormElement>)}
                        className="text-primary hover:underline text-sm"
                      >
                        مشاهده همه نتایج ({results.length})
                      </button>
                    </div>
                  </div>
                ) : query ? (
                  <div className="p-6 text-center">
                    <div className="text-gray-400 mb-2">
                      <svg
                        className="mx-auto h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-gray-700 font-medium mb-1">
                      محصولی یافت نشد
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      متاسفانه محصولی با عبارت "{query}" پیدا نشد.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">پیشنهادات:</p>
                      <ul className="text-sm text-primary list-disc list-inside">
                        <li>املای کلمات را بررسی کنید</li>
                        <li>از کلمات کلیدی عمومی‌تر استفاده کنید</li>
                        <li>دسته‌بندی محصولات را بررسی کنید</li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderSearch;