import { ArrowRight } from "lucide-react";
import waterSupplyImg from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA.png";

const checks = [
  "Improved rural water supply and sanitation",
  "Improved primary school children education",
  "Environmental protection and capacity building",
  "Working across Northern, Eastern, Western & Southern Nigeria",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden h-[420px]">
            <img
              src={waterSupplyImg}
              alt="Water Supply Projects at Karonmajigi Village, Abuja"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-5 -right-5 bg-[#39A84F] text-white rounded-xl px-6 py-4 text-center shadow-xl shadow-[#39A84F]/30">
            <div className="text-3xl font-extrabold">NGO</div>
            <div className="text-xs opacity-90 mt-0.5">
              Registered Foundation
            </div>
          </div>
        </div>

        {/* Content side */}
        <div>
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">
            Walter Bamidele Olatunji{" "}
            <span className="text-[#39A84F]">Foundation</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            WBOF is primarily established to make life better for everyone —
            especially children, women, and the disadvantaged living in
            semi-urban and rural areas of Nigeria. We believe every person
            deserves access to clean water, quality education, and a healthy
            environment.
          </p>

          <ul className="space-y-3 mb-8">
            {checks.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <span className="w-5 h-5 rounded-full bg-[#39A84F] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#programmes" className="btn-primary">
            Our Programmes <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
