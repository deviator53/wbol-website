const areas = [
  {
    emoji: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(57,168,79,1)"
      >
        <path d="M5.63604 6.63288L12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288H5.63604Z"></path>
      </svg>
    ),
    title: "Water Supply",
    desc: "Motorized and hand pump boreholes bringing safe, clean drinking water to communities that have never had reliable access.",
  },
  {
    emoji: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(57,168,79,1)"
      >
        <path d="M17.0002 2V4L13.0002 3.999V6H16.0002V8C18.2093 8 20.0002 9.79086 20.0002 12V20C20.0002 21.1046 19.1048 22 18.0002 22H6.0002C4.89563 22 4.0002 21.1046 4.0002 20V12C4.0002 9.79086 5.79106 8 8.0002 8V6H11.0002V3.999L7.5002 4C6.8702 4 6.1302 4.49 5.3002 5.6L3.7002 4.4C4.8702 2.84 6.1302 2 7.5002 2H17.0002ZM13.0002 12H11.0002V14H9.0002V16H10.9992L11.0002 18H13.0002L12.9992 16H15.0002V14H13.0002V12Z"></path>
      </svg>
    ),
    title: "Sanitation",
    desc: "Renovation of public latrines and promotion of hygiene practices to reduce waterborne diseases in rural areas.",
  },
  {
    emoji: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(57,168,79,1)"
      >
        <path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"></path>
      </svg>
    ),
    title: "Education",
    desc: "Classroom renovations and supply of learning materials so every child can learn in a safe, equipped environment.",
  },
  {
    emoji: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(57,168,79,1)"
      >
        <path d="M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z"></path>
      </svg>
    ),
    title: "Reforestation",
    desc: "Tree planting campaigns to combat desertification and reduce the impact of CO₂ emissions across Nigeria.",
  },
  {
    emoji: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(57,168,79,1)"
      >
        <path d="M17 7C13.5705 7 10.6449 9.15804 9.50734 12.1903L11.3805 12.8927C12.2337 10.6185 14.4278 9 17 9C17.6983 9 18.3687 9.11928 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2C15.242 2 17.9693 4.20399 18.7652 7.19539C18.1973 7.0675 17.6065 7 17 7Z"></path>
      </svg>
    ),
    title: "River Conservation",
    desc: "Clean-up operations along major rivers of socio-economic importance including Usuma, Imo, and Sokoto rivers.",
  },
  {
    emoji: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(57,168,79,1)"
      >
        <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path>
      </svg>
    ),
    title: "Capacity Building",
    desc: "Training and empowering local community members with skills and knowledge to sustain development gains.",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="section-label">Strategic Focus</span>
          <h2 className="section-title">
            Areas of <span className="text-[#39A84F]">Intervention</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Every action we take is guided by our commitment to sustainable,
            community-led development across Nigeria's most underserved regions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className="border-2 border-gray-100 rounded-xl p-7 text-center hover:border-[#39A84F] hover:shadow-lg hover:shadow-[#39A84F]/10 transition-all duration-300 group"
            >
              <span className="text-4xl flex justify-center mb-4">
                {a.emoji}
              </span>
              <h3 className="font-bold text-[#1a2e3b] mb-2 group-hover:text-[#39A84F] transition-colors">
                {a.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
