import React from "react";
import { motion } from "framer-motion";
import { FiPackage, FiTruck, FiShield, FiStar } from "react-icons/fi";

const benefits = [
  {
    icon: <FiPackage size={40} />,
    title: "کیفیت تضمینی",
    description:
      "برنج‌های ما با بالاترین استانداردهای کیفی انتخاب و بسته‌بندی می‌شوند",
  },
  {
    icon: <FiTruck size={40} />,
    title: "ارسال سریع",
    description: "ارسال سریع به سراسر کشور با بسته‌بندی مناسب و امن",
  },
  {
    icon: <FiShield size={40} />,
    title: "تضمین اصالت",
    description: "تضمین اصالت و کیفیت محصول با امکان بازگشت تا ۷ روز",
  },
  {
    icon: <FiStar size={40} />,
    title: "برداشت تازه",
    description: "برنج‌های ما از جدیدترین برداشت‌های مزارع شمال تهیه می‌شوند",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Benefits = () => {
  return (
    <div className="py-16 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-accent mb-4">
            چرا برنج شمال را انتخاب کنید؟
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ما با افتخار محصولاتی با کیفیت و خدماتی منحصر به فرد ارائه می‌دهیم
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={item}
            >
              <div className="text-primary mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
