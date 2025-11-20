export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      location: "Jakarta, Indonesia",
      quote: "Tradeo made investing fun and simple! I went from knowing nothing about stocks to managing my first real portfolio in just 2 months.",
      rating: 5
    },
    {
      name: "Kevin M.",
      location: "Bangkok, Thailand",
      quote: "The AI chatbot is like having a personal finance mentor 24/7. It answered all my questions and helped me understand complex concepts.",
      rating: 5
    },
    {
      name: "Aisha R.",
      location: "Manila, Philippines",
      quote: "I love the gamification! The streak system keeps me coming back daily. I've learned more in 3 weeks than I did in a whole semester.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#292929] mb-4">
            Trusted by young investors
          </h2>
          <p className="text-[17px] text-[#666666]">
            Join thousands who transformed from beginners to confident investors
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#f8f9ff] rounded-lg p-6 border border-gray-100">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#ffcd38]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-[#292929] mb-4 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* User Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-[15px] text-[#292929]">
                  {testimonial.name}
                </div>
                <div className="text-[13px] text-[#666666]">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
