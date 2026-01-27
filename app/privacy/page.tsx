import Link from 'next/link'

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-extrabold text-[#0c1929] mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-4">
              NestCheck Pty Ltd is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our property intelligence service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-4">We collect:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Email Address:</strong> Required to deliver your report</li>
              <li><strong>Property Address:</strong> The address you request a report for</li>
              <li><strong>Floor Level:</strong> Used to calculate risk scores</li>
              <li><strong>Payment Information:</strong> Processed securely by Stripe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information to generate and deliver your property report, process payments, provide customer support, and improve our service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">4. Information Sharing</h2>
            <p className="text-slate-600 mb-4">We share information with Stripe for payment processing and SendGrid for email delivery. We do NOT sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">5. Data Security</h2>
            <p className="text-slate-600 mb-4">We implement SSL/TLS encryption, secure cloud hosting, and PCI-DSS compliant payment processing via Stripe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">6. Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:privacy@nestcheck.com.au" className="text-[#22c55e] hover:underline">privacy@nestcheck.com.au</a></p>
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