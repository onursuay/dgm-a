const steps = [
  {
    phase: "01",
    title: "Apply",
    sub: "Surface Treatment",
    desc: "DNF is applied to vulnerable surfaces — wood, vegetation, fabric, building facades — via spray, brush, or integrated into sprinkler systems. Application is quick, scalable, and compatible with standard equipment.",
    detail: "Compatible with aerial, ground, and integrated sprinkler deployment",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    phase: "02",
    title: "Activate",
    sub: "Thermal Trigger",
    desc: "When heat or flame contacts DNF-treated surfaces, the formula activates. A thermal barrier layer is formed, interrupting the heat transfer process that enables fire to spread from material to material.",
    detail: "Activated by radiant heat — no electronic trigger needed",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    phase: "03",
    title: "Slow Spread",
    sub: "Propagation Reduction",
    desc: "With the thermal barrier active, fire propagation speed is dramatically reduced. The fire does not spread to DNF-treated areas at its natural rate — buying measurable minutes of protected time.",
    detail: "Tested propagation reduction: up to 3× slower on treated surfaces",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    phase: "04",
    title: "Reduce Heat Impact",
    sub: "Thermal Attenuation",
    desc: "Beyond slowing spread, DNF reduces the radiant heat reaching untreated adjacent materials, people, and structures — limiting secondary ignitions and structural damage from heat alone.",
    detail: "Reduces radiant heat transfer to adjacent structures",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
      </svg>
    ),
  },
  {
    phase: "05",
    title: "Support Response",
    sub: "Emergency Window",
    desc: "The extra minutes secured by DNF allow fire departments to arrive, establish perimeters, begin targeted suppression, and coordinate evacuation — all under more controlled conditions than an unchecked fire allows.",
    detail: "Fire department coordination window extended by 5–10 minutes",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    phase: "06",
    title: "Protect Assets",
    sub: "Structural & Life Safety",
    desc: "People evacuate safely. Buildings sustain less structural damage. Natural areas preserve larger buffer zones. Cultural heritage survives. Industrial continuity is maintained. DNF does not fight fire — it buys time to do so effectively.",
    detail: "Lives, infrastructure, nature and culture preserved",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-10 overflow-hidden" style={{ background: "#030810" }}>
      {/* Diagonal grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(26,111,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
            How DNF Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0ff] leading-tight mb-6">
            Six Steps.<br />
            <span className="text-fire-gradient">One Life-Saving Mission.</span>
          </h2>
          <p className="text-[#6688aa] max-w-xl mx-auto text-lg">
            From application to protection — here is how DNF transforms the fire safety equation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute left-[11.5%] right-[11.5%] top-10 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" style={{ top: "44px" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Card */}
                <div className="card-premium rounded-2xl p-7 h-full border border-blue-900/10 hover:border-blue-700/30 transition-all duration-500">
                  {/* Phase number & icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-[#1a6fff] shrink-0"
                      style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.15)" }}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-black text-[#1a6fff] opacity-20 leading-none">{step.phase}</span>
                  </div>

                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#1a6fff] mb-2 opacity-70">
                    {step.sub}
                  </div>
                  <h3 className="text-xl font-bold text-[#e8f0ff] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#6688aa] leading-relaxed mb-4">{step.desc}</p>

                  {/* Detail tag */}
                  <div className="border-t border-blue-900/15 pt-4">
                    <p className="text-xs text-[#3a5a7a] italic">{step.detail}</p>
                  </div>
                </div>

                {/* Arrow between (desktop only, not last in row) */}
                {i % 3 !== 2 && i !== steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-10 translate-x-4 z-10">
                    <svg className="w-6 h-6 text-blue-900/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
