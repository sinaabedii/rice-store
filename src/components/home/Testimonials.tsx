"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronRight, FiChevronLeft, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'محمد احمدی',
    role: 'سرآشپز رستوران',
    image: '/images/testimonials/person1.jpg',
    text: 'من به عنوان یک سرآشپز، کیفیت برنج برایم بسیار مهم است. برنج طارم این فروشگاه واقعاً بی‌نظیر است و عطر و طعم فوق‌العاده‌ای دارد که مشتریان رستوران ما را شگفت‌زده می‌کند.',
    rating: 5
  },
  {
    id: 2,
    name: 'فاطمه محمدی',
    role: 'مشتری دائمی',
    image: '/images/testimonials/person2.jpg',
    text: 'بیش از دو سال است که برنج مورد نیاز خانواده‌ام را از این فروشگاه تهیه می‌کنم. کیفیت همیشه ثابت و عالی بوده و پشتیبانی و نحوه ارسال هم کاملاً رضایت‌بخش است.',
    rating: 5
  },
  {
    id: 3,
    name: 'علی رضایی',
    role: 'مدیر هتل',
    image: '/images/testimonials/person3.jpg',
    text: 'به عنوان مدیر یک هتل، برنج با کیفیت یکی از نیازهای اصلی آشپزخانه ماست. بعد از آشنایی با این فروشگاه، تمام سفارشات برنج هتل را از اینجا تهیه می‌کنیم و کاملاً راضی هستیم.',
    rating: 4
  },
  {
    id: 4,
    name: 'زهرا کریمی',
    role: 'خانه‌دار',
    image: '/images/testimonials/person4.jpg',
    text: 'برنج هاشمی این فروشگاه بهترین برنجی است که تا به حال مصرف کرده‌ام. بسیار خوش‌پخت است و بعد از پخت، دانه‌ها کاملاً جدا از هم هستند. قطعاً خرید از این فروشگاه را به همه توصیه می‌کنم.',
    rating: 5
  },
];

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-3">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-accent">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'fill-current' : ''}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="flex justify-center mt-8 gap-4">
        <button 
          onClick={() => sliderRef.current?.slickPrev()}
          className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <FiChevronRight size={24} />
        </button>
        <button 
          onClick={() => sliderRef.current?.slickNext()}
          className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <FiChevronLeft size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;