"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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

// To create a seamless loop, we'll clone the first few items.
// The number of clones should be at least the number of visible items on the largest screen size (which is 3).
const clonedProjects = [...projects, ...projects.slice(0, 3)];

export default function PortfolioSection() {
  const ref = useReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = () => {
    // This is a bit more complex for infinite sliders, so we'll keep it simple for now
    // or implement a similar logic as handleNext in reverse.
    setCurrentIndex((prev) => (prev === 0 ? projects.length -1 : prev - 1));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transitionDuration = '500ms';
      const slideWidth = sliderRef.current.children[0].clientWidth;
      const gap = 24; // Corresponds to gap-6
      sliderRef.current.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;
    }

    // When we reach the end of the original list (the start of the clones)
    if (currentIndex >= projects.length) {
      // Wait for the transition to finish, then jump back to the start
      transitionRef.current = setTimeout(() => {
        if (sliderRef.current) {
          // Disable the transition for the jump
          sliderRef.current.style.transitionDuration = '0ms';
          // Set the transform to the beginning
          sliderRef.current.style.transform = 'translateX(0px)';
        }
        // Update the index to the real first slide
        setCurrentIndex(0);
      }, 500); // This duration should match the CSS transition duration
    }

    return () => {
      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
    };
  }, [currentIndex, handleNext]);

  return (
    <section ref={ref} className="section-mesh py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <span className="reveal section-label label-rose">✦ Our Work</span>
            <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
              Featured <span className="gradient-text-vivid">Projects</span>
            </h2>
            <p className="reveal mt-4 text-slate-500 max-w-xl text-lg" style={{ transitionDelay: "0.2s" }}>
              A glimpse of the impactful digital products we've built for clients worldwide.
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-3">
            <button onClick={handlePrev} className="reveal slider-btn" aria-label="Previous Project">←</button>
            <button onClick={handleNext} className="reveal slider-btn" aria-label="Next Project">→</button>
          </div>
        </div>

        <div className="reveal relative overflow-hidden" style={{ transitionDelay: "0.3s" }}>
          <div ref={sliderRef} className="flex gap-6 transition-transform duration-500 ease-in-out">
            {clonedProjects.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 float-shadow w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
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

        <div className="reveal text-center mt-14" style={{ transitionDelay: "0.2s" }}>
          <Link href="/portfolio" className="shine-btn btn-primary">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
