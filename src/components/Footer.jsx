import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ShieldCheck, BadgeCheck } from 'lucide-react'
import { BUSINESS, SERVICE_AREAS } from '../data/site.js'
import logoImg from '../assets/logo.png'

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.49-1.46h1.6V4.46c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.41-3.9 4v2.16H7.75v3h2.6V21h3.15z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM20.5 13.9c0-3.2-1.71-4.7-4-4.7-1.84 0-2.66 1.01-3.12 1.72V8.5H10v12.5h3.38v-6.98c0-1.85.85-2.95 2.28-2.95 1.31 0 1.96.92 1.96 2.95V21h3.38v-7.1z" />
    </svg>
  )
}

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

const SERVICES = [
  { label: 'Kitchen Renovations', to: '/services/kitchen-renovations' },
  { label: 'Bathroom Renovations', to: '/services/bathroom-renovations' },
  { label: 'Laundry Renovations', to: '/services/laundry-renovations' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo"><img src={logoImg} alt="J&G Design Group" /></Link>
          <p>Specialists in kitchen, bathroom and laundry renovations across Melbourne.</p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>{QUICK_LINKS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>

        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>{SERVICES.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>

        <div className="footer-col">
          <h4>SERVICE AREAS</h4>
          <ul>
            {SERVICE_AREAS.map((a) => (
              <li key={a.name}><Link to="/service-areas">{a.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT US</h4>
          <ul className="footer-contact">
            <li><Phone size={14} /><a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></li>
            <li><Mail size={14} /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
            <li><MapPin size={14} /><span>{BUSINESS.addressLine}</span></li>
            <li><Clock size={14} /><span>{BUSINESS.hoursLong}</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>LICENSED &amp; ACCREDITED</h4>
          <div className="accreditations">
            <div className="accreditation">
              <ShieldCheck size={26} strokeWidth={1.6} />
              <div><strong>REGISTERED</strong><span>Building Practitioner</span><span>VIC</span></div>
            </div>
            <div className="accreditation">
              <BadgeCheck size={26} strokeWidth={1.6} />
              <div><strong>MASTER</strong><span>BUILDERS</span><span>VICTORIA</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} J &amp; G Design Group. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="sep">|</span>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
