import { useState } from "react";

function TopBar() {
  return (
    <div className="w-screen  bg-black text-white py-2 md:py-3">
      <div className=" lg:px-16 md:mx-autow-full px-4 md:px-6 md:max-w-[1440px] md:mx-auto">
        <p className="text-xs md:text-sm text-center">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline font-medium hover:text-gray-300">
            Sign Up Now
          </a>
        </p>
      </div>
    </div>
  );
}
export default TopBar;
