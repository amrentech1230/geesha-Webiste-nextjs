import AboutHero from "@/components/about/AboutHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection"; // Reusing the existing AboutSection

export const metadata = {
  title: "Who We Are | Geesha Solutions",
  description: "Discover the story, vision, and values that define Geesha Solutions. Learn about our commitment to innovation and excellence.",
};

export default function WhoWeArePage() {
  return (
    <div>
      <AboutHero />
      <AboutSection /> {/* This section is a good fit for "Who We Are" content */}
      <Stats />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}