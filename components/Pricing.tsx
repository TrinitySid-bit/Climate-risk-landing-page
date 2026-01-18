import { CheckIcon } from '@heroicons/react/24/solid'

export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '3 property reports per month',
        'Basic ClimateScore',
        'Risk category rating',
        'Community support'
      ],
      cta: 'Start Free',
      highlight: false
    },
    {
      name: 'Pro',
      price: '$14.99',
      period: 'per month',
      features: [
        'Unlimited property reports',
        'Detailed risk breakdowns',
        'Historical incident maps',
        'Insurance cost estimates',
        'Export PDF reports',
        'Priority support'
      ],
      cta: 'Get Early Access',
      highlight: true
    },
    {
      name: 'Agent',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'White-label reports',
        'Custom agent branding',
        'Bulk address upload',
        'CRM integration',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ]

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Launch special: First 100 Pro subscribers get 50% off forever
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlight 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-2xl scale-105' 
                  : 'bg-white border-2 border-slate-200'
              }`}
            >
              {tier.highlight && (
                <div className="text-sm font-semibold mb-4 text-blue-100">MOST POPULAR</div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                {tier.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-5xl font-bold ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {tier.price}
                </span>
                <span className={`text-lg ml-2 ${tier.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-white' : 'text-green-600'}`} />
                    <span className={tier.highlight ? 'text-blue-50' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 mt-12 text-sm">
          All plans include access to updated data and new features as we add them
        </p>
      </div>
    </div>
  )
}