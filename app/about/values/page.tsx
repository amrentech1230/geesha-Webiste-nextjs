import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Users, Zap, Shield, TrendingUp, Lightbulb, Eye } from "lucide-react";

export const metadata = {
  title: "Core Values | Geesha Solutions",
  description: "The principles that guide our decisions, our actions, and our culture. Discover the core values that define Geesha Solutions.",
};

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    desc: "Your success is our success. We build lasting partnerships based on trust, shared goals, and a deep commitment to delivering value that goes beyond the code.",
    grad: "from-sky-400 to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Heart",
    desc: "We are driven by curiosity and a passion for what's next. We constantly explore new frontiers in technology to deliver forward-thinking and future-proof solutions.",
    grad: "from-amber-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "We operate with transparency, honesty, and a strong sense of responsibility. Our work always aligns with our promises, and we build trust through every interaction.",
    grad: "from-violet-400 to-purple-500",
  },
  {
    icon: Zap,
    title: "Excellence in Execution",
    desc: "A brilliant strategy is only as good as its execution. We are obsessed with delivering high-quality, functional, and scalable products with meticulous attention to detail.",
    grad: "from-rose-400 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    desc: "We believe in continuous improvement for ourselves and our clients. We architect solutions that scale with your ambition, ensuring your technology grows with you.",
    grad: "from-emerald-400 to-teal-500",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "No surprises. We foster open communication, provide full visibility into our process, and ensure you are informed and involved at every stage of the project.",
    grad: "from-cyan-400 to-sky-500",
  },
];

const ValueCard = ({ value }: { value: typeof values[0] }) => {
  const Icon = value.icon;
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.grad} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
      <p className="text-white/60 leading-relaxed">{value.desc}</p>
    </div>
  );
};

export default function ValuesPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">The Principles That <span className="gradient-text-vivid">Guide Us</span></h2>
            <p className="mt-5 text-lg text-white/60">Our values are the compass for our actions and the foundation of our culture. They define who we are and how we build.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => <ValueCard key={value.title} value={value} />)}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}