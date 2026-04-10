import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#0ea5e9"; // sky-500
const gradTo = "#22d3ee"; // cyan-400
const grad = "from-sky-500 to-cyan-400";

export const metadata = {
  title: "Travel Industry Solutions | Geesha Solutions",
  description: "Innovative travel tech solutions for booking platforms, personalized experiences, and operational efficiency.",
};

export default function TravelIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Travel Industry"
        title="Innovating the"
        highlight="Travel Experience."
        desc="We build cutting-edge travel technology solutions, from intuitive booking platforms and personalized itinerary planners to efficient operational systems, enhancing every step of the traveler's journey."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="✈️"
        badges={["Booking Platforms", "Personalized Itineraries", "Travel Management", "AI Recommendations", "Mobile Ticketing", "Dynamic Pricing"]}
        stats={[
          { value: "10M+", label: "Bookings Processed" },
          { value: "500K+", label: "Daily Users" },
          { value: "99.9%", label: "System Uptime" },
          { value: "30%", label: "Increased Conversions" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Travel Tech Solutions"
        serviceDesc="From discovery to destination, we engineer robust platforms that streamline operations, delight travelers, and drive growth for travel businesses."
        features={[
          { icon: "✈️", title: "Online Booking Engines", desc: "Customizable and scalable booking platforms for flights, hotels, car rentals, and tour packages." },
          { icon: "🗺️", title: "Personalized Itinerary Planners", desc: "AI-driven tools that create unique travel plans based on user preferences, budget, and interests." },
          { icon: "📱", title: "Mobile Travel Apps", desc: "Feature-rich mobile applications for seamless booking, check-ins, real-time updates, and in-destination services." },
          { icon: "📊", title: "Dynamic Pricing & Revenue Management", desc: "Advanced algorithms for real-time price adjustments and yield optimization to maximize profitability." },
          { icon: "🤝", title: "CRM & Loyalty Programs", desc: "Systems to manage customer relationships, personalize offers, and build loyalty through rewards programs." },
          { icon: "⚙️", title: "Back-Office Automation", desc: "Streamlining operations like inventory management, vendor relations, and accounting for travel agencies and operators." },
          { icon: "🌐", title: "Global Distribution System (GDS) Integration", desc: "Seamless connectivity with major GDS providers for extensive inventory access and real-time data." },
          { icon: "📈", title: "Travel Analytics & Reporting", desc: "Comprehensive dashboards for insights into booking trends, customer behavior, and market performance." },
        ]}
        tools={["React", "Node.js", "Python", "AWS/GCP", "Amadeus API", "Sabre API", "Travelport API", "Machine Learning", "PostgreSQL", "MongoDB"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Market Analysis & Strategy", desc: "Understanding traveler needs, market trends, and competitive landscape to define your unique value proposition." },
          { num: "02", icon: "🎨", title: "UX/UI Design", desc: "Crafting intuitive, engaging, and conversion-focused interfaces for a superior user experience." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building robust platforms with modular architecture, integrating with essential third-party travel services." },
          { num: "04", icon: "🚀", title: "Launch, Optimize & Scale", desc: "Deploying your solution with continuous monitoring, performance optimization, and scalable infrastructure for growth." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "✨", title: "Enhanced Traveler Experience", desc: "Deliver seamless, personalized, and memorable journeys for your customers." },
          { icon: "📈", title: "Increased Revenue & Efficiency", desc: "Optimize pricing, automate operations, and boost conversion rates." },
          { icon: "🌐", title: "Global Reach & Connectivity", desc: "Access vast inventory and connect with travelers worldwide through integrated systems." },
          { icon: "🔒", title: "Secure & Reliable Platforms", desc: "Ensure data privacy and system stability with robust security measures." },
          { icon: "💡", title: "Innovation & Future-Proofing", desc: "Stay ahead with AI-driven insights and adaptable technology that evolves with the market." },
          { icon: "🤝", title: "Strategic Technology Partner", desc: "Collaborate with experts who understand the nuances of the travel industry." },
        ]}
        otherServices={[
          { label: "ECommerce", href: "/industries/ecommerce", icon: "🛒", grad: "from-violet-500 to-purple-600" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}