"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import HeaderSearch from "@/components/common/HeaderSearch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const menuLinks = [
    { name: "صفحه اصلی", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "درباره ما", href: "/about" },
    { name: "بلاگ", href: "/blog" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="برنج شمال"
              width={50}
              height={50}
            />
            <span className="mr-2 text-xl font-bold text-accent">
              برنج شمال
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="ml-8 text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <HeaderSearch />


            <Link
              href="/cart"
              className="p-2 text-gray-700 hover:text-primary transition-colors relative"
            >
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <FiUser size={20} />
            </Link>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <nav className="flex flex-col bg-white border-t pt-4">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
