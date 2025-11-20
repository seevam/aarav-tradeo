'use client';

import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#00C853] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-semibold text-[#212121]">Tradeo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                FAQ
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <button className="bg-[#00C853] hover:bg-[#00A043] text-white font-semibold px-6 py-3 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Download Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#757575]"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#E0E0E0]">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                  How it Works
                </a>
                <a href="#pricing" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                  Pricing
                </a>
                <a href="#faq" className="text-[#757575] hover:text-[#00C853] transition-colors font-medium">
                  FAQ
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00C853] to-[#B9F6CA] min-h-screen flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Learn to Invest Like a Game
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Master the stock market through fun, bite-sized lessons. No risk. Real knowledge. Built for Southeast Asian youth.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-[#00C853] hover:bg-gray-50 font-semibold px-8 py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Download Now
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl transition-all">
                  Watch Demo
                </button>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#" className="inline-block">
                  <div className="bg-black/90 hover:bg-black px-6 py-3 rounded-xl flex items-center gap-3 transition-colors">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/80">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="bg-black/90 hover:bg-black px-6 py-3 rounded-xl flex items-center gap-3 transition-colors">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/80">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - App Mockup */}
            <div className="relative lg:block hidden">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-[300px] transform rotate-[8deg] hover:rotate-[5deg] transition-transform">
                <div className="bg-[#212121] rounded-[40px] p-3 shadow-2xl">
                  <div className="bg-white rounded-[32px] overflow-hidden">
                    {/* App Screenshot Content */}
                    <div className="bg-gradient-to-b from-[#00C853] to-[#00A043] p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold">Tradeo</div>
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm">🔥 7 Day Streak</div>
                      </div>
                      <div className="text-sm opacity-90 mb-2">Portfolio Value</div>
                      <div className="text-3xl font-bold">$112,500</div>
                      <div className="text-sm text-white/80">+12.5% this week</div>
                    </div>

                    <div className="p-6 bg-white space-y-3">
                      <div className="bg-[#F5F5F5] rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#42A5F5]/20 rounded-full flex items-center justify-center text-xl">
                            📚
                          </div>
                          <div>
                            <div className="font-semibold text-sm">Learning Module</div>
                            <div className="text-xs text-[#757575]">Continue lesson</div>
                          </div>
                        </div>
                        <div className="text-[#00C853] font-semibold">→</div>
                      </div>

                      <div className="bg-[#F5F5F5] rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#FFCA28]/20 rounded-full flex items-center justify-center text-xl">
                            📊
                          </div>
                          <div>
                            <div className="font-semibold text-sm">Practice Trading</div>
                            <div className="text-xs text-[#757575]">Risk-free simulator</div>
                          </div>
                        </div>
                        <div className="text-[#00C853] font-semibold">→</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="text-3xl">💰</div>
                <div className="text-xs font-bold text-[#00C853]">+$2,500</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
