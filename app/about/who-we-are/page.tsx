import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Who We Are | Geesha Solutions",
  description:
    "Discover the story, vision, and values that define Geesha Solutions. Learn about our commitment to innovation and excellence.",
};

export default function WhoWeArePage() {
  return (
    <div>
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}