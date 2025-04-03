import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    weight: number;
    category: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity: 1,
    });
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">{product.category}</span>
          <span className="text-xs inline-block bg-secondary text-accent px-2 py-1 rounded-full">
            {product.weight} کیلوگرم
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-accent hover:text-primary transition-colors mb-2">
            {product.title}
          </h3>
        </Link>

        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold text-lg">
            {product.price.toLocaleString()} تومان
          </span>

          <button
            className="btn-primary py-1 px-3 text-sm"
            onClick={handleAddToCart}
          >
            افزودن به سبد
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
