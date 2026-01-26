export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border-b-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4 py-3 text-center">
        <p className="text-sm text-amber-900">
          ⚠️ <strong>Disclaimer:</strong> NestCheck provides informational property intelligence only and is not a substitute for professional advice. 
          We do not provide insurance quotes, financial advice, or legal advice. Scores are based on publicly available government data. 
          It is the responsibility of the purchaser to review the primary data sources we aggregate from. 
          Always conduct proper due diligence before making property decisions.
          {' '}
          <a href="/terms" className="underline hover:text-amber-700">Read full terms</a>
        </p>
      </div>
    </div>
  )
}