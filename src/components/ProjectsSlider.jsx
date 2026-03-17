import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    src: "/src/assets/Primary pupil enlightenment on good sanitation and hygiene.png",
    title: "Primary Pupil Enlightenment on Good Sanitation and Hygiene",
    category: "Education & WASH",
  },
  {
    src: "/src/assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA.png",
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: "/src/assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 2.png",
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: "/src/assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 3.png",
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: "/src/assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 4.png",
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: "/src/assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 5.png",
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: "/src/assets/Motorised Borehole Repaired by WBOF at Dutse Alhaji Abuja.png",
    title: "Motorised Borehole Repaired by WBOF at Dutse Alhaji, Abuja",
    category: "Water Supply",
  },
  {
    src: "/src/assets/Community Latrine Rehabilitation at Rubochi Abuja b4.png",
    title: "Community Latrine Rehabilitation at Rubochi, Abuja — Before",
    category: "Sanitation",
    tag: "Before",
  },
  {
    src: "/src/assets/Community Latrine Rehabilitation at Rubochi Abuja aft.png",
    title: "Community Latrine Rehabilitation at Rubochi, Abuja — After",
    category: "Sanitation",
    tag: "After",
  },
  {
    src: "/src/assets/CLASSROOMS REHABILITATION AT IJEUN, ABEOKUTA.png",
    title: "Classrooms Rehabilitation at Ijeun, Abeokuta",
    category: "Education",
  },
  {
    src: "/src/assets/CLASSROOMS REHABILITATION PROJECT AT IJEUN, ABEOKUTA.png",
    title: "Classrooms Rehabilitation Project at Ijeun, Abeokuta",
    category: "Education",
  },
  {
    src: "/src/assets/KOBAPE, ABEOKUTA.png",
    title: "School Project at Kobape, Abeokuta",
    category: "Education",
  },
  {
    src: "/src/assets/Odo Ona LEA primary school, Ibadan b4.png",
    title: "Odo Ona LEA Primary School, Ibadan — Before",
    category: "Education",
    tag: "Before",
  },
  {
    src: "/src/assets/Odo Ona LEA primary school, Ibadan aft.png",
    title: "Odo Ona LEA Primary School, Ibadan — After",
    category: "Education",
    tag: "After",
  },
  {
    src: "/src/assets/Primary School, Oke Ado, Ibadan b4.png",
    title: "Primary School, Oke Ado, Ibadan — Before",
    category: "Education",
    tag: "Before",
  },
  {
    src: "/src/assets/Primary School, Oke Ado, Ibadan aft.png",
    title: "Primary School, Oke Ado, Ibadan — After",
    category: "Education",
    tag: "After",
  },
  {
    src: "/src/assets/Sensitization of women on good hygiene and sanitation by WBOF.png",
    title: "Sensitization of Women on Good Hygiene and Sanitation by WBOF",
    category: "WASH",
  },
  {
    src: "/src/assets/DOWNSTREAM OF USUMA RIVER BEING CLEAN UP.png",
    title: "Downstream of Usuma River Being Cleaned Up",
    category: "Environment",
  },
  {
    src: "/src/assets/CLEAN UP BY WALTER OLATUNJI FOUNDATION AT THE SOKOTO RIVER DOWN STREAM OF RIVER NIGER AT NIGERIA PORTION OF THE BASIN.png",
    title: "Clean Up at Sokoto River — Downstream of River Niger, Nigeria",
    category: "Environment",
  },
  {
    src: "/src/assets/1395585115937.jpg",
    title: "WBOF Field Activity",
    category: "Field Work",
  },
  {
    src: "/src/assets/20170219_171320.jpg",
    title: "WBOF Field Activity",
    category: "Field Work",
  },
];

const tagColors = {
  Before: "bg-orange-500",
  After: "bg-[#39A84F]",
};

const categoryColors = {
  "Water Supply": "bg-[#426780]",
  Sanitation: "bg-teal-600",
  Education: "bg-purple-600",
  Environment: "bg-[#39A84F]",
  WASH: "bg-cyan-600",
  "Field Work": "bg-gray-600",
  "Education & WASH": "bg-indigo-600",
};

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1)), []);
  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const p = projects[current];

  return (
    <section className="py-20 bg-[#1a2e3b]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-2">
            Our Work in Action
          </span>
          <h2 className="text-3xl font-bold text-white">
            Projects <span className="text-[#39A84F]">Gallery</span>
          </h2>
          <p className="text-white/60 text-sm mt-3 max-w-lg mx-auto">
            A visual record of our interventions across communities in Nigeria.
          </p>
        </div>

        {/* Main slider */}
        <div
          className="relative rounded-2xl overflow-hidden bg-black"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <img
            key={current}
            src={p.src}
            alt={p.title}
            className="w-full h-[480px] object-cover opacity-90 transition-opacity duration-300"
          />

          {/* Overlay caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-6">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[p.category] || "bg-gray-600"}`}>
                {p.category}
              </span>
              {p.tag && (
                <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${tagColors[p.tag]}`}>
                  {p.tag}
                </span>
              )}
            </div>
            <p className="text-white font-semibold text-base leading-snug max-w-2xl">{p.title}</p>
            <p className="text-white/50 text-xs mt-1">{current + 1} / {projects.length}</p>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-[#39A84F] text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-[#39A84F] text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {projects.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === current ? "border-[#39A84F] opacity-100" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
