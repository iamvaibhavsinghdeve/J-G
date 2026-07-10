import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import KitchenRenovations from './pages/KitchenRenovations.jsx'
import BathroomRenovations from './pages/BathroomRenovations.jsx'
import LaundryRenovations from './pages/LaundryRenovations.jsx'
import OurWork from './pages/OurWork.jsx'
import Process from './pages/Process.jsx'
import Contact from './pages/Contact.jsx'
import ServiceAreas from './pages/ServiceAreas.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
        <Route path="/services/bathroom-renovations" element={<BathroomRenovations />} />
        <Route path="/services/laundry-renovations" element={<LaundryRenovations />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
