import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';

const CartSummary = () => {
  const [couponCode, setCouponCode] = useState('');
  const [showCouponInput, setShowCouponInput] = useState(false);
  const { items, getTotalPrice } = useCartStore();
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = getTotalPrice();
  const shipping = subtotal > 500000 ? 0 : 30000;
  const discount = 0; // در حالت واقعی با بررسی کد تخفیف محاسبه می‌شود
  const total = subtotal + shipping - discount;
  
  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در اینجا می‌توان کد تخفیف را بررسی کرد
    console.log(`Coupon submitted: ${couponCode}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold border-b pb-3 mb-4">خلاصه سبد خرید</h2>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">تعداد محصولات:</span>
          <span>{totalItems} عدد</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">مجموع قیمت:</span>
          <span>{subtotal.toLocaleString()} تومان</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">هزینه ارسال:</span>
          {shipping === 0 ? (
            <span className="text-green-600">رایگان</span>
          ) : (
            <span>{shipping.toLocaleString()} تومان</span>
          )}
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>تخفیف:</span>
            <span>{discount.toLocaleString()} تومان</span>
          </div>
        )}
      </div>
      
      <div className="border-t pt-3 mt-4">
        <div className="flex justify-between items-center font-bold text-lg mb-6">
          <span>قابل پرداخت:</span>
          <span className="text-primary">{total.toLocaleString()} تومان</span>
        </div>
        
        <Link href="/checkout" className="btn-primary w-full text-center block mb-4">
          ادامه فرآیند خرید
        </Link>
        
        <div>
          <button 
            className="text-center text-primary font-medium hover:underline w-full"
            onClick={() => setShowCouponInput(!showCouponInput)}
          >
            {showCouponInput ? 'بستن کد تخفیف' : 'اعمال کد تخفیف'}
          </button>
          
          <AnimatePresence>
            {showCouponInput && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-4"
              >
                <form onSubmit={handleCouponSubmit} className="flex">
                  <input
                    type="text"
                    placeholder="کد تخفیف خود را وارد کنید"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                  <button 
                    type="submit" 
                    className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 transition-colors"
                  >
                    اعمال
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;