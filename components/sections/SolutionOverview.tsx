const pillars = [
  {
    number: "01",
    title: "Slows Fire Spread",
    desc: "DNF's active formula significantly reduces flame propagation speed on treated surfaces — creating time and space for safe response.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Supports Emergency Response",
    desc: "By slowing propagation, DNF gives fire departments structured time to deploy resources, establish perimeters, and protect assets.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Protects Critical Assets",
    desc: "From hospital archives to industrial equipment to cultural heritage — DNF forms a thermal barrier on treated materials, preserving value and lives.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Eco-Conscious Positioning",
    desc: "DNF is engineered with environmental responsibility at its core. No toxic residue, no harmful chemicals — safe for soil, water, animals and humans.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Scalable for Any Environment",
    desc: "Whether treating a single building facade, a forest corridor, or an airport perimeter — DNF scales from targeted protection to large-area deployment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Compatible with Existing Systems",
    desc: "DNF integrates with sprinkler systems, fire hydrant networks, and aerial application — no complete infrastructure overhaul required.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function SolutionOverview() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d0500 30%, #0a0a0a 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-10">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b00] mb-6">
              The DNF Solution
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0eb] leading-tight">
              Fire Safety<br />
              <span className="text-fire-gradient">Reimagined.</span>
            </h2>
          </div>
          <div>
            <p className="text-[#a8a0a0] text-lg leading-relaxed">
              DNF is not a conventional fire extinguisher. It is a proactive, surface-level fire protection system that fundamentally changes the dynamics of fire propagation — giving people time, systems breathing room, and environments a chance.
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="card-premium rounded-2xl p-7 relative overflow-hidden group border border-orange-900/10"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 text-6xl font-black opacity-5 text-[#ff6b00] leading-none select-none">
                {pillar.number}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-[#ff6b00]"
                  style={{ background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.15)" }}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#f5f0eb] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[#a8a0a0] leading-relaxed">{pillar.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/20 to-transparent group-hover:via-orange-600/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
