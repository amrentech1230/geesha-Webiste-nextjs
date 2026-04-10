import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#6366f1"; // indigo-500
const gradTo = "#4f46e5"; // indigo-600
const grad = "from-indigo-500 to-indigo-600";

export const metadata = {
  title: "Politics & E-Governance Solutions | Geesha Solutions",
  description: "Innovative digital solutions for political campaigns, e-governance, public engagement, and secure data management.",
};

export default function PoliticsIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Politics & E-Governance"
        title="Empowering Digital"
        highlight="Political Engagement."
        desc="We develop innovative digital solutions for political campaigns, e-governance, public engagement, and secure data management, fostering transparency and citizen participation."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🗳️"
        badges={["E-Governance", "Campaign Management", "Public Engagement", "Policy Analysis", "Data Security", "Voter Analytics"]}
        stats={[
          { value: "100M+", label: "Voters Reached" },
          { value: "99.9%", label: "Data Security" },
          { value: "20%", label: "Increased Engagement" },
          { value: "24/7", label: "Platform Availability" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Political Tech Solutions"
        serviceDesc="From voter outreach to policy implementation, we engineer robust platforms that enhance communication, streamline operations, and build trust."
        features={[
          { icon: "🏛️", title: "E-Governance Platforms", desc: "Building secure and accessible digital platforms for government services, citizen interaction, and public administration." },
          { icon: "📣", title: "Campaign Management Systems", desc: "Integrated tools for voter targeting, volunteer coordination, fundraising, and communication for political campaigns." },
          { icon: "💬", title: "Public Engagement & Polling", desc: "Interactive platforms for citizen feedback, public consultations, surveys, and sentiment analysis." },
          { icon: "📊", title: "Policy Research & Analytics", desc: "Data-driven tools for analyzing policy impact, demographic trends, and public opinion to inform decision-making." },
          { icon: "🔒", title: "Secure Voting Solutions", desc: "Developing secure and verifiable digital voting systems and voter registration platforms." },
          { icon: "🌐", title: "Citizen Service Portals", desc: "User-friendly portals for citizens to access information, apply for services, and track requests efficiently." },
          { icon: "📈", title: "Voter Analytics & Outreach", desc: "Advanced analytics to understand voter behavior and optimize outreach strategies for maximum impact." },
          { icon: "🛡️", title: "Data Security & Compliance", desc: "Ensuring platforms meet stringent data privacy and security regulations for sensitive political and citizen data." },
        ]}
        tools={["Python", "Node.js", "React", "AWS/GCP", "Blockchain", "Data Analytics", "Machine Learning", "Cybersecurity Frameworks"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Strategic Planning", desc: "We analyze political objectives, target demographics, and regulatory landscapes to define a clear digital strategy." },
          { num: "02", icon: "🎨", title: "UX/UI Design & Prototyping", desc: "Crafting intuitive and accessible interfaces for diverse user groups, from citizens to campaign staff." },
          { num: "03", icon: "💻", title: "Secure Development & Integration", desc: "Building robust and secure platforms, integrating with necessary government databases and communication channels." },
          { num: "04", icon: "🚀", title: "Deployment & Continuous Support", desc: "Launching solutions with rigorous testing, followed by ongoing maintenance, security updates, and performance optimization." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🤝", title: "Increased Citizen Participation", desc: "Foster greater engagement and trust between government and citizens through accessible digital channels." },
          { icon: "✅", title: "Enhanced Transparency", desc: "Promote openness and accountability in governance and political processes." },
          { icon: "⚡", title: "Efficient Public Services", desc: "Streamline government operations and deliver services more effectively to the public." },
          { icon: "🔒", title: "Robust Data Security", desc: "Implement state-of-the-art security measures to protect sensitive political and personal data." },
          { icon: "📈", title: "Data-Driven Decision Making", desc: "Leverage analytics to inform policy, campaign strategies, and public outreach." },
          { icon: "🌍", title: "Scalable & Reliable Platforms", desc: "Build systems that can handle high traffic and critical operations with unwavering reliability." },
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