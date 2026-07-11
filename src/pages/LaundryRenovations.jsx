import useSEO from '../hooks/useSEO.js'
import ServiceDetail from '../components/ServiceDetail.jsx'
import heroImg from '../assets/service-laundry.png'
import g1 from '../assets/service-laundry.png'

export default function LaundryRenovations() {
  useSEO(
    'Laundry Renovations Melbourne',
    'Laundry renovations across Melbourne by J&G Design Group. Clever storage, durable benchtops and efficient layouts, managed start to finish with fixed pricing. Call 0417 577 553.'
  )

  return (
    <ServiceDetail
      eyebrow="Laundry Renovation"
      title="Laundry renovations in Melbourne."
      subtitle="Hard working laundries with clever storage and efficient layouts that make everyday chores quicker and easier."
      heroImg={heroImg}
      heroAlt="Renovated laundry with cabinetry and integrated appliances"
      intro={[
        'The laundry is one of the most used rooms in the home, yet it is often the most neglected. A well planned laundry renovation adds valuable storage, hides the clutter and makes washing day far less of a chore.',
        'We design laundries around your appliances and your routine, with durable benchtops for folding, plenty of cabinetry, and smart solutions for drying, ironing and storing everything in its place. All cabinetry, plumbing and electrical work is coordinated by our team.',
        'Whether it is a compact European laundry or a large dedicated room, we deliver a practical, good looking result with a clear fixed price agreed before we start.',
      ]}
      benefits={[
        'Custom cabinetry and storage',
        'Durable benchtops',
        'Laundry troughs and sinks',
        'Appliance integration',
        'Drying and ironing solutions',
        'Plumbing and electrical included',
      ]}
      includes={[
        { title: 'Layout and storage', text: 'A layout planned around your washer, dryer and routine, with cabinetry that keeps detergents, baskets and cleaning gear tidy and out of sight.' },
        { title: 'Cabinetry and benchtops', text: 'Custom overhead and base cabinetry topped with hard wearing benchtops that give you space to sort and fold.' },
        { title: 'Sinks and tapware', text: 'Practical laundry troughs or under bench sinks with quality tapware, plumbed in by licensed trades.' },
        { title: 'Appliance integration', text: 'Front loaders, dryers and stacked configurations integrated neatly, including wall mounted and overhead drying options.' },
        { title: 'Plumbing and electrical', text: 'All water, waste and power connections handled by licensed plumbers and electricians as part of the job.' },
        { title: 'Finishing touches', text: 'Splashbacks, flooring, lighting and a full clean so your new laundry is ready to use straight away.' },
      ]}
      gallery={[
        { src: g1, alt: 'Renovated laundry with cabinetry and appliances' },
      ]}
      faq={[
        { q: 'How long does a laundry renovation take?', a: 'Laundry renovations are usually quicker than kitchens or bathrooms, often completed within one to three weeks on site depending on the scope and any tiling involved.' },
        { q: 'Can you fit a laundry into a small space?', a: 'Yes. We are experienced at designing compact and European style laundries that make the most of tight spaces without sacrificing storage.' },
        { q: 'Can I renovate my laundry with my bathroom?', a: 'Definitely. Many clients combine a laundry and bathroom renovation, which we manage together to save time and keep the finishes consistent.' },
      //   { q: 'Do you supply laundry appliances?', a: 'We can supply and install appliances or work around ones you already own, making sure everything fits and connects correctly in your new layout.' },
      // 
      ]}
    />
  )
}
