import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#3b82f6"; // blue-500
const gradTo = "#4f46e5"; // indigo-600
const grad = "from-blue-500 to-indigo-600";

export const metadata = {
  title: "Real Estate Industry Solutions | Geesha Solutions",
  description: "Innovative digital solutions for the real estate industry, from property listing platforms and virtual tours to efficient property management systems.",
};

export default function RealEstateIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Real Estate Industry"
        title="Building Digital"
        highlight="Real Estate Experiences."
        desc="We develop innovative digital solutions for the real estate industry, from intuitive property listing platforms and virtual tour experiences to efficient property management systems."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🏠"
        badges={["Property Listing Platforms", "Virtual Tours", "CRM for Real Estate", "Property Management", "AI-Powered Search", "Blockchain for Real Estate"]}
        stats={[
          { value: "100K+", label: "Properties Listed" },
          { value: "500K+", label: "Monthly Users" },
          { value: "30%", label: "Faster Closings" },
          { value: "99.9%", label: "Platform Uptime" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Real Estate Technology"
        serviceDesc="From property search to transaction closing, we engineer every aspect of the real estate journey for efficiency, transparency, and enhanced user experience."
        features={[
          { icon: "🏡", title: "Property Listing Platforms", desc: "Customizable platforms for agents and brokers to list, manage, and showcase properties with advanced search filters." },
          { icon: "🌐", title: "Virtual Tour & AR/VR Experiences", desc: "Immersive virtual property tours and augmented reality features to enhance buyer engagement." },
          { icon: "🤝", title: "CRM for Real Estate", desc: "Tailored CRM systems to manage leads, client communications, and sales pipelines for real estate professionals." },
          { icon: "🔑", title: "Property Management Systems", desc: "Solutions for landlords and property managers to handle leases, maintenance, payments, and tenant communication." },
          { icon: "🔍", title: "AI-Powered Property Search", desc: "Intelligent search engines and recommendation systems that learn user preferences for personalized property discovery." },
          { icon: "🔗", title: "Blockchain for Property Transactions", desc: "Secure and transparent platforms leveraging blockchain for streamlined property deeds, contracts, and ownership transfers." },
          { icon: "📊", title: "Data Analytics & Market Insights", desc: "Tools to analyze market trends, property values, and investment opportunities for informed decision-making." },
          { icon: "📱", title: "Agent & Broker Portals", desc: "Dedicated portals for real estate agents and brokers with tools for lead management, marketing, and collaboration." },
        ]}
        tools={["React", "Node.js", "Python", "AWS/GCP", "Three.js", "Unity", "Salesforce API", "PostgreSQL", "MongoDB", "Blockchain"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Market & User Analysis", desc: "We analyze market trends, target demographics, and user behaviors to define a strategic digital roadmap for your real estate venture." },
          { num: "02", icon: "🎨", title: "UX/UI Design & Prototyping", desc: "Crafting intuitive, visually appealing interfaces and interactive prototypes that enhance user engagement and streamline workflows." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building robust platforms with modular architecture, integrating with MLS, CRM, and other essential real estate tools." },
          { num: "04", icon: "🚀", title: "Launch, Optimize & Scale", desc: "Deploying your solution with continuous monitoring, performance optimization, and scalable infrastructure to support growth." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "✨", title: "Enhanced User Experience", desc: "Deliver seamless and engaging digital experiences for buyers, sellers, and tenants." },
          { icon: "📈", title: "Increased Efficiency & Sales", desc: "Automate processes, reduce operational costs, and boost property sales and rentals." },
          { icon: "🌐", title: "Broader Market Reach", desc: "Expand your audience with powerful online platforms and immersive virtual experiences." },
          { icon: "🔒", title: "Secure & Transparent Transactions", desc: "Leverage advanced security and blockchain for trustworthy property dealings." },
          { icon: "💡", title: "Data-Driven Insights", desc: "Gain valuable market intelligence to make informed decisions and stay ahead of the competition." },
          { icon: "🤝", title: "Strategic Technology Partner", desc: "Partner with experts who understand the unique challenges and opportunities in the real estate sector." },
        ]}
        otherServices={[
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}