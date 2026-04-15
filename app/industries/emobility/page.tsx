import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

const gradFrom = "#6366f1"; // indigo-500
const gradTo = "#4f46e5"; // indigo-600
const grad = "from-indigo-500 to-indigo-600";

export const metadata = {
  title: "EMobility Industry Solutions | Geesha Solutions",
  description: "Developing innovative software for the EMobility sector, including EV charging solutions, fleet management, and smart transportation platforms.",
};

export default function EMobilityIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="EMobility Industry"
        title="Driving the Future"
        highlight="of Electric Transportation."
        desc="We engineer cutting-edge software solutions for the EMobility sector, powering electric vehicle charging networks, smart fleet management, and sustainable urban mobility."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🚗"
        badges={["EV Charging Solutions", "Fleet Management", "Battery Management", "Smart Grids Integration", "Autonomous Driving", "Mobility-as-a-Service"]}
        stats={[
          { value: "500k+", label: "Charging Sessions Managed" },
          { value: "20%", label: "Fleet Efficiency Increase" },
          { value: "99.9%", label: "Platform Uptime" },
          { value: "15%", label: "Energy Cost Reduction" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Software for the EMobility Ecosystem"
        serviceDesc="From charging infrastructure to intelligent vehicle systems, our solutions accelerate the adoption and efficiency of electric mobility."
        features={[
          { icon: "🔌", title: "EV Charging Network Management", desc: "Developing platforms for managing charging stations, user authentication, billing, and load balancing." },
          { icon: "🔋", title: "Battery Management Systems (BMS)", desc: "Software for optimizing battery performance, extending lifespan, and ensuring safety in electric vehicles." },
          { icon: "🚚", title: "Electric Fleet Management", desc: "Solutions for route optimization, energy consumption monitoring, predictive maintenance, and dispatch for EV fleets." },
          { icon: "🚦", title: "Smart Traffic & Urban Mobility", desc: "Building intelligent systems for traffic flow optimization, parking management, and integrating various mobility services." },
          { icon: "🌐", title: "V2X Communication Platforms", desc: "Enabling Vehicle-to-Everything (V2X) communication for enhanced safety, traffic efficiency, and smart city integration." },
          { icon: "🤖", title: "Autonomous Driving Software", desc: "Developing AI-powered software components for perception, decision-making, and control in self-driving electric vehicles." },
          { icon: "📊", title: "EMobility Data Analytics", desc: "Leveraging data from EVs and charging infrastructure to gain insights into usage patterns, energy demand, and operational efficiency." },
          { icon: "📱", title: "User & Driver Experience Apps", desc: "Creating intuitive mobile applications for EV drivers to find charging stations, manage charging, and access mobility services." },
        ]}
        tools={["OCPP", "OCPI", "MQTT", "AWS IoT", "Azure IoT", "Python", "C++", "TensorFlow", "ROS", "GraphQL"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Ecosystem Analysis & Strategy", desc: "We analyze your EMobility business model, market needs, and technical requirements to define a robust solution strategy." },
          { num: "02", icon: "📐", title: "Architecture Design & Integration", desc: "Designing a scalable, secure, and interoperable software architecture that integrates with existing and future EMobility infrastructure." },
          { num: "03", icon: "💻", title: "Agile Development & Testing", desc: "Building and rigorously testing the software in agile sprints, focusing on performance, reliability, and user experience." },
          { num: "04", icon: "🚀", title: "Deployment & Continuous Optimization", desc: "Implementing the solution with seamless deployment strategies and providing ongoing support and optimization for evolving EMobility demands." },
        ]}
      />
    <CTASection />

    </div>
  );
}