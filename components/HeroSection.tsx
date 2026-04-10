"use client";

import { useEffect, useState } from "react";

const words = ["Innovation.", "Excellence.", "Growth.", "The Future."];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((p) => (p + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#060d1a]">

      {/* Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-25">
        <source src="/video/geesha_video_new_ai.mp4" type="video/mp4" />
      </video>

      {/* Animated blobs */}
      <div className="animate-blob absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-brand/35 blur-[120px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/25 blur-[100px] pointer-events-none" />
      <div className="animate-blob-slow absolute bottom-[-15%] left-[25%] w-[550px] h-[550px] rounded-full bg-sky-500/20 blur-[120px] pointer-events-none" />
      <div className="animate-blob absolute bottom-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-rose-500/15 blur-[80px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d1a]/30 via-transparent to-[#060d1a]/90 pointer-events-none" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20 animate-float pointer-events-none"
          style={{
            left: `${8 + i * 8}%`,
            top: `${20 + (i % 4) * 18}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">

        <span className="animate-slide-up section-label label-blue mb-6 inline-flex w-fit">
          ✦ Welcome to Geesha Solutions
        </span>

        <h1 className="animate-slide-up text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white delay-100">
          Engineering<br />
          <span className="gradient-text-light">Vision.</span>{" "}
          <span className="text-white/25">Driving</span><br />
          <span className="gradient-text-vivid">{displayed}</span>
          <span className="cursor-blink text-sky-400 ml-1">|</span>
        </h1>

        <p className="animate-slide-up mt-8 max-w-2xl text-white/55 text-lg md:text-xl leading-relaxed delay-200">
          We specialize in AI-powered solutions, cloud engineering, and modern digital transformation for scalable businesses worldwide.
        </p>

        <div className="animate-slide-up mt-10 flex gap-4 flex-wrap delay-300">
          <button className="shine-btn glow-ring btn-primary text-base px-8 py-4">
            🚀 Start Strategy Phase
          </button>
          <button className="btn-outline-white text-base px-8 py-4">
            View Our Work →
          </button>
        </div>

        <div className="animate-slide-up mt-12 flex flex-wrap gap-3 delay-400">
          {[
            { label: "30+ Projects", color: "from-sky-400 to-blue-500" },
            { label: "🌍 Global Clients", color: "from-violet-400 to-purple-500" },
            { label: "⚡ Agile & Fast", color: "from-emerald-400 to-teal-500" },
            { label: "100% Retention", color: "from-amber-400 to-orange-500" },
          ].map((b, i) => (
            <span
              key={b.label}
              className="fade-in-up text-sm text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs animate-float">
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-ping" />
      </div>
    </section>
  );
}
