import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#3b82f6"; // blue-500
const gradTo = "#4f46e5"; // indigo-600
const grad = "from-blue-500 to-indigo-600";

export const metadata = {
  title: "Manufacturing Industry Solutions | Geesha Solutions",
  description: "Empowering manufacturers with Industry 4.0 solutions, including smart factory automation, supply chain optimization, and predictive maintenance.",
};

export default function ManufacturingIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Manufacturing Industry"
        title="Innovating Production"
        highlight="for the Digital Age."
        desc="We develop cutting-edge software solutions that drive efficiency, optimize operations, and enable smart factories for the modern manufacturing industry."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🏭"
        badges={["Industry 4.0", "Smart Factory", "Supply Chain Optimization", "Robotics & Automation", "Predictive Maintenance", "MES & ERP Integration"]}
        stats={[
          { value: "25%", label: "Production Efficiency Increase" },
          { value: "18%", label: "Reduction in Downtime" },
          { value: "99.9%", label: "Quality Control Accuracy" },
          { value: "30%", label: "Supply Chain Cost Savings" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Advanced Software Solutions for Manufacturing Excellence"
        serviceDesc="From shop floor to top floor, our solutions integrate seamlessly to create intelligent, agile, and resilient manufacturing operations."
        features={[
          { icon: "🤖", title: "Smart Factory & Automation", desc: "Implementing IoT, AI, and robotics to automate processes, monitor production lines, and create self-optimizing factories." },
          { icon: "⛓️", title: "Supply Chain Optimization", desc: "Developing solutions for real-time visibility, demand forecasting, inventory management, and logistics optimization." },
          { icon: "📊", title: "Manufacturing Execution Systems (MES)", desc: "Building and integrating MES to manage and monitor work-in-process, production scheduling, and quality control." },
          { icon: "⚙️", title: "Predictive Maintenance", desc: "Leveraging sensor data and AI to predict equipment failures, minimize downtime, and extend asset lifespan." },
          { icon: "🔬", title: "Quality Management Systems (QMS)", desc: "Creating digital QMS for automated inspections, defect tracking, and ensuring compliance with industry standards." },
          { icon: "☁️", title: "Cloud-Native Manufacturing Platforms", desc: "Designing scalable and flexible cloud-based platforms for data aggregation, analytics, and application hosting." },
          { icon: "📈", title: "Manufacturing Data Analytics", desc: "Transforming raw production data into actionable insights for process improvement, cost reduction, and strategic decision-making." },
          { icon: "🔄", title: "ERP Integration & Customization", desc: "Seamlessly integrating with existing ERP systems (e.g., SAP, Oracle) and customizing functionalities to meet specific manufacturing needs." },
        ]}
        tools={["IoT Platforms", "AI/ML Frameworks", "Robotics APIs", "SCADA", "MES Software", "SAP MII", "Oracle EBS", "AWS IoT", "Azure IoT", "Google Cloud IoT"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Operational Assessment & Strategy", desc: "We analyze your current manufacturing processes, identify bottlenecks, and define a digital transformation roadmap." },
          { num: "02", icon: "📐", title: "Solution Design & Architecture", desc: "Designing a robust, scalable, and secure software architecture tailored to your production environment and business goals." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building and integrating solutions in iterative sprints, ensuring compatibility with existing machinery and enterprise systems." },
          { num: "04", icon: "🚀", title: "Deployment, Training & Support", desc: "Implementing the solution with minimal disruption, providing comprehensive training, and offering ongoing support and optimization." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚡", title: "Boost Operational Efficiency", desc: "Automate tasks, streamline workflows, and optimize resource utilization across your production lines." },
          { icon: "💰", title: "Reduce Costs & Waste", desc: "Minimize material waste, energy consumption, and operational expenses through intelligent process optimization." },
          { icon: "📈", title: "Improve Product Quality", desc: "Enhance quality control, reduce defects, and ensure consistent product standards with advanced monitoring and analytics." },
          { icon: "⏱️", title: "Accelerate Time-to-Market", desc: "Streamline product development and production cycles to bring new innovations to market faster." },
          { icon: "🛡️", title: "Enhance Supply Chain Resilience", desc: "Gain end-to-end visibility and agility to respond effectively to disruptions and market changes." },
          { icon: "💡", title: "Foster Innovation & Growth", desc: "Leverage cutting-edge technology to unlock new capabilities, improve competitiveness, and drive business growth." },
        ]}
        otherServices={[
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-500 to-pink-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Data & Analytics", href: "/services/data-analytics", icon: "📊", grad: "from-sky-500 to-indigo-600" },
        ]}
      />
    </div>
  );
}