export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up Free",
      description: "Create your account in seconds. No credit card required. Start with $100,000 virtual capital to practice.",
      icon: "👤"
    },
    {
      number: "2",
      title: "Learn the Basics",
      description: "Complete bite-sized lessons on stock market fundamentals. Earn XP and unlock new modules as you progress.",
      icon: "📖"
    },
    {
      number: "3",
      title: "Practice Risk-Free",
      description: "Use our simulator to trade real stocks with virtual money. Test strategies without financial risk.",
      icon: "🎮"
    },
    {
      number: "4",
      title: "Get AI Guidance",
      description: "Ask questions anytime to our AI assistant. Get personalized portfolio feedback and investment insights.",
      icon: "💡"
    },
    {
      number: "5",
      title: "Track & Compete",
      description: "Monitor your progress, compete with friends, and climb the leaderboards. Stay motivated with challenges.",
      icon: "🎯"
    },
    {
      number: "6",
      title: "Invest Confidently",
      description: "Apply your knowledge to real investing when you're ready. Graduate from beginner to confident investor.",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b9f6ca]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00c853] font-semibold text-sm">📍 Your Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4 md:mb-6">
            From Zero to Investor in 6 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-[#757575]">
            A clear path designed to build your confidence and competence
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#00c853] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 pt-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#212121] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#757575] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00c853] mb-2">5-10 min</div>
              <div className="text-sm md:text-base text-[#757575]">Per lesson</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00c853] mb-2">$100K</div>
              <div className="text-sm md:text-base text-[#757575]">Virtual capital</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00c853] mb-2">24/7</div>
              <div className="text-sm md:text-base text-[#757575]">AI assistance</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00c853] mb-2">0</div>
              <div className="text-sm md:text-base text-[#757575]">Financial risk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
