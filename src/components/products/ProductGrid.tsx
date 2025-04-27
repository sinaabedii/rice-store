"use client";

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';

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

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  weight: number;
  category: string;
}

interface ProductGridProps {
  activeFilters: ActiveFilters;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'برنج طارم اعلا',
    price: 480000,
    image: '/images/products/460680_2000.jpg',
    weight: 5,
    category: 'برنج طارم'
  },
  {
    id: '2',
    title: 'برنج هاشمی درجه یک',
    price: 450000,
    image: '/images/products/460680_2000.jpg',
    weight: 5,
    category: 'برنج هاشمی'
  },
  {
    id: '3',
    title: 'برنج دم سیاه اصل',
    price: 520000,
    image: '/images/products/460680_2000.jpg',
    weight: 5,
    category: 'برنج دم سیاه'
  },
  {
    id: '4',
    title: 'برنج علی کاظمی',
    price: 430000,
    image: '/images/products/460680_2000.jpg',
    weight: 5,
    category: 'برنج علی کاظمی'
  },
  {
    id: '5',
    title: 'برنج طارم ممتاز',
    price: 520000,
    image: '/images/products/460680_2000.jpg',
    weight: 10,
    category: 'برنج طارم'
  },
  {
    id: '6',
    title: 'برنج هاشمی ویژه',
    price: 490000,
    image: '/images/products/460680_2000.jpg',
    weight: 10,
    category: 'برنج هاشمی'
  },
  {
    id: '7',
    title: 'برنج فجر اعلا',
    price: 410000,
    image: '/images/products/460680_2000.jpg',
    weight: 5,
    category: 'برنج فجر'
  },
  {
    id: '8',
    title: 'برنج چمپا درجه یک',
    price: 390000,
    image: '/images/products/460680_2000.jpg',
    weight: 5,
    category: 'برنج چمپا'
  },
  {
    id: '9',
    title: 'برنج طارم درجه یک',
    price: 460000,
    image: '/images/products/460680_2000.jpg',
    weight: 10,
    category: 'برنج طارم'
  },
  {
    id: '10',
    title: 'برنج هاشمی اعلا',
    price: 470000,
    image: '/images/products/460680_2000.jpg',
    weight: 10,
    category: 'برنج هاشمی'
  },
  {
    id: '11',
    title: 'برنج دم سیاه ممتاز',
    price: 540000,
    image: '/images/products/460680_2000.jpg',
    weight: 10,
    category: 'برنج دم سیاه'
  },
  {
    id: '12',
    title: 'برنج علی کاظمی ویژه',
    price: 450000,
    image: '/images/products/460680_2000.jpg',
    weight: 10,
    category: 'برنج علی کاظمی'
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({ activeFilters }) => {
  const [sortOption, setSortOption] = useState<string>('newest');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);
  
  // پگینیشن
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(6);
  
  // اعمال فیلترها روی محصولات
  useEffect(() => {
    let result = [...PRODUCTS];
    
    // فیلتر بر اساس دسته‌بندی
    if (activeFilters.categories.length > 0) {
      result = result.filter(product => 
        activeFilters.categories.includes(product.category)
      );
    }
    
    // فیلتر بر اساس وزن
    if (activeFilters.weights.length > 0) {
      result = result.filter(product => 
        activeFilters.weights.includes(product.weight)
      );
    }
    
    // فیلتر بر اساس قیمت
    result = result.filter(product => 
      product.price >= activeFilters.priceRange.min && 
      product.price <= activeFilters.priceRange.max
    );
    
    // مرتب‌سازی
    result = sortProducts(result, sortOption);
    
    // بعد از هر تغییر در فیلترها، به صفحه اول برگرد
    setCurrentPage(1);
    
    setFilteredProducts(result);
  }, [activeFilters, sortOption]);
  
  // محاسبه محصولات صفحه فعلی
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  // تابع مرتب‌سازی محصولات
  const sortProducts = (products: Product[], sortBy: string): Product[] => {
    const sortedProducts = [...products];
    
    switch (sortBy) {
      case 'price-low':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'popular':
        // در حالت واقعی، اینجا می‌تواند بر اساس میزان محبوبیت مرتب شود
        return sortedProducts;
      case 'newest':
      default:
        return sortedProducts;
    }
  };
  
  // تغییر نوع مرتب‌سازی
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortOption(e.target.value);
  };
  
  // تغییر صفحه
  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    // اسکرول به بالای صفحه برای تجربه کاربری بهتر
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // تغییر به صفحه قبلی
  const goToPreviousPage = (): void => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  
  // تغییر به صفحه بعدی
  const goToNextPage = (): void => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };
  
  // تولید دکمه‌های صفحات
  const renderPageNumbers = (): JSX.Element[] => {
    const pageNumbers: JSX.Element[] = [];
    
    // تعداد صفحات قابل نمایش در یک زمان (به عنوان مثال 3 صفحه)
    const maxPageNumbersToShow = 3;
    let startPage: number;
    let endPage: number;
    
    if (totalPages <= maxPageNumbersToShow) {
      // اگر کمتر از maxPageNumbersToShow صفحه داریم، همه آنها را نشان بده
      startPage = 1;
      endPage = totalPages;
    } else {
      // محاسبه صفحات قابل نمایش
      if (currentPage <= Math.ceil(maxPageNumbersToShow / 2)) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      } else if (currentPage + Math.floor(maxPageNumbersToShow / 2) >= totalPages) {
        startPage = totalPages - maxPageNumbersToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPageNumbersToShow / 2);
        endPage = currentPage + Math.floor(maxPageNumbersToShow / 2);
      }
    }
    
    // اضافه کردن دکمه‌های صفحات
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-4 py-2 border-t border-b border-gray-300 ${
            currentPage === i ? 'bg-primary text-white' : 'bg-white hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }
    
    return pageNumbers;
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-gray-600">نمایش {filteredProducts.length} محصول</span>
        </div>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="text-gray-700 ml-2">مرتب‌سازی:</label>
          <select 
            id="sort" 
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option value="newest">جدیدترین</option>
            <option value="price-low">قیمت: کم به زیاد</option>
            <option value="price-high">قیمت: زیاد به کم</option>
            <option value="popular">محبوب‌ترین</option>
          </select>
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">هیچ محصولی با این فیلترها یافت نشد.</p>
          <p className="text-gray-500 mt-2">لطفاً فیلترهای خود را تغییر دهید.</p>
        </div>
      )}
      
      {filteredProducts.length > 0 && (
        <div className="mt-8 flex justify-center">
          <div className="flex">
            <button 
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 border border-gray-300 rounded-r-md ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              قبلی
            </button>
            
            {renderPageNumbers()}
            
            <button 
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border border-gray-300 rounded-l-md ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              بعدی
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;