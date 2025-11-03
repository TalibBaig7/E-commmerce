function BrandSection() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <div className="w-full bg-black py-6 md:py-10">
      <div className="w-full px-4 md:px-6 lg:px-16 md:max-w-[1440px] md:mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-12">
          {brands.map((brand, index) => (
            <h2
              key={index}
              className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            >
              {brand}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BrandSection;
