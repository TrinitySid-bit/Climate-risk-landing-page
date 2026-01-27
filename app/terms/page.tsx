import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="w-full px-4 md:px-6 py-4 bg-[#0c1929] border-b border-slate-700/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold hover:opacity-80 transition">
            <span className="text-white">Nest</span>
            <span className="text-[#22c55e]">Check</span>
          </Link>
          <Link href="/" className="text-slate-300 hover:text-white text-sm font-medium">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl font-extrabold text-[#0c1929] mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using NestCheck, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">2. Description of Service</h2>
            <p className="text-slate-600 mb-4">
              NestCheck provides property intelligence reports that aggregate publicly available government data including
              climate risk assessments, planning overlay information, crime statistics, and proximity to amenities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">3. Important Disclaimers</h2>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-4">
              <h3 className="font-bold text-amber-900 mb-3">Critical Information</h3>
              <ul className="text-amber-800 space-y-3">
                <li><strong>Not Professional Advice:</strong> NestCheck provides informational property intelligence only. Our reports are NOT a substitute for professional advice.</li>
                <li><strong>Not Insurance Quotes:</strong> We do not provide insurance quotes, insurance advice, or any information about insurance premiums.</li>
                <li><strong>Not Financial Advice:</strong> Our reports do not constitute financial advice.</li>
                <li><strong>Not Legal Advice:</strong> Information about planning overlays is for informational purposes only.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">4. Data Sources</h2>
            <p className="text-slate-600 mb-4">NestCheck aggregates data from CFA Victoria, Bureau of Meteorology, Crime Statistics Agency Victoria, DEECA/Vicmap, and other government sources. Data is provided under Creative Commons Attribution 4.0 license.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">5. Pricing and Refunds</h2>
            <p className="text-slate-600 mb-4">Basic Report: $29.99 AUD per property. Premium Report: $39.99 AUD per property. Due to the digital nature of our reports, refunds are generally not provided once a report has been generated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">To the maximum extent permitted by law, NestCheck Pty Ltd is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">7. Contact Us</h2>
            <p className="text-slate-600">Email: <a href="mailto:hello@nestcheck.com.au" className="text-[#22c55e] hover:underline">hello@nestcheck.com.au</a></p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="inline-flex items-center gap-2 text-[#22c55e] font-semibold hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      <footer className="py-8 px-4 bg-[#070d14]">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>2026 NestCheck Pty Ltd. Made in Victoria, Australia.</p>
        </div>
      </footer>
    </main>
  )
}