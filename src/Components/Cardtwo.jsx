import { useNavigate, Link } from "react-router-dom";

function Cardtwo() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Vertical Striped Shirt",
      image: "src/Images/card-4.png",
      price: "$212",
      oldPrice: "$232",
      rating: 5.0,
    },
    {
      name: "Courage Graphic T-shirt",
      image: "src/Images/card-5.png",
      price: "$145",
      rating: 4.0,
    },
    {
      name: "Loose Fit Bermuda Shorts",
      image: "src/Images/card-6.png",
      price: "$80",
      rating: 3.0,
    },
    {
      name: "Faded Skinny Jeans",
      image: "src/Images/card-7.png",
      price: "$210",
      rating: 4.5,
    },
  ];

  return (
    <div className="w-screen bg-white py-10 md:py-16 border-t border-gray-200">
      <div className="px-4 md:px-6 lg:px-16 md:max-w-[1440px] md:mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => navigate("/product-detail")}
            >
              <div className="bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden mb-3 md:mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-1 md:mb-2">
                <div className="flex text-yellow-400 text-xs md:text-sm">
                  ★★★★★
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg md:text-xl lg:text-2xl">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-gray-400 line-through text-sm md:text-base lg:text-lg">
                      {product.oldPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      -20%
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="border-2 border-gray-200 px-12 md:px-16 py-3 md:py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cardtwo;
