"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Benefits from '@/components/home/Benefits';
import Testimonials from '@/components/home/Testimonials';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="py-16 bg-light-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-accent mb-4">محصولات ویژه ما</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                برنج‌های انتخابی و مرغوب شمال ایران، با کیفیت درجه یک و تضمین شده
              </p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
        
        <Benefits />
        
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-accent mb-4">نظرات مشتریان ما</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                آنچه مشتریان درباره کیفیت و طعم برنج‌های ما می‌گویند
              </p>
            </div>
            <Testimonials />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;