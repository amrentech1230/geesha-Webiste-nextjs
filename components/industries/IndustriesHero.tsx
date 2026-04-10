"use client";

import { Banknote, HeartPulse, ShoppingCart, GraduationCap, Factory, Ship, Building, Car, Leaf, Plane, Utensils, Globe, Home, Newspaper, Users, Megaphone, Rocket, Gem, Lightbulb, Wallet, Landmark, Shield, CreditCard, Watch, Dumbbell, Package, Calendar, PlayCircle, ShoppingBag, Tv, Gamepad, Phone } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function IndustriesHero() {
  const ref = useReveal();

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
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 py-36 w-full text-center">
        <span className="reveal section-label label-emerald inline-flex mb-6">
          ✦ Expertise Across Sectors
        </span>
        <h1 className="reveal text-5xl md:text-7xl font-black leading-tight text-white delay-100">
          Digital Solutions for
          <br />
          <span className="text-shimmer">Every Industry</span>
        </h1>
        <p className="reveal mt-8 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto delay-200">
          From FinTech and Healthcare to E-Commerce and Logistics, we deliver tailored technology that drives growth, efficiency, and innovation.
        </p>
        <div className="reveal mt-12 flex justify-center gap-4 delay-300">
          <button className="shine-btn glow-ring btn-primary px-8 py-4 text-base">
            🚀 Start Your Project
          </button>
          <button className="btn-outline-white px-8 py-4 text-base">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#060d1a] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs animate-float">
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/25 animate-ping" />
      </div>
    </section>
  );
}