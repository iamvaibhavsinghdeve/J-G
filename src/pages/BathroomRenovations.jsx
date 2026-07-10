import useSEO from '../hooks/useSEO.js'
import ServiceDetail from '../components/ServiceDetail.jsx'
import heroImg from '../assets/bathroom-3.jpg'
import g1 from '../assets/bathroom-1.jpg'
import g2 from '../assets/bathroom-2.jpg'
import g3 from '../assets/bathroom-3.jpg'

export default function BathroomRenovations() {
  useSEO(
    'Bathroom Renovations Melbourne',
    'Full bathroom renovations across Melbourne by J&G Design Group. Waterproofing, tiling, tapware, vanities, showers and freestanding baths, managed start to finish. Call 0417 577 553.'
  )

  return (
    <ServiceDetail
      eyebrow="Bathroom Renovation"
      title="Bathroom renovations in Melbourne."
      subtitle="Stylish, practical bathrooms built on proper waterproofing and quality workmanship, designed for comfort and everyday ease."
      heroImg={heroImg}
      heroAlt="Renovated bathroom with freestanding fluted bath and double vanity"
      intro={[
        'A well designed bathroom adds real value and comfort to your home, but it only lasts if it is built correctly. We treat the parts you cannot see, like waterproofing and drainage, with the same care as the finishes you can.',
        'Our bathroom renovations cover everything from removing the old room through to waterproofing, tiling, tapware, vanities, showers, freestanding baths and lighting. Every trade is licensed and coordinated by us, so the job is done once and done right.',
        'From compact ensuites to large family bathrooms, we help you choose finishes that look great, suit your budget and stand up to daily use, all backed by a fixed quote agreed up front.',
      ]}
      benefits={[
        'Certified waterproofing',
        'Wall and floor tiling',
        'Vanities and stone tops',
        'Showers and screens',
        'Freestanding and inset baths',
        'Tapware, heating and lighting',
      ]}
      includes={[
        { title: 'Strip out and prep', text: 'Careful removal of the existing bathroom and preparation of walls and floors ready for a durable new fit out.' },
        { title: 'Waterproofing', text: 'Certified waterproofing to Australian Standards, the most important step in a bathroom that will last for years without issues.' },
        { title: 'Tiling', text: 'Precise wall and floor tiling with clean lines and neat grout, in the tile and layout you choose.' },
        { title: 'Vanities and storage', text: 'Custom or supplied vanities with stone tops, mirror cabinets and niches that keep everything organised and clutter free.' },
        { title: 'Showers and baths', text: 'Walk in showers, frameless screens, wall niches and freestanding or inset baths, plumbed and installed by licensed trades.' },
        { title: 'Tapware and finishing', text: 'Quality tapware, heated towel rails, ventilation, lighting and a full clean to complete the transformation.' },
      ]}
      gallery={[
        { src: g1, alt: 'Walk in shower with brushed copper tapware' },
        { src: g2, alt: 'Timber vanity with vessel basin and open shelving' },
        { src: g3, alt: 'Double vanity with arched mirrors and freestanding bath' },
      ]}
      faq={[
        { q: 'How long does a bathroom renovation take?', a: 'A typical bathroom renovation takes around two to four weeks on site, depending on size and finishes. We provide a clear schedule before starting so you can plan around it.' },
        { q: 'Is the waterproofing certified?', a: 'Yes. All waterproofing is carried out by licensed trades to Australian Standards, which protects your home and is essential for a bathroom that lasts.' },
        { q: 'Can you renovate a small ensuite?', a: 'Absolutely. We renovate bathrooms of every size and are especially good at making compact spaces feel larger with smart layouts and storage.' },
        { q: 'Do you help with tile and fixture selection?', a: 'Yes. We guide you through tile, tapware, vanity and fixture choices to suit your style and budget, so the finished bathroom comes together beautifully.' },
      ]}
    />
  )
}
