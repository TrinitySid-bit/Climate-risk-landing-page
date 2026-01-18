export default function SampleScores() {
  const samples = [
    { suburb: 'Kinglake', postcode: '3763', score: 28, rating: 'High Risk', reason: 'Black Saturday fire zone' },
    { suburb: 'St Kilda', postcode: '3182', score: 92, rating: 'Excellent', reason: 'Low risk, coastal' },
    { suburb: 'Maribyrnong', postcode: '3032', score: 51, rating: 'Moderate', reason: 'Flood-prone area' },
    { suburb: 'Eltham', postcode: '3095', score: 42, rating: 'Elevated', reason: 'Bushfire interface zone' },
    { suburb: 'Brighton', postcode: '3186', score: 88, rating: 'Good', reason: 'Minimal climate risk' },
    { suburb: 'Warburton', postcode: '3799', score: 35, rating: 'Elevated', reason: 'Forest fire risk' },
  ]

  const getColorClass = (score: number) => {
    if (score >= 90) return 'from-green-600 to-green-500'
    if (score >= 75) return 'from-green-500 to-green-400'
    if (score >= 50) return 'from-yellow-500 to-yellow-400'
    if (score >= 25) return 'from-orange-500 to-orange-400'
    return 'from-red-600 to-red-500'
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Sample ClimateScores Across Victoria
        </h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          See how different suburbs rate for climate risk
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {samples.map((sample) => (
            <div key={sample.suburb} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{sample.suburb}</h3>
                  <p className="text-sm text-slate-500">{sample.postcode}</p>
                </div>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getColorClass(sample.score)} flex items-center justify-center text-white font-bold text-2xl`}>
                  {sample.score}
                </div>
              </div>
              
              <div className="text-sm font-semibold text-slate-700 mb-2">{sample.rating}</div>
              <div className="text-sm text-slate-600">{sample.reason}</div>
              
              <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-700">
                View detailed report →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Want to check your suburb?</p>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  )
}