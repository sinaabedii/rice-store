import React from "react";
import ProductCard from "@/components/ui/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "برنج طارم اعلا",
    price: 480000,
    image: "/images/products/460680_2000.jpg",
    weight: 5,
    category: "برنج طارم",
  },
  {
    id: "2",
    title: "برنج هاشمی درجه یک",
    price: 450000,
    image: "/images/products/web-1692066480983-905832837-0rA9cFoyJxiHf5hNluvt5SexgReqVX7onFXk7bfQ.jpeg",
    weight: 5,
    category: "برنج هاشمی",
  },
  {
    id: "3",
    title: "برنج دم سیاه اصل",
    price: 520000,
    image: "/images/products/IMG_4356.jpg",
    weight: 5,
    category: "برنج دم سیاه",
  },
  {
    id: "4",
    title: "برنج فجر",
    price: 430000,
    image: "/images/products/fjr.jpg",
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
