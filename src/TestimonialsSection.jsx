import { useState, useRef } from "react";

function TestimonialsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true,
    },
    {
      name: "Alex K.",
      rating: 5,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true,
    },
    {
      name: "James L.",
      rating: 5,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      verified: true,
    },
    {
      name: "Emily R.",
      rating: 5,
      review:
        "The site is so easy to navigate, and the clothes are fantastic! Every piece feels like it was selected with a real eye for quality and current style. My new favorite online shop.",
      verified: true,
    },
    {
      name: "Michael T.",
      rating: 5,
      review:
        "Beyond the amazing clothes, the customer service here is fantastic. I had a query about sizing, and they responded quickly and helpfully. Plus, shipping was super fast! A truly smooth online shopping experience.",
      verified: true,
    },
    {
      name: "Peter S.",
      rating: 5,
      review:
        "I'm always hesitant about buying online, but the quality of the fabric and construction from Shop.co is top-tier. My items have held up perfectly after multiple washes. Excellent value for money.",
      verified: true,
    },
    {
      name: "James K.",
      rating: 5,
      review:
        "Finally, a store where the sizing charts are actually accurate! Everything I ordered fit perfectly right out of the box. They manage to be incredibly stylish while still being comfortable for all-day wear.",
      verified: true,
    },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 340;
      const newPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
 
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-8 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
        <h2 className="text-3xl md:text-5xl font-black">OUR HAPPY CUSTOMERS</h2>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 text-2xl font-bold text-gray-800 bg-white hover:bg-gray-100 rounded-full shadow-lg transition duration-200"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-3 text-2xl font-bold text-gray-800 bg-white hover:bg-gray-100 rounded-full shadow-lg transition duration-200"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border-black/10 rounded-[20px] shrink-0 p-6 md:p-8 shadow-2xl border-2"
            style={{
              width: "320px",
              minWidth: "320px",
            }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-3 ">
              <h3 className="font-bold text-lg">{item.name}</h3>
              {item.verified && (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default TestimonialsSection;
