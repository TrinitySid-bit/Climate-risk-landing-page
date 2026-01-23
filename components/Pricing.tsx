// components/Pricing.tsx - Updated for Basic vs Premium

'use client'
import { Check, X } from 'lucide-react'

export default function Pricing() {
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
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200 hover:border-blue-500 transition-all">
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
                  <strong>ClimateScore Analysis</strong>
                  <br />
                  <span className="text-sm text-slate-600">Bushfire, flood, and storm risk ratings</span>
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
                  <strong>Property Map</strong>
                  <br />
                  <span className="text-sm text-slate-600">Satellite view with risk zones</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>Insurance Impact Assessment</strong>
                  <br />
                  <span className="text-sm text-slate-600">Estimated premium implications</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  <strong>Comprehensive PDF Report</strong>
                  <br />
                  <span className="text-sm text-slate-600">Professional 12-page analysis</span>
                </span>
              </li>
              <li className="flex items-start opacity-50">
                <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500">
                  SafetyScore (Crime Data)
                </span>
              </li>
              <li className="flex items-start opacity-50">
                <X className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500">
                  Overall PropertyScore
                </span>
              </li>
            </ul>

            <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Get Basic Report
            </button>
          </div>

          {/* Premium Report - RECOMMENDED */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-6 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium Report</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">$39.99</span>
                <span className="text-blue-100 ml-2">per property</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-blue-50">
                Complete property intelligence including climate + safety analysis
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Everything in Basic</strong>
                  <br />
                  <span className="text-sm text-blue-100">All climate risk features included</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>SafetyScore Analysis</strong>
                  <br />
                  <span className="text-sm text-blue-100">Crime statistics by Local Government Area</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Crime Breakdown by Category</strong>
                  <br />
                  <span className="text-sm text-blue-100">Assault, burglary, theft, and more</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Overall PropertyScore</strong>
                  <br />
                  <span className="text-sm text-blue-100">Weighted average of climate + safety</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>5-Year Crime Trends</strong>
                  <br />
                  <span className="text-sm text-blue-100">Is the area getting safer or riskier?</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  <strong>Extended PDF Report</strong>
                  <br />
                  <span className="text-sm text-blue-100">Professional 15-page comprehensive analysis</span>
                </span>
              </li>
            </ul>

            <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Get Premium Report
            </button>

            <p className="text-center text-blue-100 text-sm mt-4">
              Save $10 compared to buying separately
            </p>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Detailed Feature Comparison</h3>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-900 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-slate-700">ClimateScore (Bushfire, Flood, Storm)</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700">20 Years Historical Climate Data</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700">Severity-Weighted Analysis</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700">Property Satellite Map</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700">Insurance Impact Assessment</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700 font-semibold">SafetyScore (Crime Data)</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 font-semibold">Crime Statistics by Category</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700 font-semibold">5-Year Crime Trends</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 font-semibold">Overall PropertyScore</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-300 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700">PDF Report Pages</td>
                  <td className="px-6 py-4 text-center text-slate-600">12 pages</td>
                  <td className="px-6 py-4 text-center text-slate-600">15 pages</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-slate-900 font-bold">Price</td>
                  <td className="px-6 py-4 text-center text-slate-900 font-bold">$29.99</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">$39.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            All reports are point-in-time assessments based on data available at time of purchase.
            <br />
            Data sources: © State of Victoria (Crime Statistics Agency, CFA, DEECA) 2025. Licensed under CC BY 4.0.
          </p>
        </div>
      </div>
    </section>
  )
}
