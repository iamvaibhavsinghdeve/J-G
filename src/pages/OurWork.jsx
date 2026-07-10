import { useState } from 'react'
import useSEO from '../hooks/useSEO.js'
import { PageHero, SectionTitle, CTABand } from '../components/ui.jsx'
import kitchen1 from '../assets/kitchen-1.jpg'
import kitchen2 from '../assets/kitchen-2.jpg'
import kitchen3 from '../assets/kitchen-3.jpg'
import bathroom1 from '../assets/bathroom-1.jpg'
import bathroom2 from '../assets/bathroom-2.jpg'
import bathroom3 from '../assets/bathroom-3.jpg'
import laundry1 from '../assets/service-laundry.png'

const PROJECTS = [
  { src: kitchen1, cat: 'Kitchen', alt: 'Modern kitchen with waterfall stone island bench' },
  { src: kitchen2, cat: 'Kitchen', alt: 'Galley kitchen with herringbone timber flooring' },
  { src: kitchen3, cat: 'Kitchen', alt: 'White shaker kitchen with island and bar stools' },
  { src: bathroom1, cat: 'Bathroom', alt: 'Walk in shower with brushed copper tapware' },
  { src: bathroom2, cat: 'Bathroom', alt: 'Timber vanity with vessel basin and shelving' },
  { src: bathroom3, cat: 'Bathroom', alt: 'Double vanity with arched mirrors and freestanding bath' },
  { src: laundry1, cat: 'Laundry', alt: 'Renovated laundry with cabinetry and appliances' },
]

const FILTERS = ['All', 'Kitchen', 'Bathroom', 'Laundry']

export default function OurWork() {
  useSEO(
    'Our Work',
    'View recent kitchen, bathroom and laundry renovation projects completed by J&G Design Group across Melbourne. Real transformations, quality finishes.'
  )
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)

  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Recent renovation projects."
        subtitle="A selection of kitchens, bathrooms and laundries we have transformed for Melbourne homeowners."
        image={kitchen1}
        imageAlt="Recent renovated kitchen"
      />

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {shown.map((p, i) => (
              <figure className="portfolio-item" key={i}>
                <img src={p.src} alt={p.alt} loading="lazy" />
                <figcaption><span>{p.cat} Renovation</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Like what you see?" text="Book a free consultation and let us create a space you will love in your home." />
    </>
  )
}
