
function NewsletterSection() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 mb-8 md:mb-16">
      <div className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
            STAY UPTO DATE ABOUT
            <br />
            OUR LATEST OFFERS
          </h2>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 md:pl-20">
          <div className="bg-white rounded-full px-4 md:px-6 py-3 flex items-center gap-3">
            <span>✉️</span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none text-sm md:text-base"
            />
          </div>

          <button className="bg-white text-black rounded-full px-4 md:px-6 py-3 font-semibold text-sm md:text-base hover:bg-gray-100 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewsletterSection;
