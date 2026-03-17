import os

lines = [
    "export default function ImpactStrip() {\n",
    "  const stats = [\n",
    "    { num: '5+', label: 'Communities Served' },\n",
    "    { num: '3', label: 'Strategic Focus Areas' },\n",
    "    { num: '100s', label: 'Lives Impacted' },\n",
    "    { num: '2019', label: 'Year Founded' },\n",
    "  ]\n",
    "  return (\n",
    "    <section className=\"bg-[#426780] py-14\">\n",
    "      <div className=\"max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center\">\n",
    "        {stats.map(s => (\n",
    "          <div key={s.label}>\n",
    "            <div className=\"text-4xl font-extrabold text-white\">{s.num}</div>\n",
    "            <p className=\"text-white/70 text-sm mt-1\">{s.label}</p>\n",
    "          </div>\n",
    "        ))}\n",
    "      </div>\n",
    "    </section>\n",
    "  )\n",
    "}\n",
]

path = os.path.join(os.path.dirname(__file__), "src", "components", "ImpactStrip.jsx")
with open(path, "w", encoding="utf-8") as f:
    f.writelines(lines)

print("Written:", path)
with open(path) as f:
    print(f.read())
