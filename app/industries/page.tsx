import Header from "@/components/Header";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesSection from "@/components/industries/IndustriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industries We Serve | Geesha Solutions",
  description: "Discover how Geesha Solutions empowers businesses across various industries with tailored digital solutions and innovative technologies.",
};


export default function AboutPage() {
  return ( // Added Header, CTASection, and Footer to complete the page structure.
    <>
        <IndustriesHero />
        <IndustriesSection />
        <CTASection />
    </>
  );
}
