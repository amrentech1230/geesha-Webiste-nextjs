"use client";

import { useReveal } from "@/hooks/useReveal";

const timeline = [
  { year: "2019", title: "Founded",          desc: "Geesha Solutions was born with a vision to make enterprise-grade tech accessible to every business.",  grad: "from-sky-400 to-blue-600",      icon: "🌱" },
  { year: "2020", title: "First 10 Clients", desc: "Delivered 10 successful projects across e-commerce, healthcare, and fintech in our very first year.",   grad: "from-violet-400 to-purple-600", icon: "🤝" },
  { year: "2022", title: "Team of 15",       desc: "Grew to a team of 15 engineers and designers, expanding into AI and cloud engineering services.",        grad: "from-emerald-400 to-teal-600",  icon: "👥" },
  { year: "2024", title: "Global Reach",     desc: "Now serving clients across 10+ countries with 30+ successful projects and a 100% retention rate.",       grad: "from-amber-400 to-orange-500",  icon: "🌍" },
];

const values = [
  { emoji: "🎯", title: "Client-First",  desc: "Every decision we make starts with your goals. We listen deeply, align fully, and deliver exactly what your business needs.",                    grad: "from-sky-400 to-blue-500" },
  { emoji: "⚡", title: "Speed",         desc: "Agile sprints, lean processes, and zero fluff. We move fast without ever sacrificing quality or cutting corners on what matters.",               grad: "from-amber-400 to-orange-500" },
  { emoji: "🔒", title: "Security",      desc: "Enterprise-grade security is baked into every layer of every product we build — not bolted on as an afterthought.",                             grad: "from-violet-400 to-purple-500" },
  { emoji: "🌱", title: "Growth",        desc: "We architect solutions that scale with your ambition. When your business grows, your technology grows seamlessly alongside it.",                  grad: "from-emerald-400 to-teal-500" },
  { emoji: "💡", title: "Innovation",    desc: "We stay ahead of the curve — constantly exploring AI, cloud, and emerging tech to bring fresh, powerful ideas to every challenge.",             grad: "from-rose-400 to-pink-500" },
  { emoji: "🤝", title: "Transparency",  desc: "No surprises. Honest timelines, clear communication, and full visibility into every stage of your project from kickoff to launch.",             grad: "from-cyan-400 to-sky-500" },
];

export default function MissionSection() {
  const timelineRef = useReveal();
  const valuesRef   = useReveal();

  return (
    <>
      {/* ── STORY TIMELINE ── */}
      <section ref={timelineRef} className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
        <div className="dot-grid absolute inset-0 opacity-15 pointer-events-none" />
        <div className="animate-blob absolute -top-20 right-0 w-[450px] h-[450px] rounded-full bg-sky-500/12 blur-[100px] pointer-events-none" />
        <div className="animate-blob-delay absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-violet-500/12 blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-20">
            <span className="reveal section-label label-blue">✦ Our Journey</span>
            <h2 className="reveal mt-5 text-4xl md:text-5xl font-black text-white" style={{ transitionDelay: "0.1s" }}>
              From Idea to <span className="gradient-text-light">Global Impact</span>
            </h2>
            <p className="reveal mt-4 text-white/40 max-w-lg mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
              Five years of building, learning, and growing alongside our clients.
            </p>
          </div>

          {/* Timeline — vertical center line */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent hidden md:block" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`reveal flex flex-col md:flex-row items-center gap-6 md:gap-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  style={{ transitionDelay: `${0.12 * i}s` }}
                >
                  {/* Card */}
                  <div className="flex-1 w-full md:max-w-[420px]">
                    <div
                      className="group relative rounded-3xl p-7 hover:-translate-y-1 transition-all duration-400 overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.grad}`} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-400 rounded-3xl`} />

                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="text-white font-black text-xl">{item.title}</h4>
                      </div>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>

                      {/* bottom sweep line */}
                      <div className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r ${item.grad} transition-all duration-500`} />
                    </div>
                  </div>

                  {/* Year node */}
                  <div className="shrink-0 z-10 flex flex-col items-center gap-1">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.grad} flex items-center justify-center text-white font-black text-sm shadow-2xl ring-4 ring-white/5`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Spacer (opposite side) */}
                  <div className="flex-1 hidden md:block md:max-w-[420px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section ref={valuesRef} className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg,#06040f 0%,#0d0a1e 50%,#060d1a 100%)" }}>
        <div className="dot-grid absolute inset-0 opacity-15 pointer-events-none" />
        <div className="animate-blob absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/12 blur-[120px] pointer-events-none" />
        <div className="animate-blob-delay absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header — split */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <span className="reveal section-label label-violet">✦ What Drives Us</span>
              <h2 className="reveal mt-5 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight" style={{ transitionDelay: "0.1s" }}>
                Our Core<br />
                <span className="gradient-text-vivid">Values</span>
              </h2>
            </div>
            <p className="reveal text-white/40 text-lg leading-relaxed lg:pb-1" style={{ transitionDelay: "0.2s" }}>
              The principles that guide every project, every decision, and every single line of code we write.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="reveal group relative rounded-3xl overflow-hidden cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transitionDelay: `${0.08 * i}s`,
                }}
              >
                {/* left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${v.grad} opacity-50 group-hover:opacity-100 transition-opacity duration-400`} />

                {/* hover bg wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${v.grad} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                {/* number watermark */}
                <span
                  className="absolute -bottom-3 -right-1 text-[6.5rem] font-black leading-none select-none pointer-events-none"
                  style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-start gap-5 p-7">
                  {/* icon box */}
                  <div className={`shrink-0 w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${v.grad} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {v.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-black text-lg">{v.title}</h4>
                    <p className="text-white/40 text-sm mt-1.5 leading-relaxed">{v.desc}</p>
                    <div className={`mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r ${v.grad} transition-all duration-500`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission banner */}
          <div className="reveal mt-6 relative rounded-3xl overflow-hidden p-10 md:p-14 text-center" style={{ transitionDelay: "0.55s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/8 via-violet-500/8 to-emerald-500/8" />
            <div className="absolute inset-0 rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }} />
            <div className="animate-blob absolute -top-16 -left-16 w-[220px] h-[220px] rounded-full bg-sky-500/20 blur-[60px] pointer-events-none" />
            <div className="animate-blob-delay absolute -bottom-16 -right-16 w-[220px] h-[220px] rounded-full bg-violet-500/20 blur-[60px] pointer-events-none" />
            <div className="dot-grid absolute inset-0 opacity-8 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-5">Our Mission</p>
              <p className="text-white text-2xl md:text-4xl font-black leading-snug max-w-3xl mx-auto">
                To empower businesses with{" "}
                <span className="gradient-text-vivid">scalable, secure,</span>{" "}
                and <span className="gradient-text-light">future-ready</span>{" "}
                digital solutions that create lasting impact.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
