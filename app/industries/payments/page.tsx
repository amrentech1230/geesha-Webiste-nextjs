import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#f59e0b"; // amber-500
const gradTo = "#ef4444"; // red-500
const grad = "from-amber-500 to-red-500";

export const metadata = {
  title: "Payments Industry Solutions | Geesha Solutions",
  description: "Secure, scalable, and compliant payment solutions. We build payment gateways, digital wallets, and processing platforms for modern commerce.",
};

export default function PaymentsIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Payments Industry"
        title="Engineering Secure"
        highlight="Payment Solutions."
        desc="We build robust, scalable, and compliant payment gateways, processing platforms, and digital wallets that power modern commerce and ensure seamless user experiences."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="💳"
        badges={["Payment Gateways", "Digital Wallets", "PCI Compliance", "Stripe & Braintree", "Subscription Billing", "Fraud Detection"]}
        stats={[
          { value: "$1B+", label: "Processed Annually" },
          { value: "10M+", label: "Transactions Handled" },
          { value: "100%", label: "PCI DSS Compliant" },
          { value: "24/7", label: "System Monitoring" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Payment Solutions"
        serviceDesc="From initial transaction to settlement, we engineer every component of the payment lifecycle for security, speed, and reliability."
        features={[
          { icon: "💳", title: "Custom Payment Gateways", desc: "Bespoke gateway development to connect with multiple acquirers and payment methods worldwide." },
          { icon: "📱", title: "Digital & Mobile Wallets", desc: "Secure and user-friendly mobile wallets with NFC, QR code, and peer-to-peer payment capabilities." },
          { icon: "🛡️", title: "PCI DSS Compliance", desc: "Architecting solutions to meet rigorous PCI DSS standards, ensuring data security and reducing compliance scope." },
          { icon: "🔄", title: "Subscription & Recurring Billing", desc: "Sophisticated recurring payment systems with flexible plans, trial periods, and dunning management." },
          { icon: "🕵️", title: "Fraud Detection & Prevention", desc: "AI-powered fraud detection systems that analyze transaction patterns to minimize chargebacks and secure revenue." },
          { icon: "🌍", title: "Cross-Border Payments", desc: "Multi-currency processing, international settlement, and compliance with global payment regulations." },
          { icon: "📈", title: "Real-Time Reporting", desc: "Comprehensive dashboards for real-time monitoring of transaction volumes, success rates, and financial analytics." },
          { icon: "🔌", title: "Third-Party Integrations", desc: "Seamless integration with leading payment providers like Stripe, Braintree, Adyen, and PayPal." },
        ]}
        tools={["Stripe API", "Braintree SDK", "PayPal API", "Adyen", "PCI DSS", "Tokenization", "Node.js", "Java", "Go", "AWS/GCP", "Kubernetes", "Vault"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "📜", title: "Requirement Analysis", desc: "We analyze your business model, target markets, and regulatory requirements to define the optimal payment architecture." },
          { num: "02", icon: "🛡️", title: "Secure Architecture Design", desc: "Designing a secure, fault-tolerant, and scalable system architecture that adheres to PCI DSS and other security standards." },
          { num: "03", icon: "⚙️", title: "Agile Development & Integration", desc: "Building the core payment processing engine and integrating with banks, card networks, and third-party services." },
          { num: "04", icon: "🚀", title: "Launch & Optimization", desc: "Rigorous testing, deployment, and continuous monitoring to optimize for transaction success rates and system performance." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🔒", title: "Bank-Grade Security", desc: "Security is at the core of our development process, from tokenization to end-to-end encryption." },
          { icon: "⚡", title: "High-Speed Processing", desc: "Low-latency infrastructure designed to handle thousands of transactions per second." },
          { icon: "📈", title: "Built for Scale", desc: "Cloud-native architecture that scales seamlessly with your transaction volume." },
          { icon: "🌍", title: "Global Reach", desc: "Expertise in building systems that handle multiple currencies and international payment methods." },
          { icon: "🤝", title: "Compliance Expertise", desc: "Deep knowledge of the regulatory landscape, including PCI DSS, PSD2, and GDPR." },
          { icon: "🔧", title: "Long-Term Partnership", desc: "We provide ongoing maintenance, security updates, and 24/7 support for your payment infrastructure." },
        ]}
        otherServices={[
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}