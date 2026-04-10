import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import AboutHero from "@/components/about/AboutHero";
import TeamSection from "@/components/about/TeamSection";
import MissionSection from "@/components/about/MissionSection";

export const metadata = {
  title: "About Us | Geesha Solutions",
  description: "Learn about Geesha Solutions — our story, mission, values, and the team behind your digital transformation.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <Stats />
      <MissionSection />
      <TeamSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
