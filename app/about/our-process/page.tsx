import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import TechStack from "@/components/TechStack";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Our Process | Geesha Solutions",
  description: "Discover the structured, agile process Geesha Solutions follows to take your idea from concept to a live, scalable product, ensuring quality and transparency at every step.",
};

export default function OurProcessPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      {/* Animated blobs */}
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <ProcessSection />

      <TechStack />

      <TestimonialsSection />
      
      <CTASection />
    </div>
  );
}