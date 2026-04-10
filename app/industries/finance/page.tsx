import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Finance Industry",
  title: "Innovating Financial Services",
  highlight: "with Secure Digital Solutions.",
  desc: "We build robust and secure financial technology solutions, from banking platforms to investment tools, driving efficiency and enhancing user experience.",
  grad: "from-blue-400 to-indigo-600",
  gradFrom: "#60a5fa", // blue-400
  gradTo: "#4f46e5",   // indigo-600
  emoji: "💰",
  badges: ["FinTech", "Security", "Compliance", "Data Analytics"],
  stats: [
    { value: "100M+", label: "Transactions Processed" },
    { value: "99.99%", label: "Uptime" },
    { value: "PCI DSS", label: "Compliant" },
    { value: "50+", label: "Integrations" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Finance",
  serviceDesc: "Our financial solutions are designed for security, scalability, and seamless integration, empowering businesses and users alike.",
  features: [
    { icon: "🏦", title: "Digital Banking Platforms", desc: "Custom-built online and mobile banking solutions with advanced security features." },
    { icon: "📈", title: "Investment & Trading Tools", desc: "Real-time data, analytics, and execution platforms for modern investors." },
    { icon: "🔒", title: "Security & Compliance", desc: "Ensuring adherence to financial regulations like PCI DSS, GDPR, and AML." },
    { icon: "📊", title: "Financial Data Analytics", desc: "Leveraging AI and machine learning for fraud detection, risk assessment, and personalized insights." },
  ],
  tools: ["Blockchain", "AI/ML", "Cloud Security", "API Integrations", "Data Encryption"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Regulatory Analysis", desc: "Thorough understanding of financial regulations and compliance requirements.", icon: "⚖️" },
    { num: "02", title: "Security Architecture", desc: "Designing robust security frameworks to protect sensitive financial data.", icon: "🛡️" },
    { num: "03", title: "Platform Development", desc: "Building scalable and high-performance financial applications.", icon: "⚙️" },
    { num: "04", title: "Integration & Testing", desc: "Seamless integration with existing systems and rigorous testing for reliability.", icon: "✅" },
  ],
};

export const metadata = {
  title: "FinTech Solutions | Geesha Solutions",
  description: "Custom software development for the finance industry, including digital banking, investment platforms, and secure payment solutions.",
};

export default function FinanceIndustryPage() {
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