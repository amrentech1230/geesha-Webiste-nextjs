"use client";

import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  grad: string;
  shadow: string;
}

interface IndustryCategoryPageProps {
  categoryTitle: string;
  categoryDescription: string;
  categoryIcon: string;
  industries: Industry[];
}

export default function IndustryCategoryPage({
  categoryTitle,
  categoryDescription,
  categoryIcon,
  industries,
}: IndustryCategoryPageProps) {
  const ref = useReveal();

  return (
    <>
      {/* Hero Section for the Category */}
      <section className="relative py-36 overflow-hidden bg-[#060d1a] text-center">
        <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="reveal section-label label-emerald inline-flex mb-6">
            ✦ Industry Category
          </span>
          <h1 className="reveal text-5xl md:text-7xl font-black leading-tight text-white delay-100">
            {categoryTitle}
          </h1>
          <p className="reveal mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto delay-200">
            {categoryDescription}
          </p>
        </div>
      </section>

      {/* Grid of Industries within the Category */}
      <section ref={ref} className="section-light py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Link
                  href={industry.href}
                  key={i}
                  className={`reveal tilt-card card-white group relative block p-8 rounded-3xl transition-all duration-400 hover:shadow-2xl ${industry.shadow} overflow-hidden`}
                  style={{ transitionDelay: `${0.08 * i}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.grad} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-400 rounded-3xl`} />
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.grad} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="relative text-xl font-bold text-gray-900">{industry.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">{industry.description}</p>
                  <div className="relative mt-6 flex items-center gap-1 text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className={`bg-gradient-to-r ${industry.grad} bg-clip-text text-transparent`}>Explore Solutions</span>
                    <span className={`bg-gradient-to-r ${industry.grad} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`}>→</span>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${industry.grad} transition-all duration-500 rounded-b-3xl`} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}