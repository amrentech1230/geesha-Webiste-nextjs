"use client";

import { useReveal } from "@/hooks/useReveal";

export default function PortfolioHero() {
  const ref = useReveal();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#060d1a] text-center">
      {/* Background layers */}
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d1a]/10 via-transparent to-[#060d1a] pointer-events-none" />

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <span className="reveal section-label label-rose inline-flex mb-6">
          ✦ Our Work
        </span>
        <h1 className="reveal text-5xl md:text-7xl font-black leading-tight text-white delay-100">
          Showcasing Digital <span className="text-shimmer">Excellence</span>
        </h1>
        <p className="reveal mt-8 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto delay-200">
          Explore a curated selection of our projects, demonstrating our commitment to quality, innovation, and client success across diverse industries.
        </p>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}