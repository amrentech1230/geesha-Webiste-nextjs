import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

const gradFrom = "#0ea5e9"; // sky-500
const gradTo = "#2563eb"; // blue-600
const grad = "from-sky-500 to-blue-600";

export const metadata = {
  title: "Aviation Industry Solutions | Geesha Solutions",
  description: "Building mission-critical software for the aviation industry, including flight operations, MRO systems, and passenger experience platforms.",
};

export default function AviationIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Aviation Industry"
        title="Engineering the Future"
        highlight="of Aviation."
        desc="We build mission-critical software solutions for the aviation industry, enhancing operational efficiency, safety, and passenger experience from the ground to the clouds."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🛫"
        badges={["Flight Operations", "MRO Systems", "Passenger Experience", "Airline Analytics", "In-Flight Entertainment", "Aviation Compliance"]}
        stats={[
          { value: "99.99%", label: "System Uptime" },
          { value: "15%", label: "Operational Cost Reduction" },
          { value: "50M+", label: "Passengers Processed" },
          { value: "24/7", label: "Global Support" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Comprehensive Software for Modern Airlines & Airports"
        serviceDesc="Our solutions cover the entire aviation ecosystem, from core airline operations to passenger-facing digital products."
        features={[
          { icon: "✈️", title: "Flight Operations & Crew Management", desc: "Developing systems for flight planning, scheduling, crew rostering, and real-time operational control." },
          { icon: "🔧", title: "Maintenance, Repair & Overhaul (MRO)", desc: "Creating software to manage aircraft maintenance schedules, inventory, and compliance with aviation standards." },
          { icon: "👥", title: "Passenger Service Systems (PSS)", desc: "Building platforms for reservations, ticketing, check-in, and loyalty programs to enhance the passenger journey." },
          { icon: "📊", title: "Airline Data Analytics", desc: "Leveraging data to optimize routes, predict maintenance needs, analyze passenger behavior, and improve revenue." },
          { icon: "🎬", title: "In-Flight Entertainment (IFE)", desc: "Designing and developing engaging and reliable in-flight entertainment and connectivity platforms." },
          { icon: "🛡️", title: "Safety & Compliance Management", desc: "Implementing software for safety reporting, risk management, and ensuring adherence to international aviation regulations." },
          { icon: "🛄", title: "Baggage Handling & Tracking", desc: "Creating systems for real-time baggage tracking and management to reduce mishandling and improve efficiency." },
          { icon: "🌍", title: "Air Traffic Management (ATM) Solutions", desc: "Developing software to support air traffic control, improving airspace capacity and safety." },
        ]}
        tools={["Amadeus API", "Sabre APIs", "SITA APIs", "Java", "Python", "Cloud Platforms (AWS, Azure)", "Big Data Technologies", "Mobile (iOS/Android)"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Requirement Analysis & Compliance Check", desc: "We analyze your operational needs and ensure all solutions are designed to meet strict aviation regulations and standards." },
          { num: "02", icon: "📐", title: "System Architecture & Integration", desc: "Designing a high-availability, secure, and scalable architecture that integrates with existing airline and airport systems." },
          { num: "03", icon: "💻", title: "Agile Development & Rigorous Testing", desc: "Building the software in agile sprints with a focus on reliability, and conducting extensive testing to ensure mission-critical performance." },
          { num: "04", icon: "🚀", title: "Deployment & 24/7 Support", desc: "Managing a seamless deployment process and providing round-the-clock support to ensure smooth and continuous operations." },
        ]}
      />
    <CTASection />
    </div>
  );
}