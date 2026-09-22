import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { programmes } from "../data/programmes";

export default function ProgrammeDetail() {
  const { slug } = useParams();
  const programme = programmes.find((p) => p.slug === slug);

  if (!programme) {
    return (
      <div className="text-center py-32 text-gray-500">
        Programme not found.{" "}
        <Link to="/programmes" className="text-[#39A84F] font-semibold">
          View all programmes
        </Link>
      </div>
    );
  }

  return (
    <main>
      {/* Hero */}
      <div className="bg-[#1a2e3b] w-full">
        <img
          src={programme.image}
          alt={programme.title}
          className="w-full max-h-[65vh] object-cover object-center opacity-80"
        />
      </div>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 text-[#39A84F] text-sm font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={15} /> Back to Programmes
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{programme.emoji}</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#39A84F] text-white">
              Programme
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2e3b] leading-tight mb-6">
            {programme.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {programme.areas.map((a) => (
              <span
                key={a}
                className="text-xs bg-[#f4f8f5] text-[#426780] px-3 py-1.5 rounded-full font-medium"
              >
                📍 {a}
              </span>
            ))}
          </div>

          {programme.location && (
            <p className="text-sm text-[#1a2e3b] font-semibold mb-8 bg-[#f4f8f5] px-4 py-3 rounded-lg">
              🏫 {programme.location}
            </p>
          )}

          <div className="prose max-w-none">
            {programme.fullDesc.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {programme.videos?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#1a2e3b] mb-4">
                Programme <span className="text-[#39A84F]">Videos</span>
              </h2>
              <div className="space-y-4">
                {programme.videos.map((src, i) => (
                  <video
                    key={i}
                    src={src}
                    controls
                    className="w-full rounded-xl"
                    preload="metadata"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {programme.gallery?.length > 1 && (
        <section className="py-14 bg-[#f4f8f5]">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-xl font-bold text-[#1a2e3b] mb-8">
              Programme <span className="text-[#39A84F]">Gallery</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {programme.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${programme.title} ${i + 1}`}
                  className="w-full h-52 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {/* <section className="py-14 bg-[#1a2e3b] text-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <h3 className="text-2xl font-bold mb-3">
            Want to support this programme?
          </h3>
          <p className="text-white/70 text-sm mb-6">
            Partner with us, volunteer, or reach out to learn how you can make a difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#39A84F] text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#2d8a3e] transition-all"
          >
            Get Involved <ArrowRight size={16} />
          </Link>
        </div>
      </section> */}
    </main>
  );
}
