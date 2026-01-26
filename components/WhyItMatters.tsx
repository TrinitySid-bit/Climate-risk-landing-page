import { FireIcon, HomeIcon, CurrencyDollarIcon, ShieldCheckIcon, MapIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export default function WhyItMatters() {
  const reasons = [
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
      icon: MapIcon,
      title: "Planning Overlays",
      stat: "1 in 4",
      description: "properties have overlays affecting renovations. Don't get caught out."
    },
    {
      icon: ShieldCheckIcon,
      title: "Peace of Mind",
      stat: "Priceless",
      description: "Sleep easy knowing you've made an informed decision."
    }
  ]

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Why You Need NestCheck
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg max-w-3xl mx-auto">
          Insurers, banks, and property professionals use this data to assess risk every day. Now you can too.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white rounded-xl p-6 border border-slate-200">
              <reason.icon className="h-12 w-12 text-green-600 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{reason.stat}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="text-yellow-500 mb-4">★★★★★</div>
            <p className="text-slate-700 mb-4">
              "We almost bought in Kinglake until we saw the bushfire risk score. This tool literally saved us from a huge mistake and potentially tens of thousands in insurance."
            </p>
            <p className="text-slate-500 font-medium">— Sarah M., First Home Buyer, Melbourne</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="text-yellow-500 mb-4">★★★★★</div>
            <p className="text-slate-700 mb-4">
              "The planning overlay check was a game-changer. Found out the property had a heritage overlay which would've made our renovation plans impossible."
            </p>
            <p className="text-slate-500 font-medium">— James T., Property Investor, Geelong</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="text-yellow-500 mb-4">★★★★★</div>
            <p className="text-slate-700 mb-4">
              "As a buyer's agent, I now run NestCheck on every property before showing clients. The crime trends and school proximity data is invaluable."
            </p>
            <p className="text-slate-500 font-medium">— Michelle L., Buyer's Agent, Brighton</p>
          </div>
        </div>
      </div>
    </div>
  )
}