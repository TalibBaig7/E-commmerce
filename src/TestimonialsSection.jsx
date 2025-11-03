function TestimonialsSection() {
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
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-8 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
        <h2 className="text-3xl md:text-5xl font-black">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            ←
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            →
          </button>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black/10 rounded-[20px] shrink-0 p-6 md:p-8"
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

            <div className="flex items-center gap-2 mb-3">
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
    </div>
  );
}
export default TestimonialsSection;
