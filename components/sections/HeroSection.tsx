"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    const colors = ["#1a6fff", "#38b6ff", "#60c8ff", "#0044cc", "#a0d0ff"];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
        ctx.shadowBlur = 8; ctx.shadowColor = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020810 0%, #040d1a 40%, #03080f 100%)" }}>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5 }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(26,111,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="absolute top-0 left-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,111,255,0.1) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,182,255,0.07) 0%, transparent 65%)" }} />
      <div className="absolute left-0 right-0 h-px animate-scan-line pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(56,182,255,0.5) 50%, transparent 100%)" }} />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10 pt-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* LEFT: Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 border border-blue-800/40 rounded-full px-4 py-2 bg-blue-950/20">
              <div className="w-2 h-2 rounded-full bg-[#38b6ff] animate-pulse-blue" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#38b6ff]">
                Germany-Based Fire Safety Technology
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight mb-8">
              <span className="block text-[#e8f0ff]">FIRE SPREADS</span>
              <span className="block text-[#e8f0ff]">IN SECONDS.</span>
              <span className="block mt-3 text-ice-gradient">DNF BUYS TIME.</span>
            </h1>

            <p className="text-lg text-[#6688aa] leading-relaxed mb-4 max-w-xl">
              DNF slows fire propagation, extends critical response windows, and protects{" "}
              <span className="text-[#38b6ff] font-medium">cities, forests, industrial sites,</span>{" "}
              and lives — with an eco-conscious formula engineered in Germany.
            </p>
            <p className="text-sm text-[#3a5a7a] mb-10">
              Every treated surface is a barrier. Every extra minute saves lives.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#technology" className="btn-ice px-8 py-4 rounded-full text-base">Explore Technology</a>
              <a href="#demonstrations" className="btn-outline-ice px-8 py-4 rounded-full text-base">Request a Demo</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "3×", label: "Slower Fire Spread" },
                { value: "+7min", label: "Extra Response Time" },
                { value: "40+", label: "Countries Tested" },
                { value: "0", label: "Toxic Residue" },
              ].map((stat) => (
                <div key={stat.label} className="border border-blue-900/25 rounded-xl p-3 bg-blue-950/10 text-center">
                  <div className="text-2xl font-black text-ice-gradient">{stat.value}</div>
                  <div className="text-[10px] text-[#3a5a7a] mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Shield visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 rounded-full border border-blue-800/20 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-blue-700/10 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }} />

              <div className="absolute inset-12 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(ellipse at 40% 35%, #0a1a35 0%, #040d1a 60%, #03080f 100%)",
                  border: "1px solid rgba(26,111,255,0.25)",
                  boxShadow: "0 0 80px rgba(26,111,255,0.15), inset 0 0 60px rgba(26,111,255,0.05)",
                }}>
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(26,111,255,0.5)" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="52" fill="none" stroke="rgba(26,111,255,0.3)" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(26,111,255,0.2)" strokeWidth="0.5"/>
                  <line x1="22" y1="100" x2="178" y2="100" stroke="rgba(26,111,255,0.3)" strokeWidth="0.5"/>
                  <line x1="100" y1="22" x2="100" y2="178" stroke="rgba(26,111,255,0.3)" strokeWidth="0.5"/>
                </svg>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-3 text-[#38b6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0 0 14px rgba(56,182,255,0.7))" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <div className="text-xl font-black text-ice-gradient">DNF Shield</div>
                  <div className="text-xs text-[#3a5a7a] mt-1">Active Fire Protection</div>
                </div>
              </div>

              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div key={i} className="absolute w-2.5 h-2.5 rounded-full top-1/2 left-1/2"
                  style={{
                    background: i % 2 === 0 ? "#1a6fff" : "#38b6ff",
                    transform: `rotate(${deg}deg) translateX(185px) translateY(-50%)`,
                    boxShadow: `0 0 10px ${i % 2 === 0 ? "#1a6fff" : "#38b6ff"}`,
                    opacity: 0.7,
                  }} />
              ))}

              {[
                { label: "Response +7min", style: { top: "6%", right: "-5%" } as React.CSSProperties },
                { label: "Spread −69%", style: { bottom: "18%", right: "-10%" } as React.CSSProperties },
                { label: "Eco-Certified", style: { top: "28%", left: "-8%" } as React.CSSProperties },
              ].map((chip) => (
                <div key={chip.label}
                  className="absolute text-[9px] font-bold text-[#38b6ff] border border-blue-800/40 rounded-full px-2.5 py-1 bg-blue-950/60 whitespace-nowrap"
                  style={{ ...chip.style, backdropFilter: "blur(8px)" }}>
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
