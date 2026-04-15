import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#dc2626"; // red-600
const gradTo = "#ef4444"; // red-500
const grad = "from-red-600 to-red-500";

export const metadata = {
  title: "Magazine & Newspaper Solutions | Geesha Solutions",
  description: "Digital publishing platforms, content management systems (CMS), subscription models, and ad-tech integration for modern media outlets.",
};

export default function MagazineNewspaperIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Magazine & Newspaper"
        title="Reimagining Publishing"
        highlight="for the Digital Era."
        desc="We build sophisticated digital publishing platforms, content management systems (CMS), and monetization strategies for magazines and newspapers, enabling them to thrive online."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="📰"
        badges={["Digital Publishing", "Headless CMS", "Subscription Models", "Ad Tech", "Reader Analytics", "Content Monetization"]}
        stats={[
          { value: "50+", label: "Media Outlets Powered" },
          { value: "10M+", label: "Monthly Active Readers" },
          { value: "300%", label: "Subscription Growth" },
          { value: "80%", label: "Faster Content Delivery" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Digital Publishing Technology"
        serviceDesc="From content creation to reader engagement, we provide the tools for modern media companies to succeed in a competitive digital landscape."
        features={[
          { icon: "📝", title: "Headless CMS Solutions", desc: "Flexible and scalable content management systems (e.g., Strapi, Sanity) for multi-platform content distribution." },
          { icon: "💰", title: "Subscription & Paywall Integration", desc: "Robust systems for managing reader subscriptions, metered paywalls, and premium content access." },
          { icon: "📈", title: "Advertising Technology (Ad-Tech)", desc: "Integration with ad servers and programmatic platforms to maximize revenue while maintaining user experience." },
          { icon: "📊", title: "Reader Analytics & Engagement", desc: "Advanced analytics to understand reader behavior, personalize content, and increase engagement." },
          { icon: "⚡", title: "Accelerated Mobile Pages (AMP)", desc: "Implementing AMP for lightning-fast article loading on mobile devices, improving SEO and user retention." },
          { icon: "🔔", title: "Push Notification & Alerts", desc: "Systems for delivering breaking news alerts and personalized content recommendations to drive traffic." },
          { icon: "🎙️", title: "Podcast & Video Platform Integration", desc: "Seamlessly integrate and manage multimedia content to create richer storytelling experiences." },
          { icon: "🔒", title: "Digital Rights Management (DRM)", desc: "Protecting your valuable content from unauthorized distribution and piracy." },
        ]}
        tools={["Next.js", "Headless CMS", "Stripe", "Google Ad Manager", "GraphQL", "AMP", "Firebase", "Analytics Platforms"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Audience & Content Strategy", desc: "We analyze your readership and content goals to design a platform that enhances engagement and monetization." },
          { num: "02", icon: "🎨", title: "UX for Readability", desc: "Designing clean, fast, and intuitive interfaces that prioritize the reading experience across all devices." },
          { num: "03", icon: "💻", title: "CMS & Platform Development", desc: "Building the core publishing platform with a powerful CMS, and integrating subscription and ad-tech systems." },
          { num: "04", icon: "🚀", title: "Launch & Performance Tuning", desc: "Deploying the platform with a focus on speed, SEO, and scalability, while providing ongoing support." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🌟", title: "Enhanced Reader Experience", desc: "Deliver a fast, clean, and engaging reading experience that keeps users coming back." },
          { icon: "💰", title: "Diversified Revenue Streams", desc: "Implement effective subscription, advertising, and e-commerce models to boost revenue." },
          { icon: "✏️", title: "Streamlined Editorial Workflows", desc: "Empower your content creators with a modern, efficient, and flexible publishing system." },
          { icon: "📈", title: "Data-Informed Content Strategy", desc: "Leverage reader data to make smarter decisions about your content and editorial direction." },
          { icon: "🌐", title: "Future-Ready Platform", desc: "Build on a scalable, modern architecture that can adapt to the future of digital media." },
          { icon: "🤝", title: "Expert Publishing Partner", desc: "Collaborate with a team that understands the technological challenges of the media industry." },
        ]}
        otherServices={[
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}