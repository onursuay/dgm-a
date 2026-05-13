const ForestIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L8 8H5l7 6-2 2 6-2-2 2 7-6h-3L12 2z" />
    <path d="M9 14l-4 4h14l-4-4" />
    <line x1="12" y1="20" x2="12" y2="22" />
  </svg>
);

const CityIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="5" height="13" />
    <rect x="8" y="5" width="8" height="17" />
    <rect x="16" y="11" width="5" height="11" />
    <line x1="1" y1="22" x2="23" y2="22" />
    <line x1="10" y1="9" x2="10" y2="9.01" strokeWidth="2" />
    <line x1="14" y1="9" x2="14" y2="9.01" strokeWidth="2" />
    <line x1="10" y1="13" x2="10" y2="13.01" strokeWidth="2" />
    <line x1="14" y1="13" x2="14" y2="13.01" strokeWidth="2" />
  </svg>
);

const IndustrialIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="20" height="8" />
    <path d="M2 14l5-9 4 5 4-7 4 11" />
    <line x1="6" y1="14" x2="6" y2="22" />
    <line x1="12" y1="14" x2="12" y2="22" />
    <line x1="18" y1="14" x2="18" y2="22" />
    <path d="M9 5V3M9 5a2 2 0 01-2 2" />
  </svg>
);

const WildlifeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    {/* Paw print */}
    <ellipse cx="9" cy="5.5" rx="2" ry="2.5" />
    <ellipse cx="15" cy="5.5" rx="2" ry="2.5" />
    <ellipse cx="5.5" cy="9.5" rx="1.6" ry="2.2" />
    <ellipse cx="18.5" cy="9.5" rx="1.6" ry="2.2" />
    <path d="M12 9c-3.5 0-6.5 2.2-6.5 5.5 0 2 1.2 3.8 3 4.5.5.2 1 .5 1.8 1 .7.4 1.1.5 1.7.5s1-.1 1.7-.5c.8-.5 1.3-.8 1.8-1 1.8-.7 3-2.5 3-4.5C18.5 11.2 15.5 9 12 9z" />
  </svg>
);

const HeritageIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

const HumanIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="5" r="2" />
    <circle cx="15" cy="5" r="2" />
    <path d="M6 22v-5l-1-5 4-3 1 4 1-4 4 3-1 5v5" />
    <path d="M9 9l-3 2M15 9l3 2" />
  </svg>
);

const threats = [
  {
    Icon: ForestIcon,
    title: "Forest Ecosystems",
    stat: "4.3M ha",
    statLabel: "burned globally per year",
    desc: "Forest fires obliterate ecosystems, habitats, and biodiversity in hours. Wildlife perishes, carbon sinks collapse, and recovery takes decades.",
    color: "from-red-950 to-orange-950",
    border: "border-red-900/30",
  },
  {
    Icon: CityIcon,
    title: "Urban Areas",
    stat: "72 sec",
    statLabel: "to flashover in a room",
    desc: "Once fire reaches flashover, escape becomes nearly impossible. Urban density turns local fires into neighborhood-scale catastrophes.",
    color: "from-orange-950 to-amber-950",
    border: "border-orange-900/30",
  },
  {
    Icon: IndustrialIcon,
    title: "Industrial Facilities",
    stat: "$2.1B",
    statLabel: "in losses per major incident",
    desc: "Chemical plants, energy facilities and warehouses face catastrophic chain reactions when fire spreads unchecked through critical zones.",
    color: "from-amber-950 to-red-950",
    border: "border-amber-900/30",
  },
  {
    Icon: WildlifeIcon,
    title: "Wildlife & Animals",
    stat: "1B+",
    statLabel: "animals lost in single events",
    desc: "Animals cannot outrun modern wildfires. Entire species face regional extinction when fire corridors outpace natural escape routes.",
    color: "from-red-950 to-orange-950",
    border: "border-red-900/30",
  },
  {
    Icon: HeritageIcon,
    title: "Cultural Heritage",
    stat: "Irreplaceable",
    statLabel: "loss is permanent",
    desc: "Historic buildings, archives, art collections, and cultural landmarks — once gone, they are gone forever. Fire does not discriminate.",
    color: "from-orange-950 to-red-950",
    border: "border-orange-900/30",
  },
  {
    Icon: HumanIcon,
    title: "Human Lives",
    stat: "350K",
    statLabel: "deaths from fire annually",
    desc: "Fire kills faster than most emergencies. Insufficient response time is the primary cause. Every second of delay is a second that can cost lives.",
    color: "from-red-950 to-amber-950",
    border: "border-red-900/30",
  },
];

export default function FireProblem() {
  return (
    <section
      id="technology"
      className="relative py-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0500 50%, #0a0a0a 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(180,40,0,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b00] mb-6">
            The Scale of the Problem
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0eb] leading-tight mb-6">
            Fire Does Not Wait.<br />
            <span className="text-fire-gradient">Neither Should We.</span>
          </h2>
          <p className="text-[#a8a0a0] text-lg max-w-2xl mx-auto leading-relaxed">
            Every year, fire consumes lives, environments, economies, and heritage. The challenge is not just extinguishing fire — it is slowing its advance long enough for humans to respond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((threat, i) => (
            <div
              key={i}
              className={`card-premium rounded-2xl p-7 bg-gradient-to-br ${threat.color} ${threat.border} border relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl" />
              <div className="relative z-10">
                {/* Vector icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#ff6b00]"
                  style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)" }}>
                  <threat.Icon />
                </div>
                <div className="text-3xl font-black text-fire-gradient mb-1">{threat.stat}</div>
                <div className="text-xs text-[#a8a0a0] mb-3 tracking-wide uppercase">{threat.statLabel}</div>
                <h3 className="text-lg font-bold text-[#f5f0eb] mb-3">{threat.title}</h3>
                <p className="text-sm text-[#a8a0a0] leading-relaxed">{threat.desc}</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: "radial-gradient(circle, #ff6b00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-8 rounded-2xl border border-orange-900/20 bg-orange-950/10">
          <p className="text-xl md:text-2xl font-bold text-[#f5f0eb]">
            The window between ignition and catastrophe is{" "}
            <span className="text-fire-gradient">measured in minutes.</span>
          </p>
          <p className="text-[#a8a0a0] mt-3 max-w-xl mx-auto">
            DNF was engineered to widen that window. Not to replace firefighters, but to give them the time they need to save what matters.
          </p>
        </div>
      </div>
    </section>
  );
}
