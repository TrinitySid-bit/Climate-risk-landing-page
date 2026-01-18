import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8">Last Updated: January 19, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-700 mb-4">
              ClimateScore ("we", "our", "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
            <p className="text-slate-700 mb-4">
              We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Email Address:</strong> When you sign up for early access or create an account</li>
              <li><strong>Payment Information:</strong> If you subscribe to paid plans (processed securely through third-party payment processors)</li>
              <li><strong>Contact Information:</strong> If you contact us for support</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">2.2 Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Property Searches:</strong> Addresses you search for (to provide the Service)</li>
              <li><strong>Usage Data:</strong> Pages viewed, features used, time spent on site</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
              <li><strong>Cookies:</strong> Small data files stored on your device (see Cookie Policy below)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">2.3 Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>We do NOT collect your physical address (unless you voluntarily provide it)</li>
              <li>We do NOT collect financial account numbers (beyond payment processing)</li>
              <li>We do NOT collect sensitive personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Provide the Service:</strong> Generate climate risk scores for searched addresses</li>
              <li><strong>Communication:</strong> Send you updates about the Service, respond to inquiries</li>
              <li><strong>Improvements:</strong> Analyze usage patterns to improve features and user experience</li>
              <li><strong>Account Management:</strong> Manage your subscription and account settings</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
              <li><strong>Security:</strong> Detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Share Your Information</h2>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
              <p className="text-green-900 font-semibold mb-2">✓ We DO NOT Sell Your Data</p>
              <p className="text-slate-700">
                We will never sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <p className="text-slate-700 mb-4">We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.1 Service Providers</h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Hosting Services:</strong> Vercel (website hosting)</li>
              <li><strong>Email Services:</strong> For sending notifications and updates</li>
              <li><strong>Payment Processors:</strong> Stripe or similar (for paid subscriptions)</li>
              <li><strong>Analytics:</strong> To understand how users interact with our Service</li>
            </ul>
            <p className="text-slate-700 mb-4 italic">
              These providers are contractually required to protect your information and only use it for specified purposes.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.2 Legal Requirements</h3>
            <p className="text-slate-700 mb-4">
              We may disclose your information if required by law, court order, or government authority.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.3 Aggregated Data</h3>
            <p className="text-slate-700 mb-4">
              We may share anonymized, aggregated statistics (e.g., "searches in bushfire zones increased 20%") 
              that cannot identify individual users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>HTTPS encryption for data transmission</li>
              <li>Secure hosting infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="text-slate-700 mb-4">
              <strong>Note:</strong> No method of transmission over the internet is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-700 mb-4">Under Australian privacy law, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
              <li><strong>Complaint:</strong> Lodge a complaint about our handling of your information</li>
            </ul>
            <p className="text-slate-700 mb-4">
              To exercise these rights, contact us at:{' '}
              <a href="mailto:privacy@climatescore.com.au" className="text-blue-600 hover:text-blue-700">
                privacy@climatescore.com.au
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="text-slate-700 mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>Provide the Service to you</li>
              <li>Comply with legal obligations (e.g., tax records for 7 years)</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-slate-700 mb-4">
              When you close your account, we will delete or anonymize your personal information within 30 days, 
              except where retention is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-slate-700 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Essential Cookies:</strong> Required for the Service to function (e.g., login sessions)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the Service</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-slate-700 mb-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect Service functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Third-Party Links</h2>
            <p className="text-slate-700 mb-4">
              Our Service may contain links to third-party websites (e.g., government data sources). 
              We are not responsible for the privacy practices of these external sites. 
              Please review their privacy policies before providing personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Children's Privacy</h2>
            <p className="text-slate-700 mb-4">
              Our Service is not intended for children under 18. We do not knowingly collect personal information 
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. International Users</h2>
            <p className="text-slate-700 mb-4">
              ClimateScore is operated in Australia. If you access the Service from outside Australia, 
              your information may be transferred to and processed in Australia, which may have different 
              data protection laws than your country.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with 
              an updated "Last Updated" date. Significant changes will be notified via email.
            </p>
            <p className="text-slate-700 mb-4">
              Continued use of the Service after changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
            <p className="text-slate-700 mb-4">
              For questions, concerns, or requests regarding this Privacy Policy or your personal information:
            </p>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@climatescore.com.au" className="text-blue-600 hover:text-blue-700">
                  privacy@climatescore.com.au
                </a>
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Response Time:</strong> We aim to respond within 30 days
              </p>
              <p className="text-slate-700">
                <strong>Complaints:</strong> If you're not satisfied with our response, you may contact the 
                Office of the Australian Information Commissioner (OAIC) at{' '}
                <a href="https://www.oaic.gov.au" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  www.oaic.gov.au
                </a>
              </p>
            </div>
          </section>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-12">
            <p className="text-slate-700 font-semibold mb-2">Summary:</p>
            <p className="text-slate-700">
              We collect minimal information (email, searches, usage data), use it only to provide the Service, 
              never sell your data, and give you full control over your information. 
              Contact us anytime with privacy questions.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}