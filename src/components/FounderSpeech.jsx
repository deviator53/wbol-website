import { useState } from "react";
import founderImg from "../assets/founder-image.png";
import waterDayImg from "../assets/water-day.png";

const paragraphs = [
  "Today, we gather to honor UN-World Water Day, a moment to reflect on the lifeblood of our planet — water. Water sustains our communities, nourishes our lands, and shapes our future. Yet, it is also a resource under threat, and its fair distribution remains a challenge that calls for collective action.",
  "In the Niger Basin catchment, comprising nine member countries including Nigeria, water is more than a natural resource; it is a shared heritage that binds the nine nations and peoples together. Managing this basin's precious resources wisely is not only about the hydrological cycle, but about humanity — ensuring that every child, every woman, and every man has access to clean water and sanitation. That's why this year's theme is centered on \"Water and Gender.\"",
  "But let us be clear: Water is not Gender-Neutral. Around the world, women and girls bear the greatest burden when water is scarce. They walk long distances to fetch it, they sacrifice education and opportunities, and they face risks to their safety. To achieve equality, we must place gender at the center of water governance. Women must not only be beneficiaries of water policies, but also decision-makers shaping them.",
  "Sanitation, too, is inseparable from dignity. Without safe sanitation, communities cannot thrive, and inequalities deepen. Access to clean water and sanitation is not a privilege — it is a human right. And rights must be defended through inclusive policies, equitable investments, and strong institutions.",
];

const principles = [
  { label: "Equity", desc: "Ensuring that water and sanitation reach all, regardless of gender, income, or geography." },
  { label: "Participation", desc: "Empowering women and marginalized groups to take part in decision-making." },
  { label: "Sustainability", desc: "Protecting the Niger Basin catchment and all water sources for generations to come." },
];

export default function FounderSpeech() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
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
            <div className="rounded-2xl overflow-hidden h-72 shadow-md">
              <img
                src={waterDayImg}
                alt="World Water Day 2026"
                className="w-full h-full object-cover"
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

          {/* Speech */}
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium">Dear everyone,</p>

            <div className={`space-y-4 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-500 ${expanded ? "max-h-[2000px]" : "max-h-[220px]"}`}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {/* Principles */}
              <p className="font-semibold text-[#1a2e3b]">
                As we commemorate this day, let us commit ourselves to three guiding principles:
              </p>
              <div className="space-y-3">
                {principles.map(pr => (
                  <div key={pr.label} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#39A84F] text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    <p><span className="font-semibold text-[#1a2e3b]">{pr.label}:</span> {pr.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                World Water Day is not just a celebration; it is a call to action. Together, let us
                build a future where water flows freely, where sanitation is universal, and where
                equality is not a dream but a reality.
              </p>
              <p className="font-semibold text-[#1a2e3b]">Thank you and happy celebration!!!</p>
            </div>

            {/* Fade + toggle */}
            {!expanded && (
              <div className="relative -mt-10 h-10 bg-gradient-to-t from-white to-transparent" />
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-[#39A84F] font-semibold text-sm inline-flex items-center gap-1.5 hover:underline"
            >
              {expanded ? "Show less ↑" : "Read full speech ↓"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
