'use client'

import Link from 'next/link'

export default function SampleReportPage() {
  const samplePdfUrl = '/samples/NestCheck_Sample_Premium_Report.pdf'

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="w-full px-4 md:px-6 py-4 bg-[#0c1929] border-b border-slate-700/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold hover:opacity-80 transition">
            <span className="text-white">Nest</span>
            <span className="text-[#22c55e]">Check</span>
          </Link>
          <Link href="/" className="text-slate-300 hover:text-white text-sm font-medium">
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="bg-[#0c1929] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Sample Report</h1>
          <p className="text-slate-300 text-lg mb-6">
            See exactly what you will receive with a NestCheck property intelligence report
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#0c1929]">10 Park Street, South Melbourne VIC 3205</h2>
              <p className="text-slate-500">Sample Premium Report</p>
            </div>
            <div className="flex gap-3">
              <a
                href={samplePdfUrl}
                download="NestCheck_Sample_Report.pdf"
                className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#16a34a] transition"
              >
                Download PDF
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 border-2 border-[#0c1929] text-[#0c1929] px-6 py-3 rounded-lg font-bold hover:bg-[#0c1929] hover:text-white transition"
              >
                Get Your Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-slate-100 px-6 py-4 border-b">
              <span className="text-slate-600 text-sm font-medium">NestCheck_Premium_Report.pdf</span>
            </div>
            <div style={{ aspectRatio: '8.5/11' }} className="bg-slate-200">
              <iframe
                src={samplePdfUrl}
                className="w-full h-full"
                title="Sample NestCheck Report"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-[#070d14]">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>2026 NestCheck Pty Ltd. Made in Victoria, Australia.</p>
        </div>
      </footer>
    </main>
  )
}
