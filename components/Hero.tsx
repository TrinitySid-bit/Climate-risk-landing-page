'use client'
import { useState } from 'react'
import { MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    
    if (response.ok) {
      setSubmitted(true)
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50 opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheckIcon className="h-5 w-5" />
            <span>Victoria's bushfire season has started - know your risk</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Know Your Property's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-600 to-green-600">
              Climate Risk
            </span>
            Before You Buy
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Bushfire, flood, and storm risk ratings for every Victorian address.
            <span className="block mt-2 text-lg text-slate-500">
              Make informed decisions with Australia's first climate risk scoring platform.
            </span>
          </p>

          <div className="flex items-center justify-center gap-2 mb-10 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 border-2 border-white" />
              ))}
            </div>
            <span className="font-medium">Join 500+ Victorians making safer property decisions</span>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-lg"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Early Access
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                Get your first property report free when we launch • No credit card required
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <p className="text-green-800 font-semibold text-lg">
                ✓ You're on the waitlist!
              </p>
              <p className="text-green-700 mt-2">
                We'll email you when we launch (within 2 weeks) with your free report.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-slate-500 mb-2">Sample Property</div>
                <div className="text-lg font-medium text-slate-800 mb-6">
                  123 Example Street, Eltham VIC 3095
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white">
                  <div className="text-7xl font-bold mb-2">42</div>
                  <div className="text-2xl font-semibold">Elevated Risk</div>
                  <div className="text-sm opacity-90 mt-2">ClimateScore™</div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Est. Insurance Premium:</span>
                    <span className="font-bold text-slate-900">$3,200/year</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Last Incident:</span>
                    <span className="font-medium text-orange-600">Bushfire (2020)</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-700 mb-4">Risk Breakdown</div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">🔥 Bushfire Risk</span>
                      <span className="font-bold text-red-600">32/100</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{width: '32%'}} />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">High risk zone, vegetation within 50m</div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">🌊 Flood Risk</span>
                      <span className="font-bold text-blue-600">68/100</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{width: '68%'}} />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Low risk, elevated area</div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">⛈️ Storm Risk</span>
                      <span className="font-bold text-yellow-600">55/100</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{width: '55%'}} />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Moderate exposure</div>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                  View Full Report →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}