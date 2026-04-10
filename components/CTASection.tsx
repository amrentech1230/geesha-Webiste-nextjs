"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0d1f3c] to-[#1e0a3c]" />

      <div className="animate-blob absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-sky-500/30 blur-[120px] pointer-events-none" />
      <div className="animate-blob-delay absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-violet-500/30 blur-[140px] pointer-events-none" />
      <div className="animate-blob-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />

      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        <span className="reveal section-label label-blue inline-flex mb-6">✦ Get Started Today</span>

        <h2 className="reveal text-4xl md:text-6xl font-black leading-tight" style={{ transitionDelay: "0.1s" }}>
          Ready to Build Something <br />
          <span className="text-shimmer">Extraordinary?</span>
        </h2>

        <p className="reveal mt-6 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed" style={{ transitionDelay: "0.2s" }}>
          Let's turn your vision into a powerful digital product. Book a free strategy call with our team today.
        </p>

        <div className="reveal mt-12 flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: "0.3s" }}>
          <button className="shine-btn glow-ring px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base">
            🚀 Start Your Project
          </button>
          <button className="btn-outline-white px-10 py-4 text-base">
            📞 Schedule a Free Call
          </button>
        </div>

        <div className="reveal mt-12 flex flex-wrap justify-center gap-4" style={{ transitionDelay: "0.4s" }}>
          {[
            { text: "No commitment required", cls: "label-blue" },
            { text: "Free consultation",       cls: "label-emerald" },
            { text: "Response within 24h",     cls: "label-violet" },
          ].map((b) => (
            <span key={b.text} className={`section-label ${b.cls} text-xs fade-in-up`}>✅ {b.text}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
