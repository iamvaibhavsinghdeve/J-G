import useSEO from '../hooks/useSEO.js'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero, Eyebrow, SectionTitle } from '../components/ui.jsx'
import { ContactForm } from '../components/ContactForm.jsx'
import { BUSINESS } from '../data/site.js'
import heroImg from '../assets/bathroom-3.jpg'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`

export default function Contact() {
  useSEO(
    'Contact Us',
    'Contact J&G Design Group for kitchen, bathroom and laundry renovations in Melbourne. Call 0417 577 553 or book your free consultation online. Based in Mill Park, open Monday to Friday.'
  )

  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Let us talk about your renovation."
        subtitle="Book a free, no obligation consultation or get in touch with any questions. We would love to help."
        image={heroImg}
        imageAlt="Renovated bathroom with freestanding bath"
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <SectionTitle>We are here to help.</SectionTitle>
            <p className="contact-lead">Call us during business hours, send an email, or fill out the form and we will get back to you as soon as we can.</p>

            <ul className="contact-details">
              <li>
                <span className="contact-ico"><Phone size={18} /></span>
                <div><strong>Phone</strong><a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></div>
              </li>
              <li>
                <span className="contact-ico"><Mail size={18} /></span>
                <div><strong>Email</strong><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
              </li>
              <li>
                <span className="contact-ico"><MapPin size={18} /></span>
                <div><strong>Address</strong><span>{BUSINESS.addressLine}</span></div>
              </li>
              <li>
                <span className="contact-ico"><Clock size={18} /></span>
                <div><strong>Hours</strong><span>{BUSINESS.hoursLong}</span></div>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            <p className="form-title">BOOK YOUR FREE CONSULTATION</p>
            <ContactForm compact />
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="J&G Design Group location"
          src={mapSrc}
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
