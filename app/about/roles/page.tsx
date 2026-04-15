import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { BrainCircuit, Code, PenTool, Presentation, Bot, CloudCog, Check } from "lucide-react";

export const metadata = {
  title: "Roles & Expertise | Geesha Solutions",
  description: "Explore the specialized roles and deep expertise within Geesha Solutions, from engineering and design to AI research and project management.",
};

const roles = [
  {
    title: "Engineering",
    icon: Code,
    grad: "from-sky-400 to-blue-500",
    desc: "Our engineers are the architects of robust, scalable, and high-performance digital solutions. They master modern frameworks and write clean, maintainable code.",
    expertise: ["Full-Stack Development", "Backend & Frontend Architecture", "Mobile App Development", "API Design & Integration"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    grad: "from-violet-400 to-purple-500",
    desc: "The design team crafts intuitive, engaging, and beautiful user experiences. They bridge the gap between user needs and business goals through thoughtful design.",
    expertise: ["User Research & Persona Dev", "Wireframing & Prototyping", "Interaction Design", "Brand Identity & Visuals"],
  },
  {
    title: "Project Management",
    icon: Presentation,
    grad: "from-emerald-400 to-teal-500",
    desc: "Our project managers ensure every project is delivered on time, within budget, and to the highest quality standards, fostering clear communication and transparency.",
    expertise: ["Agile & Scrum Methodologies", "Roadmap & Sprint Planning", "Risk Management", "Client & Stakeholder Comms"],
  },
  {
    title: "AI & Research",
    icon: BrainCircuit,
    grad: "from-amber-400 to-orange-500",
    desc: "This team is at the forefront of innovation, exploring and implementing cutting-edge AI and machine learning to solve complex problems and create smart features.",
    expertise: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Data Science & Analytics"],
  },
  {
    title: "DevOps & Cloud",
    icon: CloudCog,
    grad: "from-rose-400 to-pink-500",
    desc: "The DevOps team builds and maintains the cloud infrastructure that powers our applications, ensuring scalability, security, and 99.9% uptime.",
    expertise: ["CI/CD Pipelines", "Infrastructure as Code (IaC)", "Cloud Security & Compliance", "Performance Monitoring"],
  },
  {
    title: "Quality Assurance",
    icon: Bot,
    grad: "from-cyan-400 to-sky-500",
    desc: "Our QA specialists are dedicated to perfection. They rigorously test every feature to ensure a bug-free, seamless, and reliable user experience.",
    expertise: ["Automated & Manual Testing", "Performance & Load Testing", "Security Audits", "Cross-Browser Compatibility"],
  },
];

const RoleCard = ({ role }: { role: typeof roles[0] }) => {
  const Icon = role.icon;
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${role.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.grad} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={28} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
      <p className="text-white/60 leading-relaxed mb-6">{role.desc}</p>
      <div className="border-t border-white/10 pt-5">
        <h4 className="text-sm font-bold text-white/80 mb-3">Core Expertise:</h4>
        <ul className="space-y-2">
          {role.expertise.map(item => (
            <li key={item} className="flex items-center gap-2 text-sm text-white/60">
              <Check size={16} className="text-emerald-400 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function RolesPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Our Departments of <span className="gradient-text-vivid">Excellence</span>
            </h2>
            <p className="mt-5 text-lg text-white/60">
              Each team at Geesha Solutions is a center of excellence, bringing specialized skills and a collaborative spirit to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role) => <RoleCard key={role.title} role={role} />)}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}