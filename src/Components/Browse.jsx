function Browse() {
  const categories = [
    {
      image: "/Images/hero-1.png",
    },
    {
      image: "/Images/hero-2.png",
    },
    {
      image: "/Images/hero-3.png",
    },
    {
      image: "/Images/hero-4.png",
    },
  ];

  return (
    <div className="w-screen bg-[#F0F0F0] py-8 md:py-16">
      <div className="px-4 md:px-6 lg:px-16 md:max-w-[1239px] md:mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-16">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="hidden md:block space-y-5">
          <div className="grid grid-cols-3 gap-5">
            <div
              className="relative bg-white rounded-[40px] overflow-hidden group cursor-pointer col-span-1"
              style={{ height: "289px" }}
            >
              <h3 className="absolute top-8 left-8 text-4xl font-bold z-10">
                {categories[0].name}
              </h3>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${categories[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            <div
              className="relative bg-white rounded-[40px] overflow-hidden group cursor-pointer col-span-2"
              style={{ height: "289px" }}
            >
              <h3 className="absolute top-8 left-8 text-4xl font-bold z-10">
                {categories[1].name}
              </h3>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${categories[1].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div
              className="relative bg-white rounded-[40px] overflow-hidden group cursor-pointer col-span-2"
              style={{ height: "289px" }}
            >
              <h3 className="absolute top-8 left-8 text-4xl font-bold z-10">
                {categories[2].name}
              </h3>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${categories[2].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            <div
              className="relative bg-white rounded-[40px] overflow-hidden group cursor-pointer col-span-1"
              style={{ height: "289px" }}
            >
              <h3 className="absolute top-8 left-8 text-4xl font-bold z-10">
                {categories[3].name}
              </h3>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${categories[3].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl overflow-hidden group cursor-pointer"
              style={{ height: "190px" }}
            >
              <h3 className="absolute top-6 left-6 text-2xl font-bold z-10">
                {category.name}
              </h3>
              <div
                className="w-full h-full bg-cover bg-center group-active:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Browse;
