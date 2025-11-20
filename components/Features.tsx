export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Gamified Learning",
      description: "Interactive lessons designed like your favorite games. Earn XP, unlock levels, and build streaks as you master investing fundamentals."
    },
    {
      icon: "📊",
      title: "Real-Time Stock Simulation",
      description: "Practice with $100,000 virtual capital on real market data. No risk, all the learning. Trade stocks from major Southeast Asian exchanges."
    },
    {
      icon: "🤖",
      title: "AI-Powered Guidance",
      description: "Get instant answers to your investing questions 24/7. Our AI chatbot explains concepts, analyzes your portfolio, and provides personalized tips."
    },
    {
      icon: "📈",
      title: "Investment Tracking",
      description: "Monitor your spending habits, set savings goals, and get AI recommendations on how much you can invest based on your financial situation."
    },
    {
      icon: "🏆",
      title: "Social Leaderboards",
      description: "Compete with friends and climb the rankings. Share achievements, join challenges, and stay motivated with our community features."
    },
    {
      icon: "🌏",
      title: "Localized for SEA",
      description: "Content in your language with examples from companies you know. Built specifically for Indonesia, Thailand, Vietnam, Philippines, Malaysia, and Singapore."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b9f6ca]/20 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00c853] font-semibold text-sm">✨ Everything You Need</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4 md:mb-6">
            Learn, Practice, and Master Investing
          </h2>
          <p className="text-lg md:text-xl text-[#757575]">
            All the tools you need to go from complete beginner to confident investor
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-[#00c853]/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#b9f6ca]/20 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#212121] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#757575] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="bg-[#00c853] hover:bg-[#00a043] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Try All Features Free
          </button>
        </div>
      </div>
    </section>
  );
}
