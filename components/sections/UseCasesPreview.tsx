import { IconForest, IconCity, IconBuilding, IconFireTruck, IconAirplane, IconHospital, IconSchool, IconFactory, IconHeritage, IconWater } from "@/components/Icons";

const useCases = [
  { Icon: IconForest, title: "Forests & Wildlands", desc: "Pre-treat firebreaks, perimeter corridors and defensible spaces in high-risk forest zones before fire season.", tag: "Wildfire Prevention" },
  { Icon: IconCity, title: "Urban Districts", desc: "Protect residential neighborhoods, historic quarters and dense commercial zones from rapid fire spread.", tag: "Urban Safety" },
  { Icon: IconBuilding, title: "Municipalities", desc: "Equip city administrations with proactive fire protection capability for public buildings and spaces.", tag: "Public Sector" },
  { Icon: IconFireTruck, title: "Fire Departments", desc: "Supply fire departments with DNF as an operational tool for targeted pre-suppression and perimeter treatment.", tag: "First Response" },
  { Icon: IconAirplane, title: "Airports", desc: "Protect hangars, terminals, fuel zones and runway-adjacent structures with high-stakes fire containment.", tag: "Critical Infrastructure" },
  { Icon: IconHospital, title: "Hospitals", desc: "Secure patient areas, medical records, pharmaceutical storage and evacuation routes against fire threat.", tag: "Healthcare" },
  { Icon: IconSchool, title: "Schools & Universities", desc: "Protect students, staff and irreplaceable educational environments with proven fire spread reduction.", tag: "Education" },
  { Icon: IconFactory, title: "Industrial Facilities", desc: "Contain fire risk in factories, warehouses, energy plants and chemical processing facilities.", tag: "Industry" },
  { Icon: IconHeritage, title: "Cultural Heritage", desc: "Preserve museums, archives, historic buildings and UNESCO sites against irreversible fire damage.", tag: "Heritage Protection" },
  { Icon: IconWater, title: "Sprinkler Integration", desc: "Compatible with existing sprinkler networks — DNF can be delivered through standard water suppression systems.", tag: "System Integration" },
];

export default function UseCasesPreview() {
  return (
    <section
      id="use-cases"
      className="relative py-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0c0400 30%, #0a0a0a 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b00] mb-6">Applications</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0eb] leading-tight mb-6">
            One Technology.<br />
            <span className="text-fire-gradient">Infinite Applications.</span>
          </h2>
          <p className="text-[#a8a0a0] max-w-2xl mx-auto text-lg">
            DNF was designed for scalability. From a single building to a national forest network — the same core technology adapts to every environment and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {useCases.map((uc, i) => (
            <div key={i} className="group card-premium rounded-2xl p-5 border border-orange-900/10 hover:border-orange-700/30 cursor-pointer transition-all duration-400 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,107,0,0.06) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-[#ff6b00]"
                  style={{ background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.15)" }}>
                  <uc.Icon className="w-5 h-5" />
                </div>
                <div className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#ff6b00] bg-orange-950/30 border border-orange-900/20 px-2 py-0.5 rounded-full mb-2">
                  {uc.tag}
                </div>
                <h3 className="text-sm font-bold text-[#f5f0eb] mb-2 leading-tight">{uc.title}</h3>
                <p className="text-xs text-[#6a6060] leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-fire px-8 py-4 rounded-full text-sm mr-4">Explore Your Use Case</a>
          <a href="#demonstrations" className="btn-outline-fire px-8 py-4 rounded-full text-sm">View Demonstrations</a>
        </div>
      </div>
    </section>
  );
}
