'use client';

import { useState } from 'react';

const FLOOR_OPTIONS = [
  { value: 'na', label: 'House / N/A' },
  { value: 'ground', label: 'Ground Floor' },
  { value: 'low', label: 'Level 2-3' },
  { value: 'mid', label: 'Level 4-10' },
  { value: 'high', label: 'Level 11-20' },
  { value: 'very_high', label: 'Level 21+' },
];

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAddress?: string;
}

export default function CheckoutModal({ isOpen, onClose, initialAddress = '' }: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(initialAddress);
  const [floor, setFloor] = useState('na');
  const [reportType, setReportType] = useState<'basic' | 'premium'>('premium');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

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

  const resetAndClose = () => {
    setStep(1);
    setAddress(initialAddress);
    setFloor('na');
    setReportType('premium');
    setEmail('');
    setError('');
    setAgreedToTerms(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={resetAndClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={resetAndClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl leading-none">
          ×
        </button>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= i ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                {i}
              </div>
              {i < 3 && <div className={`w-8 h-0.5 ${step > i ? 'bg-green-600' : 'bg-slate-200'}`}></div>}
            </div>
          ))}
        </div>

        {/* Step 1: Address */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-slate-800 text-center mb-2">Enter Property Address</h2>
            <p className="text-slate-500 text-center text-sm mb-6">We'll generate a comprehensive report for this property</p>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Property Address</label>
              <input
                type="text"
                placeholder="e.g. 123 Collins Street, Melbourne VIC 3000"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none"
              />
              <p className="text-xs text-slate-400 mt-1">Enter any Victorian address</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Floor Level</label>
              <select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none bg-white"
              >
                {FLOOR_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <p className="text-xs text-slate-400 mt-1">Floor level affects flood, storm, and safety calculations</p>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={address.length < 10}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-slate-300 disabled:cursor-not-allowed"
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
                className={`border-2 rounded-xl p-4 cursor-pointer transition ${reportType === 'basic' ? 'border-green-600 bg-green-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <h3 className="font-bold text-slate-800">Basic</h3>
                <p className="text-2xl font-bold text-green-600 my-2">$29.99</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>✓ Climate Risk</li>
                  <li>✓ Planning Overlays</li>
                  <li>✓ Amenities</li>
                  <li className="text-slate-400">✗ Crime & Safety</li>
                </ul>
              </div>

              <div
                onClick={() => setReportType('premium')}
                className={`border-2 rounded-xl p-4 cursor-pointer transition relative ${reportType === 'premium' ? 'border-green-600 bg-green-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">RECOMMENDED</span>
                <h3 className="font-bold text-slate-800">Premium</h3>
                <p className="text-2xl font-bold text-green-600 my-2">$39.99</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>✓ Everything in Basic</li>
                  <li>✓ Crime & Safety</li>
                  <li>✓ 10-Year Trends</li>
                  <li>✓ Overall Score</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 border-2 border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition">
                Back
              </button>
              <button onClick={() => setStep(3)} className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
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
                <span className="text-slate-800">{FLOOR_OPTIONS.find(f => f.value === floor)?.label}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-500">Report:</span>
                <span className="text-slate-800">{reportType === 'premium' ? 'Premium' : 'Basic'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-800 font-semibold">Total:</span>
                <span className="text-green-600 font-bold text-lg">${reportType === 'premium' ? '39.99' : '29.99'} AUD</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none"
              />
              <p className="text-xs text-slate-400 mt-1">Your report will be sent to this email</p>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1"
              />
              <span className="text-xs text-slate-600">
                I agree to the <a href="/terms" target="_blank" className="text-green-600 hover:underline">Terms of Service</a> and understand that NestCheck provides informational data only, not financial, legal, or insurance advice.
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
                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay $${reportType === 'premium' ? '39.99' : '29.99'}`}
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-4">
              🔒 Secure payment powered by Stripe
            </p>
          </div>
        )}
      </div>
    </div>
  );
}