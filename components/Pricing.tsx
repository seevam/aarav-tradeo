export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-[#f8f9ff]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#292929] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[17px] text-[#666666]">
            Everything you need to learn investing is free. Premium unlocks advanced features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <div className="mb-6">
              <div className="text-[13px] font-semibold text-[#666666] uppercase tracking-wider mb-3">
                Free
              </div>
              <div className="flex items-baseline mb-3">
                <span className="text-[48px] font-bold text-[#292929]">$0</span>
                <span className="text-[#666666] ml-2">/month</span>
              </div>
              <p className="text-[15px] text-[#666666]">
                Perfect for beginners starting their investment journey
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {[
                "All learning modules (100+ lessons)",
                "Stock market simulation",
                "AI chatbot (20 messages/day)",
                "Expense tracking & savings goals",
                "Social leaderboards",
                "Basic portfolio analytics"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-[15px] text-[#292929]">
                  <svg className="w-5 h-5 text-[#00d09c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white border-2 border-[#00d09c] text-[#00d09c] hover:bg-[#00d09c] hover:text-white font-semibold py-3 rounded-md transition-all text-[15px]">
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#00d09c] rounded-lg p-8 text-white relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-[12px] font-semibold">⭐ POPULAR</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-[13px] font-semibold text-white/80 uppercase tracking-wider mb-3">
                Premium
              </div>
              <div className="flex items-baseline mb-3">
                <span className="text-[48px] font-bold">$4.99</span>
                <span className="text-white/80 ml-2">/month</span>
              </div>
              <p className="text-[15px] text-white/90 mb-2">
                For serious learners who want the complete experience
              </p>
              <div className="text-[14px] text-white/80">
                Or $49.99/year (save 17%)
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="text-[13px] font-semibold text-white/90 uppercase tracking-wider">
                Everything in Free, plus:
              </li>
              {[
                "Unlimited AI chatbot messages",
                "Real-time stock data (no delay)",
                "Advanced learning modules",
                "Premium avatars & themes",
                "Ad-free experience",
                "Priority support",
                "Exclusive competitions",
                "Advanced analytics"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-[15px]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-[#00d09c] hover:bg-white/90 font-semibold py-3 rounded-md transition-all text-[15px]">
              Start Premium Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
