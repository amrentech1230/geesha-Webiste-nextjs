import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our Work | Geesha Solutions",
  description: "Explore our portfolio of successful projects, from web and app development to AI solutions and cloud engineering.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </main>
  );
}