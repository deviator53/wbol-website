import About from "../components/About";
import MissionVision from "../components/MissionVision";
import founderImg from "../assets/founder-image.png";

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a2e3b] to-[#426780] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">
            About Us
          </span>
          <h1 className="text-4xl font-extrabold mb-4">
            Walter Bamidele Olatunji{" "}
            <span className="text-[#39A84F]">Foundation</span>
          </h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            Established to make life better for everyone — especially children,
            women, and the disadvantaged in semi-urban and rural Nigeria.
          </p>
        </div>
      </section>

      <About />
      <MissionVision />

      {/* Founder section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="section-label">Our Founder</span>
            <h2 className="section-title">
              Meet the <span className="text-[#39A84F]">Founder</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg mb-4">
                <img
                  src={founderImg}
                  alt="Walter Bamidele Olatunji"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#1a2e3b] text-base">
                Walter Bamidele Olatunji
              </h3>
              <p className="text-[#39A84F] text-sm font-medium mt-1">
                Founder & Executive Director
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["IWRM Expert", "WASH Specialist", "Hydrologist"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#f4f8f5] text-[#426780] px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Mr. Walter Bamidele Olatunji is an Integrated Water Resources
                Management (IWRM) Expert of over 20 years proven and practical
                experience that covers Water – Energy – Food – Ecosystems (WEFE)
                nexus.
              </p>
              <p>
                Walter is also a specialist in the design and implementation of
                Urban and Rural Water Supply, Sanitation and Hygiene (WASH)
                policies and programmes for livelihoods improvement, poverty
                reduction and environmental sustainability.
              </p>
              <p>
                During his stint at Federal Capital Territory Water Board, he
                was the Deputy Director – Hydrologist; Head of Dam Safety; Head
                of Technical Cooperation and Partnership; Coordinator of Public
                Private Partnership for water investment; and Chief of Staff to
                the General Manager.
              </p>
              <p>
                At Japan International Cooperation Agency (JICA) as In-House
                Water Consultant, he contributed immensely to the review and
                update of Nigeria's National Water Resources Master Plan,
                supervised the provision of rural water supply to over 200
                communities across ten states in Nigeria, and co-formulated the
                reduction of non-revenue water programme at FCTWB, Abuja. He
                also led the development and installation of 1.2MW solar
                electricity at Lower Usuma Dam.
              </p>
              <p>
                Walter is currently responsible for the development and
                provision of regional hydrological water bulletins, technical
                notes and annual water balance for the Niger River Basin —
                actively involved in GIZ/NBA WEFE Nexus, FREXUS, Flood Early
                Warning Alerts, ITTASS and PIDACC programmes.
              </p>
              <p>
                He has a special interest in community development, provision of
                rural water supply and sanitation, primary education aids, P2P
                knowledge transfer, and capacity building of WASH personnel at
                local and national levels.
              </p>
              <p className="text-xs text-gray-400 italic">
                Alumnus of FUNNAB & IHE Institute for Water Education,
                Netherlands. Fellow of NAH, NWSA, IAHS, IWRA, and RWSN
                International.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
