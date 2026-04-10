import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#10b981"; // emerald-500
const gradTo = "#059669"; // emerald-600
const grad = "from-emerald-500 to-emerald-600";

export const metadata = {
  title: "Insurance Industry Solutions | Geesha Solutions",
  description: "Modern, scalable, and secure InsurTech solutions. We build platforms for policy management, claims processing, and customer engagement.",
};

export default function InsuranceIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Insurance Industry"
        title="Engineering the Future"
        highlight="of InsurTech."
        desc="We build robust, scalable, and secure platforms for policy administration, claims processing, underwriting automation, and customer engagement that are transforming the insurance landscape."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🛡️"
        badges={["Policy Management", "Claims Automation", "InsurTech Platforms", "AI Underwriting", "Customer Portals", "Telematics"]}
        stats={[
          { value: "10M+", label: "Policies Managed" },
          { value: "$500M+", label: "Claims Processed" },
          { value: "40%", label: "Faster Underwriting" },
          { value: "24/7", label: "Automated Processing" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive InsurTech Solutions"
        serviceDesc="From underwriting to claims settlement, we engineer every part of the insurance lifecycle for efficiency, accuracy, and a superior customer experience."
        features={[
          { icon: "📄", title: "Policy Administration Systems", desc: "End-to-end platforms for creating, managing, and renewing insurance policies with flexible product configuration." },
          { icon: "⚙️", title: "Automated Claims Processing", desc: "AI-powered claims intake, validation, and processing to reduce manual effort and accelerate settlement times." },
          { icon: "🤖", title: "AI-Powered Underwriting", desc: "Sophisticated underwriting engines that use AI to analyze risk, automate decisions, and improve accuracy." },
          { icon: "👥", title: "Digital Customer Portals", desc: "Self-service portals for policyholders to manage their policies, file claims, and interact with their insurer." },
          { icon: "🚗", title: "Telematics & IoT Solutions", desc: "Usage-based insurance (UBI) platforms that leverage telematics and IoT data for personalized pricing." },
          { icon: "🕵️", title: "Fraud Detection", desc: "Advanced analytics and machine learning models to detect and prevent fraudulent claims in real-time." },
          { icon: "🔌", title: "Third-Party API Integrations", desc: "Seamless integration with third-party data sources, payment gateways, and regulatory compliance systems." },
          { icon: "📈", title: "Analytics & Reporting", desc: "Comprehensive dashboards for real-time insights into policy data, claims trends, and business performance." },
        ]}
        tools={["Java", "Python", "Node.js", "React", "Angular", "AWS/GCP", "Kubernetes", "Drools", "TensorFlow", "PostgreSQL", "MongoDB", "Kafka"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "📜", title: "Requirement Analysis", desc: "We analyze your insurance products, business processes, and regulatory landscape to design a tailored solution." },
          { num: "02", icon: "🛡️", title: "System Architecture Design", desc: "Designing a secure, scalable, and compliant architecture for handling sensitive policyholder and claims data." },
          { num: "03", icon: "💻", title: "Agile Development", desc: "Building the core platform and features in agile sprints, with continuous feedback and integration." },
          { num: "04", icon: "🚀", title: "Deployment & Support", desc: "Ensuring a smooth launch with ongoing support, maintenance, and performance optimization." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🔒", title: "Regulatory Compliance", desc: "Deep expertise in insurance regulations like HIPAA and GDPR to ensure your platform is compliant." },
          { icon: "📈", title: "Operational Efficiency", desc: "Automate manual tasks, reduce processing times, and lower operational costs." },
          { icon: "👥", title: "Enhanced Customer Experience", desc: "Empower your customers with self-service tools and faster claims resolution." },
          { icon: "⚡", title: "Faster Time-to-Market", desc: "Launch new insurance products quickly with our flexible and configurable platforms." },
          { icon: "🛡️", title: "Bank-Grade Security", desc: "Implementing robust security measures to protect sensitive customer and financial data." },
          { icon: "🤝", title: "Long-Term Partnership", desc: "We provide continuous support and innovation to help you stay ahead in the evolving InsurTech landscape." },
        ]}
        otherServices={[
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}