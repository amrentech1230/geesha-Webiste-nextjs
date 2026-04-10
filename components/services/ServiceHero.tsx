"use client";

import Link from "next/link";

interface Props {
  label: string;
  title: string;
  highlight: string;
  desc: string;
  grad: string;
  gradFrom: string;
  gradTo: string;
  emoji: string;
  badges: string[];
  stats: { value: string; label: string }[];
}

export default function ServiceHero({ label, title, highlight, desc, grad, gradFrom, gradTo, emoji, badges, stats }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#060d1a] pt-32 pb-0">
      {/* bg blobs */}
      <div className={`animate-blob absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full opacity-[0.18] blur-[140px] pointer-events-none`} style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
      <div className={`animate-blob-delay absolute top-0 right-[-12%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none`} style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060d1a] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* breadcrumb */}
        <div className="animate-slide-up flex items-center gap-2 text-white/25 text-xs mb-8">
          <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white/50 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/50">{label}</span>
        </div>

        {/* label pill */}
        <div className="animate-slide-up mb-5 delay-100">
          <span className="section-label label-blue">✦ {label}</span>
        </div>

        {/* headline */}
        <h1 className="animate-slide-up text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.02] text-white max-w-4xl delay-200">
          {title}{" "}
          <span style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {highlight}
          </span>
        </h1>

        {/* desc */}
        <p className="animate-slide-up mt-7 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl delay-300">
          {desc}
        </p>

        {/* tech badges */}
        <div className="animate-slide-up mt-7 flex flex-wrap gap-2 delay-400">
          {badges.map((b) => (
            <span key={b} className="text-xs text-white/50 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white/80 transition-all duration-200 cursor-default">
              {b}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-slide-up mt-10 flex flex-wrap gap-4 delay-500">
          <button className="shine-btn glow-ring btn-primary px-8 py-4 text-base">
            🚀 Get a Free Quote
          </button>
          <button className="btn-outline-white px-8 py-4 text-base">
            View Our Work →
          </button>
        </div>

        {/* stats row */}
        <div className="animate-slide-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-px border-t border-white/8 delay-600">
          {stats.map((s, i) => (
            <div key={i} className="py-8 px-4 text-center border-r border-white/8 last:border-r-0">
              <div className="text-3xl md:text-4xl font-black" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {s.value}
              </div>
              <div className="text-white/35 text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
