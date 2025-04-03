"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartSummary from "@/components/cart/CartSummary";
import CartItems from "@/components/cart/CartItem";

const CartPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <h1 className="heading-2 text-accent mb-6">سبد خرید</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
