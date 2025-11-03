import React, { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, Trash2, Tag } from "lucide-react";

import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/Images/d-5.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/Images/card-2.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/Images/card-1.png",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline cursor-pointer">Sign Up Now</span>
        <button className="absolute right-4 top-2 md:top-2">
          <X size={16} />
        </button>
      </div>

      <header className="border-b px-4 md:px-8 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="md:hidden" size={24} />
            <h1 className="text-2xl md:text-3xl font-bold">SHOP.CO</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="flex items-center gap-1">
              Shop <span className="text-xs">▼</span>
            </button>
            <a href="#" className="hover:underline">
              On Sale
            </a>
            <a href="#" className="hover:underline">
              New Arrivals
            </a>
            <a href="#" className="hover:underline">
              Brands
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Search size={20} />
            <ShoppingCart size={20} />
            <User size={20} />
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-black">
            Home
          </Link>{" "}
          <span className="mx-2">›</span>{" "}
          <span className="text-black">Cart</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          YOUR CART
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[715px] lg:min-w-[715px]">
            <div className="border rounded-[20px] p-6 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b last:border-b-0 last:pb-0"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-xl">${item.price}</span>
                      <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-600 hover:text-black"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-600 hover:text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[505px]">
            <div className="border rounded-[20px] p-6 space-y-6">
              <h3 className="text-2xl font-bold">Order Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount (-20%)</span>
                  <span className="font-bold text-red-500">-${discount}</span>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-bold">${deliveryFee}</span>
                </div>
                <div className="flex justify-between text-xl">
                  <span>Total</span>
                  <span className="font-bold">${total}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                <div className="flex flex-1 items-center gap-2 border rounded-full px-4 py-3">
                  <Tag size={20} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full outline-none text-sm"
                  />
                </div>

                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 sm:whitespace-nowrap w-full sm:w-auto">
                  Apply
                </button>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 flex items-center justify-center gap-2">
                Go to Checkout
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
