import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#059669"; // emerald-600
const gradTo = "#10b981"; // emerald-500
const grad = "from-emerald-600 to-emerald-500";

export const metadata = {
  title: "CSR & Sustainability Solutions | Geesha Solutions",
  description: "Digital platforms for Corporate Social Responsibility (CSR), sustainability reporting, impact measurement, and community engagement.",
};

export default function CSRIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="CSR & Sustainability"
        title="Driving Positive"
        highlight="Social Impact."
        desc="We develop digital platforms for Corporate Social Responsibility (CSR), sustainability reporting, impact measurement, and community engagement, helping businesses achieve their social and environmental goals."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="💎"
        badges={["Impact Reporting", "Sustainability Platforms", "Volunteer Management", "Ethical Sourcing", "ESG Compliance", "Community Engagement"]}
        stats={[
          { value: "100+", label: "CSR Programs Managed" },
          { value: "50%", label: "Reduced Carbon Footprint" },
          { value: "1M+", label: "Volunteer Hours Tracked" },
          { value: "90%", label: "Stakeholder Satisfaction" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive CSR & Sustainability Technology"
        serviceDesc="From tracking environmental metrics to managing community projects, we build solutions that make your social impact measurable and transparent."
        features={[
          { icon: "📈", title: "Sustainability Reporting Platforms", desc: "Automated platforms for collecting, analyzing, and reporting environmental, social, and governance (ESG) data." },
          { icon: "🤝", title: "Volunteer & Donation Management", desc: "Tools to organize volunteer programs, track hours, manage donations, and measure community impact." },
          { icon: "🔗", title: "Ethical Supply Chain Tracking", desc: "Blockchain-powered or traditional systems to ensure transparency and ethical practices throughout your supply chain." },
          { icon: "📊", title: "ESG Data Management & Analytics", desc: "Centralized systems for managing ESG data, performing analytics, and generating insights for strategic decision-making." },
          { icon: "🌱", title: "Carbon Footprint Calculators", desc: "Custom tools to measure and monitor carbon emissions, helping businesses reduce their environmental impact." },
          { icon: "👥", title: "Community Engagement Platforms", desc: "Interactive platforms to connect with stakeholders, gather feedback, and foster collaborative social initiatives." },
          { icon: "🔒", title: "Compliance & Audit Tools", desc: "Solutions to ensure adherence to international CSR standards and facilitate external audits." },
          { icon: "💡", title: "Impact Storytelling & Communication", desc: "Digital tools to effectively communicate your CSR initiatives and their positive impact to a wider audience." },
        ]}
        tools={["Python", "Node.js", "React", "AWS/GCP", "Blockchain", "Data Analytics", "Power BI", "Tableau", "ESG Frameworks"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Strategy & Goal Definition", desc: "We work with you to define your CSR objectives, identify key metrics, and outline your sustainability roadmap." },
          { num: "02", icon: "🎨", title: "Solution Design", desc: "Designing intuitive platforms for data collection, reporting, and stakeholder engagement that align with your brand values." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building and integrating custom modules for impact tracking, volunteer management, and reporting with existing systems." },
          { num: "04", icon: "🚀", title: "Launch, Monitor & Report", desc: "Deploying the platform, providing continuous monitoring, and enabling comprehensive reporting on your CSR initiatives." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🌟", title: "Improved Brand Reputation", desc: "Showcase your commitment to social and environmental responsibility, enhancing public perception and trust." },
          { icon: "✅", title: "Measurable Social Impact", desc: "Quantify and report on your CSR initiatives, demonstrating tangible positive change." },
          { icon: "💰", title: "Enhanced Stakeholder Trust", desc: "Build stronger relationships with customers, employees, investors, and communities through transparent reporting." },
          { icon: "⚖️", title: "Regulatory Compliance", desc: "Ensure your business meets evolving ESG reporting standards and regulations." },
          { icon: "💡", title: "Operational Efficiency", desc: "Streamline the management of CSR programs, from data collection to impact assessment." },
          { icon: "🤝", title: "Strategic Partnership", desc: "Partner with a technology expert dedicated to helping you achieve your sustainability and social goals." },
        ]}
        otherServices={[
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}