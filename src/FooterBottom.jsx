function FooterBottom() {
  return (
    <div className="bg-[#F0F0F0] pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="border-t border-gray-300 mb-4 md:mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex gap-2 md:gap-3 flex-wrap justify-center">
            <img
              src="src/Images/visa.png"
              alt="Visa"
              className="h-[26px] w-[42px] md:h-[30px] md:w-[47px] object-contain"
            />
            <img
              src="src/Images/mastercard.png"
              alt="Mastercard"
              className="h-[26px] w-[42px] md:h-[30px] md:w-[47px] object-contain"
            />
            <img
              src="src/Images/paypal.png"
              alt="PayPal"
              className="h-[26px] w-[42px] md:h-[30px] md:w-[47px] object-contain"
            />
            <img
              src="src/Images/ Pay.png"
              alt="Apple Pay"
              className="h-[26px] w-[42px] md:h-[30px] md:w-[47px] object-contain"
            />
            <img
              src="src/Images/G Pay.png"
              alt="Google Pay"
              className="h-[26px] w-[42px] md:h-[30px] md:w-[47px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterBottom;
