import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

const gradFrom = "#4f46e5"; // indigo-600
const gradTo = "#6366f1"; // indigo-500
const grad = "from-indigo-600 to-indigo-500";

export const metadata = {
  title: "Social Media Platform Development | Geesha Solutions",
  description: "Building scalable social networks, community platforms, and engagement tools with features like real-time chat, content feeds, and moderation systems.",
};

export default function SocialMediaIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Social Media & Communities"
        title="Connecting People,"
        highlight="Building Communities."
        desc="We engineer scalable, engaging, and secure social media platforms and online communities, equipped with all the features needed to foster interaction and growth."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="💬"
        badges={["Social Networking", "Community Platforms", "Real-Time Chat", "Content Feeds", "Moderation Tools", "Live Streaming"]}
        stats={[
          { value: "20M+", label: "Users Connected" },
          { value: "1B+", label: "Messages Sent" },
          { value: "99.99%", label: "Platform Uptime" },
          { value: "<100ms", label: "Latency" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="End-to-End Social Platform Engineering"
        serviceDesc="From real-time messaging to AI-powered content feeds, we build the complex architecture required for a successful social platform."
        features={[
          { icon: "👥", title: "User Profiles & Networking", desc: "Rich user profiles, friend/follower systems, and networking features to build connections." },
          { icon: "📰", title: "Algorithmic & Chronological Feeds", desc: "Highly-performant content feeds with options for algorithmic recommendations and chronological sorting." },
          { icon: "💬", title: "Real-Time Chat & Messaging", desc: "One-on-one and group messaging with features like typing indicators, read receipts, and media sharing." },
          { icon: "📹", title: "Live Streaming & Video Content", desc: "Integration of live video broadcasting, stories, and video-on-demand (VOD) capabilities." },
          { icon: "🛡️", title: "Content Moderation & Safety Tools", desc: "AI-powered and manual moderation systems to ensure community safety and filter inappropriate content." },
          { icon: "🔔", title: "Notification Systems", desc: "Scalable, real-time notification systems for web and mobile to keep users engaged." },
          { icon: "🧩", title: "Gamification & Engagement", desc: "Features like badges, points, and leaderboards to drive user interaction and retention." },
          { icon: "📈", title: "Growth & Analytics Tools", desc: "Built-in analytics dashboards for administrators to track user growth, engagement metrics, and platform health." },
        ]}
        tools={["Node.js", "React", "React Native", "WebSockets", "Redis", "PostgreSQL", "AWS/GCP", "Elasticsearch", "FFmpeg", "WebRTC"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "💡", title: "Concept & Feature Planning", desc: "Defining your niche, core features, and monetization strategy to create a unique social product." },
          { num: "02", icon: "🎨", title: "Addictive UX/UI Design", desc: "Designing an intuitive and compelling user experience that encourages daily active use and content creation." },
          { num: "03", icon: "⚙️", title: "Scalable Backend Architecture", desc: "Engineering a robust, high-performance backend capable of handling millions of concurrent users and real-time events." },
          { num: "04", icon: "🚀", title: "Launch, Iterate & Grow", desc: "Deploying the MVP, gathering user feedback, and continuously iterating on features to drive community growth." },
        ]}
      />
      <CTASection />
    </div>
  );
}
