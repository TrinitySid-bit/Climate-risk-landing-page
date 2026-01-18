import Hero from '@/components/Hero'
import SampleScores from '@/components/SampleScores'
import HowItWorks from '@/components/HowItWorks'
import WhyItMatters from '@/components/WhyItMatters'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <SampleScores />
      <WhyItMatters />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}