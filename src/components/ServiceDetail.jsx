import { useState } from 'react'
import { Check, Plus, Minus } from 'lucide-react'
import { PageHero, Eyebrow, SectionTitle, CTABand } from './ui.jsx'

function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{item.q}</span>
            {open === i ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <div className="faq-a"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function ServiceDetail({
  eyebrow, title, subtitle, heroImg, heroAlt,
  intro = [], benefits = [], includes = [], gallery = [], faq = [], includesTitle = 'What your renovation includes',
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={heroImg} imageAlt={heroAlt} />

      <section className="section">
        <div className="container two-col">
          <div className="two-col-text">
            <Eyebrow>OVERVIEW</Eyebrow>
            <SectionTitle>{`A ${eyebrow.toLowerCase()} managed end to end.`}</SectionTitle>
            {intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="two-col-side">
            <ul className="tick-list">
              {benefits.map((b) => (
                <li key={b}><span className="tick"><Check size={13} strokeWidth={3} /></span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <Eyebrow center>INCLUSIONS</Eyebrow>
          <SectionTitle center>{includesTitle}</SectionTitle>
          <div className="includes-grid">
            {includes.map(({ title: t, text }) => (
              <div className="include-card" key={t}>
                <h3>{t}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <Eyebrow center>GALLERY</Eyebrow>
            <SectionTitle center>Recent projects</SectionTitle>
            <div className="gallery-grid">
              {gallery.map(({ src, alt }, i) => (
                <figure className="gallery-item" key={i}>
                  <img src={src} alt={alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section className="section alt-bg">
          <div className="container faq-wrap">
            <Eyebrow center>FAQ</Eyebrow>
            <SectionTitle center>Frequently asked questions</SectionTitle>
            <FAQ items={faq} />
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
