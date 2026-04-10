import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#22c55e"; // green-500
const gradTo = "#14b8a6"; // teal-500
const grad = "from-green-500 to-teal-500";

export const metadata = {
  title: "Lending Industry Solutions | Geesha Solutions",
  description: "Secure, scalable, and compliant lending platforms. We build solutions for loan origination, AI underwriting, and loan servicing.",
};

export default function LendingIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Lending Industry"
        title="Building Modern"
        highlight="Lending Platforms."
        desc="We engineer secure, scalable, and compliant lending platforms that automate loan origination, underwriting, and servicing for a seamless borrower experience."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="💳"
        badges={["Loan Origination", "AI Underwriting", "Peer-to-Peer Lending", "BNPL Solutions", "Compliance Automation", "Loan Servicing"]}
        stats={[
          { value: "$10B+", label: "Loan Volume Processed" },
          { value: "5M+", label: "Loans Originated" },
          { value: "50%", label: "Faster Decisions" },
          { value: "99.9%", label: "Platform Uptime" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Lending Technology"
        serviceDesc="From application to repayment, we build end-to-end digital lending solutions that reduce risk, improve efficiency, and delight borrowers."
        features={[
          { icon: "✍️", title: "Digital Loan Origination", desc: "Seamless, end-to-end digital onboarding and application processing for personal, mortgage, and business loans." },
          { icon: "🤖", title: "AI-Powered Underwriting", desc: "Automated credit scoring and decision engines using machine learning to assess risk with greater accuracy and speed." },
          { icon: "🛒", title: "Buy Now, Pay Later (BNPL)", desc: "Custom BNPL solutions for e-commerce and retail to boost sales, increase order value, and enhance customer loyalty." },
          { icon: "👥", title: "Peer-to-Peer (P2P) Lending", desc: "Platforms connecting individual borrowers with investors, managing the entire lifecycle from listing to repayment." },
          { icon: "⚙️", title: "Loan Management Systems", desc: "Comprehensive servicing platforms for automated payment processing, collections, and customer communications." },
          { icon: "⚖️", title: "Regulatory Compliance", desc: "Architecting systems with built-in compliance for regulations like TILA, ECOA, and local lending laws." },
          { icon: "📊", title: "Analytics & Reporting", desc: "Real-time dashboards for portfolio performance, risk exposure, and key lending metrics." },
          { icon: "🔌", title: "Third-Party Integrations", desc: "Secure integration with credit bureaus, bank APIs (Plaid), payment gateways, and identity verification services." },
        ]}
        tools={["Plaid API", "Node.js", "Python", "React", "AWS/GCP", "Kubernetes", "PostgreSQL", "Kafka", "Machine Learning", "Go"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "📜", title: "Strategy & Scoping", desc: "We analyze your lending model, target audience, and regulatory constraints to define the product roadmap." },
          { num: "02", icon: "🛡️", title: "Secure Architecture", desc: "Designing a scalable and secure system architecture focused on data protection and regulatory compliance." },
          { num: "03", icon: "💻", title: "Agile Development", desc: "Building the platform in iterative sprints, integrating with necessary third-party services like credit bureaus and payment gateways." },
          { num: "04", icon: "🚀", title: "Launch & Scale", desc: "Deploying the platform and providing ongoing support to ensure performance, security, and scalability as you grow." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚡", title: "Accelerate Loan Cycles", desc: "Automate manual processes to reduce the time from application to funding from days to minutes." },
          { icon: "🎯", title: "Improve Decision Accuracy", desc: "Leverage AI and alternative data to make more informed underwriting decisions and reduce default rates." },
          { icon: "📈", title: "Enhance Borrower Experience", desc: "Offer a fully digital, transparent, and user-friendly borrowing experience that builds trust." },
          { icon: "🔒", title: "Ensure Compliance", desc: "Navigate the complex regulatory landscape with a platform built with compliance at its core." },
          { icon: "🔧", title: "Flexible & Scalable", desc: "Our modular architecture allows you to easily launch new loan products and scale to millions of users." },
          { icon: "🤝", title: "Expert Partnership", desc: "Gain a long-term technology partner with deep expertise in the fintech and lending domains." },
        ]}
        otherServices={[
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}