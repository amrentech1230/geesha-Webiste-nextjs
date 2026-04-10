"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  { num: "01", title: "Discovery & Strategy", desc: "We deep-dive into your goals, audience, and requirements to craft a winning roadmap.", icon: "🔍", grad: "from-sky-400 to-blue-500" },
  { num: "02", title: "Design & Prototype",   desc: "Our designers create wireframes and interactive prototypes aligned with your brand.",  icon: "🎨", grad: "from-violet-400 to-purple-500" },
  { num: "03", title: "Development",          desc: "Agile sprints with clean, scalable code. Weekly demos and full transparency.",         icon: "⚙️", grad: "from-emerald-400 to-teal-500" },
  { num: "04", title: "Testing & QA",         desc: "Rigorous testing across devices, browsers, and edge cases for a flawless product.",    icon: "🧪", grad: "from-amber-400 to-orange-500" },
  { num: "05", title: "Launch & Deploy",      desc: "Smooth deployment with CI/CD pipelines, zero downtime, production-ready infra.",      icon: "🚀", grad: "from-rose-400 to-pink-500" },
  { num: "06", title: "Support & Growth",     desc: "Post-launch monitoring, performance optimization, and continuous enhancements.",       icon: "📈", grad: "from-cyan-400 to-sky-500" },
];

export default function ProcessSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-dark py-28 overflow-hidden relative">
      <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="animate-blob absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
      <div className="animate-blob-delay absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal section-label label-violet">✦ How We Work</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-white" style={{ transitionDelay: "0.1s" }}>
            Our <span className="gradient-text-light">Process</span>
          </h2>
          <p className="reveal mt-4 text-white/50 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            A proven, transparent process that takes your idea from concept to a live, scalable product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal group relative p-8 rounded-3xl card-glass float-shadow hover:scale-[1.02] transition-all duration-400 overflow-hidden cursor-default"
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.grad} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-400 rounded-3xl`} />

              {/* watermark number */}
              <span className="num-watermark absolute -top-2 -right-2 pointer-events-none">{step.num}</span>

              <div className="text-3xl mb-4 group-hover:animate-bounce-in transition-transform duration-300">{step.icon}</div>

              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-black px-2.5 py-1 rounded-full bg-gradient-to-r ${step.grad} text-white`}>{step.num}</span>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
              </div>

              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>

              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${step.grad} transition-all duration-500 rounded-b-3xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
