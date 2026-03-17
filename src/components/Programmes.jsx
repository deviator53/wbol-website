import { ArrowRight, Droplets, BookOpen, Leaf } from "lucide-react";

const programmes = [
  {
    icon: <Droplets size={22} />,
    color: "bg-[#426780]",
    title: "Rural Water Supply & Sanitation",
    desc: "Provision of motorized boreholes, hand pump boreholes, and renovation of public latrines in rural communities across Nigeria.",
    areas: ["Apete", "Kuchingoro", "Rubochi"],
    emoji: "🚰",
    image:
      "/src/assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 3.png",
  },
  {
    icon: <BookOpen size={22} />,
    color: "bg-[#39A84F]",
    title: "Primary School Education",
    desc: "Renovating classrooms and providing educational materials — chairs, tables, blackboards, chalks and pencils — for primary school pupils.",
    areas: [
      "Northern Nigeria",
      "Eastern Nigeria",
      "Western & Southern Nigeria",
    ],
    emoji: "🏫",
    image: "/src/assets/KOBAPE, ABEOKUTA.png",
  },
  {
    icon: <Leaf size={22} />,
    color: "bg-[#1a2e3b]",
    title: "Environment & Capacity Building",
    desc: "River system clean-ups and tree planting to reduce desertification and CO₂ emissions, protecting Nigeria's vital waterways.",
    areas: ["River Usuma, Abuja", "Imo River", "Sokoto River"],
    emoji: "🌿",
    image: "/src/assets/DOWNSTREAM OF USUMA RIVER BEING CLEAN UP.png",
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-20 bg-[#f4f8f5]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Our <span className="text-[#39A84F]">Programmes</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Three strategic areas of intervention designed to create lasting
            change in rural and semi-urban communities across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {programmes.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
            >
              {/* Card image area */}
              <div
                className={`${p.color} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-7xl">{p.emoji}</span>
                )}
                <div className="absolute bottom-0 left-5 w-11 h-11 bg-[#39A84F] rounded-t-xl flex items-center justify-center text-white">
                  {p.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-[#1a2e3b] text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.areas.map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-[#f4f8f5] text-[#426780] px-2.5 py-1 rounded-full font-medium"
                    >
                      📍 {a}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="text-[#39A84F] font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
