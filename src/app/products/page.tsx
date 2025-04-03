"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilter from "@/components/products/ProductFilter";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-cream min-h-screen">
        <div className="container-custom py-8">
          <div className="mb-6">
            <h1 className="heading-2 text-accent mb-2">محصولات ما</h1>
            <p className="text-gray-600">
              بهترین برنج‌های شمال ایران با کیفیت تضمینی
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <ProductFilter />
            </div>

            <div className="lg:w-3/4">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
