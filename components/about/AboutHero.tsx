"use client";

const badges = [
  { label: "Est. 2019", cls: "label-blue" },
  { label: "🌍 Global Clients", cls: "label-emerald" },
  { label: "30+ Projects", cls: "label-violet" },
  { label: "100% Retention", cls: "label-amber" },
];

const floatingStats = [
  { value: "30+", label: "Projects", grad: "from-sky-400 to-blue-600" },
  { value: "20+", label: "Engineers", grad: "from-violet-400 to-purple-600" },
  { value: "5+",  label: "Years", grad: "from-emerald-400 to-teal-600" },
];

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060d1a]">

      {/* ── Background layers ── */}
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="animate-blob-slow absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-sky-500/15 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d1a]/10 via-transparent to-[#060d1a] pointer-events-none" />

      {/* ── Floating particles ── */}
      {[...Array(14)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/15 animate-float pointer-events-none"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${5 + i * 7}%`,
            top: `${15 + (i % 5) * 16}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${3 + (i % 4)}s`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — text */}
          <div>
            <span className="animate-slide-up section-label label-blue inline-flex mb-8">
              ✦ Our Story
            </span>

            <h1 className="animate-slide-up text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white delay-100">
              We Build<br />
              <span className="gradient-text-vivid">Digital</span>{" "}
              <span className="gradient-text-light">Futures.</span>
            </h1>

            <p className="animate-slide-up mt-8 text-white/50 text-lg md:text-xl leading-relaxed max-w-lg delay-200">
              Founded in 2019, Geesha Solutions is a team of passionate engineers, designers,
              and strategists who believe technology should be a growth engine — not a barrier.
            </p>

            <div className="animate-slide-up mt-10 flex flex-wrap gap-3 delay-300">
              {badges.map((b) => (
                <span key={b.label} className={`section-label ${b.cls}`}>{b.label}</span>
              ))}
            </div>

            <div className="animate-slide-up mt-12 flex gap-4 delay-400">
              <button className="shine-btn glow-ring btn-primary px-8 py-4 text-base">
                🚀 Work With Us
              </button>
              <button className="btn-outline-white px-8 py-4 text-base">
                Our Work →
              </button>
            </div>
          </div>

          {/* RIGHT — stat cards */}
          <div className="flex flex-col gap-5">

            {/* Big quote card */}
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-violet-500 to-emerald-400" />
              <div className="text-5xl font-black text-white/8 absolute top-4 right-6 select-none pointer-events-none leading-none">"</div>
              <p className="text-white/70 text-lg leading-relaxed italic font-light">
                "Our mission is simple — turn your vision into a powerful digital product
                that scales with your ambition."
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-sm">G</div>
                <div>
                  <p className="text-white font-bold text-sm">Geesha Solutions</p>
                  <p className="text-white/35 text-xs">Est. 2019 · Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {floatingStats.map((s) => (
                <div
                  key={s.label}
                  className="relative rounded-2xl p-5 text-center group hover:scale-105 transition-all duration-300 cursor-default overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.grad} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                  <div className={`text-3xl font-black bg-gradient-to-br ${s.grad} bg-clip-text text-transparent`}>{s.value}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tech pills */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Technologies We Master</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Laravel", "Node.js", "AWS", "Flutter", "Python", "AI/ML"].map((t) => (
                  <span key={t} className="text-xs text-white/55 bg-white/6 border border-white/10 px-3 py-1 rounded-full hover:bg-white/12 hover:text-white/80 transition-all duration-200 cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs animate-float">
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/25 animate-ping" />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060d1a] to-transparent pointer-events-none" />
    </section>
  );
}
