import { IconForest, IconPaw, IconSeedling, IconWind, IconLeaf } from "@/components/Icons";

const forestFacts = [
  { value: "4.3M", label: "hectares burned globally per year", Icon: IconForest },
  { value: "1B+", label: "animals displaced or lost in fire events", Icon: IconPaw },
  { value: "40yrs", label: "average ecosystem recovery time", Icon: IconSeedling },
  { value: "15%", label: "of global carbon emissions from wildfires", Icon: IconWind },
];

export default function ForestProtection() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#03080f" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(40,80,20,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(0,60,180,0.08) 0%, transparent 60%)",
        }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
            Forest & Nature Protection
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0ff] leading-tight mb-6">
            The Forest Cannot<br />
            <span className="text-fire-gradient">Fight Back Alone.</span>
          </h2>
          <p className="text-[#6688aa] max-w-2xl mx-auto text-lg leading-relaxed">
            Wildfires are accelerating in frequency, intensity and scale. The combination of climate stress, drought and wind creates conditions where conventional fire response is perpetually overwhelmed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {forestFacts.map((f) => (
            <div key={f.label} className="text-center border border-blue-900/15 rounded-2xl p-6 bg-[#050c18]">
              <div className="w-8 h-8 mx-auto mb-2 text-[#1a6fff]">
                <f.Icon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-black text-fire-gradient">{f.value}</div>
              <div className="text-xs text-[#3a5a7a] mt-1 leading-tight">{f.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card-premium rounded-2xl p-8 border border-blue-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-[0.04] leading-none select-none pointer-events-none p-4">
              <IconPaw className="w-24 h-24 text-[#1a6fff]" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#1a6fff]"
                style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.15)" }}>
                <IconPaw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#e8f0ff] mb-3">Wildlife Corridors</h3>
              <p className="text-sm text-[#6688aa] leading-relaxed mb-4">
                Animals cannot outrun modern wildfires. DNF-treated buffer zones and firebreaks create escape corridors, slowing fire propagation and preserving routes for wildlife to reach safety.
              </p>
              <ul className="space-y-2">
                {["Firebreak pre-treatment", "Buffer zone protection", "Escape corridor preservation", "Livestock shelter protection"].map(p => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[#6688aa]">
                    <span className="text-[#1a6fff] text-xs">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-premium rounded-2xl p-8 border border-blue-900/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#1a6fff]"
                style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.15)" }}>
                <IconLeaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#e8f0ff] mb-3">Ecosystem Preservation</h3>
              <p className="text-sm text-[#6688aa] leading-relaxed mb-4">
                Old-growth forests, biodiversity hotspots and protected nature reserves represent centuries of ecological development. DNF provides defensible protection for the zones that matter most.
              </p>
              <ul className="space-y-2">
                {["Protected area pre-treatment", "Carbon sink preservation", "Soil microbiome protection", "Watershed buffer zones"].map(p => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[#6688aa]">
                    <span className="text-[#1a6fff] text-xs">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-premium rounded-2xl p-8 border border-green-900/20 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #061520 0%, #061520 50%, #061520 100%)" }}>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-green-500"
                style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)" }}>
                <IconSeedling className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#e8f0ff] mb-3">Zero Environmental Impact</h3>
              <p className="text-sm text-[#6688aa] leading-relaxed mb-4">
                DNF was designed from the beginning for forest and nature deployment. The formula leaves no toxic residue, is biodegradable and certified for use in protected natural environments.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Biodegradable", check: true },
                  { label: "Non-toxic to wildlife", check: true },
                  { label: "Safe for soil", check: true },
                  { label: "Water zone safe", check: true },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2 text-xs">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-[#6688aa]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-blue-900/15 bg-blue-950/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-black text-[#e8f0ff]">DNF is the first fire safety technology designed <span className="text-fire-gradient">for both humans and nature.</span></div>
            <p className="text-[#6688aa] text-sm mt-2">Protection without environmental compromise — a core principle of DNF engineering.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="#contact" className="btn-fire px-6 py-3 rounded-full text-sm whitespace-nowrap">
              Forest Authority Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
