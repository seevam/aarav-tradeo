export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b9f6ca]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00c853] font-semibold text-sm">💰 Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4 md:mb-6">
            Start Free, Upgrade When Ready
          </h2>
          <p className="text-lg md:text-xl text-[#757575]">
            Everything you need to learn investing is free. Premium unlocks advanced features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          {/* Free Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 md:p-10">
            <div className="mb-8">
              <div className="text-sm font-bold text-[#757575] uppercase tracking-wide mb-3">
                Free Forever
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-[#212121]">$0</span>
                <span className="text-[#757575] ml-2">/month</span>
              </div>
              <p className="text-[#757575]">
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
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00c853] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#757575]">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white border-2 border-[#00c853] text-[#00c853] hover:bg-[#00c853] hover:text-white font-semibold py-4 rounded-xl transition-all">
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-[#00c853] to-[#00a043] rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="text-sm font-bold">⭐ Most Popular</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-sm font-bold text-white/80 uppercase tracking-wide mb-3">
                Premium
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$4.99</span>
                <span className="text-white/80 ml-2">/month</span>
              </div>
              <p className="text-white/90 mb-4">
                For serious learners who want the complete experience
              </p>
              <div className="text-sm text-white/80">
                Or save 17% with annual: <span className="font-bold text-white">$49.99/year</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="text-sm font-bold text-white/90 uppercase tracking-wide">
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
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-[#00c853] hover:bg-white/90 font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
              Start Premium Trial
            </button>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-[#757575] mb-6">Trusted by 50,000+ young investors across Southeast Asia</p>
          <div className="flex justify-center items-center flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇩</span>
              <span className="text-[#757575]">Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇹🇭</span>
              <span className="text-[#757575]">Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇻🇳</span>
              <span className="text-[#757575]">Vietnam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇵🇭</span>
              <span className="text-[#757575]">Philippines</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇲🇾</span>
              <span className="text-[#757575]">Malaysia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇸🇬</span>
              <span className="text-[#757575]">Singapore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
