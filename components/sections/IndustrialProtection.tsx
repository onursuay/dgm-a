import { IconGear, IconOilDrum, IconLightning, IconConstruction, IconBox, IconMicroscope, IconFactory } from "@/components/Icons";

const sectors = [
  { Icon: IconGear, label: "Manufacturing Plants" },
  { Icon: IconOilDrum, label: "Oil & Gas Facilities" },
  { Icon: IconLightning, label: "Energy Infrastructure" },
  { Icon: IconConstruction, label: "Construction Sites" },
  { Icon: IconBox, label: "Logistics & Warehouses" },
  { Icon: IconMicroscope, label: "Chemical Processing" },
];

const risks = [
  { title: "Chain Reaction Events", desc: "Industrial fires spread between storage units, production zones and loading docks with catastrophic acceleration." },
  { title: "Chemical Exposure Zones", desc: "Hazardous material areas require instant containment — DNF limits propagation to give evacuation and containment protocols time to activate." },
  { title: "Business Continuity", desc: "A single fire event can halt operations for months. DNF-protected assets sustain less damage, enabling faster recovery." },
];

export default function IndustrialProtection() {
  return (
    <section className="relative py-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #03080f 0%, #050c18 30%, #03080f 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-900/20"
              style={{ background: "linear-gradient(135deg, #060d1c 0%, #0a1535 50%, #060d1c 100%)", minHeight: "500px" }}>

              <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                <svg viewBox="0 0 400 400" className="w-80 h-80">
                  <rect x="50" y="200" width="300" height="150" fill="none" stroke="#1a6fff" strokeWidth="2"/>
                  <rect x="80" y="160" width="80" height="40" fill="none" stroke="#1a6fff" strokeWidth="1.5"/>
                  <rect x="240" y="140" width="80" height="60" fill="none" stroke="#1a6fff" strokeWidth="1.5"/>
                  <line x1="120" y1="160" x2="120" y2="60" stroke="#1a6fff" strokeWidth="1.5"/>
                  <line x1="280" y1="140" x2="280" y2="50" stroke="#1a6fff" strokeWidth="1.5"/>
                  <circle cx="120" cy="50" r="15" fill="none" stroke="#1a6fff" strokeWidth="1.5"/>
                  <circle cx="280" cy="40" r="20" fill="none" stroke="#1a6fff" strokeWidth="1.5"/>
                  <rect x="150" y="250" width="100" height="80" fill="none" stroke="#38b6ff" strokeWidth="1"/>
                  <line x1="50" y1="280" x2="350" y2="280" stroke="#1a6fff" strokeWidth="0.5" strokeDasharray="5,5"/>
                </svg>
              </div>

              <div className="relative z-10 p-10">
                <div className="w-16 h-16 mb-4 text-[#38b6ff]">
                  <IconFactory className="w-16 h-16" />
                </div>
                <div className="text-3xl font-black text-[#e8f0ff] mb-2">Industrial Shield</div>
                <div className="text-[#38b6ff] text-sm font-medium mb-8">DNF Industrial Fire Containment</div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6688aa]">Fire Spread Risk (Untreated)</span>
                      <span className="text-red-500">Critical</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-700 to-blue-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6688aa]">Fire Spread Risk (DNF-Protected)</span>
                      <span className="text-[#38b6ff]">Managed</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
                      <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6688aa]">Business Continuity</span>
                      <span className="text-green-500">Preserved</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-green-800 to-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,60,180,0.15) 0%, transparent 100%)" }} />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
              Industrial Protection
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#e8f0ff] leading-tight mb-6">
              When the Stakes<br />
              <span className="text-fire-gradient">Are Measured in Millions.</span>
            </h2>
            <p className="text-[#6688aa] text-lg leading-relaxed mb-8">
              Industrial fires are not just asset events — they are operational catastrophes. DNF provides manufacturers, energy companies and logistics operators with a measurable first line of defense against fire propagation.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {sectors.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center border border-blue-900/15 rounded-xl p-3 bg-blue-950/5 hover:border-blue-700/30 transition-colors">
                  <div className="w-8 h-8 mb-2 text-[#1a6fff]">
                    <s.Icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs text-[#3a5a7a] leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {risks.map((r, i) => (
                <div key={i} className="flex gap-4 p-4 border border-blue-900/10 rounded-xl bg-blue-950/5">
                  <div className="shrink-0 w-2 rounded-full bg-gradient-to-b from-blue-600 to-blue-700 self-stretch" />
                  <div>
                    <div className="text-sm font-bold text-[#e8f0ff] mb-1">{r.title}</div>
                    <div className="text-xs text-[#6688aa] leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-fire px-6 py-3 rounded-full text-sm">
              Industrial Partnership Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
