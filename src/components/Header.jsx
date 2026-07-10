import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { NAV, BUSINESS } from '../data/site.js'
import logoImg from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false); setServicesOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo"><img src={logoImg} alt="J&G Design Group" /></Link>

        <nav className={`main-nav ${open ? 'open' : ''}`}>
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    // On mobile, first tap toggles the submenu
                    if (window.innerWidth <= 900) { e.preventDefault(); setServicesOpen((s) => !s) }
                  }}
                >
                  {item.label} <ChevronDown size={13} strokeWidth={2.4} />
                </NavLink>
                <div className="dropdown-menu">
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to} className="dropdown-item">{c.label}</NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}

          <div className="nav-mobile-extra">
            <a href={BUSINESS.phoneHref} className="header-phone">
              <Phone size={15} /> {BUSINESS.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-solid btn-header">BOOK A CONSULTATION</Link>
          </div>
        </nav>

        <div className="header-right">
          <a href={BUSINESS.phoneHref} className="header-phone">
            <Phone size={15} /> {BUSINESS.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-solid btn-header">BOOK A CONSULTATION</Link>
        </div>

        <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
