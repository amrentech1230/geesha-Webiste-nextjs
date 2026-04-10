import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#8b5cf6"; // violet-500
const gradTo = "#7e22ce"; // purple-600
const grad = "from-violet-500 to-purple-600";

export const metadata = {
  title: "E-Commerce Industry Solutions | Geesha Solutions",
  description: "Building scalable, high-performance e-commerce platforms. We create custom storefronts, marketplaces, and headless commerce solutions.",
};

export default function ECommerceIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="E-Commerce Industry"
        title="Building Engaging"
        highlight="Online Stores."
        desc="We build high-performance, scalable, and visually stunning e-commerce platforms, from custom storefronts to complex multi-vendor marketplaces, designed to convert visitors into loyal customers."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🛒"
        badges={["Shopify Plus", "Headless Commerce", "Marketplaces", "Subscription Commerce", "PWA", "Conversion Rate Optimization"]}
        stats={[
          { value: "$1B+", label: "Annual GMV" },
          { value: "50M+", label: "Users Served" },
          { value: "99.99%", label: "Platform Uptime" },
          { value: "<100ms", label: "Avg. Page Load" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="End-to-End E-Commerce Development"
        serviceDesc="From product discovery to checkout, we engineer every touchpoint of the customer journey for a seamless and engaging shopping experience."
        features={[
          { icon: "🛍️", title: "Custom Storefront Development", desc: "Bespoke e-commerce websites built on platforms like Shopify, Magento, or custom frameworks for a unique brand experience." },
          { icon: "🤖", title: "Headless Commerce", desc: "Decoupling the frontend from the backend to deliver fast, dynamic experiences across web, mobile, and IoT devices." },
          { icon: "👥", title: "Multi-Vendor Marketplaces", desc: "Robust platforms for building marketplaces like Amazon or Etsy, with vendor dashboards and commission management." },
          { icon: "🔄", title: "Subscription Commerce", desc: "Recurring billing and subscription management systems to build predictable revenue streams." },
          { icon: "🔍", title: "Personalization Engines", desc: "AI-driven product recommendations, personalized search, and targeted promotions to increase conversions." },
          { icon: "📱", title: "Progressive Web Apps (PWA)", desc: "Building fast, reliable, and engaging mobile-first shopping experiences that work offline." },
          { icon: "💳", title: "Payment Gateway Integration", desc: "Seamless integration with Stripe, PayPal, Braintree, and other payment solutions for secure transactions." },
          { icon: "📈", title: "Conversion Rate Optimization", desc: "Data-driven A/B testing and user experience analysis to improve conversion rates and maximize revenue." },
        ]}
        tools={["Shopify", "Magento", "BigCommerce", "React", "Next.js", "Vue", "Node.js", "AWS/GCP", "Stripe", "Algolia", "GraphQL"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Strategy & Discovery", desc: "We dive deep into your business goals, target audience, and competitive landscape to define a winning e-commerce strategy." },
          { num: "02", icon: "🎨", title: "UX/UI Design", desc: "Crafting intuitive, beautiful, and conversion-focused user interfaces that reflect your brand and delight your customers." },
          { num: "03", icon: "💻", title: "Agile Development", desc: "Building your e-commerce platform in iterative sprints, ensuring quality and flexibility while providing full transparency." },
          { num: "04", icon: "🚀", title: "Launch & Growth", desc: "Deploying your store and providing ongoing support, optimization, and growth strategies to help you scale." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚡", title: "Blazing-Fast Performance", desc: "We optimize for speed to reduce bounce rates and improve search engine rankings, ensuring a great user experience." },
          { icon: "📈", title: "Scalable Architecture", desc: "Our platforms are built to handle traffic spikes and grow with your business, from hundreds to millions of users." },
          { icon: "📱", title: "Omnichannel Ready", desc: "Deliver a consistent brand experience across web, mobile, and physical stores with a unified commerce platform." },
          { icon: "🔒", title: "Ironclad Security", desc: "Protecting your customer data and business with secure coding practices, PCI compliance, and regular audits." },
          { icon: "💡", title: "Future-Proof Technology", desc: "Leveraging modern, flexible technologies like headless architecture to adapt to future market trends." },
          { icon: "🤝", title: "Dedicated Growth Partner", desc: "We are more than developers; we are your partners in navigating the complexities of digital commerce." },
        ]}
        otherServices={[
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
        ]}
      />
    </div>
  );
}