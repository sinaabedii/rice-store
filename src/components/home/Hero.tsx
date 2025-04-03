import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden bg-gray-900">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="مزارع برنج شمال"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-lg">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            برنج مرغوب شمال، مستقیم از مزرعه
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            از بهترین مزارع شمال ایران، با عطر و طعمی بی‌نظیر، مستقیم به سفره شما
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/products" className="btn-primary text-center">
              مشاهده محصولات
            </Link>
            <Link href="/about" className="btn-outline text-white border-white hover:bg-white/10 text-center">
              درباره ما
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;