import { IconClock, IconFlame, IconPeople, IconPaw, IconLeaf, IconShield } from "@/components/Icons";

const benefits = [
  {
    Icon: IconClock,
    title: "Critical Time Advantage",
    desc: "DNF extends the window between ignition and critical fire behavior — giving people, systems and responders measurable additional minutes.",
    metric: "+7 min",
    metricLabel: "average extended response window",
  },
  {
    Icon: IconFlame,
    title: "Fire Spread Reduction",
    desc: "On treated surfaces, fire propagation slows by up to 3× compared to untreated materials under equivalent conditions.",
    metric: "up to 3×",
    metricLabel: "slower spread on treated surfaces",
  },
  {
    Icon: IconPeople,
    title: "Human Safety",
    desc: "Evacuation corridors stay open longer. Stairwells and exit pathways remain more viable. The human cost of fire events is reduced.",
    metric: "↑80%",
    metricLabel: "safer evacuation viability",
  },
  {
    Icon: IconPaw,
    title: "Animal Safety",
    desc: "Slower fire propagation creates escape corridors for wildlife. Livestock, farm animals and wild species gain critical time to flee fire zones.",
    metric: "Preserved",
    metricLabel: "wildlife escape corridors",
  },
  {
    Icon: IconLeaf,
    title: "Environmental Responsibility",
    desc: "DNF leaves no toxic residue. The formula is biodegradable, non-accumulative and certified safe for soil and water contact zones.",
    metric: "0",
    metricLabel: "toxic residue — eco-certified",
  },
  {
    Icon: IconShield,
    title: "Infrastructure Protection",
    desc: "Buildings, critical infrastructure, cultural heritage sites and industrial facilities maintain structural integrity for longer under fire threat.",
    metric: "60–80%",
    metricLabel: "reduction in asset exposure risk",
  },
];

export default function KeyBenefits() {
  const B0Icon = benefits[0].Icon;
  const B1Icon = benefits[1].Icon;
  const B5Icon = benefits[5].Icon;

  return (
    <section
      id="sustainability"
      className="relative py-10 overflow-hidden"
      style={{ background: "#03080f" }}
    >
      <div className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none"
        style={{ background: "linear-gradient(270deg, rgba(0,60,180,0.06) 0%, transparent 100%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <div className="flex items-start gap-10 flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
                Why DNF
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0ff] leading-tight">
                Measurable Benefits.<br />
                <span className="text-fire-gradient">Real-World Impact.</span>
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pt-16">
              <p className="text-[#6688aa] text-lg leading-relaxed">
                DNF delivers quantifiable advantages across every dimension that matters in fire safety — time, safety, environmental impact, and financial protection. No trade-offs.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card-premium rounded-2xl p-10 border border-blue-900/10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-[#1a6fff]"
                    style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.2)" }}>
                    <B0Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-[#e8f0ff] mb-3">{benefits[0].title}</h3>
                  <p className="text-[#6688aa] text-base leading-relaxed">{benefits[0].desc}</p>
                </div>
                <div className="shrink-0 text-center border border-blue-900/20 rounded-2xl p-6 min-w-[140px] bg-blue-950/10">
                  <div className="text-3xl font-black text-fire-gradient">{benefits[0].metric}</div>
                  <div className="text-xs text-[#3a5a7a] mt-2 leading-tight">{benefits[0].metricLabel}</div>
                </div>
              </div>
            </div>
            <div className="card-premium rounded-2xl p-7 border border-blue-900/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#1a6fff]"
                  style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.2)" }}>
                  <B1Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#e8f0ff] mb-2">{benefits[1].title}</h3>
                <p className="text-sm text-[#6688aa] leading-relaxed">{benefits[1].desc}</p>
              </div>
              <div className="mt-4 border-t border-blue-900/15 pt-4">
                <div className="text-2xl font-black text-fire-gradient">{benefits[1].metric}</div>
                <div className="text-xs text-[#3a5a7a]">{benefits[1].metricLabel}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.slice(2, 5).map((b, i) => {
              const BIcon = b.Icon;
              return (
                <div key={i} className="card-premium rounded-2xl p-7 border border-blue-900/10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#1a6fff]"
                      style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.2)" }}>
                      <BIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#e8f0ff] mb-2">{b.title}</h3>
                    <p className="text-sm text-[#6688aa] leading-relaxed">{b.desc}</p>
                  </div>
                  <div className="mt-4 border-t border-blue-900/15 pt-4">
                    <div className="text-xl font-black text-fire-gradient">{b.metric}</div>
                    <div className="text-xs text-[#3a5a7a]">{b.metricLabel}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-premium rounded-2xl p-10 border border-blue-900/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#1a6fff]"
                  style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.2)" }}>
                  <B5Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#e8f0ff] mb-3">{benefits[5].title}</h3>
                <p className="text-[#6688aa] text-base leading-relaxed">{benefits[5].desc}</p>
              </div>
              <div className="shrink-0 text-center border border-blue-900/20 rounded-2xl p-6 min-w-[140px] bg-blue-950/10">
                <div className="text-3xl font-black text-fire-gradient">{benefits[5].metric}</div>
                <div className="text-xs text-[#3a5a7a] mt-2 leading-tight">{benefits[5].metricLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
