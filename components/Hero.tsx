'use client'
import { useState } from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import CheckoutModal from './CheckoutModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [address, setAddress] = useState('')

  const handleCheckProperty = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheckIcon className="h-5 w-5" />
            <span>Now with Planning Overlays & 10-Year Crime Data</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Know Everything About</span>
            <span className="block text-green-400">Your Property</span>
            <span className="text-white">Before You Buy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Climate risk, planning overlays, crime statistics, schools, hospitals, and transport —
            <span className="block mt-2 text-lg text-slate-400">
              all in one comprehensive property intelligence report.
            </span>
          </p>

          <div className="flex items-center justify-center gap-3 mb-10 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-slate-800" />
              ))}
              <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold">
                500+
              </div>
            </div>
            <span className="font-medium text-slate-300">Join <strong className="text-white">500+ Victorians</strong> making smarter property decisions</span>
          </div>

          <form onSubmit={handleCheckProperty} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="Enter any Victorian address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg border-2 border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:border-green-500 focus:outline-none text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-all shadow-lg hover:shadow-xl"
              >
                Check Property
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              Instant results • Professional PDF report • Delivered to your email
            </p>
          </form>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4 text-sm text-slate-400">
          <span>Trusted data from:</span>
          <span className="text-white font-medium">CFA Victoria</span>
          <span>•</span>
          <span className="text-white font-medium">Bureau of Meteorology</span>
          <span>•</span>
          <span className="text-white font-medium">Crime Statistics Agency</span>
          <span>•</span>
          <span className="text-white font-medium">Vicmap Planning</span>
          <span>•</span>
          <span className="italic">and more being added monthly</span>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialAddress={address}
      />
    </div>
  )
}