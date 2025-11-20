export default function SocialProof() {
  const stats = [
    {
      icon: "👥",
      number: "10,000+",
      label: "Students"
    },
    {
      icon: "📚",
      number: "50,000+",
      label: "Lessons Completed"
    },
    {
      icon: "⭐",
      number: "4.8★",
      label: "App Rating"
    },
    {
      icon: "📈",
      number: "$500M+",
      label: "Traded (Virtual)"
    }
  ];

  const testimonials = [
    {
      quote: "I always thought investing was for rich people. Tradeo showed me anyone can start small and grow. The lessons make everything so clear!",
      name: "Sarah",
      age: "21",
      location: "Jakarta"
    },
    {
      quote: "The gamification keeps me coming back. I've learned more in a month than I did in a year of trying to figure it out on my own.",
      name: "Kevin",
      age: "24",
      location: "Bangkok"
    },
    {
      quote: "Finally, an investing app that doesn't make me feel stupid. The AI chatbot answers all my questions without judgment.",
      name: "Aisha",
      age: "22",
      location: "Manila"
    }
  ];

  return (
    <section className="py-24 bg-[#B9F6CA]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Join Thousands Learning to Invest
          </h2>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#212121] mb-1">{stat.number}</div>
              <div className="text-sm text-[#757575]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Quote */}
              <div className="text-4xl text-[#00C853] mb-4">"</div>
              <p className="text-[#757575] mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E0E0E0]">
                <div className="w-12 h-12 bg-[#00C853]/20 rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <div className="font-semibold text-[#212121]">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-[#757575]">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
