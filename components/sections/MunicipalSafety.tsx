import { IconSchool, IconHospital, IconAirplane, IconBuilding, IconTrain, IconStadium, IconHeritage, IconCity } from "@/components/Icons";

const targets = [
  { Icon: IconSchool, label: "Schools" },
  { Icon: IconHospital, label: "Hospitals" },
  { Icon: IconAirplane, label: "Airports" },
  { Icon: IconBuilding, label: "Gov. Buildings" },
  { Icon: IconTrain, label: "Transit Hubs" },
  { Icon: IconStadium, label: "Public Arenas" },
  { Icon: IconHeritage, label: "Historic Districts" },
  { Icon: IconCity, label: "City Centers" },
];

export default function MunicipalSafety() {
  return (
    <section className="relative py-10 overflow-hidden" style={{ background: "#03080f" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
              Municipal Safety
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#e8f0ff] leading-tight mb-6">
              Protecting the<br />
              <span className="text-fire-gradient">Heart of Cities.</span>
            </h2>
            <p className="text-[#6688aa] text-lg leading-relaxed mb-6">
              City administrations face a unique challenge: dense infrastructure, high occupancy buildings, and irreplaceable public assets — all concentrated in zones where a single fire event can cascade.
            </p>
            <p className="text-[#6688aa] text-base leading-relaxed mb-8">
              DNF provides municipalities with a proactive tool to pre-treat public buildings, evacuation corridors and high-density zones — significantly improving fire containment capability and reducing emergency response pressure on local departments.
            </p>

            <div className="grid grid-cols-4 gap-3 mb-8">
              {targets.map((t) => (
                <div key={t.label} className="text-center border border-blue-900/15 rounded-xl p-3 bg-blue-950/5 hover:border-blue-700/30 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-2 text-[#1a6fff]">
                    <t.Icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs text-[#3a5a7a]">{t.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-fire px-6 py-3 rounded-full text-sm">Municipal Inquiry</a>
              <a href="#demonstrations" className="btn-outline-fire px-6 py-3 rounded-full text-sm">View Case Studies</a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-900/20"
              style={{ background: "linear-gradient(135deg, #050c1a 0%, #0a1535 50%, #050c1a 100%)", minHeight: "480px" }}>
              <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,60,180,0.2) 0%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                <svg viewBox="0 0 800 300" className="w-full" preserveAspectRatio="none">
                  <rect x="20" y="180" width="60" height="120" fill="#1a1a1a" stroke="rgba(26,111,255,0.1)" strokeWidth="1"/>
                  <rect x="35" y="160" width="30" height="20" fill="#1a1a1a"/>
                  <rect x="100" y="140" width="80" height="160" fill="#222" stroke="rgba(26,111,255,0.1)" strokeWidth="1"/>
                  <rect x="120" y="120" width="40" height="20" fill="#222"/>
                  <rect x="200" y="160" width="50" height="140" fill="#1e1e1e"/>
                  <rect x="270" y="100" width="90" height="200" fill="#252525" stroke="rgba(26,111,255,0.08)" strokeWidth="1"/>
                  <rect x="290" y="80" width="50" height="20" fill="#252525"/>
                  <rect x="310" y="60" width="10" height="20" fill="#333"/>
                  <rect x="380" y="170" width="70" height="130" fill="#1e1e1e"/>
                  <rect x="470" y="120" width="100" height="180" fill="#282828"/>
                  <rect x="490" y="100" width="60" height="20" fill="#282828"/>
                  <rect x="590" y="150" width="80" height="150" fill="#1e1e1e"/>
                  <rect x="690" y="180" width="60" height="120" fill="#1a1a1a"/>
                  <rect x="760" y="200" width="40" height="100" fill="#1a1a1a"/>
                  {[[110,150],[130,150],[150,150],[110,170],[130,170],[150,170],[280,110],[300,110],[320,110],[280,130],[300,130],[480,130],[500,130],[520,130],[480,150],[500,150]].map(([x,y], i) => (
                    <rect key={i} x={x} y={y} width="8" height="6" fill={i % 3 === 0 ? "rgba(56,182,255,0.5)" : "rgba(160,200,255,0.3)"} rx="1"/>
                  ))}
                  <path d="M380 0 L450 30 L450 100 Q450 160 390 190 Q330 160 330 100 L330 30 Z" fill="none" stroke="rgba(26,111,255,0.15)" strokeWidth="1.5"/>
                  <rect x="0" y="295" width="800" height="5" fill="rgba(26,111,255,0.15)"/>
                </svg>
              </div>
              <div className="relative z-10 p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-[#38b6ff]">
                  <IconCity className="w-16 h-16" />
                </div>
                <div className="text-3xl font-black text-[#e8f0ff] mb-2">Urban Shield</div>
                <div className="text-[#38b6ff] text-sm font-medium">DNF Municipal Protection Program</div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[{ v: "2,400+", l: "Buildings Protected" }, { v: "12 Cities", l: "Active Deployments" }, { v: "100%", l: "Eco-Compliant" }].map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="text-xl font-black text-fire-gradient">{s.v}</div>
                      <div className="text-xs text-[#3a5a7a]">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
