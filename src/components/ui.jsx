import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, MoveHorizontal, ShieldCheck,
  Users, Ruler, MapPin, FileText, BadgeCheck, Check,
} from 'lucide-react'
import { TRUST, COUNTERS } from '../data/site.js'
import beforeImg from '../assets/before.jpg'
import afterImg from '../assets/after.jpg'
import decorVase from '../assets/decor-vase.png'

const ICONS = { users: Users, ruler: Ruler, map: MapPin, file: FileText, badge: BadgeCheck }

export function BtnLink({ to, children, variant = 'solid', arrow = false, className = '' }) {
  const internal = to.startsWith('/')
  const cls = `btn btn-${variant} ${className}`
  const inner = (<>{children}{arrow && <ArrowRight size={16} />}</>)
  return internal
    ? <Link to={to} className={cls}>{inner}</Link>
    : <a href={to} className={cls}>{inner}</a>
}

export function TextLink({ to, children }) {
  const internal = to.startsWith('/')
  const inner = <>{children} <ArrowRight size={15} /></>
  return internal
    ? <Link to={to} className="text-link">{inner}</Link>
    : <a href={to} className="text-link">{inner}</a>
}

export function Eyebrow({ children, center }) {
  return <p className={`eyebrow ${center ? 'center' : ''}`}>{children}</p>
}

export function SectionTitle({ children, center, as: Tag = 'h2' }) {
  return <Tag className={`section-title ${center ? 'center' : ''}`}>{children}</Tag>
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt = '' }) {
  return (
    <section className="page-hero">
      {image && (
        <>
          <div className="page-hero-bg" style={{ backgroundImage: `url(${image})` }} role="img" aria-label={imageAlt} />
          <div className="page-hero-overlay" />
        </>
      )}
      <div className="container page-hero-inner">
        {eyebrow && <p className="eyebrow light">{eyebrow}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}

export function TrustStrip({ float = true }) {
  return (
    <div className="container">
      <div className={`trust-bar ${float ? 'trust-float' : ''}`}>
        {TRUST.map(({ icon, top, bottom }) => {
          const Icon = ICONS[icon]
          return (
            <div className="trust-item" key={top + bottom}>
              <Icon size={30} strokeWidth={1.4} className="trust-icon" />
              <div className="trust-label"><span>{top}</span><span>{bottom}</span></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TrustCounters() {
  return (
    <div className="counters">
      {COUNTERS.map(({ value, label }) => (
        <div className="counter" key={label}>
          <span className="counter-value">{value}</span>
          <span className="counter-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

export function FreeBanner() {
  const items = ['FREE Consultation', 'FREE Site Visit', 'FREE Detailed Quote']
  return (
    <div className="free-banner">
      {items.map((t) => (
        <span className="free-item" key={t}><Check size={15} strokeWidth={3} /> {t}</span>
      ))}
    </div>
  )
}

export function CTABand({
  title = 'Ready to transform your home?',
  text = 'Book your FREE consultation, site visit and detailed quote today. No cost, no obligation.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <SectionTitle>{title}</SectionTitle>
          <p className="cta-band-text">{text}</p>
        </div>
        <div className="cta-band-actions">
          <BtnLink to="/contact" arrow>BOOK YOUR FREE CONSULTATION</BtnLink>
          <BtnLink to="/our-work" variant="outline-light">VIEW OUR WORK</BtnLink>
        </div>
      </div>
    </section>
  )
}

export function BeforeAfterSlider() {
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
        <img src={beforeImg} alt="Bathroom before renovation" className="ba-img" draggable="false" />
      </div>
      <div className="ba-pane ba-pane-right">
        <img src={afterImg} alt="Bathroom after renovation" className="ba-img" draggable="false" />
      </div>
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <span className="ba-handle-btn"><MoveHorizontal size={16} /></span>
      </div>
    </div>
  )
}

export function BeforeAfterSection() {
  const stats = [
    { value: '3', label1: 'WEEKS', label2: 'Average Project' },
    { value: '100%', label1: 'CLIENT', label2: 'Satisfaction' },
    { value: '25%', label1: 'MORE', label2: 'Storage Space' },
  ]
  return (
    <section className="before-after section">
      <div className="container ba-layout">
        <div className="ba-copy">
          <Eyebrow>BEFORE &amp; AFTER</Eyebrow>
          <SectionTitle>Real transformations.<br />Real results.</SectionTitle>
        </div>
        <BeforeAfterSlider />
        <div className="ba-stats">
          {stats.map(({ value, label1, label2 }) => (
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
