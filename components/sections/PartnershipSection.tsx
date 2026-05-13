import { IconBuilding, IconFireTruck, IconFactory, IconHandshake } from "@/components/Icons";

const partnerTypes = [
  {
    Icon: IconBuilding,
    title: "Municipalities & Cities",
    desc: "City administrations integrate DNF into urban fire safety planning, public building protection and emergency preparedness programs.",
    benefits: ["Priority access to new deployments", "Dedicated technical support", "Co-branded safety programs", "Response team training"],
    cta: "Municipal Partnership",
  },
  {
    Icon: IconFireTruck,
    title: "Fire Departments",
    desc: "Fire brigades use DNF as an operational tool — integrating it into pre-suppression protocols, rapid response kits and large-scale wildfire operations.",
    benefits: ["Operational deployment kits", "Tactical integration support", "Training & certification", "Field performance tracking"],
    cta: "Department Partnership",
  },
  {
    Icon: IconFactory,
    title: "Industrial Operators",
    desc: "Manufacturers, energy companies and logistics operators integrate DNF into their fire safety management systems and compliance programs.",
    benefits: ["Site assessment & planning", "System integration support", "Compliance documentation", "Ongoing supply agreement"],
    cta: "Industrial Partnership",
  },
  {
    Icon: IconHandshake,
    title: "Distributors & Resellers",
    desc: "Regional distributors carry DNF for local markets — serving municipalities, industry and fire departments with local expertise and supply chain.",
    benefits: ["Exclusive territory agreements", "Sales & technical training", "Marketing support", "Certified reseller status"],
    cta: "Become a Distributor",
  },
];

export default function PartnershipSection() {
  return (
    <section
      id="partners"
      className="relative py-10 overflow-hidden"
      style={{ background: "#030810" }}
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #1a6fff 0, #1a6fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#1a6fff] mb-6">
            Partnerships
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0ff] leading-tight mb-6">
            Build the Future of<br />
            <span className="text-fire-gradient">Fire Safety Together.</span>
          </h2>
          <p className="text-[#6688aa] max-w-2xl mx-auto text-lg">
            DNF grows through strategic partnerships with public authorities, emergency services, industry leaders and regional distributors. We are actively building our global network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {partnerTypes.map((pt, i) => (
            <div key={i} className="card-premium rounded-2xl p-8 border border-blue-900/10 hover:border-blue-700/25 transition-all duration-400 group">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-[#1a6fff]"
                  style={{ background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.15)" }}>
                  <pt.Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#e8f0ff] mb-2">{pt.title}</h3>
                  <p className="text-sm text-[#6688aa] leading-relaxed mb-4">{pt.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {pt.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-[#6688aa]">
                        <span className="text-[#1a6fff] shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact"
                    className="inline-block text-xs font-bold text-[#38b6ff] border border-blue-700/30 rounded-full px-4 py-1.5 hover:bg-blue-950/30 transition-colors">
                    {pt.cta} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-blue-700/30 p-12 text-center"
          style={{ background: "linear-gradient(135deg, #080f20 0%, #0a1535 50%, #080f20 100%)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(26,111,255,0.15) 0%, transparent 60%)" }} />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 text-[#38b6ff]">
              <IconHandshake className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-black text-[#e8f0ff] mb-4">
              Become a DNF Partner
            </h3>
            <p className="text-[#6688aa] max-w-xl mx-auto mb-8">
              We are seeking forward-thinking partners in fire safety, emergency management, municipal planning and distribution. If you share our mission — let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-fire px-8 py-4 rounded-full text-base">
                Apply for Partnership
              </a>
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer"
                className="btn-outline-fire px-8 py-4 rounded-full text-base flex items-center gap-2 justify-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Quick WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
