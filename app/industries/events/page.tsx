import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Event Industry",
  title: "Powering Unforgettable Live",
  highlight: "and Virtual Experiences.",
  desc: "From corporate conferences to music festivals, we build robust event management platforms, ticketing systems, and engagement apps.",
  grad: "from-amber-500 to-orange-600",
  gradFrom: "#f59e0b", // amber-500
  gradTo: "#ea580c",   // orange-600
  emoji: "🗓️",
  badges: ["Event Management", "Ticketing Solutions", "Virtual Events", "Attendee Engagement"],
  stats: [
    { value: "1M+", label: "Tickets Sold" },
    { value: "500+", label: "Events Powered" },
    { value: "98%", label: "Attendee Satisfaction" },
    { value: "Seamless", label: "Check-in Process" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Events",
  serviceDesc: "We provide end-to-end tech solutions that streamline event organization and enhance attendee experience.",
  features: [
    { icon: "🎟️", title: "Ticketing & Registration", desc: "Scalable and secure platforms for ticket sales, attendee registration, and badge generation." },
    { icon: "📱", title: "Event Mobile Apps", desc: "Custom apps with schedules, speaker bios, interactive maps, and networking features." },
    { icon: "🌐", title: "Virtual & Hybrid Platforms", desc: "Engaging virtual event solutions with live streaming, Q&A, polling, and virtual booths." },
    { icon: "📊", title: "Post-Event Analytics", desc: "Dashboards to analyze attendance, engagement, and ROI for future event planning." },
  ],
  tools: ["Stripe", "Eventbrite API", "WebRTC", "React Native", "Google Maps API", "Node.js"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Requirement Gathering", desc: "Understanding your event's scale, audience, and unique needs to define the tech strategy.", icon: "📋" },
    { num: "02", title: "UX for Engagement", desc: "Designing intuitive interfaces for attendees, organizers, and sponsors for a seamless experience.", icon: "✨" },
    { num: "03", title: "Robust Platform Build", desc: "Developing a reliable and scalable backend to handle high-traffic registrations and live interactions.", icon: "⚙️" },
    { num: "04", title: "On-Site & Post-Event Support", desc: "Providing on-ground technical support during the event and post-event data analysis.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "Event Management Software Development | Geesha Solutions",
  description: "Custom software for the event industry, including ticketing platforms, event apps, and virtual/hybrid event solutions.",
};

export default function EventIndustryPage() {
  return (
    <main>
      <ServiceHero {...heroData} />
      <ServiceFeatures
        {...featuresData}
        grad={heroData.grad}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceProcess
        {...processData}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceCTA gradFrom={heroData.gradFrom} gradTo={heroData.gradTo} />
    </main>
  );
}