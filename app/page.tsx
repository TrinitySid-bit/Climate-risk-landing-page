'use client'
import { useState, useEffect, useRef } from 'react'
import CheckoutModal from '@/components/CheckoutModal'
import Link from 'next/link'

const FLOOR_OPTIONS = [
  { value: '', label: '-- Select floor level --' },
  { value: 'house', label: 'House / Townhouse' },
  { value: 'ground', label: 'Ground Floor (Apartment)' },
  { value: 'low', label: 'Level 1-3' },
  { value: 'mid', label: 'Level 4-10' },
  { value: 'high', label: 'Level 11-20' },
  { value: 'very_high', label: 'Level 21+' },
];

declare global {
  interface Window {
    google: any;
    initGooglePlacesFree: () => void;
    googleMapsLoaded: boolean;
  }
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [address, setAddress] = useState('')
  const [showFreeForm, setShowFreeForm] = useState(false)
  const [freeEmail, setFreeEmail] = useState('')
  const [freeAddress, setFreeAddress] = useState('')
  const [freeFloor, setFreeFloor] = useState('')
  const [freeLoading, setFreeLoading] = useState(false)
  const [freeSuccess, setFreeSuccess] = useState(false)
  const [freeError, setFreeError] = useState('')
  const [googleLoaded, setGoogleLoaded] = useState(false)
  
  const freeAddressInputRef = useRef<HTMLInputElement>(null)
  const freeAutocompleteRef = useRef<any>(null)

  const openCheckout = (addr?: string) => {
    if (addr) setAddress(addr)
    setIsModalOpen(true)
  }

  useEffect(() => {
    if (!showFreeForm) {
      if (freeAutocompleteRef.current && window.google) {
        window.google.maps.event.clearInstanceListeners(freeAutocompleteRef.current);
      }
      freeAutocompleteRef.current = null;
      return;
    }

    const initAutocomplete = () => {
      if (!window.google || !window.google.maps || !window.google.maps.places) return;
      if (freeAutocompleteRef.current) return;
      if (!freeAddressInputRef.current) return;
      
      try {
        freeAutocompleteRef.current = new window.google.maps.places.Autocomplete(freeAddressInputRef.current, {
          componentRestrictions: { country: 'au' },
          fields: ['formatted_address', 'address_components'],
          types: ['address'],
        });

        freeAutocompleteRef.current.addListener('place_changed', () => {
          const place = freeAutocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            setFreeAddress(place.formatted_address);
            const state = place.address_components?.find(
              (c: any) => c.types.includes('administrative_area_level_1')
            );
            if (state?.short_name !== 'VIC') {
              setFreeError('Please enter a Victorian address. We currently only cover Victoria.');
            } else {
              setFreeError('');
            }
          }
        });
        setGoogleLoaded(true);
      } catch (err) {
        console.error('Error initializing autocomplete:', err);
      }
    };

    if (window.google && window.google.maps && window.google.maps.places) {
      setTimeout(initAutocomplete, 100);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error('Google Maps API key not found');
      return;
    }

    if (document.getElementById('google-maps-script')) {
      const checkLoaded = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(checkLoaded);
          setTimeout(initAutocomplete, 100);
        }
      }, 100);
      setTimeout(() => clearInterval(checkLoaded), 10000);
      return;
    }

    window.initGooglePlacesFree = () => {
      window.googleMapsLoaded = true;
      setTimeout(initAutocomplete, 100);
    };
    
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGooglePlacesFree`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [showFreeForm]);

  const handleFreeReport = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!freeAddress || !freeEmail || !freeFloor) return
    
    setFreeLoading(true)
    setFreeError('')
    try {
      const response = await fetch('https://climatescore-api-production.up.railway.app/api/reports/free-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: freeAddress, email: freeEmail, floor: freeFloor })
      })
      
      if (response.ok) {
        setFreeSuccess(true)
        setFreeAddress('')
        setFreeEmail('')
        setFreeFloor('')
      } else {
        setFreeError('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setFreeError('Something went wrong. Please try again.')
    } finally {
      setFreeLoading(false)
    }
  }

  const canSubmitFree = freeAddress.length >= 10 && freeEmail.includes('@') && freeFloor !== '' && !freeError

  return (
    <main className="min-h-screen" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* FREE REPORT BANNER */}
      <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-4 py-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white font-bold text-lg md:text-xl mb-1">🏠 ATTENTION Victorians: Get a FREE Property Report!</p>
          <p className="text-green-100 text-sm mb-2">Planning zones, schools, hospitals, transport, parks, trails, EV chargers, childcare & more - completely free. No credit card required.</p>
          <p className="text-yellow-200 text-xs font-semibold mb-3">🆕 NOW WITH 1,000,000+ DATA POINTS: Planning zones, electorates, water & fire authorities!</p>
          <button onClick={() => setShowFreeForm(true)} className="bg-white text-[#16a34a] px-6 py-2 rounded-lg font-bold hover:bg-green-50 transition shadow-lg">Get Your FREE Report →</button>
        </div>
      </div>

      {/* FREE REPORT MODAL */}
      {showFreeForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button onClick={() => { setShowFreeForm(false); setFreeSuccess(false); }} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl">×</button>
            
            {freeSuccess ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#0c1929] mb-2">Report on its way!</h3>
                <p className="text-slate-600 mb-4">Check your email in the next few minutes.</p>
                <p className="text-sm text-slate-500">Want the full picture with crime & climate data?</p>
                <button onClick={() => { setShowFreeForm(false); setFreeSuccess(false); openCheckout(); }} className="mt-4 bg-[#22c55e] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#16a34a] transition">Upgrade to Premium - $29.99</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="inline-block bg-[#22c55e] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">100% FREE</div>
                  <h3 className="text-2xl font-bold text-[#0c1929] mb-2">Get Your Free Property Report</h3>
                  <p className="text-slate-600 text-sm">Includes planning zone, schools, hospitals, transport, planning overlays & air quality analysis.</p>
                </div>
                
                <form onSubmit={handleFreeReport} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Property Address <span className="text-red-500">*</span></label>
                    <input ref={freeAddressInputRef} type="text" value={freeAddress} onChange={(e) => { setFreeAddress(e.target.value); setFreeError(''); }} placeholder="Start typing a Victorian address..." className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#22c55e] outline-none text-slate-800" autoComplete="off" required />
                    <p className="text-xs text-slate-400 mt-1">{googleLoaded ? 'Start typing to see suggestions' : 'Loading address search...'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Floor Level <span className="text-red-500">*</span></label>
                    <select value={freeFloor} onChange={(e) => setFreeFloor(e.target.value)} className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#22c55e] outline-none bg-white text-slate-800 ${!freeFloor ? 'border-amber-300 bg-amber-50' : 'border-slate-200'}`} required>
                      {FLOOR_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
                    </select>
                    <p className="text-xs text-slate-500 mt-1">Floor level affects risk calculations</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Your Email <span className="text-red-500">*</span></label>
                    <input type="email" value={freeEmail} onChange={(e) => setFreeEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#22c55e] outline-none text-slate-800" required />
                  </div>
                  
                  {freeError && (<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">{freeError}</div>)}
                  
                  <button type="submit" disabled={freeLoading || !canSubmitFree} className="w-full bg-[#22c55e] text-white py-3 rounded-lg font-bold hover:bg-[#16a34a] transition disabled:opacity-50 disabled:cursor-not-allowed">{freeLoading ? 'Generating...' : 'Send Me My Free Report'}</button>
                </form>
                
                <p className="text-center text-xs text-slate-500 mt-4">No credit card required. Report delivered via email.</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-[#0c1929]">
        <nav className="w-full px-4 md:px-6 py-4 border-b border-slate-700/30">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold hover:opacity-80 transition"><span className="text-white">Nest</span><span className="text-[#22c55e]">Check</span></Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-slate-300 font-semibold hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 font-semibold hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-slate-300 font-semibold hover:text-white transition">FAQ</a>
              <Link href="/sample" className="text-slate-300 font-semibold hover:text-white transition">Sample Report</Link>
              <button onClick={() => setShowFreeForm(true)} className="text-[#22c55e] font-bold hover:text-white transition">Free Report</button>
              <button onClick={() => openCheckout()} className="bg-[#22c55e] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#16a34a] transition">Get Premium</button>
            </div>
          </div>
        </nav>

        <div className="px-4 md:px-6 pt-12 md:pt-16 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Now with Planning Zones, Electorates & 10-Year Crime Data
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">Know Everything About Your Property</h1>
            <p className="text-xl md:text-2xl text-[#22c55e] font-semibold italic mb-6">Check before you nest</p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Climate risk, planning zones, crime statistics, schools, hospitals, and transport — all in one comprehensive property intelligence report.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-10 h-10 rounded-full border-2 border-[#0c1929]" />
                <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-10 h-10 rounded-full border-2 border-[#0c1929]" />
                <img src="https://i.pravatar.cc/100?img=9" alt="" className="w-10 h-10 rounded-full border-2 border-[#0c1929]" />
                <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-10 h-10 rounded-full border-2 border-[#0c1929]" />
                <img src="https://i.pravatar.cc/100?img=16" alt="" className="w-10 h-10 rounded-full border-2 border-[#0c1929]" />
                <div className="w-10 h-10 rounded-full bg-[#22c55e] border-2 border-[#0c1929] flex items-center justify-center text-white text-xs font-bold">500+</div>
              </div>
              <p className="text-slate-300 text-sm">Join <strong className="text-white">500+ Victorians</strong> making smarter property decisions</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <button onClick={() => setShowFreeForm(true)} className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white bg-transparent rounded-xl font-bold text-lg hover:bg-white hover:text-[#0c1929] transition">Get FREE Report</button>
              <button onClick={() => openCheckout()} className="w-full sm:w-auto px-8 py-4 bg-[#22c55e] text-white rounded-xl font-bold text-lg hover:bg-[#16a34a] transition">Get Premium - $29.99</button>
            </div>
            <p className="text-slate-500 text-sm">FREE: Planning zones, schools, parks, childcare & more • PREMIUM: + Climate risk + Crime data + Electorates</p>
          </div>
        </div>

        <div className="border-t border-slate-700/30 py-4 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-3 text-xs md:text-sm">
            <span className="text-slate-500">Trusted data from:</span>
            <strong className="text-white">CFA Victoria</strong>
            <span className="text-slate-600">•</span>
            <strong className="text-white">Bureau of Meteorology</strong>
            <span className="text-slate-600">•</span>
            <strong className="text-white">Crime Statistics Agency</strong>
            <span className="text-slate-600">•</span>
            <strong className="text-white">Vicmap Planning</strong>
            <span className="text-slate-600">•</span>
            <strong className="text-white">AEC & VEC</strong>
            <span className="text-slate-600">•</span>
            <strong className="text-white">OpenStreetMap</strong>
            <span className="text-slate-600">•</span>
            <strong className="text-white">ACECQA</strong>
            <span className="text-slate-600">�</span>
            <strong className="text-white">ABS Census</strong>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] mb-3">Why Property Buyers Need NestCheck</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Insurers, banks, and property professionals use this data every day. Now you can too.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#0c1929] rounded-xl p-5 md:p-6 text-center"><div className="text-2xl md:text-3xl font-extrabold text-white mb-1">$2-10k+</div><div className="text-slate-400 text-xs md:text-sm">Annual insurance variance</div></div>
            <div className="bg-[#0c1929] rounded-xl p-5 md:p-6 text-center"><div className="text-2xl md:text-3xl font-extrabold text-white mb-1">15-30%</div><div className="text-slate-400 text-xs md:text-sm">Value discount in high-risk zones</div></div>
            <div className="bg-[#0c1929] rounded-xl p-5 md:p-6 text-center"><div className="text-2xl md:text-3xl font-extrabold text-white mb-1">1 in 4</div><div className="text-slate-400 text-xs md:text-sm">Properties with planning overlays</div></div>
            <div className="bg-[#22c55e] rounded-xl p-5 md:p-6 text-center"><div className="text-2xl md:text-3xl font-extrabold text-white mb-1">5 minutes</div><div className="text-green-100 text-xs md:text-sm">To get insights that save thousands</div></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5"><div className="text-red-700 font-bold mb-2 text-sm">Without NestCheck</div><p className="text-slate-600 text-sm">"We bought our dream home, then discovered it was in a bushfire zone. Insurance quoted us $8,000/year — triple what we budgeted."</p></div>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5"><div className="text-red-700 font-bold mb-2 text-sm">Without NestCheck</div><p className="text-slate-600 text-sm">"The heritage overlay means we can't renovate without council approval. No one mentioned this before we signed."</p></div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5"><div className="text-[#166534] font-bold mb-2 text-sm">With NestCheck</div><p className="text-slate-600 text-sm">"We checked three properties before buying. NestCheck showed us which had the lowest risk. Best $30 we ever spent."</p></div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] mb-3">Who Is NestCheck For?</h2>
            <p className="text-lg text-slate-500">Property intelligence for every stage of your journey</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🏠', title: 'Property Buyers', desc: 'Know risks and overlays before signing.' },
              { icon: '🔑', title: 'Homeowners', desc: "Understand your property's risk profile." },
              { icon: '📊', title: 'Investors', desc: 'Assess risk across your portfolio.' },
              { icon: '🏢', title: 'Real Estate Agents', desc: 'Data-backed insights for clients.' },
              { icon: '📋', title: 'Portfolio Managers', desc: 'Monitor risk across properties.' },
              { icon: '🛋️', title: 'Renters', desc: 'Check before signing a lease.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5 text-center hover:border-[#22c55e] hover:shadow-md transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#0c1929] mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] mb-3">What's in Your Report?</h2>
            <p className="text-lg text-slate-500">Everything you need before making the biggest purchase of your life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-[#22c55e] rounded-xl p-5 relative">
              <div className="absolute -top-2.5 right-4 bg-[#22c55e] text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-[#0c1929] mb-2">Climate Risk Analysis</h3>
              <p className="text-slate-500 text-sm mb-3">Bushfire, flood, and storm risk scores based on 20+ years of data.</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> Bushfire Prone Area status</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Flood zone proximity</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Historical storm events</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-[#0c1929] transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-[#0c1929] mb-2">Planning Zones & Overlays</h3>
              <p className="text-slate-500 text-sm mb-3">Know your zoning and what restrictions apply — heritage, environmental, development.</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> Planning zone with explanation</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Heritage & Bushfire Overlays</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> 25+ overlay types checked</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#22c55e] rounded-xl p-5 relative">
              <div className="absolute -top-2.5 right-4 bg-[#22c55e] text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-[#0c1929] mb-2">Crime & Safety</h3>
              <p className="text-slate-500 text-sm mb-3">10 years of real crime statistics and safety analysis.</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> Safety score by suburb</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Crime breakdown by category</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> 10-year trend analysis</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-[#0c1929] transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-[#0c1929] mb-2">Schools & Childcare</h3>
              <p className="text-slate-500 text-sm mb-3">Nearby schools and childcare centres with quality ratings.</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> All nearby schools listed</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Childcare with NQS ratings</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Distance from property</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-[#0c1929] transition">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-[#0c1929] mb-2">Health & Services</h3>
              <p className="text-slate-500 text-sm mb-3">Hospitals, pharmacies, supermarkets, water & fire authorities.</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> Hospitals & pharmacies</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Water provider info</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Fire authority (FRV/CFA)</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-[#0c1929] transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-xl mb-4">🚆</div>
              <h3 className="text-lg font-bold text-[#0c1929] mb-2">Transport & Mobility</h3>
              <p className="text-slate-500 text-sm mb-3">Public transport, EV charging, parks and bike paths.</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> Trains, trams, buses</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> EV charging stations</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Parks & walking trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Score Legend */}
      <section className="py-10 px-4 md:px-6 bg-[#0c1929]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Simple Scores, Clear Decisions</h2>
          <p className="text-slate-400 mb-6">All scores are out of 100. <strong className="text-white">Lower = Lower Risk.</strong></p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-[#22c55e] text-white px-4 py-2 rounded-lg font-bold text-sm">0-20 LOW RISK</div>
            <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm">21-40 MEDIUM</div>
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-sm">41-60 HIGH</div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">61-100 EXTREME</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] text-center mb-10">What Property Buyers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5">
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <blockquote className="text-slate-600 text-sm mb-4">"We almost bought in Kinglake until we saw the bushfire risk score. This tool saved us from a huge mistake."</blockquote>
              <div className="flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=25" alt="" className="w-10 h-10 rounded-full" /><div><div className="font-bold text-[#0c1929] text-sm">Sarah M.</div><div className="text-xs text-slate-500">First Home Buyer, Melbourne</div></div></div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5">
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <blockquote className="text-slate-600 text-sm mb-4">"The planning overlay check was a game-changer. Found out about a heritage overlay that would've blocked our renovations."</blockquote>
              <div className="flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=33" alt="" className="w-10 h-10 rounded-full" /><div><div className="font-bold text-[#0c1929] text-sm">James T.</div><div className="text-xs text-slate-500">Property Investor, Geelong</div></div></div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5">
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <blockquote className="text-slate-600 text-sm mb-4">"As a buyer's agent, I run NestCheck on every property. The crime trends and school data is invaluable."</blockquote>
              <div className="flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=47" alt="" className="w-10 h-10 rounded-full" /><div><div className="font-bold text-[#0c1929] text-sm">Michelle L.</div><div className="text-xs text-slate-500">Buyer's Agent, Brighton</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] mb-3">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500">Start free, upgrade when you need the full picture.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
              <div className="text-slate-500 font-bold text-sm uppercase mb-1">Free Report</div>
              <div className="text-4xl font-extrabold text-[#0c1929] mb-1">$0</div>
              <p className="text-slate-500 text-sm mb-5">Essential property information</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> Property Location & Details</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Planning Zone</strong> (with explanation)</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Water Provider & Fire Authority</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> 25+ Planning Overlays</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Schools & Hospitals</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Public Transport</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Air Quality Analysis</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Mobile Coverage</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Parks, Trails & Bike Paths</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> EV Charging Stations</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Supermarkets, Cafes & Pharmacies</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Childcare Centres (with ratings)</li>
                <li><span className="text-slate-400">✗</span> <span className="text-slate-400">Climate Risk Scores</span></li>
                <li><span className="text-slate-400">✗</span> <span className="text-slate-400">Crime & Safety Analysis</span></li>
              </ul>
              <button onClick={() => setShowFreeForm(true)} className="w-full py-3 border-2 border-[#0c1929] text-[#0c1929] rounded-lg font-bold hover:bg-[#0c1929] hover:text-white transition">Get Free Report</button>
            </div>
            <div className="bg-white border-2 border-[#22c55e] rounded-2xl p-6 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</div>
              <div className="text-[#22c55e] font-bold text-sm uppercase mb-1">Premium Report</div>
              <div className="text-4xl font-extrabold text-[#0c1929] mb-1">$29.99</div>
              <p className="text-slate-500 text-sm mb-5">Complete property intelligence</p>
              <ul className="space-y-2 mb-4 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Everything in Free</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Climate Risk Scores</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Bushfire, Flood & Storm Analysis</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Crime & Safety Score</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>10-Year Crime Trends</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Serious Crime Breakdown</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Lifestyle Score (0-100)</strong></li>
                <li><span className="text-[#22c55e] font-bold">✔</span> <strong>Federal & State Electorates</strong></li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-xs text-green-800"><strong>Why Premium?</strong> Photos don't show flood zones, bushfire ratings, or crime hotspots. Premium reveals what agents won't tell you — protect your investment and your family.</div>
              <button onClick={() => openCheckout()} className="w-full py-3 bg-[#22c55e] text-white rounded-lg font-bold hover:bg-[#16a34a] transition">Get Premium Report</button>
              <p className="text-center text-slate-500 text-xs mt-3">One-time payment • No subscriptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-12 px-4 md:px-6 bg-[#0a1420]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Need Unlimited Reports or API Access?</h2>
          <p className="text-slate-400 mb-8">For real estate agencies, buyer's agents, mortgage brokers, and property portals.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-slate-300 text-sm">
            <span><span className="text-[#22c55e]">✔</span> Unlimited reports</span>
            <span><span className="text-[#22c55e]">✔</span> API access</span>
            <span><span className="text-[#22c55e]">✔</span> White-label</span>
            <span><span className="text-[#22c55e]">✔</span> Priority support</span>
          </div>
          <a href="mailto:hello@nestcheck.com.au" className="inline-block bg-white text-[#0c1929] px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition">Get in Touch</a>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-8 px-4 bg-[#0c1929] text-center border-t border-slate-700/30">
        <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold mb-3">COMING SOON</div>
        <h3 className="text-xl font-bold text-white mb-2">Australia-Wide Coverage & 24/7 Monitoring</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">Expanding to NSW, QLD, and other states in 2026. Plus automated alerts when risk factors change.</p>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "What's included in the FREE report?", a: "The free report includes property details, planning zone with plain-English explanation, water provider, fire authority, 25+ planning overlays, nearby schools, hospitals, public transport, air quality, mobile coverage, parks & trails, EV charging stations, supermarkets, cafes, pharmacies, and childcare centres with quality ratings. Over 1,000,000 data points!" },
              { q: "What extra do I get with Premium?", a: "Premium adds climate risk scores (bushfire, flood, storm), crime & safety analysis, 10-year crime trends, detailed crime breakdowns, Lifestyle Score, and your Federal & State electorates. Essential data for making a fully informed decision." },
              { q: "How do the scores work?", a: "All risk scores are out of 100, lower is better (like golf!). 0-20 = low risk, 21-40 = medium, 41-60 = high, 61-100 = extreme risk." },
              { q: "What are planning overlays?", a: "Government controls that restrict what you can build or renovate. Heritage overlays, bushfire overlays, flood overlays — we check 25+ types." },
              { q: "Does this replace a building inspection?", a: "No. NestCheck covers location-based risks. You still need a professional building inspection for structural issues." },
              { q: "How quickly will I get my report?", a: "Reports are generated instantly and delivered to your email within minutes as a professional PDF." },
            ].map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-lg overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-[#0c1929] hover:bg-slate-50 list-none flex justify-between items-center">{faq.q}<span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span></summary>
                <div className="px-5 pb-4 text-slate-600 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-6 bg-[#0c1929]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Check Before You Nest</h2>
          <p className="text-slate-300 mb-6">Get the complete picture of any Victorian property in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowFreeForm(true)} className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#0c1929] transition">Get Free Report</button>
            <button onClick={() => openCheckout()} className="px-8 py-4 bg-[#22c55e] text-white rounded-xl font-bold hover:bg-[#16a34a] transition">Get Premium - $29.99</button>
          </div>
          <p className="text-slate-500 text-sm mt-6">Join 500+ Victorians who checked before they nested</p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-t-2 border-amber-200 px-4 py-3 text-center text-sm text-amber-900">
        <strong>Disclaimer:</strong> NestCheck provides informational property intelligence only and is not a substitute for professional advice. We do not provide insurance quotes, financial advice, or legal advice. Scores are based on publicly available government data. Always conduct proper due diligence before making property decisions.{' '}
        <Link href="/terms" className="underline hover:text-amber-700">Read full terms</Link>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#070d14]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Link href="/" className="text-xl font-extrabold"><span className="text-white">Nest</span><span className="text-[#22c55e]">Check</span></Link>
              <span className="text-slate-500 text-sm">| Check before you nest</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white">Privacy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-white">Terms</Link>
              <Link href="/sample" className="text-slate-400 hover:text-white">Sample Report</Link>
              <a href="mailto:hello@nestcheck.com.au" className="text-slate-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500">
            <p>© 2026 NestCheck. ABN 48 670 311 318. Made in Victoria, Australia.</p>
            <p className="mt-1">Data: © State of Victoria, AEC, VEC, OpenStreetMap, ACECQA, OpenChargeMap, ABS Census 2021. CC BY 4.0.</p>
          </div>
        </div>
      </footer>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialAddress={address} />
    </main>
  )
}
