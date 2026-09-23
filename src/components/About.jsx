import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import waterSupplyImg from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA.png";
import { projects } from "../data/programmesSliders";

const checks = [
  "Improved rural water supply and sanitation",
  "Improved primary school children education",
  "Environmental protection and capacity building",
  "Working across Northern, Eastern, Western & Southern Nigeria",
];

export default function About() {
   const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
  
    const isVideo = (item) => item.type === "video";
  
    const next = useCallback(
      () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1)),
      [],
    );
    const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  
    useEffect(() => {
      if (paused) return;
      const timer = setInterval(next, 4000);
      return () => clearInterval(timer);
    }, [paused, next]);
  
    const p = projects[current];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative">
          <div
            className="rounded-xl overflow-hidden h-[420px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {isVideo(p) ? (
              <video
                key={current}
                src={p.src}
                controls
                autoPlay
                muted
                playsInline
                className="w-full h-[360px] object-cover bg-black"
                onPlay={() => setPaused(true)}
                onPause={() => setPaused(false)}
                onEnded={() => {
                  setPaused(false);
                  next();
                }}
              />
            ) : (
              <img
                key={current}
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            )}
            {/* <img
              src={waterSupplyImg}
              alt="Water Supply Projects at Karonmajigi Village, Abuja"
              className="w-full h-full object-cover"
            /> */}
          </div>
          {/* Badge */}
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
            semi-urban and rural areas of Nigeria. Through donations and gifts
            of clean water, education, and environmental empowerment, we believe
            every person deserves to thrive.
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
