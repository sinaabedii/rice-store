import React from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

const CheckoutSummary = () => {
  const { items, getTotalPrice } = useCartStore();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 500000 ? 0 : 30000;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="font-semibold">خلاصه سفارش</h3>
      </div>

      <div className="p-4">
        <div className="max-h-60 overflow-y-auto mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <div className="relative h-16 w-16 rounded-md overflow-hidden ml-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-medium">{item.title}</h4>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">
                    {item.quantity} × {item.price.toLocaleString()} تومان
                  </span>
                  <span className="text-sm font-medium">
                    {(item.price * item.quantity).toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">مجموع قیمت محصولات:</span>
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

          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>قابل پرداخت:</span>
            <span className="text-primary">{total.toLocaleString()} تومان</span>
          </div>
        </div>

        <button className="btn-primary w-full mt-6">پرداخت و ثبت سفارش</button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
