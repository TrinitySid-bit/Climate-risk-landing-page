'use client'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Don't Buy Blind
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join the waitlist and get your first 3 property reports free when we launch.
          Expected launch: February 2026.
        </p>

        <form className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg"
          >
            Join Waitlist
          </button>
        </form>

        <p className="text-slate-400 mt-6 text-sm">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>

        <div className="mt-16 pt-8 border-t border-slate-700 text-slate-400 text-sm">
          <p>© 2026 ClimateScore. Made in Victoria, Australia.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:hello@climatescore.com.au" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}