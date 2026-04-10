"use client";

import { useReveal } from "@/hooks/useReveal";

const team = [
  {
    name: "Ashan Perera",
    role: "CEO & Founder",
    emoji: "👨‍💼",
    grad: "from-sky-400 to-blue-600",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    skills: ["Strategy", "Leadership", "Vision"],
    bio: "10+ years in enterprise software and digital strategy. Passionate about turning bold ideas into scalable products.",
  },
  {
    name: "Nimali Fernando",
    role: "Chief Technology Officer",
    emoji: "👩‍💻",
    grad: "from-violet-400 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    skills: ["Cloud", "AI/ML", "Architecture"],
    bio: "Cloud architect and AI specialist with a track record of building systems that handle millions of users.",
  },
  {
    name: "Kasun Silva",
    role: "Lead Engineer",
    emoji: "⚙️",
    grad: "from-emerald-400 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    skills: ["Full-Stack", "Next.js", "Laravel"],
    bio: "Full-stack expert who writes clean, scalable code and mentors the engineering team to deliver excellence.",
  },
  {
    name: "Dilini Jayawardena",
    role: "Head of Design",
    emoji: "🎨",
    grad: "from-amber-400 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    skills: ["UI/UX", "Figma", "Branding"],
    bio: "Award-winning designer who crafts intuitive, beautiful experiences that users love and businesses trust.",
  },
  {
    name: "Ruwan Bandara",
    role: "DevOps Engineer",
    emoji: "🚀",
    grad: "from-rose-400 to-pink-600",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    skills: ["AWS", "CI/CD", "Docker"],
    bio: "Infrastructure guru ensuring 99.9% uptime, seamless deployments, and bulletproof cloud environments.",
  },
  {
    name: "Sachini Madushani",
    role: "Project Manager",
    emoji: "📋",
    grad: "from-cyan-400 to-sky-500",
    bg: "from-cyan-50 to-sky-50",
    border: "border-cyan-100",
    skills: ["Agile", "Scrum", "Delivery"],
    bio: "Agile PM who keeps every project on time, on budget, and on point — with a smile through every sprint.",
  },
];

export default function TeamSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-light py-28 overflow-hidden relative">
      {/* top fade from dark previous section */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400/30 via-violet-500/30 to-emerald-400/30" />
      <div className="animate-blob absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-violet-100/60 blur-3xl pointer-events-none" />
      <div className="animate-blob-delay absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-100/60 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal section-label label-brand">✦ The Team</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
            The People Behind <span className="gradient-text">Geesha</span>
          </h2>
          <p className="reveal mt-4 text-slate-500 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            A diverse team of builders, thinkers, and creators — united by a passion for great work.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`reveal group relative rounded-3xl border ${member.border} bg-gradient-to-br ${member.bg} p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              {/* Avatar */}
              <div className="flex items-start justify-between mb-5">
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${member.grad} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {member.emoji}
                  <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.grad} animate-ping opacity-15`} />
                </div>
                {/* Role badge */}
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-gradient-to-r ${member.grad} text-white shadow-md`}>
                  {member.role.split(" ")[0]}
                </span>
              </div>

              {/* Info */}
              <h4 className="text-gray-900 font-black text-xl">{member.name}</h4>
              <p className={`text-sm font-bold mt-0.5 bg-gradient-to-r ${member.grad} bg-clip-text text-transparent`}>{member.role}</p>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-xs text-slate-600 bg-white/80 border border-gray-200 px-3 py-1 rounded-full font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <p className="text-slate-400 text-sm">Want to join our growing team?</p>
          <button className="shine-btn btn-primary px-8 py-3 text-sm">View Open Positions →</button>
        </div>

      </div>
    </section>
  );
}
