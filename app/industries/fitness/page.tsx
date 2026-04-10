import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Fitness Industry",
  title: "Powering Digital Fitness Experiences",
  highlight: "for a Healthier World.",
  desc: "From personalized workout planners to live-streaming class platforms, we build engaging and scalable applications that motivate users and grow fitness communities.",
  grad: "from-violet-500 to-purple-600",
  gradFrom: "#a855f7", // violet-500
  gradTo: "#9333ea",   // purple-600
  emoji: "💪",
  badges: ["Workout Tracking", "Live Classes", "Community Features", "Wearable Sync"],
  stats: [
    { value: "1M+", label: "Active Users" },
    { value: "100+", label: "Fitness Integrations" },
    { value: "24/7", label: "Streaming Uptime" },
    { value: "Top 10", label: "App Store Rankings" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Fitness",
  serviceDesc: "We provide end-to-end development for fitness tech, creating platforms that are as dynamic and energetic as their users.",
  features: [
    { icon: "🏋️", title: "Custom Workout Planners", desc: "AI-driven workout plan generation tailored to user goals, fitness levels, and available equipment." },
    { icon: "🎥", title: "Live & On-Demand Classes", desc: "High-quality video streaming platforms for live fitness classes and extensive on-demand libraries." },
    { icon: "📊", title: "Progress Tracking & Analytics", desc: "Intuitive dashboards for users to track their progress, set goals, and view performance analytics." },
    { icon: "🤝", title: "Community & Social Features", desc: "Engage users with social feeds, challenges, leaderboards, and direct messaging to build a strong community." },
  ],
  tools: ["React Native", "Flutter", "Stripe", "Agora", "Firebase", "HealthKit"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "User-Centric Strategy", desc: "Understanding the target fitness audience and defining key engagement features for maximum motivation.", icon: "🎯" },
    { num: "02", title: "UX/UI Design", desc: "Creating an intuitive, high-energy interface that makes tracking workouts and joining classes seamless and fun.", icon: "🎨" },
    { num: "03", title: "Scalable Development", desc: "Building a robust backend to handle live streaming, user data, and community interactions at scale.", icon: "⚙️" },
    { num: "04", title: "Launch & Grow", desc: "Deploying to app stores with a solid marketing and user acquisition strategy, followed by continuous feature updates.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "Fitness App Development | Geesha Solutions",
  description: "Custom software solutions for the fitness industry, including workout planners, live streaming platforms, and community-driven fitness apps.",
};

export default function FitnessIndustryPage() {
  return (
    <main>
      <ServiceHero {...heroData} />
      <ServiceFeatures
        {...featuresData}
        grad={heroData.grad}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceProcess {...processData} gradFrom={heroData.gradFrom} gradTo={heroData.gradTo} />
      <CTASection />
    </main>
  );
}