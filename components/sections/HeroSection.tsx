"use client";
import { useEffect, useRef } from "react";

const embers = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 6 + 2,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 3,
  color: i % 3 === 0 ? "#ff9500" : i % 3 === 1 ? "#ff6b00" : "#cc2200",
}));

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.5 + 0.5),
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.8 + 0.2,
        color: ["#ff6b00", "#ff9500", "#cc2200", "#ff4500"][Math.floor(Math.random() * 4)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.003;
        if (p.y < -20 || p.alpha <= 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.alpha = Math.random() * 0.8 + 0.2;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #120500 50%, #0a0a0a 100%)" }}
    >
      {/* Deep fire radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(180,40,0,0.25) 0%, rgba(255,107,0,0.08) 40%, transparent 70%)",
        }}
      />
      {/* Top vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0,0,0,0.8) 0%, transparent 60%)",
        }}
      />

      {/* Ember canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Abstract heat wave lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-heat-wave"
            style={{
              bottom: `${10 + i * 10}%`,
              left: 0,
              right: 0,
              height: "1px",
              background: `linear-gradient(90deg, transparent 0%, rgba(255,107,0,${0.03 + i * 0.01}) ${20 + i * 5}%, rgba(255,150,0,${0.06 + i * 0.01}) 50%, rgba(255,107,0,${0.03 + i * 0.01}) ${80 - i * 5}%, transparent 100%)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Abstract fire silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 256" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fireGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cc2200" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#ff6b00" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,256 L0,180 C80,160 120,100 200,80 C260,65 300,120 380,90 C440,68 480,20 560,10 C640,0 680,60 760,50 C840,40 880,10 960,20 C1040,30 1080,80 1160,70 C1240,60 1300,100 1380,120 L1440,130 L1440,256 Z"
            fill="url(#fireGrad)"
            className="animate-heat-wave"
          />
          <path
            d="M0,256 L0,200 C100,185 140,140 220,120 C300,100 340,150 420,130 C500,110 540,60 620,50 C700,40 740,100 820,85 C900,70 940,30 1020,40 C1100,50 1140,100 1220,90 C1300,80 1360,120 1440,140 L1440,256 Z"
            fill="rgba(255,107,0,0.06)"
            className="animate-heat-wave"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#ff9500] bg-orange-950/30 border border-orange-900/40 px-4 py-2 rounded-full">
            Germany-Based Fire Safety Technology
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
          <span className="block text-[#f5f0eb]">FIRE SPREADS</span>
          <span className="block text-[#f5f0eb]">IN SECONDS.</span>
          <span className="block mt-2">
            <span className="text-fire-gradient">DNF BUYS TIME.</span>
          </span>
        </h1>

        {/* Sub headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#a8a0a0] max-w-3xl mx-auto mb-4 leading-relaxed font-light">
          DNF slows fire propagation, extends critical response windows, and protects{" "}
          <span className="text-[#ff9500] font-medium">cities, forests, industrial sites,</span>{" "}
          and lives — with an eco-conscious formula engineered in Germany.
        </p>
        <p className="text-sm text-[#6a6060] mb-14 tracking-wide">
          Every minute of additional response time saves lives. Every treated surface is a barrier.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#technology" className="btn-fire px-8 py-4 rounded-full text-base w-full sm:w-auto">
            <span className="relative z-10">Explore Technology</span>
          </a>
          <a href="#demonstrations" className="btn-outline-fire px-8 py-4 rounded-full text-base w-full sm:w-auto">
            Request a Demo
          </a>
          <a
            href="https://wa.me/491234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-white/10 text-[#a8a0a0] hover:text-white hover:border-white/30 transition-all w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Contact
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "3×", label: "Slower Fire Spread", sub: "with DNF treatment" },
            { value: "+7min", label: "Extra Response Time", sub: "per treated area" },
            { value: "40+", label: "Countries Tested", sub: "across environments" },
            { value: "0", label: "Toxic Residue", sub: "eco-safe formula" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 border border-white/5 rounded-xl bg-white/[0.02]">
              <div className="text-3xl font-black text-fire-gradient mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-[#f5f0eb] mb-1">{stat.label}</div>
              <div className="text-[10px] text-[#6a6060] tracking-wide">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
