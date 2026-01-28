'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
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
    googleMapsLoaded: boolean;
    googleMapsCallbacks: (() => void)[];
  }
}

// Shared Google Maps loader - ensures script loads once and handles race conditions
const loadGoogleMaps = (callback: () => void) => {
  // If already loaded, call immediately
  if (window.google?.maps?.places) {
    callback();
    return;
  }

  // Initialize callback queue if needed
  if (!window.googleMapsCallbacks) {
    window.googleMapsCallbacks = [];
  }

  // Add to queue
  window.googleMapsCallbacks.push(callback);

  // If script already loading, just wait
  if (document.getElementById('google-maps-script')) {
    return;
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error('Google Maps API key not found');
    return;
  }

  // Create global callback
  (window as any).initGoogleMapsCallback = () => {
    window.googleMapsLoaded = true;
    window.googleMapsCallbacks.forEach(cb => cb());
    window.googleMapsCallbacks = [];
  };

  const script = document.createElement('script');
  script.id = 'google-maps-script';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMapsCallback`;
  script.async = true;
  script.defer = true;
  script.onerror = () => console.error('Failed to load Google Maps');
  document.head.appendChild(script);
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  // Initialize autocomplete when modal opens and Google is ready
  const initFreeAutocomplete = useCallback(() => {
    if (!freeAddressInputRef.current || freeAutocompleteRef.current) return;
    if (!window.google?.maps?.places) return;

    try {
      freeAutocompleteRef.current = new window.google.maps.places.Autocomplete(
        freeAddressInputRef.current,
        {
          componentRestrictions: { country: 'au' },
          fields: ['formatted_address', 'address_components'],
          types: ['address'],
        }
      );

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
    } catch (err) {
      console.error('Error initializing autocomplete:', err);
    }
  }, []);

  // Load Google Maps when free form opens
  useEffect(() => {
    if (!showFreeForm) {
      // Cleanup when modal closes
      if (freeAutocompleteRef.current && window.google) {
        window.google.maps.event.clearInstanceListeners(freeAutocompleteRef.current);
      }
      freeAutocompleteRef.current = null;
      return;
    }

    loadGoogleMaps(() => {
      setGoogleLoaded(true);
      // Small delay to ensure input is mounted
      setTimeout(initFreeAutocomplete, 100);
    });
  }, [showFreeForm, initFreeAutocomplete]);

  // Re-init if input ref changes
  useEffect(() => {
    if (showFreeForm && googleLoaded && freeAddressInputRef.current && !freeAutocompleteRef.current) {
      initFreeAutocomplete();
    }
  }, [showFreeForm, googleLoaded, initFreeAutocomplete]);

  const handleFreeReport = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!freeAddress || !freeEmail || !freeFloor) return
    
    setFreeLoading(true)
    setFreeError('')
    try {
      const response = await fetch('https://climatescore-api-production.up.railway.app/api/reports/free-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: freeAddress,
          email: freeEmail,
          floor: freeFloor
        })
      })
      
      if (response.ok) {
        setFreeSuccess(true)
        setFreeAddress('')
        setFreeEmail('')
        setFreeFloor('')
      } else {
        const data = await response.json().catch(() => ({}))
        setFreeError(data.detail || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setFreeError('Something went wrong. Please try again.')
    } finally {
      setFreeLoading(false)
    }
  }

  const closeFreeForm = () => {
    setShowFreeForm(false)
    setFreeSuccess(false)
    setFreeError('')
  }

  const canSubmitFree = freeAddress.length >= 10 && freeEmail.includes('@') && freeFloor !== '' && !freeError

  return (
    <main className="min-h-screen" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* FREE REPORT BANNER - ATTN VICTORIANS */}
      <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-4 py-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white font-bold text-lg md:text-xl mb-1">
            🏠 ATTN Victorians: Get a FREE Property Report!
          </p>
          <p className="text-green-100 text-sm mb-3">
            Schools, hospitals, transport, planning overlays & air quality - completely free. No credit card required.
          </p>
          <button
            onClick={() => setShowFreeForm(true)}
            className="bg-white text-[#16a34a] px-6 py-2 rounded-lg font-bold hover:bg-green-50 transition shadow-lg"
          >
            Get Your FREE Report →
          </button>
        </div>
      </div>

      {/* FREE REPORT MODAL */}
      {showFreeForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeFreeForm}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>
            
            {freeSuccess ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Report on its way!</h3>
                <p className="text-slate-600 mb-6">Check your inbox in a few minutes.</p>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-800 text-sm font-medium mb-2">
                    Want the full picture?
                  </p>
                  <p className="text-green-700 text-xs mb-3">
                    Upgrade to Premium for climate risk scores and crime data.
                  </p>
                  <button
                    onClick={() => { closeFreeForm(); setIsModalOpen(true); }}
                    className="bg-[#22c55e] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#16a34a] transition"
                  >
                    Get Premium - $29.99
                  </button>
                </div>
                
                <button
                  onClick={closeFreeForm}
                  className="text-slate-500 hover:text-slate-700 text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFreeReport}>
                <h3 className="text-2xl font-bold text-slate-800 mb-1 text-center">Free Property Report</h3>
                <p className="text-slate-500 text-sm text-center mb-6">
                  Schools, transport, overlays & air quality
                </p>
                
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Property Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={freeAddressInputRef}
                    type="text"
                    placeholder="Start typing a Victorian address..."
                    value={freeAddress}
                    onChange={(e) => {
                      setFreeAddress(e.target.value);
                      setFreeError('');
                    }}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#22c55e] focus:outline-none text-slate-800"
                    autoComplete="off"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    {googleLoaded ? 'Start typing to see suggestions' : 'Loading address search...'}
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Floor Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={freeFloor}
                    onChange={(e) => setFreeFloor(e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#22c55e] focus:outline-none bg-white text-slate-800 ${!freeFloor ? 'border-amber-300 bg-amber-50' : 'border-slate-200'}`}
                  >
                    {FLOOR_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 mt-1">
                    <strong>Required:</strong> Floor level affects risk calculations
                  </p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={freeEmail}
                    onChange={(e) => setFreeEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#22c55e] focus:outline-none text-slate-800"
                  />
                  <p className="text-xs text-slate-400 mt-1">We'll send your report here</p>
                </div>
                
                {freeError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
                    {freeError}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={!canSubmitFree || freeLoading}
                  className="w-full py-3 bg-[#22c55e] text-white rounded-lg font-bold hover:bg-[#16a34a] transition disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  {freeLoading ? 'Generating...' : 'Get Free Report'}
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  No credit card required • Report delivered instantly
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="bg-[#0c1929] border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
            <span className="text-white">Nest</span>
            <span className="text-[#22c55e]">Check</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="text-slate-400 hover:text-white transition hidden md:block">How It Works</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition hidden md:block">Pricing</a>
            <a href="#faq" className="text-slate-400 hover:text-white transition hidden md:block">FAQ</a>
            <Link href="/sample" className="text-slate-400 hover:text-white transition">Sample Report</Link>
          </nav>
        </div>
      </header>

      {/* HERO - NO ADDRESS INPUT, JUST BUTTONS */}
      <section className="bg-gradient-to-b from-[#0c1929] to-[#0a1420] py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Check Before You <span className="text-[#22c55e]">Nest</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get instant property intelligence on climate risks, crime, schools, and more. Built so Victorians don't get ripped off.
          </p>

          {/* TWO CLEAR BUTTONS - No address input here */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => setShowFreeForm(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0c1929] rounded-xl font-bold text-lg hover:bg-slate-100 transition shadow-lg"
            >
              Get FREE Report
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#22c55e] text-white rounded-xl font-bold text-lg hover:bg-[#16a34a] transition shadow-lg"
            >
              Get Premium - $29.99
            </button>
          </div>

          <p className="text-slate-400 text-sm">
            FREE: Schools, transport, overlays • PREMIUM: + Climate risk + Crime data
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] text-center mb-4">How It Works</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Get your property report in three simple steps</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">📍</div>
              <h3 className="font-bold text-lg text-[#0c1929] mb-2">1. Enter Address</h3>
              <p className="text-slate-500 text-sm">Type any Victorian property address</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="font-bold text-lg text-[#0c1929] mb-2">2. Instant Analysis</h3>
              <p className="text-slate-500 text-sm">We check 50+ data sources in seconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">📄</div>
              <h3 className="font-bold text-lg text-[#0c1929] mb-2">3. Get Your Report</h3>
              <p className="text-slate-500 text-sm">PDF delivered straight to your inbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA SOURCES */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-6">Trusted data from official sources</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-slate-400 text-sm">
            <span>🏛️ Vic Government</span>
            <span>🌊 Bureau of Meteorology</span>
            <span>🔥 CFA</span>
            <span>👮 Crime Statistics Agency</span>
            <span>🗺️ Geoscience Australia</span>
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0c1929]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4">What's In Your Report?</h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">Comprehensive property intelligence at your fingertips</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🔥', title: 'Bushfire Risk', desc: 'BAL ratings & zone analysis', premium: true },
              { icon: '🌊', title: 'Flood Risk', desc: 'Flood overlays & history', premium: true },
              { icon: '⛈️', title: 'Storm Risk', desc: 'Severe weather patterns', premium: true },
              { icon: '👮', title: 'Crime Data', desc: '10-year trends & safety score', premium: true },
              { icon: '🏫', title: 'Schools', desc: 'Nearby schools & ratings', premium: false },
              { icon: '🏥', title: 'Hospitals', desc: 'Distance to medical facilities', premium: false },
              { icon: '🚆', title: 'Transport', desc: 'Trains, buses & trams', premium: false },
              { icon: '📋', title: 'Planning Overlays', desc: '25+ overlay types checked', premium: false },
              { icon: '💨', title: 'Air Quality', desc: 'Pollution & environmental data', premium: false },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                  {item.premium && <span className="text-[#22c55e] text-xs font-medium">Premium</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white" id="pricing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] text-center mb-4">Simple Pricing</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Choose the report that's right for you</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="text-slate-600 font-bold text-sm uppercase mb-1">Free Report</div>
              <div className="text-4xl font-extrabold text-[#0c1929] mb-1">$0</div>
              <p className="text-slate-500 text-sm mb-5">Essential property info</p>

              <ul className="space-y-2 mb-4 text-sm text-slate-600">
                <li><span className="text-[#22c55e] font-bold">✔</span> 25+ Planning Overlays</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Schools & Hospitals</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Public Transport</li>
                <li><span className="text-[#22c55e] font-bold">✔</span> Air Quality Analysis</li>
                <li><span className="text-slate-400">✗</span> <span className="text-slate-400">Climate Risk Scores</span></li>
                <li><span className="text-slate-400">✗</span> <span className="text-slate-400">Crime & Safety Analysis</span></li>
              </ul>

              <button
                onClick={() => setShowFreeForm(true)}
                className="w-full py-3 border-2 border-[#0c1929] text-[#0c1929] rounded-lg font-bold hover:bg-[#0c1929] hover:text-white transition"
              >
                Get Free Report
              </button>
            </div>

            {/* Premium */}
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
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-xs text-green-800">
                <strong>Why Premium?</strong> Climate & crime data reveals what photos can't. Protect your investment and your family.
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-[#22c55e] text-white rounded-lg font-bold hover:bg-[#16a34a] transition"
              >
                Get Premium Report
              </button>
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

          <a href="mailto:hello@nestcheck.com.au" className="inline-block bg-white text-[#0c1929] px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-8 px-4 bg-[#0c1929] text-center border-t border-slate-700/30">
        <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold mb-3">
          COMING SOON
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Australia-Wide Coverage & 24/7 Monitoring</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Expanding to NSW, QLD, and other states in 2026. Plus automated alerts when risk factors change.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1929] text-center mb-10">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {[
              { q: "What's included in the FREE report?", a: "The free report includes property details, 25+ planning overlays, nearby schools, hospitals, public transport, and air quality analysis. It's a great starting point for any property search." },
              { q: "What extra do I get with Premium?", a: "Premium adds climate risk scores (bushfire, flood, storm), crime & safety analysis, 10-year crime trends, and detailed crime breakdowns. Essential data for making a fully informed decision." },
              { q: "How do the scores work?", a: "All scores are out of 100, higher is always better. 80-100 = low risk, 60-79 = medium, 40-59 = high, 0-39 = extreme risk." },
              { q: "What are planning overlays?", a: "Government controls that restrict what you can build or renovate. Heritage overlays, bushfire overlays, flood overlays — we check 25+ types." },
              { q: "Does this replace a building inspection?", a: "No. NestCheck covers location-based risks. You still need a professional building inspection for structural issues." },
              { q: "How quickly will I get my report?", a: "Reports are generated instantly and delivered to your email within minutes as a professional PDF." },
            ].map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-lg overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-[#0c1929] hover:bg-slate-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
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
            <button
              onClick={() => setShowFreeForm(true)}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#0c1929] transition"
            >
              Get Free Report
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#22c55e] text-white rounded-xl font-bold hover:bg-[#16a34a] transition"
            >
              Get Premium - $29.99
            </button>
          </div>

          <p className="text-slate-500 text-sm mt-6">Join 500+ Victorians who checked before they nested</p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-t-2 border-amber-200 px-4 py-3 text-center text-sm text-amber-900">
        <strong>Disclaimer:</strong> NestCheck provides informational property intelligence only and is not a substitute for professional advice.
        We do not provide insurance quotes, financial advice, or legal advice. Scores are based on publicly available government data.
        Always conduct proper due diligence before making property decisions.{' '}
        <Link href="/terms" className="underline hover:text-amber-700">Read full terms</Link>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#070d14]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Link href="/" className="text-xl font-extrabold">
                <span className="text-white">Nest</span>
                <span className="text-[#22c55e]">Check</span>
              </Link>
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
            <p className="mt-1">Data: © State of Victoria (CFA, Crime Statistics Agency, DEECA) 2025. CC BY 4.0.</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}
