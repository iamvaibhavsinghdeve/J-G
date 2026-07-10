import { useState } from 'react'
import { MapPin, Plus, Minus, Check } from 'lucide-react'
import useSEO from '../hooks/useSEO.js'
import { PageHero, Eyebrow, SectionTitle, CTABand } from '../components/ui.jsx'
import { SERVICE_AREAS, AREA_FAQ, WHY_CHOOSE } from '../data/site.js'
import heroImg from '../assets/kitchen-3.jpg'
import img1 from '../assets/kitchen-1.jpg'
import img2 from '../assets/bathroom-1.jpg'
import img3 from '../assets/kitchen-2.jpg'
import img4 from '../assets/bathroom-3.jpg'
import img5 from '../assets/kitchen-3.jpg'
import img6 from '../assets/bathroom-2.jpg'

const AREA_IMAGES = [img1, img2, img3, img4, img5, img6]

function AreaFAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {AREA_FAQ.map((item, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{item.q}</span>{open === i ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <div className="faq-a"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function ServiceAreas() {
  useSEO(
    'Service Areas',
    'J&G Design Group provides premium kitchen, bathroom and laundry renovations across Melbourne CBD, the Eastern Suburbs, Bayside, Northern Suburbs, Western Suburbs and the Mornington Peninsula.'
  )

  return (
    <>
      <PageHero
        eyebrow="SERVICE AREAS"
        title="Areas we service across Melbourne."
        subtitle="Premium kitchen, bathroom and laundry renovations for homeowners right across the greater Melbourne area."
        image={heroImg}
        imageAlt="Renovated kitchen with island bench"
      />

      <section className="section">
        <div className="container">
          <p className="lead center">J&amp;G Design Group proudly provides premium kitchen, bathroom and laundry renovation services across Melbourne. We currently service Melbourne CBD, the Eastern Suburbs, Bayside, Northern Suburbs, Western Suburbs and the Mornington Peninsula, with the same commitment to quality workmanship, transparent communication and exceptional customer service everywhere we work.</p>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="areas-alt">
            {SERVICE_AREAS.map((a, i) => (
              <div className={`area-row ${i % 2 ? 'reverse' : ''}`} key={a.name}>
                <div className="area-row-media">
                  <img src={AREA_IMAGES[i]} alt={`${a.name} renovation`} loading="lazy" />
                </div>
                <div className="area-row-body">
                  <span className="area-pin"><MapPin size={18} /> {a.name}</span>
                  <h3>{a.heading}</h3>
                  <p>{a.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Eyebrow center>WHY HOMEOWNERS CHOOSE US</Eyebrow>
          <SectionTitle center>The same standard, wherever you are.</SectionTitle>
          <div className="why-list">
            {WHY_CHOOSE.map((point) => (
              <div className="why-point" key={point}>
                <span className="why-check"><Check size={15} strokeWidth={3} /></span>{point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container faq-wrap">
          <Eyebrow center>FAQ</Eyebrow>
          <SectionTitle center>Frequently asked questions</SectionTitle>
          <AreaFAQ />
        </div>
      </section>

      <CTABand title="Ready to transform your home?" text="Contact J&G Design Group today to book your FREE consultation, FREE site visit and FREE no-obligation quote." />
    </>
  )
}
