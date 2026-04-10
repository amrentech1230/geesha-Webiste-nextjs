import Header from "@/components/Header";
import IndustryCategoryPage from "@/components/industries/IndustryCategoryPage";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { HeartPulse, Dumbbell, Watch } from "lucide-react";

// Data for this specific industry category page
const categoryData = {
  title: "Health & Wellness",
  description: "Pioneering digital solutions in healthcare, fitness, and wearable technology to improve lives and streamline operations.",
  icon: "❤️",
  industries: [
    {
      title: "Healthcare",
      description: "Innovative solutions for patient care, medical research, and health management.",
      icon: HeartPulse,
      href: "/industries/healthcare",
      grad: "from-rose-400 to-pink-600",
      shadow: "hover:shadow-rose-200/60",
    },
    {
      title: "Fitness",
      description: "Building platforms and apps to enhance personal fitness and wellness journeys.",
      icon: Dumbbell,
      href: "/industries/fitness",
      grad: "from-violet-500 to-purple-600",
      shadow: "hover:shadow-violet-200/60",
    },
    {
      title: "Wearables",
      description: "Developing smart wearable technology for fitness, health, and lifestyle.",
      icon: Watch,
      href: "/industries/wearables",
      grad: "from-emerald-400 to-teal-600",
      shadow: "hover:shadow-emerald-200/60",
    },
  ],
};

export const metadata = {
  title: `${categoryData.title} | Geesha Solutions`,
  description: categoryData.description,
};

export default function HealthWellnessCategoryPage() {
  return (
    <>
      <IndustryCategoryPage {...categoryData} categoryTitle={categoryData.title} categoryDescription={categoryData.description} categoryIcon={categoryData.icon} />
      <CTASection />
    </>
  );
}