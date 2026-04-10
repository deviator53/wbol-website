import GetInvolved from "../components/GetInvolved";

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a2e3b] to-[#426780] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">
            Get Involved
          </span>
          <h1 className="text-4xl font-extrabold mb-4">
            Contact <span className="text-[#39A84F]">WBOF</span>
          </h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            Whether you want to volunteer, partner, or simply reach out — we'd
            love to hear from you.
          </p>
        </div>
      </section>

      <GetInvolved />
    </main>
  );
}
