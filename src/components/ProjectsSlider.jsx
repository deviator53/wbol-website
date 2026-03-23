import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/Primary pupil enlightenment on good sanitation and hygiene.png";
import img2 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA.png";
import img3 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 2.png";
import img4 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 3.png";
import img5 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 4.png";
import img6 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 5.png";
import img7 from "../assets/Motorised Borehole Repaired by WBOF at Dutse Alhaji Abuja.png";
import img8 from "../assets/Community Latrine Rehabilitation at Rubochi Abuja b4.png";
import img9 from "../assets/Community Latrine Rehabilitation at Rubochi Abuja aft.png";
import img10 from "../assets/CLASSROOMS REHABILITATION AT IJEUN, ABEOKUTA.png";
import img11 from "../assets/CLASSROOMS REHABILITATION PROJECT AT IJEUN, ABEOKUTA.png";
import img12 from "../assets/KOBAPE, ABEOKUTA.png";
import img13 from "../assets/Odo Ona LEA primary school, Ibadan b4.png";
import img14 from "../assets/Odo Ona LEA primary school, Ibadan aft.png";
import img15 from "../assets/Primary School, Oke Ado, Ibadan b4.png";
import img16 from "../assets/Primary School, Oke Ado, Ibadan aft.png";
import img17 from "../assets/Sensitization of women on good hygiene and sanitation by WBOF.png";
import img18 from "../assets/DOWNSTREAM OF USUMA RIVER BEING CLEAN UP.png";
import img19 from "../assets/CLEAN UP BY WALTER OLATUNJI FOUNDATION AT THE SOKOTO RIVER DOWN STREAM OF RIVER NIGER AT NIGERIA PORTION OF THE BASIN.png";
import img20 from "../assets/1395585115937.jpg";
import img21 from "../assets/20170219_171320.jpg";

const projects = [
  {
    src: img1,
    title: "Primary Pupil Enlightenment on Good Sanitation and Hygiene",
    category: "Education & WASH",
  },
  {
    src: img2,
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: img3,
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: img4,
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: img5,
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: img6,
    title: "Water Supply Projects at Karonmajigi Village, Abuja",
    category: "Water Supply",
  },
  {
    src: img7,
    title: "Motorised Borehole Repaired by WBOF at Dutse Alhaji, Abuja",
    category: "Water Supply",
  },
  {
    src: img8,
    title: "Community Latrine Rehabilitation at Rubochi, Abuja — Before",
    category: "Sanitation",
    tag: "Before",
  },
  {
    src: img9,
    title: "Community Latrine Rehabilitation at Rubochi, Abuja — After",
    category: "Sanitation",
    tag: "After",
  },
  {
    src: img10,
    title: "Classrooms Rehabilitation at Ijeun, Abeokuta",
    category: "Education",
  },
  {
    src: img11,
    title: "Classrooms Rehabilitation Project at Ijeun, Abeokuta",
    category: "Education",
  },
  {
    src: img12,
    title: "School Project at Kobape, Abeokuta",
    category: "Education",
  },
  {
    src: img13,
    title: "Odo Ona LEA Primary School, Ibadan — Before",
    category: "Education",
    tag: "Before",
  },
  {
    src: img14,
    title: "Odo Ona LEA Primary School, Ibadan — After",
    category: "Education",
    tag: "After",
  },
  {
    src: img15,
    title: "Primary School, Oke Ado, Ibadan — Before",
    category: "Education",
    tag: "Before",
  },
  {
    src: img16,
    title: "Primary School, Oke Ado, Ibadan — After",
    category: "Education",
    tag: "After",
  },
  {
    src: img17,
    title: "Sensitization of Women on Good Hygiene and Sanitation by WBOF",
    category: "WASH",
  },
  {
    src: img18,
    title: "Downstream of Usuma River Being Cleaned Up",
    category: "Environment",
  },
  {
    src: img19,
    title: "Clean Up at Sokoto River — Downstream of River Niger, Nigeria",
    category: "Environment",
  },
  { src: img20, title: "WBOF Field Activity", category: "Field Work" },
  { src: img21, title: "WBOF Field Activity", category: "Field Work" },
];

const tagColors = { Before: "bg-orange-500", After: "bg-[#39A84F]" };
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
            className="w-full h-[360px] object-cover opacity-90 transition-opacity duration-300"
          />

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[p.category] || "bg-gray-600"}`}
              >
                {p.category}
              </span>
              {p.tag && (
                <span
                  className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${tagColors[p.tag]}`}
                >
                  {p.tag}
                </span>
              )}
            </div>
            <p className="text-white font-semibold text-base leading-snug max-w-2xl">
              {p.title}
            </p>
            <p className="text-white/50 text-xs mt-1">
              {current + 1} / {projects.length}
            </p>
          </div>

          {/* Prev / Next */}
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
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {projects.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === current
                  ? "border-[#39A84F] opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
