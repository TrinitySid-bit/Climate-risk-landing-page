'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What data does NestCheck include?",
      a: "NestCheck reports include climate risk scores (bushfire, flood, storm), planning overlay analysis (25+ overlay types), nearby amenities (schools, hospitals, public transport), and for Premium reports, 10 years of crime statistics with trend analysis. All data comes from official Victorian government sources."
    },
    {
      q: "How accurate is NestCheck?",
      a: "We aggregate data from official government sources including CFA, Bureau of Meteorology, Crime Statistics Agency, and DEECA planning data. Our scoring algorithm is designed to be conservative—we'd rather flag a potential risk than miss it. However, this is informational only and not a substitute for professional advice."
    },
    {
      q: "What's the difference between Basic and Premium?",
      a: "Basic ($29.99) includes climate risk scores, planning overlays, and nearby amenities. Premium ($39.99) adds comprehensive crime and safety analysis including 10-year crime trends, crime breakdown by category, floor-level security adjustments, and an overall Property Score combining all factors."
    },
    {
      q: "Does this replace a building inspection?",
      a: "No. NestCheck assesses climate risk, planning restrictions, crime statistics, and amenity access—not structural condition. You should still get a professional building inspection before purchasing any property."
    },
    {
      q: "Why only Victoria?",
      a: "We're starting with Victoria because of the excellent data availability and acute bushfire risk in many areas. We're expanding to NSW, QLD, and other states in 2026."
    },
    {
      q: "Who is NestCheck for?",
      a: "NestCheck is valuable for property buyers, current homeowners wanting to understand their property's risk profile, property investors assessing portfolios, real estate professionals, and renters wanting to know what they're moving into."
    },
    {
      q: "Can real estate agents use this?",
      a: "Absolutely! We offer commercial plans with unlimited reports and API access for agencies, buyer's agents, mortgage brokers, and property portals. Contact commercial@nestcheck.com.au for details."
    },
    {
      q: "What if my property has a bad score?",
      a: "A lower score doesn't mean you shouldn't buy—it means you should be informed. Many people happily live in higher-risk areas with proper preparation, appropriate insurance, and emergency plans. Knowledge is power."
    },
    {
      q: "How often is data updated?",
      a: "We refresh our datasets monthly from government sources. After major events (fires, floods), we update within 48 hours. Your reports always reflect the latest available data at the time of purchase."
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
            href="mailto:hello@nestcheck.com.au"
            className="text-green-600 font-semibold hover:text-green-700"
          >
            Email us at hello@nestcheck.com.au
          </a>
        </div>
      </div>
    </div>
  )
}