// Casual.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronLeft,
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

export default function CategoryPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: [],
    price: [0, 200],
    colors: [],
    sizes: [],
    style: [],
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      oldPrice: 242,
      discount: 40,
      rating: 3.5,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      oldPrice: 242,
      discount: 20,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 160,
      discount: 30,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 20,
      rating: 3.5,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      discount: 30,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      discount: 20,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300",
    },
  ];

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const colors = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#000000",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "3X-Large",
    "4X-Large",
  ];
  const styles = ["Casual", "Formal", "Party", "Gym"];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const FilterSection = () => (
    <div className="w-full bg-white rounded-[20px] border border-gray-200 p-5 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Filters</h3>
        <button
          onClick={() => setShowMobileFilters(false)}
          className="lg:hidden"
        >
          <X size={20} />
        </button>
        <SlidersHorizontal size={20} className="hidden lg:block" />
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 pb-5 mb-5">
        {categories.map((cat) => (
          <div
            key={cat}
            className="flex items-center justify-between py-2 cursor-pointer text-gray-600 hover:text-black"
          >
            <span>{cat}</span>
            <ChevronRight size={16} />
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="border-b border-gray-200 pb-5 mb-5">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full mb-4"
        >
          <h4 className="font-bold">Price</h4>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <input type="range" min="0" max="200" className="w-full" />
            <div className="flex items-center justify-between text-sm">
              <span>${filters.price[0]}</span>
              <span>${filters.price[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="border-b border-gray-200 pb-5 mb-5">
        <button
          onClick={() => toggleSection("colors")}
          className="flex items-center justify-between w-full mb-4"
        >
          <h4 className="font-bold">Colors</h4>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedSections.colors ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.colors && (
          <div className="grid grid-cols-5 gap-3">
            {colors.map((color, idx) => (
              <button
                key={idx}
                className="w-9 h-9 rounded-full border-2 border-gray-200 hover:border-black"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="border-b border-gray-200 pb-5 mb-5">
        <button
          onClick={() => toggleSection("size")}
          className="flex items-center justify-between w-full mb-4"
        >
          <h4 className="font-bold">Size</h4>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedSections.size ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.size && (
          <div className="grid grid-cols-2 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className="px-4 py-2 text-sm bg-gray-100 rounded-full hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div className="pb-5">
        <button
          onClick={() => toggleSection("style")}
          className="flex items-center justify-between w-full mb-4"
        >
          <h4 className="font-bold">Dress Style</h4>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedSections.style ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.style && (
          <div>
            {styles.map((style) => (
              <div
                key={style}
                className="flex items-center justify-between py-2 cursor-pointer text-gray-600 hover:text-black"
              >
                <span>{style}</span>
                <ChevronRight size={16} />
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="w-full bg-black text-white py-3 rounded-full mt-4">
        Apply Filter
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="bg-black text-white text-center py-2 text-sm">
          Sign up and get 20% off your first order.{" "}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden"
              >
                <SlidersHorizontal size={20} />
              </button>
              <div className="text-2xl font-bold">SHOP.CO</div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-black flex items-center gap-1"
              >
                Shop <ChevronDown size={16} />
              </a>
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
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-full w-64"
                  />
                </div>
              </div>
              <button className="p-2">
                <ShoppingCart size={20} />
              </button>
              <button className="p-2">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-black">Casual</span>
        </div>
      </div>

      {/* Main Content - FIXED RESPONSIVE LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters - FIXED */}
          <div className="hidden lg:block w-full lg:w-[295px] lg:sticky lg:top-24 lg:self-start">
            <FilterSection />
          </div>

          {/* Mobile Filters */}
          {showMobileFilters && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
              onClick={() => setShowMobileFilters(false)}
            >
              <div
                className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4">
                  <FilterSection />
                </div>
              </div>
            </div>
          )}

          {/* Products Grid - FIXED */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Header - FIXED */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold">Casual</h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-600 w-full sm:w-auto">
                <span className="whitespace-nowrap">
                  Showing 1-10 of 100 Products
                </span>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline">Sort by:</span>
                  <select className="border-none bg-transparent font-medium text-black">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid - FIXED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => navigate("/product-detail")}
                >
                  <div className="bg-gray-100 rounded-[20px] overflow-hidden mb-3 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <h3 className="font-bold mb-2 text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      {product.rating}/5
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-lg sm:text-xl">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <>
                        <span className="text-gray-400 line-through text-sm sm:text-base">
                          ${product.oldPrice}
                        </span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                          -{product.discount}%
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination - FIXED */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-200 gap-4">
              <button className="flex items-center gap-2 px-3 py-2 sm:px-4 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 w-full sm:w-auto justify-center">
                <ChevronLeft size={18} />
                Previous
              </button>
              <div className="hidden sm:flex items-center gap-2">
                {[1, 2, 3, "...", 8, 9, 10].map((page, idx) => (
                  <button
                    key={idx}
                    className={`w-10 h-10 rounded-lg ${
                      page === 1 ? "bg-black text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 px-3 py-2 sm:px-4 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 w-full sm:w-auto justify-center">
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
