function HeroSection() {
  return (
    <div className="w-screen  bg-[#F2F0F1] relative overflow-hidden">
      <div className=" md:max-w-[1440px] md:mx-auto max-w-[1440px] mx-auto px-4 md:px-6 lg:px-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[500px] md:min-h-[600px] lg:min-h-[663px]">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 py-8 md:py-0 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="w-full md:w-auto bg-black text-white px-12 md:px-16 py-3 md:py-4 rounded-full font-medium hover:bg-gray-900 transition-colors">
              Shop Now
            </button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 pt-6 md:pt-8">
              <div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  200+
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  International Brands
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6 md:pl-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  2,000+
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  High-Quality Products
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6 md:pl-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  30,000+
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full flex items-center justify-center order-1 md:order-2">
            <img
              src="src/Images/Home.png.jpg"
              alt="Fashion models"
              className="w-full h-auto max-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;