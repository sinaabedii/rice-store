import React from "react";
import ProductCard from "@/components/ui/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "برنج طارم اعلا",
    price: 480000,
    image: "/images/products/tarom.jpg",
    weight: 5,
    category: "برنج طارم",
  },
  {
    id: "2",
    title: "برنج هاشمی درجه یک",
    price: 450000,
    image: "/images/products/hashemi.jpg",
    weight: 5,
    category: "برنج هاشمی",
  },
  {
    id: "3",
    title: "برنج دم سیاه اصل",
    price: 520000,
    image: "/images/products/domsiah.jpg",
    weight: 5,
    category: "برنج دم سیاه",
  },
  {
    id: "4",
    title: "برنج علی کاظمی",
    price: 430000,
    image: "/images/products/alikazemi.jpg",
    weight: 5,
    category: "برنج علی کاظمی",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURED_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
