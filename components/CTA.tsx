export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-gradient-to-r from-[#00d09c] to-[#00b386] rounded-2xl px-8 py-12 md:py-16 text-center">
          {/* Headline */}
          <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-4">
            Start your investment journey today
          </h2>

          {/* Description */}
          <p className="text-[17px] text-white/90 mb-8 max-w-[640px] mx-auto">
            Join 50,000+ young investors learning to build wealth. Get $100,000 virtual capital to practice with.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-[#00d09c] hover:bg-gray-50 font-semibold px-10 py-4 rounded-md transition-all text-[16px] shadow-lg">
            Get Started for Free
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/80 text-[14px]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Start in 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
