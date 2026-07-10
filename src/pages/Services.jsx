import { Link } from 'react-router-dom'
import { Ruler, CheckCircle2, BadgeCheck } from 'lucide-react'
import useSEO from '../hooks/useSEO.js'
import { PageHero, Eyebrow, SectionTitle, TextLink, CTABand } from '../components/ui.jsx'
import { BUSINESS } from '../data/site.js'
import heroImg from '../assets/kitchen-3.jpg'
import kitchenImg from '../assets/kitchen-1.jpg'
import bathroomImg from '../assets/bathroom-1.jpg'
import laundryImg from '../assets/service-laundry.png'

const SERVICES = [
  {
    img: kitchenImg, icon: Ruler, title: 'Kitchen Renovations', to: '/services/kitchen-renovations',
    text: 'Custom cabinetry, stone benchtops, quality appliances and smart layouts that turn the heart of your home into a space you love to cook and gather in.',
  },
  {
    img: bathroomImg, icon: CheckCircle2, title: 'Bathroom Renovations', to: '/services/bathroom-renovations',
    text: 'Full bathroom transformations including waterproofing, tiling, tapware, vanities, showers and freestanding baths, finished to a high standard.',
  },
  {
    img: laundryImg, icon: BadgeCheck, title: 'Laundry Renovations', to: '/services/laundry-renovations',
    text: 'Hard working laundries with clever storage, durable benchtops and efficient layouts that make everyday chores quicker and easier.',
  },
]

export default function Services() {
  useSEO(
    'Renovation Services',
    'Kitchen, bathroom and laundry renovation services across Melbourne. J&G Design Group manages your project from design to completion with quality trades and fixed pricing.'
  )

  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Kitchen, bathroom and laundry renovations."
        subtitle={BUSINESS.description}
        image={heroImg}
        imageAlt="Bright renovated kitchen with island bench"
      />

      <section className="section">
        <div className="container">
          <Eyebrow center>WHAT WE DO</Eyebrow>
          <SectionTitle center>Three services, one seamless experience.</SectionTitle>
          <p className="lead center">We specialise in the three rooms that add the most value and comfort to a home. Choose one, or combine all three into a single coordinated renovation managed by one team.</p>

          <div className="service-list">
            {SERVICES.map(({ img, icon: Icon, title, text, to }) => (
              <article className="service-row" key={title}>
                <Link to={to} className="service-row-media">
                  <img src={img} alt={title.toLowerCase()} loading="lazy" />
                </Link>
                <div className="service-row-body">
                  <span className="service-row-icon"><Icon size={24} strokeWidth={1.6} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <TextLink to={to}>LEARN MORE</TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
