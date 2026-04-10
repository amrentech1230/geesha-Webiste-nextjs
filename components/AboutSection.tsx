"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-mesh py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="reveal-left relative">
          <div className="animate-blob absolute -top-16 -left-16 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
          <div className="animate-blob-delay absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-violet-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-gradient-to-br from-sky-200/40 to-violet-200/30 z-0" />
          <div className="relative z-10">
            {/* spinning ring */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-sky-400 via-violet-500 to-rose-400 opacity-30 blur-sm animate-spin-slow pointer-events-none" />
            <Image
              src="/about_vision.jpg"
              alt="Geesha Solutions team"
              width={600} height={400}
              className="relative rounded-3xl object-cover w-full h-auto shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 z-20 bg-gradient-to-r from-brand to-sky-500 text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-bold animate-float">
            🏆 5+ Years of Excellence
          </div>
          {/* Second badge */}
          <div className="absolute -top-5 -right-5 z-20 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-xl shadow-lg text-xs font-bold animate-float-slow">
            ⭐ 100% Retention
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <span className="section-label label-blue">✦ Who We Are</span>
          </div>

          <h2 className="reveal text-4xl md:text-5xl font-black text-gray-900 leading-tight" style={{ transitionDelay: "0.2s" }}>
            Your Partner in <br />
            <span className="gradient-text-vivid">Digital Transformation.</span>
          </h2>

          <p className="reveal text-slate-500 leading-relaxed text-lg" style={{ transitionDelay: "0.3s" }}>
            Founded with a vision to bring <strong className="text-gray-800">innovation, simplicity, and scalability</strong> into businesses,
            Geesha Solutions builds high-impact digital products for startups, SMBs, and global enterprises.
          </p>

          <div className="reveal border-t border-gray-100" style={{ transitionDelay: "0.35s" }} />

          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: "0.4s" }}>
            {[
              { title: "Our Vision", desc: "Scalable, secure, future-ready digital solutions.", color: "border-sky-200 bg-sky-50/60", dot: "bg-sky-500" },
              { title: "Expert Team", desc: "Agile developers and AI specialists on every project.", color: "border-violet-200 bg-violet-50/60", dot: "bg-violet-500" },
            ].map((item) => (
              <div key={item.title} className={`p-5 rounded-2xl border ${item.color} hover:shadow-md transition-all duration-300 group`}>
                <div className={`w-2 h-2 rounded-full ${item.dot} mb-3 group-hover:scale-150 transition-transform duration-300`} />
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal flex items-center gap-8 pt-2" style={{ transitionDelay: "0.5s" }}>
            {[["30+", "Projects", "from-sky-400 to-blue-600"], ["5+", "Years", "from-violet-400 to-purple-600"], ["20+", "Engineers", "from-emerald-400 to-teal-600"]].map(([num, label, grad]) => (
              <div key={label} className="text-center group cursor-default">
                <div className={`text-3xl font-black bg-gradient-to-br ${grad} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>{num}</div>
                <div className="text-xs tracking-widest text-slate-400 mt-1 uppercase">{label}</div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ transitionDelay: "0.6s" }}>
            <button className="shine-btn btn-primary">Learn More About Us →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
