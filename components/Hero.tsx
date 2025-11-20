'use client';

import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#00c853] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-[#212121]">Tradeo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#757575] hover:text-[#00c853] transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-[#757575] hover:text-[#00c853] transition-colors font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-[#757575] hover:text-[#00c853] transition-colors font-medium">
                Pricing
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:block text-[#00c853] font-semibold hover:text-[#00a043] transition-colors">
                Log In
              </button>
              <button className="bg-[#00c853] hover:bg-[#00a043] text-white font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all text-sm md:text-base">
                Get Started
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
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-[#757575] hover:text-[#00c853] transition-colors font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="text-[#757575] hover:text-[#00c853] transition-colors font-medium">
                  How it Works
                </a>
                <a href="#pricing" className="text-[#757575] hover:text-[#00c853] transition-colors font-medium">
                  Pricing
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#b9f6ca]/20 rounded-full px-4 py-2">
              <span className="text-[#00c853] font-semibold text-sm">
                🎉 For Ages 18-25 in Southeast Asia
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#212121] leading-tight">
              Learn to Invest with
              <span className="text-[#00c853]"> Confidence</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#757575] leading-relaxed max-w-xl">
              Master the stock market through gamified lessons, risk-free simulations, and AI-powered guidance.
              Start your investment journey today—no experience needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#00c853] hover:bg-[#00a043] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
                Start Learning Free
              </button>
              <button className="bg-white border-2 border-[#00c853] text-[#00c853] hover:bg-[#00c853] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all">
                See How it Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#00c853]">50K+</div>
                <div className="text-sm text-[#757575] mt-1">Active Learners</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#00c853]">100+</div>
                <div className="text-sm text-[#757575] mt-1">Lessons</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#00c853]">4.8★</div>
                <div className="text-sm text-[#757575] mt-1">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#b9f6ca]/20 to-[#00c853]/10 rounded-3xl p-6 md:p-8">
              {/* Mock App Interface */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-6">
                {/* Portfolio Value */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#212121]">Portfolio Value</span>
                    <span className="text-xs text-[#00c853] bg-[#b9f6ca]/30 px-3 py-1 rounded-full font-semibold">+12.5%</span>
                  </div>
                  <div className="text-3xl font-bold text-[#212121]">$112,500</div>

                  {/* Chart */}
                  <div className="h-32 bg-gradient-to-t from-[#00c853]/10 to-transparent rounded-lg relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path
                        d="M 0,70 L 50,65 L 100,68 L 150,45 L 200,50 L 250,35 L 300,25"
                        fill="none"
                        stroke="#00c853"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#f5f5f5] rounded-xl p-4">
                    <div className="text-2xl mb-2">📚</div>
                    <div className="text-sm font-semibold text-[#212121]">Learn</div>
                    <div className="text-xs text-[#757575]">50+ lessons</div>
                  </div>
                  <div className="bg-[#f5f5f5] rounded-xl p-4">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm font-semibold text-[#212121]">Simulate</div>
                    <div className="text-xs text-[#757575]">Risk-free</div>
                  </div>
                  <div className="bg-[#f5f5f5] rounded-xl p-4">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="text-sm font-semibold text-[#212121]">AI Guide</div>
                    <div className="text-xs text-[#757575]">24/7 help</div>
                  </div>
                  <div className="bg-[#f5f5f5] rounded-xl p-4">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-sm font-semibold text-[#212121]">Compete</div>
                    <div className="text-xs text-[#757575]">With friends</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-6 hidden sm:block">
                <div className="text-3xl">🔥</div>
                <div className="text-xs font-bold text-[#00c853]">7 Day Streak!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-[#00c853] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-[#b9f6ca] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
