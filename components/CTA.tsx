'use client'
import { useState } from 'react'
import CheckoutModal from './CheckoutModal'

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [address, setAddress] = useState('')

  const handleCheckProperty = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Check Before You Nest
        </h2>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Don't buy blind. Get the complete picture of any Victorian property in minutes.
        </p>

        <form onSubmit={handleCheckProperty} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter any Victorian address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1 px-6 py-4 rounded-lg text-lg bg-white text-slate-900 border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-all shadow-lg whitespace-nowrap"
          >
            Get Report
          </button>
        </form>

        <p className="text-slate-400 mt-6 text-sm">
          Join 500+ Victorians who checked before they nested
        </p>

        <div className="mt-16 pt-8 border-t border-slate-700 text-slate-400 text-sm">
          <p>© 2026 NestCheck Pty Ltd. Made in Victoria, Australia.</p>
          <p className="mt-2 text-xs">
            Data: © State of Victoria (CFA, Crime Statistics Agency, DEECA) 2025. Licensed under CC BY 4.0. And more being added monthly.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="mailto:hello@nestcheck.com.au" className="hover:text-white">Contact</a>
          </div>
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