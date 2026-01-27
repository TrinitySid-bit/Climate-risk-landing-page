'use client';

import { useState, useEffect, useRef } from 'react';

const FLOOR_OPTIONS = [
  { value: '', label: '-- Select floor level --' },
  { value: 'house', label: 'House / Townhouse' },
  { value: 'ground', label: 'Ground Floor (Apartment)' },
  { value: 'low', label: 'Level 1-3' },
  { value: 'mid', label: 'Level 4-10' },
  { value: 'high', label: 'Level 11-20' },
  { value: 'very_high', label: 'Level 21+' },
];

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAddress?: string;
}

declare global {
  interface Window {
    google: any;
    initGooglePlaces: () => void;
  }
}

export default function CheckoutModal({ isOpen, onClose, initialAddress = '' }: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(initialAddress);
  const [floor, setFloor] = useState('');
  const [reportType, setReportType] = useState<'basic' | 'premium'>('premium');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

// Sync address when modal opens or initialAddress changes
  useEffect(() => {
    if (isOpen) {
      setAddress(initialAddress);
    } else {
      // Reset form when modal closes
      setStep(1);
      setFloor('');
      setReportType('premium');
      setEmail('');
      setError('');
      setAgreedToTerms(false);
      autocompleteRef.current = null;
    }
  }, [isOpen, initialAddress]);

  // Initialize Google Places Autocomplete
  useEffect(() => {
    if (!isOpen || step !== 1 || !addressInputRef.current) return;
    
    const initAutocomplete = () => {
      if (!window.google || !window.google.maps || !window.google.maps.places) return;
      if (autocompleteRef.current) return;
      
      autocompleteRef.current = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        componentRestrictions: { country: 'au' },
        fields: ['formatted_address', 'address_components'],
        types: ['address'],
      });

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          setAddress(place.formatted_address);
          
          const state = place.address_components?.find(
            (c: any) => c.types.includes('administrative_area_level_1')
          );
          
          if (state?.short_name !== 'VIC') {
            setError('Please enter a Victorian address. We currently only cover Victoria.');
          } else {
            setError('');
          }
        }
      });
    };

    if (window.google && window.google.maps && window.google.maps.places) {
      initAutocomplete();
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return;

    if (!document.getElementById('google-maps-script')) {
      window.initGooglePlaces = initAutocomplete;
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGooglePlaces`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [isOpen, step]);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    if (!agreedToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, floor, reportType, email }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const canProceedStep1 = address.length >= 10 && floor !== '' && !error;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl leading-none">
          Ã—
        </button>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= i ? 'bg-[#22c55e] text-white' : 'bg-slate-200 text-slate-500'}`}>
                {i}
              </div>
              {i < 3 && <div className={`w-8 h-0.5 ${step > i ? 'bg-[#22c55e]' : 'bg-slate-200'}`}></div>}
            </div>
          ))}
        </div>

        {/* Step 1: Address */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-slate-800 text-center mb-2">Enter Property Details</h2>
            <p className="text-slate-500 text-center text-sm mb-6">We'll generate a comprehensive report for this property</p>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                ref={addressInputRef}
                type="text"
                placeholder="Start typing a Victorian address..."
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#22c55e] focus:outline-none text-slate-800"
                autoComplete="off"
              />
              <p className="text-xs text-slate-400 mt-1">Enter any Victorian address</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Floor Level <span className="text-red-500">*</span>
              </label>
              <select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#22c55e] focus:outline-none bg-white text-slate-800 ${!floor ? 'border-amber-300 bg-amber-50' : 'border-slate-200'}`}
              >
                {FLOOR_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">
                <strong>Required:</strong> Floor level significantly affects flood risk, storm damage, and safety scores
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className="w-full py-3 bg-[#22c55e] text-white rounded-lg font-semibold hover:bg-[#16a34a] transition disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Select Plan */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-slate-800 text-center mb-2">Choose Your Report</h2>
            <p className="text-slate-500 text-center text-sm mb-6">Select the level of detail you need</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                onClick={() => setReportType('basic')}
                className={`border-2 rounded-xl p-4 cursor-pointer transition ${reportType === 'basic' ? 'border-[#22c55e] bg-green-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <h3 className="font-bold text-slate-800">Basic</h3>
                <p className="text-2xl font-bold text-[#22c55e] my-2">$29.99</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>âœ“ Climate Risk</li>
                  <li>âœ“ Planning Overlays</li>
                  <li>âœ“ Amenities</li>
                  <li className="text-slate-400">âœ— Crime & Safety</li>
                </ul>
              </div>

              <div
                onClick={() => setReportType('premium')}
                className={`border-2 rounded-xl p-4 cursor-pointer transition relative ${reportType === 'premium' ? 'border-[#22c55e] bg-green-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-xs font-bold px-2 py-0.5 rounded-full">RECOMMENDED</span>
                <h3 className="font-bold text-slate-800">Premium</h3>
                <p className="text-2xl font-bold text-[#22c55e] my-2">$39.99</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>âœ“ Everything in Basic</li>
                  <li>âœ“ Crime & Safety</li>
                  <li>âœ“ 10-Year Trends</li>
                  <li>âœ“ Overall Score</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 border-2 border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition">
                Back
              </button>
              <button onClick={() => setStep(3)} className="flex-1 py-3 bg-[#22c55e] text-white rounded-lg font-semibold hover:bg-[#16a34a] transition">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Email & Checkout */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-slate-800 text-center mb-2">Almost There!</h2>
            <p className="text-slate-500 text-center text-sm mb-6">Enter your email to receive your report</p>

            {/* Summary */}
            <div className="bg-slate-50 rounded-xl p-4 mb-4 text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-slate-500">Property:</span>
                <span className="text-slate-800 font-medium text-right max-w-[200px] truncate">{address}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-500">Floor:</span>
                <span className="text-slate-800">{FLOOR_OPTIONS.find(f => f.value === floor)?.label || 'Not selected'}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-500">Report:</span>
                <span className="text-slate-800">{reportType === 'premium' ? 'Premium' : 'Basic'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-800 font-semibold">Total:</span>
                <span className="text-[#22c55e] font-bold text-lg">${reportType === 'premium' ? '39.99' : '29.99'} AUD</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#22c55e] focus:outline-none text-slate-800"
              />
              <p className="text-xs text-slate-400 mt-1">Your report will be sent to this email</p>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 accent-[#22c55e]"
              />
              <span className="text-xs text-slate-600">
                I agree to the <a href="/terms" target="_blank" className="text-[#22c55e] hover:underline">Terms of Service</a> and understand that NestCheck provides informational data only, not financial, legal, or insurance advice.
              </span>
            </label>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 py-3 border-2 border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition">
                Back
              </button>
              <button
                onClick={handleCheckout}
                disabled={loading || !email.includes('@')}
                className="flex-1 py-3 bg-[#22c55e] text-white rounded-lg font-semibold hover:bg-[#16a34a] transition disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay $${reportType === 'premium' ? '39.99' : '29.99'}`}
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-4">
              ðŸ”’ Secure payment powered by Stripe
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
