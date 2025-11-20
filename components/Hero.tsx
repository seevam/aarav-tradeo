'use client';

import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative bg-white">
      {/* Navigation - Groww Style */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#00d09c] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-semibold text-[#292929]">Tradeo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-[#666666] hover:text-[#292929] transition-colors text-[15px] font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-[#666666] hover:text-[#292929] transition-colors text-[15px] font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-[#666666] hover:text-[#292929] transition-colors text-[15px] font-medium">
                Pricing
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:block text-[#00d09c] font-semibold hover:text-[#00b386] transition-colors text-[15px]">
                Log In
              </button>
              <button className="bg-[#00d09c] hover:bg-[#00b386] text-white font-semibold px-6 py-2.5 rounded-md transition-all text-[15px]">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#666666]"
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
                <a href="#features" className="text-[#666666] hover:text-[#292929] transition-colors text-[15px] font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="text-[#666666] hover:text-[#292929] transition-colors text-[15px] font-medium">
                  How it Works
                </a>
                <a href="#pricing" className="text-[#666666] hover:text-[#292929] transition-colors text-[15px] font-medium">
                  Pricing
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content - Groww Style: Large, centered, minimal */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="text-center max-w-[880px] mx-auto">
          {/* Main Headline - Very Large */}
          <h1 className="text-[44px] md:text-[64px] lg:text-[72px] font-bold text-[#292929] leading-[1.1] mb-6">
            Groww your wealth with
            <br />
            <span className="text-[#00d09c]">smart investing</span>
          </h1>

          {/* Subheading */}
          <p className="text-[18px] md:text-[20px] text-[#666666] leading-relaxed mb-10 max-w-[680px] mx-auto">
            Master the stock market through gamified lessons, risk-free simulations, and AI-powered guidance.
            Built for young investors in Southeast Asia.
          </p>

          {/* CTA Button - Single, prominent */}
          <div className="flex justify-center mb-12">
            <button className="bg-[#00d09c] hover:bg-[#00b386] text-white font-semibold px-10 py-4 rounded-md transition-all text-[16px] shadow-md hover:shadow-lg">
              Start Investing for Free
            </button>
          </div>

          {/* Trust Indicators - Minimal */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#999999] text-[14px]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00d09c]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>50,000+ Active Learners</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00d09c]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.8 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00d09c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Free to Start</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section - Groww style cards */}
      <div className="bg-[#f8f9ff] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '📚', title: 'Learn', subtitle: '100+ lessons', color: 'bg-[#e8f5ff]' },
              { icon: '📊', title: 'Simulate', subtitle: 'Risk-free trading', color: 'bg-[#fff4e6]' },
              { icon: '🤖', title: 'AI Guide', subtitle: '24/7 assistance', color: 'bg-[#f3e8ff]' },
              { icon: '🏆', title: 'Compete', subtitle: 'With friends', color: 'bg-[#e6fff5]' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-2xl mb-3`}>
                  {item.icon}
                </div>
                <div className="text-[17px] font-semibold text-[#292929] mb-1">{item.title}</div>
                <div className="text-[14px] text-[#666666]">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
