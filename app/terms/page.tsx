'use client'
import { useState } from 'react'
import CheckoutModal from '@/components/CheckoutModal'
import Link from 'next/link'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [address, setAddress] = useState('')

  const openCheckout = (type: 'basic' | 'premium', addr?: string) => {
    if (addr) setAddress(addr)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      
      {/* Disclaimer */}
      <div className="bg-amber-50 border-b-2 border-amber-200 px-4 py-3 text-center text-sm text-amber-900">
        ⚠️ <strong>Disclaimer:</strong> NestCheck provides informational property intelligence only and is not a substitute for professional advice. 
        We do not provide insurance quotes, financial advice, or legal advice.{' '}
        <Link href="/terms" className="underline hover:text-amber-700">Read full terms</Link>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white border-b-2 border-slate-200 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold">
            <span className="text-[#1e3a5f]">Nest</span>
            <span className="text-[#166534]">Check</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 font-semibold hover:text-[#1e3a5f]">Features</a>
            <a href="#pricing" className="text-slate-600 font-semibold hover:text-[#1e3a5f]">Pricing</a>
            <a href="#faq" className="text-slate-600 font-semibold hover:text-[#1e3a5f]">FAQ</a>
            <button 
              onClick={() => openCheckout('premium')}
              className="bg-[#166534] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
            >
              Get Report
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#1e3a5f] pt-16 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#166534] text-white px-5 py-2 rounded-full text-sm font-bold mb-8">
            Now with Planning Overlays & 10-Year Crime Data
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Check Before You </span>
            <span className="text-[#4ade80]">Nest</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Climate risk, planning overlays, crime statistics, schools, hospitals, and transport — 
            all in one comprehensive property intelligence report.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); openCheckout('premium', address); }} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter any Victorian address..."
              className="flex-1 px-6 py-4 rounded-lg text-lg border-none outline-none"
            />
            <button type="submit" className="bg-[#166534] text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition whitespace-nowrap">
              Get Report
            </button>
          </form>
          
          <p className="text-slate-400 text-sm mb-12">
            Instant results • Professional PDF report • Delivered to your email
          </p>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex">
              <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-11 h-11 rounded-full border-[3px] border-[#1e3a5f]" />
              <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-11 h-11 rounded-full border-[3px] border-[#1e3a5f] -ml-3" />
              <img src="https://i.pravatar.cc/100?img=9" alt="" className="w-11 h-11 rounded-full border-[3px] border-[#1e3a5f] -ml-3" />
              <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-11 h-11 rounded-full border-[3px] border-[#1e3a5f] -ml-3" />
              <img src="https://i.pravatar.cc/100?img=16" alt="" className="w-11 h-11 rounded-full border-[3px] border-[#1e3a5f] -ml-3" />
              <div className="w-11 h-11 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold -ml-3 border-[3px] border-[#1e3a5f]">
                500+
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Join <strong className="text-white">500+ Victorians</strong> making smarter property decisions
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-slate-100 border-b-2 border-slate-200 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-4 text-sm">
          <span className="text-slate-500">Trusted data from:</span>
          <strong className="text-[#1e3a5f]">CFA Victoria</strong>
          <span className="text-slate-400">•</span>
          <strong className="text-[#1e3a5f]">Bureau of Meteorology</strong>
          <span className="text-slate-400">•</span>
          <strong className="text-[#1e3a5f]">Crime Statistics Agency</strong>
          <span className="text-slate-400">•</span>
          <strong className="text-[#1e3a5f]">Vicmap Planning</strong>
          <span className="text-slate-400">•</span>
          <em className="text-slate-500">and more being added monthly</em>
        </div>
      </div>

      {/* Why Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1e3a5f] mb-4">Why You Need NestCheck</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Insurers, banks, and property professionals use this data to assess risk every day. Now you can too.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">$2-10k+</div>
              <div className="text-slate-300 text-sm">Annual insurance variance based on location risk</div>
            </div>
            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">15-30%</div>
              <div className="text-slate-300 text-sm">Property value discount in high-risk zones</div>
            </div>
            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">1 in 4</div>
              <div className="text-slate-300 text-sm">Victorian properties affected by planning overlays</div>
            </div>
            <div className="bg-[#166534] rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">5 minutes</div>
              <div className="text-slate-300 text-sm">To get insights that could save you thousands</div>
            </div>
          </div>

          {/* Problem/Solution Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-[3px] border-red-200 rounded-2xl p-7">
              <div className="text-red-700 font-bold mb-3">Without NestCheck</div>
              <p className="text-slate-600">"We bought our dream home, then discovered it was in a bushfire zone. Insurance quoted us $8,000/year — triple what we budgeted."</p>
            </div>
            <div className="bg-red-50 border-[3px] border-red-200 rounded-2xl p-7">
              <div className="text-red-700 font-bold mb-3">Without NestCheck</div>
              <p className="text-slate-600">"The heritage overlay means we can't renovate the kitchen without council approval. No one mentioned this before we signed."</p>
            </div>
            <div className="bg-green-50 border-[3px] border-green-200 rounded-2xl p-7">
              <div className="text-[#166534] font-bold mb-3">With NestCheck</div>
              <p className="text-slate-600">"We checked three properties before buying. NestCheck showed us which one had the lowest risk and no planning restrictions. Best $40 we ever spent."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1e3a5f] mb-4">Who Is NestCheck For?</h2>
            <p className="text-xl text-slate-500">Property intelligence that's valuable at every stage of your property journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏠', title: 'Property Buyers', desc: 'Make informed decisions before you commit. Know the risks, overlays, and amenities before signing anything.' },
              { icon: '🔑', title: 'Current Homeowners', desc: "Understand your property's risk profile. Check if new overlays apply, monitor changes, and stay informed about your biggest asset." },
              { icon: '📊', title: 'Property Investors', desc: 'Assess risk across your portfolio. Compare properties, identify exposure, and make data-driven investment decisions.' },
              { icon: '🏢', title: 'Real Estate Professionals', desc: 'Provide clients with comprehensive property intel. Stand out with data-backed insights on every listing.' },
              { icon: '📋', title: 'Portfolio Managers', desc: 'Monitor climate and safety risk across multiple properties. Ideal for fund managers, REITs, and institutional investors.' },
              { icon: '🛋️', title: 'Renters', desc: "Know what you're moving into. Check flood zones, bushfire risk, crime stats, and nearby amenities before signing a lease." },
            ].map((item) => (
              <div key={item.title} className="bg-white border-2 border-slate-200 rounded-2xl p-8 text-center hover:border-[#166534] hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1e3a5f] mb-4">What's in Your Report?</h2>
            <p className="text-xl text-slate-500">Comprehensive property intelligence from trusted government sources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Climate Risk */}
            <div className="bg-white border-[3px] border-slate-200 rounded-2xl p-7 hover:border-[#1e3a5f] transition">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-5">🔥</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Climate Risk Analysis</h3>
              <p className="text-slate-500 mb-4">Bushfire, flood, and storm risk scores based on 20+ years of government data.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> Bushfire Prone Area status</li>
                <li><span className="text-[#166534] font-bold">✓</span> Flood zone proximity</li>
                <li><span className="text-[#166534] font-bold">✓</span> Historical storm events</li>
                <li><span className="text-[#166534] font-bold">✓</span> Floor level risk adjustments</li>
              </ul>
            </div>

            {/* Planning Overlays */}
            <div className="bg-white border-[3px] border-slate-200 rounded-2xl p-7 hover:border-[#1e3a5f] transition">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-5">📋</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Planning Overlays</h3>
              <p className="text-slate-500 mb-4">Know what restrictions apply before you buy — heritage, environmental, development controls.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> Bushfire Management Overlay</li>
                <li><span className="text-[#166534] font-bold">✓</span> Flood & Erosion Overlays</li>
                <li><span className="text-[#166534] font-bold">✓</span> Heritage Overlay</li>
                <li><span className="text-[#166534] font-bold">✓</span> 25+ overlay types checked</li>
              </ul>
            </div>

            {/* Crime & Safety - PREMIUM */}
            <div className="bg-white border-[3px] border-[#166534] rounded-2xl p-7 relative">
              <div className="absolute -top-3 right-5 bg-[#166534] text-white text-xs font-bold px-4 py-1 rounded-full">PREMIUM</div>
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-5">🛡️</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Crime & Safety</h3>
              <p className="text-slate-500 mb-4">Understand the safety profile with <strong>10 years</strong> of real crime statistics.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> Safety score by suburb</li>
                <li><span className="text-[#166534] font-bold">✓</span> Crime breakdown by category</li>
                <li><span className="text-[#166534] font-bold">✓</span> <strong>10-year trend analysis</strong></li>
                <li><span className="text-[#166534] font-bold">✓</span> Floor level security adjustment</li>
              </ul>
            </div>

            {/* Schools */}
            <div className="bg-white border-[3px] border-slate-200 rounded-2xl p-7 hover:border-[#1e3a5f] transition">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-5">🎓</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Schools</h3>
              <p className="text-slate-500 mb-4">Find nearby primary and secondary schools with distances from the property.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> All nearby primary schools</li>
                <li><span className="text-[#166534] font-bold">✓</span> All nearby secondary schools</li>
                <li><span className="text-[#166534] font-bold">✓</span> Distance from property</li>
              </ul>
            </div>

            {/* Hospitals */}
            <div className="bg-white border-[3px] border-slate-200 rounded-2xl p-7 hover:border-[#1e3a5f] transition">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-2xl mb-5">🏥</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Hospitals</h3>
              <p className="text-slate-500 mb-4">Know how close you are to emergency and medical services.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> All nearby hospitals listed</li>
                <li><span className="text-[#166534] font-bold">✓</span> Distance from property</li>
                <li><span className="text-[#166534] font-bold">✓</span> Facility types</li>
              </ul>
            </div>

            {/* Public Transport */}
            <div className="bg-white border-[3px] border-slate-200 rounded-2xl p-7 hover:border-[#1e3a5f] transition">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-5">🚆</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Public Transport</h3>
              <p className="text-slate-500 mb-4">Train stations, tram stops, and bus routes near your property.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> All nearby train stations</li>
                <li><span className="text-[#166534] font-bold">✓</span> All nearby tram stops</li>
                <li><span className="text-[#166534] font-bold">✓</span> All nearby bus stops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Score Legend */}
      <section className="py-16 px-6 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">How Scores Work</h2>
          <p className="text-slate-300 text-lg mb-8">All scores are out of 100. <strong className="text-white">Higher is always better.</strong></p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#166534] text-white px-6 py-3 rounded-lg font-bold">80-100: LOW Risk</div>
            <div className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold">60-79: MEDIUM Risk</div>
            <div className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold">40-59: HIGH Risk</div>
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold">0-39: EXTREME Risk</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1e3a5f] mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border-[3px] border-slate-200 rounded-2xl p-7">
              <div className="text-yellow-500 text-lg mb-4 tracking-wider">★★★★★</div>
              <blockquote className="text-slate-600 mb-5">"We almost bought in Kinglake until we saw the bushfire risk score. This tool literally saved us from a huge mistake and potentially tens of thousands in insurance."</blockquote>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=25" alt="Sarah M." className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-[#1e3a5f]">Sarah M.</div>
                  <div className="text-sm text-slate-500">First Home Buyer, Melbourne</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-[3px] border-slate-200 rounded-2xl p-7">
              <div className="text-yellow-500 text-lg mb-4 tracking-wider">★★★★★</div>
              <blockquote className="text-slate-600 mb-5">"The planning overlay check was a game-changer. Found out the property had a heritage overlay which would've made our renovation plans impossible."</blockquote>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=33" alt="James T." className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-[#1e3a5f]">James T.</div>
                  <div className="text-sm text-slate-500">Property Investor, Geelong</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-[3px] border-slate-200 rounded-2xl p-7">
              <div className="text-yellow-500 text-lg mb-4 tracking-wider">★★★★★</div>
              <blockquote className="text-slate-600 mb-5">"As a buyer's agent, I now run NestCheck on every property before showing clients. The crime trends and school proximity data is invaluable."</blockquote>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=47" alt="Michelle L." className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-[#1e3a5f]">Michelle L.</div>
                  <div className="text-sm text-slate-500">Buyer's Agent, Brighton</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-slate-50" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1e3a5f] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-500">One property, one price. No subscriptions required.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic */}
            <div className="bg-white border-[3px] border-slate-200 rounded-3xl p-9">
              <div className="text-slate-500 font-bold text-sm uppercase tracking-wide mb-2">Basic Report</div>
              <div className="text-5xl font-extrabold text-[#1e3a5f] mb-1">$29.99 <span className="text-lg font-normal text-slate-400">/ property</span></div>
              <p className="text-slate-500 mb-6">Climate risk and property analysis</p>
              
              <ul className="space-y-3 mb-8 text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> Climate Risk Scores (Bushfire, Flood, Storm)</li>
                <li><span className="text-[#166534] font-bold">✓</span> 25+ Planning Overlays Checked</li>
                <li><span className="text-[#166534] font-bold">✓</span> Nearby Schools, Hospitals, Transport</li>
                <li><span className="text-[#166534] font-bold">✓</span> Air Quality Data</li>
                <li><span className="text-[#166534] font-bold">✓</span> Professional PDF Report</li>
                <li><span className="text-slate-400">✗</span> <span className="text-slate-400">Crime & Safety Analysis</span></li>
                <li><span className="text-slate-400">✗</span> <span className="text-slate-400">10-Year Crime Trends</span></li>
              </ul>
              
              <button 
                onClick={() => openCheckout('basic')}
                className="w-full py-4 border-[3px] border-[#1e3a5f] text-[#1e3a5f] rounded-lg font-bold hover:bg-[#1e3a5f] hover:text-white transition"
              >
                Get Basic Report
              </button>
            </div>

            {/* Premium */}
            <div className="bg-white border-[3px] border-[#166534] rounded-3xl p-9 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#166534] text-white text-sm font-bold px-5 py-1 rounded-full">RECOMMENDED</div>
              <div className="text-[#166534] font-bold text-sm uppercase tracking-wide mb-2">Premium Report</div>
              <div className="text-5xl font-extrabold text-[#1e3a5f] mb-1">$39.99 <span className="text-lg font-normal text-slate-400">/ property</span></div>
              <p className="text-slate-500 mb-6">Complete property intelligence — know everything</p>
              
              <ul className="space-y-3 mb-6 text-slate-600">
                <li><span className="text-[#166534] font-bold">✓</span> <strong>Everything in Basic</strong></li>
                <li><span className="text-[#166534] font-bold">✓</span> <strong>Crime & Safety Score</strong> by suburb</li>
                <li><span className="text-[#166534] font-bold">✓</span> <strong>Crime Breakdown</strong> by category</li>
                <li><span className="text-[#166534] font-bold">✓</span> <strong>10-Year Crime Trends</strong></li>
                <li><span className="text-[#166534] font-bold">✓</span> <strong>Floor Level Security Analysis</strong></li>
                <li><span className="text-[#166534] font-bold">✓</span> <strong>Overall Property Score</strong></li>
              </ul>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
                <strong className="block mb-1">Why Premium?</strong>
                Crime data reveals what photos can't. Is burglary increasing? Are assaults common? Make sure your family is safe before you commit.
              </div>
              
              <button 
                onClick={() => openCheckout('premium')}
                className="w-full py-4 bg-[#166534] text-white rounded-lg font-bold hover:bg-green-700 transition"
              >
                Get Premium Report
              </button>
              <p className="text-center text-slate-500 text-sm mt-4">Most popular choice — only $10 more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Need Unlimited Reports or API Access?</h2>
          <p className="text-slate-400 text-lg mb-10">We work with property professionals who need volume access to NestCheck data.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-bold text-white mb-1">Real Estate Agencies</h4>
              <p className="text-slate-400 text-sm">Provide buyers with property intelligence reports</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🔑</div>
              <h4 className="font-bold text-white mb-1">Buyer's Agents</h4>
              <p className="text-slate-400 text-sm">Due diligence on every property you assess</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-bold text-white mb-1">Mortgage Brokers</h4>
              <p className="text-slate-400 text-sm">Risk assessment for lending decisions</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-bold text-white mb-1">Property Portals</h4>
              <p className="text-slate-400 text-sm">Integrate NestCheck via API into your platform</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-300 text-sm">
            <span><span className="text-[#4ade80] font-bold">✓</span> Unlimited reports</span>
            <span><span className="text-[#4ade80] font-bold">✓</span> API access</span>
            <span><span className="text-[#4ade80] font-bold">✓</span> White-label options</span>
            <span><span className="text-[#4ade80] font-bold">✓</span> Priority support</span>
            <span><span className="text-[#4ade80] font-bold">✓</span> Custom integrations</span>
          </div>

          <a href="mailto:commercial@nestcheck.com.au" className="inline-block bg-white text-[#1e3a5f] px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 px-6 bg-[#1e3a5f] text-center">
        <div className="inline-block bg-yellow-400 text-slate-900 px-5 py-2 rounded-full text-sm font-bold mb-4">
          COMING SOON
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Australia-Wide Coverage & 24/7 Monitoring</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          We're expanding beyond Victoria. NSW, QLD, and other states coming in 2026. Plus automated alerts when risk factors change for your property.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#1e3a5f] text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="border-2 border-slate-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-[#1e3a5f] hover:bg-slate-50 list-none flex justify-between items-center">
                How do the scores work?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600">All scores are out of 100, and higher is always better. A score of 80-100 means low risk, 60-79 is medium risk, 40-59 is high risk, and below 40 is extreme risk. This applies to climate scores, safety scores, and the overall property score.</div>
            </details>

            <details className="border-2 border-slate-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-[#1e3a5f] hover:bg-slate-50 list-none flex justify-between items-center">
                What are planning overlays and why do they matter?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600">Planning overlays are government controls that apply to specific properties. They can restrict what you can build, require permits for renovations, or indicate risks like bushfire or flood. For example, a Heritage Overlay means you need council approval for most external changes. We check over 25 different overlay types so you know exactly what applies before you buy.</div>
            </details>

            <details className="border-2 border-slate-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-[#1e3a5f] hover:bg-slate-50 list-none flex justify-between items-center">
                How much crime data do you have?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600">We have 10 years of crime statistics from the Crime Statistics Agency Victoria. The Premium report shows year-by-year trends so you can see if an area is getting safer or more dangerous over time. We also break down crime by category and adjust scores based on floor level.</div>
            </details>

            <details className="border-2 border-slate-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-[#1e3a5f] hover:bg-slate-50 list-none flex justify-between items-center">
                Why should I get Premium instead of Basic?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600">The Premium report adds crime and safety analysis — something photos and inspections can't tell you. You'll see the actual crime statistics for the suburb, how they've changed over 10 years, and what types of crime are most common. For families especially, this is invaluable. It's only $10 more.</div>
            </details>

            <details className="border-2 border-slate-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-[#1e3a5f] hover:bg-slate-50 list-none flex justify-between items-center">
                Does this replace a building inspection?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600">No. NestCheck provides risk and intelligence data about the location. It's not a substitute for professional building inspections, legal advice, or due diligence. We focus on location-based risks that you can't see from a physical inspection.</div>
            </details>

            <details className="border-2 border-slate-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-[#1e3a5f] hover:bg-slate-50 list-none flex justify-between items-center">
                How quickly will I get my report?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600">Reports are generated instantly after payment and delivered to your email within minutes as a professional PDF.</div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Check Before You Nest</h2>
          <p className="text-xl text-white mb-10">Don't buy blind. Get the complete picture of any Victorian property in minutes.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); openCheckout('premium', address); }} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter any Victorian address..."
              className="flex-1 px-6 py-4 rounded-lg text-lg"
            />
            <button type="submit" className="bg-[#166534] text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition whitespace-nowrap">
              Get Report
            </button>
          </form>
          
          <p className="text-slate-400 text-sm">Join 500+ Victorians who checked before they nested</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-slate-700">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="text-2xl font-extrabold">
                <span className="text-white">Nest</span>
                <span className="text-[#4ade80]">Check</span>
              </div>
              <span className="text-slate-300">| Check before you nest</span>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-slate-300 hover:text-white font-medium">Privacy</Link>
              <Link href="/terms" className="text-slate-300 hover:text-white font-medium">Terms</Link>
              <a href="mailto:hello@nestcheck.com.au" className="text-slate-300 hover:text-white font-medium">Contact</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-slate-300 mb-2">© 2026 NestCheck Pty Ltd. Made in Victoria, Australia.</p>
            <p className="text-slate-400 text-sm">Data: © State of Victoria (CFA, Crime Statistics Agency, DEECA) 2025. Licensed under CC BY 4.0. And more being added monthly.</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialAddress={address}
      />
    </main>
  )
}
