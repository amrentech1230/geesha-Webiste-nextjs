import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqClientPage from "./FaqClientPage";

export const metadata = {
  title: "FAQ | Geesha Solutions",
  description: "Find answers to frequently asked questions about Geesha Solutions, our services, process, and pricing.",
};

export default function FAQPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Frequently Asked <span className="gradient-text-vivid">Questions</span></h2>
            <p className="mt-5 text-lg text-white/60">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
          </div>
          <FaqClientPage />
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}