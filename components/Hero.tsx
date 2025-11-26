'use client';

import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden z-0">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Tradeo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:inline-block text-primary font-medium hover:text-primary-dark transition-colors">
              Log In
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all text-sm sm:text-base">
              Get Started
            </button>
            <button
              className="md:hidden text-gray-600"
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
            <a href="#features" className="block text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="block text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <button className="block w-full text-left text-primary font-medium">Log In</button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-light/30 rounded-full px-4 py-2">
              <span className="text-primary font-medium text-xs sm:text-sm">🎉 For Ages 18-25 in Southeast Asia</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learn to Invest with
              <span className="text-primary"> Confidence</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Master the stock market through gamified lessons, risk-free simulations, and AI-powered guidance.
              Start your investment journey today—no experience needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                Start Learning Free
              </button>
              <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all text-sm sm:text-base">
                See How it Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">50K+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Active Learners</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Lessons</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">4.8★</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative mt-8 lg:mt-0 pt-6 sm:pt-8">
            <div className="relative bg-gradient-to-br from-primary-light/20 to-primary/10 rounded-3xl p-6 sm:p-8 overflow-visible">
              {/* Mock App Interface */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Mock Chart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">Portfolio Value</span>
                    <span className="text-xs text-primary bg-primary-light/30 px-3 py-1 rounded-full">+12.5%</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">$112,500</div>
                  <div className="h-24 sm:h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-lg relative overflow-hidden">
                    {/* Smooth chart visualization with bezier curves */}
                    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" className="text-primary" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-primary" />
                        </linearGradient>
                      </defs>
                      {/* Area fill under the curve */}
                      <path
                        d="M 0,60 C 20,55 30,52 40,50 C 60,47 70,52 80,55 C 95,57 105,38 120,35 C 135,32 145,38 160,40 C 175,42 185,25 200,20 L 200,80 L 0,80 Z"
                        fill="url(#chartGradient)"
                      />
                      {/* Smooth line on top */}
                      <path
                        d="M 0,60 C 20,55 30,52 40,50 C 60,47 70,52 80,55 C 95,57 105,38 120,35 C 135,32 145,38 160,40 C 175,42 185,25 200,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mock Features */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-100 rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">📚</div>
                    <div className="text-xs font-semibold text-gray-900">Learn</div>
                    <div className="text-xs text-gray-600">50+ lessons</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">📊</div>
                    <div className="text-xs font-semibold text-gray-900">Simulate</div>
                    <div className="text-xs text-gray-600">Risk-free</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">🤖</div>
                    <div className="text-xs font-semibold text-gray-900">AI Guide</div>
                    <div className="text-xs text-gray-600">24/7 help</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl mb-2">🏆</div>
                    <div className="text-xs font-semibold text-gray-900">Compete</div>
                    <div className="text-xs text-gray-600">With friends</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 transform rotate-6 hidden sm:block">
                <div className="text-2xl sm:text-3xl">🔥</div>
                <div className="text-xs font-bold text-primary">7 Day Streak!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
