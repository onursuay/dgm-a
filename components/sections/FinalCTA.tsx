import React from "react";
// FinalCTA.tsx — Ice & Steel design — centered big headline + 3 buttons + 3-col info row
import { IconEmail, IconPin, IconGlobe } from "@/components/Icons";

interface InfoItem {
  Icon: (props: { className?: string }) => React.ReactElement;
  label: string;
  value: string;
}

const infoItems: InfoItem[] = [
  {
    Icon: IconEmail,
    label: "Email Us",
    value: "info@dnf-technology.de",
  },
  {
    Icon: IconPin,
    label: "Headquartered In",
    value: "Germany",
  },
  {
    Icon: IconGlobe,
    label: "Operating In",
    value: "8+ Countries",
  },
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-10 overflow-hidden"
      style={{ background: "#020c1b" }}
    >
      {/* Deep radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(26,111,255,0.12) 0%, rgba(26,111,255,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Floating particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-ember-float"
            style={{
              left: `${8 + i * 6.5}%`,
              bottom: "25%",
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              background: i % 2 === 0 ? "#1a6fff" : "#38b6ff",
              boxShadow: `0 0 6px ${i % 2 === 0 ? "#1a6fff" : "#38b6ff"}`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${3 + (i % 3)}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        {/* Eyebrow with flanking lines */}
        <div className="inline-flex items-center gap-3 mb-10">
          <div
            className="h-px w-16"
            style={{ background: "linear-gradient(to right, transparent, #1a6fff)" }}
          />
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#38b6ff]">
            Take Action
          </span>
          <div
            className="h-px w-16"
            style={{ background: "linear-gradient(to left, transparent, #1a6fff)" }}
          />
        </div>

        {/* Big headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#e8f0ff] leading-[0.95] mb-8">
          The Next Fire
          <br />
          <span className="text-ice-gradient">Won&apos;t Wait.</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-[#6688aa] leading-relaxed mb-4 max-w-2xl mx-auto">
          Protection is a decision made before disaster — not during it. DNF gives municipalities,
          industries and fire authorities the tool to make that decision count.
        </p>
        <p className="text-base text-[#3a5a7a] mb-12 max-w-xl mx-auto">
          Contact us to request information, schedule a demonstration, or explore a partnership
          opportunity.
        </p>

        {/* 3 CTA buttons side by side */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="mailto:info@dnf-technology.de"
            className="btn-ice px-10 py-5 rounded-full text-sm font-bold w-full sm:w-auto"
          >
            Request Information
          </a>
          <a
            href="#demonstrations"
            className="btn-outline-ice px-10 py-5 rounded-full text-sm w-full sm:w-auto"
          >
            Book a Demonstration
          </a>
          <a
            href="#partners"
            className="px-10 py-5 rounded-full text-sm font-semibold w-full sm:w-auto transition-all duration-300"
            style={{
              border: "1px solid rgba(56,182,255,0.2)",
              color: "#6688aa",
            }}
          >
            Explore Partnership
          </a>
        </div>

        {/* 3-col info row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {infoItems.map((item, i) => {
            const IIcon = item.Icon;
            return (
              <div
                key={i}
                className="text-center rounded-xl p-5"
                style={{
                  background: "rgba(4,14,32,0.7)",
                  border: "1px solid rgba(26,111,255,0.13)",
                  borderTop: "2px solid rgba(26,111,255,0.4)",
                }}
              >
                <div className="w-8 h-8 mx-auto mb-3 text-[#38b6ff]">
                  <IIcon className="w-8 h-8" />
                </div>
                <div className="text-xs text-[#3a5a7a] mb-1 tracking-wide font-medium">
                  {item.label}
                </div>
                <div className="text-sm text-[#e8f0ff] font-semibold">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
