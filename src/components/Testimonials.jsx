import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import testimonial1 from "../assets/wbof-testimonial.mp4";

const videos = [
  {
    src: testimonial1,
    name: "Community Member",
    location: "Nigeria",
  },
  // Add more testimonial videos here as time passes
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true); // start muted so autoplay works
  const videoRef = useRef(null);

  // When switching videos, apply muted state to new video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [current, muted]);

  const prev = () => setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));

  const toggleMute = () => {
    const newMuted = !muted;
    if (videoRef.current) videoRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  const v = videos[current];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[#39A84F] text-xs font-semibold uppercase tracking-widest block mb-2">
            Voices from the Community
          </span>
          <h2 className="text-3xl font-bold text-[#1a2e3b]">
            Community <span className="text-[#39A84F]">Testimonials</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Hear directly from the people whose lives have been touched by WBOF's work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl">
            <video
              key={current}
              ref={videoRef}
              src={v.src}
              autoPlay
              loop
              playsInline
              muted
              controls
              className="w-full max-h-[520px] object-contain bg-black"
            />

            {/* Unmute prompt — shown while muted */}
            {muted && (
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 hover:bg-[#39A84F] text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors"
                aria-label="Tap to unmute"
              >
                <VolumeX size={15} /> Tap to unmute
              </button>
            )}

            {!muted && (
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-[#39A84F] text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Mute"
              >
                <Volume2 size={18} />
              </button>
            )}

            {/* Name overlay */}
            <div className="absolute bottom-12 left-0 right-0 px-6 py-2 pointer-events-none">
              <p className="text-white font-semibold text-sm drop-shadow">{v.name}</p>
              <p className="text-white/70 text-xs drop-shadow">📍 {v.location}</p>
            </div>

            {/* Prev / Next */}
            {videos.length > 1 && (
              <>
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
              </>
            )}
          </div>

          {videos.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#39A84F]" : "w-1.5 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
