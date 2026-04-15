import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

const gradFrom = "#1d4ed8"; // blue-700
const gradTo = "#4338ca"; // indigo-800
const grad = "from-blue-700 to-indigo-800";

export const metadata = {
  title: "Supply Chain Industry Solutions | Geesha Solutions",
  description: "Developing intelligent software solutions for end-to-end supply chain visibility, optimization, and resilience.",
};

export default function SupplyChainIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Supply Chain Industry"
        title="Optimizing Global"
        highlight="Supply Chains."
        desc="We develop intelligent software solutions that provide end-to-end visibility, optimize logistics, and enhance resilience across complex supply chain networks."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🔗"
        badges={["SCM Software", "Demand Planning", "Inventory Optimization", "Logistics Integration", "Risk Management", "Blockchain for SC"]}
        stats={[
          { value: "20%", label: "Inventory Reduction" },
          { value: "99%", label: "On-Time Delivery" },
          { value: "360°", label: "Visibility Achieved" },
          { value: "15%", label: "Operational Cost Savings" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Integrated Software Solutions for Supply Chain Excellence"
        serviceDesc="From raw materials to final delivery, our technology empowers businesses to build agile, transparent, and efficient supply chains."
        features={[
          { icon: "📈", title: "Demand Planning & Forecasting", desc: "AI-powered solutions for accurate demand prediction, reducing stockouts and overstocking." },
          { icon: "📦", title: "Inventory Management & Optimization", desc: "Systems for real-time inventory tracking, optimization, and automated reordering." },
          { icon: " warehouse", title: "Warehouse Management Systems (WMS)", desc: "Streamlining warehouse operations, from receiving and putaway to picking and shipping." },
          { icon: "🚚", title: "Transportation Management Systems (TMS)", desc: "Optimizing freight, route planning, carrier selection, and real-time shipment tracking." },
          { icon: "🤝", title: "Supplier Relationship Management (SRM)", desc: "Platforms to manage supplier interactions, performance, and procurement processes efficiently." },
          { icon: "📊", title: "Supply Chain Analytics & AI", desc: "Leveraging big data and AI for predictive analytics, performance monitoring, and strategic decision-making." },
          { icon: "⛓️", title: "Blockchain for Traceability", desc: "Implementing blockchain solutions for enhanced transparency, security, and traceability across the supply chain." },
          { icon: "🛡️", title: "Risk Management & Resilience", desc: "Tools to identify, assess, and mitigate supply chain risks, building more resilient operations." },
        ]}
        tools={["SAP SCM", "Oracle SCM", "Kinaxis", "JDA", "Coupa", "AI/ML Frameworks", "Blockchain Platforms", "IoT Devices", "Cloud Platforms"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Supply Chain Assessment", desc: "We conduct a comprehensive analysis of your current supply chain to identify inefficiencies and opportunities for digital transformation." },
          { num: "02", icon: "📐", title: "Solution Design & Integration", desc: "Designing a tailored software architecture that integrates seamlessly with your existing ERP, WMS, and TMS systems." },
          { num: "03", icon: "💻", title: "Agile Development & Testing", desc: "Building and rigorously testing the solution in agile sprints, ensuring scalability, security, and performance." },
          { num: "04", icon: "🚀", title: "Deployment & Continuous Optimization", desc: "Implementing the solution with minimal disruption, providing training, and continuously optimizing for peak supply chain performance." },
        ]}
      />
    <CTASection />

    </div>
  );
}