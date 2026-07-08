import { useRef, useState, useEffect } from 'react'
import {
  Phone, Menu, X, ChevronDown, ArrowRight, MoveHorizontal,
  Users, Ruler, MapPin, FileText, BadgeCheck, ShieldCheck,
  CheckCircle2, Check, Mail,
} from 'lucide-react'

import heroImg from './assets/hero.png'
import svcKitchen from './assets/service-kitchen.png'
import svcBathroom from './assets/service-bathroom.png'
import svcLaundry from './assets/service-laundry.png'
import work1 from './assets/work-1.png'
import work2 from './assets/work-2.png'
import work3 from './assets/work-3.png'
import work4 from './assets/work-4.png'
import work5 from './assets/work-5.png'
import work6 from './assets/work-6.png'
import work7 from './assets/work-7.png'
import work8 from './assets/work-8.png'
import beforeImg from './assets/before.png'
import afterImg from './assets/after.png'
import decorVase from './assets/decor-vase.png'
import decorPlant from './assets/decor-plant.png'
import logo from './assets/logo.png';


/* ------------------------------ Brand icons -------------------------------- */
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.49-1.46h1.6V4.46c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.41-3.9 4v2.16H7.75v3h2.6V21h3.15z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM20.5 13.9c0-3.2-1.71-4.7-4-4.7-1.84 0-2.66 1.01-3.12 1.72V8.5H10v12.5h3.38v-6.98c0-1.85.85-2.95 2.28-2.95 1.31 0 1.96.92 1.96 2.95V21h3.38v-7.1z" />
  </svg>
)

/* ---------------------------------- Logo ---------------------------------- */
function Logo({ className = "" }) {
  return (
    <a href="#home" className={`logo ${className}`}>
      <img
        src={logo}
        alt="J&G Design Group"
        className="logo-image"
      />
    </a>
  );
}

