"use client";

import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaTrash,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const dogItems = [
    "Dog Food",
    "Dog Treats",
    "Dog Accessories",
    "Dog Toys",
    "Dog Grooming",
  ];

  const catItems = [
    "Cat Food",
    "Kitten Food",
    "Wet Cat Food",
    "Cat Milk Replacer",
    "Cat Litter",
    "Cat Bowls & Feeders",
    "Cat Treats",
    "Flea & Ticks",
    "Veterinary Food",
    "Cat Accessories",
  ];

  const cartItems = [
    {
      id: 1,
      name: "Royal Canin Sensitive Control",
      price: 430,
      qty: 1,
      image: "/assets/cat-food2.png",
    },
    {
      id: 2,
      name: "Royal Litter Lavender Cat Litter",
      price: 2700,
      qty: 1,
      image: "/assets/cat-food1.png",
    },
    {
      id: 3,
      name: "King Dog Beef flavor Food",
      price: 18000,
      qty: 1,
      image: "/assets/cat-food3.jpg",
    },
  ];

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <nav className="w-full bg-white border-b border-orange-100 shadow-sm px-4 md:px-10 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/assets/petsdunya-logo.png"
            alt="PetsDunya Logo"
            width={100}
            height={50}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7 font-semibold text-sm text-gray-700">
          <li className="cursor-pointer hover:text-orange-500 transition">
            HOME
          </li>

          {/* Shop Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <span className="flex items-center gap-1 hover:text-orange-500 transition">
              SHOP <FaChevronDown className="text-xs mt-[1px]" />
            </span>

            {shopOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-5">
                <div className="w-[720px] bg-white border border-orange-100 shadow-2xl rounded-2xl p-6 grid grid-cols-3 gap-6">
                  {/* Dog */}
                  <div className="rounded-xl bg-orange-50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-9 w-9 rounded-full bg-orange-500 text-white flex items-center justify-center">
                        🐶
                      </span>
                      <h3 className="font-bold text-gray-900">Dog Supplies</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-gray-600">
                      {dogItems.map((item) => (
                        <li
                          key={item}
                          className="hover:text-orange-500 cursor-pointer transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cat */}
                  <div className="rounded-xl bg-pink-50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-9 w-9 rounded-full bg-pink-500 text-white flex items-center justify-center">
                        🐱
                      </span>
                      <h3 className="font-bold text-gray-900">Cat Supplies</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-gray-600">
                      {catItems.map((item) => (
                        <li
                          key={item}
                          className="hover:text-pink-500 cursor-pointer transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Promo Box */}
                  <div className="rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 p-5 text-white flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-90">
                        Special Offer
                      </p>
                      <h3 className="text-2xl font-extrabold mt-2">
                        20% Off Pet Food
                      </h3>
                      <p className="text-sm mt-2 opacity-90">
                        Premium food and accessories for your furry friends.
                      </p>
                    </div>

                    <button className="mt-6 bg-white text-orange-600 rounded-full px-5 py-2 text-sm font-bold hover:bg-orange-50 transition">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition">
            ABOUT
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            CONTACT US
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-orange-50 border border-orange-100 px-4 py-2 rounded-full w-64">
            <input
              type="text"
              placeholder="Search pet products..."
              className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder:text-gray-400"
            />
            <FaSearch className="text-orange-500 text-sm" />
          </div>

          {/* Cart */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              className="relative h-10 w-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-orange-50 hover:text-orange-500 transition"
            >
              <FaShoppingCart className="text-lg text-black" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">
                {cartItems.length}
              </span>
            </button>

            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 top-full mt-4 w-[320px] sm:w-[360px] rounded-2xl border border-orange-100 bg-white shadow-2xl overflow-hidden z-[999]">
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <h3 className="text-base font-extrabold text-gray-900">
                    Shopping Cart
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    {cartItems.length} items
                  </span>
                </div>

                <div className="max-h-[320px] overflow-y-auto px-4 py-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-b-0"
                    >
                      <div className="relative h-16 w-16 shrink-0 rounded-xl bg-orange-50 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="line-clamp-1 text-sm font-bold text-gray-900">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500">
                          Qty: {item.qty}
                        </p>
                        <p className="mt-1 text-sm font-extrabold text-[#9b6cf3]">
                          Rs {item.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 px-5 py-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700">
                      Total
                    </span>
                    <span className="text-xl font-extrabold text-gray-900">
                      Rs {cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href="/payment"
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:opacity-90"
                  >
                    Go to Payment
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User */}
          <button className="hidden sm:flex h-10 w-10 rounded-full bg-gray-50 border border-gray-100 items-center justify-center hover:bg-pink-50 hover:text-pink-500 transition">
            <FaUser className="text-lg text-black" />
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden h-10 w-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white border border-orange-100 rounded-2xl shadow-xl p-5">
          {/* Mobile Search */}
          <div className="flex items-center bg-orange-50 border border-orange-100 px-4 py-2 rounded-full mb-5">
            <input
              type="text"
              placeholder="Search pet products..."
              className="bg-transparent outline-none text-sm flex-1"
            />
            <FaSearch className="text-orange-500" />
          </div>

          <ul className="space-y-4 font-semibold text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">HOME</li>

            <li>
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between hover:text-orange-500">
                  SHOP
                  <FaChevronDown className="text-xs group-open:rotate-180 transition" />
                </summary>

                <div className="mt-4 grid grid-cols-1 gap-4">
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 mb-2">
                      🐶 Dog Supplies
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      {dogItems.map((item) => (
                        <p
                          key={item}
                          className="hover:text-orange-500 cursor-pointer"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 mb-2">
                      🐱 Cat Supplies
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      {catItems.map((item) => (
                        <p
                          key={item}
                          className="hover:text-pink-500 cursor-pointer"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </li>

            <li className="hover:text-orange-500 cursor-pointer">ABOUT</li>
            <li className="hover:text-orange-500 cursor-pointer">
              CONTACT US
            </li>
          </ul>

          <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-full font-bold shadow-md">
            Shop Pet Products
          </button>
        </div>
      )}
    </nav>
  );
}