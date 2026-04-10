import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Gaming Industry",
  title: "Building Worlds, Crafting",
  highlight: "Interactive Fun.",
  desc: "Developing engaging games and robust gaming platforms for mobile, web, and desktop, from hyper-casual to AAA-level experiences.",
  grad: "from-violet-500 to-purple-600",
  gradFrom: "#8b5cf6", // violet-500
  gradTo: "#a855f7",   // purple-600
  emoji: "🎮",
  badges: ["Mobile Gaming", "Game Platforms", "Live Ops", "Gamification"],
  stats: [
    { value: "100M+", label: "Player Downloads" },
    { value: "50+", label: "Games Launched" },
    { value: "96%", label: "Player Retention" },
    { value: "Award-Winning", label: "Game Designs" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Gaming",
  serviceDesc: "We bring game ideas to life with stunning graphics, addictive gameplay, and scalable backend infrastructure.",
  features: [
    { icon: "📱", title: "Mobile Game Development", desc: "Creating captivating games for iOS and Android, optimized for performance and user engagement." },
    { icon: "🌐", title: "Online & Multiplayer Platforms", desc: "Building scalable backends for multiplayer matchmaking, leaderboards, and in-game economies." },
    { icon: "✨", title: "AR/VR & Immersive Games", desc: "Developing next-generation augmented and virtual reality games that offer unparalleled immersion." },
    { icon: "📈", title: "Live Ops & Analytics", desc: "Integrating tools for live events, A/B testing, player segmentation, and performance analytics." },
  ],
  tools: ["Unity", "Unreal Engine", "Photon", "PlayFab", "Blender", "Firebase"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Game Design & Prototyping", desc: "Conceptualizing core mechanics, designing game loops, and creating playable prototypes.", icon: "🕹️" },
    { num: "02", title: "Art & Asset Creation", desc: "Designing and producing 2D/3D characters, environments, and UI assets that define the game's look.", icon: "🎨" },
    { num: "03", title: "Full-Cycle Development", desc: "Coding gameplay, integrating assets, and building backend features in an agile environment.", icon: "⚙️" },
    { num: "04", title: "Launch & Post-Launch Support", desc: "Deploying to app stores and providing ongoing support, content updates, and community management.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "Game Development Company | Geesha Solutions",
  description: "Expert game development services for mobile, web, and immersive AR/VR platforms. We build engaging and scalable games.",
};

export default function GamingIndustryPage() {
  return (
    <main>
      <ServiceHero {...heroData} />
      <ServiceFeatures
        {...featuresData}
        grad={heroData.grad}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceProcess
        {...processData}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceCTA gradFrom={heroData.gradFrom} gradTo={heroData.gradTo} />
    </main>
  );
}