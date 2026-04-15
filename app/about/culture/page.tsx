import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";
import { Users, BookOpen, Target, Heart, FlaskConical, PartyPopper, Check } from "lucide-react";

export const metadata = {
  title: "Work Culture | Geesha Solutions",
  description: "Discover the vibrant work culture at Geesha Solutions. We foster collaboration, continuous learning, and a healthy work-life balance.",
};

const culturePillars = [
  {
    icon: Users,
    title: "Collaboration First",
    desc: "We believe the best ideas emerge when we work together. Our open-plan environment and cross-functional teams ensure everyone's voice is heard.",
    grad: "from-sky-400 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "The tech world never stands still, and neither do we. We provide learning stipends, access to courses, and internal workshops to help you grow.",
    grad: "from-emerald-400 to-teal-500",
  },
  {
    icon: Target,
    title: "Ownership & Impact",
    desc: "We empower every team member to take ownership of their work. You won't just be a cog in the machine; you'll be a driving force behind our success.",
    grad: "from-amber-400 to-orange-500",
  },
  {
    icon: Heart,
    title: "Work-Life Harmony",
    desc: "We're passionate about our work, but we know life happens outside of it. Flexible hours and remote-friendly policies help you find the right balance.",
    grad: "from-rose-400 to-pink-500",
  },
  {
    icon: FlaskConical,
    title: "Innovation Sandbox",
    desc: "Curiosity is our compass. We encourage experimentation through hackathons, passion projects, and dedicated time to explore new technologies.",
    grad: "from-violet-400 to-purple-500",
  },
  {
    icon: PartyPopper,
    title: "Celebrate Success",
    desc: "From major project launches to personal milestones, we believe in celebrating our wins together as a team. We work hard and have fun doing it.",
    grad: "from-cyan-400 to-sky-500",
  },
];

const CultureCard = ({ pillar }: { pillar: typeof culturePillars[0] }) => {
  const Icon = pillar.icon;
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.grad} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
      <p className="text-white/60 leading-relaxed">{pillar.desc}</p>
    </div>
  );
};

export default function CulturePage() {
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
              Our Cultural <span className="gradient-text-vivid">Cornerstones</span>
            </h2>
            <p className="mt-5 text-lg text-white/60">
              We've built a culture that's centered on growth, collaboration, and making a real impact—for our clients and our team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturePillars.map((pillar) => <CultureCard key={pillar.title} pillar={pillar} />)}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <Image
              src="/about_vision.jpg"
              alt="Geesha Solutions team life"
              width={600}
              height={450}
              className="relative rounded-3xl object-cover w-full h-auto shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Life at <span className="gradient-text-vivid">Geesha</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Beyond the code, we're a community. We foster a supportive and fun environment where everyone can thrive.
            </p>
            <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3"><Check size={20} className="text-emerald-400" /><span>Regular Team Outings & Events</span></li>
                <li className="flex items-center gap-3"><Check size={20} className="text-emerald-400" /><span>Comprehensive Health & Wellness Benefits</span></li>
                <li className="flex items-center gap-3"><Check size={20} className="text-emerald-400" /><span>Flexible Work Arrangements</span></li>
                <li className="flex items-center gap-3"><Check size={20} className="text-emerald-400" /><span>State-of-the-Art Hardware & Software</span></li>
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}