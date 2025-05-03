"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilter from "@/components/products/ProductFilter";

interface PriceRange {
  min: number;
  max: number;
}

interface ActiveFilters {
  categories: string[];
  weights: number[];
  priceRange: PriceRange;
}

type FilterType = "categories" | "weights" | "priceRange";

const ProductsPage = () => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    categories: [],
    weights: [],
    priceRange: { min: 200000, max: 800000 },
  });

  const handleFilterChange = (
    filterType: FilterType,
    value: string | number | PriceRange
  ): void => {
    setActiveFilters((prev) => {
      if (filterType === "priceRange") {
        return { ...prev, priceRange: value as PriceRange };
      }

      const currentValues = [...prev[filterType]];
      const valueToCheck = value as string | number;
      const index = currentValues.indexOf(valueToCheck as never);

      if (index > -1) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(valueToCheck as never);
      }

      return { ...prev, [filterType]: currentValues };
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      categories: [],
      weights: [],
      priceRange: { min: 200000, max: 800000 },
    });
  };

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
              <ProductFilter
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearAllFilters}
              />
            </div>

            <div className="lg:w-3/4">
              <ProductGrid activeFilters={activeFilters} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
