import { Link } from "react-router-dom";
import { ArrowRight, Droplets, BookOpen, Leaf, PencilLine } from "lucide-react";
import { programmes } from "../data/programmes";

const icons = {
  "donation-of-school-writing-materials": <PencilLine size={22} />,
  "donation-of-writing-materials-to-primary-school": <PencilLine size={22} />,
  "writing-materials-elewura-community-school": <PencilLine size={22} />,
  "rural-water-supply-sanitation": <Droplets size={22} />,
  "primary-school-education": <BookOpen size={22} />,
  "environment-capacity-building": <Leaf size={22} />,
};

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
            Our strategic areas of intervention designed to create lasting
            change in rural and semi-urban communities across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {programmes.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
            >
              {/* Card image */}
              <div className="h-48 relative overflow-hidden bg-[#1a2e3b]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-5 w-11 h-11 bg-[#39A84F] rounded-t-xl flex items-center justify-center text-white">
                  {icons[p.slug]}
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

                {p.location && (
                  <p className="text-xs text-[#1a2e3b] font-semibold mb-4">
                    🏫 {p.location}
                  </p>
                )}

                <Link
                  to={`/programmes/${p.slug}`}
                  className="text-[#39A84F] font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
