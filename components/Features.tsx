export default function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Duolingo-Style Learning",
      subtitle: "Learn in Bite-Sized Lessons",
      description: "5-10 minute modules that break down complex investing concepts into fun, digestible lessons. Learn on your commute, during lunch, anytime.",
      color: "from-[#42A5F5]/10 to-[#42A5F5]/5"
    },
    {
      icon: "🛡️",
      title: "Risk-Free Practice",
      subtitle: "Simulate Real Stocks with Virtual Money",
      description: "Get $10,000 in virtual cash to trade real Southeast Asian stocks in real-time. Make mistakes, learn lessons, build confidence—all without financial risk.",
      color: "from-[#00C853]/10 to-[#00C853]/5"
    },
    {
      icon: "🤖",
      title: "AI Investment Coach",
      subtitle: "24/7 AI Chatbot for Your Questions",
      description: "Confused about a term? Not sure which stock to pick? Ask our AI chatbot anything about investing and get instant, easy-to-understand answers.",
      color: "from-[#FFCA28]/10 to-[#FFCA28]/5"
    },
    {
      icon: "🏆",
      title: "Compete with Friends",
      subtitle: "Leaderboards & Social Competition",
      description: "See how your portfolio stacks up against friends. Earn badges, climb rankings, and celebrate wins together. Learning is better with friends.",
      color: "from-[#EF5350]/10 to-[#EF5350]/5"
    },
    {
      icon: "🌏",
      title: "Built for Southeast Asia",
      subtitle: "Localized for Your Market",
      description: "Learn with examples from GoTo, Grab, Jollibee, and other SEA companies you know. Content in Bahasa Indonesia and English, with more languages coming soon.",
      color: "from-[#FF7043]/10 to-[#FF7043]/5"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Your Journey from Beginner to Confident Investor
          </h2>
        </div>

        {/* Feature Cards - Alternating Layout */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image/Visual Side */}
              <div
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 flex items-center justify-center min-h-[300px] ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">{feature.icon}</div>
                  <div className="text-2xl font-bold text-[#212121]">{feature.title}</div>
                </div>
              </div>

              {/* Content Side */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="inline-block bg-[#00C853]/10 text-[#00C853] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Feature {index + 1}
                </div>
                <h3 className="text-3xl font-bold text-[#212121] mb-4">
                  {feature.subtitle}
                </h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
