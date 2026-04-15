import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";
const gradFrom = "#10b981"; // emerald-500
const gradTo = "#059669"; // emerald-600
const grad = "from-emerald-500 to-emerald-600";

export const metadata = {
  title: "Energy Industry Solutions | Geesha Solutions",
  description: "Delivering innovative software solutions for the energy sector, including smart grid management, renewable energy integration, and operational efficiency.",
};

export default function EnergyIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Energy Industry"
        title="Powering the Future"
        highlight="with Intelligent Solutions."
        desc="We develop advanced software solutions that optimize energy production, distribution, and consumption, driving efficiency and sustainability across the energy sector."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="💡"
        badges={["Smart Grids", "Renewable Energy", "Energy Trading", "Asset Management", "IoT for Energy", "Carbon Footprint Tracking"]}
        stats={[
          { value: "30%", label: "Energy Efficiency Improvement" },
          { value: "20%", label: "Reduction in Carbon Emissions" },
          { value: "99.9%", label: "Grid Reliability" },
          { value: "15%", label: "Operational Cost Savings" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Software Solutions for the Energy Sector"
        serviceDesc="From generation to consumption, our solutions empower energy companies to innovate, optimize, and meet evolving demands."
        features={[
          { icon: "⚡", title: "Smart Grid Solutions", desc: "Developing intelligent systems for real-time monitoring, control, and optimization of energy distribution networks." },
          { icon: "☀️", title: "Renewable Energy Integration", desc: "Building platforms to seamlessly integrate and manage solar, wind, and other renewable energy sources into the grid." },
          { icon: "📈", title: "Energy Trading & Risk Management", desc: "Creating sophisticated software for energy market analysis, trading optimization, and risk mitigation." },
          { icon: "⚙️", title: "Asset Performance Management", desc: "Implementing solutions for predictive maintenance, asset health monitoring, and lifecycle management of energy infrastructure." },
          { icon: "📡", title: "IoT for Energy Infrastructure", desc: "Leveraging IoT sensors and data for remote monitoring, fault detection, and operational efficiency across energy assets." },
          { icon: "📊", title: "Energy Data Analytics", desc: "Transforming vast energy data into actionable insights for demand forecasting, consumption patterns, and operational improvements." },
          { icon: "🌳", title: "Carbon Management & Reporting", desc: "Developing tools for tracking, reporting, and reducing carbon emissions to support sustainability goals and compliance." },
          { icon: "👥", title: "Customer Engagement Platforms", desc: "Building user-friendly portals and mobile apps for energy consumers to monitor usage, manage accounts, and access personalized services." },
        ]}
        tools={["SCADA", "OSIsoft PI", "Siemens EnergyIP", "GE Predix", "AWS IoT", "Azure IoT", "Python", "R", "AI/ML Frameworks", "Blockchain"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Energy System Analysis", desc: "We conduct a thorough analysis of your energy infrastructure, operational challenges, and strategic objectives." },
          { num: "02", icon: "📐", title: "Solution Architecture & Design", desc: "Designing a robust, scalable, and secure software architecture tailored to your specific energy needs and regulatory requirements." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building and integrating solutions in iterative sprints, ensuring seamless compatibility with existing systems and hardware." },
          { num: "04", icon: "🚀", title: "Deployment & Performance Optimization", desc: "Implementing the solution with rigorous testing, providing comprehensive training, and offering ongoing support and optimization." },
        ]}
      />
<CTASection />
    </div>
  );
}