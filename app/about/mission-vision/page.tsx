import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Target, Eye, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Mission & Vision | Geesha Solutions",
  description: "Our mission is to empower businesses with transformative digital solutions, while our vision is to be a global leader in technology innovation and client success.",
};

export default function MissionVisionPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      {/* Mission Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="animate-blob absolute -top-16 -left-16 w-80 h-80 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
            <Image
              src="/about_vision.jpg"
              alt="Our Mission"
              width={600}
              height={450}
              className="relative rounded-3xl object-cover w-full h-auto shadow-2xl"
            />
          </div>
          <div>
            <span className="section-label label-brand inline-flex mb-4">Our Mission</span>
            <h2 className="text-4xl font-black text-white mb-6">To Empower Digital Transformation</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Our mission is to empower businesses of all sizes with transformative digital solutions that drive growth, efficiency, and market leadership. We are dedicated to crafting high-impact products through a blend of creative design, cutting-edge technology, and strategic thinking.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-emerald-400" /><span>Deliver exceptional quality and value.</span></li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-emerald-400" /><span>Foster long-term client partnerships.</span></li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-emerald-400" /><span>Cultivate a culture of continuous innovation.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2 relative">
            <div className="animate-blob absolute -top-16 -right-16 w-80 h-80 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />
            <Image
              src="/about/team-working.jpg"
              alt="Our Vision"
              width={600}
              height={450}
              className="relative rounded-3xl object-cover w-full h-auto shadow-2xl"
            />
          </div>
          <div className="md:order-1">
            <span className="section-label label-violet inline-flex mb-4">Our Vision</span>
            <h2 className="text-4xl font-black text-white mb-6">To Be a Global Leader in Innovation</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              To be a globally recognized leader in digital innovation, known for our unwavering commitment to client success and our ability to turn ambitious ideas into reality. We envision a future where technology creates limitless opportunities for every enterprise.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-emerald-400" /><span>Pioneer new technological frontiers.</span></li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-emerald-400" /><span>Build a sustainable and inspiring workplace.</span></li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-emerald-400" /><span>Make a positive impact on the global tech community.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}