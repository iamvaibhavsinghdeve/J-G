import { Check, Clock, MapPin, Phone } from 'lucide-react'
import useSEO from '../hooks/useSEO.js'
import { PageHero, Eyebrow, SectionTitle, TrustCounters, CTABand, BtnLink } from '../components/ui.jsx'
import { BUSINESS, WHY_CHOOSE } from '../data/site.js'
import heroImg from '../assets/kitchen-2.jpg'
import sideImg from '../assets/bathroom-3.jpg'

export default function About() {
  useSEO(
    'About Us',
    'J&G Design Group has over 20 years of experience delivering quality kitchen, bathroom and laundry renovations across Melbourne. Honest, reliable renovation specialists managing your project from start to finish.'
  )

  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="Over 20 years of delivering quality renovations across Melbourne."
        subtitle="Trusted renovation specialists creating beautiful, functional kitchens, bathrooms and laundries for homes right across Melbourne."
        image={heroImg}
        imageAlt="Renovated white kitchen by J&G Design Group"
      />

      <section className="section">
        <div className="container two-col">
          <div className="two-col-text">
            <Eyebrow>OUR STORY</Eyebrow>
            <SectionTitle>Quality workmanship and attention to every detail.</SectionTitle>
            <p>At J&amp;G Design Group, we have over 20 years of industry experience delivering high-quality residential renovations across Melbourne. We specialise in creating beautiful, functional spaces through expertly crafted kitchen renovations, bathroom renovations and laundry renovations tailored to suit every home and lifestyle.</p>
            <p>We understand that renovating your home is a significant investment. That is why we are committed to making the entire process simple, transparent and stress free. From your initial consultation through to the final handover, our experienced team works closely with you to ensure every detail is completed to the highest standard.</p>
            <p>Whether you are looking to modernise an outdated kitchen, create a luxurious bathroom, or maximise the functionality of your laundry, we combine premium materials, skilled craftsmanship and innovative design solutions to bring your vision to life.</p>
            <p>Our reputation has been built on honesty, reliability, quality workmanship and exceptional customer service. Every project is carefully planned and professionally managed to ensure it is delivered on time, within budget and with minimal disruption to your home. We do not just renovate homes, we create spaces where families can live, entertain and make lasting memories.</p>
            <div className="about-facts">
              <div className="about-fact"><Phone size={18} /><span>{BUSINESS.phoneDisplay}</span></div>
              <div className="about-fact"><MapPin size={18} /><span>{BUSINESS.addressLine}</span></div>
              <div className="about-fact"><Clock size={18} /><span>{BUSINESS.hoursLong}</span></div>
            </div>
          </div>
          <div className="two-col-media">
            <img src={sideImg} alt="Freestanding bath in a renovated Melbourne bathroom" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <Eyebrow center>WHY CHOOSE J&amp;G DESIGN GROUP</Eyebrow>
          <SectionTitle center>Built on quality, trust and experience.</SectionTitle>
          <TrustCounters />
          <div className="why-list" style={{ marginTop: 44 }}>
            {WHY_CHOOSE.map((point) => (
              <div className="why-point" key={point}>
                <span className="why-check"><Check size={15} strokeWidth={3} /></span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mission">
          <SectionTitle center>Our promise to you</SectionTitle>
          <p className="mission-text">If you are looking for trusted renovation specialists in Melbourne, let our experienced team transform your home with quality workmanship and attention to every detail. Clear communication, tidy work sites, respect for your home, and a finish we are proud to put our name to, every time.</p>
          <div className="center-btn"><BtnLink to="/process" variant="outline">SEE HOW WE WORK</BtnLink></div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
