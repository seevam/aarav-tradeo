export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-text-primary">Tradeo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-text-secondary hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="text-text-secondary hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-primary font-medium hover:text-primary-dark transition-colors">
              Log In
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-light/30 rounded-full px-4 py-2">
              <span className="text-primary font-medium text-sm">🎉 For Ages 18-25 in Southeast Asia</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Learn to Invest with
              <span className="text-primary"> Confidence</span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed">
              Master the stock market through gamified lessons, risk-free simulations, and AI-powered guidance.
              Start your investment journey today—no experience needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Learning Free
              </button>
              <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all">
                See How it Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-text-secondary mt-1">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-text-secondary mt-1">Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-text-secondary mt-1">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-light/20 to-primary/10 rounded-3xl p-8 backdrop-blur">
              {/* Mock App Interface */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-6">
                {/* Mock Chart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-text-primary">Portfolio Value</span>
                    <span className="text-xs text-primary bg-primary-light/30 px-3 py-1 rounded-full">+12.5%</span>
                  </div>
                  <div className="text-3xl font-bold text-text-primary">$112,500</div>
                  <div className="h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-lg relative">
                    {/* Simplified chart visualization */}
                    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <path
                        d="M 0,60 L 40,50 L 80,55 L 120,35 L 160,40 L 200,20"
                        fill="none"
                        stroke="#00C853"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mock Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-2xl mb-2">📚</div>
                    <div className="text-xs font-semibold text-text-primary">Learn</div>
                    <div className="text-xs text-text-secondary">50+ lessons</div>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-xs font-semibold text-text-primary">Simulate</div>
                    <div className="text-xs text-text-secondary">Risk-free</div>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="text-xs font-semibold text-text-primary">AI Guide</div>
                    <div className="text-xs text-text-secondary">24/7 help</div>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-xs font-semibold text-text-primary">Compete</div>
                    <div className="text-xs text-text-secondary">With friends</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-6">
                <div className="text-3xl">🔥</div>
                <div className="text-xs font-bold text-primary">7 Day Streak!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
