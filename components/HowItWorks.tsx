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
    <section id="how-it-works" className="py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#B9F6CA]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00C853] font-medium text-sm">📍 Your Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#212121] mb-6">
            From Zero to Investor in 6 Simple Steps
          </h2>
          <p className="text-xl text-[#757575]">
            A clear path designed to build your confidence and competence
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#00C853] to-transparent -ml-4 z-0"
                       style={{ width: 'calc(100% - 2rem)' }}></div>
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow z-10">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00C853] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
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
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00C853] mb-2">5-10 min</div>
              <div className="text-[#757575]">Per lesson</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00C853] mb-2">$100K</div>
              <div className="text-[#757575]">Virtual capital</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00C853] mb-2">24/7</div>
              <div className="text-[#757575]">AI assistance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00C853] mb-2">0</div>
              <div className="text-[#757575]">Financial risk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
