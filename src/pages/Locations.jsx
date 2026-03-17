import Locations from '../components/Locations'

export default function LocationsPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a2e3b] to-[#426780] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">Where We Work</span>
          <h1 className="text-4xl font-extrabold mb-4">Our <span className="text-[#39A84F]">Locations</span></h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            Currently active across multiple states in Nigeria — with no geographic boundaries
            on where we can make a difference.
          </p>
        </div>
      </section>

      <Locations />

      {/* Expansion note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <span className="text-5xl block mb-5">🗺️</span>
          <h2 className="section-title">No Geographic <span className="text-[#39A84F]">Boundaries</span></h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our intervention can be in the Northern, Eastern, Western or Southern part of Nigeria.
            We are continuously identifying new communities in need and expanding our reach to
            ensure no one is left behind.
          </p>
        </div>
      </section>
    </main>
  )
}
