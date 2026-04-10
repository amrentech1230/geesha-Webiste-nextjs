"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  { title: "FinTech Dashboard",   category: "Web Dev",      grad: "from-sky-500 via-blue-600 to-brand",          desc: "Real-time analytics dashboard for a leading fintech startup." },
  { title: "E-Commerce Platform", category: "Design & Dev", grad: "from-violet-500 via-purple-600 to-indigo-700", desc: "Full-stack e-commerce with AI-powered recommendations." },
  { title: "Healthcare App",      category: "App Dev",      grad: "from-emerald-400 via-teal-500 to-cyan-600",    desc: "Patient management mobile app for a hospital chain." },
  { title: "AI Chatbot SaaS",     category: "AI",           grad: "from-amber-400 via-orange-500 to-red-500",     desc: "GPT-powered customer support chatbot with CRM integration." },
  { title: "Logistics Portal",    category: "Web Dev",      grad: "from-slate-500 via-gray-600 to-zinc-700",      desc: "Real-time shipment tracking and fleet management system." },
  { title: "EdTech Platform",     category: "Design & Dev", grad: "from-rose-400 via-pink-500 to-fuchsia-600",    desc: "Online learning platform with live classes and assessments." },
];

const tabs = ["All", "Web Dev", "Design & Dev", "App Dev", "AI"];

export default function PortfolioGrid() {
  const ref = useReveal();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section ref={ref} className="section-light py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter tabs */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12" style={{ transitionDelay: "0.1s" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                active === tab
                  ? "bg-gradient-to-r from-brand to-sky-500 text-white shadow-lg shadow-brand/30 scale-105"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-brand hover:text-brand"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div key={active} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 float-shadow"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <div className={`relative h-64 bg-gradient-to-br ${p.grad} flex items-end p-7 group-hover:scale-105 transition-transform duration-500 overflow-hidden`}>
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-2xl font-black text-white mt-1">{p.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-7">
                <p className="text-white/80 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-400">{p.desc}</p>
                <Link href="/portfolio" className="shine-btn mt-4 w-fit px-5 py-2 border border-white/60 text-white text-sm font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-75">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}