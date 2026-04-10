import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#84cc16"; // lime-500
const gradTo = "#16a34a"; // green-600
const grad = "from-lime-500 to-green-600";

export const metadata = {
  title: "Agriculture Tech Solutions | Geesha Solutions",
  description: "Revolutionizing agriculture with smart farming solutions, from precision agriculture and crop monitoring to supply chain traceability.",
};

export default function AgricultureIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Agriculture Industry"
        title="Cultivating the Future"
        highlight="of Agriculture."
        desc="We engineer innovative Agri-Tech solutions that empower farmers with data-driven insights, automate operations, and build a more sustainable and efficient food ecosystem."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🌱"
        badges={["Smart Farming", "Precision Agriculture", "IoT Sensors", "Drone Technology", "Supply Chain Traceability", "Crop Monitoring"]}
        stats={[
          { value: "20%", label: "Increased Yield" },
          { value: "30%", label: "Water Saved" },
          { value: "1M+", label: "Acres Monitored" },
          { value: "99.9%", label: "Platform Uptime" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Agri-Tech Solutions"
        serviceDesc="From seed to harvest to table, we build technology that enhances every stage of the agricultural value chain for greater productivity and sustainability."
        features={[
          { icon: "🛰️", title: "Precision Agriculture", desc: "GPS and sensor-based solutions for precise application of water, fertilizers, and pesticides, optimizing resource use." },
          { icon: "🌿", title: "AI-Powered Crop Monitoring", desc: "Using drones and satellite imagery with AI to monitor crop health, detect diseases, and predict yields." },
          { icon: "🌡️", title: "IoT for Smart Farming", desc: "Deploying IoT sensors to collect real-time data on soil moisture, weather conditions, and crop health." },
          { icon: "🔗", title: "Supply Chain Traceability", desc: "Blockchain-based systems to track produce from farm to consumer, ensuring food safety and transparency." },
          { icon: "🚜", title: "Farm Management Software (FMS)", desc: "Integrated platforms to manage farm operations, from planning and budgeting to inventory and labor management." },
          { icon: "📈", title: "Marketplace & E-commerce Platforms", desc: "Connecting farmers directly with buyers, reducing intermediaries and improving profitability." },
          { icon: "🤖", title: "Automation & Robotics", desc: "Developing solutions for automated irrigation, harvesting, and other labor-intensive farm tasks." },
          { icon: "📊", title: "Data Analytics & Insights", desc: "Providing farmers with actionable insights from their data to make informed decisions and improve efficiency." },
        ]}
        tools={["Python", "Node.js", "React", "AWS/GCP", "IoT", "Blockchain", "GIS", "TensorFlow", "Drones API"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🌾", title: "Needs Assessment", desc: "We analyze your specific agricultural challenges and goals to design a tailored technology solution." },
          { num: "02", icon: "🏗️", title: "System Architecture", desc: "Designing a scalable and robust architecture for data collection, processing, and visualization." },
          { num: "03", icon: "💻", title: "Agile Development", desc: "Building and integrating hardware and software components in agile sprints for rapid and effective deployment." },
          { num: "04", icon: "🚀", title: "Field Deployment & Support", desc: "Implementing the solution in the field with comprehensive training and ongoing support for farmers and staff." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "📈", title: "Increased Productivity & Yield", desc: "Optimize resource usage and improve crop health to maximize your harvest." },
          { icon: "💧", title: "Sustainable Practices", desc: "Reduce water consumption, minimize waste, and promote environmentally friendly farming." },
          { icon: "💡", title: "Data-Driven Farming", desc: "Make smarter, proactive decisions based on real-time data and predictive analytics." },
          { icon: "🔗", title: "Enhanced Transparency", desc: "Build trust with consumers through verifiable supply chain and food safety data." },
          { icon: "💰", title: "Improved Profitability", desc: "Reduce operational costs, access new markets, and increase the value of your produce." },
          { icon: "🤝", title: "Expert Agri-Tech Partner", desc: "Partner with a team that understands the intersection of technology and agriculture." },
        ]}
        otherServices={[
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Supply Chain", href: "/industries/supply-chain", icon: "🔗", grad: "from-slate-400 to-gray-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
        ]}
      />
    </div>
  );
}