/* --------------------------------- Header --------------------------------- */
const NAV = ['HOME', 'ABOUT US', 'SERVICES', 'OUR WORK', 'REVIEWS', 'PROCESS', 'CONTACT']

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`main-nav ${open ? 'open' : ''}`}>
          {NAV.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className={`nav-link ${i === 0 ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item}
              {item === 'SERVICES' && <ChevronDown size={13} strokeWidth={2.4} />}
            </a>
          ))}
          <div className="nav-mobile-extra">
            <a href="tel:+61417577553" className="header-phone">
              <Phone size={15} /> +61 417 577 553
            </a>
            <a href="#contact" className="btn btn-solid btn-header" onClick={() => setOpen(false)}>
              BOOK A CONSULTATION
            </a>
          </div>
        </nav>
        <div className="header-right">
          <a href="tel:+61417577553" className="header-phone">
            <Phone size={15} /> +61 417 577 553
          </a>
          <a href="#contact" className="btn btn-solid btn-header">BOOK A CONSULTATION</a>
        </div>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

/* ---------------------------------- Hero ----------------------------------- */
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero-fade" />
      <div className="container hero-content">
        <p className="eyebrow">KITCHEN. BATHROOM. LAUNDRY.</p>
        <h1 className="hero-title">
          Beautiful spaces.<br />
          <span className="green">Better living.</span>
        </h1>
        <p className="hero-text">
          Premium renovations in Melbourne that combine style, function and
          quality craftsmanship.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">
            BOOK A FREE CONSULTATION <ArrowRight size={16} />
          </a>
          <a href="#our-work" className="btn btn-outline">VIEW OUR WORK</a>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- Trust bar -------------------------------- */
const TRUST = [
  { icon: Users, top: 'FAMILY-OWNED', bottom: 'BUSINESS' },
  { icon: Ruler, top: 'CUSTOM', bottom: 'RENOVATIONS' },
  { icon: MapPin, top: 'MELBOURNE', bottom: 'WIDE' },
  { icon: FileText, top: 'FIXED', bottom: 'QUOTE' },
  { icon: BadgeCheck, top: 'QUALITY', bottom: 'GUARANTEED' },
]

function TrustBar() {
  return (
    <div className="container">
      <div className="trust-bar">
        {TRUST.map(({ icon: Icon, top, bottom }) => (
          <div className="trust-item" key={top}>
            <Icon size={30} strokeWidth={1.4} className="trust-icon" />
            <div className="trust-label">
              <span>{top}</span>
              <span>{bottom}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------- Services --------------------------------- */
const SERVICES = [
  {
    img: svcKitchen,
    icon: Ruler,
    title: 'KITCHEN RENOVATIONS',
    text: 'Smart layouts and beautiful finishes that make every meal a joy.',
    link: 'EXPLORE KITCHENS',
  },
  {
    img: svcBathroom,
    icon: CheckCircle2,
    title: 'BATHROOM RENOVATIONS',
    text: 'Stylish, practical bathrooms designed for comfort and relaxation.',
    link: 'EXPLORE BATHROOMS',
  },
  {
    img: svcLaundry,
    icon: BadgeCheck,
    title: 'LAUNDRY RENOVATIONS',
    text: 'Clever storage and efficient layouts for a clutter free home.',
    link: 'EXPLORE LAUNDRY',
  },
]

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <p className="eyebrow center">OUR SERVICES</p>
        <h2 className="section-title center">Renovations tailored to your lifestyle.</h2>
        <div className="services-grid">
          {SERVICES.map(({ img, icon: Icon, title, text, link }) => (
            <article className="service-card" key={title}>
              <div className="service-media">
                <img src={img} alt={title} loading="lazy" />
                <span className="service-badge"><Icon size={20} strokeWidth={1.8} /></span>
              </div>
              <div className="service-body">
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact" className="text-link">
                  {link} <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------- Our work -------------------------------- */
const WORK = [work1, work2, work3, work4, work5, work6, work7, work8]

function OurWork() {
  return (
    <section className="work section" id="our-work">
      <div className="container">
        <div className="work-head">
          <div>
            <p className="eyebrow">OUR WORK</p>
            <h2 className="section-title">Recent Renovation Projects.</h2>
          </div>
          <a href="#contact" className="text-link">
            VIEW ALL PROJECTS <ArrowRight size={15} />
          </a>
        </div>
        <div className="work-grid">
          {WORK.map((img, i) => (
            <figure className="work-item" key={i}>
              <img src={img} alt={`Renovation project ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Before / After ----------------------------- */
function BeforeAfterSlider() {
  const wrapRef = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const update = (clientX) => {
    const rect = wrapRef.current.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    setPos((x / rect.width) * 100)
  }

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return
      update(e.touches ? e.touches[0].clientX : e.clientX)
    }
    const up = () => { dragging.current = false }
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [])

  return (
    <div
      className="ba-slider"
      ref={wrapRef}
      onMouseDown={(e) => { dragging.current = true; update(e.clientX) }}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX) }}
    >
      <div className="ba-pane" style={{ width: `${pos}%` }}>
        <img src={beforeImg} alt="Before renovation" className="ba-img" draggable="false" />
      </div>
      <div className="ba-pane ba-pane-right">
        <img src={afterImg} alt="After renovation" className="ba-img" draggable="false" />
      </div>
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <span className="ba-handle-btn"><MoveHorizontal size={16} /></span>
      </div>
    </div>
  )
}

const STATS = [
  { value: '3', label1: 'WEEKS', label2: 'Average Project' },
  { value: '100%', label1: 'CLIENT', label2: 'Satisfaction' },
  { value: '25%', label1: 'MORE', label2: 'Storage Space' },
]

function BeforeAfter() {
  return (
    <section className="before-after section" id="process">
      <div className="container ba-layout">
        <div className="ba-copy">
          <p className="eyebrow">BEFORE &amp; AFTER</p>
          <h2 className="section-title">Real transformations.<br />Real results.</h2>
        </div>
        <BeforeAfterSlider />
        <div className="ba-stats">
          {STATS.map(({ value, label1, label2 }) => (
            <div className="stat" key={label2}>
              <ShieldCheck size={34} strokeWidth={1.4} className="stat-icon" />
              <div>
                <span className="stat-value">{value}</span>
                <span className="stat-label1">{label1}</span>
                <span className="stat-label2">{label2}</span>
              </div>
            </div>
          ))}
        </div>
        <img src={decorVase} alt="" className="ba-decor" aria-hidden="true" />
      </div>
    </section>
  )
}

