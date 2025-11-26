'use client';

import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[--color-primary] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-[--color-dark]">Tradeo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-[--color-gray] hover:text-[--color-primary] transition-colors">Features</a>
            <a href="#how-it-works" className="text-[--color-gray] hover:text-[--color-primary] transition-colors">How it Works</a>
            <a href="#pricing" className="text-[--color-gray] hover:text-[--color-primary] transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:inline-block text-[--color-primary] font-medium hover:text-[--color-primary-dark] transition-colors">
              Log In
            </button>
            <button className="bg-[--color-primary] hover:bg-[--color-primary-dark] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all text-sm sm:text-base">
              Get Started
            </button>
            <button
              className="md:hidden text-[--color-gray]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block text-[--color-gray] hover:text-[--color-primary] transition-colors">Features</a>
            <a href="#how-it-works" className="block text-[--color-gray] hover:text-[--color-primary] transition-colors">How it Works</a>
            <a href="#pricing" className="block text-[--color-gray] hover:text-[--color-primary] transition-colors">Pricing</a>
            <button className="block w-full text-left text-[--color-primary] font-medium">Log In</button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[--color-primary-light]/30 rounded-full px-4 py-2">
              <span className="text-[--color-primary] font-medium text-xs sm:text-sm">🎉 For Ages 18-25 in Southeast Asia</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[--color-dark] leading-tight">
              Learn to Invest with
              <span className="text-[--color-primary]"> Confidence</span>
            </h1>

            <p className="text-base sm:text-xl text-[--color-gray] leading-relaxed">
              Master the stock market through gamified lessons, risk-free simulations, and AI-powered guidance.
              Start your investment journey today—no experience needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[--color-primary] hover:bg-[--color-primary-dark] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                Start Learning Free
              </button>
              <button className="bg-white border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all text-sm sm:text-base">
                See How it Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[--color-primary]">50K+</div>
                <div className="text-xs sm:text-sm text-[--color-gray] mt-1">Active Learners</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[--color-primary]">100+</div>
                <div className="text-xs sm:text-sm text-[--color-gray] mt-1">Lessons</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[--color-primary]">4.8★</div>
                <div className="text-xs sm:text-sm text-[--color-gray] mt-1">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-[--color-primary-light]/20 to-[--color-primary]/10 rounded-3xl p-6 sm:p-8">
              {/* Mock App Interface */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Mock Chart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[--color-dark]">Portfolio Value</span>
                    <span className="text-xs text-[--color-primary] bg-[--color-primary-light]/30 px-3 py-1 rounded-full">+12.5%</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[--color-dark]">$112,500</div>
                  <div className="h-24 sm:h-32 bg-gradient-to-t from-[--color-primary]/20 to-transparent rounded-lg relative">
                    {/* Simplified chart visualization */}
                    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <path
                        d="M 0,60 L 40,50 L 80,55 L 120,35 L 160,40 L 200,20"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mock Features */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[--color-light] rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">📚</div>
                    <div className="text-xs font-semibold text-[--color-dark]">Learn</div>
                    <div className="text-xs text-[--color-gray]">50+ lessons</div>
                  </div>
                  <div className="bg-[--color-light] rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">📊</div>
                    <div className="text-xs font-semibold text-[--color-dark]">Simulate</div>
                    <div className="text-xs text-[--color-gray]">Risk-free</div>
                  </div>
                  <div className="bg-[--color-light] rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">🤖</div>
                    <div className="text-xs font-semibold text-[--color-dark]">AI Guide</div>
                    <div className="text-xs text-[--color-gray]">24/7 help</div>
                  </div>
                  <div className="bg-[--color-light] rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">🏆</div>
                    <div className="text-xs font-semibold text-[--color-dark]">Compete</div>
                    <div className="text-xs text-[--color-gray]">With friends</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 transform rotate-6 hidden sm:block">
                <div className="text-2xl sm:text-3xl">🔥</div>
                <div className="text-xs font-bold text-[--color-primary]">7 Day Streak!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-[--color-primary] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-[--color-primary-light] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
