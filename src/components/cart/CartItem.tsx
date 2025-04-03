import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { useCartStore } from '@/store/cartStore';

const CartItems = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="py-8">
          <div className="mx-auto w-20 h-20 text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">سبد خرید شما خالی است</h3>
          <p className="text-gray-500 mb-6">محصولات مورد نظر خود را به سبد خرید اضافه کنید</p>
          <Link href="/products" className="btn-primary">
            مشاهده محصولات
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b bg-gray-50">
        <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
          <div className="col-span-6">محصول</div>
          <div className="col-span-2 text-center">قیمت واحد</div>
          <div className="col-span-2 text-center">تعداد</div>
          <div className="col-span-2 text-center">قیمت کل</div>
        </div>
      </div>
      
      <div>
        {items.map((item) => (
          <div key={item.id} className="p-4 border-b">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-6">
                <div className="flex items-center">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div className="mr-4">
                    <Link href={`/products/${item.id}`} className="font-medium text-accent hover:text-primary">
                      {item.title}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">
                      وزن: {item.weight} کیلوگرم
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 text-center font-medium">
                {item.price.toLocaleString()} تومان
              </div>
              
              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center">
                  <button 
                    className="p-1 text-gray-500 hover:text-primary"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    className="p-1 text-gray-500 hover:text-primary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FiPlus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="col-span-2 text-center font-bold text-primary">
                {(item.price * item.quantity).toLocaleString()} تومان
              </div>
              
              <div className="col-span-12 lg:col-span-1 flex justify-center mt-3 lg:mt-0">
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 flex justify-between">
        <Link href="/products" className="text-primary font-medium hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          ادامه خرید
        </Link>
        
        <button 
          className="text-red-500 font-medium hover:underline"
          onClick={() => useCartStore.getState().clearCart()}
        >
          حذف همه
        </button>
      </div>
    </div>
  );
};

export default CartItems;