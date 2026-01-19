import { CheckIcon } from '@heroicons/react/24/solid'

export default function Pricing() {
  const oneTimeTiers = [
    {
      name: 'Single Report',
      price: '$49',
      period: 'per property',
      features: [
        '1 comprehensive property report',
        'Full ClimateScore analysis',
        'Detailed risk breakdowns',
        'Historical incident maps',
        'Insurance impact indicator',
        'Export PDF report'
      ],
      cta: 'Buy Single Report',
      highlight: false,
      badge: null
    },
    {
      name: '5-Report Pack',
      price: '$199',
      period: 'for 5 properties',
      features: [
        '5 comprehensive property reports',
        'Save $46 vs single reports',
        'Only $39.80 per report',
        'All features from single report',
        'Perfect for comparing options',
        'Share with family/advisor'
      ],
      cta: 'Buy 5-Pack',
      highlight: true,
      badge: 'BEST VALUE'
    }
  ]

  const subscriptionTiers = [
    {
      name: 'Basic',
      price: '$79',
      period: 'per month',
      features: [
        'Up to 10 reports per month',
        'All report features included',
        'Priority email support',
        'Cancel anytime',
        'Perfect for active buyers'
      ],
      cta: 'Start Basic',
      highlight: false,
      badge: null
    },
    {
      name: 'Pro',
      price: '$149',
      period: 'per month',
      features: [
        'Unlimited property reports',
        'White-label reports (your branding)',
        'Advanced analytics',
        'API access',
        'Priority phone support',
        'Cancel anytime',
        'Perfect for investors'
      ],
      cta: 'Start Pro',
      highlight: true,
      badge: 'MOST POPULAR'
    },
    {
      name: 'Agent',
      price: '$299',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Team access (up to 5 users)',
        'CRM integration (REA, Domain)',
        'Bulk upload (CSV)',
        'Custom reporting',
        'Dedicated account manager',
        'White-label mobile app'
      ],
      cta: 'Contact Sales',
      highlight: false,
      badge: 'FOR TEAMS'
    }
  ]

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg">
          Choose pay-per-report or subscribe for unlimited access
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Pay Per Report
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {oneTimeTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`rounded-2xl p-8 ${tier.highlight ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-2xl ring-4 ring-blue-200' : 'bg-white border-2 border-slate-200'}`}
              >
                {tier.badge && <div className="text-sm font-semibold mb-4 text-blue-100">{tier.badge}</div>}
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                  <span className={`text-lg ml-2 ${tier.highlight ? 'text-blue-100' : 'text-slate-500'}`}>{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-white' : 'text-green-600'}`} />
                      <span className={tier.highlight ? 'text-blue-50' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#signup" className={`block w-full py-3 rounded-lg font-semibold transition-all text-center ${tier.highlight ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>{tier.cta}</a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-2">Subscription Plans</h3>
          <p className="text-center text-slate-600 mb-8">For professionals, investors, and active property searchers</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`rounded-2xl p-8 ${tier.highlight ? 'bg-gradient-to-br from-orange-600 to-orange-500 text-white shadow-2xl scale-105' : 'bg-white border-2 border-slate-200'}`}
              >
                {tier.badge && <div className={`text-sm font-semibold mb-4 ${tier.highlight ? 'text-orange-100' : 'text-orange-600'}`}>{tier.badge}</div>}
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                  <span className={`text-lg ml-2 ${tier.highlight ? 'text-orange-100' : 'text-slate-500'}`}>{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-white' : 'text-green-600'}`} />
                      <span className={`text-sm ${tier.highlight ? 'text-orange-50' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#signup" className={`block w-full py-3 rounded-lg font-semibold transition-all text-center ${tier.highlight ? 'bg-white text-orange-600 hover:bg-orange-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>{tier.cta}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-slate-100 rounded-2xl p-8 max-w-4xl mx-auto">
          <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Not sure which plan to choose?</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🏠</div>
              <p className="font-semibold text-slate-900 mb-1">Buying 1-2 homes?</p>
              <p className="text-sm text-slate-600">Choose Single Report or 5-Pack</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔍</div>
              <p className="font-semibold text-slate-900 mb-1">Active investor?</p>
              <p className="text-sm text-slate-600">Choose Basic or Pro subscription</p>
            </div>
            <div>
              <div className="text-3xl mb-2">👔</div>
              <p className="font-semibold text-slate-900 mb-1">Real estate agent?</p>
              <p className="text-sm text-slate-600">Choose Agent plan for teams</p>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-12 text-sm">Reports are point-in-time assessments based on data available at purchase. Launch pricing - lock in now before prices increase.</p>
      </div>
    </div>
  )
}