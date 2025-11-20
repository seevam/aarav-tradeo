export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: "✅",
      title: "Sign Up Free",
      description: "Create your account in under 60 seconds. No credit card required."
    },
    {
      number: "2",
      icon: "🧠",
      title: "Learn & Practice",
      description: "Complete fun lessons, take quizzes, and practice with your virtual portfolio."
    },
    {
      number: "3",
      icon: "📈",
      title: "Build Confidence",
      description: "Track progress, earn badges, and gain the knowledge to invest for real when you're ready."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Start Investing in 3 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00C853] via-[#00C853] to-[#00C853]" style={{width: '80%', marginLeft: '10%', zIndex: 0}}></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              {/* Step Card */}
              <div className="bg-white border-2 border-[#E0E0E0] rounded-2xl p-8 hover:border-[#00C853] hover:shadow-xl transition-all duration-300">
                {/* Number Badge */}
                <div className="w-16 h-16 bg-[#00C853] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl text-center mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#212121] mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-[#757575] leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
