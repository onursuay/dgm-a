import { IconMicroscope, IconForest, IconBuilding, IconBarChart } from "@/components/Icons";

const testResults = [
  { label: "Burn Rate Reduction", before: "100%", after: "31%", improvement: "−69%" },
  { label: "Flashover Time", before: "72 sec", after: "340 sec", improvement: "+4.7×" },
  { label: "Radiant Heat", before: "100%", after: "44%", improvement: "−56%" },
  { label: "Structural Damage", before: "Total", after: "Contained", improvement: "Preserved" },
];

const demoTypes = [
  { Icon: IconMicroscope, title: "Laboratory Tests", desc: "Controlled burn tests comparing DNF-treated vs untreated panels under standardized conditions." },
  { Icon: IconForest, title: "Field Demonstrations", desc: "Live outdoor demonstrations in forest and agricultural settings with official fire authority presence." },
  { Icon: IconBuilding, title: "Structural Tests", desc: "Full-scale building facade and interior material testing in certified test facilities." },
  { Icon: IconBarChart, title: "Data Sessions", desc: "Technical briefings with test data, thermal imaging results and independent verification reports." },
];

export default function DemonstrationPreview() {
  return (
    <section
      id="demonstrations"
      className="relative py-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #03080f 0%, #050c18 50%, #03080f 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
            Demonstrations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0ff] leading-tight mb-6">
            Don&apos;t Trust Claims.<br />
            <span className="text-fire-gradient">Witness the Evidence.</span>
          </h2>
          <p className="text-[#6688aa] max-w-xl mx-auto text-lg">
            DNF performance is verifiable. We provide live demonstrations, laboratory test data and independent certification for decision-makers who need proof, not promises.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-blue-900/25 mb-6 group cursor-pointer"
          style={{ background: "#050c18", minHeight: "400px" }}>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(0,60,180,0.2) 0%, rgba(26,111,255,0.05) 50%, transparent 70%)",
              }} />

            <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
              <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vidFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#0044cc" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1a6fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,200 C100,170 150,100 250,80 C350,60 380,130 480,100 C580,70 600,20 700,10 C800,0 820,80 920,60 C1020,40 1050,110 1150,90 L1200,200 Z"
                  fill="url(#vidFlame)" className="animate-fire-pulse" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full flex items-center justify-center border border-blue-600/40 bg-blue-950/30 group-hover:bg-blue-900/40 transition-all duration-300 group-hover:scale-110"
                style={{ backdropFilter: "blur(8px)" }}>
                <svg className="w-10 h-10 text-[#38b6ff] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#e8f0ff]">DNF Live Burn Test</div>
                <div className="text-sm text-[#3a5a7a]">Forest perimeter demonstration — 2024</div>
              </div>
            </div>
          </div>

          <div className="absolute top-6 right-6 bg-blue-950/60 border border-blue-700/30 rounded-full px-4 py-1 text-xs font-semibold text-[#38b6ff]"
            style={{ backdropFilter: "blur(8px)" }}>
            Live Demonstration Available
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#e8f0ff] mb-6 text-center">Test Results Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testResults.map((r, i) => (
              <div key={i} className="card-premium rounded-xl p-5 border border-blue-900/10 text-center">
                <div className="text-xs text-[#3a5a7a] mb-3 font-medium">{r.label}</div>
                <div className="flex items-center justify-around mb-3">
                  <div>
                    <div className="text-sm text-red-500 font-bold">{r.before}</div>
                    <div className="text-[10px] text-[#3a5a7a]">Before</div>
                  </div>
                  <div className="text-[#1a6fff] opacity-40">→</div>
                  <div>
                    <div className="text-sm text-[#38b6ff] font-bold">{r.after}</div>
                    <div className="text-[10px] text-[#3a5a7a]">After</div>
                  </div>
                </div>
                <div className="text-lg font-black text-fire-gradient">{r.improvement}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {demoTypes.map((d, i) => (
            <div key={i} className="card-premium rounded-xl p-5 border border-blue-900/10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-[#1a6fff]"
                style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.15)" }}>
                <d.Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#e8f0ff] mb-2">{d.title}</h4>
              <p className="text-xs text-[#3a5a7a] leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="btn-fire px-8 py-4 rounded-full text-base">
              Book a Live Demonstration
            </a>
            <a href="#contact" className="btn-outline-fire px-8 py-4 rounded-full text-base">
              Request Test Data Package
            </a>
          </div>
          <p className="text-xs text-[#3a5a7a] mt-4">Demonstrations available for qualified municipalities, industrial operators and fire authorities.</p>
        </div>
      </div>
    </section>
  );
}
