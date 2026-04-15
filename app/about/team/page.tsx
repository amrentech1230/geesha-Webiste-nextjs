import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TeamSection from "@/components/about/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Meet Our Team | Geesha Solutions",
  description: "Meet the talented and passionate team of engineers, designers, and strategists behind Geesha Solutions.",
};

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      {/* Animated blobs */}
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <TeamSection />

      <TestimonialsSection />
      
      <CTASection />
    </div>
  );
}