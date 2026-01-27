import Link from 'next/link'
import { Suspense } from 'react'

function SuccessContent() {
  return (
    <main className="min-h-screen bg-[#0c1929] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-[#0c1929] mb-2">Payment Successful!</h1>
        <p className="text-slate-600 mb-6">
          Thank you for your purchase. Your NestCheck property report is being generated and will be sent to your email within a few minutes.
        </p>
        
        <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-[#0c1929] mb-2">What happens next?</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>1. Our system is generating your report</li>
            <li>2. You will receive an email with your PDF report</li>
            <li>3. Check your spam folder if you do not see it</li>
          </ul>
        </div>
        
        <p className="text-sm text-slate-500 mb-6">
          Questions? Contact us at{' '}
          <a href="mailto:hello@nestcheck.com.au" className="text-[#22c55e] hover:underline">
            hello@nestcheck.com.au
          </a>
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-[#22c55e] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#16a34a] transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c1929] flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <SuccessContent />
    </Suspense>
  )
}
