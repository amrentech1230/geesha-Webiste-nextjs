"use client";

import { useReveal } from "@/hooks/useReveal";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Props {
  grad: string;
  gradFrom: string;
  gradTo: string;
  serviceTitle: string;
  serviceDesc: string;
  features: Feature[];
  tools: string[];
}

export default function ServiceFeatures({ grad, gradFrom, gradTo, serviceTitle, serviceDesc, features, tools }: Props) {
  const ref = useReveal();

  return (
    <>
      {/* ── What We Offer ── */}
      <section ref={ref} className="section-light py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">

            {/* LEFT — sticky panel */}
            <div className="lg:sticky lg:top-32">
              <span className="reveal section-label label-violet">✦ What We Offer</span>
              <h2 className="reveal mt-5 text-4xl md:text-5xl font-black text-gray-900 leading-tight" style={{ transitionDelay: "0.1s" }}>
                {serviceTitle}<br />
                <span style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Services
                </span>
              </h2>
              <p className="reveal mt-5 text-slate-500 leading-relaxed" style={{ transitionDelay: "0.2s" }}>
                {serviceDesc}
              </p>
              <div className="reveal mt-8" style={{ transitionDelay: "0.3s" }}>
                <button
                  className="shine-btn btn-primary px-7 py-3 text-sm"
                  style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
                >
                  Start a Project →
                </button>
              </div>
            </div>

            {/* RIGHT — feature list */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="reveal group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden relative"
                  style={{ transitionDelay: `${0.07 * i}s` }}
                >
                  {/* left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(180deg, ${gradFrom}, ${gradTo})` }} />

                  {/* icon */}
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
                  >
                    {f.icon}
                  </div>

                  <div>
                    <h4 className="font-black text-gray-900 text-lg">{f.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
                  </div>

                  {/* number */}
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl font-black text-gray-50 select-none pointer-events-none group-hover:text-gray-100 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools & Technologies ── */}
      <section className="py-16 overflow-hidden" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="shrink-0">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Tools & Technologies</p>
              <h3 className="mt-1 text-2xl font-black text-gray-900">We Work With</h3>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block" />
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="group text-sm font-semibold text-slate-600 bg-white border border-gray-200 px-4 py-2 rounded-full hover:border-transparent hover:text-white hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ ["--hover-bg" as string]: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${gradFrom}, ${gradTo})`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = ""; }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
