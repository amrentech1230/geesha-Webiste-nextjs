"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 30,  suffix: "+", label: "Successful Projects", icon: "🚀", color: "from-sky-400 to-blue-600",     glow: "rgba(14,165,233,0.3)" },
  { target: 20,  suffix: "+", label: "Tech Engineers",       icon: "👨‍💻", color: "from-violet-400 to-purple-600", glow: "rgba(124,58,237,0.3)" },
  { target: 5,   suffix: "+", label: "Years Experience",     icon: "📅", color: "from-emerald-400 to-teal-600", glow: "rgba(5,150,105,0.3)"  },
  { target: 100, suffix: "%", label: "Retention Rate",       icon: "❤️", color: "from-rose-400 to-pink-600",    glow: "rgba(225,29,72,0.3)"  },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const iv = setInterval(() => {
      setCounts((prev) => {
        const next = prev.map((c, i) => { const step = Math.ceil(stats[i].target / 45); return c + step >= stats[i].target ? stats[i].target : c + step; });
        if (next.every((v, i) => v >= stats[i].target)) clearInterval(iv);
        return next;
      });
    }, 30);
    return () => clearInterval(iv);
  }, [started]);

  return (
    <section ref={ref} className="section-mesh-dark py-20 relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="group relative text-center p-8 rounded-3xl card-glass hover:scale-105 transition-all duration-400 cursor-default overflow-hidden float-shadow"
            style={{ boxShadow: `0 0 40px ${s.glow}` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-5 group-hover:opacity-10 transition-opacity duration-400 rounded-3xl`} />
            <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{s.icon}</div>
            <div className={`text-5xl font-black bg-gradient-to-br ${s.color} bg-clip-text text-transparent tabular-nums`}>
              {counts[i]}{s.suffix}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
