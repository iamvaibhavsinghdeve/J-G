import useSEO from '../hooks/useSEO.js'
import ServiceDetail from '../components/ServiceDetail.jsx'
import heroImg from '../assets/kitchen-1.jpg'
import g1 from '../assets/kitchen-1.jpg'
import g2 from '../assets/kitchen-2.jpg'
import g3 from '../assets/kitchen-3.jpg'

export default function KitchenRenovations() {
  useSEO(
    'Kitchen Renovations Melbourne',
    'Premium kitchen renovations across Melbourne by J&G Design Group. Custom cabinetry, stone benchtops, splashbacks and appliances, managed start to finish with fixed pricing. Call 0417 577 553.'
  )

  return (
    <ServiceDetail
      eyebrow="Kitchen Renovation"
      title="Kitchen renovations in Melbourne."
      subtitle="Custom cabinetry, stone benchtops and layouts designed around the way you cook, entertain and live."
      heroImg={heroImg}
      heroAlt="Renovated kitchen with stone island bench and pendant lighting"
      intro={[
        'The kitchen is the busiest room in most homes, so it needs to look beautiful and work hard. Our kitchen renovations balance both, pairing quality materials with practical, well planned layouts that suit your household.',
        'We handle the entire process for you, from the initial design and material selections through to cabinetry, plumbing, electrical, tiling and the final finishing touches. Because all of our trades are coordinated in house, the project stays on schedule and you only ever deal with one team.',
        'Whether you want a bright modern kitchen, a classic shaker style, or something completely bespoke, we work to your taste and your budget with a clear fixed quote agreed before we begin.',
      ]}
      benefits={[
        'Custom cabinetry and joinery',
        'Stone and laminate benchtops',
        'Tiled and stone splashbacks',
        'Appliance supply and installation',
        'Plumbing and electrical included',
        'Flooring and task lighting',
      ]}
      includes={[
        { title: 'Design and layout', text: 'We plan the work triangle, storage and bench space around how you actually use your kitchen, so it feels effortless day to day.' },
        { title: 'Cabinetry and benchtops', text: 'Custom cabinetry in your choice of finish, topped with engineered stone, natural stone or laminate to suit your style and budget.' },
        { title: 'Splashbacks and tiling', text: 'Tiled, stone or glass splashbacks installed cleanly, with a finish that is easy to wipe down and built to last.' },
        { title: 'Appliances and sinks', text: 'Supply and installation of ovens, cooktops, rangehoods, dishwashers and sinks, integrated neatly into your new layout.' },
        { title: 'Plumbing and electrical', text: 'Licensed plumbers and electricians handle all rough in and connection work, including new power points and lighting.' },
        { title: 'Flooring and finishing', text: 'New flooring, kickboards, handles and a full clean so your kitchen is ready to use the moment we hand it back.' },
      ]}
      gallery={[
        { src: g1, alt: 'Modern kitchen with waterfall stone island' },
        { src: g2, alt: 'Galley kitchen with herringbone timber flooring' },
        { src: g3, alt: 'White shaker kitchen with island and bar stools' },
      ]}
      faq={[
        { q: 'How long does a kitchen renovation take?', a: 'Most kitchen renovations take around three to five weeks on site once materials are ready, depending on the size and scope. We give you a clear timeline before we start and keep you updated throughout.' },
        { q: 'Can you work to my budget?', a: 'Yes. We offer a range of cabinetry and benchtop options at different price points, and we provide a detailed fixed quote so you know exactly what is included before any work begins.' },
        // { q: 'Do you supply the appliances?', a: 'We can supply and install appliances, or fit appliances you have already purchased. Either way we make sure everything is integrated correctly into your new layout.' },
        { q: 'Do I need to organise other trades?', a: 'No. We coordinate every trade for you, including plumbers, electricians, tilers and cabinet makers, so you have a single point of contact for the whole project.' },
      ]}
    />
  )
}
