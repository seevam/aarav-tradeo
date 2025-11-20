'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Tradeo really free?",
      answer: "Yes! All core features including lessons, simulation, and AI chatbot are completely free. We offer an optional Premium subscription for advanced features."
    },
    {
      question: "Do I need money to start?",
      answer: "No! You practice with virtual money ($10,000) in our simulation. There's zero financial risk."
    },
    {
      question: "Is this app safe? Will I lose real money?",
      answer: "Absolutely safe. Tradeo is 100% educational. You never connect real bank accounts or trade with real money in our app."
    },
    {
      question: "What if I know nothing about investing?",
      answer: "Perfect! Tradeo is designed for complete beginners. We start with the absolute basics and explain everything in simple terms."
    },
    {
      question: "Which countries is Tradeo available in?",
      answer: "Currently Indonesia, with Thailand, Philippines, Vietnam, Malaysia, and Singapore coming soon. The app teaches investing in Southeast Asian markets."
    },
    {
      question: "What age do I need to be?",
      answer: "You must be 18 or older to create an account."
    },
    {
      question: "Is this financial advice?",
      answer: "No. Tradeo is an educational platform. We teach investing concepts but don't provide personalized financial advice. Always do your own research."
    },
    {
      question: "Can I really learn in just 5-10 minutes a day?",
      answer: "Yes! Our micro-lessons are designed for busy schedules. Consistency matters more than marathon sessions."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-[#212121] pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#00C853] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#757575] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
