'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "How accurate is ClimateScore?",
      a: "We aggregate data from official government sources including CFA, BoM, Melbourne Water, and council planning overlays. Our algorithm is designed to be conservative—we'd rather overestimate risk than underestimate it. However, this is informational only and not a substitute for professional advice."
    },
    {
      q: "Does this replace a building inspection?",
      a: "No. ClimateScore assesses climate and natural disaster risk, not structural condition. You should still get a professional building inspection before purchasing any property."
    },
    {
      q: "Why only Victoria?",
      a: "We're starting with Victoria because of the acute bushfire risk and excellent data availability. We'll expand to other states in 2026 based on demand."
    },
    {
      q: "Will this affect property values?",
      a: "Climate risk already affects property values through insurance costs and buyer perceptions. We're simply making this information transparent. Properties in high-risk areas often sell for 15-30% less than comparable low-risk properties."
    },
    {
      q: "Can real estate agents use this?",
      a: "Yes! Our Agent tier includes white-label reports you can provide to clients, positioning yourself as a trusted advisor. It's a competitive advantage in today's market."
    },
    {
      q: "What if my property has a bad score?",
      a: "A lower score doesn't mean you shouldn't buy—it means you should be informed. Many people happily live in higher-risk areas with proper preparation, appropriate insurance, and bushfire plans. Knowledge is power."
    },
    {
      q: "Will you sell my data?",
      a: "Never. We don't sell user data. We may share anonymized, aggregated statistics (e.g., 'searches in bushfire zones increased 20%') but never individual addresses or user information."
    },
    {
      q: "How often is data updated?",
      a: "We refresh our datasets monthly from government sources. After major events (fires, floods), we update within 48 hours. Your reports always reflect the latest available data."
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.q}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-slate-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:hello@climatescore.com.au"
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Email us at hello@climatescore.com.au
          </a>
        </div>
      </div>
    </div>
  )
}