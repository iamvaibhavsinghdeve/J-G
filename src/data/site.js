// Central content for J&G Design Group
// NOTE: email is a placeholder until the client confirms the real address.
// NOTE: project/quality counter figures (500+, 100%) to be confirmed by client.

export const BUSINESS = {
  name: 'J&G Design Group',
  tagline: 'Kitchen. Bathroom. Laundry.',
  phoneDisplay: '0417 577 553',
  phoneHref: 'tel:+61417577553',
  email: 'info@jandgdesigngroup.com.au', // PLACEHOLDER: confirm real email
  addressLine: 'Unit 6/30 Heaths Ct, Mill Park VIC 3082, Australia',
  addressShort: 'Mill Park, VIC',
  mapsQuery: 'Unit 6/30 Heaths Ct, Mill Park VIC 3082, Australia',
  hoursShort: 'Mon to Fri, 8:00 AM to 4:00 PM',
  hoursLong: 'Monday to Friday, 8:00 AM to 4:00 PM',
  description:
    'We can organise your kitchen, bathroom, and laundry renovation from start to finish with all quality trades on hand.',
  experience: 'Over 20 years of delivering quality renovations across Melbourne.',
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Kitchen Renovations', to: '/services/kitchen-renovations' },
      { label: 'Bathroom Renovations', to: '/services/bathroom-renovations' },
      { label: 'Laundry Renovations', to: '/services/laundry-renovations' },
    ],
  },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export const TRUST = [
  { icon: 'badge', top: '20+ Years', bottom: 'Experience' },
  { icon: 'file', top: 'FREE', bottom: 'Consultation' },
  { icon: 'map', top: 'Melbourne', bottom: 'Wide' },
  { icon: 'ruler', top: 'Quality', bottom: 'Workmanship' },
  { icon: 'users', top: 'No Hidden', bottom: 'Costs' },
]

export const COUNTERS = [
  { value: '20+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' }, // confirm figure
  { value: '5.0', label: 'Star Satisfaction' },
  { value: '100%', label: 'Quality Workmanship' }, // confirm figure
]

export const WHY_CHOOSE = [
  '20+ years of industry experience',
  'Kitchen, bathroom and laundry specialists',
  'FREE consultation, site visit and detailed quote',
  'Premium workmanship and quality materials',
  'Transparent pricing with no hidden costs',
  'End to end project management',
  'Reliable and professional team',
  'Customer satisfaction is our priority',
]

export const PROCESS_STEPS = [
  { n: '01', title: 'Initial Enquiry', tag: 'FREE & No Obligation', text: 'Contact us by phone, email or through our online enquiry form. We will discuss your renovation requirements and answer any initial questions.' },
  { n: '02', title: 'FREE Consultation', tag: 'Completely FREE', text: 'We arrange a convenient consultation to understand your ideas, budget, timeline and renovation goals while providing professional advice.' },
  { n: '03', title: 'FREE Site Visit & Measure', tag: 'No Cost', text: 'Our renovation specialist visits your property, inspects the space, takes accurate measurements and assesses the project requirements.' },
  { n: '04', title: 'FREE Detailed Quote', tag: '100% FREE Quote', text: 'Receive a transparent quotation outlining the scope of work, materials, estimated timeline and pricing.' },
  { n: '05', title: 'Project Commencement', tag: '', text: 'Once you are happy to proceed, we schedule your renovation and begin work while keeping you informed throughout the project.' },
  { n: '06', title: 'Project Completion & Handover', tag: '', text: 'We complete a final quality inspection to ensure everything meets our standards before handing over your beautifully renovated space.' },
]

export const SERVICE_AREAS = [
  {
    name: 'Melbourne CBD',
    heading: 'Apartment & Inner-City Renovations',
    blurb: 'Living in Melbourne CBD often means making the most of compact spaces. We specialise in intelligent renovation solutions that maximise storage, improve functionality and create modern interiors. Whether you are renovating an apartment, townhouse or investment property, we deliver kitchens, bathrooms and laundries designed for contemporary city living.',
  },
  {
    name: 'Eastern Suburbs',
    heading: 'Premium Renovations for Family Homes',
    blurb: 'From established homes to contemporary residences, we help homeowners throughout Melbourne\u2019s Eastern Suburbs transform outdated spaces into elegant and practical living environments. Every renovation is tailored to your family\u2019s needs while complementing the style of your home.',
  },
  {
    name: 'Bayside',
    heading: 'Coastal-Inspired Renovation Solutions',
    blurb: 'Bayside homes deserve timeless designs that blend functionality with relaxed coastal living. Our team creates bright kitchens, luxurious bathrooms and practical laundries using quality materials and finishes that stand the test of time.',
  },
  {
    name: 'Northern Suburbs',
    heading: 'Designed Around Everyday Living',
    blurb: 'We provide renovation solutions that help growing families make better use of their homes. Whether it is creating more storage, improving workflow or modernising outdated rooms, our renovations are designed to enhance everyday comfort. This is also our home base, right here in Mill Park.',
  },
  {
    name: 'Western Suburbs',
    heading: 'Quality Renovations That Add Value',
    blurb: 'We help homeowners across Melbourne\u2019s Western Suburbs improve both lifestyle and property value through carefully planned renovations. Our transparent approach and attention to detail ensure every project is completed to a high standard.',
  },
  {
    name: 'Mornington Peninsula',
    heading: 'Beautiful Spaces Inspired by Coastal Living',
    blurb: 'From holiday homes to permanent residences, we deliver premium renovations throughout the Mornington Peninsula. We create inviting kitchens, elegant bathrooms and functional laundries that reflect the relaxed lifestyle of the region.',
  },
]

export const AREA_FAQ = [
  { q: 'Which locations do you service?', a: 'We proudly service Melbourne CBD, Eastern Suburbs, Bayside, Northern Suburbs, Western Suburbs and the Mornington Peninsula.' },
  { q: 'Do you offer free consultations?', a: 'Yes. Every enquiry includes a FREE consultation, FREE site visit and FREE detailed quote with no obligation.' },
  { q: 'Can I renovate only one room?', a: 'Absolutely. We undertake individual kitchen, bathroom and laundry renovations as well as multiple-room renovation projects.' },
  { q: 'How do I get started?', a: 'Simply contact our team to arrange your free consultation and we will guide you through every step of the renovation process.' },
]
