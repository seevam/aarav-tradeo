export default function Features() {
  const features = [
    {
      icon: '📚',
      title: 'Gamified Learning',
      description: 'Interactive lessons designed like your favorite games. Earn XP, unlock levels, and build streaks as you master investing fundamentals.',
      bgColor: 'bg-[#e8f5ff]',
      iconBg: 'bg-[#d1ebff]'
    },
    {
      icon: '📊',
      title: 'Real-Time Stock Simulation',
      description: 'Practice with $100,000 virtual capital on real market data. No risk, all the learning. Trade stocks from major Southeast Asian exchanges.',
      bgColor: 'bg-[#fff4e6]',
      iconBg: 'bg-[#ffe9cc]'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Guidance',
      description: 'Get instant answers to your investing questions 24/7. Our AI chatbot explains concepts, analyzes your portfolio, and provides personalized tips.',
      bgColor: 'bg-[#f3e8ff]',
      iconBg: 'bg-[#e7d1ff]'
    },
    {
      icon: '📈',
      title: 'Investment Tracking',
      description: 'Monitor your spending habits, set savings goals, and get AI recommendations on how much you can invest based on your financial situation.',
      bgColor: 'bg-[#e6fff5]',
      iconBg: 'bg-[#ccffe6]'
    },
    {
      icon: '🏆',
      title: 'Social Leaderboards',
      description: 'Compete with friends and climb the rankings. Share achievements, join challenges, and stay motivated with our community features.',
      bgColor: 'bg-[#fff0f0]',
      iconBg: 'bg-[#ffe1e1]'
    },
    {
      icon: '🌏',
      title: 'Localized for SEA',
      description: 'Content in your language with examples from companies you know. Built specifically for Indonesia, Thailand, Vietnam, Philippines, Malaysia, and Singapore.',
      bgColor: 'bg-[#f0f4ff]',
      iconBg: 'bg-[#e1e9ff]'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#292929] mb-4">
            Everything you need to start investing
          </h2>
          <p className="text-[17px] text-[#666666]">
            All the tools to go from complete beginner to confident investor
          </p>
        </div>

        {/* Features Grid - Groww Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all duration-200"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.iconBg} rounded-lg flex items-center justify-center text-3xl mb-4`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-[19px] font-semibold text-[#292929] mb-2">
                {feature.title}
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
