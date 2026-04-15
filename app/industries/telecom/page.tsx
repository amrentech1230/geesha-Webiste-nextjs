import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#14b8a6"; // teal-500
const gradTo = "#0891b2"; // cyan-600
const grad = "from-teal-500 to-cyan-600";

export const metadata = {
  title: "Telecom Industry Solutions | Geesha Solutions",
  description: "Building next-generation telecom solutions, including OSS/BSS, network management, and customer experience platforms to drive connectivity and innovation.",
};

export default function TelecomIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Telecom Industry"
        title="Engineering the Future"
        highlight="of Connectivity."
        desc="We develop robust, scalable, and innovative software solutions for the telecommunications industry, enhancing network management, optimizing operations, and improving customer experience."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="📡"
        badges={["OSS/BSS Systems", "Network Automation", "5G & IoT Solutions", "Customer Experience", "Telecom Analytics", "Cloud Native Telecom"]}
        stats={[
          { value: "100M+", label: "Subscribers Managed" },
          { value: "40%", label: "Operational Cost Reduction" },
          { value: "99.999%", label: "Platform Reliability" },
          { value: "24/7", label: "Network Monitoring" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="End-to-End Telecom Software Solutions"
        serviceDesc="From core network functions to customer-facing applications, we provide the technology backbone for modern telecommunication providers."
        features={[
          { icon: "⚙️", title: "OSS/BSS Transformation", desc: "Modernizing Operations and Business Support Systems for improved efficiency, billing accuracy, and customer management." },
          { icon: "🤖", title: "Network Automation & Orchestration", desc: "Implementing intelligent automation for network provisioning, monitoring, and self-healing to reduce manual effort." },
          { icon: "📶", title: "5G & IoT Enablement Platforms", desc: "Building platforms to manage and monetize 5G network slicing and a massive number of IoT devices." },
          { icon: "👥", title: "Customer Experience Management", desc: "Creating unified portals and apps for self-service, personalized offers, and proactive customer support." },
          { icon: "📊", title: "Telecom Data Analytics", desc: "Leveraging big data and AI to gain insights into network performance, customer behavior, and churn prediction." },
          { icon: "☁️", title: "Cloud-Native & NFV Solutions", desc: "Developing Network Function Virtualization (NFV) and cloud-native applications for scalable and flexible network services." },
          { icon: "🛡️", title: "Telecom Security Solutions", desc: "Implementing robust security measures to protect network infrastructure and sensitive customer data from threats." },
          { icon: "💬", title: "Unified Communications (UC)", desc: "Integrating voice, video, and messaging services into seamless communication platforms for enterprises." },
        ]}
        tools={["Kubernetes", "Docker", "Prometheus", "ONAP", "AWS/Azure/GCP", "Python", "Go", "Big Data Stacks", "AI/ML Frameworks"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "📡", title: "Network & Business Analysis", desc: "We analyze your existing infrastructure, operational workflows, and business objectives to identify key areas for improvement." },
          { num: "02", icon: "🏗️", title: "Solution Architecture Design", desc: "Designing a resilient, scalable, and secure architecture for your telecom solution, whether it's on-premise, cloud, or hybrid." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building the platform in agile sprints, focusing on microservices, and ensuring seamless integration with legacy and third-party systems." },
          { num: "04", icon: "🚀", title: "Deployment & Optimization", desc: "Deploying the solution with zero downtime strategies and continuously monitoring and optimizing for performance and reliability." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚡", title: "Increased Agility", desc: "Respond faster to market changes with flexible, software-defined networking and service delivery." },
          { icon: "📉", title: "Reduced Operational Costs", desc: "Automate manual processes and optimize resource utilization to significantly lower your operational expenses." },
          { icon: "💡", title: "Accelerated Innovation", desc: "Launch new services and features faster with a modern, cloud-native architecture and DevOps practices." },
          { icon: "📈", title: "Enhanced Customer Loyalty", desc: "Improve customer satisfaction and reduce churn with personalized services and a superior digital experience." },
          { icon: "🔒", title: "Carrier-Grade Reliability", desc: "Build highly available and secure platforms that meet the stringent demands of the telecom industry." },
          { icon: "🤝", title: "Expert Technology Partner", desc: "Leverage our deep expertise in telecom, cloud, and AI to navigate your digital transformation journey." },
        ]}
        otherServices={[
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-500 to-pink-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}