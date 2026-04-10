"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Sarah Mitchell", role: "CEO", company: "FinVault",
    text: "Geesha Solutions transformed our entire digital infrastructure. The team was professional, fast, and delivered beyond every expectation we had.",
    stars: 5, grad: "from-sky-400 to-blue-600", bg: "from-sky-950/80 to-blue-950/80",
    metric: "3x faster delivery", metricColor: "text-sky-400",
  },
  {
    name: "Rahul Sharma", role: "CTO", company: "MediCare App",
    text: "Their mobile app development expertise is absolutely top-notch. Our healthcare app launched on time and has been completely flawless since day one.",
    stars: 5, grad: "from-violet-400 to-purple-600", bg: "from-violet-950/80 to-purple-950/80",
    metric: "100k+ users", metricColor: "text-violet-400",
  },
  {
    name: "James Okafor", role: "Founder", company: "ShopEase",
    text: "The e-commerce platform they built for us increased our conversions by 40%. Truly a world-class team that understands business goals.",
    stars: 5, grad: "from-emerald-400 to-teal-600", bg: "from-emerald-950/80 to-teal-950/80",
    metric: "+40% conversions", metricColor: "text-emerald-400",
  },
  {
    name: "Priya Nair", role: "Marketing Head", company: "EduLearn",
    text: "From design to deployment, every single step was smooth and transparent. Our EdTech platform now proudly serves over 10,000 students.",
    stars: 5, grad: "from-amber-400 to-orange-500", bg: "from-amber-950/80 to-orange-950/80",
    metric: "10k+ students", metricColor: "text-amber-400",
  },
  {
    name: "David Chen", role: "COO", company: "LogiTrack",
    text: "The logistics portal they built saved us hours of manual work every single day. I highly recommend Geesha Solutions to any growing business.",
    stars: 5, grad: "from-rose-400 to-pink-600", bg: "from-rose-950/80 to-pink-950/80",
    metric: "5hrs saved/day", metricColor: "text-rose-400",
  },
  {
    name: "Amara Diallo", role: "Product Manager", company: "ChatAI",
    text: "Their AI chatbot integration was completely seamless. Customer support tickets dropped by 60% within the very first month of launch.",
    stars: 5, grad: "from-cyan-400 to-sky-500", bg: "from-cyan-950/80 to-sky-950/80",
    metric: "-60% tickets", metricColor: "text-cyan-400",
  },
];

export default function TestimonialsSection() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const go = (i: number) => {
    if (animating) return;
    setAnimating(true);
    setActive(i);
    setTimeout(() => setAnimating(false), 500);
    if (timer.current) clearInterval(timer.current);
    startTimer();
  };

  const startTimer = () => {
    timer.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  // scroll mini track to active — only scroll the track container, not the page
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const el = track.children[active] as HTMLElement;
    if (!el) return;
    const trackLeft = track.getBoundingClientRect().left;
    const elLeft = el.getBoundingClientRect().left;
    const offset = elLeft - trackLeft - track.clientWidth / 2 + el.clientWidth / 2;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }, [active]);

  const t = testimonials[active];

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg,#06040f 0%,#0d0a1e 40%,#060d1a 100%)" }}>

      {/* Animated blobs */}
      <div className={`animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-gradient-to-br ${t.grad} opacity-20 transition-all duration-1000`} />
      <div className={`animate-blob-delay absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none bg-gradient-to-br ${t.grad} opacity-15 transition-all duration-1000`} />
      <div className="dot-grid absolute inset-0 opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal section-label label-violet">✦ Testimonials</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-white" style={{ transitionDelay: "0.1s" }}>
            Loved by <span className="text-shimmer">Clients Worldwide</span>
          </h2>
          <p className="reveal mt-4 text-white/40 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            Real results, real people — hear from the businesses we've helped transform.
          </p>
        </div>

        {/* Main featured card */}
        <div className="reveal max-w-4xl mx-auto mb-10" style={{ transitionDelay: "0.3s" }}>
          <div
            key={active}
            className={`relative rounded-[2rem] overflow-hidden p-10 md:p-14 transition-all duration-500 ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
          >
            {/* Gradient top bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.grad}`} />

            {/* Big quote mark */}
            <div className={`absolute top-8 right-10 text-[8rem] font-black leading-none bg-gradient-to-br ${t.grad} bg-clip-text text-transparent opacity-10 select-none pointer-events-none`}>"</div>

            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="star-animate text-yellow-400 text-xl" style={{ animationDelay: `${i * 0.08}s` }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/85 text-xl md:text-2xl leading-relaxed font-light italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-8">
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${t.grad} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                    {t.name.charAt(0)}
                    {/* ping ring */}
                    <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.grad} animate-ping opacity-30`} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{t.name}</p>
                    <p className="text-white/40 text-sm">{t.role} · <span className={`font-semibold bg-gradient-to-r ${t.grad} bg-clip-text text-transparent`}>{t.company}</span></p>
                  </div>
                </div>
              </div>

              {/* Metric badge */}
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl text-center shrink-0" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className={`text-3xl font-black ${t.metricColor}`}>{t.metric}</div>
                <div className="text-white/30 text-xs mt-1 uppercase tracking-widest">Key Result</div>
                {/* mini progress bar */}
                <div className="mt-4 w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${t.grad} progress-bar`} style={{ "--progress": "85%" } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="reveal flex justify-center gap-2 mb-10" style={{ transitionDelay: "0.4s" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-400 ${i === active ? `w-10 h-3 bg-gradient-to-r ${testimonials[i].grad}` : "w-3 h-3 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        {/* Scrollable mini cards */}
        <div className="reveal" style={{ transitionDelay: "0.5s" }}>
          <div ref={trackRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((card, i) => (
              <div
                key={i}
                onClick={() => go(i)}
                className={`snap-center shrink-0 w-72 cursor-pointer rounded-2xl p-5 border transition-all duration-400 float-shadow ${
                  active === i
                    ? `border-white/25 bg-gradient-to-br ${card.bg} scale-[1.03]`
                    : "border-white/6 bg-white/3 hover:bg-white/7 hover:border-white/15"
                }`}
              >
                {/* top row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: card.stars }).map((_, s) => (
                      <span key={s} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                  <span className={`text-xs font-bold ${card.metricColor}`}>{card.metric}</span>
                </div>

                <p className="text-white/55 text-xs leading-relaxed line-clamp-3">"{card.text}"</p>

                <div className="flex items-center gap-2.5 mt-4">
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                    {card.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-bold">{card.name}</p>
                    <p className="text-white/35 text-[10px]">{card.role}, {card.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom marquee of company names */}
        <div className="reveal mt-14 overflow-hidden" style={{ transitionDelay: "0.6s" }}>
          <p className="text-center text-white/20 text-xs uppercase tracking-widest mb-4">Trusted by companies worldwide</p>
          <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <span key={i} className="text-white/20 font-bold text-sm shrink-0 hover:text-white/50 transition-colors duration-300 cursor-default">
                {t.company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* hide scrollbar */}
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none;}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none;}`}</style>
    </section>
  );
}
