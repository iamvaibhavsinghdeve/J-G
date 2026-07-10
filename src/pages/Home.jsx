import { Link } from 'react-router-dom'
import { Ruler, CheckCircle2, BadgeCheck, Check } from 'lucide-react'
import useSEO from '../hooks/useSEO.js'
import {
  Eyebrow, SectionTitle, BtnLink, TextLink, TrustStrip, TrustCounters, FreeBanner, BeforeAfterSection,
} from '../components/ui.jsx'
import { HomeContactSection } from '../components/ContactForm.jsx'
import { BUSINESS, WHY_CHOOSE } from '../data/site.js'

import heroImg from '../assets/kitchen-1.jpg'
import aboutImg from '../assets/kitchen-2.jpg'
import kitchenCard from '../assets/kitchen-3.jpg'
import bathroomCard from '../assets/bathroom-3.jpg'
import laundryCard from '../assets/service-laundry.png'
import work1 from '../assets/kitchen-2.jpg'
import work2 from '../assets/kitchen-3.jpg'
import work3 from '../assets/bathroom-1.jpg'
import work4 from '../assets/bathroom-2.jpg'
import work5 from '../assets/bathroom-3.jpg'
import work6 from '../assets/service-laundry.png'

const SERVICES = [
  { img: kitchenCard, icon: Ruler, title: 'KITCHEN RENOVATIONS', text: 'Smart layouts and premium finishes that make every meal a joy.', to: '/services/kitchen-renovations', link: 'EXPLORE KITCHENS' },
  { img: bathroomCard, icon: CheckCircle2, title: 'BATHROOM RENOVATIONS', text: 'Stylish, practical bathrooms designed for comfort and relaxation.', to: '/services/bathroom-renovations', link: 'EXPLORE BATHROOMS' },
  { img: laundryCard, icon: BadgeCheck, title: 'LAUNDRY RENOVATIONS', text: 'Clever storage and efficient layouts for a clutter free home.', to: '/services/laundry-renovations', link: 'EXPLORE LAUNDRY' },
]

const WORK = [work1, work2, work3, work4, work5, work6]

export default function Home() {
  useSEO(
    '',
    'J&G Design Group delivers premium kitchen, bathroom and laundry renovations across Melbourne with over 20 years of experience. FREE consultation, site visit and detailed quote. Call 0417 577 553.'
  )

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} role="img" aria-label="Modern renovated Melbourne kitchen with stone island bench" />
        <div className="hero-fade" />
        <div className="container hero-content">
          <p className="eyebrow">KITCHEN. BATHROOM. LAUNDRY.</p>
          <h1 className="hero-title">Beautiful spaces.<br /><span className="green">Better living.</span></h1>
          <p className="hero-text">Premium renovations in Melbourne backed by over 20 years of experience, combining style, function and quality craftsmanship.</p>
          <div className="hero-actions">
            <BtnLink to="/contact" arrow>BOOK A FREE CONSULTATION</BtnLink>
            <BtnLink to="/our-work" variant="outline">VIEW OUR WORK</BtnLink>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* About preview + counters */}
      <section className="section">
        <div className="container two-col">
          <div className="two-col-text">
            <Eyebrow>ABOUT J&amp;G DESIGN GROUP</Eyebrow>
            <SectionTitle>Over 20 years of quality renovations across Melbourne.</SectionTitle>
            <p>At J&amp;G Design Group, we specialise in creating beautiful, functional spaces through expertly crafted kitchen, bathroom and laundry renovations tailored to suit every home and lifestyle.</p>
            <p>{BUSINESS.description} From your initial consultation through to the final handover, our experienced team works closely with you to ensure every detail is completed to the highest standard, on time and within budget.</p>
            <TrustCounters />
            <div className="center-btn" style={{ justifyContent: 'flex-start', marginTop: 32 }}>
              <BtnLink to="/about" variant="outline">MORE ABOUT US</BtnLink>
            </div>
          </div>
          <div className="two-col-media">
            <img src={aboutImg} alt="Completed white kitchen renovation in Melbourne" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services section alt-bg">
        <div className="container">
          <Eyebrow center>OUR SERVICES</Eyebrow>
          <SectionTitle center>Renovations tailored to your lifestyle.</SectionTitle>
          <div className="services-grid">
            {SERVICES.map(({ img, icon: Icon, title, text, to, link }) => (
              <article className="service-card" key={title}>
                <Link to={to} className="service-media">
                  <img src={img} alt={title.toLowerCase()} loading="lazy" />
                  <span className="service-badge"><Icon size={20} strokeWidth={1.8} /></span>
                </Link>
                <div className="service-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <TextLink to={to}>{link}</TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us (8 points) */}
      <section className="why section">
        <div className="container">
          <div className="why-head">
            <Eyebrow>WHY CHOOSE US</Eyebrow>
            <SectionTitle>Why homeowners choose J&amp;G Design Group.</SectionTitle>
            <p className="why-intro">Our reputation has been built on honesty, reliability, quality workmanship and exceptional customer service.</p>
          </div>
          <div className="why-list">
            {WHY_CHOOSE.map((point) => (
              <div className="why-point" key={point}>
                <span className="why-check"><Check size={15} strokeWidth={3} /></span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our work preview */}
      <section className="work section alt-bg">
        <div className="container">
          <div className="work-head">
            <div>
              <Eyebrow>OUR WORK</Eyebrow>
              <SectionTitle>Recent Renovation Projects.</SectionTitle>
            </div>
            <TextLink to="/our-work">VIEW ALL PROJECTS</TextLink>
          </div>
          <div className="work-grid">
            {WORK.map((img, i) => (
              <figure className="work-item" key={i}>
                <img src={img} alt={`Recent Melbourne renovation ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSection />

      {/* Free banner + CTA */}
      <section className="section free-cta-section">
        <div className="container">
          <SectionTitle center>Ready to transform your home?</SectionTitle>
          <p className="lead center">Your consultation, site visit and detailed quote are completely FREE with no obligation.</p>
          <FreeBanner />
          <div className="center-btn"><BtnLink to="/contact" arrow>BOOK YOUR FREE CONSULTATION</BtnLink></div>
        </div>
      </section>

      <HomeContactSection />
    </>
  )
}
