import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { SectionTitle } from './ui.jsx'
import decorPlant from '../assets/decor-plant.png'
import decorVase from '../assets/decor-vase.png'

const BENEFITS = [
  'FREE in-home consultation',
  'FREE site visit and measure',
  'FREE detailed quote, no obligation',
  'Transparent, fixed pricing',
]

export function ContactForm({ compact = false }) {
  const [types, setTypes] = useState([])
  const toggle = (t) =>
    setTypes((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))

  return (
    <form className="cta-form" name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="consultation" />
      <p hidden><label>Do not fill this out: <input name="bot-field" /></label></p>
      {!compact && <p className="form-title">BOOK YOUR FREE CONSULTATION</p>}
      <div className="form-row">
        <input type="text" name="fullName" placeholder="Full Name *" required />
        <input type="tel" name="phone" placeholder="Phone Number *" required />
      </div>
      <input type="email" name="email" placeholder="Email Address *" className="form-full" required />
      <div className="form-checks">
        <span className="checks-label">Renovation type:</span>
        {['Kitchen', 'Bathroom', 'Laundry'].map((t) => (
          <label key={t} className="check">
            <input type="checkbox" name="rooms" value={t} checked={types.includes(t)} onChange={() => toggle(t)} />
            <span className="check-box" />
            {t}
          </label>
        ))}
      </div>
      <textarea name="message" placeholder="Tell us about your project" rows={compact ? 5 : 4} />
      <button type="submit" className="btn btn-solid btn-full">SEND ENQUIRY <ArrowRight size={16} /></button>
    </form>
  )
}

export function HomeContactSection() {
  return (
    <section className="cta section" id="contact">
      <div className="container cta-layout">
        <div className="cta-left">
          <img src={decorPlant} alt="" className="cta-decor" aria-hidden="true" />
          <SectionTitle>
            Let&rsquo;s create something<br />
            <span className="green-italic">incredible</span> together.
          </SectionTitle>
          <p className="cta-text">
            Book your FREE consultation, site visit and detailed quote today, and take the first step towards your dream space.
          </p>
        </div>

        <ContactForm />

        <ul className="cta-benefits">
          {BENEFITS.map((b) => (
            <li key={b}>
              <span className="benefit-icon"><Check size={13} strokeWidth={3} /></span>
              {b}
            </li>
          ))}
        </ul>
        <img src={decorVase} alt="" className="cta-vase" aria-hidden="true" />
      </div>
    </section>
  )
}
