// components/Pricing.tsx - Updated with checkout modal

'use client'
import { useState } from 'react'
import { Check, X } from 'lucide-react'
import CheckoutModal from './CheckoutModal'

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('premium')

  const openCheckout = (plan: 'basic' | 'premium') => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600">
            Choose the right level of insight for your property purchase
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Report */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200 hover:border-green-500 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic Report</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-slate-900">$29.99</span>
                <span className="text-slate-600 ml-2">per property</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-slate-600">
                Essential climate risk assessment for informed property decisions
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>Climate Risk Analysis</strong>
                  <br />
                  <span className="text-sm text-slate-600">Bushfire, flood, and storm risk ratings</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>Planning Overlays</strong>
                  <br />
                  <span className="text-sm text-slate-600">25+ overlay types checked</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>Nearby Amenities</strong>
                  <br />
                  <span className="text-sm text-slate-600">Schools, hospitals, transport</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>20 Years Historical Data</strong>
                  <br />
                  <span className="text-sm text-slate-600">Severity-weighted incident analysis</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>Professional PDF Report</strong>
                  <br />
                  <span className="text-sm text-slate-600">Comprehensive property analysis</span>
                </span>
              </li>
              <li className="flex items-start opacity-50">
                <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500">
                  Crime & Safety Analysis
                </span>
              </li>
              <li className="flex items-start opacity-50">
                <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500">
                  Overall Property Score
                </span>
              </li>
            </ul>

            <button 
              onClick={() => openCheckout('basic')}
              className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Get Basic Report
            </button>
          </div>

          {/* Premium Report - RECOMMENDED */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-8 border-2 border-green-500 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-6 py-1 rounded-full text-sm font-bold">
              RECOMMENDED
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium Report</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">$39.99</span>
                <span className="text-green-100 ml-2">per property</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-green-50">
                Complete property intelligence including climate + safety analysis
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Everything in Basic</strong>
                  <br />
                  <span className="text-sm text-green-100">All climate and planning features</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Crime & Safety Score</strong>
                  <br />
                  <span className="text-sm text-green-100">Suburb-level safety analysis</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Crime Breakdown by Category</strong>
                  <br />
                  <span className="text-sm text-green-100">Assault, burglary, theft, and more</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>10-Year Crime Trends</strong>
                  <br />
                  <span className="text-sm text-green-100">Is the area getting safer or riskier?</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Floor Level Security Analysis</strong>
                  <br />
                  <span className="text-sm text-green-100">Risk adjustments by floor</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Overall Property Score</strong>
                  <br />
                  <span className="text-sm text-green-100">Combined climate + safety rating</span>
                </span>
              </li>
            </ul>

            <button 
              onClick={() => openCheckout('premium')}
              className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Get Premium Report
            </button>

            <p className="text-center text-green-100 text-sm mt-4">
              Most popular choice — only $10 more
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            All reports are point-in-time assessments based on data available at time of purchase.
            <br />
            Data sources: © State of Victoria (Crime Statistics Agency, CFA, DEECA) 2025. Licensed under CC BY 4.0. And more being added monthly.
          </p>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}