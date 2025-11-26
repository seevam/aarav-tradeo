export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Gamified Learning",
      description: "Interactive lessons designed like your favorite games. Earn XP, unlock levels, and build streaks as you master investing fundamentals.",
      color: "from-blue-500/10 to-blue-600/10",
      textColor: "text-blue-600"
    },
    {
      icon: "📊",
      title: "Real-Time Stock Simulation",
      description: "Practice with $100,000 virtual capital on real market data. No risk, all the learning. Trade stocks from major Southeast Asian exchanges.",
      color: "from-purple-500/10 to-purple-600/10",
      textColor: "text-purple-600"
    },
    {
      icon: "🤖",
      title: "AI-Powered Guidance",
      description: "Get instant answers to your investing questions 24/7. Our AI chatbot explains concepts, analyzes your portfolio, and provides personalized tips.",
      color: "from-[--color-primary]/10 to-green-600/10",
      textColor: "text-[--color-primary]"
    },
    {
      icon: "📈",
      title: "Investment Tracking",
      description: "Monitor your spending habits, set savings goals, and get AI recommendations on how much you can invest based on your financial situation.",
      color: "from-yellow-500/10 to-yellow-600/10",
      textColor: "text-yellow-600"
    },
    {
      icon: "🏆",
      title: "Social Leaderboards",
      description: "Compete with friends and climb the rankings. Share achievements, join challenges, and stay motivated with our community features.",
      color: "from-red-500/10 to-red-600/10",
      textColor: "text-red-600"
    },
    {
      icon: "🌏",
      title: "Localized for SEA",
      description: "Content in your language with examples from companies you know. Built specifically for Indonesia, Thailand, Vietnam, Philippines, Malaysia, and Singapore.",
      color: "from-indigo-500/10 to-indigo-600/10",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[--color-primary-light]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[--color-primary] font-medium text-sm">✨ Everything You Need</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[--color-dark] mb-6">
            Learn, Practice, and Master Investing
          </h2>
          <p className="text-xl text-[--color-gray]">
            All the tools you need to go from complete beginner to confident investor
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[--color-dark] mb-3">
                {feature.title}
              </h3>
              <p className="text-[--color-gray] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className={`mt-6 flex items-center ${feature.textColor} font-semibold opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span className="text-sm">Learn more</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[--color-primary] hover:bg-[--color-primary-dark] text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg">
            Try All Features Free
          </button>
        </div>
      </div>
    </section>
  );
}
