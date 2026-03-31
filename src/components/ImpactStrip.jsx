export default function ImpactStrip() {
  const stats = [
    { num: "5+", label: "Communities Served" },
    { num: "3", label: "Strategic Focus Areas" },
    { num: "100s", label: "Lives Impacted" },
    { num: "2019", label: "Year Founded" },
  ];

  return (
    <section className="bg-[#426780] py-14">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold text-white">{s.num}</div>
            <p className="text-white/70 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
