import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8">Last Updated: January 19, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing or using ClimateScore ("the Service"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-700 mb-4">
              ClimateScore provides informational climate risk assessments for properties in Victoria, Australia. 
              Our scores aggregate publicly available data from government sources including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>Country Fire Authority (CFA) bushfire maps</li>
              <li>Bureau of Meteorology (BoM) weather data</li>
              <li>Melbourne Water flood overlays</li>
              <li>VicEmergency historical records</li>
              <li>Council planning overlays</li>
              <li>Insurance Council data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Informational Purposes Only</h2>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-4">
              <p className="text-amber-900 font-semibold mb-2">⚠️ IMPORTANT DISCLAIMER</p>
              <p className="text-slate-700">
                ClimateScore is provided for <strong>informational purposes only</strong> and does not constitute 
                professional advice of any kind. The Service is not a substitute for:
              </p>
              <ul className="list-disc pl-6 mt-2 text-slate-700">
                <li>Professional building inspections</li>
                <li>Engineering assessments</li>
                <li>Financial advice</li>
                <li>Legal advice</li>
                <li>Insurance advice</li>
                <li>Real estate advice</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. No Warranties or Guarantees</h2>
            <p className="text-slate-700 mb-4">
              We make no warranties, express or implied, regarding:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li><strong>Accuracy:</strong> Climate risk data is based on historical patterns and publicly available information. Actual risks may differ.</li>
              <li><strong>Completeness:</strong> Our data may not capture all relevant risk factors for a property.</li>
              <li><strong>Timeliness:</strong> While we strive to update data regularly, there may be delays in reflecting the most current information.</li>
              <li><strong>Suitability:</strong> Scores may not be suitable for your specific circumstances or risk tolerance.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-4">
              <p className="text-slate-700 mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <p className="text-slate-700 mb-4">
                ClimateScore and its operators shall not be liable for any direct, indirect, incidental, special, 
                consequential, or exemplary damages arising from:
              </p>
              <ul className="list-disc pl-6 text-slate-700">
                <li>Use or inability to use the Service</li>
                <li>Reliance on any information provided by the Service</li>
                <li>Property purchase or investment decisions</li>
                <li>Insurance claims or denials</li>
                <li>Property damage from climate events</li>
                <li>Financial losses of any kind</li>
              </ul>
              <p className="text-slate-700 mt-4">
                <strong>Maximum Liability:</strong> In any event, our total liability to you shall not exceed 
                the amount you paid to use the Service (currently $0 for free tier).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. User Responsibilities</h2>
            <p className="text-slate-700 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>Use the Service for lawful purposes only</li>
              <li>Not rely solely on ClimateScore for property decisions</li>
              <li>Conduct independent due diligence including professional inspections</li>
              <li>Consult with qualified professionals (building inspectors, insurance agents, financial advisors, etc.)</li>
              <li>Verify all information independently</li>
              <li>Not redistribute or resell our data without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Sources and Methodology</h2>
            <p className="text-slate-700 mb-4">
              Our risk scores are calculated using publicly available government data. Our methodology includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>Aggregation of multiple data sources</li>
              <li>Weighted algorithms based on historical incident patterns</li>
              <li>Geographic analysis using GIS data</li>
              <li>Regular updates from official sources</li>
            </ul>
            <p className="text-slate-700 mb-4">
              <strong>Limitations:</strong> Our scores cannot predict future events, account for all local factors, 
              or replace on-site professional assessments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Service</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to modify or discontinue the Service at any time without notice. 
              We may also update our methodology, data sources, or scoring algorithms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
            <p className="text-slate-700 mb-4">
              You agree to indemnify and hold harmless ClimateScore, its operators, and affiliates from any claims, 
              damages, or expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
            <p className="text-slate-700 mb-4">
              These Terms are governed by the laws of Victoria, Australia. Any disputes shall be resolved in 
              the courts of Victoria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact</h2>
            <p className="text-slate-700 mb-4">
              For questions about these Terms, contact us at:{' '}
              <a href="mailto:hello@climatescore.com.au" className="text-blue-600 hover:text-blue-700">
                hello@climatescore.com.au
              </a>
            </p>
          </section>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 mt-12">
            <p className="text-slate-700 font-semibold mb-2">Summary for Users:</p>
            <p className="text-slate-700">
              ClimateScore provides informational risk scores based on public data. We make no guarantees about 
              accuracy and you should always get professional advice before making property decisions. 
              Use at your own risk.
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