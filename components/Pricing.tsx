export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            100% Free to Start. Seriously.
          </h2>
          <p className="text-xl text-[#757575] mb-8">
            No credit card. No hidden fees. Just learning.
          </p>
        </div>

        {/* Free Features Card */}
        <div className="bg-gradient-to-br from-[#00C853] to-[#00A043] rounded-2xl p-8 md:p-12 text-white mb-8">
          <h3 className="text-3xl font-bold mb-8">What's Included</h3>

          <ul className="space-y-4 mb-8">
            {[
              "All learning modules unlocked",
              "Unlimited stock market simulation",
              "AI chatbot (20 messages/day)",
              "Compete with friends",
              "Track your progress"
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-lg">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full bg-white text-[#00C853] hover:bg-gray-50 font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl text-lg">
            Start Learning Free
          </button>

          <p className="text-center text-white/80 text-sm mt-6">
            Upgrade to Premium for advanced features ($4.99/month) •{' '}
            <a href="#" className="underline hover:text-white">See Premium Features</a>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-[#757575] text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00C853]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00C853]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00C853]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
