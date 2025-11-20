export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#00C853] to-[#B9F6CA]">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Investing Journey?
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-[700px] mx-auto">
          Download Tradeo and complete your first lesson today.
        </p>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#" className="inline-block">
            <div className="bg-black hover:bg-black/90 px-8 py-4 rounded-2xl flex items-center gap-4 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/80">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </div>
          </a>
          <a href="#" className="inline-block">
            <div className="bg-black hover:bg-black/90 px-8 py-4 rounded-2xl flex items-center gap-4 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/80">GET IT ON</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </div>
          </a>
        </div>

        {/* Email Waitlist (Optional) */}
        <div className="max-w-[500px] mx-auto">
          <p className="text-white/90 mb-4">Not ready yet? Join our waitlist for updates</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-[#212121] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#00C853] hover:bg-gray-50 font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
