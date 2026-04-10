"use client";

import { Code, Smartphone, Globe, TrendingUp, Brain, Cloud } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  { title: "Web Design",        desc: "Modern, responsive UI/UX designs tailored to your brand identity.",          icon: Globe,       grad: "from-sky-400 to-cyan-500",      light: "bg-sky-50 text-sky-600",      hover: "hover:shadow-sky-200/60" },
  { title: "Web Development",   desc: "High-performance websites using Next.js, Laravel, and modern stacks.",       icon: Code,        grad: "from-brand to-blue-500",        light: "bg-blue-50 text-blue-600",    hover: "hover:shadow-blue-200/60" },
  { title: "App Development",   desc: "Custom mobile apps for Android & iOS with smooth native-like experience.",   icon: Smartphone,  grad: "from-violet-500 to-purple-600", light: "bg-violet-50 text-violet-600",hover: "hover:shadow-violet-200/60" },
  { title: "Digital Marketing", desc: "SEO, social media, and paid campaigns to grow your business online.",        icon: TrendingUp,  grad: "from-emerald-400 to-teal-500",  light: "bg-emerald-50 text-emerald-600",hover: "hover:shadow-emerald-200/60" },
  { title: "AI Solutions",      desc: "Intelligent automation, chatbots, and AI-powered features for your product.",icon: Brain,       grad: "from-amber-400 to-orange-500",  light: "bg-amber-50 text-amber-600",  hover: "hover:shadow-amber-200/60" },
  { title: "Cloud Engineering", desc: "Scalable cloud infrastructure on AWS, GCP, and Azure with DevOps.",          icon: Cloud,       grad: "from-rose-400 to-pink-500",     light: "bg-rose-50 text-rose-600",    hover: "hover:shadow-rose-200/60" },
];

export default function ServicesSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-light py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="reveal section-label label-violet">✦ What We Do</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
            Our <span className="gradient-text-vivid">Services</span>
          </h2>
          <p className="reveal mt-4 text-slate-500 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            End-to-end digital solutions to help your business grow, scale, and lead in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`reveal tilt-card card-white group relative p-8 rounded-3xl transition-all duration-400 hover:shadow-2xl ${s.hover} cursor-pointer overflow-hidden`}
                style={{ transitionDelay: `${0.08 * i}s` }}
              >
                {/* gradient wash on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.grad} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-400 rounded-3xl`} />

                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon size={26} />
                </div>

                <h3 className="relative text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">{s.title}</h3>
                <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">{s.desc}</p>

                <div className="relative mt-6 flex items-center gap-1 text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className={`bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}>Explore Service</span>
                  <span className={`bg-gradient-to-r ${s.grad} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`}>→</span>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${s.grad} transition-all duration-500 rounded-b-3xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
