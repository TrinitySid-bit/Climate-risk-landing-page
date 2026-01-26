'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'loading' | 'success'>('loading');

  useEffect(() => {
    if (sessionId) {
      setStatus('success');
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        {status === 'loading' ? (
          <>
            <div className="w-12 h-12 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-slate-800">Processing...</h1>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Payment Successful!</h1>
            <p className="text-slate-600 mb-6">Your NestCheck report is being generated</p>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
              <ol className="text-sm text-green-700 space-y-2">
                <li>1. Your report is being generated now (1-2 minutes)</li>
                <li>2. You'll receive an email with your download link</li>
                <li>3. The link is valid for 48 hours</li>
              </ol>
            </div>
            
            <p className="text-sm text-slate-500 mb-6">
              📧 Check your inbox for an email from <strong>reports@nestcheck.com.au</strong>
            </p>
            
            <Link 
              href="/"
              className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              Check Another Property
            </Link>
            
            <p className="text-xs text-slate-400 mt-6">
              Didn't receive your email? Contact{' '}
              <a href="mailto:support@nestcheck.com.au" className="text-green-600 hover:underline">
                support@nestcheck.com.au
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}