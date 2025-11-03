function FooterLinks() {
  return (
    <div className="bg-[#F0F0F0] pt-8 md:pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-black mb-4">SHOP.CO</h2>
            <p className="text-gray-600 text-sm mb-6">
              We have clothes that suits your style and which you're proud to
              wear.
            </p>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                𝕏
              </div>
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition cursor-pointer">
                f
              </div>
              <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                📷
              </div>
              <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                🐙
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="hover:text-black cursor-pointer transition">
                About
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Works
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Career
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">HELP</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="hover:text-black cursor-pointer transition">
                Customer Support
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Delivery Details
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">FAQ</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="hover:text-black cursor-pointer transition">
                Account
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Manage Deliveries
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Orders
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Payments
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="hover:text-black cursor-pointer transition">
                Free eBooks
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Development Tutorial
              </li>
              <li className="hover:text-black cursor-pointer transition">
                How to - Blog
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Youtube Playlist
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterLinks;
