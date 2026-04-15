import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Stats from "@/components/Stats";
import { Target, Eye, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Mission & Vision | Geesha Solutions",
  description: "Our mission is to empower businesses with transformative digital solutions, while our vision is to be a global leader in technology innovation and client success.",
};

const MissionVisionCard = ({ title, children, icon }: { title: string, children: React.ReactNode, icon: React.ReactNode }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-brand/10 text-brand p-3 rounded-full">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="text-slate-600 leading-relaxed space-y-4">
            {children}
        </div>
    </div>
);

export default function MissionVisionPage() {
  return (
    <div>
      <AboutHero
        label="Our Purpose"
        title="Crafting the Future,"
        highlight="One Innovation at a Time."
      />

      <section className="section-light py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <MissionVisionCard title="Our Mission" icon={<Target size={28} />}>
                <p>
                    To empower businesses of all sizes with transformative digital solutions that drive growth, efficiency, and market leadership. We are dedicated to crafting high-impact products through a blend of creative design, cutting-edge technology, and strategic thinking.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" /><span>Deliver exceptional quality and value.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" /><span>Foster long-term client partnerships.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" /><span>Cultivate a culture of continuous innovation.</span></li>
                </ul>
            </MissionVisionCard>

            <MissionVisionCard title="Our Vision" icon={<Eye size={28} />}>
                <p>
                    To be a globally recognized leader in digital innovation, known for our unwavering commitment to client success and our ability to turn ambitious ideas into reality. We envision a future where technology creates limitless opportunities for every enterprise.
                </p>
                 <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" /><span>Pioneer new technological frontiers.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" /><span>Build a sustainable and inspiring workplace.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" /><span>Make a positive impact on the global tech community.</span></li>
                </ul>
            </MissionVisionCard>
        </div>
      </section>

      <Stats />

      <TestimonialsSection />

      <CTASection />
    </div>
  );
}