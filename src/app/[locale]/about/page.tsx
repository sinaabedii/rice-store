import React from 'react';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/about/rice-field.jpg"
              alt="مزارع برنج شمال"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/30" />
          </div>
          
          <div className="container-custom relative h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                درباره برنج شمال
              </h1>
              <p className="text-xl text-white/90">
                با بیش از ۲۰ سال تجربه در تولید و عرضه برنج مرغوب شمال ایران
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="py-16 bg-light-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-2 text-accent mb-6">داستان ما</h2>
                <p className="text-gray-700 mb-4 leading-7">
                  شرکت برنج شمال در سال ۱۳۸۱ با هدف تولید و عرضه برنج‌های مرغوب ایرانی آغاز به کار کرد. بنیانگذاران این شرکت، خانواده محمدی، کشاورزانی با تجربه و سابقه طولانی در کشت برنج در مناطق شمالی ایران بودند.
                </p>
                <p className="text-gray-700 mb-4 leading-7">
                  در ابتدا، فعالیت شرکت محدود به تولید و عرضه برنج در استان مازندران بود، اما با گذشت زمان و افزایش شهرت کیفیت محصولات، دامنه فعالیت‌ها گسترش یافت و امروزه محصولات برنج شمال در سراسر کشور عرضه می‌شود.
                </p>
                <p className="text-gray-700 leading-7">
                  ما با افتخار، برنج‌های طارم، هاشمی، دم سیاه و سایر واریته‌های مرغوب ایرانی را با رعایت اصول کشاورزی پایدار و با حفظ کیفیت سنتی، اما با بهره‌گیری از فناوری‌های مدرن در فرآوری و بسته‌بندی، تولید و عرضه می‌کنیم.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/about/story.jpg"
                    alt="داستان ما"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-accent mb-4">ارزش‌های ما</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ما بر پایه ارزش‌هایی فعالیت می‌کنیم که ما را متعهد به ارائه بهترین محصولات با رعایت اصول اخلاقی و پایداری می‌کند
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-light-cream p-6 rounded-lg shadow-md text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 text-primary text-5xl flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">کیفیت بی‌نظیر</h3>
                <p className="text-gray-700">
                  ما متعهد به تولید و عرضه برنج‌های با کیفیت و مرغوب هستیم. از مزرعه تا سفره، تمام مراحل تولید و فرآوری با دقت و وسواس انجام می‌شود.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-light-cream p-6 rounded-lg shadow-md text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 text-primary text-5xl flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">پایداری محیطی</h3>
                <p className="text-gray-700">
                  ما با رعایت اصول کشاورزی پایدار، تلاش می‌کنیم ردپای محیطی خود را کاهش دهیم. از روش‌های کشت سنتی با حداقل استفاده از مواد شیمیایی بهره می‌بریم.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-light-cream p-6 rounded-lg shadow-md text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 text-primary text-5xl flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">حمایت از کشاورزان</h3>
                <p className="text-gray-700">
                  ما با همکاری مستقیم با کشاورزان محلی و پرداخت قیمت منصفانه، به پایداری اقتصادی جوامع روستایی و حفظ سنت کشت برنج در شمال ایران کمک می‌کنیم.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Production Process */}
        <div className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-accent mb-4">فرآیند تولید</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                با مراحل تولید برنج از مزرعه تا سفره آشنا شوید
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative flex flex-col items-center text-center">
                  <div className="z-10 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    ۱
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">کاشت</h3>
                  <p className="text-gray-700">
                    بذرپاشی در خزانه و سپس نشاکاری در زمین اصلی توسط کشاورزان با تجربه
                  </p>
                </div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="z-10 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    ۲
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">داشت</h3>
                  <p className="text-gray-700">
                    مراقبت از مزارع با روش‌های سنتی و پایدار و با حداقل استفاده از مواد شیمیایی
                  </p>
                </div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="z-10 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    ۳
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">برداشت</h3>
                  <p className="text-gray-700">
                    برداشت به موقع محصول در زمان رسیدگی کامل و با بهترین کیفیت ممکن
                  </p>
                </div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="z-10 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    ۴
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">فرآوری</h3>
                  <p className="text-gray-700">
                    خشک کردن، پوست‌کنی و بسته‌بندی با رعایت اصول بهداشتی و حفظ کیفیت
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-accent mb-4">تیم ما</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                آشنایی با افراد متخصص و با تجربه‌ای که در تولید و عرضه بهترین برنج‌های شمال تلاش می‌کنند
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-light-cream rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/team/person1.jpg" 
                    alt="علی محمدی" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-accent">علی محمدی</h3>
                  <p className="text-primary">مدیرعامل</p>
                </div>
              </div>
              
              <div className="bg-light-cream rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/team/person2.jpg" 
                    alt="محمد کریمی" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-accent">محمد کریمی</h3>
                  <p className="text-primary">مدیر تولید</p>
                </div>
              </div>
              
              <div className="bg-light-cream rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/team/person3.jpg" 
                    alt="زهرا احمدی" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-accent">زهرا احمدی</h3>
                  <p className="text-primary">مدیر کنترل کیفیت</p>
                </div>
              </div>
              
              <div className="bg-light-cream rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/team/person4.jpg" 
                    alt="رضا حسینی" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-accent">رضا حسینی</h3>
                  <p className="text-primary">مدیر فروش</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;