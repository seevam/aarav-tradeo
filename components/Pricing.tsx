export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light/30 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-medium text-sm">💰 Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Start Free, Upgrade When Ready
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to learn investing is free. Premium unlocks advanced features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10">
            <div className="mb-8">
              <div className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
                Free Forever
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-text-primary">$0</span>
                <span className="text-text-secondary ml-2">/month</span>
              </div>
              <p className="text-text-secondary">
                Perfect for beginners starting their investment journey
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {[
                "All learning modules (100+ lessons)",
                "Stock market simulation (unlimited)",
                "AI chatbot (20 messages/day)",
                "Expense tracking & savings goals",
                "Social leaderboards",
                "Basic portfolio analytics",
                "Standard avatars & themes"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-4 rounded-xl transition-all">
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="text-sm font-semibold">⭐ Most Popular</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-3">
                Premium
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$4.99</span>
                <span className="text-white/80 ml-2">/month</span>
              </div>
              <p className="text-white/90">
                For serious learners who want the complete experience
              </p>
              <div className="mt-4 text-sm text-white/80">
                Or save 17% with annual: <span className="font-bold text-white">$49.99/year</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                Everything in Free, plus:
              </li>
              {[
                "Unlimited AI chatbot messages",
                "Real-time stock data (no delay)",
                "Advanced learning modules",
                "Premium avatars & themes",
                "Ad-free experience",
                "Priority support",
                "Exclusive competitions & prizes",
                "Advanced portfolio analytics",
                "Tax projections & insights",
                "Early access to new features"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
              Start Premium Trial
            </button>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">Trusted by 50,000+ young investors across Southeast Asia</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇮🇩</span>
              <span className="text-text-secondary">Indonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇹🇭</span>
              <span className="text-text-secondary">Thailand</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇻🇳</span>
              <span className="text-text-secondary">Vietnam</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇵🇭</span>
              <span className="text-text-secondary">Philippines</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇲🇾</span>
              <span className="text-text-secondary">Malaysia</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇸🇬</span>
              <span className="text-text-secondary">Singapore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
