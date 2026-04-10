"use client";

import { useReveal } from "@/hooks/useReveal";
import { useRef } from "react";

const stacks = [
  { category: "Frontend",      grad: "from-sky-400 to-cyan-500",      techs: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"] },
  { category: "Backend",       grad: "from-brand to-blue-500",        techs: ["Node.js", "Laravel", "Python", "Django", "Express"] },
  { category: "Mobile",        grad: "from-violet-500 to-purple-600", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "Cloud & DevOps",grad: "from-amber-400 to-orange-500",  techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx"] },
  { category: "Database",      grad: "from-emerald-400 to-teal-500",  techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
  { category: "AI & Data",     grad: "from-rose-400 to-pink-500",     techs: ["TensorFlow", "OpenAI", "LangChain", "PyTorch", "Pandas"] },
];

export default function TechStack() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-dark py-28 overflow-hidden relative">
      <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="animate-blob absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
      <div className="animate-blob-delay absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal section-label label-amber">✦ Technologies</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-white" style={{ transitionDelay: "0.1s" }}>
            Our <span className="gradient-text-light">Tech Stack</span>
          </h2>
          <p className="reveal mt-4 text-white/50 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            Modern, battle-tested technologies to build fast, scalable, and maintainable products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <SpotlightCard key={i} stack={stack} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ stack, index }: { stack: typeof stacks[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="reveal spotlight-card group relative rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 float-shadow hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden"
      style={{ transitionDelay: `${0.08 * index}s` }}
    >
      <div className="spotlight-effect absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 20%)` }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${stack.grad} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-400`} />

      <div className="relative">
        <h3 className={`text-xl font-bold bg-gradient-to-r ${stack.grad} bg-clip-text text-transparent mb-4`}>{stack.category}</h3>
        <div className="flex flex-wrap gap-2">
          {stack.techs.map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 text-white/60 border border-white/10 rounded-full font-medium group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
