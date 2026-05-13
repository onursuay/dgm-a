const regions = [
  { label: "Europe", status: "Active", count: "8 countries" },
  { label: "Middle East", status: "Expanding", count: "3 deployments" },
  { label: "Americas", status: "Pipeline", count: "2026 target" },
  { label: "Asia Pacific", status: "Pipeline", count: "2026 target" },
  { label: "Africa", status: "Research", count: "Pilot phase" },
];

const milestones = [
  { year: "2018", label: "DNF formula development begins in Germany" },
  { year: "2020", label: "First independent laboratory certifications completed" },
  { year: "2021", label: "Pilot deployments with European fire authorities" },
  { year: "2022", label: "First large-scale forest demonstration — 500 hectares" },
  { year: "2023", label: "Municipal deployment programs launched in 3 countries" },
  { year: "2024", label: "Industrial sector expansion and distributor network launch" },
  { year: "2025+", label: "Global scale — Americas, Asia Pacific, Africa" },
];

export default function GlobalMission() {
  return (
    <section className="relative py-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #080808 0%, #0e0700 40%, #080808 100%)" }}>
      {/* Globe glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)",
        }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b00] mb-6">
              Global Mission
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0eb] leading-tight mb-6">
              A Safer World<br />
              <span className="text-fire-gradient">Is a Prepared One.</span>
            </h2>
            <p className="text-[#a8a0a0] text-lg leading-relaxed mb-6">
              DNF was born in Germany with a mission that extends far beyond national borders. Fire does not respect boundaries — and neither does our commitment to protecting what matters.
            </p>
            <p className="text-[#a8a0a0] text-base leading-relaxed">
              We envision a world where cities, forests and industrial zones are systematically prepared — where fire response does not start at ignition but long before it. DNF is the technology that makes that vision operational.
            </p>
          </div>

          {/* Abstract globe */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-orange-900/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-orange-900/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

              {/* Center globe */}
              <div className="absolute inset-8 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(ellipse at 35% 35%, #1a0e00 0%, #080808 60%, #0d0d0d 100%)",
                  border: "1px solid rgba(255,107,0,0.2)",
                  boxShadow: "0 0 60px rgba(255,107,0,0.08), inset 0 0 40px rgba(255,107,0,0.04)",
                }}>

                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                  <ellipse cx="100" cy="100" rx="80" ry="80" fill="none" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"/>
                  <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="rgba(255,107,0,0.3)" strokeWidth="0.5"/>
                  <ellipse cx="100" cy="100" rx="80" ry="20" fill="none" stroke="rgba(255,107,0,0.2)" strokeWidth="0.5"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,107,0,0.3)" strokeWidth="0.5"/>
                  <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,107,0,0.3)" strokeWidth="0.5"/>
                  <line x1="45" y1="30" x2="155" y2="170" stroke="rgba(255,107,0,0.2)" strokeWidth="0.5"/>
                  <line x1="155" y1="30" x2="45" y2="170" stroke="rgba(255,107,0,0.2)" strokeWidth="0.5"/>
                </svg>

                <div className="text-center relative z-10">
                  <div className="w-12 h-12 mx-auto mb-2 text-[#ff9500]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-black text-fire-gradient">Global</div>
                  <div className="text-xs text-[#6a6060]">Fire Safety Network</div>
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full top-1/2 left-1/2"
                  style={{
                    background: i % 2 === 0 ? "#ff6b00" : "#ff9500",
                    transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "#ff6b00" : "#ff9500"}`,
                    opacity: 0.6 + (i % 3) * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {regions.map((r) => (
            <div key={r.label} className="card-premium rounded-xl p-5 border border-orange-900/10 text-center">
              <div className="text-lg font-bold text-[#f5f0eb] mb-1">{r.label}</div>
              <div className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2 ${
                r.status === "Active" ? "text-[#ff9500] bg-orange-950/30 border border-orange-900/30" :
                r.status === "Expanding" ? "text-amber-400 bg-amber-950/30 border border-amber-900/30" :
                "text-[#6a6060] bg-[#1a1a1a] border border-white/5"
              }`}>
                {r.status}
              </div>
              <div className="text-xs text-[#6a6060]">{r.count}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-xl font-bold text-[#f5f0eb] mb-8 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-24 top-0 bottom-0 w-px bg-gradient-to-b from-orange-700/50 via-orange-600/20 to-transparent" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-20 text-right shrink-0">
                    <span className="text-sm font-black text-fire-gradient">{m.year}</span>
                  </div>
                  <div className="relative shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff6b00] relative z-10"
                      style={{ boxShadow: "0 0 8px rgba(255,107,0,0.5)" }} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-sm text-[#a8a0a0]">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
