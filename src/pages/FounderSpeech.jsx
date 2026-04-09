import founderImg from "../assets/founder-image.png";
import waterDayImg from "../assets/water-day.jpg";

const paragraphs = [
  "Today, we gather to honor UN-World Water Day, a moment to reflect on the lifeblood of our planet — water. Water sustains our communities, nourishes our lands, and shapes our future. Yet, it is also a resource under threat, and its fair distribution remains a challenge that calls for collective action.",
  "In the Niger Basin catchment, comprising nine member countries including Nigeria, water is more than a natural resource; it is a shared heritage that binds the nine nations and peoples together. Managing this basin's precious resources wisely is not only about the hydrological cycle, but about humanity — ensuring that every child, every woman, and every man has access to clean water and sanitation. That's why this year's theme is centered on \"Water and Gender.\"",
  "But let us be clear: Water is not Gender-Neutral. Around the world, women and girls bear the greatest burden when water is scarce. They walk long distances to fetch it, they sacrifice education and opportunities, and they face risks to their safety. To achieve equality, we must place gender at the center of water governance. Women must not only be beneficiaries of water policies, but also decision-makers shaping them.",
  "Sanitation, too, is inseparable from dignity. Without safe sanitation, communities cannot thrive, and inequalities deepen. Access to clean water and sanitation is not a privilege — it is a human right. And rights must be defended through inclusive policies, equitable investments, and strong institutions.",
];

const principles = [
  {
    label: "Equity",
    desc: "Ensuring that water and sanitation reach all, regardless of gender, income, or geography.",
  },
  {
    label: "Participation",
    desc: "Empowering women and marginalized groups to take part in decision-making.",
  },
  {
    label: "Sustainability",
    desc: "Protecting the Niger Basin catchment and all water sources for generations to come.",
  },
];

export default function FounderSpeechPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a2e3b] to-[#426780] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">
            Founder's Address
          </span>
          <h1 className="text-4xl font-extrabold mb-4">
            World Water Day <span className="text-[#39A84F]">2026</span>
          </h1>
          <p className="text-white/75 text-sm">22nd March, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
            <img
              src={waterDayImg}
              alt="World Water Day 2026"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 bg-[#f4f8f5] rounded-2xl p-5 mb-10">
            <img
              src={founderImg}
              alt="Walter Bamidele Olatunji"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-[#39A84F]"
            />
            <div>
              <p className="font-bold text-[#1a2e3b] text-base">
                Mr. Walter Bamidele Olatunji
              </p>
              <p className="text-[#39A84F] text-sm font-medium">
                IWRM Expert & Founder, WBOF
              </p>
              <p className="text-gray-400 text-xs mt-1">
                World Water Day Address, 2026
              </p>
            </div>
          </div>

          {/* Speech */}
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
              Dear everyone,
            </p>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <p className="font-semibold text-[#1a2e3b] text-base mt-8">
                As we commemorate this day, let us commit ourselves to three
                guiding principles:
              </p>

              <div className="space-y-4 my-6">
                {principles.map((pr) => (
                  <div
                    key={pr.label}
                    className="flex items-start gap-3 bg-[#f4f8f5] p-4 rounded-lg"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#39A84F] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p>
                      <span className="font-semibold text-[#1a2e3b]">
                        {pr.label}:
                      </span>{" "}
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                World Water Day is not just a celebration; it is a call to
                action. Together, let us build a future where water flows
                freely, where sanitation is universal, and where equality is not
                a dream but a reality.
              </p>

              <p className="font-semibold text-[#1a2e3b] text-base mt-6">
                Thank you and happy celebration!!!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
