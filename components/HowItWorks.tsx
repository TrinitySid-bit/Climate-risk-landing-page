export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter an Address',
      description: 'Type any Victorian address or postcode you\'re considering'
    },
    {
      number: '02',
      title: 'Get Instant Score',
      description: 'Our algorithm analyzes bushfire, flood, and storm data from government sources'
    },
    {
      number: '03',
      title: 'Make Informed Decision',
      description: 'View detailed risk breakdown, historical incidents, and insurance estimates'
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-lg">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                  <div className="text-4xl text-blue-200">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Sources</h3>
          <p className="text-slate-600 mb-4">
            ClimateScore aggregates data from trusted government and scientific sources:
          </p>
         <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
  <li className="flex items-center gap-2">
    <span className="text-green-600">✓</span> CFA Bushfire Maps
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-600">✓</span> Bureau of Meteorology
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-600">✓</span> Melbourne Water Flood Data
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-600">✓</span> VicEmergency Records
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-600">✓</span> Government Planning Data
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-600">✓</span> And many more sources
  </li>
</ul>
        </div>
      </div>
    </div>
  )
}