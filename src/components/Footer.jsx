import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/edited-logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Locations', to: '/locations' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

const programmes = [
  'Rural Water Supply & Sanitation',
  'Primary School Education',
  'Environment & Capacity Building',
]

export default function Footer() {
  return (
    <footer className="bg-[#1a2e3b] text-white">
      {/* CTA Banner */}
      <div className="bg-[#39A84F] py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">How Can We Help Your Community?</h2>
        <p className="text-white/85 text-sm max-w-md mx-auto mb-6">
          We partner with communities to deliver boreholes, classroom renovations, and river clean-ups across Nigeria.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact"
            className="bg-white text-[#39A84F] px-7 py-3 rounded font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Send a Message
          </Link>
          <Link to="/contact"
            className="border-2 border-white/70 text-white px-7 py-3 rounded font-semibold text-sm hover:border-white hover:bg-white/10 transition-all">
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <img src={logo} alt="WBOF Logo" className="h-16 w-auto object-contain" />
          </Link>
          <p className="text-white/60 text-xs leading-relaxed">
            Walter Bamidele Olatunji Foundation — making life better for children, women, and
            the disadvantaged in rural Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white/90">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/55 text-xs hover:text-[#39A84F] transition-colors">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white/90">Our Programmes</h4>
          <ul className="space-y-2">
            {programmes.map(p => (
              <li key={p} className="text-white/55 text-xs">→ {p}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white/90">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-white/55 text-xs">
              <Mail size={13} className="mt-0.5 flex-shrink-0 text-[#39A84F]" />
              info@walterbamidelefoundation.com
            </li>
            {/* <li className="flex items-start gap-2 text-white/55 text-xs">
              <Phone size={13} className="mt-0.5 flex-shrink-0 text-[#39A84F]" />
              +234 000 000 0000
            </li> */}
            <li className="flex items-start gap-2 text-white/55 text-xs">
              <MapPin size={13} className="mt-0.5 flex-shrink-0 text-[#39A84F]" />
              Nigeria (FCT, Oyo, Imo, Sokoto)
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Walter Bamidele Olatunji Foundation. All rights reserved.
      </div>
    </footer>
  )
}
