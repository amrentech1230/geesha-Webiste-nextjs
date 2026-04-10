import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

// --- HERO SECTION DATA ---
const heroData = {
  label: "OTT Industry",
  title: "Delivering Content Directly",
  highlight: "to Your Audience.",
  desc: "We engineer high-performance Over-the-Top (OTT) platforms for seamless video streaming and content distribution across all devices.",
  grad: "from-sky-500 to-blue-600",
  gradFrom: "#0ea5e9", // sky-500
  gradTo: "#2563eb",   // blue-600
  emoji: "📺",
  badges: ["VOD & Live Streaming", "Multi-Device Support", "Monetization", "Analytics"],
  stats: [
    { value: "4K", label: "Streaming Quality" },
    { value: "1M+", label: "Concurrent Viewers" },
    { value: "99.99%", label: "Platform Availability" },
    { value: "Cross-Platform", label: "App Support" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "OTT",
  serviceDesc: "From infrastructure to user experience, we build complete OTT solutions that deliver content flawlessly.",
  features: [
    { icon: "▶️", title: "VOD & Live Streaming", desc: "Robust platforms for both video-on-demand libraries and live event broadcasting with low latency." },
    { icon: "💻", title: "Multi-Device Experience", desc: "Native apps for web, mobile (iOS/Android), smart TVs, and streaming devices for a consistent UX." },
    { icon: "💰", title: "Monetization Models", desc: "Flexible integration of SVOD (subscriptions), AVOD (ads), and TVOD (pay-per-view) models." },
    { icon: "📊", title: "Viewer Analytics", desc: "In-depth analytics dashboards to track viewership, engagement, and content performance." },
  ],
  tools: ["AWS Elemental", "Akamai", "Brightcove", "React Native", "Swift", "ExoPlayer"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Content Strategy", desc: "Defining content delivery workflows, encoding requirements, and DRM strategy for secure streaming.", icon: "🎬" },
    { num: "02", title: "Platform Architecture", desc: "Designing a scalable and resilient cloud infrastructure to handle peak viewership and global delivery.", icon: "🏗️" },
    { num: "03", title: "App Development", desc: "Building user-friendly applications for all target devices, ensuring a seamless and native experience.", icon: "📱" },
    { num: "04", title: "CDN & Deployment", desc: "Integrating with top Content Delivery Networks (CDNs) and deploying the platform for high availability.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "OTT Platform Development | Geesha Solutions",
  description: "Build your own OTT streaming service. We offer end-to-end development for VOD and live streaming platforms across all devices.",
};

export default function OTTIndustryPage() {
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