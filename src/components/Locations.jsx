const locations = [
  {
    region: 'Apete',
    state: 'Oyo State',
    focus: 'Water Supply & Sanitation',
    emoji: '🗺️',
  },
  {
    region: 'Kuchingoro',
    state: 'FCT, Abuja',
    focus: 'Education & Water Supply',
    emoji: '🗺️',
  },
  {
    region: 'Rubochi',
    state: 'FCT, Abuja',
    focus: 'Sanitation & Education',
    emoji: '🗺️',
  },
  {
    region: 'River Usuma Catchment',
    state: 'Abuja',
    focus: 'River Conservation',
    emoji: '🏞️',
  },
  {
    region: 'Imo River Catchment',
    state: 'Imo State',
    focus: 'Environmental Protection',
    emoji: '🏞️',
  },
  {
    region: 'Sokoto River Catchment',
    state: 'Sokoto State',
    focus: 'River Clean-up & Reforestation',
    emoji: '🏞️',
  },
]

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-[#f4f8f5]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="section-label">Where We Work</span>
          <h2 className="section-title">
            Communities We <span className="text-[#39A84F]">Support</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Currently active in communities across Nigeria — with plans to expand our reach
            to more states and regions in the future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {locations.map(l => (
            <div key={l.region}
              className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#426780]/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {l.emoji}
              </div>
              <div>
                <h4 className="font-bold text-[#1a2e3b] text-sm">{l.region}</h4>
                <p className="text-[#426780] text-xs font-medium mt-0.5">{l.state}</p>
                <p className="text-gray-500 text-xs mt-1">{l.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 italic">
          We hope to upscale to more programmes that will positively impact the lives of Nigerians and our environment in the future.
        </p>
      </div>
    </section>
  )
}
