import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderImg from "../assets/founder-image.jpg";
import waterDayImg from "../assets/water-day.jpg";

export default function FounderSpeech() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="section-label">Founder's Address</span>
          <h2 className="section-title">
            World Water Day <span className="text-[#39A84F]">2026</span>
          </h2>
          <p className="text-gray-400 text-sm">22nd March, 2026</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={waterDayImg}
                alt="World Water Day 2026"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-4 bg-[#f4f8f5] rounded-2xl p-4">
              <img
                src={founderImg}
                alt="Walter Bamidele Olatunji"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-[#39A84F]"
              />
              <div>
                <p className="font-bold text-[#1a2e3b] text-sm">Mr. Walter Bamidele Olatunji</p>
                <p className="text-[#39A84F] text-xs font-medium">IWRM Expert & Founder, WBOF</p>
                <p className="text-gray-400 text-xs mt-0.5">World Water Day Address, 2026</p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium">Dear everyone,</p>

            <div className="relative">
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-h-[280px] overflow-hidden">
                <p>
                  Today, we gather to honor UN-World Water Day, a moment to reflect on the lifeblood of our planet — water. Water sustains our communities, nourishes our lands, and shapes our future. Yet, it is also a resource under threat, and its fair distribution remains a challenge that calls for collective action.
                </p>
                <p>
                  In the Niger Basin catchment, comprising nine member countries including Nigeria, water is more than a natural resource; it is a shared heritage that binds the nine nations and peoples together. Managing this basin's precious resources wisely is not only about the hydrological cycle, but about humanity — ensuring that every child, every woman, and every man has access to clean water and sanitation...
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
            </div>

            <Link
              to="/founder-speech"
              className="mt-6 inline-flex items-center gap-2 text-[#39A84F] font-semibold text-sm hover:gap-3 transition-all"
            >
              Read Full Speech <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
