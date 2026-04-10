import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Banking Industry",
  title: "Transforming Banking",
  highlight: "with Modern Digital Solutions.",
  desc: "We develop secure, scalable, and user-friendly digital banking platforms, core banking systems, and innovative financial tools to meet the demands of the modern banking sector.",
  grad: "from-green-400 to-emerald-600",
  gradFrom: "#4ade80", // green-400
  gradTo: "#059669",   // emerald-600
  emoji: "🏦",
  badges: ["Digital Banking", "Core Banking", "Security", "Compliance"],
  stats: [
    { value: "50M+", label: "Users Supported" },
    { value: "99.99%", label: "System Availability" },
    { value: "ISO 27001", label: "Certified" },
    { value: "20+", label: "Years Experience" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Banking",
  serviceDesc: "Our banking solutions are built for security, efficiency, and an enhanced customer experience, driving innovation in the financial sector.",
  features: [
    { icon: "💻", title: "Digital Banking Platforms", desc: "Intuitive and secure online and mobile banking applications for retail and corporate clients." },
    { icon: "⚙️", title: "Core Banking Systems", desc: "Development and modernization of robust core banking systems for efficient operations." },
    { icon: "🔒", title: "Fraud Detection & Security", desc: "Advanced AI-driven solutions for real-time fraud detection and enhanced cybersecurity." },
    { icon: "📊", title: "Customer Experience & Analytics", desc: "Personalized banking experiences and data analytics for deeper customer insights." },
  ],
  tools: ["Blockchain", "AI/ML", "Cloud Security", "API Integrations", "Data Encryption", "Biometric Authentication"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Regulatory Compliance", desc: "Ensuring all solutions adhere to global and local banking regulations (e.g., GDPR, KYC, AML).", icon: "⚖️" },
    { num: "02", title: "Security by Design", desc: "Implementing robust security measures from the ground up to protect sensitive financial data.", icon: "🛡️" },
    { num: "03", title: "Platform Modernization", desc: "Upgrading legacy systems to modern, scalable, and cloud-native architectures.", icon: "🔄" },
    { num: "04", title: "User-Centric Development", desc: "Designing intuitive interfaces and seamless user journeys for optimal customer engagement.", icon: "💡" },
  ],
};

export const metadata = {
  title: "Banking Solutions | Geesha Solutions",
  description: "Custom software development for the banking industry, including digital banking platforms, core banking systems, and secure financial tools.",
};

export default function BankingIndustryPage() {
  return (
    <main>
      <ServiceHero {...heroData} />
      <ServiceFeatures
        {...featuresData}
        grad={heroData.grad}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceProcess {...processData} gradFrom={heroData.gradFrom} gradTo={heroData.gradTo} />
      <CTASection />
    </main>
  );
}