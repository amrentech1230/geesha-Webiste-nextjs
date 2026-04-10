import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#06b6d4"; // cyan-500
const gradTo = "#0284c7"; // sky-600
const grad = "from-cyan-500 to-sky-600";

export const metadata = {
  title: "On-Demand Service Solutions | Geesha Solutions",
  description: "Building scalable platforms for on-demand services, including ride-sharing, food delivery, and service marketplaces.",
};

export default function OnDemandIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="On-Demand Industry"
        title="Powering the"
        highlight="Instant Economy."
        desc="We build robust, scalable, and intuitive platforms for the on-demand economy, from ride-sharing and food delivery to home services and freelance marketplaces."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🚀"
        badges={["Ride-Sharing", "Food Delivery", "Service Marketplaces", "Real-Time Tracking", "Dynamic Pricing", "Booking Engines"]}
        stats={[
          { value: "10M+", label: "Users Served" },
          { value: "50M+", label: "Transactions Processed" },
          { value: "<1s", label: "Matching Speed" },
          { value: "99.99%", label: "Platform Uptime" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="End-to-End On-Demand Platforms"
        serviceDesc="From user-friendly customer apps to powerful provider dashboards, we engineer every component for a seamless on-demand experience."
        features={[
          { icon: "🚗", title: "Ride-Sharing & Mobility", desc: "Complete solutions for ride-hailing, carpooling, and micro-mobility services with real-time tracking and automated dispatch." },
          { icon: "🍔", title: "Food & Grocery Delivery", desc: "Platforms connecting customers with restaurants and stores, featuring order management, and delivery logistics." },
          { icon: "🛠️", title: "Home & Local Services", desc: "Marketplaces for booking services like cleaning, plumbing, and beauty, with scheduling and payment integration." },
          { icon: "🗺️", title: "Real-Time Tracking & Geolocation", desc: "Advanced GPS integration for live tracking of drivers, deliveries, and service providers." },
          { icon: "💰", title: "Dynamic Pricing & Surge", desc: "Algorithmic pricing models that adjust based on demand, supply, and other market factors." },
          { icon: "⭐️", title: "Ratings & Review Systems", desc: "Building trust and quality control through transparent feedback mechanisms for users and providers." },
          { icon: "💳", title: "Seamless Payment Integration", desc: "Secure and convenient in-app payments, subscriptions, and wallet functionalities." },
          { icon: "🤖", title: "AI-Powered Matching Engine", desc: "Intelligent algorithms to match users with the most suitable providers based on location, availability, and ratings." },
        ]}
        tools={["Node.js", "Go", "React Native", "Flutter", "Google Maps API", "Stripe", "AWS/GCP", "Kubernetes", "WebSockets", "Redis"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "💡", title: "Market & Feasibility", desc: "We analyze your target market, operational model, and competitive landscape to define a solid product strategy." },
          { num: "02", icon: "📱", title: "UX/UI for All Users", desc: "Designing intuitive and distinct experiences for customers, service providers, and administrators." },
          { num: "03", icon: "⚙️", title: "Scalable Backend Engineering", desc: "Building a high-performance, real-time backend capable of handling millions of concurrent users and transactions." },
          { num: "04", icon: "🚀", title: "Launch & Growth Hacking", desc: "Deploying the platform and implementing data-driven strategies to acquire and retain users on both sides of the marketplace." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚡", title: "Rapid Time-to-Market", desc: "Launch your on-demand business quickly with our proven architecture and development expertise." },
          { icon: "📈", title: "Built for Hyper-Scale", desc: "Our platforms are designed to grow with you, handling massive transaction volumes and user growth." },
          { icon: "🎯", title: "Superior User Experience", desc: "Delight your users with a fast, reliable, and intuitive app that keeps them coming back." },
          { icon: "🧠", title: "Intelligent Automation", desc: "Automate dispatching, pricing, and matching to run your operations efficiently at scale." },
          { icon: "🔒", title: "Trust & Safety Features", desc: "Implement features like identity verification, ratings, and secure payments to build a trusted community." },
          { icon: "🤝", title: "Long-Term Growth Partner", desc: "We provide ongoing support and innovation to help you dominate your on-demand market." },
        ]}
        otherServices={[
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}