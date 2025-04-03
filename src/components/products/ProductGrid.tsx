import React from 'react';
import ProductCard from '@/components/ui/ProductCard';

const PRODUCTS = [
  {
    id: '1',
    title: 'برنج طارم اعلا',
    price: 480000,
    image: '/images/products/tarom.jpg',
    weight: 5,
    category: 'برنج طارم'
  },
  {
    id: '2',
    title: 'برنج هاشمی درجه یک',
    price: 450000,
    image: '/images/products/hashemi.jpg',
    weight: 5,
    category: 'برنج هاشمی'
  },
  {
    id: '3',
    title: 'برنج دم سیاه اصل',
    price: 520000,
    image: '/images/products/domsiah.jpg',
    weight: 5,
    category: 'برنج دم سیاه'
  },
  {
    id: '4',
    title: 'برنج علی کاظمی',
    price: 430000,
    image: '/images/products/alikazemi.jpg',
    weight: 5,
    category: 'برنج علی کاظمی'
  },
  {
    id: '5',
    title: 'برنج طارم ممتاز',
    price: 520000,
    image: '/images/products/tarom-premium.jpg',
    weight: 10,
    category: 'برنج طارم'
  },
  {
    id: '6',
    title: 'برنج هاشمی ویژه',
    price: 490000,
    image: '/images/products/hashemi-special.jpg',
    weight: 10,
    category: 'برنج هاشمی'
  },
  {
    id: '7',
    title: 'برنج فجر اعلا',
    price: 410000,
    image: '/images/products/fajr.jpg',
    weight: 5,
    category: 'برنج فجر'
  },
  {
    id: '8',
    title: 'برنج چمپا درجه یک',
    price: 390000,
    image: '/images/products/champa.jpg',
    weight: 5,
    category: 'برنج چمپا'
  },
];

const ProductGrid = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-gray-600">نمایش {PRODUCTS.length} محصول</span>
        </div>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="text-gray-700 ml-2">مرتب‌سازی:</label>
          <select 
            id="sort" 
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option value="newest">جدیدترین</option>
            <option value="price-low">قیمت: کم به زیاد</option>
            <option value="price-high">قیمت: زیاد به کم</option>
            <option value="popular">محبوب‌ترین</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
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
  );
};

export default ProductGrid;