import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full px-4 md:px-6 py-4 bg-[#0c1929] border-b border-slate-700/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold hover:opacity-80 transition">
            <span className="text-white">Nest</span>
            <span className="text-[#22c55e]">Check</span>
          </Link>
          <Link href="/" className="text-slate-300 hover:text-white text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl font-extrabold text-[#0c1929] mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-4">
              NestCheck Pty Ltd ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our property intelligence service.
            </p>
            <p className="text-slate-600">
              By using NestCheck, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">2. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-[#0c1929] mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Email Address:</strong> Required to deliver your report</li>
              <li><strong>Property Address:</strong> The address you request a report for</li>
              <li><strong>Floor Level:</strong> Used to calculate risk scores</li>
              <li><strong>Payment Information:</strong> Processed securely by Stripe (we do not store card details)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#0c1929] mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent, actions taken</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
              <li><strong>IP Address:</strong> For security and analytics purposes</li>
              <li><strong>Cookies:</strong> For website functionality and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Generate and deliver your property report</li>
              <li>Process your payment</li>
              <li>Send you your report via email</li>
              <li>Provide customer support</li>
              <li>Improve our service and user experience</li>
              <li>Analyze usage patterns and trends</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">4. Information Sharing</h2>
            <p className="text-slate-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Payment Processors:</strong> Stripe processes all payments securely</li>
              <li><strong>Email Service Providers:</strong> To deliver your reports (SendGrid)</li>
              <li><strong>Analytics Providers:</strong> To understand how our service is used</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-slate-600">
              We do NOT sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">5. Data Retention</h2>
            <p className="text-slate-600 mb-4">
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Report Data:</strong> Stored for 12 months to allow re-download</li>
              <li><strong>Transaction Records:</strong> Retained for 7 years for tax/legal purposes</li>
              <li><strong>Email Addresses:</strong> Retained until you request deletion</li>
              <li><strong>Analytics Data:</strong> Aggregated and anonymized after 26 months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">6. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Secure cloud hosting with encryption at rest</li>
              <li>Payment processing via PCI-DSS compliant Stripe</li>
              <li>Regular security audits and updates</li>
              <li>Limited employee access to personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">7. Cookies</h2>
            <p className="text-slate-600 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Keep you logged in during your session</li>
              <li>Remember your preferences</li>
              <li>Analyze website traffic and usage</li>
              <li>Improve our service</li>
            </ul>
            <p className="text-slate-600">
              You can control cookies through your browser settings, but some features may not work properly if you disable them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">8. Your Rights</h2>
            <p className="text-slate-600 mb-4">
              Under Australian Privacy Law and GDPR (where applicable), you have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-slate-600">
              To exercise these rights, please contact us at <a href="mailto:privacy@nestcheck.com.au" className="text-[#22c55e] hover:underline">privacy@nestcheck.com.au</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">9. Third-Party Links</h2>
            <p className="text-slate-600">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. 
              We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">10. Children's Privacy</h2>
            <p className="text-slate-600">
              NestCheck is not intended for use by children under 18. We do not knowingly collect personal information from children. 
              If we become aware that we have collected data from a child, we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">11. International Data Transfers</h2>
            <p className="text-slate-600">
              Your information may be transferred to and processed in countries other than Australia, including the United States 
              (where some of our service providers are located). We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">12. Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy 
              on this page and updating the "Last updated" date. Your continued use of NestCheck after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">13. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li><strong>Privacy Officer:</strong> <a href="mailto:privacy@nestcheck.com.au" className="text-[#22c55e] hover:underline">privacy@nestcheck.com.au</a></li>
              <li><strong>General Inquiries:</strong> <a href="mailto:hello@nestcheck.com.au" className="text-[#22c55e] hover:underline">hello@nestcheck.com.au</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0c1929] mb-4">14. Complaints</h2>
            <p className="text-slate-600">
              If you believe we have breached your privacy rights, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) 
              at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">www.oaic.gov.au</a>.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="inline-flex items-center gap-2 text-[#22c55e] font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#070d14]">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>© 2026 NestCheck Pty Ltd. Made in Victoria, Australia.</p>
        </div>
      </footer>
    </main>
  )
}
