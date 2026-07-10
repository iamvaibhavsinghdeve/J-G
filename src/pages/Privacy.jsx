import useSEO from '../hooks/useSEO.js'
import { PageHero } from '../components/ui.jsx'
import { BUSINESS } from '../data/site.js'

export default function Privacy() {
  useSEO('Privacy Policy', 'Privacy Policy for J&G Design Group. How we collect, use and protect your personal information.')

  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" />
      <section className="section">
        <div className="container legal">
          <p className="legal-updated">Last updated: {new Date().getFullYear()}</p>

          <p>{BUSINESS.name} respects your privacy and is committed to protecting the personal information you share with us. This policy explains what we collect, how we use it, and the choices you have.</p>

          <h2>Information we collect</h2>
          <p>When you contact us through our website, phone or email, we may collect your name, phone number, email address and any details you provide about your renovation project. We only collect information that helps us respond to your enquiry and provide our services.</p>

          <h2>How we use your information</h2>
          <p>We use your information to respond to enquiries, prepare quotes, arrange consultations, deliver our renovation services and keep you updated about your project. We do not sell your personal information to anyone.</p>

          <h2>Cookies and website analytics</h2>
          <p>Our website may use cookies and basic analytics to understand how visitors use the site and to improve your experience. You can disable cookies in your browser settings, though some parts of the site may not function as intended.</p>

          <h2>Third party services</h2>
          <p>Our website is hosted using third party providers, and our contact form and maps may be delivered through third party services such as our hosting platform and mapping providers. These providers process data on our behalf and are expected to handle it securely.</p>

          <h2>Data security</h2>
          <p>We take reasonable steps to protect your personal information from misuse, loss and unauthorised access. No method of transmission over the internet is completely secure, but we work to safeguard the information you provide.</p>

          <h2>Your rights</h2>
          <p>You may request access to the personal information we hold about you, ask us to correct it, or request that we delete it. To make a request, please contact us using the details below.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>

          <h2>Contact us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at {BUSINESS.phoneDisplay} or {BUSINESS.email}. Our address is {BUSINESS.addressLine}.</p>
        </div>
      </section>
    </>
  )
}
