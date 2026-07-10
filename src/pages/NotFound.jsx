import useSEO from '../hooks/useSEO.js'
import { BtnLink } from '../components/ui.jsx'

export default function NotFound() {
  useSEO('Page Not Found', 'The page you are looking for could not be found.')
  return (
    <section className="notfound">
      <div className="container">
        <p className="nf-code">404</p>
        <h1>Page not found</h1>
        <p className="nf-text">Sorry, the page you are looking for does not exist or has moved.</p>
        <div className="center-btn"><BtnLink to="/" arrow>BACK TO HOME</BtnLink></div>
      </div>
    </section>
  )
}
