import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  const images = [
    "/Images/d-3.png",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
  ];

  const colors = [
    { name: "olive", value: "#4a5d3f" },
    { name: "navy", value: "#1e3a5f" },
    { name: "black", value: "#000000" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const reviews = [
    {
      name: "Samantha D.",
      verified: true,
      rating: 5,
      date: "August 13, 2023",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      name: "Alex M.",
      verified: true,
      rating: 4,
      date: "August 14, 2023",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      name: "Ethan R.",
      verified: true,
      rating: 4,
      date: "August 15, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      name: "Olivia P.",
      verified: true,
      rating: 4,
      date: "August 16, 2023",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      name: "Liam K.",
      verified: true,
      rating: 4,
      date: "Posted on August 18, 2023",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      name: "Ava H.",
      verified: true,
      rating: 4,
      date: "Posted on August 19, 2023",
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    },
  ];

  const relatedProducts = [
    {
      name: "Polo with Contrast Trims",
      price: 212,
      oldPrice: 242,
      image: "/Images/d-4.png",
    },
    {
      name: "Gradient Graphic T-shirt",
      price: 145,
      image: "/Images/d-5.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/Images/d-6.png",
    },
    {
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 160,
      image: "/Images/d-7.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">SHOP.CO</div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-black">
                Shop
              </Link>
              <a href="#" className="text-gray-700 hover:text-black">
                On Sale
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Brands
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2">
                <Heart size={20} />
              </button>
              <button className="p-2" onClick={() => navigate("/cart")}>
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <a href="#" className="hover:text-black">
            Shop
          </a>
          <ChevronRight size={16} className="mx-2" />
          <a href="#" className="hover:text-black">
            Men
          </a>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-black">T-shirts</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg border-2 cursor-pointer overflow-hidden ${
                    selectedImage === idx ? "border-black" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-3">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
                <Star size={20} fill="none" stroke="currentColor" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-3xl font-bold">$260</span>
              <span className="text-2xl text-gray-400 line-through">$300</span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                -40%
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-200">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">Select Colors</p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color.name
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">Choose Size</p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-full border ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center bg-gray-100 rounded-full px-5 py-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button
                onClick={() => navigate("/cart")}
                className="flex-1 bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-4 border-b-2 ${
                  activeTab === "details"
                    ? "border-black"
                    : "border-transparent text-gray-500"
                }`}
              >
                Product Details
              </button>
              <button className="pb-4 border-b-2 border-black">
                Rating & Reviews
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`pb-4 border-b-2 ${
                  activeTab === "faq"
                    ? "border-black"
                    : "border-transparent text-gray-500"
                }`}
              >
                FAQs
              </button>
            </div>
          </div>

          <div className="py-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">
                All Reviews <span className="text-gray-500">(451)</span>
              </h3>
              <button className="bg-black text-white px-6 py-2 rounded-full">
                Write a Review
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl p-6"
                >
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-bold">{review.name}</h4>
                    {review.verified && (
                      <span className="text-green-600 text-sm">✓</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{review.text}</p>
                  <p className="text-gray-400 text-xs">
                    Posted on {review.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {(activeTab === "details" || activeTab === "faq") && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              YOU MIGHT ALSO LIKE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                  onClick={() => navigate("/casual")}
                >
                  <div className="bg-gray-100 rounded-2xl overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
