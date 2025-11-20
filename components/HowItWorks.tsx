export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up Free",
      description: "Create your account in seconds. No credit card required. Start with $100,000 virtual capital.",
      icon: "👤"
    },
    {
      number: "2",
      title: "Learn the Basics",
      description: "Complete bite-sized lessons on stock market fundamentals. Earn XP and unlock new modules.",
      icon: "📖"
    },
    {
      number: "3",
      title: "Practice Risk-Free",
      description: "Use our simulator to trade real stocks with virtual money. Test strategies without risk.",
      icon: "🎮"
    },
    {
      number: "4",
      title: "Get AI Guidance",
      description: "Ask questions anytime. Get personalized portfolio feedback and investment insights.",
      icon: "💡"
    },
    {
      number: "5",
      title: "Track & Compete",
      description: "Monitor your progress, compete with friends, and climb the leaderboards.",
      icon: "🎯"
    },
    {
      number: "6",
      title: "Invest Confidently",
      description: "Apply your knowledge to real investing when ready. Graduate to confident investor.",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-[#f8f9ff]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#292929] mb-4">
            Your investment journey
          </h2>
          <p className="text-[17px] text-[#666666]">
            A clear path from beginner to confident investor
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-100">
              {/* Icon and Number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{step.icon}</div>
                <div className="w-8 h-8 bg-[#00d09c] rounded-full flex items-center justify-center text-white font-semibold text-[15px]">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[19px] font-semibold text-[#292929] mb-2">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[32px] font-bold text-[#292929] mb-1">5-10 min</div>
              <div className="text-[14px] text-[#666666]">Per lesson</div>
            </div>
            <div>
              <div className="text-[32px] font-bold text-[#292929] mb-1">$100K</div>
              <div className="text-[14px] text-[#666666]">Virtual capital</div>
            </div>
            <div>
              <div className="text-[32px] font-bold text-[#292929] mb-1">24/7</div>
              <div className="text-[14px] text-[#666666]">AI assistance</div>
            </div>
            <div>
              <div className="text-[32px] font-bold text-[#292929] mb-1">0</div>
              <div className="text-[14px] text-[#666666]">Financial risk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
