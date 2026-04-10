import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Education Industry",
  title: "Innovating Learning Experiences",
  highlight: "for the Digital Age.",
  desc: "Developing cutting-edge EdTech platforms, virtual classrooms, and educational management systems that empower students and educators.",
  grad: "from-green-500 to-emerald-600",
  gradFrom: "#22c55e", // green-500
  gradTo: "#059669",   // emerald-600
  emoji: "🎓",
  badges: ["E-Learning Platforms", "Virtual Classrooms", "Student Management", "Interactive Content"],
  stats: [
    { value: "500K+", label: "Students Reached" },
    { value: "100+", label: "Educational Institutions" },
    { value: "95%", label: "User Engagement" },
    { value: "Top Rated", label: "Learning Apps" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Education",
  serviceDesc: "We build comprehensive EdTech solutions that transform traditional learning into engaging digital experiences.",
  features: [
    { icon: "📚", title: "E-Learning Platforms", desc: "Customizable platforms for online courses, content delivery, and progress tracking." },
    { icon: "🧑‍🏫", title: "Virtual Classrooms", desc: "Interactive live class solutions with whiteboards, chat, and breakout rooms." },
    { icon: "📝", title: "Assessment & Grading", desc: "Automated tools for quizzes, assignments, and performance analytics." },
    { icon: "🤝", title: "Student & Teacher Portals", desc: "Dedicated portals for seamless communication, resource sharing, and administrative tasks." },
  ],
  tools: ["Moodle", "Canvas", "Zoom API", "Firebase", "React", "Node.js"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Curriculum Analysis", desc: "Understanding educational goals and content structure to design effective learning paths.", icon: "📖" },
    { num: "02", title: "Interactive UX/UI", desc: "Creating engaging and intuitive interfaces for students and educators of all ages.", icon: "✨" },
    { num: "03", title: "Scalable Platform Development", desc: "Building robust and secure platforms capable of handling large user bases and rich media content.", icon: "🌐" },
    { num: "04", title: "Deployment & Support", desc: "Launching the platform and providing continuous support and updates for optimal performance.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "Education App Development | Geesha Solutions",
  description: "Custom software solutions for the education industry, including e-learning platforms, virtual classrooms, and educational management systems.",
};

export default function EducationIndustryPage() {
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