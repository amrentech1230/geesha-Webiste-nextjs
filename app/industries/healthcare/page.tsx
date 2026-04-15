import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#ef4444"; // red-500
const gradTo = "#b91c1c";   // red-700
const grad = "from-red-500 to-red-700";

export const metadata = {
  title: "Healthcare Solutions | Geesha Solutions",
  description: "Innovative digital solutions for patient care, medical research, and health management to build a healthier future.",
};

export default function HealthcareIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Healthcare Industry"
        title="Engineering the Future"
        highlight="of Health."
        desc="We build secure, scalable, and compliant digital health platforms that improve patient outcomes, streamline clinical workflows, and accelerate medical innovation."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="❤️"
        badges={["Telemedicine", "EHR/EMR Systems", "Patient Portals", "Medical IoT", "HIPAA Compliance", "Health Analytics"]}
        stats={[
          { value: "1M+", label: "Patients Served" },
          { value: "99.9%", label: "HIPAA Compliance" },
          { value: "40%", label: "Reduced Wait Times" },
          { value: "50+", label: "Health Systems Integrated" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Healthcare Technology"
        serviceDesc="From patient engagement to clinical data management, we provide end-to-end solutions for the modern healthcare ecosystem."
        features={[
          { icon: "💻", title: "Telehealth & Virtual Care", desc: "Secure video consultation and remote patient monitoring platforms to expand access to care." },
          { icon: "📄", title: "EHR/EMR Integration", desc: "Seamless integration with existing Electronic Health Record systems for unified data flow." },
          { icon: "📱", title: "Patient Engagement Apps", desc: "Custom mobile applications for appointment scheduling, medication reminders, and health tracking." },
          { icon: "📊", title: "Healthcare Analytics", desc: "Advanced analytics to derive insights from clinical and operational data for better decision-making." },
          { icon: "🔒", title: "HIPAA-Compliant Cloud Solutions", desc: "Secure cloud infrastructure and data management that meets stringent healthcare regulations." },
          { icon: "⌚", title: "Medical IoT & Wearables", desc: "Connecting wearable devices and medical sensors for real-time health monitoring and alerts." },
          { icon: "💊", title: "Pharmacy Management Systems", desc: "Solutions for inventory management, e-prescribing, and medication dispensing." },
          { icon: "🔬", title: "Clinical Trial & Research Platforms", desc: "Software to manage clinical trials, collect data, and accelerate research timelines." },
        ]}
        tools={["React Native", "Next.js", "AWS/GCP (HIPAA)", "HL7/FHIR", "IoT", "Python", "PostgreSQL", "Kubernetes"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Compliance & Strategy", desc: "We start by understanding your clinical goals and regulatory requirements to build a compliant solution." },
          { num: "02", icon: "🎨", title: "Patient-Centric UX/UI", desc: "Designing intuitive and accessible interfaces for both patients and healthcare professionals." },
          { num: "03", icon: "💻", title: "Secure Development", desc: "Building the platform with a security-first approach, ensuring data privacy and integrity at every stage." },
          { num: "04", icon: "🚀", title: "Deployment & Integration", desc: "Deploying the solution and ensuring seamless integration with your existing hospital or clinic systems." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🌟", title: "Improved Patient Outcomes", desc: "Enhance patient care and engagement with accessible, user-friendly digital tools." },
          { icon: "⚙️", title: "Streamlined Operations", desc: "Automate clinical workflows, reduce administrative overhead, and improve efficiency." },
          { icon: "📈", title: "Data-Driven Insights", desc: "Leverage data to optimize care delivery, predict health trends, and manage resources." },
          { icon: "🔒", title: "Guaranteed Compliance", desc: "Build on a secure, HIPAA-compliant foundation to protect patient data and mitigate risk." },
          { icon: "🌐", title: "Scalable & Future-Ready", desc: "Create a flexible digital ecosystem that can grow and adapt to future healthcare demands." },
          { icon: "🤝", title: "Expert Health-Tech Partner", desc: "Collaborate with a team that deeply understands the technology and regulatory landscape of healthcare." },
        ]}
        otherServices={[
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
          { label: "Web Development", href: "/services/web-development", icon: "💻", grad: "from-blue-500 to-indigo-600" },
        ]}
      />
    </div>
  );
}