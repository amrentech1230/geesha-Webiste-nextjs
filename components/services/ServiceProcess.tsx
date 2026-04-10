"use client";

import { useReveal } from "@/hooks/useReveal";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

interface Props {
  gradFrom: string;
  gradTo: string;
  steps: Step[];
}

export default function ServiceProcess({ gradFrom, gradTo, steps }: Props) {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-mesh py-24 overflow-hidden relative">
      <div className="animate-blob absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal section-label label-brand">✦ How We Work</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="reveal mt-4 text-slate-500 max-w-lg mx-auto" style={{ transitionDelay: "0.2s" }}>
            A clear, transparent process from first call to final launch.
          </p>
        </div>

        <div className="relative">
          {/* connecting dashed line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed border-gray-200 hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal group flex flex-col items-center text-center cursor-default"
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                {/* circle number */}
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300 z-10"
                  style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
                >
                  {step.icon}
                  {/* ring */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-ping" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }} />
                </div>

                {/* step badge */}
                <span className="text-xs font-black uppercase tracking-widest mb-2" style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Step {step.num}
                </span>

                <h4 className="font-black text-gray-900 text-lg">{step.title}</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
