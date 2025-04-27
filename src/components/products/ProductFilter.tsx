"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';

// تعریف interface های مورد نیاز
interface PriceRange {
  min: number;
  max: number;
}

interface ActiveFilters {
  categories: string[];
  weights: number[];
  priceRange: PriceRange;
}

interface ProductFilterProps {
  activeFilters: ActiveFilters;
  onFilterChange: (filterType: 'categories' | 'weights' | 'priceRange', value: string | number | PriceRange) => void;
  onClearFilters: () => void;
}

interface Category {
  id: string;
  name: string;
}

interface Weight {
  id: number;
  name: string;
}

interface FilterContentProps {
  categories: Category[];
  weights: Weight[];
  activeFilters: ActiveFilters;
  onFilterChange: (filterType: 'categories' | 'weights' | 'priceRange', value: string | number | PriceRange) => void;
  handlePriceChange: (value: string) => void;
  applyFilter: () => void;
  onClearFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ activeFilters, onFilterChange, onClearFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories: Category[] = [
    { id: 'برنج طارم', name: 'برنج طارم' },
    { id: 'برنج هاشمی', name: 'برنج هاشمی' },
    { id: 'برنج دم سیاه', name: 'برنج دم سیاه' },
    { id: 'برنج علی کاظمی', name: 'برنج علی کاظمی' },
    { id: 'برنج فجر', name: 'برنج فجر' },
    { id: 'برنج چمپا', name: 'برنج چمپا' },
  ];
  
  const weights: Weight[] = [
    { id: 5, name: '۵ کیلوگرم' },
    { id: 10, name: '۱۰ کیلوگرم' },
    { id: 20, name: '۲۰ کیلوگرم' },
  ];
  
  // تغییر دامنه قیمت
  const handlePriceChange = (value: string): void => {
    onFilterChange('priceRange', { ...activeFilters.priceRange, max: parseInt(value) });
  };
  
  // اعمال فیلتر
  const applyFilter = () => {
    // در حالت موبایل، منوی فیلتر را می‌بندیم
    setIsFilterOpen(false);
  };
  
  return (
    <>
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full py-2 px-4 bg-white rounded-md shadow flex items-center justify-center"
        >
          <FiFilter className="ml-2" />
          <span>فیلتر محصولات</span>
        </button>
      </div>
      
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          
          <motion.div
            className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">فیلتر محصولات</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <FiX size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <FilterContent 
                categories={categories} 
                weights={weights}
                activeFilters={activeFilters}
                onFilterChange={onFilterChange}
                handlePriceChange={handlePriceChange}
                applyFilter={applyFilter}
                onClearFilters={onClearFilters}
              />
            </div>
          </motion.div>
        </div>
      )}
      
      <div className="hidden lg:block bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-lg border-b pb-2 mb-4">فیلتر محصولات</h3>
        
        <FilterContent 
          categories={categories} 
          weights={weights}
          activeFilters={activeFilters}
          onFilterChange={onFilterChange}
          handlePriceChange={handlePriceChange}
          applyFilter={applyFilter}
          onClearFilters={onClearFilters}
        />
      </div>
    </>
  );
};

const FilterContent: React.FC<FilterContentProps> = ({ 
  categories, 
  weights,
  activeFilters,
  onFilterChange,
  handlePriceChange,
  applyFilter,
  onClearFilters
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-2">نوع برنج</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.id} className="flex items-center">
              <input 
                type="checkbox" 
                id={category.id} 
                checked={activeFilters.categories.includes(category.id)}
                onChange={() => onFilterChange('categories', category.id)}
                className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
              />
              <label htmlFor={category.id} className="mr-2 text-gray-700">
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">وزن</h4>
        <div className="space-y-2">
          {weights.map(weight => (
            <div key={weight.id} className="flex items-center">
              <input 
                type="checkbox" 
                id={`weight-${weight.id}`}
                checked={activeFilters.weights.includes(weight.id)}
                onChange={() => onFilterChange('weights', weight.id)}
                className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
              />
              <label htmlFor={`weight-${weight.id}`} className="mr-2 text-gray-700">
                {weight.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">محدوده قیمت</h4>
        <div className="mb-4">
          <input
            type="range"
            min="200000"
            max="800000"
            step="10000"
            value={activeFilters.priceRange.max}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>{activeFilters.priceRange.min.toLocaleString()} تومان</span>
            <span>{activeFilters.priceRange.max.toLocaleString()} تومان</span>
          </div>
        </div>
      </div>
      
      <button 
        className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        onClick={applyFilter}
      >
        اعمال فیلتر
      </button>
      
      <button 
        className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
        onClick={onClearFilters}
      >
        حذف فیلترها
      </button>
    </div>
  );
};

export default ProductFilter;