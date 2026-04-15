import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

const gradFrom = "#64748b"; // slate-500
const gradTo = "#4b5563"; // gray-600
const grad = "from-slate-500 to-gray-600";

export const metadata = {
  title: "Logistics Industry Solutions | Geesha Solutions",
  description: "Developing advanced software solutions for the logistics industry, including fleet management, warehouse automation, and real-time tracking.",
};

export default function LogisticsIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Logistics Industry"
        title="Streamlining Global"
        highlight="Supply Chains."
        desc="We develop advanced software solutions that optimize logistics operations, enhance supply chain visibility, and drive efficiency in transportation and warehousing."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🚢"
        badges={["Supply Chain Management", "Fleet Management", "Warehouse Automation", "Real-Time Tracking", "Last-Mile Delivery", "Logistics Analytics"]}
        stats={[
          { value: "25%", label: "Cost Reduction" },
          { value: "99.9%", label: "On-Time Delivery" },
          { value: "1M+", label: "Shipments Managed" },
          { value: "24/7", label: "Monitoring & Support" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="End-to-End Logistics Software Solutions"
        serviceDesc="From first mile to last mile, our technology empowers logistics providers to manage complex operations with precision and speed."
        features={[
          { icon: "🚚", title: "Fleet Management & Optimization", desc: "Solutions for vehicle tracking, route optimization, maintenance scheduling, and driver management." },
          { icon: "📦", title: "Warehouse Management Systems (WMS)", desc: "Automating inventory, order fulfillment, and warehouse operations for maximum efficiency." },
          { icon: "🛰️", title: "Real-Time Tracking & Visibility", desc: "GPS and IoT-based systems for live tracking of goods, vehicles, and assets across the supply chain." },
          { icon: "🛵", title: "Last-Mile Delivery Solutions", desc: "Optimizing delivery routes, managing couriers, and providing real-time updates for enhanced customer experience." },
          { icon: "📊", title: "Logistics Data Analytics & AI", desc: "Leveraging AI and machine learning for demand forecasting, predictive maintenance, and operational insights." },
          { icon: "🗺️", title: "Freight & Route Optimization", desc: "Advanced algorithms to plan the most efficient and cost-effective routes for various modes of transport." },
          { icon: "📄", title: "Customs & Compliance Solutions", desc: "Software to streamline customs documentation, ensure regulatory compliance, and reduce delays in international shipping." },
          { icon: "🔗", title: "Supply Chain Planning & Execution", desc: "Integrated platforms for end-to-end supply chain planning, execution, and collaboration." },
        ]}
        tools={["SAP Logistics", "Oracle SCM", "Manhattan WMS", "GPS Tracking", "IoT Platforms", "Python", "Java", "AWS/Azure/GCP", "AI/ML Frameworks"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Needs Assessment & Process Mapping", desc: "We analyze your current logistics operations, identify bottlenecks, and map out a digital transformation strategy." },
          { num: "02", icon: "📐", title: "Solution Design & Integration", desc: "Designing a scalable and robust software architecture that integrates seamlessly with your existing systems." },
          { num: "03", icon: "💻", title: "Agile Development & Testing", desc: "Building and rigorously testing the solution in agile sprints, ensuring reliability and performance." },
          { num: "04", icon: "🚀", title: "Deployment & Continuous Optimization", desc: "Implementing the solution with minimal disruption, providing training, and continuously optimizing for peak performance." },
        ]}
      />
<CTASection />
    </div>
  );
}