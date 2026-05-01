export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#1a2e3b] flex flex-col items-center justify-center px-5 text-center">
      <img
        src="/logo.png"
        alt="WBOF Logo"
        className="w-24 mb-8 opacity-90"
        onError={(e) => (e.target.style.display = "none")}
      />

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
        We'll Be Back Soon
      </h1>

      <p className="text-white/70 text-sm max-w-md leading-relaxed mb-8">
        The Walter Bamidele Olatunji Foundation website is currently undergoing
        scheduled maintenance. We'll be back shortly. Thank you for your
        patience.
      </p>

      <div className="w-12 h-1 rounded-full bg-[#39A84F] mb-8" />

      <p className="text-white/50 text-xs">
        For urgent enquiries, contact us at{" "}
        <a
          href="mailto:info@walterbamideleolatunji.com"
          className="text-[#39A84F] hover:underline"
        >
          info@walterbamideleolatunji.com
        </a>
      </p>
    </div>
  );
}
