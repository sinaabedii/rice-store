import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-accent mb-6">اطلاعات تماس</h2>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="min-w-10 text-primary mr-3">
              <FiMapPin size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">آدرس:</h3>
              <p className="text-gray-600">مازندران، شهرستان آمل، کیلومتر ۵ جاده هراز، مجتمع تولیدی برنج شمال</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="min-w-10 text-primary mr-3">
              <FiPhone size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">تلفن تماس:</h3>
              <p className="text-gray-600 text-right" dir="ltr">۰۱۱-۴۳۲۱۶۵۴۳</p>
              <p className="text-gray-600 text-right" dir="ltr">۰۹۱۲۳۴۵۶۷۸۹</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="min-w-10 text-primary mr-3">
              <FiMail size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">ایمیل:</h3>
              <p className="text-gray-600">info@shomalrice.com</p>
              <p className="text-gray-600">sales@shomalrice.com</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="min-w-10 text-primary mr-3">
              <FiClock size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">ساعات کاری:</h3>
              <p className="text-gray-600">شنبه تا چهارشنبه: ۸ صبح تا ۵ بعد از ظهر</p>
              <p className="text-gray-600">پنجشنبه: ۸ صبح تا ۱ بعد از ظهر</p>
              <p className="text-gray-600">جمعه: تعطیل</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <h3 className="font-medium text-gray-800 mb-3">ما را در شبکه‌های اجتماعی دنبال کنید:</h3>
          <div className="flex space-x-4">
            <motion.a 
              href="#instagram" 
              className="bg-primary text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FiInstagram size={20} />
            </motion.a>
            <motion.a 
              href="#twitter" 
              className="bg-primary text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FiTwitter size={20} />
            </motion.a>
            <motion.a 
              href="#linkedin" 
              className="bg-primary text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FiLinkedin size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-accent mb-6">موقعیت ما روی نقشه</h2>
        <div className="h-64 bg-gray-200 rounded-md">
          {/* در اینجا میتوان از کتابخانه‌های نقشه مانند Leaflet یا Google Maps استفاده کرد */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <FiMapPin size={32} className="mx-auto mb-2" />
              <p>نقشه موقعیت مزارع و فروشگاه برنج شمال</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
