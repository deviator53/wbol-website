export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#426780] to-[#1a2e3b] text-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">

        {/* Mission */}
        <div>
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">Our Mission</span>
          <h2 className="text-3xl font-bold leading-tight mb-5">
            Empowering Communities Through <span className="text-[#39A84F]">Water & Education</span>
          </h2>
          <p className="text-white/80 leading-relaxed text-sm">
            To provide underprivileged children with access to quality water supply, sanitation,
            education, mentorship, and life skills — empowering them to break the cycle of poverty
            and become leaders in their communities.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: 'Children Reached', val: '500+' },
              { label: 'Boreholes Installed', val: '10+' },
              { label: 'Schools Renovated', val: '5+' },
              { label: 'Rivers Cleaned', val: '3' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-extrabold text-[#39A84F]">{s.val}</div>
                <div className="text-xs text-white/65 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white/10 border border-white/15 rounded-2xl p-8 backdrop-blur">
          <div className="text-5xl text-[#39A84F] leading-none mb-4">"</div>
          <p className="italic text-white/90 text-base leading-relaxed mb-6">
            A world where every child, regardless of background, has access to quality water supply,
            sanitation and education that empowers them to shape their own future.
          </p>
          <div className="border-t border-white/15 pt-5">
            <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest">Our Vision</span>
          </div>

          <div className="mt-6 flex items-center gap-4 bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-[#39A84F] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              W
            </div>
            <div>
              <div className="font-semibold text-sm">Walter Bamidele Olatunji Foundation</div>
              <div className="text-white/60 text-xs">Community &amp; Global Consortia</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
