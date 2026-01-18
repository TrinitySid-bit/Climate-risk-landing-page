import { FireIcon, HomeIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function WhyItMatters() {
  const reasons = [
    {
      icon: FireIcon,
      title: "Victoria's Bushfire Reality",
      stat: "1.5M+ hectares",
      description: "burned in Black Summer 2019-20. Climate risk is real and increasing."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Insurance Costs Soaring",
      stat: "$2k-10k+",
      description: "variance in premiums based on risk profile. Know before you buy."
    },
    {
      icon: HomeIcon,
      title: "Property Values at Risk",
      stat: "15-30%",
      description: "discount on properties in high-risk zones. Protect your investment."
    },
    {
      icon: ShieldCheckIcon,
      title: "Peace of Mind",
      stat: "Priceless",
      description: "Sleep easy knowing you've made an informed decision about your family's safety."
    }
  ]

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Why Climate Risk Matters for Property Buyers
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg max-w-3xl mx-auto">
          Australian property prices don't factor in climate risk—yet. But insurance companies, banks, and informed buyers do.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white rounded-xl p-6 border border-slate-200">
              <reason.icon className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{reason.stat}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
          <p className="text-2xl font-medium mb-4">
            "We almost bought in Kinglake until we checked the bushfire risk. This tool saved us from a huge mistake."
          </p>
          <p className="text-blue-100">— Sarah M., First Home Buyer, Melbourne</p>
        </div>
      </div>
    </div>
  )
}