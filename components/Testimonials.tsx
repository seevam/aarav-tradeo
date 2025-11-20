export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      age: 22,
      location: "Jakarta, Indonesia",
      avatar: "👩",
      role: "University Student",
      quote: "Tradeo made investing fun and simple! I went from knowing nothing about stocks to managing my first real portfolio in just 2 months.",
      rating: 5
    },
    {
      name: "Kevin M.",
      age: 24,
      location: "Bangkok, Thailand",
      avatar: "👨",
      role: "Marketing Professional",
      quote: "The AI chatbot is like having a personal finance mentor 24/7. It answered all my questions and helped me understand complex concepts.",
      rating: 5
    },
    {
      name: "Aisha R.",
      age: 21,
      location: "Manila, Philippines",
      avatar: "👩",
      role: "Part-time Worker",
      quote: "I love the gamification! The streak system keeps me coming back daily. I've learned more in 3 weeks than I did in a whole semester.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light/30 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-medium text-sm">💬 Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Loved by Young Investors Across SEA
          </h2>
          <p className="text-xl text-text-secondary">
            Join thousands of learners who transformed from beginners to confident investors
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-primary-light/30 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-text-secondary">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-text-secondary">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-text-secondary">Complete First Module</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12 min</div>
              <div className="text-sm text-text-secondary">Avg. Session Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
