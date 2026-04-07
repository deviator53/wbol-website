import { useEffect, useState } from "react";
import { ArrowRight, Play, Droplets, BookOpen, Leaf } from "lucide-react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";
import slider6 from "../assets/slider6.jpg";

const slides = [slider1, slider2, slider3, slider4, slider5, slider6];

const cards = [
  {
    icon: <Droplets size={22} />,
    title: "Clean Water Access",
    desc: "Motorized & hand pump boreholes in rural Nigeria",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Education Support",
    desc: "Renovated classrooms & learning materials",
  },
  {
    icon: <Leaf size={22} />,
    title: "Environmental Care",
    desc: "River clean-ups & tree planting initiatives",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="text-white py-24 relative overflow-hidden">
      {/* Slider backgrounds */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e3b]/60 via-[#426780]/40 to-[#2d6e45]/50 pointer-events-none" />
      {/* Decorative circles */}
      <div className="absolute top-[-60px] right-[-80px] w-[480px] h-[480px] bg-[#39A84F]/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[320px] h-[320px] bg-white/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left */}
        <div>
          <span className="inline-block bg-[#39A84F]/20 border border-[#39A84F] text-[#7de896] text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Walter Bamidele Olatunji Foundation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Clean Water, <span className="text-[#39A84F]">Better Lives</span>{" "}
            for Everyone
          </h1>
          <p className="text-white/85 text-base leading-relaxed mb-8 max-w-lg">
            Providing underprivileged communities with access to quality water
            supply, sanitation, education, and environmental care — empowering
            people to break the cycle of poverty.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#programmes" className="btn-primary">
              Our Programmes <ArrowRight size={16} />
            </a>
            <a href="#about" className="btn-outline-white">
              <Play size={16} /> Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/15">
            {[
              { num: "3+", label: "Focus Areas" },
              { num: "5+", label: "Communities" },
              { num: "100s", label: "Lives Impacted" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-[#39A84F]">
                  {s.num}
                </div>
                <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#39A84F]" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right — feature cards */}
        <div className="flex flex-col gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white/10 backdrop-blur border border-white/15 rounded-xl p-5 flex items-center gap-4 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 bg-[#39A84F]/25 rounded-xl flex items-center justify-center text-[#7de896] flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-0.5">{c.title}</h4>
                <p className="text-white/70 text-xs">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
