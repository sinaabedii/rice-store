"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';

const ProductFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 200000, max: 800000 });
  
  const categories = [
    { id: 'tarom', name: 'برنج طارم' },
    { id: 'hashemi', name: 'برنج هاشمی' },
    { id: 'domsiah', name: 'برنج دم سیاه' },
    { id: 'alikazemi', name: 'برنج علی کاظمی' },
    { id: 'fajr', name: 'برنج فجر' },
    { id: 'champa', name: 'برنج چمپا' },
  ];
  
  const weights = [
    { id: '5kg', name: '۵ کیلوگرم' },
    { id: '10kg', name: '۱۰ کیلوگرم' },
    { id: '20kg', name: '۲۰ کیلوگرم' },
  ];
  
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
                priceRange={priceRange}
                setPriceRange={setPriceRange}
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
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
    </>
  );
};

interface FilterContentProps {
  categories: Array<{id: string, name: string}>;
  weights: Array<{id: string, name: string}>;
  priceRange: {min: number, max: number};
  setPriceRange: React.Dispatch<React.SetStateAction<{min: number, max: number}>>;
}

const FilterContent: React.FC<FilterContentProps> = ({ 
  categories, 
  weights,
  priceRange,
  setPriceRange
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
                id={weight.id} 
                className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
              />
              <label htmlFor={weight.id} className="mr-2 text-gray-700">
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
            value={priceRange.max}
            onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>{priceRange.min.toLocaleString()} تومان</span>
            <span>{priceRange.max.toLocaleString()} تومان</span>
          </div>
        </div>
      </div>
      
      <button className="w-full btn-primary">
        اعمال فیلتر
      </button>
      
      <button className="w-full btn-outline">
        حذف فیلترها
      </button>
    </div>
  );
};

export default ProductFilter;