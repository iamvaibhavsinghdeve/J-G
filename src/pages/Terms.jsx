import useSEO from '../hooks/useSEO.js'
import { PageHero } from '../components/ui.jsx'
import { BUSINESS } from '../data/site.js'

export default function Terms() {
  useSEO('Terms & Conditions', 'Terms and Conditions for J&G Design Group renovation services.')

  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms & Conditions" />
      <section className="section">
        <div className="container legal">
          <p className="legal-updated">Last updated: {new Date().getFullYear()}</p>

          <p>These Terms and Conditions apply to the renovation services provided by {BUSINESS.name}. By engaging our services you agree to the terms set out below. Specific details for your project will be confirmed in your written quote and agreement.</p>

          <h2>Quotes and pricing</h2>
          <p>We provide a written quote based on the scope discussed during your consultation. The quoted price is fixed for the agreed scope of work. Prices are valid for the period stated on the quote and may be subject to review after that time.</p>

          <h2>Scope of work and variations</h2>
          <p>The work we carry out is limited to what is described in your quote. If you request changes, or if unforeseen issues are uncovered once work begins, we will discuss any variation with you and agree the additional cost in writing before proceeding.</p>

          <h2>Payments</h2>
          <p>Payment terms, including any deposit and progress payments, are set out in your quote or agreement. Payments are due by the dates specified. Work may be paused if agreed payments are not received.</p>

          <h2>Client responsibilities</h2>
          <p>To help your project run smoothly, we ask that you provide reasonable access to the work areas, make timely decisions on selections, and keep the relevant spaces clear where possible during the renovation.</p>

          <h2>Workmanship and warranties</h2>
          <p>We stand behind the quality of our workmanship and use licensed trades for all specialist work, including plumbing, electrical and waterproofing. Manufacturer warranties apply to supplied products and appliances as provided by their makers.</p>

          <h2>Liability</h2>
          <p>We carry out our work with due care and skill. To the extent permitted by law, our liability is limited to rectifying defective workmanship within the agreed scope. Nothing in these terms excludes rights you have under Australian Consumer Law.</p>

          <h2>Cancellations</h2>
          <p>If you need to cancel or postpone your project, please let us know as early as possible. Any costs already incurred, including custom orders and materials, may be payable.</p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of Victoria, Australia.</p>

          <h2>Contact us</h2>
          <p>For any questions about these Terms and Conditions, please contact us at {BUSINESS.phoneDisplay} or {BUSINESS.email}. Our address is {BUSINESS.addressLine}.</p>
        </div>
      </section>
    </>
  )
}
