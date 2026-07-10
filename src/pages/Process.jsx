import { Check } from 'lucide-react'
import useSEO from '../hooks/useSEO.js'
import { PageHero, Eyebrow, SectionTitle, FreeBanner, CTABand } from '../components/ui.jsx'
import { PROCESS_STEPS } from '../data/site.js'
import heroImg from '../assets/kitchen-3.jpg'

export default function Process() {
  useSEO(
    'Our Process',
    'From your first enquiry to project completion, J&G Design Group makes renovating simple and stress free. FREE consultation, FREE site visit and FREE detailed quote with no obligation.'
  )

  return (
    <>
      <PageHero
        eyebrow="OUR PROCESS"
        title="A simple, transparent and stress free process."
        subtitle="From your first enquiry to project completion, we make the renovation journey easy. Your consultation, site visit and detailed quote are completely FREE with no obligation."
        image={heroImg}
        imageAlt="Renovated kitchen with island bench"
      />

      <section className="section">
        <div className="container">
          <FreeBanner />
          <div className="process-steps">
            {PROCESS_STEPS.map((s) => (
              <div className="process-step" key={s.n}>
                <div className="process-num">{s.n}</div>
                <div className="process-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.tag && <span className="process-tag"><Check size={13} strokeWidth={3} /> {s.tag}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container mission">
          <Eyebrow center>ONE TEAM, START TO FINISH</Eyebrow>
          <SectionTitle center>We manage every trade, so you do not have to.</SectionTitle>
          <p className="mission-text">Cabinet makers, plumbers, electricians, tilers and waterproofers are all coordinated by us and scheduled in the right order. You get one team, one timeline and one transparent price, which means less stress and a better result.</p>
        </div>
      </section>

      <CTABand />
    </>
  )
}
