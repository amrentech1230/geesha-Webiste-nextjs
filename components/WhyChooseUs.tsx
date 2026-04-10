"use client";

import { ShieldCheck, Zap, Users, HeadphonesIcon, BarChart3, Lightbulb } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const reasons = [
  { icon: ShieldCheck, title: "Trusted & Secure",    desc: "Enterprise-grade security built into every solution we deliver.",          grad: "from-sky-400 to-blue-500",      bg: "bg-sky-50",     text: "text-sky-600" },
  { icon: Zap,         title: "Fast Delivery",        desc: "Agile sprints and lean processes ensure on-time project delivery.",        grad: "from-amber-400 to-orange-500",  bg: "bg-amber-50",   text: "text-amber-600" },
  { icon: Users,       title: "Expert Team",          desc: "Seasoned developers, designers, and AI specialists on every project.",     grad: "from-violet-400 to-purple-500", bg: "bg-violet-50",  text: "text-violet-600" },
  { icon: HeadphonesIcon,title:"24/7 Support",        desc: "Round-the-clock support to keep your systems running smoothly.",          grad: "from-emerald-400 to-teal-500",  bg: "bg-emerald-50", text: "text-emerald-600" },
  { icon: BarChart3,   title: "Data-Driven",          desc: "Every decision backed by analytics, metrics, and real insights.",         grad: "from-rose-400 to-pink-500",     bg: "bg-rose-50",    text: "text-rose-600" },
  { icon: Lightbulb,   title: "Innovative Thinking",  desc: "We bring fresh ideas and cutting-edge tech to every challenge.",          grad: "from-cyan-400 to-sky-500",      bg: "bg-cyan-50",    text: "text-cyan-600" },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-mesh py-28 overflow-hidden relative">
      <div className="animate-blob absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-300/15 blur-3xl pointer-events-none" />
      <div className="animate-blob-delay absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-sky-300/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal section-label label-emerald">✦ Why Us</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
            Why Businesses <span className="gradient-text">Choose Geesha</span>
          </h2>
          <p className="reveal mt-4 text-slate-500 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            We combine technical excellence with business understanding to deliver solutions that truly matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="reveal tilt-card card-white group flex gap-5 p-7 rounded-3xl hover:-translate-y-2 transition-all duration-400 cursor-default"
                style={{ transitionDelay: `${0.08 * i}s` }}
              >
                <div className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${r.grad} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 animate-wiggle transition-all duration-300`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className={`font-bold text-gray-900 underline-grow group-hover:${r.text} transition-colors duration-300`}>{r.title}</h4>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
