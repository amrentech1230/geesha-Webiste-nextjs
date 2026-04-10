"use client";

import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

interface Props {
  gradFrom: string;
  gradTo: string;
  benefits?: { icon: string; title: string; desc: string }[];
  otherServices?: { label: string; href: string; icon: string; grad: string }[];
}

export default function ServiceCTA({ gradFrom, gradTo, benefits, otherServices }: Props) {
  const ref  = useReveal();
  const ref2 = useReveal();

  return (
    <>
      {/* ── Why Choose Us ── */}
      <section ref={ref} className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
        <div className="dot-grid absolute inset-0 opacity-15 pointer-events-none" />
        <div className="animate-blob absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.12] blur-[100px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
        <div className="animate-blob-delay absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="reveal section-label label-blue">✦ Why Choose Us</span>
            <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-white" style={{ transitionDelay: "0.1s" }}>
              What Sets Us <span className="gradient-text-light">Apart</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits?.map((b, i) => (
              <div
                key={i}
                className="reveal group relative rounded-3xl p-7 overflow-hidden cursor-default hover:-translate-y-1 transition-all duration-400"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", transitionDelay: `${0.08 * i}s` }}
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-[0.07] transition-opacity duration-400" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: `linear-gradient(90deg, ${gradFrom}, ${gradTo})` }} />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}>
                  {b.icon}
                </div>
                <h4 className="text-white font-black text-lg">{b.title}</h4>
                <p className="text-white/45 text-sm mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section ref={ref2} className="section-mesh py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="reveal section-label label-brand">✦ Explore More</span>
            <h3 className="reveal mt-3 text-3xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
              Other <span className="gradient-text">Services</span>
            </h3>
          </div>
          <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" style={{ transitionDelay: "0.2s" }}>
            {otherServices?.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl card-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden relative"
              >
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
                <span className="text-sm font-bold text-gray-700 group-hover:text-brand transition-colors duration-200">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0d1f3c] to-[#1e0a3c]" />
        <div className="animate-blob absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.20] blur-[120px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
        <div className="animate-blob-delay absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
        <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <span className="section-label label-blue inline-flex mb-6">✦ Get Started Today</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to Build Something<br />
            <span className="text-shimmer">Extraordinary?</span>
          </h2>
          <p className="mt-6 text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
            Let's turn your vision into a powerful digital product. Book a free strategy call today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="shine-btn glow-ring px-10 py-4 text-white font-black rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}>
              🚀 Start Your Project
            </button>
            <button className="btn-outline-white px-10 py-4">
              📞 Schedule a Free Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