/* ------------------------------- CTA / Contact ------------------------------ */
const BENEFITS = [
  'Free in-home consultation',
  'Expert advice & design ideas',
  'No obligation, ever',
  'Transparent fixed quotes',
]

function ContactCTA() {
  const [types, setTypes] = useState([])
  const toggle = (t) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  return (
    <section className="cta section" id="contact">
      <div className="container cta-layout">
        <div className="cta-left">
          <img src={decorPlant} alt="" className="cta-decor" aria-hidden="true" />
          <h2 className="section-title">
            Let&rsquo;s create something<br />
            <span className="green-italic">incredible</span> together.
          </h2>
          <p className="cta-text">
            Book your free consultation today and take the first step towards
            your dream space.
          </p>
        </div>

        <form
          className="cta-form"
          name="consultation"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="consultation" />
          <p className="form-title">BOOK YOUR FREE CONSULTATION</p>
          <div className="form-row">
            <input type="text" name="fullName" placeholder="Full Name *" required />
            <input type="tel" name="phone" placeholder="Phone Number *" required />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Email Address *" required />
            <select name="renovationType" defaultValue="">
              <option value="" disabled>What type of renovation are you considering?</option>
              <option value="kitchen">Kitchen renovation</option>
              <option value="bathroom">Bathroom renovation</option>
              <option value="laundry">Laundry renovation</option>
              <option value="multiple">Multiple rooms</option>
            </select>
          </div>
          <div className="form-checks">
            {['Kitchen', 'Bathroom', 'Laundry'].map((t) => (
              <label key={t} className="check">
                <input
                  type="checkbox"
                  name="rooms"
                  value={t}
                  checked={types.includes(t)}
                  onChange={() => toggle(t)}
                />
                <span className="check-box" />
                {t}
              </label>
            ))}
          </div>
          <textarea name="message" placeholder="Tell us about your project" rows={3} />
          <button type="submit" className="btn btn-solid btn-full">
            SEND ENQUIRY <ArrowRight size={16} />
          </button>
        </form>

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

/* --------------------------------- Footer ---------------------------------- */
const FOOTER_COLS = [
  {
    title: 'QUICK LINKS',
    links: ['Home', 'About Us', 'Services', 'Our Work', 'Reviews', 'Process', 'Contact'],
  },
  {
    title: 'SERVICES',
    links: ['Kitchen Renovations', 'Bathroom Renovations', 'Laundry Renovations'],
  },
  {
    title: 'SERVICE AREAS',
    links: ['Melbourne CBD', 'Eastern Suburbs', 'Bayside', 'Northern Suburbs', 'Western Suburbs', 'Mornington Peninsula'],
  },
]

function Footer() {
  return (
    <footer className="site-footer" id="about-us">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Specialists in kitchen, bathroom and laundry renovations across
            Melbourne.
          </p>
          <div className="socials">
            <a href="#home" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#home" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#home" aria-label="Pinterest">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 19l2.5-8.5" />
                <path d="M11 10.5c.4-1.4 1.8-2.2 3-1.7 1.5.6 1.8 2.4.9 3.8-.8 1.2-2.2 1.6-3.2 1.1" />
              </svg>
            </a>
            <a href="#home" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        {FOOTER_COLS.map(({ title, links }) => (
          <div className="footer-col" key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}><a href="#home">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col">
          <h4>CONTACT US</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={14} />
              <a href="tel:+61417577553">+61 417 577 553</a>
            </li>
            <li>
              <Mail size={14} />
              <a href="mailto:info@jandgdesigngroup.com.au">info@jandgdesigngroup.com.au</a>
            </li>
            <li>
              <MapPin size={14} />
              <span>Melbourne, VIC</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>LICENSED &amp; ACCREDITED</h4>
          <div className="accreditations">
            <div className="accreditation">
              <ShieldCheck size={26} strokeWidth={1.6} />
              <div>
                <strong>REGISTERED</strong>
                <span>Building Practitioner</span>
                <span>VIC</span>
              </div>
            </div>
            <div className="accreditation">
              <BadgeCheck size={26} strokeWidth={1.6} />
              <div>
                <strong>MASTER</strong>
                <span>BUILDERS</span>
                <span>VICTORIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 J &amp; G Design Group. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <span className="sep">|</span>
            <a href="#home">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------- App ----------------------------------- */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <OurWork />
        <BeforeAfter />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
