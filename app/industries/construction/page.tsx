import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#f59e0b"; // amber-500
const gradTo = "#ea580c"; // orange-600
const grad = "from-amber-500 to-orange-600";

export const metadata = {
  title: "Construction Industry Solutions | Geesha Solutions",
  description: "Developing innovative software for the construction industry, from project management and BIM to safety compliance and resource planning.",
};

export default function ConstructionIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Construction Industry"
        title="Building a Smarter"
        highlight="Construction Future."
        desc="We engineer digital solutions that streamline construction project management, enhance on-site safety, and optimize resource allocation from blueprint to completion."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🏗️"
        badges={["Project Management", "BIM Solutions", "ERP for Construction", "Safety & Compliance", "IoT & Asset Tracking", "Data Analytics"]}
        stats={[
          { value: "20%", label: "Increase in Efficiency" },
          { value: "15%", label: "Reduction in Project Costs" },
          { value: "99.8%", label: "On-Time Project Delivery" },
          { value: "30%", label: "Improved Safety Compliance" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Digital Solutions for the Modern Construction Site"
        serviceDesc="From groundbreaking to handover, our software empowers construction companies to build more efficiently, safely, and profitably."
        features={[
          { icon: "🏗️", title: "BIM & 3D Modeling Solutions", desc: "Developing custom tools for Building Information Modeling (BIM) to improve design visualization, clash detection, and collaboration." },
          { icon: "📋", title: "Project Management Platforms", desc: "Creating centralized platforms for scheduling, task management, document control, and real-time communication between field and office." },
          { icon: "📦", title: "Construction ERP Systems", desc: "Implementing and customizing Enterprise Resource Planning systems for managing financials, procurement, and human resources." },
          { icon: "👷", title: "Safety & Compliance Software", desc: "Building mobile-first applications for safety inspections, incident reporting, and ensuring regulatory compliance on-site." },
          { icon: "🛰️", title: "IoT & Asset Tracking", desc: "Using IoT sensors and GPS to track heavy equipment, manage inventory, and monitor site conditions in real-time." },
          { icon: "📈", title: "Predictive Analytics for Projects", desc: "Leveraging data analytics and AI to forecast project timelines, predict budget overruns, and identify potential risks." },
          { icon: "🤝", title: "Subcontractor & Vendor Portals", desc: "Developing secure portals for seamless collaboration, bidding, and payment processing with subcontractors and suppliers." },
          { icon: "📄", title: "Digital Twinning & As-Builts", desc: "Creating dynamic digital replicas of physical assets to monitor, analyze, and optimize performance throughout the building lifecycle." },
        ]}
        tools={["Autodesk Forge", "Revit API", "Procore API", "SAP S/4HANA", "IoT Sensors", "Drones", "React", "Python", "AWS/Azure"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "📝", title: "Needs Assessment & Workflow Analysis", desc: "We start by understanding your unique construction workflows, project challenges, and business goals to define the solution scope." },
          { num: "02", icon: "📐", title: "System Design & Integration Plan", desc: "Our team designs a scalable software architecture and plans for seamless integration with your existing tools like BIM and accounting software." },
          { num: "03", icon: "💻", title: "Agile Development & Field Testing", desc: "We build the software in iterative sprints and conduct rigorous testing with real users in field conditions to ensure usability and reliability." },
          { num: "04", icon: "🚀", title: "Deployment & On-Site Support", desc: "We manage the full deployment process and provide comprehensive training and on-site support to ensure smooth adoption by your team." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚙️", title: "Improved Project Efficiency", desc: "Streamline workflows, reduce rework, and automate manual tasks to keep your projects on schedule and on budget." },
          { icon: "🛡️", title: "Enhanced Safety & Compliance", desc: "Proactively manage job site safety with digital tools, reducing incidents and ensuring regulatory adherence." },
          { icon: "💰", title: "Better Cost Control", desc: "Gain real-time visibility into project financials, from bidding to completion, to make more profitable decisions." },
          { icon: "🤝", title: "Increased Collaboration", desc: "Break down silos between the field, office, and stakeholders with a single source of truth for all project data." },
          { icon: "📊", title: "Data-Driven Decision Making", desc: "Leverage powerful analytics to gain actionable insights, mitigate risks, and improve future project outcomes." },
          { icon: "🏆", title: "Gain a Competitive Edge", desc: "Embrace digital transformation to deliver higher quality projects faster and win more business." },
        ]}
        otherServices={[
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-500 to-pink-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Data & Analytics", href: "/services/data-analytics", icon: "📊", grad: "from-sky-500 to-indigo-600" },
        ]}
      />
    </div>
  );
}