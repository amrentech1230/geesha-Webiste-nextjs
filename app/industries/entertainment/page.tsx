import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Entertainment Industry",
  title: "Creating Immersive Digital",
  highlight: "Experiences.",
  desc: "We build cutting-edge platforms for media, streaming, and content delivery that captivate and engage audiences worldwide.",
  grad: "from-rose-500 to-pink-600",
  gradFrom: "#f43f5e", // rose-500
  gradTo: "#ec4899",   // pink-600
  emoji: "🎬",
  badges: ["Streaming Platforms", "Content Management", "Digital Rights", "Fan Engagement"],
  stats: [
    { value: "10M+", label: "Active Users" },
    { value: "20+", label: "Media Partners" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "Top Rated", label: "Entertainment Apps" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Entertainment",
  serviceDesc: "We develop robust and scalable solutions that power the next generation of digital entertainment.",
  features: [
    { icon: "📺", title: "Video Streaming Platforms", desc: "End-to-end solutions for live and on-demand video content, with secure delivery and monetization." },
    { icon: "🎵", title: "Music & Audio Streaming", desc: "High-fidelity audio streaming apps with personalized playlists, social sharing, and offline access." },
    { icon: "📚", title: "Content Management Systems", desc: "Powerful and intuitive CMS for managing vast libraries of media content, metadata, and user data." },
    { icon: "🎟️", title: "Fan Engagement & Ticketing", desc: "Platforms that build communities, offer exclusive content, and provide seamless event ticketing." },
  ],
  tools: ["AWS MediaServices", "Wowza", "DRM", "React", "Node.js", "Kotlin"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Audience Analysis", desc: "Understanding viewer behavior and content preferences to design a compelling user journey.", icon: "👥" },
    { num: "02", title: "UX for Engagement", desc: "Creating intuitive and visually stunning interfaces that keep users hooked and subscribed.", icon: "✨" },
    { num: "03", title: "Scalable Architecture", desc: "Building a resilient backend capable of handling high-traffic streaming and content delivery.", icon: "🌐" },
    { num: "04", title: "Launch & Monetize", desc: "Deploying the platform and integrating subscription, ad-based, or hybrid monetization models.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "Entertainment App Development | Geesha Solutions",
  description: "Custom software for the entertainment industry, including streaming platforms, content management, and fan engagement solutions.",
};

export default function EntertainmentIndustryPage() {
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