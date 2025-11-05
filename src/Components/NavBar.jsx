import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="w-full px-4 md:px-6 lg:px-16 md:max-w-[1440px] md:mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <Link to="/">
            <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl cursor-pointer hover:opacity-80 transition">
              SHOP.CO
            </h1>
          </Link>

          <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-700 font-medium text-sm lg:text-base">
            <li className="flex items-center gap-1 cursor-pointer hover:text-black transition">
              <span>Shop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
                />
              </svg>
            </li>
            <li className="cursor-pointer hover:text-black transition">
              On Sale
            </li>
            <li className="cursor-pointer hover:text-black transition">
              New Arrivals
            </li>
            <li className="cursor-pointer hover:text-black transition">
              Brands
            </li>
          </ul>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 w-full max-w-[300px] lg:max-w-[500px] h-10 lg:h-12 mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="text-gray-500"
            >
              <path
                fill="currentColor"
                d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
              />
            </svg>
            <input
              type="search"
              placeholder="Search for products"
              className="flex-1 bg-transparent outline-none px-3 text-sm text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="md:hidden cursor-pointer hover:opacity-70 transition"
            >
              <path
                fill="currentColor"
                d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35"
              />
            </svg>

            <Link to="/cart" className="hover:opacity-70 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="cursor-pointer md:w-[22px] md:h-[22px]"
              >
                <path
                  fill="currentColor"
                  d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.99 1.99 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921M17.307 15h-6.64l-2.5-6h11.39z"
                />
                <circle cx="10.5" cy="19.5" r="1.5" fill="currentColor" />
                <circle cx="17.5" cy="19.5" r="1.5" fill="currentColor" />
              </svg>
            </Link>

            <Link to="/signup" className="hover:opacity-70 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="cursor-pointer md:w-[22px] md:h-[22px]"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20m0 15c-1.86 0-3.54.59-4.79 1.41A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 4.79-1.59A8.9 8.9 0 0 0 12 17m0-13a8 8 0 0 0-6.26 13A8 8 0 1 0 18.26 4A8 8 0 0 0 12 4m0 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8"
                />
              </svg>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              <li className="cursor-pointer hover:text-black">Shop</li>
              <li className="cursor-pointer hover:text-black">On Sale</li>
              <li className="cursor-pointer hover:text-black">New Arrivals</li>
              <li className="cursor-pointer hover:text-black">Brands</li>
              <Link to="/signup">
                <li className="cursor-pointer hover:text-black">Sign Up</li>
              </Link>
            </ul>

            <div className="flex items-center bg-gray-100 rounded-full px-4 h-10 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35"
                />
              </svg>
              <input
                type="search"
                placeholder="Search for products"
                className="flex-1 bg-transparent outline-none px-3 text-sm text-gray-700"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
