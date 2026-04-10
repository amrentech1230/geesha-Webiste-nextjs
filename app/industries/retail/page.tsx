import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#ec4899"; // pink-500
const gradTo = "#f43f5e"; // rose-500
const grad = "from-pink-500 to-rose-500";

export const metadata = {
  title: "Retail Industry Solutions | Geesha Solutions",
  description: "Integrated retail solutions, from POS systems to inventory management and customer loyalty platforms, unifying online and offline experiences.",
};

export default function RetailIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Retail Industry"
        title="Modernizing Retail"
        highlight="for the Digital Age."
        desc="We build integrated retail solutions, from Point of Sale (POS) systems to inventory management and customer loyalty platforms, that unify online and offline experiences."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🛍️"
        badges={["POS Systems", "Inventory Management", "Omnichannel Retail", "Customer Loyalty", "In-Store Analytics", "Supply Chain"]}
        stats={[
          { value: "1,000+", label: "Stores Powered" },
          { value: "100M+", label: "SKUs Managed" },
          { value: "30%", label: "Increase in Efficiency" },
          { value: "24/7", label: "System Support" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Retail Technology"
        serviceDesc="From the warehouse to the storefront, we engineer technology that streamlines operations, enhances customer engagement, and drives sales."
        features={[
          { icon: "💰", title: "Point of Sale (POS) Systems", desc: "Modern, cloud-based POS solutions for seamless transactions, inventory updates, and sales reporting." },
          { icon: "📦", title: "Inventory Management", desc: "Real-time inventory tracking across multiple stores and warehouses to prevent stockouts and overstocking." },
          { icon: "🔄", title: "Omnichannel Commerce", desc: "Unifying online and in-store experiences with features like click-and-collect, endless aisle, and unified customer profiles." },
          { icon: "❤️", title: "Customer Loyalty Programs", desc: "Personalized loyalty and rewards programs to increase customer retention and lifetime value." },
          { icon: "📊", title: "In-Store Analytics", desc: "Leveraging IoT and computer vision to analyze foot traffic, customer behavior, and store layout effectiveness." },
          { icon: "🚚", title: "Supply Chain Optimization", desc: "Automating procurement, warehouse management, and logistics for a more efficient supply chain." },
          { icon: "👤", title: "Personalized Marketing", desc: "Targeted promotions and recommendations based on customer purchase history and browsing behavior." },
          { icon: "🔌", title: "ERP & CRM Integration", desc: "Seamless integration with enterprise resource planning (ERP) and customer relationship management (CRM) systems." },
        ]}
        tools={["React", "Node.js", "Python", "AWS/GCP", "Kubernetes", "PostgreSQL", "Shopify POS", "Odoo", "RFID", "IoT"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🛒", title: "Operational Analysis", desc: "We analyze your current retail operations, from supply chain to customer checkout, to identify key areas for digital transformation." },
          { num: "02", icon: "🏗️", title: "Solution Architecture", desc: "Designing a scalable and integrated architecture that connects your e-commerce, POS, and backend systems." },
          { num: "03", icon: "💻", title: "Agile Implementation", desc: "Developing and integrating the required modules, from inventory systems to customer-facing applications, in agile sprints." },
          { num: "04", icon: "🚀", title: "Deployment & Training", desc: "Rolling out the new systems across your stores and providing comprehensive training and support for your staff." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🔗", title: "Unified Commerce", desc: "Create a seamless experience for your customers whether they shop online, on mobile, or in-store." },
          { icon: "📈", title: "Operational Efficiency", desc: "Automate manual tasks, optimize inventory, and reduce operational costs with integrated systems." },
          { icon: "💡", title: "Data-Driven Decisions", desc: "Gain valuable insights into sales trends, customer behavior, and store performance to make smarter decisions." },
          { icon: "👥", title: "Enhanced Customer Engagement", desc: "Build lasting customer relationships with personalized marketing and loyalty programs." },
          { icon: "🔧", title: "Scalable & Future-Proof", desc: "Our solutions are built to scale with your business and adapt to the future of retail." },
          { icon: "🤝", title: "Expert Retail Partner", desc: "We provide ongoing support and innovation to ensure your technology keeps you ahead of the competition." },
        ]}
        otherServices={[
          { label: "ECommerce", href: "/industries/ecommerce", icon: "🛒", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Supply Chain", href: "/industries/supply-chain", icon: "🔗", grad: "from-slate-400 to-gray-500" },
        ]}
      />
    </div>
  );
}