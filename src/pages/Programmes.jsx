import Programmes from '../components/Programmes'
import FocusAreas from '../components/FocusAreas'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProgrammesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a2e3b] to-[#426780] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">What We Do</span>
          <h1 className="text-4xl font-extrabold mb-4">Our <span className="text-[#39A84F]">Programmes</span></h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            Three strategic areas of intervention designed to create lasting, sustainable change
            in rural and semi-urban communities across Nigeria.
          </p>
        </div>
      </section>

      <Programmes />
      <FocusAreas />

      {/* Future plans */}
      <section className="py-16 bg-[#f4f8f5]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <span className="section-label">Looking Ahead</span>
          <h2 className="section-title">Expanding Our <span className="text-[#39A84F]">Impact</span></h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We hope to upscale to more programmes that will positively impact the lives of Nigerians
            and our environment in the future. There is no boundary for our intervention — it can be
            in the Northern, Eastern, Western or Southern part of Nigeria.
          </p>
          <Link to="/contact"
            className="bg-[#39A84F] text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#2d8a3e] transition-all inline-flex items-center gap-2">
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
