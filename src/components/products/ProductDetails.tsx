"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FiChevronRight,
  FiChevronLeft,
  FiStar,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiShare2,
  FiHeart,
} from "react-icons/fi";
import ProductCard from "@/components/ui/ProductCard";
import { useCartStore } from "@/store/cartStore";

interface ProductDetailsProps {
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
    });
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((q) => q + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const thumbnailSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
    focusOnSelect: true,
    prevArrow: <FiChevronRight />,
    nextArrow: <FiChevronLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const relatedProductsSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
    prevArrow: <FiChevronRight />,
    nextArrow: <FiChevronLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src={product.images[activeImage]}
                alt={product.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <div className="mt-4">
              <Slider {...thumbnailSettings}>
                {product.images.map((img: string, index: number) => (
                  <div key={index} className="px-1 cursor-pointer">
                    <div
                      className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                        activeImage === index
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`${product.title} - تصویر ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-accent mb-2">
              {product.title}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 ml-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={18}
                    className={`${i < 4 ? "fill-current" : ""}`}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.reviews.length} نظر
              </span>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">دسته‌بندی:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">وزن:</span>
                <span>{product.weight} کیلوگرم</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">سال برداشت:</span>
                <span>{product.harvestYear}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">منطقه:</span>
                <span>{product.originRegion}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold">قیمت:</span>
                <span className="text-xl font-bold text-primary">
                  {product.price.toLocaleString()} تومان
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  موجودی:{" "}
                  {product.stock > 10
                    ? "موجود"
                    : `تنها ${product.stock} عدد باقی مانده`}
                </span>
                {product.stock > 0 ? (
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    در انبار موجود است
                  </span>
                ) : (
                  <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    ناموجود
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-b py-4 my-6">
              <div className="flex items-center mb-4">
                <span className="ml-4">تعداد:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="p-2 text-gray-500 hover:text-primary"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <FiMinus />
                  </button>
                  <span className="px-4 border-r border-l">{quantity}</span>
                  <button
                    className="p-2 text-gray-500 hover:text-primary"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  className="flex-grow btn-primary flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <FiShoppingCart className="ml-2" />
                  افزودن به سبد خرید
                </button>

                <button className="p-3 border border-gray-300 rounded-md mr-2 hover:bg-gray-50">
                  <FiHeart className="text-gray-500 hover:text-red-500" />
                </button>

                <button className="p-3 border border-gray-300 rounded-md mr-2 hover:bg-gray-50">
                  <FiShare2 className="text-gray-500 hover:text-primary" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              • ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
              <br />
              • تحویل اکسپرس در تهران (۱ روزه)
              <br />
              • پرداخت در محل برای مشتریان تهرانی
              <br />• ضمانت اصالت و کیفیت تمامی محصولات
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="border-b mb-6">
          <ul className="flex flex-wrap -mb-px">
            <li className="ml-4">
              <button
                className={`inline-block py-2 px-4 border-b-2 ${
                  activeTab === "description"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                توضیحات
              </button>
            </li>
            <li className="ml-4">
              <button
                className={`inline-block py-2 px-4 border-b-2 ${
                  activeTab === "specifications"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                مشخصات
              </button>
            </li>
            <li>
              <button
                className={`inline-block py-2 px-4 border-b-2 ${
                  activeTab === "reviews"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                نظرات ({product.reviews.length})
              </button>
            </li>
          </ul>
        </div>

        <div>
          {activeTab === "description" && (
            <div>
              <p className="text-gray-700 leading-7 whitespace-pre-line">
                {product.description}
              </p>
            </div>
          )}

          {activeTab === "specifications" && (
            <div>
              <ul className="border rounded-lg overflow-hidden divide-y">
                {product.specifications.map((spec: any, index: number) => (
                  <li
                    key={index}
                    className={`flex ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className="px-4 py-3 w-1/3 font-medium bg-gray-100">
                      {spec.name}
                    </span>
                    <span className="px-4 py-3 w-2/3">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">نظرات کاربران</h3>

                {product.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {product.reviews.map((review: any) => (
                      <div key={review.id} className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <span className="font-medium">{review.user}</span>
                            <span className="text-gray-500 text-sm mr-2">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                size={16}
                                className={`${
                                  i < review.rating ? "fill-current" : ""
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">هنوز نظری ثبت نشده است.</p>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">
                  نظر خود را ثبت کنید
                </h3>

                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      امتیاز شما
                    </label>
                    <div className="flex text-gray-400">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className="text-2xl mr-1 focus:outline-none"
                        >
                          <FiStar className="hover:text-yellow-400 hover:fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="review"
                      className="block text-gray-700 mb-2"
                    >
                      متن نظر
                    </label>
                    <textarea
                      id="review"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      placeholder="نظر خود را بنویسید..."
                    ></textarea>
                  </div>

                  <div className="flex">
                    <button type="submit" className="btn-primary">
                      ثبت نظر
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-accent mb-6">محصولات مرتبط</h2>

        <Slider {...relatedProductsSettings}>
          {product.relatedProducts.map((relatedProduct: any) => (
            <div key={relatedProduct.id} className="px-2">
              <ProductCard product={relatedProduct} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetails;
